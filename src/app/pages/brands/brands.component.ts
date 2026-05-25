import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { HttpClient }   from '@angular/common/http';
import { AuthService }  from '../../services/auth.service';
import { PRODUCT_ENDPOINTS } from '../../core/constants/api.constants';
import { ApiResponse, extractErrorMessage } from '../../core/models/api.models';
import { AppInputComponent, AppTextareaComponent, AppCheckboxComponent, AppBtnComponent, AppSelectComponent } from '../../shared/ui';

interface BrandDto {
  id: string; name: string; slug: string;
  logoUrl: string | null; logoIsVideo: boolean; description: string | null;
  isActive: boolean; createdAt: string; updatedAt: string;
}

interface PageData<T> { content: T[]; totalElements: number; totalPages: number; number: number; }

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule, FormsModule, AppInputComponent, AppTextareaComponent, AppCheckboxComponent, AppBtnComponent, AppSelectComponent],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent implements OnInit {

  private readonly BASE = PRODUCT_ENDPOINTS.BRANDS;

  // ── List ──────────────────────────────────────────────────────────────────
  brands      = signal<BrandDto[]>([]);
  loading     = signal(true);
  totalCount  = signal(0);
  totalPages  = signal(0);
  currentPage = signal(0);
  skeletonRows = Array(8);

  view: 'cards' | 'table' | 'compact' = 'cards';

  activeFilter: '' | 'true' | 'false' = '';
  searchQuery = '';
  slugEdited = false;

  // ── Modal ─────────────────────────────────────────────────────────────────
  modalMode: 'closed' | 'create' | 'edit' = 'closed';
  saving      = false;
  modalError  = '';
  formTouched = false;
  editTarget: BrandDto | null = null;

  form = { name: '', slug: '', description: '', isActive: true };

  // ── Logo upload ───────────────────────────────────────────────────────────
  logoUploading  = false;
  logoError      = '';
  uploadLogoType: 'image' | 'video' = 'image';

  // Staged logo for create mode (uploaded after brand is saved)
  stagedLogoFile:    File | null   = null;
  stagedLogoPreview: string | null = null;

  // ── Delete ────────────────────────────────────────────────────────────────
  deleteTarget: BrandDto | null = null;
  deleting    = false;
  deleteError = '';

  // ── Computed ──────────────────────────────────────────────────────────────
  canManage = computed(() => {
    const r = this.auth.currentUser()?.role;
    return r === 'SUPER_ADMIN' || r === 'ADMIN' || r === 'INVENTORY';
  });

  pageNumbers = computed<(number | -1)[]>(() => {
    const total = this.totalPages(), cur = this.currentPage();
    if (total <= 7) return Array.from({ length: total }, (_, i) => i);
    const pages: (number | -1)[] = [0];
    if (cur > 2) pages.push(-1);
    for (let i = Math.max(1, cur-1); i <= Math.min(total-2, cur+1); i++) pages.push(i);
    if (cur < total - 3) pages.push(-1);
    pages.push(total - 1);
    return pages;
  });

  constructor(private http: HttpClient, public auth: AuthService) {
    const saved = localStorage.getItem('brands_view');
    if (saved === 'table' || saved === 'compact') this.view = saved;
  }

  ngOnInit() { this.load(0); }

  // ── Data ──────────────────────────────────────────────────────────────────

  load(page = 0) {
    this.loading.set(true);
    const params: Record<string, string> = { page: String(page), size: '20' };
    if (this.activeFilter) params['active'] = this.activeFilter;
    if (this.searchQuery.trim()) params['search'] = this.searchQuery.trim();

    this.http.get<ApiResponse<PageData<BrandDto>>>(this.BASE, { params }).subscribe({
      next: res => {
        this.brands.set(res.data?.content ?? []);
        this.totalCount.set(res.data?.totalElements ?? 0);
        this.totalPages.set(res.data?.totalPages ?? 0);
        this.currentPage.set(res.data?.number ?? 0);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  onFilterChange() { this.load(0); }
  clearFilters()   { this.searchQuery = ''; this.activeFilter = ''; this.load(0); }

  get statusFilterOpts() {
    return [
      { value: 'true',  label: 'Active' },
      { value: 'false', label: 'Inactive' },
    ];
  }
  goToPage(p: number) { if (p >= 0 && p < this.totalPages()) this.load(p); }

  // ── Create / Edit ─────────────────────────────────────────────────────────

  setView(v: 'cards' | 'table' | 'compact') {
    this.view = v;
    localStorage.setItem('brands_view', v);
  }

  brandColor(name: string): string {
    const palette = ['#2874F0','#E53935','#43A047','#FB8C00','#8E24AA','#00ACC1','#D81B60','#546E7A'];
    let hash = 0;
    for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) & 0xffff;
    return palette[hash % palette.length];
  }

  onNameChange(v: string) {
    this.form.name = v;
    if (this.modalMode === 'create' && !this.slugEdited) {
      this.form.slug = v.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');
    }
  }

  onSlugChange(v: string) {
    this.form.slug = v;
    this.slugEdited = v.trim().length > 0;
  }

  openCreate() {
    this.form = { name: '', slug: '', description: '', isActive: true };
    this.slugEdited = false;
    this.modalError = ''; this.formTouched = false; this.editTarget = null;
    this.clearStagedLogo();
    this.uploadLogoType = 'image';
    this.modalMode = 'create';
  }

  onCreateLogoSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;
    if (this.stagedLogoPreview) URL.revokeObjectURL(this.stagedLogoPreview);
    this.stagedLogoFile    = input.files[0];
    this.stagedLogoPreview = URL.createObjectURL(this.stagedLogoFile);
    input.value = '';
  }

  removeStagedLogo() {
    if (this.stagedLogoPreview) URL.revokeObjectURL(this.stagedLogoPreview);
    this.stagedLogoFile = null; this.stagedLogoPreview = null;
  }

  private clearStagedLogo() {
    if (this.stagedLogoPreview) URL.revokeObjectURL(this.stagedLogoPreview);
    this.stagedLogoFile = null; this.stagedLogoPreview = null;
  }

  openEdit(brand: BrandDto) {
    this.form = { name: brand.name, slug: brand.slug, description: brand.description ?? '', isActive: brand.isActive };
    this.modalError = ''; this.formTouched = false; this.editTarget = brand; this.modalMode = 'edit';
  }

  closeModal() { this.modalMode = 'closed'; this.modalError = ''; }

  save() {
    this.formTouched = true;
    if (!this.form.name.trim()) { return; }
    this.saving = true; this.modalError = '';

    const payload = {
      name:        this.form.name.trim(),
      slug:        this.form.slug.trim() || null,
      description: this.form.description.trim() || null,
      isActive:    this.form.isActive,
    };

    const req$ = this.modalMode === 'create'
      ? this.http.post<ApiResponse<BrandDto>>(this.BASE, payload)
      : this.http.put<ApiResponse<BrandDto>>(`${this.BASE}/${this.editTarget!.id}`, payload);

    req$.subscribe({
      next: res => {
        if (this.modalMode === 'create' && this.stagedLogoFile && res.data?.id) {
          this.uploadLogoForBrand(res.data.id, this.stagedLogoFile, () => {
            this.saving = false; this.modalMode = 'closed'; this.clearStagedLogo(); this.load(this.currentPage());
          });
        } else {
          this.saving = false; this.modalMode = 'closed'; this.clearStagedLogo(); this.load(this.currentPage());
        }
      },
      error: e  => { this.saving = false; this.modalError = extractErrorMessage(e, 'Save failed.'); }
    });
  }

  // ── Delete ────────────────────────────────────────────────────────────────

  openDelete(brand: BrandDto) { this.deleteTarget = brand; this.deleteError = ''; this.deleting = false; }
  closeDelete()               { this.deleteTarget = null; this.deleteError = ''; }

  confirmDelete() {
    if (!this.deleteTarget) return;
    this.deleting = true; this.deleteError = '';
    this.http.delete<ApiResponse<void>>(`${this.BASE}/${this.deleteTarget.id}`).subscribe({
      next: () => { this.deleting = false; this.deleteTarget = null; this.load(this.currentPage()); },
      error: e  => { this.deleting = false; this.deleteError = extractErrorMessage(e, 'Failed to deactivate.'); }
    });
  }

  onLogoSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length || !this.editTarget) return;
    const file = input.files[0];
    input.value = '';
    this.logoUploading = true; this.logoError = '';
    this.uploadLogoForBrand(this.editTarget.id, file, () => this.logoUploading = false);
  }

  private uploadLogoForBrand(brandId: string, file: File, onDone: () => void) {
    this.logoUploading = true; this.logoError = '';
    const fd = new FormData();
    fd.append('file', file);
    fd.append('type', this.uploadLogoType);
    this.http.post<ApiResponse<BrandDto>>(`${this.BASE}/${brandId}/logo`, fd).subscribe({
      next: res => {
        this.logoUploading = false;
        if (res.data) {
          if (this.editTarget?.id === res.data.id) this.editTarget = res.data;
          this.brands.update(list => list.map(b => b.id === res.data!.id ? res.data! : b));
        }
        onDone();
      },
      error: e => { this.logoUploading = false; this.logoError = extractErrorMessage(e, 'Upload failed.'); onDone(); }
    });
  }

  removeLogo() {
    if (!this.editTarget) return;
    this.logoUploading = true;
    this.logoError = '';
    this.http.delete<ApiResponse<BrandDto>>(`${this.BASE}/${this.editTarget.id}/logo`).subscribe({
      next: res => {
        this.logoUploading = false;
        if (res.data) {
          this.editTarget = res.data;
          this.brands.update(list => list.map(b => b.id === res.data!.id ? res.data! : b));
        }
      },
      error: e => { this.logoUploading = false; this.logoError = extractErrorMessage(e, 'Remove failed.'); }
    });
  }

  formatDate(iso: string) {
    return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  initials(name: string) { return name.slice(0, 2).toUpperCase(); }
}
