import { Component, OnInit, signal, computed, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { HttpClient }   from '@angular/common/http';
import { AuthService }  from '../../services/auth.service';
import { SPEC_GROUP_ENDPOINTS, LOOKUP_ENDPOINTS } from '../../core/constants/api.constants';
import { ApiResponse, extractErrorMessage } from '../../core/models/api.models';
import { AppInputComponent, AppTextareaComponent, AppBtnComponent } from '../../shared/ui';

interface SpecGroupField {
  id: string; fieldId: string; fieldName: string; fieldType: string; sortOrder: number;
}

interface SpecGroupSummary {
  id: string; name: string; description: string | null; fieldCount: number;
}

interface SpecGroupDetail {
  id: string; name: string; description: string | null;
  fields: SpecGroupField[];
}

interface LookupListSummary {
  id: string; name: string; fieldType: string; description: string | null; valueCount: number;
}

@Component({
  selector: 'app-spec-groups',
  standalone: true,
  imports: [CommonModule, FormsModule, AppInputComponent, AppTextareaComponent, AppBtnComponent],
  templateUrl: './spec-groups.component.html',
  styleUrl: './spec-groups.component.scss'
})
export class SpecGroupsComponent implements OnInit {

  private readonly EP = SPEC_GROUP_ENDPOINTS;

  groups      = signal<SpecGroupSummary[]>([]);
  loading     = signal(true);
  searchQuery = signal('');
  isMobile    = signal(false);

  // ── Pagination ────────────────────────────────────────────────────────────
  currentPage    = signal(0);
  readonly pageSize = 12;

  totalPages = computed(() =>
    Math.max(1, Math.ceil(this.filteredGroups().length / this.pageSize))
  );

  pagedGroups = computed(() => {
    const p = this.currentPage();
    return this.filteredGroups().slice(p * this.pageSize, (p + 1) * this.pageSize);
  });

  pageNumbers = computed((): (number | '...')[] => {
    const total = this.totalPages();
    const cur   = this.currentPage() + 1;
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
    const pages: (number | '...')[] = [1];
    if (cur > 3)         pages.push('...');
    for (let i = Math.max(2, cur - 1); i <= Math.min(total - 1, cur + 1); i++) pages.push(i);
    if (cur < total - 2) pages.push('...');
    pages.push(total);
    return pages;
  });

  // ── Available lookup lists (for field picker) ─────────────────────────────
  allFields        = signal<LookupListSummary[]>([]);
  fieldsLoading    = false;
  fieldSearch      = '';
  fieldPickerOpen  = false;

  // ── Modal ─────────────────────────────────────────────────────────────────
  modalMode: 'closed' | 'create' | 'edit' = 'closed';
  saving      = false;
  modalError  = '';
  formTouched = false;
  editTarget: SpecGroupSummary | null = null;

  form = { name: '', description: '' };
  selectedFieldIds: string[] = [];

  // ── Delete ────────────────────────────────────────────────────────────────
  deleteTarget: SpecGroupSummary | null = null;
  deleting    = false;
  deleteError = '';

  // ── Computed ──────────────────────────────────────────────────────────────
  canManage = computed(() => {
    const r = this.auth.currentUser()?.role;
    return r === 'SUPER_ADMIN' || r === 'ADMIN';
  });

  filteredGroups = computed(() => {
    const q = this.searchQuery().toLowerCase().trim();
    return q
      ? this.groups().filter(g =>
          g.name.toLowerCase().includes(q) ||
          (g.description ?? '').toLowerCase().includes(q))
      : this.groups();
  });

  get availableFields(): LookupListSummary[] {
    const q = this.fieldSearch.toLowerCase().trim();
    const selected = new Set(this.selectedFieldIds);
    const available = this.allFields().filter(f => !selected.has(f.id));
    return q
      ? available.filter(f =>
          f.name.toLowerCase().includes(q) ||
          f.fieldType.toLowerCase().includes(q))
      : available;
  }

  getFieldById(id: string): LookupListSummary | undefined {
    return this.allFields().find(f => f.id === id);
  }

  skeletonRows = Array(8);

  constructor(private http: HttpClient, public auth: AuthService) {}

  @HostListener('window:resize')
  updateMobile() { this.isMobile.set(window.innerWidth <= 600); }

  ngOnInit() {
    this.updateMobile();
    this.load();
  }

  // ── Data ──────────────────────────────────────────────────────────────────

  load() {
    this.loading.set(true);
    this.http.get<ApiResponse<SpecGroupSummary[]>>(this.EP.BASE).subscribe({
      next: res => { this.groups.set(res.data ?? []); this.loading.set(false); },
      error: ()  => this.loading.set(false)
    });
  }

  private loadAllFields() {
    if (this.allFields().length > 0) return;
    this.fieldsLoading = true;
    this.http.get<ApiResponse<LookupListSummary[]>>(LOOKUP_ENDPOINTS.BASE).subscribe({
      next: res => { this.allFields.set(res.data ?? []); this.fieldsLoading = false; },
      error: ()  => { this.fieldsLoading = false; }
    });
  }

  // ── Search & Pagination ───────────────────────────────────────────────────

  onSearchChange(q: string) { this.searchQuery.set(q); this.currentPage.set(0); }
  clearSearch()              { this.searchQuery.set(''); this.currentPage.set(0); }

  goToPage(p: number | '...') { if (p !== '...') this.currentPage.set((p as number) - 1); }
  prevPage() { if (this.currentPage() > 0)                      this.currentPage.update(p => p - 1); }
  nextPage() { if (this.currentPage() < this.totalPages() - 1)  this.currentPage.update(p => p + 1); }

  // ── Field picker ──────────────────────────────────────────────────────────

  addField(fieldId: string) {
    if (!this.selectedFieldIds.includes(fieldId)) {
      this.selectedFieldIds.push(fieldId);
    }
    this.fieldSearch = '';
  }

  removeField(fieldId: string) {
    const idx = this.selectedFieldIds.indexOf(fieldId);
    if (idx >= 0) this.selectedFieldIds.splice(idx, 1);
  }

  fieldTypeLabel(ft: string): string {
    return { TEXT: 'Text', NUMBER: 'Number', BOOLEAN: 'Yes/No', SELECT: 'Dropdown', MULTISELECT: 'Multi-select' }[ft] ?? ft;
  }

  // ── Create / Edit ─────────────────────────────────────────────────────────

  openCreate() {
    this.form            = { name: '', description: '' };
    this.selectedFieldIds = [];
    this.fieldSearch     = '';
    this.fieldPickerOpen = false;
    this.modalError      = '';
    this.formTouched     = false;
    this.editTarget      = null;
    this.modalMode       = 'create';
    this.loadAllFields();
  }

  openEdit(group: SpecGroupSummary) {
    this.form            = { name: group.name, description: group.description ?? '' };
    this.selectedFieldIds = [];
    this.fieldSearch     = '';
    this.fieldPickerOpen = false;
    this.modalError      = '';
    this.formTouched     = false;
    this.editTarget      = group;
    this.modalMode       = 'edit';
    this.saving        = true;
    this.loadAllFields();
    this.http.get<ApiResponse<SpecGroupDetail>>(this.EP.BY_ID(group.id)).subscribe({
      next: res => {
        this.saving = false;
        this.selectedFieldIds = (res.data?.fields ?? [])
          .sort((a, b) => a.sortOrder - b.sortOrder)
          .map(f => f.fieldId);
      },
      error: e => { this.saving = false; this.modalError = extractErrorMessage(e, 'Failed to load group.'); }
    });
  }

  closeModal() { this.modalMode = 'closed'; this.modalError = ''; }

  save() {
    this.formTouched = true;
    if (!this.form.name.trim()) return;
    const payload = {
      name:        this.form.name.trim(),
      description: this.form.description.trim() || null,
      fieldIds:    this.selectedFieldIds
    };
    this.saving = true; this.modalError = '';
    const req$ = this.modalMode === 'create'
      ? this.http.post<ApiResponse<SpecGroupDetail>>(this.EP.BASE, payload)
      : this.http.put<ApiResponse<SpecGroupDetail>>(this.EP.BY_ID(this.editTarget!.id), payload);
    req$.subscribe({
      next: () => { this.saving = false; this.modalMode = 'closed'; this.load(); },
      error: e => { this.saving = false; this.modalError = extractErrorMessage(e, 'Save failed.'); }
    });
  }

  // ── Delete ────────────────────────────────────────────────────────────────

  openDelete(group: SpecGroupSummary) {
    this.deleteTarget = group; this.deleteError = ''; this.deleting = false;
  }
  closeDelete() { this.deleteTarget = null; this.deleteError = ''; }

  confirmDelete() {
    if (!this.deleteTarget) return;
    this.deleting = true; this.deleteError = '';
    this.http.delete<ApiResponse<void>>(this.EP.BY_ID(this.deleteTarget.id)).subscribe({
      next: () => { this.deleting = false; this.deleteTarget = null; this.load(); },
      error: e => { this.deleting = false; this.deleteError = extractErrorMessage(e, 'Delete failed.'); }
    });
  }
}
