import { Component, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import {
  ProductApiService, ProductSummary, CategoryOption,
  BrandOption, ProductStatus
} from '../../services/product-api.service';
import { extractErrorMessage } from '../../core/models/api.models';
import {
  AppBtnComponent, AppInputComponent,
  AppSelectComponent, AppTextareaComponent, AppCheckboxComponent
} from '../../shared/ui';

type SortKey = 'newest' | 'oldest' | 'name_az' | 'price_asc' | 'price_desc' | 'stock_asc';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule, FormsModule,
    AppBtnComponent, AppInputComponent,
    AppSelectComponent, AppTextareaComponent, AppCheckboxComponent],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss'
})
export class InventoryComponent implements OnInit {

  // ── List state ────────────────────────────────────────────────────────────
  products: ProductSummary[] = [];
  loading  = false;
  error    = '';

  searchQ        = '';
  filterCategory = '';
  filterBrand    = '';
  filterStatus   = '';
  sortKey: SortKey = 'newest';

  // ── Stock modal ───────────────────────────────────────────────────────────
  showStockPanel  = false;
  selectedProduct: ProductSummary | null = null;
  addQty          = 0;
  stockSaving     = false;

  // ── Wizard ────────────────────────────────────────────────────────────────
  wizardOpen    = false;
  wizardStep    = 1;
  wizardLoading = false;
  wizardError   = '';
  wizardTouched = false;
  createdId     = '';

  categories: CategoryOption[] = [];
  brands: BrandOption[]        = [];

  step1 = { name: '', sku: '', categoryId: '', brandId: '', shortDescription: '' };
  step2 = {
    priceRetail:    null as number | null,
    priceWholesale: null as number | null,
    priceBroker:    null as number | null,
    gstPercent:     18,
    gstIncluded:    false,
    stockQty:       0
  };

  constructor(private productApi: ProductApiService, private router: Router) {}

  ngOnInit() {
    this.load();
    this.productApi.listCategories().subscribe(c => this.categories = c);
    this.productApi.listBrands().subscribe(b => this.brands = b);
  }

  load() {
    this.loading = true;
    this.error   = '';
    this.productApi.listProducts({ size: 100 })
      .pipe(finalize(() => this.loading = false))
      .subscribe({ next: p => this.products = p.content, error: e => this.error = extractErrorMessage(e) });
  }

  // ── Derived lists ─────────────────────────────────────────────────────────
  get filtered(): ProductSummary[] {
    let list = this.products;
    if (this.searchQ.trim()) {
      const q = this.searchQ.toLowerCase();
      list = list.filter(p => p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q));
    }
    if (this.filterCategory) list = list.filter(p => p.categoryName === this.filterCategory);
    if (this.filterBrand)    list = list.filter(p => p.brandName    === this.filterBrand);
    if (this.filterStatus === 'active')   list = list.filter(p => p.status === 'ACTIVE');
    if (this.filterStatus === 'draft')    list = list.filter(p => p.status === 'DRAFT');
    if (this.filterStatus === 'low')      list = list.filter(p => p.stockQty > 0 && p.stockQty <= 5);
    if (this.filterStatus === 'out')      list = list.filter(p => p.stockQty === 0);

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

  get categoryOpts() { return [...new Set(this.products.map(p => p.categoryName))].map(n => ({ value: n, label: n })); }
  get brandOpts()    { return [...new Set(this.products.map(p => p.brandName).filter(Boolean))].map(n => ({ value: n!, label: n! })); }

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

  get categoryWizardOpts() {
    const parents = this.categories.filter(c => !c.parentName);
    const result: { value: string; label: string }[] = [];
    for (const p of parents) {
      const children = this.categories.filter(c => c.parentName === p.name);
      if (children.length) children.forEach(c => result.push({ value: c.id, label: `${p.name} › ${c.name}` }));
      else result.push({ value: p.id, label: p.name });
    }
    return result;
  }

  get brandWizardOpts() {
    return [{ value: '', label: 'No brand' }, ...this.brands.map(b => ({ value: b.id, label: b.name }))];
  }

  get gstOpts() {
    return [
      { value: 0,  label: '0% — Exempt' },
      { value: 5,  label: '5%' },
      { value: 12, label: '12%' },
      { value: 18, label: '18% (default)' },
      { value: 28, label: '28%' },
    ];
  }

  clearFilters() { this.searchQ = ''; this.filterCategory = ''; this.filterBrand = ''; this.filterStatus = ''; }
  get hasFilters() { return !!(this.searchQ || this.filterCategory || this.filterBrand || this.filterStatus); }

  navigateToProduct(p: ProductSummary) {
    this.router.navigate(['/products', p.id]);
  }

  // ── Stock modal ───────────────────────────────────────────────────────────
  openStock(p: ProductSummary, e: Event) {
    e.stopPropagation();
    this.selectedProduct = p; this.addQty = 0; this.showStockPanel = true;
  }
  closeStock() { this.showStockPanel = false; this.selectedProduct = null; this.addQty = 0; }

  applyStock() {
    if (!this.selectedProduct || this.addQty <= 0) return;
    const newQty = this.selectedProduct.stockQty + this.addQty;
    this.stockSaving = true;
    this.productApi.updateStock(this.selectedProduct.id, newQty)
      .pipe(finalize(() => this.stockSaving = false))
      .subscribe({ next: () => { this.selectedProduct!.stockQty = newQty; this.closeStock(); }, error: e => alert(extractErrorMessage(e)) });
  }

  // ── Wizard ────────────────────────────────────────────────────────────────
  openWizard() {
    this.router.navigate(['/products/new']);
  }
  closeWizard() { this.wizardOpen = false; }

  autoSku() {
    if (!this.step1.name.trim() || this.step1.sku) return;
    this.step1.sku = this.step1.name.toUpperCase().replace(/[^A-Z0-9\s]/g, '').trim()
      .split(/\s+/).slice(0, 4).map(w => w.slice(0, 3)).join('-');
  }

  submitStep1() {
    this.wizardTouched = true;
    if (!this.step1.name.trim() || !this.step1.sku.trim() || !this.step1.categoryId) {
      this.wizardError = 'Name, SKU, and Category are required.'; return;
    }
    this.wizardLoading = true; this.wizardError = '';
    this.productApi.createProduct({
      name: this.step1.name.trim(), sku: this.step1.sku.trim().toUpperCase(),
      categoryId: this.step1.categoryId, brandId: this.step1.brandId || null,
      shortDescription: this.step1.shortDescription.trim() || undefined
    }).pipe(finalize(() => this.wizardLoading = false))
      .subscribe({ next: id => { this.createdId = id; this.wizardStep = 2; this.wizardTouched = false; }, error: e => this.wizardError = extractErrorMessage(e) });
  }

  submitStep2() {
    this.wizardTouched = true;
    if (!this.step2.priceRetail || this.step2.priceRetail <= 0) { this.wizardError = 'Retail price is required.'; return; }
    this.wizardLoading = true; this.wizardError = '';
    this.productApi.patchProduct(this.createdId, {
      priceRetail: this.step2.priceRetail, priceWholesale: this.step2.priceWholesale,
      priceBroker: this.step2.priceBroker, gstPercent: this.step2.gstPercent,
      gstIncluded: this.step2.gstIncluded, stockQty: this.step2.stockQty, status: 'ACTIVE'
    }).pipe(finalize(() => this.wizardLoading = false))
      .subscribe({ next: () => { this.wizardOpen = false; this.load(); }, error: e => this.wizardError = extractErrorMessage(e) });
  }

  formatPrice(n: number) { return '₹' + n.toLocaleString('en-IN'); }

  stockBadgeClass(p: ProductSummary) {
    if (p.stockQty === 0)              return 'badge badge-red';
    if (p.stockQty <= 5)               return 'badge badge-amber';
    return 'badge badge-green';
  }
  stockLabel(p: ProductSummary) {
    if (p.stockQty === 0) return 'Out of stock';
    if (p.stockQty <= 5)  return p.stockQty + ' left';
    return p.stockQty + ' in stock';
  }
  statusClass(p: ProductSummary) {
    if (p.status === 'ACTIVE')   return 'badge badge-green';
    if (p.status === 'DRAFT')    return 'badge badge-amber';
    return 'badge badge-gray';
  }
}
