import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { HttpClient }   from '@angular/common/http';
import { AuthService }  from '../../services/auth.service';
import { PRODUCT_ENDPOINTS } from '../../core/constants/api.constants';
import { ApiResponse, extractErrorMessage } from '../../core/models/api.models';
import { AppInputComponent, AppTextareaComponent, AppSelectComponent, AppCheckboxComponent, AppBtnComponent } from '../../shared/ui';

// ── Types ─────────────────────────────────────────────────────────────────────

type FieldType = 'TEXT' | 'NUMBER' | 'BOOLEAN' | 'SELECT' | 'MULTISELECT';

interface CategoryDto {
  id: string; name: string; slug: string; description: string | null;
  imageUrl: string | null; parentId: string | null; parentName: string | null;
  sortOrder: number; isActive: boolean;
  attributeDefinitions: AttributeDefinitionDto[] | undefined;
  createdAt: string; updatedAt: string;
}

interface CategoryNode { id: string; name: string; children: CategoryNode[]; }
interface PageData<T>  { content: T[]; totalElements: number; totalPages: number; number: number; }

interface AttributeDefinitionDto {
  id: string; label: string; fieldKey: string; fieldType: FieldType;
  options: string | null; unit: string | null; defaultValue: string | null;
  required: boolean; sortOrder: number;
}

// ── Component ─────────────────────────────────────────────────────────────────

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, FormsModule, AppInputComponent, AppTextareaComponent, AppSelectComponent, AppCheckboxComponent, AppBtnComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {

  private readonly EP = PRODUCT_ENDPOINTS;

  // ── List state ────────────────────────────────────────────────────────────
  categories  = signal<CategoryDto[]>([]);
  loading     = signal(true);
  totalCount  = signal(0);
  totalPages  = signal(0);
  currentPage = signal(0);
  skeletonRows = Array(8);

  activeFilter: '' | 'true' | 'false' = '';
  searchQuery = '';

  // ── Tree (for parent dropdown) ────────────────────────────────────────────
  tree = signal<CategoryNode[]>([]);

  // ── Create / Edit modal ───────────────────────────────────────────────────
  modalMode: 'closed' | 'create' | 'edit' = 'closed';
  saving      = false;
  modalError  = '';
  formTouched = false;
  attrFormTouched = false;
  editTarget: CategoryDto | null = null;

  form = { name: '', slug: '', description: '', parentId: '', sortOrder: 0, isActive: true };
  slugEdited = false;

  // ── Delete confirm ────────────────────────────────────────────────────────
  deleteTarget: CategoryDto | null = null;
  deleting  = false;
  deleteError = '';

  // ── Tabs ─────────────────────────────────────────────────────────────────
  activeTab: 'details' | 'specs' = 'details';

  // ── Attribute Definitions (inline in edit modal) ─────────────────────────
  attrTarget: CategoryDto | null = null;
  attrs: AttributeDefinitionDto[] = [];
  attrLoading = false;
  attrView: 'list' | 'form' = 'list';
  attrEditTarget: AttributeDefinitionDto | null = null;
  attrSaving  = false;
  attrError   = '';
  attrDeleteTarget: AttributeDefinitionDto | null = null;
  attrDeleting = false;
  attrsLoaded = false;

  attrForm = {
    label: '', fieldKey: '', fieldType: 'TEXT' as FieldType,
    options: '', unit: '', defaultValue: '', required: false, sortOrder: 0
  };
  fieldKeyEdited = false;

  // Individual option inputs for SELECT/MULTISELECT (replaces JSON textarea)
  optionInputs: string[] = [''];

  get showOptionInputs(): boolean {
    return this.attrForm.fieldType === 'SELECT' || this.attrForm.fieldType === 'MULTISELECT';
  }

  addOption() { this.optionInputs.push(''); }

  removeOption(i: number) {
    if (this.optionInputs.length > 1) this.optionInputs.splice(i, 1);
  }

  syncOptions() {
    const opts = this.optionInputs.map(o => o.trim()).filter(Boolean);
    this.attrForm.options = opts.length ? JSON.stringify(opts) : '';
  }

  readonly fieldTypes: FieldType[] = ['TEXT', 'NUMBER', 'BOOLEAN', 'SELECT', 'MULTISELECT'];

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

  constructor(private http: HttpClient, public auth: AuthService) {}

  ngOnInit() { this.loadTree(); this.load(0); }

  // ── List ──────────────────────────────────────────────────────────────────

  load(page = 0) {
    this.loading.set(true);
    const params: Record<string, string> = { page: String(page), size: '20' };
    if (this.activeFilter)       params['active'] = this.activeFilter;
    if (this.searchQuery.trim()) params['search'] = this.searchQuery.trim();

    this.http.get<ApiResponse<PageData<CategoryDto>>>(this.EP.CATEGORIES, { params }).subscribe({
      next: res => {
        this.categories.set(res.data?.content ?? []);
        this.totalCount.set(res.data?.totalElements ?? 0);
        this.totalPages.set(res.data?.totalPages ?? 0);
        this.currentPage.set(res.data?.number ?? 0);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  loadTree() {
    this.http.get<ApiResponse<CategoryNode[]>>(this.EP.CATEGORIES_TREE).subscribe({
      next: res => this.tree.set(res.data ?? [])
    });
  }

  onFilterChange() { this.load(0); }
  clearFilters()   { this.searchQuery = ''; this.activeFilter = ''; this.load(0); }
  goToPage(p: number) { if (p >= 0 && p < this.totalPages()) this.load(p); }

  get statusFilterOpts() {
    return [{ value: 'true', label: 'Active' }, { value: 'false', label: 'Inactive' }];
  }

  get parentCategoryOpts() {
    return this.flatTree(this.tree()).map(n => ({
      value: n.id,
      label: n.label,
      disabled: this.modalMode === 'edit' && n.id === this.editTarget?.id
    }));
  }

  get fieldTypeOpts() {
    return this.fieldTypes.map(ft => ({ value: ft, label: this.fieldTypeLabel(ft) }));
  }

  // ── Create / Edit ─────────────────────────────────────────────────────────

  openEdit(cat: CategoryDto) {
    this.form = {
      name: cat.name, slug: cat.slug, description: cat.description ?? '',
      parentId: cat.parentId ?? '', sortOrder: cat.sortOrder, isActive: cat.isActive
    };
    this.modalError = ''; this.formTouched = false; this.editTarget = cat;
    this.activeTab = 'details'; this.attrTarget = cat; this.attrs = []; this.attrsLoaded = false;
    this.attrView = 'list'; this.attrError = ''; this.attrEditTarget = null;
    this.modalMode = 'edit';
  }

  openCreate() {
    this.form = { name: '', slug: '', description: '', parentId: '', sortOrder: 0, isActive: true };
    this.slugEdited = false;
    this.modalError = ''; this.formTouched = false; this.editTarget = null;
    this.activeTab = 'details'; this.modalMode = 'create';
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

  closeModal() { this.modalMode = 'closed'; this.modalError = ''; this.attrError = ''; }

  save() {
    this.formTouched = true;
    if (!this.form.name.trim()) { return; }
    this.saving = true; this.modalError = '';

    const payload = {
      name:        this.form.name.trim(),
      slug:        this.form.slug.trim() || null,
      description: this.form.description.trim() || null,
      parentId:    this.form.parentId || null,
      sortOrder:   this.form.sortOrder,
      isActive:    this.form.isActive,
    };

    const req$ = this.modalMode === 'create'
      ? this.http.post<ApiResponse<CategoryDto>>(this.EP.CATEGORIES, payload)
      : this.http.put<ApiResponse<CategoryDto>>(`${this.EP.CATEGORIES}/${this.editTarget!.id}`, payload);

    req$.subscribe({
      next: () => {
        const isCreate = this.modalMode === 'create';
        this.saving = false; this.modalMode = 'closed';
        this.load(isCreate ? 0 : this.currentPage());
        this.loadTree();
      },
      error: e => { this.saving = false; this.modalError = extractErrorMessage(e, 'Save failed.'); }
    });
  }

  // ── Delete ────────────────────────────────────────────────────────────────

  openDelete(cat: CategoryDto) { this.deleteTarget = cat; this.deleteError = ''; this.deleting = false; }
  closeDelete() { this.deleteTarget = null; this.deleteError = ''; }

  confirmDelete() {
    if (!this.deleteTarget) return;
    this.deleting = true; this.deleteError = '';
    this.http.delete<ApiResponse<void>>(`${this.EP.CATEGORIES}/${this.deleteTarget.id}`).subscribe({
      next: () => { this.deleting = false; this.deleteTarget = null; this.load(this.currentPage()); this.loadTree(); },
      error: e  => { this.deleting = false; this.deleteError = extractErrorMessage(e, 'Failed to deactivate.'); }
    });
  }

  // ── Attribute Definitions ─────────────────────────────────────────────────

  loadAttrsIfNeeded() {
    if (this.attrsLoaded || !this.attrTarget) return;
    this.loadAttrs();
  }

  loadAttrs() {
    if (!this.attrTarget) return;
    this.attrLoading = true;
    this.http.get<ApiResponse<AttributeDefinitionDto[]>>(
      this.EP.CATEGORY_ATTRS(this.attrTarget.id)
    ).subscribe({
      next: res => { this.attrs = res.data ?? []; this.attrLoading = false; this.attrsLoaded = true; },
      error: ()  => this.attrLoading = false
    });
  }

  openCreateAttr() {
    this.attrForm = {
      label: '', fieldKey: '', fieldType: 'TEXT',
      options: '', unit: '', defaultValue: '', required: false, sortOrder: this.attrs.length
    };
    this.fieldKeyEdited = false;
    this.optionInputs = [''];
    this.attrEditTarget = null; this.attrError = ''; this.attrFormTouched = false; this.attrView = 'form';
  }

  openEditAttr(attr: AttributeDefinitionDto) {
    this.attrForm = {
      label:        attr.label,
      fieldKey:     attr.fieldKey,
      fieldType:    attr.fieldType,
      options:      attr.options ?? '',
      unit:         attr.unit ?? '',
      defaultValue: attr.defaultValue ?? '',
      required:     attr.required,
      sortOrder:    attr.sortOrder
    };
    // Parse existing options into individual inputs
    try {
      const parsed = attr.options ? JSON.parse(attr.options) : [];
      this.optionInputs = parsed.length ? parsed : [''];
    } catch { this.optionInputs = ['']; }
    this.attrEditTarget = attr; this.attrError = ''; this.attrView = 'form';
  }

  backToAttrList() { this.attrView = 'list'; this.attrError = ''; }

  saveAttr() {
    if (!this.attrTarget) return;
    this.attrFormTouched = true;
    if (!this.attrForm.label.trim()) { return; }
    if (!this.attrEditTarget && !this.attrForm.fieldKey.trim()) { return; }
    this.attrSaving = true; this.attrError = '';

    let payload: any;
    let url: string;
    let req$;

    if (this.attrEditTarget) {
      payload = {
        label:        this.attrForm.label.trim(),
        fieldType:    this.attrForm.fieldType,
        options:      this.attrForm.options.trim() || null,
        unit:         this.attrForm.unit.trim() || null,
        defaultValue: this.attrForm.defaultValue.trim() || null,
        required:     this.attrForm.required,
        sortOrder:    this.attrForm.sortOrder
      };
      url  = this.EP.CATEGORY_ATTR_ID(this.attrTarget.id, this.attrEditTarget.id);
      req$ = this.http.put<ApiResponse<any>>(url, payload);
    } else {
      payload = {
        label:        this.attrForm.label.trim(),
        fieldKey:     this.attrForm.fieldKey.trim(),
        fieldType:    this.attrForm.fieldType,
        options:      this.attrForm.options.trim() || null,
        unit:         this.attrForm.unit.trim() || null,
        defaultValue: this.attrForm.defaultValue.trim() || null,
        required:     this.attrForm.required,
        sortOrder:    this.attrForm.sortOrder
      };
      url  = this.EP.CATEGORY_ATTRS(this.attrTarget.id);
      req$ = this.http.post<ApiResponse<any>>(url, payload);
    }

    req$.subscribe({
      next: () => { this.attrSaving = false; this.attrView = 'list'; this.loadAttrs(); },
      error: e => { this.attrSaving = false; this.attrError = extractErrorMessage(e, 'Save failed.'); }
    });
  }

  openDeleteAttr(attr: AttributeDefinitionDto) { this.attrDeleteTarget = attr; }
  closeDeleteAttr() { this.attrDeleteTarget = null; }

  confirmDeleteAttr() {
    if (!this.attrTarget || !this.attrDeleteTarget) return;
    this.attrDeleting = true;
    this.http.delete<ApiResponse<void>>(
      this.EP.CATEGORY_ATTR_ID(this.attrTarget.id, this.attrDeleteTarget.id)
    ).subscribe({
      next: () => { this.attrDeleting = false; this.attrDeleteTarget = null; this.loadAttrs(); },
      error: e => { this.attrDeleting = false; this.attrError = extractErrorMessage(e, 'Delete failed.'); }
    });
  }

  onAttrLabelChange(v: string) {
    this.attrForm.label = v;
    if (!this.attrEditTarget && !this.fieldKeyEdited) {
      this.attrForm.fieldKey = v.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
    }
  }

  onFieldKeyChange(v: string) {
    this.attrForm.fieldKey = v;
    this.fieldKeyEdited = v.trim().length > 0;
  }

  // ── Helpers ───────────────────────────────────────────────────────────────

  formatDate(iso: string) {
    return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  flatTree(nodes: CategoryNode[], prefix = ''): { id: string; label: string }[] {
    const result: { id: string; label: string }[] = [];
    for (const n of nodes) {
      result.push({ id: n.id, label: prefix + n.name });
      if (n.children?.length) result.push(...this.flatTree(n.children, prefix + '— '));
    }
    return result;
  }

  fieldTypeLabel(ft: FieldType): string {
    return { TEXT: 'Text', NUMBER: 'Number', BOOLEAN: 'Yes/No', SELECT: 'Dropdown', MULTISELECT: 'Multi-select' }[ft] ?? ft;
  }
}
