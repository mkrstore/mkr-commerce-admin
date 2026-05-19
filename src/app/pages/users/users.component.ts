import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { Router }        from '@angular/router';
import { HttpClient }    from '@angular/common/http';
import { AuthService, UserRole } from '../../services/auth.service';
import { USER_ENDPOINTS }        from '../../core/constants/api.constants';
import { ROLE_META, ROLE_ORDER } from '../../core/constants/roles.constants';
import { ApiResponse, extractErrorMessage } from '../../core/models/api.models';
import { AppInputComponent, AppSelectComponent, AppBtnComponent, SelectOption } from '../../shared/ui';

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
  createdAt:         string;
}

interface PageData<T> {
  content:       T[];
  totalElements: number;
  totalPages:    number;
  number:        number;
  size:          number;
}

const CREATABLE_BY: Record<UserRole, UserRole[]> = {
  SUPER_ADMIN: ['ADMIN', 'SALES', 'INVENTORY', 'SUPPORT'],
  ADMIN:       ['ADMIN', 'SALES', 'INVENTORY', 'SUPPORT'],
  SALES:       ['SALES', 'INVENTORY', 'SUPPORT'],
  INVENTORY:   [],
  SUPPORT:     []
};

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule, AppInputComponent, AppSelectComponent, AppBtnComponent],
  templateUrl: './users.component.html',
  styleUrl:    './users.component.scss'
})
export class UsersComponent implements OnInit {

  private readonly EP = USER_ENDPOINTS;

  // ── List state ────────────────────────────────────────────────────────────
  staff       = signal<StaffDto[]>([]);
  loading     = signal(true);
  totalCount  = signal(0);
  currentPage = signal(0);
  totalPages  = signal(0);

  roleFilter:   UserRole | '' = '';
  statusFilter: '' | 'true' | 'false' = '';
  searchQuery   = '';

  skeletonRows = Array(8);

  // ── Create modal ──────────────────────────────────────────────────────────
  createOpen    = false;
  createSuccess = '';
  createError   = '';
  creating      = false;
  formStep      = 1;
  step1Touched  = false;
  step2Touched  = false;

  form = {
    firstName: '', middleName: '', lastName: '', email: '',
    role: '' as UserRole | '', department: '',
    mobileNumber: '', alternativePhone: '',
    addressBuilding: '', addressStreet: '', addressCity: '',
    addressState: '', addressPostalCode: '', addressCountry: '',
  };

  // ── Computed ──────────────────────────────────────────────────────────────
  creatableRoles = computed<UserRole[]>(() => {
    const role = this.auth.currentUser()?.role;
    return role ? (CREATABLE_BY[role] ?? []) : [];
  });

  canCreate = computed(() => this.creatableRoles().length > 0);

  visibleRoles = computed<UserRole[]>(() => {
    const role = this.auth.currentUser()?.role;
    if (role === 'SUPER_ADMIN' || role === 'ADMIN') return ROLE_ORDER as UserRole[];
    return CREATABLE_BY[role ?? 'SUPPORT'] ?? [];
  });

  previewFullName = computed(() =>
    [this.form.firstName, this.form.middleName, this.form.lastName]
      .filter(p => p.trim()).join(' ')
  );

  pageNumbers = computed<(number | -1)[]>(() => {
    const total = this.totalPages();
    const cur   = this.currentPage();
    if (total <= 7) return Array.from({ length: total }, (_, i) => i);
    const pages: (number | -1)[] = [0];
    if (cur > 2) pages.push(-1);
    for (let i = Math.max(1, cur - 1); i <= Math.min(total - 2, cur + 1); i++) pages.push(i);
    if (cur < total - 3) pages.push(-1);
    pages.push(total - 1);
    return pages;
  });

  allRoles = ROLE_ORDER as UserRole[];

  roleSelectOptions = computed<SelectOption[]>(() =>
    this.creatableRoles().map(r => ({ value: r, label: this.roleName(r) }))
  );

  get hasActiveFilters(): boolean {
    return !!(this.searchQuery || this.roleFilter || this.statusFilter);
  }

  constructor(
    private http:   HttpClient,
    private router: Router,
    public  auth:   AuthService
  ) {}

  ngOnInit() { this.loadStaff(); }

  // ── Load ──────────────────────────────────────────────────────────────────

  loadStaff(page = 0) {
    this.loading.set(true);
    const params: Record<string, string> = { page: String(page), size: '20' };
    if (this.roleFilter)   params['role']   = this.roleFilter;
    if (this.statusFilter) params['active']  = this.statusFilter;
    if (this.searchQuery)  params['search']  = this.searchQuery.trim();

    this.http.get<ApiResponse<PageData<StaffDto>>>(this.EP.BASE, { params }).subscribe({
      next: res => {
        this.staff.set(res.data?.content ?? []);
        this.totalCount.set(res.data?.totalElements ?? 0);
        this.totalPages.set(res.data?.totalPages ?? 0);
        this.currentPage.set(res.data?.number ?? 0);
        this.loading.set(false);
      },
      error: () => { this.loading.set(false); }
    });
  }

  onFilterChange() { this.loadStaff(0); }

  clearFilters() {
    this.searchQuery  = '';
    this.roleFilter   = '';
    this.statusFilter = '';
    this.loadStaff(0);
  }

  goToPage(page: number) {
    if (page >= 0 && page < this.totalPages()) this.loadStaff(page);
  }

  // ── Row click → detail page ───────────────────────────────────────────────

  openDetail(id: string) {
    this.router.navigate(['/users', id]);
  }

  // ── Create ────────────────────────────────────────────────────────────────

  openCreate() {
    this.form = {
      firstName: '', middleName: '', lastName: '', email: '',
      role: this.creatableRoles()[0] ?? '' as any, department: '',
      mobileNumber: '', alternativePhone: '',
      addressBuilding: '', addressStreet: '', addressCity: '',
      addressState: '', addressPostalCode: '', addressCountry: '',
    };
    this.createError = ''; this.createSuccess = '';
    this.creating    = false; this.formStep = 1;
    this.step1Touched = false; this.step2Touched = false;
    this.createOpen  = true;
  }

  closeCreate() { this.createOpen = false; this.createSuccess = ''; }

  tryNextStep() {
    if (this.formStep === 1) {
      this.step1Touched = true;
      if (!this.step1Valid()) return;
    } else if (this.formStep === 2) {
      this.step2Touched = true;
      if (!this.step2Valid()) return;
    }
    if (this.formStep < 3) this.formStep++;
  }

  nextStep() { if (this.formStep < 3) this.formStep++; }
  prevStep() { if (this.formStep > 1) this.formStep--; }

  step1Valid(): boolean {
    return !!(this.form.firstName.trim() && this.form.lastName.trim() &&
              this.form.email.trim() && this.form.role && this.form.department.trim());
  }

  step2Valid(): boolean { return !!this.form.mobileNumber.trim(); }

  submitCreate() {
    if (!this.step1Valid() || !this.step2Valid()) return;
    this.createError = ''; this.createSuccess = ''; this.creating = true;

    const payload = {
      firstName:         this.form.firstName.trim(),
      middleName:        this.form.middleName.trim() || null,
      lastName:          this.form.lastName.trim(),
      email:             this.form.email.trim(),
      role:              this.form.role,
      department:        this.form.department.trim(),
      mobileNumber:      this.form.mobileNumber.trim(),
      alternativePhone:  this.form.alternativePhone.trim() || null,
      addressBuilding:   this.form.addressBuilding.trim() || null,
      addressStreet:     this.form.addressStreet.trim() || null,
      addressCity:       this.form.addressCity.trim() || null,
      addressState:      this.form.addressState.trim() || null,
      addressPostalCode: this.form.addressPostalCode.trim() || null,
      addressCountry:    this.form.addressCountry.trim() || null,
    };

    this.http.post<ApiResponse<StaffDto>>(this.EP.BASE, payload).subscribe({
      next: res => { this.creating = false; this.createSuccess = res.message ?? 'Invitation sent.'; this.loadStaff(0); },
      error: e  => { this.creating = false; this.createError = extractErrorMessage(e, 'Failed to create staff member.'); }
    });
  }

  // ── Helpers ───────────────────────────────────────────────────────────────

  initials(member: StaffDto): string {
    const f = member.firstName?.[0] ?? '';
    const l = member.lastName?.[0]  ?? '';
    return (f + l).toUpperCase() || (member.name?.[0]?.toUpperCase() ?? '?');
  }

  roleName(role: UserRole):  string { return ROLE_META[role]?.name  ?? role; }
  roleColor(role: UserRole): string { return ROLE_META[role]?.color ?? '#6B7280'; }
  formatEmpId(id: number): string   { return 'EMP-' + String(id).padStart(4, '0'); }
}
