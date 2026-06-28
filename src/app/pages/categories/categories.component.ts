import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { RouterLink }   from '@angular/router';
import { HttpClient }   from '@angular/common/http';
import { forkJoin }     from 'rxjs';
import { AuthService }  from '../../services/auth.service';
import { PRODUCT_ENDPOINTS, LOOKUP_ENDPOINTS, SPEC_GROUP_ENDPOINTS } from '../../core/constants/api.constants';
import { ApiResponse, extractErrorMessage } from '../../core/models/api.models';
import { AppInputComponent, AppTextareaComponent, AppSelectComponent, AppCheckboxComponent, AppBtnComponent } from '../../shared/ui';

// ── Types ─────────────────────────────────────────────────────────────────────

type FieldType = 'TEXT' | 'NUMBER' | 'BOOLEAN' | 'SELECT' | 'MULTISELECT';

interface CategoryDto {
  id: string; name: string; slug: string; description: string | null;
  imageUrl: string | null; imageIsVideo: boolean;
  parentId: string | null; parentName: string | null;
  sortOrder: number; isActive: boolean;
  attributeDefinitions: AttributeDefinitionDto[] | undefined;
  createdAt: string; updatedAt: string;
}

interface CategoryNode { id: string; name: string; children: CategoryNode[]; }
interface PageData<T>  { content: T[]; totalElements: number; totalPages: number; number: number; }

interface AttributeDefinitionDto {
  id: string; label: string; fieldKey: string; fieldType: FieldType;
  options: string | null; unit: string | null; defaultValue: string | null;
  required: boolean; sortOrder: number; groupName: string | null;
}

interface LookupListSummary {
  id: string; name: string; description: string | null; valueCount: number;
}

interface AssignedSpecGroup {
  id: string; name: string; description: string | null; fieldCount: number;
}

interface PendingAttr {
  label: string; fieldKey: string; fieldType: FieldType;
  options: string; unit: string; defaultValue: string;
  required: boolean; sortOrder: number; groupName: string;
}

// ── Component ─────────────────────────────────────────────────────────────────

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, AppInputComponent, AppTextareaComponent, AppSelectComponent, AppCheckboxComponent, AppBtnComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {

  private readonly EP        = PRODUCT_ENDPOINTS;
  private readonly LOOKUP_EP = LOOKUP_ENDPOINTS;
  private readonly SG_EP     = SPEC_GROUP_ENDPOINTS;

  // ── List state ────────────────────────────────────────────────────────────
  allCategories = signal<CategoryDto[]>([]);
  loading       = signal(true);
  skeletonRows  = Array(8);

  rootSearch = '';
  subSearch  = '';

  // ── Two-panel selection ───────────────────────────────────────────────────
  selectedRoot: CategoryDto | null = null;

  // ── Tree (for parent dropdown) ────────────────────────────────────────────
  tree = signal<CategoryNode[]>([]);

  // ── Create / Edit modal ───────────────────────────────────────────────────
  modalMode: 'closed' | 'create' | 'edit' = 'closed';
  saving      = false;
  modalError  = '';
  formTouched = false;
  attrFormTouched = false;
  editTarget: CategoryDto | null = null;

  form = { name: '', slug: '', description: '', parentId: '', isActive: true };
  categoryType: 'parent' | 'child' = 'parent';
  slugEdited = false;

  private originalCatForm: { name: string; slug: string; description: string; parentId: string; isActive: boolean; categoryType: 'parent' | 'child' } | null = null;

  get isFormValid(): boolean {
    if (!this.form.name.trim()) return false;
    if (this.categoryType === 'child' && !this.form.parentId) return false;
    return true;
  }

  get formChanged(): boolean {
    if (!this.originalCatForm) return true;
    return (
      this.form.name        !== this.originalCatForm.name        ||
      this.form.slug        !== this.originalCatForm.slug        ||
      this.form.description !== this.originalCatForm.description ||
      this.form.parentId    !== this.originalCatForm.parentId    ||
      this.form.isActive    !== this.originalCatForm.isActive    ||
      this.categoryType     !== this.originalCatForm.categoryType
    );
  }

  get saveDisabled(): boolean {
    if (!this.isFormValid) return true;
    if (this.modalMode === 'edit') return !this.formChanged;
    return false;
  }

  // ── Image upload ──────────────────────────────────────────────────────────
  imageUploading  = false;
  imageError      = '';
  uploadImageType: 'image' | 'video' = 'image';

  // ── Delete confirm ────────────────────────────────────────────────────────
  deleteTarget: CategoryDto | null = null;
  deleting  = false;
  deleteError = '';

  // ── Tabs ─────────────────────────────────────────────────────────────────
  activeTab: 'details' | 'specs' | 'groups' = 'details';

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
    options: '', unit: '', defaultValue: '', required: false, sortOrder: 0, groupName: ''
  };
  fieldKeyEdited = false;

  // ── Spec Groups tab (edit mode) ───────────────────────────────────────────
  assignedGroups: AssignedSpecGroup[] = [];
  allGroups:      AssignedSpecGroup[] = [];
  sgLoading    = false;
  sgLoaded     = false;
  allSgLoaded  = false;
  sgError      = '';
  sgPickerOpen   = false;
  sgPickerSearch = '';
  sgAssigning: string | null = null;
  sgRemoving:  string | null = null;

  // ── Spec Groups (create mode inline picker) ───────────────────────────────
  pendingGroups:     AssignedSpecGroup[] = [];
  sgCreatePickerOpen  = false;
  sgCreateSearch      = '';
  sgCreateResults: AssignedSpecGroup[] = [];
  sgCreateSearching   = false;
  sgCreateSearched    = false;

  // ── Pending spec fields (create mode) ────────────────────────────────────
  pendingAttrs: PendingAttr[] = [];
  createAttrView: 'list' | 'form' = 'list';
  pendingAttrEditIndex: number | null = null;

  get activeAttrView(): 'list' | 'form' {
    return this.modalMode === 'create' ? this.createAttrView : this.attrView;
  }

  get isEditingAttr(): boolean {
    return this.modalMode === 'edit' ? !!this.attrEditTarget : this.pendingAttrEditIndex !== null;
  }

  // ── Inherited spec groups from parent category ────────────────────────────
  parentInheritedGroups:  AssignedSpecGroup[] = [];
  parentInheritedLoading  = false;

  get filteredSgPicker(): AssignedSpecGroup[] {
    const q = this.sgPickerSearch.toLowerCase().trim();
    const assigned = new Set(this.assignedGroups.map(g => g.id));
    const available = this.allGroups.filter(g => !assigned.has(g.id));
    return q
      ? available.filter(g =>
          g.name.toLowerCase().includes(q) ||
          (g.description ?? '').toLowerCase().includes(q))
      : available;
  }

  // ── Lookup List picker (for SELECT/MULTISELECT import) ────────────────────
  lookupLists: LookupListSummary[] = [];
  lookupListsLoaded = false;
  lookupPickerOpen  = false;
  lookupLoading     = false;
  lookupImporting   = false;

  // Individual option inputs for SELECT/MULTISELECT (replaces JSON textarea)
  optionInputs: string[] = [''];

  get showOptionInputs(): boolean {
    return this.attrForm.fieldType === 'SELECT' || this.attrForm.fieldType === 'MULTISELECT';
  }

  get existingGroups(): string[] {
    const seen = new Set<string>();
    const result: string[] = [];
    for (const a of [...this.attrs, ...this.pendingAttrs]) {
      const g = a.groupName?.trim() ?? '';
      if (g && !seen.has(g)) { seen.add(g); result.push(g); }
    }
    return result;
  }

  addOption() { this.optionInputs.push(''); }

  removeOption(i: number) {
    if (this.optionInputs.length > 1) this.optionInputs.splice(i, 1);
  }

  syncOptions() {
    const opts = this.optionInputs.map(o => o.trim()).filter(Boolean);
    this.attrForm.options = opts.length ? JSON.stringify(opts) : '';
  }

  openLookupPicker() {
    this.lookupPickerOpen = true;
    if (this.lookupListsLoaded) return;
    this.lookupLoading = true;
    this.http.get<ApiResponse<LookupListSummary[]>>(this.LOOKUP_EP.BASE).subscribe({
      next: res => { this.lookupLists = res.data ?? []; this.lookupLoading = false; this.lookupListsLoaded = true; },
      error: ()  => { this.lookupLoading = false; }
    });
  }

  closeLookupPicker() { this.lookupPickerOpen = false; }

  importFromLookup(list: LookupListSummary) {
    this.lookupImporting = true;
    this.http.get<ApiResponse<{ values: string[] }>>(this.LOOKUP_EP.BY_ID(list.id)).subscribe({
      next: res => {
        const vals = res.data?.values ?? [];
        if (vals.length) { this.optionInputs = [...vals]; this.syncOptions(); }
        this.lookupImporting = false;
        this.lookupPickerOpen = false;
      },
      error: () => { this.lookupImporting = false; }
    });
  }

  readonly fieldTypes: FieldType[] = ['TEXT', 'NUMBER', 'BOOLEAN', 'SELECT', 'MULTISELECT'];

  // ── Computed ──────────────────────────────────────────────────────────────
  canManage = computed(() => {
    const r = this.auth.currentUser()?.role;
    return r === 'SUPER_ADMIN' || r === 'ADMIN' || r === 'INVENTORY';
  });

  get rootCategories(): CategoryDto[] {
    const q = this.rootSearch.trim().toLowerCase();
    return this.allCategories()
      .filter(c => !c.parentId)
      .filter(c => !q || c.name.toLowerCase().includes(q));
  }

  get subCategories(): CategoryDto[] {
    if (!this.selectedRoot) return [];
    const q = this.subSearch.trim().toLowerCase();
    return this.allCategories()
      .filter(c => c.parentId === this.selectedRoot!.id)
      .filter(c => !q || c.name.toLowerCase().includes(q));
  }

  childCount(parentId: string): number {
    return this.allCategories().filter(c => c.parentId === parentId).length;
  }

  selectRoot(cat: CategoryDto) {
    this.selectedRoot = this.selectedRoot?.id === cat.id ? null : cat;
    this.subSearch = '';
  }

  onGroupsTabClick() {
    this.activeTab = 'groups';
    if (this.modalMode === 'edit') this.loadSgIfNeeded();
  }

  onSpecsTabClick() {
    this.activeTab = 'specs';
    if (this.modalMode === 'edit') this.loadAttrsIfNeeded();
  }

  constructor(private http: HttpClient, public auth: AuthService) {}

  ngOnInit() { this.loadTree(); this.loadAll(); }

  // ── List ──────────────────────────────────────────────────────────────────

  loadAll() {
    this.loading.set(true);
    this.http.get<ApiResponse<PageData<CategoryDto>>>(this.EP.CATEGORIES, {
      params: { page: '0', size: '500' }
    }).subscribe({
      next: res => {
        this.allCategories.set(res.data?.content ?? []);
        this.loading.set(false);
        // Re-sync selectedRoot in case it was edited
        if (this.selectedRoot) {
          const refreshed = this.allCategories().find(c => c.id === this.selectedRoot!.id);
          this.selectedRoot = refreshed ?? null;
        }
      },
      error: () => this.loading.set(false)
    });
  }

  loadTree() {
    this.http.get<ApiResponse<CategoryNode[]>>(this.EP.CATEGORIES_TREE).subscribe({
      next: res => this.tree.set(res.data ?? [])
    });
  }

  categoryColor(name: string): string {
    const palette = ['#2874F0','#E53935','#43A047','#FB8C00','#8E24AA','#00ACC1','#D81B60','#546E7A'];
    let hash = 0;
    for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) & 0xffff;
    return palette[hash % palette.length];
  }

  initials(name: string) { return name.slice(0, 2).toUpperCase(); }

  get parentCategoryOpts() {
    const blocked = this.modalMode === 'edit' && this.editTarget
      ? this.collectDescendantIds(this.tree(), this.editTarget.id)
      : new Set<string>();
    // Only root categories can be parents (enforce 2-level hierarchy)
    return this.allCategories()
      .filter(c => !c.parentId)
      .filter(c => !(this.modalMode === 'edit' && this.editTarget && blocked.has(c.id)))
      .map(c => ({ value: c.id, label: c.name, disabled: false }));
  }

  private collectDescendantIds(nodes: CategoryNode[], rootId: string): Set<string> {
    const ids = new Set<string>();
    const walk = (list: CategoryNode[], inside: boolean) => {
      for (const n of list) {
        const enter = inside || n.id === rootId;
        if (enter) ids.add(n.id);
        if (n.children?.length) walk(n.children, enter);
      }
    };
    walk(nodes, false);
    return ids;
  }

  get fieldTypeOpts() {
    return this.fieldTypes.map(ft => ({ value: ft, label: this.fieldTypeLabel(ft) }));
  }

  // ── Create / Edit ─────────────────────────────────────────────────────────

  openEdit(cat: CategoryDto) {
    this.form = {
      name: cat.name, slug: cat.slug, description: cat.description ?? '',
      parentId: cat.parentId ?? '', isActive: cat.isActive
    };
    this.categoryType = cat.parentId ? 'child' : 'parent';
    this.originalCatForm = { ...this.form, categoryType: this.categoryType };
    this.modalError = ''; this.formTouched = false; this.editTarget = cat;
    this.activeTab = 'details'; this.attrTarget = cat; this.attrs = []; this.attrsLoaded = false;
    this.attrView = 'list'; this.attrError = ''; this.attrEditTarget = null;
    this.assignedGroups = []; this.sgLoaded = false; this.allSgLoaded = false;
    this.sgError = ''; this.sgPickerOpen = false; this.sgPickerSearch = '';
    this.sgAssigning = null; this.sgRemoving = null;
    this.parentInheritedGroups = [];
    if (cat.parentId) {
      this.parentInheritedLoading = true;
      this.http.get<ApiResponse<AssignedSpecGroup[]>>(this.SG_EP.BY_CATEGORY(cat.parentId)).subscribe({
        next: res => { this.parentInheritedGroups = res.data ?? []; this.parentInheritedLoading = false; },
        error: () => { this.parentInheritedLoading = false; }
      });
    }
    this.modalMode = 'edit';
  }

  openCreate(parentId?: string) {
    this.form = { name: '', slug: '', description: '', parentId: parentId ?? '', isActive: true };
    this.categoryType = parentId ? 'child' : 'parent';
    this.slugEdited = false;
    this.originalCatForm = null;
    this.modalError = ''; this.formTouched = false; this.editTarget = null;
    this.activeTab = 'details'; this.modalMode = 'create';
    this.pendingGroups        = [];
    this.sgCreatePickerOpen   = false;
    this.sgCreateSearch       = '';
    this.sgCreateResults      = [];
    this.sgCreateSearched     = false;
    this.pendingAttrs         = [];
    this.createAttrView       = 'list';
    this.pendingAttrEditIndex = null;
  }

  setCategoryType(type: 'parent' | 'child') {
    this.categoryType = type;
    if (type === 'parent') { this.form.parentId = ''; this.parentInheritedGroups = []; }
  }

  onParentChange(parentId: string) {
    this.form.parentId = parentId;
    this.parentInheritedGroups = [];
    if (!parentId) return;
    this.parentInheritedLoading = true;
    this.http.get<ApiResponse<AssignedSpecGroup[]>>(this.SG_EP.BY_CATEGORY(parentId)).subscribe({
      next: res => { this.parentInheritedGroups = res.data ?? []; this.parentInheritedLoading = false; },
      error: () => { this.parentInheritedLoading = false; }
    });
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
    if (!this.isFormValid) return;
    this.saving = true; this.modalError = '';

    const payload = {
      name:        this.form.name.trim(),
      slug:        this.form.slug.trim() || null,
      description: this.form.description.trim() || null,
      parentId:    this.categoryType === 'child' ? (this.form.parentId || null) : null,
      sortOrder:   0,
      isActive:    this.form.isActive,
    };

    if (this.modalMode === 'create') {
      this.http.post<ApiResponse<CategoryDto>>(this.EP.CATEGORIES, payload).subscribe({
        next: res => {
          const newId = res.data!.id;
          const done = () => { this.saving = false; this.modalMode = 'closed'; this.loadAll(); this.loadTree(); };
          const requests$ = [
            ...this.pendingGroups.map(g =>
              this.http.post<ApiResponse<void>>(this.SG_EP.ASSIGN(newId, g.id), {})),
            ...this.pendingAttrs.map((a, idx) =>
              this.http.post<ApiResponse<any>>(this.EP.CATEGORY_ATTRS(newId), {
                label: a.label, fieldKey: a.fieldKey, fieldType: a.fieldType,
                options: a.options || null, unit: a.unit || null,
                defaultValue: a.defaultValue || null,
                required: a.required, sortOrder: idx, groupName: a.groupName || null
              }))
          ];
          if (!requests$.length) { done(); return; }
          forkJoin(requests$).subscribe({ next: done, error: done });
        },
        error: e => { this.saving = false; this.modalError = extractErrorMessage(e, 'Save failed.'); }
      });
    } else {
      this.http.put<ApiResponse<CategoryDto>>(`${this.EP.CATEGORIES}/${this.editTarget!.id}`, payload).subscribe({
        next: () => { this.saving = false; this.modalMode = 'closed'; this.loadAll(); this.loadTree(); },
        error: e => { this.saving = false; this.modalError = extractErrorMessage(e, 'Save failed.'); }
      });
    }
  }

  // ── Delete ────────────────────────────────────────────────────────────────

  openDelete(cat: CategoryDto) { this.deleteTarget = cat; this.deleteError = ''; this.deleting = false; }
  closeDelete() { this.deleteTarget = null; this.deleteError = ''; }

  confirmDelete() {
    if (!this.deleteTarget) return;
    this.deleting = true; this.deleteError = '';
    this.http.delete<ApiResponse<void>>(`${this.EP.CATEGORIES}/${this.deleteTarget.id}`).subscribe({
      next: () => { this.deleting = false; this.deleteTarget = null; this.loadAll(); this.loadTree(); },
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
      options: '', unit: '', defaultValue: '', required: false,
      sortOrder: this.modalMode === 'create' ? this.pendingAttrs.length : this.attrs.length,
      groupName: ''
    };
    this.fieldKeyEdited = false;
    this.optionInputs = [''];
    this.lookupPickerOpen = false;
    this.attrEditTarget = null;
    this.pendingAttrEditIndex = null;
    this.attrError = ''; this.attrFormTouched = false;
    if (this.modalMode === 'create') { this.createAttrView = 'form'; }
    else { this.attrView = 'form'; }
  }

  openEditPendingAttr(i: number) {
    const a = this.pendingAttrs[i];
    this.attrForm = {
      label: a.label, fieldKey: a.fieldKey, fieldType: a.fieldType,
      options: a.options, unit: a.unit, defaultValue: a.defaultValue,
      required: a.required, sortOrder: a.sortOrder, groupName: a.groupName
    };
    try {
      const parsed = a.options ? JSON.parse(a.options) : [];
      this.optionInputs = parsed.length ? parsed : [''];
    } catch { this.optionInputs = ['']; }
    this.lookupPickerOpen = false;
    this.pendingAttrEditIndex = i; this.attrEditTarget = null;
    this.attrError = ''; this.attrFormTouched = false; this.fieldKeyEdited = true;
    this.createAttrView = 'form';
  }

  removePendingAttr(i: number) { this.pendingAttrs.splice(i, 1); }

  openEditAttr(attr: AttributeDefinitionDto) {
    this.attrForm = {
      label:        attr.label,
      fieldKey:     attr.fieldKey,
      fieldType:    attr.fieldType,
      options:      attr.options ?? '',
      unit:         attr.unit ?? '',
      defaultValue: attr.defaultValue ?? '',
      required:     attr.required,
      sortOrder:    attr.sortOrder,
      groupName:    attr.groupName ?? ''
    };
    try {
      const parsed = attr.options ? JSON.parse(attr.options) : [];
      this.optionInputs = parsed.length ? parsed : [''];
    } catch { this.optionInputs = ['']; }
    this.lookupPickerOpen = false;
    this.attrEditTarget = attr; this.attrError = ''; this.attrView = 'form';
  }

  backToAttrList() {
    if (this.modalMode === 'create') { this.createAttrView = 'list'; }
    else { this.attrView = 'list'; }
    this.attrError = '';
  }

  saveAttr() {
    this.attrFormTouched = true;
    if (!this.attrForm.label.trim()) return;

    if (this.modalMode === 'create') {
      if (!this.attrForm.fieldKey.trim()) return;
      const pa: PendingAttr = {
        label: this.attrForm.label.trim(), fieldKey: this.attrForm.fieldKey.trim(),
        fieldType: this.attrForm.fieldType, options: this.attrForm.options.trim(),
        unit: this.attrForm.unit.trim(), defaultValue: this.attrForm.defaultValue.trim(),
        required: this.attrForm.required,
        sortOrder: this.pendingAttrEditIndex !== null
          ? this.pendingAttrs[this.pendingAttrEditIndex].sortOrder
          : this.pendingAttrs.length,
        groupName: this.attrForm.groupName.trim()
      };
      if (this.pendingAttrEditIndex !== null) {
        this.pendingAttrs[this.pendingAttrEditIndex] = pa;
        this.pendingAttrEditIndex = null;
      } else {
        this.pendingAttrs.push(pa);
      }
      this.createAttrView = 'list';
      return;
    }

    if (!this.attrTarget) return;
    if (!this.attrEditTarget && !this.attrForm.fieldKey.trim()) return;
    this.attrSaving = true; this.attrError = '';

    let payload: any;
    let url: string;
    let req$;

    const groupName = this.attrForm.groupName.trim() || null;
    if (this.attrEditTarget) {
      payload = {
        label:        this.attrForm.label.trim(),
        fieldType:    this.attrForm.fieldType,
        options:      this.attrForm.options.trim() || null,
        unit:         this.attrForm.unit.trim() || null,
        defaultValue: this.attrForm.defaultValue.trim() || null,
        required:     this.attrForm.required,
        sortOrder:    this.attrForm.sortOrder,
        groupName
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
        sortOrder:    this.attrForm.sortOrder,
        groupName
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

  // ── Spec Groups ───────────────────────────────────────────────────────────

  loadSgIfNeeded() {
    if (this.sgLoaded || !this.attrTarget) return;
    this.loadAssignedGroups();
    this.loadAllGroups();
  }

  private loadAssignedGroups() {
    if (!this.attrTarget) return;
    this.sgLoading = true;
    this.http.get<ApiResponse<AssignedSpecGroup[]>>(
      this.SG_EP.BY_CATEGORY(this.attrTarget.id)
    ).subscribe({
      next: res => { this.assignedGroups = res.data ?? []; this.sgLoading = false; this.sgLoaded = true; },
      error: ()  => { this.sgLoading = false; }
    });
  }

  private loadAllGroups() {
    if (this.allSgLoaded) return;
    this.http.get<ApiResponse<any>>(this.SG_EP.BASE, { params: { page: 0, size: 200 } }).subscribe({
      next: res => { this.allGroups = res.data?.content ?? []; this.allSgLoaded = true; },
      error: ()  => {}
    });
  }

  searchSgCreate() {
    const q = this.sgCreateSearch.trim();
    if (!q) return;
    this.sgCreateSearching = true;
    this.sgCreateSearched  = true;
    const pendingIds = new Set(this.pendingGroups.map(g => g.id));
    this.http.get<ApiResponse<any>>(this.SG_EP.BASE, { params: { search: q, page: 0, size: 20 } }).subscribe({
      next: res => {
        this.sgCreateResults = (res.data?.content ?? []).filter((g: AssignedSpecGroup) => !pendingIds.has(g.id));
        this.sgCreateSearching = false;
      },
      error: () => { this.sgCreateSearching = false; }
    });
  }

  onSgCreateKeydown(e: KeyboardEvent) { if (e.key === 'Enter') this.searchSgCreate(); }

  addPendingGroup(g: AssignedSpecGroup) {
    if (!this.pendingGroups.some(p => p.id === g.id)) {
      this.pendingGroups.push(g);
      this.sgCreateResults = this.sgCreateResults.filter(r => r.id !== g.id);
    }
  }

  removePendingGroup(id: string) {
    this.pendingGroups = this.pendingGroups.filter(g => g.id !== id);
  }

  assignGroup(groupId: string) {
    if (!this.attrTarget) return;
    this.sgAssigning = groupId; this.sgError = '';
    this.http.post<ApiResponse<void>>(
      this.SG_EP.ASSIGN(this.attrTarget.id, groupId), {}
    ).subscribe({
      next: () => { this.sgAssigning = null; this.sgLoaded = false; this.loadAssignedGroups(); },
      error: e  => { this.sgAssigning = null; this.sgError = extractErrorMessage(e, 'Assign failed.'); }
    });
  }

  removeGroup(groupId: string) {
    if (!this.attrTarget) return;
    this.sgRemoving = groupId; this.sgError = '';
    this.http.delete<ApiResponse<void>>(
      this.SG_EP.ASSIGN(this.attrTarget.id, groupId)
    ).subscribe({
      next: () => { this.sgRemoving = null; this.sgLoaded = false; this.loadAssignedGroups(); },
      error: e  => { this.sgRemoving = null; this.sgError = extractErrorMessage(e, 'Remove failed.'); }
    });
  }

  // ── Image upload ──────────────────────────────────────────────────────────

  onImageSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length || !this.editTarget) return;
    const file = input.files[0];
    input.value = '';
    this.imageUploading = true;
    this.imageError = '';
    const fd = new FormData();
    fd.append('file', file);
    fd.append('type', this.uploadImageType);
    this.http.post<ApiResponse<CategoryDto>>(this.EP.CATEGORY_IMAGE(this.editTarget.id), fd).subscribe({
      next: res => {
        this.imageUploading = false;
        if (res.data) {
          this.editTarget = res.data;
          this.allCategories.update((list: CategoryDto[]) => list.map(c => c.id === res.data!.id ? res.data! : c));
        }
      },
      error: e => { this.imageUploading = false; this.imageError = extractErrorMessage(e, 'Upload failed.'); }
    });
  }

  removeImage() {
    if (!this.editTarget) return;
    this.imageUploading = true;
    this.imageError = '';
    this.http.delete<ApiResponse<CategoryDto>>(this.EP.CATEGORY_IMAGE(this.editTarget.id)).subscribe({
      next: res => {
        this.imageUploading = false;
        if (res.data) {
          this.editTarget = res.data;
          this.allCategories.update((list: CategoryDto[]) => list.map(c => c.id === res.data!.id ? res.data! : c));
        }
      },
      error: e => { this.imageUploading = false; this.imageError = extractErrorMessage(e, 'Remove failed.'); }
    });
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

  getParentName(parentId: string): string {
    return this.allCategories().find(c => c.id === parentId)?.name ?? 'Parent';
  }

  fieldTypeLabel(ft: FieldType): string {
    return { TEXT: 'Text', NUMBER: 'Number', BOOLEAN: 'Yes/No', SELECT: 'Dropdown', MULTISELECT: 'Multi-select' }[ft] ?? ft;
  }
}
