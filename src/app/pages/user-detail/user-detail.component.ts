import { Component, OnInit, signal, computed, HostListener } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient }    from '@angular/common/http';
import { AuthService, UserRole } from '../../services/auth.service';
import { USER_ENDPOINTS }        from '../../core/constants/api.constants';
import { ROLE_META, ROLE_ORDER } from '../../core/constants/roles.constants';
import { ApiResponse, extractErrorMessage } from '../../core/models/api.models';

interface StaffDto {
  id:                string;
  employeeId:        number;
  firstName:         string;
  middleName:        string | null;
  lastName:          string;
  name:              string;
  email:             string;
  role:              UserRole;
  department:        string;
  isActive:          boolean;
  invitationPending: boolean;
  mobileNumber:      string;
  alternativePhone:  string | null;
  addressBuilding:   string | null;
  addressStreet:     string | null;
  addressCity:       string | null;
  addressState:      string | null;
  addressPostalCode: string | null;
  addressCountry:    string | null;
  createdAt:         string;
}

interface AuditLogEntry {
  id:        string;
  action:    string;
  actorName: string;
  detail:    string | null;
  createdAt: string;
}

type Tab    = 'overview' | 'contact' | 'address' | 'activity';
type Modal  = 'closed'   | 'status'  | 'role';

const CREATABLE_BY: Record<UserRole, UserRole[]> = {
  SUPER_ADMIN: ['ADMIN', 'SALES', 'INVENTORY', 'SUPPORT'],
  ADMIN:       ['SALES', 'INVENTORY', 'SUPPORT'],
  SALES:       ['INVENTORY', 'SUPPORT'],
  INVENTORY:   [],
  SUPPORT:     []
};

const ACTION_META: Record<string, { label: string; color: string; icon: string }> = {
  ACCOUNT_CREATED:      { label: 'Account created',   color: '#7C3AED', icon: 'person_add' },
  INVITATION_SENT:      { label: 'Invitation sent',   color: '#2874F0', icon: 'mail' },
  INVITATION_RESENT:    { label: 'Invitation resent', color: '#2874F0', icon: 'forward_to_inbox' },
  INVITATION_ACCEPTED:  { label: 'Account activated', color: '#16A34A', icon: 'how_to_reg' },
  ACCOUNT_ACTIVATED:    { label: 'Account enabled',   color: '#16A34A', icon: 'play_circle' },
  ACCOUNT_DEACTIVATED:  { label: 'Account disabled',  color: '#EF4444', icon: 'block' },
  ROLE_CHANGED:         { label: 'Role changed',      color: '#D97706', icon: 'manage_accounts' },
  PASSWORD_RESET:       { label: 'Password reset',    color: '#0891B2', icon: 'key' },
  LOGIN:                { label: 'Signed in',         color: '#6B7280', icon: 'login' },
};

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-detail.component.html',
  styleUrl:    './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {

  private readonly EP = USER_ENDPOINTS;

  // ── Page state ────────────────────────────────────────────────────────────
  staff    = signal<StaffDto | null>(null);
  loading  = signal(true);
  pageError = '';

  // ── Tabs ──────────────────────────────────────────────────────────────────
  activeTab: Tab = 'overview';

  // ── Audit logs ────────────────────────────────────────────────────────────
  auditLogs    = signal<AuditLogEntry[]>([]);
  auditLoading = false;

  // ── Actions dropdown ──────────────────────────────────────────────────────
  actionsOpen = false;

  // ── Modals ────────────────────────────────────────────────────────────────
  modal:        Modal   = 'closed';
  newStatus:    boolean = false;
  newRole:      UserRole | '' = '';
  actionLoading = false;
  actionError   = '';

  // ── Static data ───────────────────────────────────────────────────────────
  readonly allRoles = ROLE_ORDER as UserRole[];

  // ── Computed ──────────────────────────────────────────────────────────────
  isSuperAdmin = computed(() => this.auth.currentUser()?.role === 'SUPER_ADMIN');
  isAdminLevel = computed(() => this.auth.isAdminLevel());

  canManage = computed(() => {
    const s = this.staff();
    if (!s) return false;
    const myRole = this.auth.currentUser()?.role;
    if (myRole === 'SUPER_ADMIN') return true;
    return (CREATABLE_BY[myRole ?? 'SUPPORT'] ?? []).includes(s.role);
  });

  hasAnyAction = computed(() => {
    const s = this.staff();
    if (!s || !this.canManage()) return false;
    return s.invitationPending || this.isSuperAdmin() || this.isAdminLevel();
  });

  constructor(
    private route:  ActivatedRoute,
    private router: Router,
    private http:   HttpClient,
    public  auth:   AuthService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) { this.router.navigate(['/users']); return; }
    this.loadStaff(id);
  }

  // ── Data loading ──────────────────────────────────────────────────────────

  loadStaff(id: string) {
    this.loading.set(true);
    this.http.get<ApiResponse<StaffDto>>(this.EP.BY_ID(id)).subscribe({
      next: res => {
        this.staff.set(res.data ?? null);
        this.loading.set(false);
        if (res.data && this.isAdminLevel()) this.loadAuditLogs(res.data.id);
      },
      error: e => {
        this.pageError = extractErrorMessage(e, 'Could not load staff member.');
        this.loading.set(false);
      }
    });
  }

  loadAuditLogs(id: string) {
    this.auditLoading = true;
    this.http.get<ApiResponse<AuditLogEntry[]>>(this.EP.AUDIT_LOGS(id)).subscribe({
      next:  res => { this.auditLogs.set(res.data ?? []); this.auditLoading = false; },
      error: ()  => { this.auditLoading = false; }
    });
  }

  // ── Navigation ────────────────────────────────────────────────────────────

  goBack() { this.router.navigate(['/users']); }

  // ── Actions dropdown ──────────────────────────────────────────────────────

  toggleActions() { this.actionsOpen = !this.actionsOpen; }

  @HostListener('document:click', ['$event'])
  onDocumentClick(e: Event) {
    const target = e.target as HTMLElement;
    if (!target.closest('.ud-actions-wrap')) this.actionsOpen = false;
  }

  // ── Status change ─────────────────────────────────────────────────────────

  openStatusModal() {
    const s = this.staff();
    if (!s) return;
    this.newStatus  = !s.isActive;
    this.actionError = '';
    this.modal      = 'status';
    this.actionsOpen = false;
  }

  confirmStatus() {
    const s = this.staff();
    if (!s) return;
    this.actionLoading = true;
    this.http.patch<ApiResponse<void>>(this.EP.STATUS(s.id), { active: this.newStatus }).subscribe({
      next: () => {
        this.actionLoading = false;
        this.modal         = 'closed';
        this.loadStaff(s.id);
      },
      error: e => { this.actionLoading = false; this.actionError = extractErrorMessage(e, 'Action failed.'); }
    });
  }

  // ── Role change ───────────────────────────────────────────────────────────

  openRoleModal() {
    const s = this.staff();
    if (!s) return;
    this.newRole     = s.role;
    this.actionError = '';
    this.modal       = 'role';
    this.actionsOpen = false;
  }

  confirmRole() {
    const s = this.staff();
    if (!s || !this.newRole) return;
    this.actionLoading = true;
    this.http.patch<ApiResponse<void>>(this.EP.ROLE(s.id), { role: this.newRole }).subscribe({
      next: () => {
        this.actionLoading = false;
        this.modal         = 'closed';
        this.loadStaff(s.id);
      },
      error: e => { this.actionLoading = false; this.actionError = extractErrorMessage(e, 'Role change failed.'); }
    });
  }

  // ── Resend invitation ─────────────────────────────────────────────────────

  resendInvitation() {
    const s = this.staff();
    if (!s) return;
    this.actionsOpen = false;
    this.http.post<ApiResponse<void>>(this.EP.RESEND_INVITATION(s.id), {}).subscribe({
      next: () => this.loadAuditLogs(s.id),
      error: e => alert(extractErrorMessage(e, 'Failed to resend invitation.'))
    });
  }

  closeModal() { this.modal = 'closed'; this.actionError = ''; }

  // ── Display helpers ───────────────────────────────────────────────────────

  initials(s: StaffDto): string {
    const f = s.firstName?.[0] ?? '';
    const l = s.lastName?.[0]  ?? '';
    return (f + l).toUpperCase() || (s.name?.[0]?.toUpperCase() ?? '?');
  }

  roleName(role: UserRole):  string { return ROLE_META[role]?.name  ?? role; }
  roleColor(role: UserRole): string { return ROLE_META[role]?.color ?? '#6B7280'; }
  roleIcon(role: UserRole):  string { return ROLE_META[role]?.icon  ?? '👤'; }

  auditLabel(action: string): string { return ACTION_META[action]?.label ?? action; }
  auditColor(action: string): string { return ACTION_META[action]?.color ?? '#6B7280'; }
  auditIcon(action: string):  string { return ACTION_META[action]?.icon  ?? '•'; }

  formatEmpId(id: number): string {
    return 'EMP-' + String(id).padStart(4, '0');
  }

  formatDate(iso: string): string {
    return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  formatDateTime(iso: string): string {
    return new Date(iso).toLocaleString('en-IN', {
      day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });
  }

  hasAddress(s: StaffDto): boolean {
    return !!(s.addressBuilding || s.addressStreet || s.addressCity || s.addressState ||
              s.addressPostalCode || s.addressCountry);
  }
}
