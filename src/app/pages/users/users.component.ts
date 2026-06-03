import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { Router }        from '@angular/router';
import { HttpClient }    from '@angular/common/http';
import { AuthService, UserRole } from '../../services/auth.service';
import { USER_ENDPOINTS }        from '../../core/constants/api.constants';
import { ROLE_META, ROLE_ORDER } from '../../core/constants/roles.constants';
import { ApiResponse, extractErrorMessage } from '../../core/models/api.models';
import { AppInputComponent, AppSelectComponent, AppBtnComponent, AppPhoneInputComponent, SelectOption } from '../../shared/ui';
import {
  validateName, validateEmail, validateIndianMobile,
  validatePostalCode, validateAlphaSpace
} from '../../core/utils/validation.utils';

interface StaffDto {
  id: string; employeeId: number; firstName: string; middleName: string | null;
  lastName: string; name: string; email: string; role: UserRole; department: string;
  isActive: boolean; invitationPending: boolean; mobileNumber: string;
  alternativePhone: string | null; createdAt: string;
}
interface PageData<T> { content: T[]; totalElements: number; totalPages: number; number: number; size: number; }
const CREATABLE_BY: Record<UserRole, UserRole[]> = {
  SUPER_ADMIN: ['ADMIN','SALES','INVENTORY','SUPPORT'],
  ADMIN: ['ADMIN','SALES','INVENTORY','SUPPORT'],
  SALES: ['SALES','INVENTORY','SUPPORT'],
  INVENTORY: [], SUPPORT: []
};

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule, AppInputComponent, AppSelectComponent, AppBtnComponent, AppPhoneInputComponent],
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
  skeletonRows  = Array(8);

  // ── Create modal ──────────────────────────────────────────────────────────
  createOpen    = false;
  createSuccess = '';
  createError   = '';
  creating      = false;
  formStep      = 1;
  step1Touched  = false;
  step2Touched  = false;
  step3Touched  = false;

  form = {
    firstName: '', middleName: '', lastName: '', email: '',
    role: '' as UserRole | '', department: '',
    mobileNumber: '', alternativePhone: '',
    addressBuilding: '', addressStreet: '', addressCity: '',
    addressState: '', addressPostalCode: '', addressCountry: '',
  };

  formErrors = {
    firstName:    null as string | null,
    middleName:   null as string | null,
    lastName:     null as string | null,
    email:        null as string | null,
    emailDupe:    null as string | null,
    mobileNumber: null as string | null,
    phoneDupe:    null as string | null,
    altPhone:     null as string | null,
    city:         null as string | null,
    state:        null as string | null,
    country:      null as string | null,
    postalCode:   null as string | null,
  };

  emailChecking = false;
  phoneChecking = false;
  private emailCheckTimer: ReturnType<typeof setTimeout> | null = null;
  private phoneCheckTimer: ReturnType<typeof setTimeout> | null = null;

  get emailError(): string | null { return this.formErrors.email || this.formErrors.emailDupe; }
  get phoneError(): string | null { return this.formErrors.mobileNumber || this.formErrors.phoneDupe; }

  // ── Computed ──────────────────────────────────────────────────────────────
  creatableRoles = computed<UserRole[]>(() => {
    const role = this.auth.currentUser()?.role;
    return role ? (CREATABLE_BY[role] ?? []) : [];
  });
  canCreate    = computed(() => this.creatableRoles().length > 0);
  visibleRoles = computed<UserRole[]>(() => {
    const role = this.auth.currentUser()?.role;
    if (role === 'SUPER_ADMIN' || role === 'ADMIN') return ROLE_ORDER as UserRole[];
    return CREATABLE_BY[role ?? 'SUPPORT'] ?? [];
  });

  previewFullName(): string {
    return [this.form.firstName, this.form.middleName, this.form.lastName]
      .filter(p => (p ?? '').trim()).join(' ');
  }

  pageNumbers = computed<(number | -1)[]>(() => {
    const total = this.totalPages(), cur = this.currentPage();
    if (total <= 7) return Array.from({ length: total }, (_, i) => i);
    const pages: (number | -1)[] = [0];
    if (cur > 2) pages.push(-1);
    for (let i = Math.max(1, cur-1); i <= Math.min(total-2, cur+1); i++) pages.push(i);
    if (cur < total-3) pages.push(-1);
    pages.push(total-1);
    return pages;
  });

  allRoles = ROLE_ORDER as UserRole[];
  roleSelectOptions = computed<SelectOption[]>(() =>
    this.creatableRoles().map(r => ({ value: r, label: this.roleName(r) }))
  );
  get hasActiveFilters(): boolean { return !!(this.searchQuery || this.roleFilter || this.statusFilter); }

  constructor(private http: HttpClient, private router: Router, public auth: AuthService) {}
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
  clearFilters() { this.searchQuery = ''; this.roleFilter = ''; this.statusFilter = ''; this.loadStaff(0); }
  goToPage(page: number) { if (page >= 0 && page < this.totalPages()) this.loadStaff(page); }
  openDetail(id: string) { this.router.navigate(['/users', id]); }

  // ── Create ────────────────────────────────────────────────────────────────
  openCreate() {
    this.form = {
      firstName: '', middleName: '', lastName: '', email: '',
      role: this.creatableRoles()[0] ?? '' as any, department: '',
      mobileNumber: '', alternativePhone: '',
      addressBuilding: '', addressStreet: '', addressCity: '',
      addressState: '', addressPostalCode: '', addressCountry: '',
    };
    this.formErrors = {
      firstName: null, middleName: null, lastName: null,
      email: null, emailDupe: null,
      mobileNumber: null, phoneDupe: null, altPhone: null,
      city: null, state: null, country: null, postalCode: null,
    };
    this.emailChecking = false; this.phoneChecking = false;
    if (this.emailCheckTimer) clearTimeout(this.emailCheckTimer);
    if (this.phoneCheckTimer) clearTimeout(this.phoneCheckTimer);
    this.createError = ''; this.createSuccess = ''; this.creating = false;
    this.formStep = 1;
    this.step1Touched = false; this.step2Touched = false; this.step3Touched = false;
    this.createOpen = true;
  }
  closeCreate() { this.createOpen = false; this.createSuccess = ''; }

  // ── Field handlers ────────────────────────────────────────────────────────
  onNameChange(field: 'firstName' | 'middleName' | 'lastName', raw: string) {
    this.form[field] = raw;
    const isOptional = field === 'middleName';
    this.formErrors[field] = (isOptional && !raw.trim()) ? null : validateName(raw);
  }

  onEmailChange(val: string) {
    this.form.email = val;
    this.formErrors.email = validateEmail(val);
    this.formErrors.emailDupe = null;
    if (this.emailCheckTimer) clearTimeout(this.emailCheckTimer);
    if (!this.formErrors.email && val.trim()) {
      this.emailChecking = true;
      this.emailCheckTimer = setTimeout(() => {
        this.http.get<ApiResponse<{ emailTaken?: boolean }>>
          (this.EP.CHECK, { params: { email: val.trim() } })
          .subscribe({
            next: res => {
              this.emailChecking = false;
              this.formErrors.emailDupe = res.data?.emailTaken
                ? 'This email is already registered to another staff member' : null;
            },
            error: () => { this.emailChecking = false; }
          });
      }, 500);
    } else {
      this.emailChecking = false;
    }
  }

  onPhoneChange(val: string) {
    this.form.mobileNumber = val;
    this.formErrors.mobileNumber = validateIndianMobile(val);
    this.formErrors.phoneDupe = null;
    if (this.phoneCheckTimer) clearTimeout(this.phoneCheckTimer);
    if (!this.formErrors.mobileNumber && val.trim()) {
      this.phoneChecking = true;
      this.phoneCheckTimer = setTimeout(() => {
        this.http.get<ApiResponse<{ phoneTaken?: boolean }>>
          (this.EP.CHECK, { params: { phone: val.trim() } })
          .subscribe({
            next: res => {
              this.phoneChecking = false;
              this.formErrors.phoneDupe = res.data?.phoneTaken
                ? 'This number is already registered to another staff member' : null;
            },
            error: () => { this.phoneChecking = false; }
          });
      }, 500);
    } else {
      this.phoneChecking = false;
    }
  }

  onAltPhoneChange(val: string) {
    this.form.alternativePhone = val;
    this.formErrors.altPhone = val.trim() ? validateIndianMobile(val) : null;
  }

  onAlphaSpaceChange(field: 'city' | 'state' | 'country', val: string) {
    if (field === 'city')    this.form.addressCity    = val;
    if (field === 'state')   this.form.addressState   = val;
    if (field === 'country') this.form.addressCountry = val;
    this.formErrors[field] = val.trim() ? validateAlphaSpace(val) : null;
  }

  onPostalChange(val: string) {
    this.form.addressPostalCode = val;
    this.formErrors.postalCode = validatePostalCode(val);
  }

  // ── Step validation ───────────────────────────────────────────────────────
  tryNextStep() {
    if (this.formStep === 1) {
      this.step1Touched = true;
      // Run all step 1 validations explicitly so errors show
      if (!this.form.firstName.trim()) this.formErrors.firstName = this.formErrors.firstName ?? 'First name is required';
      if (!this.form.lastName.trim())  this.formErrors.lastName  = this.formErrors.lastName  ?? 'Last name is required';
      if (!this.form.email.trim())     this.formErrors.email     = this.formErrors.email     ?? 'Email is required';
      if (!this.step1Valid()) return;
    } else if (this.formStep === 2) {
      this.step2Touched = true;
      if (!this.form.mobileNumber.trim()) this.formErrors.mobileNumber = this.formErrors.mobileNumber ?? 'Mobile number is required';
      if (!this.step2Valid()) return;
    }
    if (this.formStep < 3) this.formStep++;
  }

  prevStep() { if (this.formStep > 1) this.formStep--; }

  step1Valid(): boolean {
    if (this.emailChecking) return false;
    return !!(
      this.form.firstName.trim() && !this.formErrors.firstName &&
      this.form.lastName.trim()  && !this.formErrors.lastName &&
      !this.formErrors.middleName &&
      this.form.email.trim() && !this.emailError &&
      this.form.role &&
      this.form.department.trim()
    );
  }

  step2Valid(): boolean {
    if (this.phoneChecking) return false;
    return !!(
      this.form.mobileNumber.trim() && !this.phoneError &&
      (!this.form.alternativePhone.trim() || !this.formErrors.altPhone)
    );
  }

  step3Valid(): boolean {
    return !this.formErrors.postalCode && !this.formErrors.city &&
           !this.formErrors.state && !this.formErrors.country;
  }

  submitCreate() {
    this.step3Touched = true;
    if (!this.step1Valid() || !this.step2Valid() || !this.step3Valid()) return;
    this.createError = ''; this.createSuccess = ''; this.creating = true;
    const payload = {
      firstName:         this.form.firstName.trim(),
      middleName:        this.form.middleName.trim() || null,
      lastName:          this.form.lastName.trim(),
      email:             this.form.email.trim().toLowerCase(),
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
    const f = member.firstName?.[0] ?? '', l = member.lastName?.[0] ?? '';
    return (f + l).toUpperCase() || (member.name?.[0]?.toUpperCase() ?? '?');
  }
  roleName(role: UserRole):  string { return ROLE_META[role]?.name  ?? role; }
  roleColor(role: UserRole): string { return ROLE_META[role]?.color ?? '#6B7280'; }
  formatEmpId(id: number): string   { return 'EMP-' + String(id).padStart(4, '0'); }
}
