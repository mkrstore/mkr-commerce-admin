import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { HttpClient }    from '@angular/common/http';
import { Router }        from '@angular/router';
import { AuthService }   from '../../services/auth.service';
import { PRODUCT_ENDPOINTS } from '../../core/constants/api.constants';
import { ApiResponse, extractErrorMessage } from '../../core/models/api.models';
import { AppInputComponent, AppSelectComponent, AppBtnComponent } from '../../shared/ui';

// ── Types ─────────────────────────────────────────────────────────────────────

export type ProductStatus = 'DRAFT' | 'ACTIVE' | 'INACTIVE' | 'DISCONTINUED';

export interface CategoryNode {
  id: string; name: string; slug: string;
  imageUrl: string | null; sortOrder: number;
  children: CategoryNode[];
}

export interface BrandItem { id: string; name: string; slug: string; isActive: boolean; }

export interface ProductSummary {
  id: string; name: string; slug: string; sku: string;
  categoryName: string; brandName: string | null;
  priceRetail: number; gstPercent: number;
  stockQty: number; status: ProductStatus;
  primaryImageUrl: string | null; createdAt: string;
}

interface PageData<T> { content: T[]; totalElements: number; totalPages: number; number: number; size: number; }

// ── Component ─────────────────────────────────────────────────────────────────

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, AppInputComponent, AppSelectComponent, AppBtnComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  private readonly EP = PRODUCT_ENDPOINTS;

  // ── List data ─────────────────────────────────────────────────────────────
  categories  = signal<CategoryNode[]>([]);
  brands      = signal<BrandItem[]>([]);
  products    = signal<ProductSummary[]>([]);
  loading     = signal(true);
  catLoading  = signal(true);

  // ── Pagination ────────────────────────────────────────────────────────────
  totalCount  = signal(0);
  totalPages  = signal(0);
  currentPage = signal(0);
  skeletonRows = Array(8);

  // ── Filters ───────────────────────────────────────────────────────────────
  selectedCategoryId = '';
  selectedBrandId    = '';
  selectedStatus: ProductStatus | '' = '';
  searchQuery = '';

  // ── Category tree nav ─────────────────────────────────────────────────────
  expandedCats = new Set<string>();

  // ── Computed ──────────────────────────────────────────────────────────────
  canCreate = computed(() => {
    const r = this.auth.currentUser()?.role;
    return r === 'SUPER_ADMIN' || r === 'ADMIN' || r === 'INVENTORY';
  });

  pageNumbers = computed<(number | -1)[]>(() => {
    const total = this.totalPages(), cur = this.currentPage();
    if (total <= 7) return Array.from({ length: total }, (_, i) => i);
    const pages: (number | -1)[] = [0];
    if (cur > 2) pages.push(-1);
    for (let i = Math.max(1, cur - 1); i <= Math.min(total - 2, cur + 1); i++) pages.push(i);
    if (cur < total - 3) pages.push(-1);
    pages.push(total - 1);
    return pages;
  });

  get hasFilters(): boolean {
    return !!(this.searchQuery || this.selectedCategoryId || this.selectedBrandId || this.selectedStatus);
  }

  get brandFilterOpts() {
    return this.brands().map(b => ({ value: b.id, label: b.name }));
  }

  get statusFilterOpts() {
    return [
      { value: 'ACTIVE',       label: 'Active' },
      { value: 'DRAFT',        label: 'Draft' },
      { value: 'INACTIVE',     label: 'Inactive' },
      { value: 'DISCONTINUED', label: 'Discontinued' },
    ];
  }

  constructor(private http: HttpClient, public router: Router, public auth: AuthService) {}

  ngOnInit() {
    this.loadCategories();
    this.loadBrands();
    this.loadProducts(0);
  }

  // ── Data loading ──────────────────────────────────────────────────────────

  loadCategories() {
    this.catLoading.set(true);
    this.http.get<ApiResponse<CategoryNode[]>>(this.EP.CATEGORIES_TREE).subscribe({
      next: res => { this.categories.set(res.data ?? []); this.catLoading.set(false); },
      error: ()  => this.catLoading.set(false)
    });
  }

  loadBrands() {
    this.http.get<ApiResponse<any>>(this.EP.BRANDS + '?active=true&size=200').subscribe({
      next: res => this.brands.set(res.data?.content ?? [])
    });
  }

  loadProducts(page = 0) {
    this.loading.set(true);
    const params: Record<string, string> = { page: String(page), size: '20' };
    if (this.selectedCategoryId) params['categoryId'] = this.selectedCategoryId;
    if (this.selectedBrandId)    params['brandId']    = this.selectedBrandId;
    if (this.selectedStatus)     params['status']     = this.selectedStatus;
    if (this.searchQuery.trim()) params['search']     = this.searchQuery.trim();

    this.http.get<ApiResponse<PageData<ProductSummary>>>(this.EP.BASE, { params }).subscribe({
      next: res => {
        this.products.set(res.data?.content ?? []);
        this.totalCount.set(res.data?.totalElements ?? 0);
        this.totalPages.set(res.data?.totalPages ?? 0);
        this.currentPage.set(res.data?.number ?? 0);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  onFilterChange() { this.loadProducts(0); }
  clearFilters() {
    this.searchQuery = ''; this.selectedCategoryId = '';
    this.selectedBrandId = ''; this.selectedStatus = '';
    this.loadProducts(0);
  }
  goToPage(page: number) { if (page >= 0 && page < this.totalPages()) this.loadProducts(page); }

  // ── Category tree ─────────────────────────────────────────────────────────

  toggleCat(id: string) {
    this.expandedCats.has(id) ? this.expandedCats.delete(id) : this.expandedCats.add(id);
  }
  selectCategory(id: string) {
    this.selectedCategoryId = this.selectedCategoryId === id ? '' : id;
    this.loadProducts(0);
  }

  // ── Actions ───────────────────────────────────────────────────────────────

  openDetail(id: string) { this.router.navigate(['/products', id]); }

  // ── Helpers ───────────────────────────────────────────────────────────────

  statusClass(s: ProductStatus): string {
    return { ACTIVE: 'st-active', DRAFT: 'st-draft', INACTIVE: 'st-inactive', DISCONTINUED: 'st-discontinued' }[s] ?? '';
  }

  stockClass(qty: number): string {
    if (qty === 0) return 's-out';
    if (qty <= 5)  return 's-low';
    return 's-ok';
  }

  stockLabel(qty: number): string {
    if (qty === 0) return 'Out';
    if (qty <= 5)  return `${qty} left`;
    return `${qty} in stock`;
  }

  inr(n: number): string {
    if (!n) return '—';
    return '₹' + Number(n).toLocaleString('en-IN');
  }

  formatDate(iso: string): string {
    return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  }
}
