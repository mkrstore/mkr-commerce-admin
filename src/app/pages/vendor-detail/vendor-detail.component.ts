import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { finalize } from 'rxjs';
import { VendorApiService, Vendor, UpdateVendorPayload } from '../../services/vendor-api.service';
import { ProductSummary } from '../../services/product-api.service';
import { InventoryTx } from '../../services/inventory-api.service';
import { extractErrorMessage } from '../../core/models/api.models';
import { AppBtnComponent, AppInputComponent, AppTextareaComponent } from '../../shared/ui';

type Tab = 'info' | 'products' | 'history';

@Component({
  selector: 'app-vendor-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink,
    AppBtnComponent, AppInputComponent, AppTextareaComponent],
  templateUrl: './vendor-detail.component.html',
  styleUrl: './vendor-detail.component.scss'
})
export class VendorDetailComponent implements OnInit {

  vendor:  Vendor | null = null;
  loading  = false;
  notFound = false;

  activeTab: Tab = 'info';

  // ── Edit ──────────────────────────────────────────────────────────────────
  editing   = false;
  saving    = false;
  saveError = '';
  form = { name: '', phone: '', email: '', address: '', gstin: '', notes: '' };

  // ── Products tab ──────────────────────────────────────────────────────────
  products:        ProductSummary[] = [];
  productsLoading  = false;
  productsError    = '';
  productsLoaded   = false;

  // ── History tab ───────────────────────────────────────────────────────────
  txList:      InventoryTx[] = [];
  txLoading    = false;
  txError      = '';
  txPage       = 0;
  txTotalPages = 0;
  txTotal      = 0;
  txLoaded     = false;

  private vendorId = '';

  constructor(
    private route:     ActivatedRoute,
    private router:    Router,
    private vendorApi: VendorApiService
  ) {}

  ngOnInit() {
    this.vendorId = this.route.snapshot.paramMap.get('id')!;
    this.load();
  }

  load() {
    this.loading = true;
    this.vendorApi.get(this.vendorId)
      .pipe(finalize(() => this.loading = false))
      .subscribe({
        next:  v => { this.vendor = v; this.resetForm(v); },
        error: e => {
          if (e.status === 404) this.notFound = true;
        }
      });
  }

  // ── Tabs ──────────────────────────────────────────────────────────────────
  switchTab(tab: Tab) {
    this.activeTab = tab;
    if (tab === 'products' && !this.productsLoaded) this.loadProducts();
    if (tab === 'history'  && !this.txLoaded)       this.loadTransactions(0);
  }

  // ── Edit ──────────────────────────────────────────────────────────────────
  startEdit() {
    this.resetForm(this.vendor!);
    this.saveError = '';
    this.editing   = true;
  }

  cancelEdit() { this.editing = false; }

  saveEdit() {
    if (!this.form.name.trim()) { this.saveError = 'Name is required.'; return; }
    const toNull = (s: string) => s.trim() || null;
    const payload: UpdateVendorPayload = {
      name:    this.form.name.trim(),
      phone:   toNull(this.form.phone),
      email:   toNull(this.form.email),
      address: toNull(this.form.address),
      gstin:   toNull(this.form.gstin),
      notes:   toNull(this.form.notes)
    };
    this.saving = true;
    this.saveError = '';
    this.vendorApi.update(this.vendorId, payload)
      .pipe(finalize(() => this.saving = false))
      .subscribe({
        next:  v => { this.vendor = v; this.editing = false; },
        error: e => this.saveError = extractErrorMessage(e)
      });
  }

  // ── Products ──────────────────────────────────────────────────────────────
  loadProducts() {
    this.productsLoading = true;
    this.productsError   = '';
    this.vendorApi.getProducts(this.vendorId)
      .pipe(finalize(() => this.productsLoading = false))
      .subscribe({
        next:  p => { this.products = p; this.productsLoaded = true; },
        error: e => this.productsError = extractErrorMessage(e)
      });
  }

  goToProduct(p: ProductSummary) { this.router.navigate(['/products', p.id]); }

  // ── History ───────────────────────────────────────────────────────────────
  loadTransactions(page: number) {
    this.txLoading = true;
    this.txError   = '';
    this.vendorApi.getTransactions(this.vendorId, page, 20)
      .pipe(finalize(() => this.txLoading = false))
      .subscribe({
        next: p => {
          this.txList       = p.content;
          this.txPage       = p.number;
          this.txTotalPages = p.totalPages;
          this.txTotal      = p.totalElements;
          this.txLoaded     = true;
        },
        error: e => this.txError = extractErrorMessage(e)
      });
  }

  txPrev() { if (this.txPage > 0)                    this.loadTransactions(this.txPage - 1); }
  txNext() { if (this.txPage < this.txTotalPages - 1) this.loadTransactions(this.txPage + 1); }

  // ── Helpers ───────────────────────────────────────────────────────────────
  private resetForm(v: Vendor) {
    this.form = {
      name:    v.name,
      phone:   v.phone    ?? '',
      email:   v.email    ?? '',
      address: v.address  ?? '',
      gstin:   v.gstin    ?? '',
      notes:   v.notes    ?? ''
    };
  }

  formatPrice(n: number | null) { return n != null ? '₹' + n.toLocaleString('en-IN') : '—'; }
  formatDate(iso: string) {
    const d = new Date(iso);
    return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })
      + ', ' + d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
  }
  stockLabel(qty: number) {
    if (qty === 0) return 'Out of stock';
    if (qty <= 5)  return qty + ' left';
    return qty + ' in stock';
  }
  stockClass(qty: number) {
    if (qty === 0) return 'badge badge-red';
    if (qty <= 5)  return 'badge badge-amber';
    return 'badge badge-green';
  }
}
