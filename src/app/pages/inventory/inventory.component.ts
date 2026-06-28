import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import {
  ProductApiService, ProductSummary
} from '../../services/product-api.service';
import {
  InventoryApiService, InventoryTx, RestockPayload
} from '../../services/inventory-api.service';
import { VendorApiService, VendorSummary } from '../../services/vendor-api.service';
import { extractErrorMessage } from '../../core/models/api.models';
import {
  AppBtnComponent, AppInputComponent, AppSelectComponent
} from '../../shared/ui';

type SortKey = 'newest' | 'oldest' | 'name_az' | 'price_asc' | 'price_desc' | 'stock_asc';
type Tab     = 'stock' | 'history' | 'low-stock';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule, FormsModule,
    AppBtnComponent, AppInputComponent, AppSelectComponent],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss'
})
export class InventoryComponent implements OnInit {

  // ── Tabs ──────────────────────────────────────────────────────────────────
  activeTab: Tab = 'stock';

  // ── Stock Overview ────────────────────────────────────────────────────────
  products: ProductSummary[] = [];
  loading  = false;
  error    = '';

  searchQ        = '';
  filterCategory = '';
  filterBrand    = '';
  filterStatus   = '';
  sortKey: SortKey = 'newest';

  // ── Vendors (for restock dropdown) ───────────────────────────────────────
  vendors: VendorSummary[] = [];

  // ── Restock modal ─────────────────────────────────────────────────────────
  showRestock         = false;
  restockProduct: ProductSummary | null = null;
  restockVariantId:    string | null = null;
  restockVariantLabel: string | null = null;
  restockQty           = 1;
  restockVendorId:     string = '';    // '' = none, 'custom' = show text box
  restockVendorName    = '';           // free-text fallback when vendorId = 'custom'
  restockPrice: number | null = null;
  restockNotes         = '';
  restockSaving        = false;
  restockError         = '';

  // ── Transaction History ───────────────────────────────────────────────────
  txList:      InventoryTx[] = [];
  txLoading    = false;
  txError      = '';
  txPage       = 0;
  txTotalPages = 0;
  txTotal      = 0;
  txLoaded     = false;

  // ── Low Stock ─────────────────────────────────────────────────────────────
  lowStockList:     ProductSummary[] = [];
  lowStockLoading   = false;
  lowStockError     = '';
  lowStockThreshold = 5;
  lowStockLoaded    = false;

  constructor(
    private productApi:   ProductApiService,
    private inventoryApi: InventoryApiService,
    private vendorApi:    VendorApiService,
    private router:       Router
  ) {}

  ngOnInit() {
    this.loadProducts();
    this.vendorApi.summary().subscribe({ next: v => this.vendors = v });
  }

  // ── Tab switching ─────────────────────────────────────────────────────────
  switchTab(tab: Tab) {
    this.activeTab = tab;
    if (tab === 'history'   && !this.txLoaded)        this.loadTransactions(0);
    if (tab === 'low-stock' && !this.lowStockLoaded)  this.loadLowStock();
  }

  // ── Products ──────────────────────────────────────────────────────────────
  loadProducts() {
    this.loading = true;
    this.error   = '';
    this.productApi.listProducts({ size: 200 })
      .pipe(finalize(() => this.loading = false))
      .subscribe({
        next:  p => this.products = p.content,
        error: e => this.error = extractErrorMessage(e)
      });
  }

  get filtered(): ProductSummary[] {
    let list = this.products;
    if (this.searchQ.trim()) {
      const q = this.searchQ.toLowerCase();
      list = list.filter(p => p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q));
    }
    if (this.filterCategory) list = list.filter(p => p.categoryName === this.filterCategory);
    if (this.filterBrand)    list = list.filter(p => p.brandName    === this.filterBrand);
    if (this.filterStatus === 'active') list = list.filter(p => p.status === 'ACTIVE');
    if (this.filterStatus === 'draft')  list = list.filter(p => p.status === 'DRAFT');
    if (this.filterStatus === 'low')    list = list.filter(p => p.stockQty > 0 && p.stockQty <= 5);
    if (this.filterStatus === 'out')    list = list.filter(p => p.stockQty === 0);
    return [...list].sort((a, b) => {
      switch (this.sortKey) {
        case 'name_az':    return a.name.localeCompare(b.name);
        case 'price_asc':  return a.priceRetail - b.priceRetail;
        case 'price_desc': return b.priceRetail - a.priceRetail;
        case 'stock_asc':  return a.stockQty - b.stockQty;
        case 'oldest':     return a.createdAt.localeCompare(b.createdAt);
        default:           return b.createdAt.localeCompare(a.createdAt);
      }
    });
  }

  get categoryOpts() {
    return [...new Set(this.products.map(p => p.categoryName))].map(n => ({ value: n, label: n }));
  }
  get brandOpts() {
    return [...new Set(this.products.map(p => p.brandName).filter(Boolean))].map(n => ({ value: n!, label: n! }));
  }
  get sortOpts() {
    return [
      { value: 'newest',     label: 'Newest first' },
      { value: 'oldest',     label: 'Oldest first' },
      { value: 'name_az',    label: 'Name A → Z' },
      { value: 'price_asc',  label: 'Price: Low → High' },
      { value: 'price_desc', label: 'Price: High → Low' },
      { value: 'stock_asc',  label: 'Stock: Low → High' },
    ];
  }
  get statusOpts() {
    return [
      { value: 'active', label: 'Active' },
      { value: 'draft',  label: 'Draft' },
      { value: 'low',    label: 'Low stock' },
      { value: 'out',    label: 'Out of stock' },
    ];
  }

  clearFilters() {
    this.searchQ = '';
    this.filterCategory = '';
    this.filterBrand    = '';
    this.filterStatus   = '';
  }
  get hasFilters() { return !!(this.searchQ || this.filterCategory || this.filterBrand || this.filterStatus); }

  get lowCount() { return this.products.filter(p => p.stockQty <= 5).length; }

  goToNewProduct()    { this.router.navigate(['/products/new']); }
  navigateToProduct(p: ProductSummary) { this.router.navigate(['/products', p.id]); }

  // ── Restock modal ─────────────────────────────────────────────────────────
  openRestock(p: ProductSummary, e: Event) {
    e.stopPropagation();
    this.restockProduct      = p;
    this.restockVariantId    = null;
    this.restockVariantLabel = null;
    this.restockQty          = 1;
    this.restockVendorId     = '';
    this.restockVendorName   = '';
    this.restockPrice        = null;
    this.restockNotes        = '';
    this.restockError        = '';
    this.showRestock         = true;
  }

  get vendorOpts() {
    return [
      { value: '',       label: 'No vendor' },
      { value: 'custom', label: 'Custom vendor name…' },
      ...this.vendors.map(v => ({ value: v.id, label: v.name }))
    ];
  }

  closeRestock() { this.showRestock = false; this.restockProduct = null; }

  submitRestock() {
    if (!this.restockProduct)  return;
    if (this.restockQty < 1)   { this.restockError = 'Quantity must be at least 1.'; return; }
    const isCustom   = this.restockVendorId === 'custom';
    const realVendor = !isCustom && this.restockVendorId ? this.restockVendorId : null;
    const payload: RestockPayload = {
      variantId:            this.restockVariantId,
      qty:                  this.restockQty,
      vendorId:             realVendor,
      vendorName:           isCustom ? (this.restockVendorName.trim() || null) : null,
      purchasePricePerUnit: this.restockPrice ?? null,
      notes:                this.restockNotes.trim() || null
    };
    this.restockSaving = true;
    this.restockError  = '';
    this.inventoryApi.restock(this.restockProduct.id, payload)
      .pipe(finalize(() => this.restockSaving = false))
      .subscribe({
        next: () => {
          const p = this.products.find(x => x.id === this.restockProduct!.id);
          if (p) p.stockQty += this.restockQty;
          this.txLoaded        = false;
          this.lowStockLoaded  = false;
          this.closeRestock();
        },
        error: e => this.restockError = extractErrorMessage(e)
      });
  }

  // ── Transaction History ───────────────────────────────────────────────────
  loadTransactions(page: number) {
    this.txLoading = true;
    this.txError   = '';
    this.inventoryApi.getTransactions(page, 20)
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

  // ── Low Stock ─────────────────────────────────────────────────────────────
  loadLowStock() {
    this.lowStockLoading = true;
    this.lowStockError   = '';
    this.inventoryApi.getLowStock(this.lowStockThreshold)
      .pipe(finalize(() => this.lowStockLoading = false))
      .subscribe({
        next:  list => { this.lowStockList = list; this.lowStockLoaded = true; },
        error: e    => this.lowStockError = extractErrorMessage(e)
      });
  }

  onThresholdChange() { this.lowStockLoaded = false; this.loadLowStock(); }

  // ── Formatting helpers ────────────────────────────────────────────────────
  formatPrice(n: number | null) {
    return n != null ? '₹' + n.toLocaleString('en-IN') : '—';
  }

  formatDate(iso: string) {
    const d = new Date(iso);
    return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })
      + ', ' + d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
  }

  stockBadgeClass(qty: number) {
    if (qty === 0) return 'badge badge-red';
    if (qty <= 5)  return 'badge badge-amber';
    return 'badge badge-green';
  }
  stockLabel(qty: number) {
    if (qty === 0) return 'Out of stock';
    if (qty <= 5)  return qty + ' left';
    return qty + ' in stock';
  }
  statusClass(status: string) {
    if (status === 'ACTIVE') return 'badge badge-green';
    if (status === 'DRAFT')  return 'badge badge-amber';
    return 'badge badge-gray';
  }
}
