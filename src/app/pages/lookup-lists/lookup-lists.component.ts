import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { HttpClient }   from '@angular/common/http';
import { AuthService }  from '../../services/auth.service';
import { LOOKUP_ENDPOINTS } from '../../core/constants/api.constants';
import { ApiResponse, extractErrorMessage } from '../../core/models/api.models';
import { AppInputComponent, AppTextareaComponent, AppBtnComponent } from '../../shared/ui';

interface LookupListSummary {
  id: string; name: string; description: string | null; valueCount: number;
}

interface LookupListDetail {
  id: string; name: string; description: string | null; values: string[];
}

@Component({
  selector: 'app-lookup-lists',
  standalone: true,
  imports: [CommonModule, FormsModule, AppInputComponent, AppTextareaComponent, AppBtnComponent],
  templateUrl: './lookup-lists.component.html',
  styleUrl: './lookup-lists.component.scss'
})
export class LookupListsComponent implements OnInit {

  private readonly EP = LOOKUP_ENDPOINTS;

  lists       = signal<LookupListSummary[]>([]);
  loading     = signal(true);
  searchQuery = '';

  // ── Modal ─────────────────────────────────────────────────────────────────
  modalMode: 'closed' | 'create' | 'edit' = 'closed';
  saving      = false;
  modalError  = '';
  formTouched = false;
  editTarget: LookupListSummary | null = null;

  form = { name: '', description: '' };
  valueInputs: string[] = [''];

  // ── Delete ────────────────────────────────────────────────────────────────
  deleteTarget: LookupListSummary | null = null;
  deleting    = false;
  deleteError = '';

  // ── Computed ──────────────────────────────────────────────────────────────
  canManage = computed(() => {
    const r = this.auth.currentUser()?.role;
    return r === 'SUPER_ADMIN' || r === 'ADMIN';
  });

  filteredLists = computed(() => {
    const q = this.searchQuery.toLowerCase().trim();
    return q ? this.lists().filter(l => l.name.toLowerCase().includes(q) || (l.description ?? '').toLowerCase().includes(q)) : this.lists();
  });

  skeletonRows = Array(6);

  constructor(private http: HttpClient, public auth: AuthService) {}

  ngOnInit() { this.load(); }

  // ── Data ──────────────────────────────────────────────────────────────────

  load() {
    this.loading.set(true);
    this.http.get<ApiResponse<LookupListSummary[]>>(this.EP.BASE).subscribe({
      next: res => { this.lists.set(res.data ?? []); this.loading.set(false); },
      error: ()  => this.loading.set(false)
    });
  }

  // ── Create / Edit ─────────────────────────────────────────────────────────

  openCreate() {
    this.form = { name: '', description: '' };
    this.valueInputs = [''];
    this.modalError = ''; this.formTouched = false; this.editTarget = null;
    this.modalMode = 'create';
  }

  openEdit(list: LookupListSummary) {
    this.form = { name: list.name, description: list.description ?? '' };
    this.valueInputs = [''];   // will be replaced after fetch
    this.modalError = ''; this.formTouched = false; this.editTarget = list;
    this.modalMode = 'edit';
    this.saving = true;
    this.http.get<ApiResponse<LookupListDetail>>(this.EP.BY_ID(list.id)).subscribe({
      next: res => {
        this.saving = false;
        this.valueInputs = res.data?.values.length ? [...res.data.values] : [''];
      },
      error: e => { this.saving = false; this.modalError = extractErrorMessage(e, 'Failed to load list.'); }
    });
  }

  closeModal() { this.modalMode = 'closed'; this.modalError = ''; }

  // ── Value rows ────────────────────────────────────────────────────────────

  addValue() { this.valueInputs.push(''); }

  removeValue(i: number) {
    if (this.valueInputs.length === 1) { this.valueInputs[0] = ''; return; }
    this.valueInputs.splice(i, 1);
  }

  moveUp(i: number) {
    if (i === 0) return;
    [this.valueInputs[i - 1], this.valueInputs[i]] = [this.valueInputs[i], this.valueInputs[i - 1]];
  }

  moveDown(i: number) {
    if (i === this.valueInputs.length - 1) return;
    [this.valueInputs[i], this.valueInputs[i + 1]] = [this.valueInputs[i + 1], this.valueInputs[i]];
  }

  trackByIdx(i: number) { return i; }

  // ── Save ──────────────────────────────────────────────────────────────────

  save() {
    this.formTouched = true;
    if (!this.form.name.trim()) return;
    const values = this.valueInputs.map(v => v.trim()).filter(Boolean);
    const payload = {
      name:        this.form.name.trim(),
      description: this.form.description.trim() || null,
      values
    };
    this.saving = true; this.modalError = '';
    const req$ = this.modalMode === 'create'
      ? this.http.post<ApiResponse<LookupListDetail>>(this.EP.BASE, payload)
      : this.http.put<ApiResponse<LookupListDetail>>(this.EP.BY_ID(this.editTarget!.id), payload);
    req$.subscribe({
      next: () => { this.saving = false; this.modalMode = 'closed'; this.load(); },
      error: e  => { this.saving = false; this.modalError = extractErrorMessage(e, 'Save failed.'); }
    });
  }

  // ── Delete ────────────────────────────────────────────────────────────────

  openDelete(list: LookupListSummary) { this.deleteTarget = list; this.deleteError = ''; this.deleting = false; }
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
