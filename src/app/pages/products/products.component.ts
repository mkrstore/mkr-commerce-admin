import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { HttpClient }    from '@angular/common/http';
import { Router }        from '@angular/router';
import { AuthService }   from '../../services/auth.service';
import { PRODUCT_ENDPOINTS } from '../../core/constants/api.constants';
import { ApiResponse, extractErrorMessage } from '../../core/models/api.models';
import { AppInputComponent, AppSelectComponent, AppTextareaComponent, AppCheckboxComponent, AppBtnComponent, SelectOption } from '../../shared/ui';

// ── Types ─────────────────────────────────────────────────────────────────────

export type ProductStatus = 'DRAFT' | 'ACTIVE' | 'INACTIVE' | 'DISCONTINUED';
export type MediaType     = 'IMAGE_PRIMARY' | 'IMAGE_GALLERY' | 'IMAGE_SPEC' | 'VIDEO';
type FieldType            = 'TEXT' | 'NUMBER' | 'BOOLEAN' | 'SELECT' | 'MULTISELECT';

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

interface AttributeDefinitionDto {
  id: string; label: string; fieldKey: string; fieldType: FieldType;
  options: string | null; unit: string | null; defaultValue: string | null;
  required: boolean; sortOrder: number;
}

interface ProductImageDto {
  id: string; mediaType: MediaType; url: string; altText: string | null; sortOrder: number;
}

// ── Component ─────────────────────────────────────────────────────────────────

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, AppInputComponent, AppSelectComponent, AppTextareaComponent, AppCheckboxComponent, AppBtnComponent],
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

  // ── Wizard state ──────────────────────────────────────────────────────────
  createOpen  = false;
  formStep    = 1;
  draftId     = '';
  attrDefs: AttributeDefinitionDto[] = [];

  // Step 1 form
  step1 = {
    name: '', sku: '', categoryId: '', brandId: '', barcode: '',
    shortDescription: '', description: '', slug: ''
  };
  step1Saving  = false;
  step1Error   = '';
  step1Touched = false;

  // Step 2 form
  step2 = {
    priceRetail:     null as number | null,
    priceWholesale:  null as number | null,
    priceBroker:     null as number | null,
    minQtyWholesale: 10,
    gstPercent:      18,
    gstIncluded:     false,
    stockQty:        0,
    weight:          null as number | null,
    dimensions:      '',
    tagsRaw:         ''
  };
  step2Saving  = false;
  step2Error   = '';
  step2Touched = false;

  // Step 3 — attribute values keyed by definitionId
  attrValues: Record<string, string> = {};
  attrMultiValues: Record<string, string[]> = {};
  step3Saving = false;
  step3Error  = '';

  // Step 4 — media upload
  uploadFile: File | null = null;
  uploadMediaType: MediaType = 'IMAGE_PRIMARY';
  uploadAltText = '';
  uploading = false;
  uploadError = '';
  uploadedMedia: ProductImageDto[] = [];

  readonly mediaTypeOptions: { value: MediaType; label: string }[] = [
    { value: 'IMAGE_PRIMARY',  label: 'Primary Image' },
    { value: 'IMAGE_GALLERY',  label: 'Gallery Image' },
    { value: 'IMAGE_SPEC',     label: 'Spec Sheet Image' },
    { value: 'VIDEO',          label: 'Video' },
  ];
  readonly allStatuses: ProductStatus[] = ['DRAFT', 'ACTIVE', 'INACTIVE', 'DISCONTINUED'];

  // ── Computed ──────────────────────────────────────────────────────────────
  canCreate = computed(() => {
    const r = this.auth.currentUser()?.role;
    return r === 'SUPER_ADMIN' || r === 'ADMIN' || r === 'INVENTORY';
  });

  canEdit = computed(() => {
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

  // ── Wizard open/close ─────────────────────────────────────────────────────

  openCreate() {
    this.step1 = { name: '', sku: '', categoryId: '', brandId: '', barcode: '', shortDescription: '', description: '', slug: '' };
    this.step2 = { priceRetail: null, priceWholesale: null, priceBroker: null, minQtyWholesale: 10, gstPercent: 18, gstIncluded: false, stockQty: 0, weight: null, dimensions: '', tagsRaw: '' };
    this.attrValues = {}; this.attrMultiValues = {};
    this.attrDefs = []; this.draftId = '';
    this.uploadedMedia = []; this.uploadFile = null;
    this.uploadMediaType = 'IMAGE_PRIMARY'; this.uploadAltText = '';
    this.step1Error = ''; this.step2Error = ''; this.step3Error = ''; this.uploadError = '';
    this.step1Saving = false; this.step2Saving = false; this.step3Saving = false; this.uploading = false;
    this.step1Touched = false; this.step2Touched = false;
    this.formStep = 1;
    this.createOpen = true;
  }

  closeCreate() { this.createOpen = false; }

  // ── Step 1: Create draft ──────────────────────────────────────────────────

  get step1Valid(): boolean {
    return !!(this.step1.name.trim() && this.step1.sku.trim() && this.step1.categoryId);
  }

  submitStep1() {
    this.step1Touched = true;
    if (!this.step1Valid) return;
    this.step1Saving = true; this.step1Error = '';

    const payload = {
      name:             this.step1.name.trim(),
      sku:              this.step1.sku.trim(),
      categoryId:       this.step1.categoryId,
      brandId:          this.step1.brandId || null,
      barcode:          this.step1.barcode.trim() || null,
      shortDescription: this.step1.shortDescription.trim() || null,
      description:      this.step1.description.trim() || null,
      slug:             this.step1.slug.trim() || null,
    };

    this.http.post<ApiResponse<any>>(this.EP.BASE, payload).subscribe({
      next: res => {
        this.draftId = res.data?.id;
        this.step1Saving = false;
        this.loadAttrDefs(this.step1.categoryId);
        this.formStep = 2;
      },
      error: e => { this.step1Saving = false; this.step1Error = extractErrorMessage(e, 'Failed to create product.'); }
    });
  }

  loadAttrDefs(categoryId: string) {
    if (!categoryId) return;
    this.http.get<ApiResponse<AttributeDefinitionDto[]>>(this.EP.CATEGORY_ATTRS(categoryId)).subscribe({
      next: res => {
        this.attrDefs = res.data ?? [];
        // Pre-fill defaults
        this.attrDefs.forEach(d => {
          if (d.fieldType === 'MULTISELECT') {
            this.attrMultiValues[d.id] = [];
          } else {
            this.attrValues[d.id] = d.defaultValue ?? '';
          }
        });
      }
    });
  }

  // ── Step 2: Pricing ───────────────────────────────────────────────────────

  get step2Valid(): boolean {
    return this.step2.priceRetail !== null && this.step2.priceRetail > 0;
  }

  submitStep2() {
    this.step2Touched = true;
    if (!this.draftId || !this.step2Valid) return;
    this.step2Saving = true; this.step2Error = '';

    const tags = this.step2.tagsRaw.split(',').map(t => t.trim()).filter(Boolean);

    const payload: any = {
      priceRetail:     this.step2.priceRetail,
      priceWholesale:  this.step2.priceWholesale || null,
      priceBroker:     this.step2.priceBroker    || null,
      minQtyWholesale: this.step2.minQtyWholesale,
      gstPercent:      this.step2.gstPercent,
      gstIncluded:     this.step2.gstIncluded,
      stockQty:        this.step2.stockQty,
      weight:          this.step2.weight || null,
      dimensions:      this.step2.dimensions.trim() || null,
      tags:            tags.length ? tags : null,
    };

    this.http.patch<ApiResponse<any>>(this.EP.BY_ID(this.draftId), payload).subscribe({
      next: () => {
        this.step2Saving = false;
        this.formStep = this.attrDefs.length > 0 ? 3 : 4;
      },
      error: e => { this.step2Saving = false; this.step2Error = extractErrorMessage(e, 'Failed to save pricing.'); }
    });
  }

  skipStep2() { this.formStep = this.attrDefs.length > 0 ? 3 : 4; }

  // ── Step 3: Attributes ────────────────────────────────────────────────────

  parsedOptions(def: AttributeDefinitionDto): string[] {
    if (!def.options) return [];
    try { return JSON.parse(def.options); } catch { return []; }
  }

  isMultiSelected(defId: string, option: string): boolean {
    return (this.attrMultiValues[defId] ?? []).includes(option);
  }

  toggleMultiValue(defId: string, option: string) {
    const current = this.attrMultiValues[defId] ?? [];
    this.attrMultiValues[defId] = current.includes(option)
      ? current.filter(v => v !== option)
      : [...current, option];
  }

  submitStep3() {
    if (!this.draftId) return;
    this.step3Saving = true; this.step3Error = '';

    const attributes = this.attrDefs.map(d => ({
      definitionId: d.id,
      value: d.fieldType === 'MULTISELECT'
        ? JSON.stringify(this.attrMultiValues[d.id] ?? [])
        : (this.attrValues[d.id] ?? '')
    })).filter(a => a.value !== '' && a.value !== '[]');

    this.http.put<ApiResponse<any>>(this.EP.ATTRIBUTES(this.draftId), { attributes }).subscribe({
      next: () => { this.step3Saving = false; this.formStep = 4; },
      error: e => { this.step3Saving = false; this.step3Error = extractErrorMessage(e, 'Failed to save attributes.'); }
    });
  }

  skipStep3() { this.formStep = 4; }

  // ── Step 4: Media upload ──────────────────────────────────────────────────

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    this.uploadFile = input.files?.[0] ?? null;
    if (this.uploadFile && this.uploadedMedia.length === 0) {
      this.uploadMediaType = 'IMAGE_PRIMARY';
    }
  }

  uploadMedia() {
    if (!this.draftId || !this.uploadFile) return;
    this.uploading = true; this.uploadError = '';

    const fd = new FormData();
    fd.append('file', this.uploadFile);
    fd.append('mediaType', this.uploadMediaType);
    if (this.uploadAltText.trim()) fd.append('altText', this.uploadAltText.trim());

    this.http.post<ApiResponse<ProductImageDto>>(this.EP.MEDIA(this.draftId), fd).subscribe({
      next: res => {
        if (res.data) this.uploadedMedia.push(res.data);
        this.uploading = false;
        this.uploadFile = null;
        this.uploadAltText = '';
        this.uploadMediaType = 'IMAGE_GALLERY';
        const input = document.getElementById('upload-input') as HTMLInputElement;
        if (input) input.value = '';
      },
      error: e => { this.uploading = false; this.uploadError = extractErrorMessage(e, 'Upload failed.'); }
    });
  }

  prevStep() {
    if (this.formStep === 4) { this.formStep = this.attrDefs.length > 0 ? 3 : 2; return; }
    if (this.formStep === 3) { this.formStep = 2; return; }
    if (this.formStep === 2) { this.formStep = 1; return; }
    this.closeCreate();
  }

  finishWizard() {
    this.createOpen = false;
    if (this.draftId) {
      this.loadProducts(0);
      this.router.navigate(['/products', this.draftId]);
    }
  }

  addAnother() {
    this.loadProducts(0);
    this.openCreate();
  }

  // ── Actions ───────────────────────────────────────────────────────────────

  openDetail(id: string) { this.router.navigate(['/products', id]); }

  clone(product: ProductSummary) {
    this.http.post<ApiResponse<any>>(this.EP.CLONE(product.id), {}).subscribe({
      next: res => {
        this.loadProducts(0);
        if (res.data?.id) this.router.navigate(['/products', res.data.id]);
      },
      error: e => alert(extractErrorMessage(e, 'Clone failed.'))
    });
  }

  deactivate(product: ProductSummary) {
    if (!confirm(`Deactivate "${product.name}"?`)) return;
    this.http.delete<ApiResponse<void>>(this.EP.BY_ID(product.id)).subscribe({
      next: () => this.loadProducts(this.currentPage()),
      error: e => alert(extractErrorMessage(e, 'Failed to deactivate.'))
    });
  }

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

  fieldTypeLabel(ft: FieldType): string {
    return { TEXT: 'Text', NUMBER: 'Number', BOOLEAN: 'Yes/No', SELECT: 'Dropdown', MULTISELECT: 'Multi-select' }[ft] ?? ft;
  }

  isVideo(mt: MediaType): boolean { return mt === 'VIDEO'; }
}
