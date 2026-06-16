import { Component, OnInit, signal, computed, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { HttpClient }   from '@angular/common/http';
import { AuthService }  from '../../services/auth.service';
import { LOOKUP_ENDPOINTS } from '../../core/constants/api.constants';
import { ApiResponse, extractErrorMessage } from '../../core/models/api.models';
import { AppInputComponent, AppTextareaComponent, AppBtnComponent, AppSelectComponent, AppCheckboxComponent } from '../../shared/ui';

type FieldType = 'TEXT' | 'NUMBER' | 'BOOLEAN' | 'SELECT' | 'MULTISELECT';

interface CustomFieldSummary {
  id: string; name: string; description: string | null;
  fieldType: string; required: boolean; defaultValue: string | null;
  valueCount: number;
}

interface CustomFieldDetail {
  id: string; name: string; description: string | null;
  fieldType: string; required: boolean; defaultValue: string | null;
  values: string[];
}

@Component({
  selector: 'app-lookup-lists',
  standalone: true,
  imports: [CommonModule, FormsModule, AppInputComponent, AppTextareaComponent, AppBtnComponent, AppSelectComponent, AppCheckboxComponent],
  templateUrl: './lookup-lists.component.html',
  styleUrl: './lookup-lists.component.scss'
})
export class LookupListsComponent implements OnInit {

  private readonly EP = LOOKUP_ENDPOINTS;

  lists       = signal<CustomFieldSummary[]>([]);
  loading     = signal(true);
  searchQuery = signal('');
  view        = signal<'card' | 'table'>('card');
  isMobile    = signal(false);

  // ── Pagination ────────────────────────────────────────────────────────────
  currentPage = signal(0);
  private readonly cardPageSize  = 12;
  private readonly tablePageSize = 10;

  pageSize = computed(() => this.view() === 'card' ? this.cardPageSize : this.tablePageSize);

  totalPages = computed(() =>
    Math.max(1, Math.ceil(this.filteredLists().length / this.pageSize()))
  );

  pagedLists = computed(() => {
    const p = this.currentPage();
    const s = this.pageSize();
    return this.filteredLists().slice(p * s, (p + 1) * s);
  });

  pageNumbers = computed((): (number | '...')[] => {
    const total = this.totalPages();
    const cur   = this.currentPage() + 1;
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
    const pages: (number | '...')[] = [1];
    if (cur > 3)        pages.push('...');
    for (let i = Math.max(2, cur - 1); i <= Math.min(total - 1, cur + 1); i++) pages.push(i);
    if (cur < total - 2) pages.push('...');
    pages.push(total);
    return pages;
  });

  // ── Detail panel (unused but kept for openEdit compatibility) ─────────────
  selectedField: CustomFieldSummary | null = null;

  // ── Modal ─────────────────────────────────────────────────────────────────
  modalMode: 'closed' | 'create' | 'edit' = 'closed';
  saving      = false;
  modalError  = '';
  formTouched = false;
  editTarget: CustomFieldSummary | null = null;

  form = {
    name: '', description: '',
    fieldType: 'SELECT' as FieldType,
    required: false, defaultValue: ''
  };
  valueInputs: string[] = [''];

  // ── Delete ────────────────────────────────────────────────────────────────
  deleteTarget: CustomFieldSummary | null = null;
  deleting    = false;
  deleteError = '';

  // ── Computed ──────────────────────────────────────────────────────────────
  canManage = computed(() => {
    const r = this.auth.currentUser()?.role;
    return r === 'SUPER_ADMIN' || r === 'ADMIN';
  });

  filteredLists = computed(() => {
    const q = this.searchQuery().toLowerCase().trim();
    return q
      ? this.lists().filter(l =>
          l.name.toLowerCase().includes(q) ||
          (l.description ?? '').toLowerCase().includes(q) ||
          l.fieldType.toLowerCase().includes(q))
      : this.lists();
  });

  readonly fieldTypeOpts = [
    { value: 'TEXT',        label: 'Text' },
    { value: 'NUMBER',      label: 'Number' },
    { value: 'BOOLEAN',     label: 'Yes / No' },
    { value: 'SELECT',      label: 'Dropdown (single)' },
    { value: 'MULTISELECT', label: 'Dropdown (multi)' },
  ];

  skeletonRows = Array(8);

  get showValues(): boolean {
    return this.form.fieldType === 'SELECT' || this.form.fieldType === 'MULTISELECT';
  }

  get defaultValueOpts() {
    const vals = this.valueInputs.map(v => v.trim()).filter(Boolean);
    return [
      { value: '', label: '— None —' },
      ...vals.map(v => ({ value: v, label: v }))
    ];
  }

  constructor(private http: HttpClient, public auth: AuthService) {}

  @HostListener('window:resize')
  updateMobile() {
    this.isMobile.set(window.innerWidth <= 600);
  }

  ngOnInit() {
    this.updateMobile();
    const saved = localStorage.getItem('cf-view');
    if (saved === 'table') this.view.set('table');
    this.load();
  }

  setView(v: 'card' | 'table') {
    this.view.set(v);
    localStorage.setItem('cf-view', v);
    this.currentPage.set(0);
  }

  // ── Search ────────────────────────────────────────────────────────────────

  onSearchChange(q: string) {
    this.searchQuery.set(q);
    this.currentPage.set(0);
  }

  clearSearch() {
    this.searchQuery.set('');
    this.currentPage.set(0);
  }

  // ── Pagination ────────────────────────────────────────────────────────────

  goToPage(p: number | '...'): void {
    if (p === '...') return;
    this.currentPage.set((p as number) - 1);
  }

  prevPage(): void { if (this.currentPage() > 0)                      this.currentPage.update(p => p - 1); }
  nextPage(): void { if (this.currentPage() < this.totalPages() - 1)  this.currentPage.update(p => p + 1); }

  // ── Data ──────────────────────────────────────────────────────────────────

  load() {
    this.loading.set(true);
    this.http.get<ApiResponse<CustomFieldSummary[]>>(this.EP.BASE).subscribe({
      next: res => { this.lists.set(res.data ?? []); this.loading.set(false); },
      error: ()  => this.loading.set(false)
    });
  }

  closeDetail() { this.selectedField = null; }

  // ── Create / Edit ─────────────────────────────────────────────────────────

  openCreate() {
    this.form = { name: '', description: '', fieldType: 'SELECT', required: false, defaultValue: '' };
    this.valueInputs = [''];
    this.modalError = ''; this.formTouched = false; this.editTarget = null;
    this.modalMode = 'create';
  }

  openEdit(field: CustomFieldSummary, event?: Event) {
    event?.stopPropagation();
    this.form = {
      name: field.name, description: field.description ?? '',
      fieldType: (field.fieldType as FieldType) || 'SELECT',
      required: field.required, defaultValue: field.defaultValue ?? ''
    };
    this.valueInputs = [''];
    this.modalError = ''; this.formTouched = false; this.editTarget = field;
    this.modalMode = 'edit';
    this.saving = true;
    this.http.get<ApiResponse<CustomFieldDetail>>(this.EP.BY_ID(field.id)).subscribe({
      next: res => {
        this.saving = false;
        this.valueInputs = res.data?.values?.length ? [...res.data.values] : [''];
      },
      error: e => { this.saving = false; this.modalError = extractErrorMessage(e, 'Failed to load field.'); }
    });
  }

  closeModal() { this.modalMode = 'closed'; this.modalError = ''; }

  // ── Value rows ────────────────────────────────────────────────────────────

  addValue()           { this.valueInputs.push(''); }
  removeValue(i: number) {
    if (this.valueInputs.length === 1) { this.valueInputs[0] = ''; return; }
    this.valueInputs.splice(i, 1);
  }
  moveUp(i: number)   { if (i > 0) [this.valueInputs[i-1], this.valueInputs[i]] = [this.valueInputs[i], this.valueInputs[i-1]]; }
  moveDown(i: number) { if (i < this.valueInputs.length-1) [this.valueInputs[i], this.valueInputs[i+1]] = [this.valueInputs[i+1], this.valueInputs[i]]; }
  trackByIdx(i: number) { return i; }

  // ── Save ──────────────────────────────────────────────────────────────────

  save() {
    this.formTouched = true;
    if (!this.form.name.trim()) return;
    const values = this.showValues ? this.valueInputs.map(v => v.trim()).filter(Boolean) : [];
    const payload = {
      name:         this.form.name.trim(),
      description:  this.form.description.trim() || null,
      fieldType:    this.form.fieldType,
      required:     this.form.required,
      defaultValue: this.form.defaultValue.trim() || null,
      values
    };
    this.saving = true; this.modalError = '';
    const req$ = this.modalMode === 'create'
      ? this.http.post<ApiResponse<CustomFieldDetail>>(this.EP.BASE, payload)
      : this.http.put<ApiResponse<CustomFieldDetail>>(this.EP.BY_ID(this.editTarget!.id), payload);
    req$.subscribe({
      next: () => {
        this.saving = false; this.modalMode = 'closed';
        this.load();
      },
      error: e => { this.saving = false; this.modalError = extractErrorMessage(e, 'Save failed.'); }
    });
  }

  // ── Delete ────────────────────────────────────────────────────────────────

  openDelete(field: CustomFieldSummary, event?: Event) {
    event?.stopPropagation();
    this.deleteTarget = field; this.deleteError = ''; this.deleting = false;
  }
  closeDelete() { this.deleteTarget = null; this.deleteError = ''; }

  confirmDelete() {
    if (!this.deleteTarget) return;
    this.deleting = true; this.deleteError = '';
    this.http.delete<ApiResponse<void>>(this.EP.BY_ID(this.deleteTarget.id)).subscribe({
      next: () => {
        this.deleting = false;
        this.deleteTarget = null;
        this.load();
      },
      error: e => { this.deleting = false; this.deleteError = extractErrorMessage(e, 'Delete failed.'); }
    });
  }

  // ── Helpers ───────────────────────────────────────────────────────────────

  fieldTypeLabel(ft: string): string {
    return { TEXT: 'Text', NUMBER: 'Number', BOOLEAN: 'Yes/No', SELECT: 'Dropdown', MULTISELECT: 'Multi-select' }[ft] ?? ft;
  }

  fieldTypeIcon(ft: string): string {
    return { TEXT: 'text_fields', NUMBER: 'tag', BOOLEAN: 'toggle_on', SELECT: 'arrow_drop_down_circle', MULTISELECT: 'checklist' }[ft] ?? 'tune';
  }
}
