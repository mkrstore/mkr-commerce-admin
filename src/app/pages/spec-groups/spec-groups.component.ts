import { Component, OnInit, OnDestroy, signal, computed, HostListener, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { HttpClient }   from '@angular/common/http';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
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

interface FieldResult {
  id: string; name: string; fieldType: string;
}

interface PageDto<T> {
  content: T[]; page: number; size: number; totalElements: number; totalPages: number;
}

@Component({
  selector: 'app-spec-groups',
  standalone: true,
  imports: [CommonModule, FormsModule, AppInputComponent, AppTextareaComponent, AppBtnComponent],
  templateUrl: './spec-groups.component.html',
  styleUrl: './spec-groups.component.scss'
})
export class SpecGroupsComponent implements OnInit, OnDestroy {

  private readonly EP = SPEC_GROUP_ENDPOINTS;

  // ── Data ──────────────────────────────────────────────────────────────────
  groups        = signal<SpecGroupSummary[]>([]);
  loading       = signal(true);
  totalElements = signal(0);
  totalPages    = signal(0);

  // ── UI state ──────────────────────────────────────────────────────────────
  searchQuery = signal('');
  view        = signal<'card' | 'table'>('card');
  isMobile    = signal(false);
  currentPage = signal(0);

  pageSize = computed(() => this.view() === 'card' || this.isMobile() ? 16 : 7);

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

  canManage = computed(() => {
    const r = this.auth.currentUser()?.role;
    return r === 'SUPER_ADMIN' || r === 'ADMIN';
  });

  // ── Search debounce ───────────────────────────────────────────────────────
  @ViewChild('pageTop') private pageTopRef!: ElementRef<HTMLElement>;

  private searchInput$ = new Subject<string>();
  private destroy$     = new Subject<void>();
  private scrollToTop  = false;

  // ── Field picker ──────────────────────────────────────────────────────────
  fieldPickerOpen     = false;
  fieldSearchQuery    = '';
  fieldSearchResults: FieldResult[] = [];
  fieldSearchLoading  = false;
  fieldSearched       = false;

  // ── Modal ─────────────────────────────────────────────────────────────────
  modalMode: 'closed' | 'create' | 'edit' = 'closed';
  saving      = false;
  modalError  = '';
  formTouched = false;
  editTarget: SpecGroupSummary | null = null;

  form = { name: '', description: '' };
  selectedFields: FieldResult[] = [];

  private originalGroup: { name: string; description: string; fieldIds: string[] } | null = null;

  // ── Delete ────────────────────────────────────────────────────────────────
  deleteTarget: SpecGroupSummary | null = null;
  deleting    = false;
  deleteError = '';

  skeletonRows = Array(8);

  // ── Button state ──────────────────────────────────────────────────────────
  get groupFormValid(): boolean {
    return this.form.name.trim().length > 0;
  }

  get groupFormChanged(): boolean {
    if (!this.originalGroup) return false;
    const currentIds = this.selectedFields.map(f => f.id).join(',');
    const originalIds = this.originalGroup.fieldIds.join(',');
    return (
      this.form.name.trim() !== this.originalGroup.name ||
      (this.form.description.trim() || '') !== this.originalGroup.description ||
      currentIds !== originalIds
    );
  }

  get saveDisabled(): boolean {
    if (!this.groupFormValid) return true;
    if (this.modalMode === 'edit') return !this.groupFormChanged;
    return false;
  }

  constructor(private http: HttpClient, public auth: AuthService) {}

  @HostListener('window:resize')
  updateMobile() { this.isMobile.set(window.innerWidth <= 600); }

  ngOnInit() {
    this.updateMobile();
    const saved = localStorage.getItem('sg-view');
    if (saved === 'table') this.view.set('table');
    this.searchInput$.pipe(
      debounceTime(350),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(() => { this.currentPage.set(0); this.load(); });
    this.load();
  }

  setView(v: 'card' | 'table') {
    this.view.set(v);
    localStorage.setItem('sg-view', v);
    this.currentPage.set(0);
    this.load();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ── Data ──────────────────────────────────────────────────────────────────

  load() {
    this.loading.set(true);
    const params: Record<string, string | number> = {
      page: this.currentPage(),
      size: this.pageSize(),
    };
    const q = this.searchQuery().trim();
    if (q) params['search'] = q;

    this.http.get<ApiResponse<PageDto<SpecGroupSummary>>>(this.EP.BASE, { params }).subscribe({
      next: res => {
        this.groups.set(res.data?.content ?? []);
        this.totalElements.set(res.data?.totalElements ?? 0);
        this.totalPages.set(res.data?.totalPages ?? 0);
        this.loading.set(false);
        if (this.scrollToTop) {
          this.scrollToTop = false;
          setTimeout(() => { if (this.pageTopRef?.nativeElement) this.pageTopRef.nativeElement.scrollTop = 0; }, 0);
        }
      },
      error: () => this.loading.set(false)
    });
  }

  // ── Search & Pagination ───────────────────────────────────────────────────

  onSearchChange(q: string) { this.searchQuery.set(q); this.searchInput$.next(q); }
  clearSearch()              { this.searchQuery.set(''); this.searchInput$.next(''); }

  goToPage(p: number | '...') {
    if (p === '...') return;
    this.scrollToTop = true;
    this.currentPage.set((p as number) - 1);
    this.load();
  }
  prevPage() { if (this.currentPage() > 0)                     { this.scrollToTop = true; this.currentPage.update(p => p - 1); this.load(); } }
  nextPage() { if (this.currentPage() < this.totalPages() - 1) { this.scrollToTop = true; this.currentPage.update(p => p + 1); this.load(); } }

  // ── Field picker ──────────────────────────────────────────────────────────

  openFieldPicker() {
    this.fieldPickerOpen    = true;
    this.fieldSearchQuery   = '';
    this.fieldSearchResults = [];
    this.fieldSearched      = false;
  }

  closeFieldPicker() {
    this.fieldPickerOpen    = false;
    this.fieldSearchQuery   = '';
    this.fieldSearchResults = [];
    this.fieldSearched      = false;
  }

  searchFields() {
    this.fetchFields(this.fieldSearchQuery.trim());
  }

  private fetchFields(q: string) {
    this.fieldSearchLoading = true;
    this.fieldSearched      = true;
    const selectedIds = new Set(this.selectedFields.map(f => f.id));
    const params: Record<string, string | number> = { page: 0, size: 20 };
    if (q) params['search'] = q;
    this.http.get<ApiResponse<PageDto<FieldResult>>>(LOOKUP_ENDPOINTS.BASE, { params }).subscribe({
      next: res => {
        this.fieldSearchResults = (res.data?.content ?? []).filter(f => !selectedIds.has(f.id));
        this.fieldSearchLoading = false;
      },
      error: () => { this.fieldSearchLoading = false; }
    });
  }

  onFieldSearchKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') this.searchFields();
  }

  addField(f: FieldResult) {
    if (!this.selectedFields.some(s => s.id === f.id)) {
      this.selectedFields.push({ id: f.id, name: f.name, fieldType: f.fieldType });
      this.fieldSearchResults = this.fieldSearchResults.filter(r => r.id !== f.id);
    }
  }

  removeField(id: string) {
    this.selectedFields = this.selectedFields.filter(f => f.id !== id);
  }

  fieldTypeLabel(ft: string): string {
    return { TEXT: 'Text', NUMBER: 'Number', BOOLEAN: 'Yes/No', SELECT: 'Dropdown', MULTISELECT: 'Multi-select' }[ft] ?? ft;
  }

  // ── Create / Edit ─────────────────────────────────────────────────────────

  openCreate() {
    this.form             = { name: '', description: '' };
    this.selectedFields   = [];
    this.originalGroup    = null;
    this.modalError       = '';
    this.formTouched      = false;
    this.editTarget       = null;
    this.modalMode        = 'create';
    this.closeFieldPicker();
  }

  openEdit(group: SpecGroupSummary) {
    this.form             = { name: group.name, description: group.description ?? '' };
    this.selectedFields   = [];
    this.originalGroup    = null;
    this.modalError       = '';
    this.formTouched      = false;
    this.editTarget       = group;
    this.modalMode        = 'edit';
    this.saving           = true;
    this.closeFieldPicker();

    this.http.get<ApiResponse<SpecGroupDetail>>(this.EP.BY_ID(group.id)).subscribe({
      next: res => {
        this.saving = false;
        this.selectedFields = (res.data?.fields ?? [])
          .sort((a, b) => a.sortOrder - b.sortOrder)
          .map(f => ({ id: f.fieldId, name: f.fieldName, fieldType: f.fieldType }));
        this.originalGroup = {
          name:        group.name,
          description: group.description ?? '',
          fieldIds:    this.selectedFields.map(f => f.id)
        };
      },
      error: e => { this.saving = false; this.modalError = extractErrorMessage(e, 'Failed to load group.'); }
    });
  }

  closeModal() { this.modalMode = 'closed'; this.modalError = ''; this.closeFieldPicker(); }

  save() {
    this.formTouched = true;
    if (!this.form.name.trim()) return;
    const payload = {
      name:        this.form.name.trim(),
      description: this.form.description.trim() || null,
      fieldIds:    this.selectedFields.map(f => f.id)
    };
    this.saving = true; this.modalError = '';
    const req$ = this.modalMode === 'create'
      ? this.http.post<ApiResponse<SpecGroupDetail>>(this.EP.BASE, payload)
      : this.http.put<ApiResponse<SpecGroupDetail>>(this.EP.BY_ID(this.editTarget!.id), payload);
    req$.subscribe({
      next: () => { this.saving = false; this.modalMode = 'closed'; this.load(); },
      error: e  => { this.saving = false; this.modalError = extractErrorMessage(e, 'Save failed.'); }
    });
  }

  // ── Delete ────────────────────────────────────────────────────────────────

  openDelete(group: SpecGroupSummary) { this.deleteTarget = group; this.deleteError = ''; this.deleting = false; }
  closeDelete() { this.deleteTarget = null; this.deleteError = ''; }

  confirmDelete() {
    if (!this.deleteTarget) return;
    this.deleting = true; this.deleteError = '';
    this.http.delete<ApiResponse<void>>(this.EP.BY_ID(this.deleteTarget.id)).subscribe({
      next: () => { this.deleting = false; this.deleteTarget = null; this.load(); },
      error: e  => { this.deleting = false; this.deleteError = extractErrorMessage(e, 'Delete failed.'); }
    });
  }
}
