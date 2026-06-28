import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import {
  VendorApiService, Vendor, CreateVendorPayload, UpdateVendorPayload
} from '../../services/vendor-api.service';
import { extractErrorMessage } from '../../core/models/api.models';
import { AppBtnComponent, AppInputComponent, AppTextareaComponent } from '../../shared/ui';

@Component({
  selector: 'app-vendors',
  standalone: true,
  imports: [CommonModule, FormsModule, AppBtnComponent, AppInputComponent, AppTextareaComponent],
  templateUrl: './vendors.component.html',
  styleUrl: './vendors.component.scss'
})
export class VendorsComponent implements OnInit {

  vendors:  Vendor[] = [];
  loading   = false;
  error     = '';
  searchQ   = '';

  // ── Add / Edit modal ──────────────────────────────────────────────────────
  showModal  = false;
  editTarget: Vendor | null = null;
  saving     = false;
  modalError = '';

  form = {
    name:    '',
    phone:   '',
    email:   '',
    address: '',
    gstin:   '',
    notes:   ''
  };

  // ── Deactivate confirm ────────────────────────────────────────────────────
  showDeactivate:   Vendor | null = null;
  deactivating      = false;

  constructor(private vendorApi: VendorApiService, private router: Router) {}

  ngOnInit() { this.load(); }

  load() {
    this.loading = true;
    this.error   = '';
    this.vendorApi.list()
      .pipe(finalize(() => this.loading = false))
      .subscribe({ next: v => this.vendors = v, error: e => this.error = extractErrorMessage(e) });
  }

  get filtered(): Vendor[] {
    if (!this.searchQ.trim()) return this.vendors;
    const q = this.searchQ.toLowerCase();
    return this.vendors.filter(v =>
      v.name.toLowerCase().includes(q) ||
      (v.phone  && v.phone.includes(q)) ||
      (v.gstin  && v.gstin.toLowerCase().includes(q)) ||
      (v.email  && v.email.toLowerCase().includes(q))
    );
  }

  get activeCount()   { return this.vendors.filter(v => v.isActive).length; }
  get inactiveCount() { return this.vendors.filter(v => !v.isActive).length; }

  // ── Modal ─────────────────────────────────────────────────────────────────
  openAdd() {
    this.editTarget = null;
    this.form       = { name: '', phone: '', email: '', address: '', gstin: '', notes: '' };
    this.modalError = '';
    this.showModal  = true;
  }

  openEdit(v: Vendor, e: Event) {
    e.stopPropagation();
    this.editTarget = v;
    this.form = {
      name:    v.name,
      phone:   v.phone    ?? '',
      email:   v.email    ?? '',
      address: v.address  ?? '',
      gstin:   v.gstin    ?? '',
      notes:   v.notes    ?? ''
    };
    this.modalError = '';
    this.showModal  = true;
  }

  closeModal() { this.showModal = false; }

  save() {
    if (!this.form.name.trim()) { this.modalError = 'Vendor name is required.'; return; }
    this.saving = true;
    this.modalError = '';

    const toNull = (s: string) => s.trim() || null;
    const payload = {
      name:    this.form.name.trim(),
      phone:   toNull(this.form.phone),
      email:   toNull(this.form.email),
      address: toNull(this.form.address),
      gstin:   toNull(this.form.gstin),
      notes:   toNull(this.form.notes)
    };

    const req$ = this.editTarget
      ? this.vendorApi.update(this.editTarget.id, payload as UpdateVendorPayload)
      : this.vendorApi.create(payload as CreateVendorPayload);

    req$.pipe(finalize(() => this.saving = false))
      .subscribe({
        next: updated => {
          if (this.editTarget) {
            const idx = this.vendors.findIndex(v => v.id === this.editTarget!.id);
            if (idx !== -1) this.vendors[idx] = updated;
          } else {
            this.vendors.unshift(updated);
          }
          this.closeModal();
        },
        error: e => this.modalError = extractErrorMessage(e)
      });
  }

  // ── Deactivate ────────────────────────────────────────────────────────────
  confirmDeactivate(v: Vendor, e: Event) {
    e.stopPropagation();
    this.showDeactivate = v;
  }

  doDeactivate() {
    if (!this.showDeactivate) return;
    this.deactivating = true;
    this.vendorApi.deactivate(this.showDeactivate.id)
      .pipe(finalize(() => this.deactivating = false))
      .subscribe({
        next: () => {
          const v = this.vendors.find(x => x.id === this.showDeactivate!.id);
          if (v) v.isActive = false;
          this.showDeactivate = null;
        },
        error: e => alert(extractErrorMessage(e))
      });
  }

  goToDetail(v: Vendor) { this.router.navigate(['/vendors', v.id]); }

  formatDate(iso: string) {
    return new Date(iso).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  }
}
