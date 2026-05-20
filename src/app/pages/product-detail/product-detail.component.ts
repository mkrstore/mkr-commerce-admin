import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule }    from '@angular/common';
import { FormsModule }     from '@angular/forms';
import { HttpClient }      from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService }     from '../../services/auth.service';
import { PRODUCT_ENDPOINTS } from '../../core/constants/api.constants';
import { ApiResponse, extractErrorMessage } from '../../core/models/api.models';
import { AppInputComponent, AppSelectComponent, AppTextareaComponent, AppCheckboxComponent, AppBtnComponent } from '../../shared/ui';

// ── Types ─────────────────────────────────────────────────────────────────────

type ProductStatus = 'DRAFT' | 'ACTIVE' | 'INACTIVE' | 'DISCONTINUED';
type MediaType     = 'IMAGE_PRIMARY' | 'IMAGE_GALLERY' | 'IMAGE_SPEC' | 'VIDEO';
type FieldType     = 'TEXT' | 'NUMBER' | 'BOOLEAN' | 'SELECT' | 'MULTISELECT';

interface CategoryNode { id: string; name: string; children: CategoryNode[]; }
interface BrandItem    { id: string; name: string; isActive: boolean; }

interface AttributeDefinitionDto {
  id: string; label: string; fieldKey: string; fieldType: FieldType;
  options: string | null; unit: string | null; defaultValue: string | null;
  required: boolean; sortOrder: number;
}

interface ProductAttributeDto {
  id: string; definitionId: string; label: string; fieldKey: string;
  fieldType: FieldType; unit: string | null; value: string;
}

interface ProductImageDto {
  id: string; mediaType: MediaType; url: string; altText: string | null; sortOrder: number;
}

interface ProductVariantDto {
  id: string; sku: string; colorName: string | null; colorHex: string | null;
  size: string | null; priceOverride: number | null; stockQty: number; isActive: boolean;
}

interface ProductDetail {
  id: string; name: string; slug: string; sku: string; barcode: string | null;
  shortDescription: string | null; description: string | null;
  categoryId: string; categoryName: string;
  brandId: string | null; brandName: string | null;
  priceRetail: number; priceWholesale: number | null; priceBroker: number | null;
  minQtyWholesale: number; gstPercent: number; gstIncluded: boolean;
  stockQty: number; weight: number | null; dimensions: string | null;
  status: ProductStatus;
  media: ProductImageDto[];
  variants: ProductVariantDto[];
  attributes: ProductAttributeDto[];
  tags: string[];
  createdAt: string; updatedAt: string;
}

// ── Component ─────────────────────────────────────────────────────────────────

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, AppInputComponent, AppSelectComponent, AppTextareaComponent, AppCheckboxComponent, AppBtnComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {

  private readonly EP = PRODUCT_ENDPOINTS;

  product   = signal<ProductDetail | null>(null);
  loading   = signal(true);
  notFound  = false;

  activeTab: 'info' | 'pricing' | 'attributes' | 'media' = 'info';

  // ── Info tab ──────────────────────────────────────────────────────────────
  categories = signal<CategoryNode[]>([]);
  brands     = signal<BrandItem[]>([]);
  infoForm   = {
    name: '', slug: '', sku: '', barcode: '', shortDescription: '', description: '',
    categoryId: '', brandId: '', status: 'DRAFT' as ProductStatus, tagsRaw: ''
  };
  infoSaving = false;
  infoSaved  = false;
  infoError  = '';

  // ── Pricing tab ───────────────────────────────────────────────────────────
  pricingForm = {
    priceRetail:     0,
    priceWholesale:  null as number | null,
    priceBroker:     null as number | null,
    minQtyWholesale: 10,
    gstPercent:      18,
    gstIncluded:     false,
    stockQty:        0,
    weight:          null as number | null,
    dimensions:      ''
  };
  pricingSaving = false;
  pricingSaved  = false;
  pricingError  = '';

  // ── Attributes tab ────────────────────────────────────────────────────────
  attrDefs:       AttributeDefinitionDto[] = [];
  attrValues:     Record<string, string>   = {};
  attrMultiValues: Record<string, string[]> = {};
  attrSaving = false;
  attrSaved  = false;
  attrError  = '';

  // ── Media tab ─────────────────────────────────────────────────────────────
  uploadFile: File | null = null;
  uploadMediaType: MediaType = 'IMAGE_GALLERY';
  uploadAltText = '';
  uploading  = false;
  uploadError = '';
  deleteConfirmMedia: ProductImageDto | null = null;
  deletingMedia = false;

  readonly mediaTypeOptions: { value: MediaType; label: string }[] = [
    { value: 'IMAGE_PRIMARY',  label: 'Primary Image'  },
    { value: 'IMAGE_GALLERY',  label: 'Gallery Image'  },
    { value: 'IMAGE_SPEC',     label: 'Spec Sheet'     },
    { value: 'VIDEO',          label: 'Video'          },
  ];

  readonly allStatuses: ProductStatus[] = ['DRAFT', 'ACTIVE', 'INACTIVE', 'DISCONTINUED'];

  // ── Computed ──────────────────────────────────────────────────────────────
  canEdit = computed(() => {
    const r = this.auth.currentUser()?.role;
    return r === 'SUPER_ADMIN' || r === 'ADMIN' || r === 'INVENTORY';
  });

  get productId(): string { return this.route.snapshot.paramMap.get('id') ?? ''; }

  get statusOpts() { return this.allStatuses.map(s => ({ value: s, label: s })); }

  get categoryOpts() {
    const result: { value: string; label: string }[] = [];
    const flatten = (nodes: CategoryNode[], prefix = '') => {
      for (const n of nodes) {
        result.push({ value: n.id, label: prefix + n.name });
        if (n.children?.length) flatten(n.children, prefix + '— ');
      }
    };
    flatten(this.categories());
    return result;
  }

  get brandOpts() {
    return [{ value: '', label: 'No brand' }, ...this.brands().map(b => ({ value: b.id, label: b.name }))];
  }

  get mediaTypeOpts() { return this.mediaTypeOptions; }

  getAttrOpts(def: AttributeDefinitionDto) {
    return this.parsedOptions(def).map(o => ({ value: o, label: o }));
  }

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    public auth: AuthService
  ) {}

  ngOnInit() {
    this.loadProduct();
    this.loadCategories();
    this.loadBrands();
  }

  // ── Load ──────────────────────────────────────────────────────────────────

  loadProduct() {
    this.loading.set(true);
    this.http.get<ApiResponse<ProductDetail>>(this.EP.BY_ID(this.productId)).subscribe({
      next: res => {
        const p = res.data!;
        this.product.set(p);
        this.populateForms(p);
        this.loading.set(false);
        this.loadAttrDefs(p.categoryId, p.attributes);
      },
      error: () => { this.loading.set(false); this.notFound = true; }
    });
  }

  populateForms(p: ProductDetail) {
    this.infoForm = {
      name:             p.name,
      slug:             p.slug,
      sku:              p.sku,
      barcode:          p.barcode ?? '',
      shortDescription: p.shortDescription ?? '',
      description:      p.description ?? '',
      categoryId:       p.categoryId,
      brandId:          p.brandId ?? '',
      status:           p.status,
      tagsRaw:          (p.tags ?? []).join(', ')
    };
    this.pricingForm = {
      priceRetail:     p.priceRetail,
      priceWholesale:  p.priceWholesale,
      priceBroker:     p.priceBroker,
      minQtyWholesale: p.minQtyWholesale,
      gstPercent:      p.gstPercent,
      gstIncluded:     p.gstIncluded,
      stockQty:        p.stockQty,
      weight:          p.weight,
      dimensions:      p.dimensions ?? ''
    };
  }

  loadCategories() {
    this.http.get<ApiResponse<CategoryNode[]>>(this.EP.CATEGORIES_TREE).subscribe({
      next: res => this.categories.set(res.data ?? [])
    });
  }

  loadBrands() {
    this.http.get<ApiResponse<any>>(this.EP.BRANDS + '?active=true&size=200').subscribe({
      next: res => this.brands.set(res.data?.content ?? [])
    });
  }

  loadAttrDefs(categoryId: string, existingAttrs: ProductAttributeDto[]) {
    this.http.get<ApiResponse<AttributeDefinitionDto[]>>(this.EP.CATEGORY_ATTRS(categoryId)).subscribe({
      next: res => {
        this.attrDefs = res.data ?? [];
        this.attrValues = {}; this.attrMultiValues = {};
        this.attrDefs.forEach(def => {
          const existing = existingAttrs.find(a => a.definitionId === def.id);
          if (def.fieldType === 'MULTISELECT') {
            try { this.attrMultiValues[def.id] = existing ? JSON.parse(existing.value) : []; }
            catch { this.attrMultiValues[def.id] = []; }
          } else {
            this.attrValues[def.id] = existing?.value ?? def.defaultValue ?? '';
          }
        });
      }
    });
  }

  // ── Info save ─────────────────────────────────────────────────────────────

  saveInfo() {
    this.infoSaving = true; this.infoError = ''; this.infoSaved = false;
    const tags = this.infoForm.tagsRaw.split(',').map(t => t.trim()).filter(Boolean);
    const payload: any = {
      name:             this.infoForm.name.trim()  || null,
      slug:             this.infoForm.slug.trim()  || null,
      sku:              this.infoForm.sku.trim()   || null,
      barcode:          this.infoForm.barcode.trim()           || null,
      shortDescription: this.infoForm.shortDescription.trim()  || null,
      description:      this.infoForm.description.trim()       || null,
      categoryId:       this.infoForm.categoryId  || null,
      brandId:          this.infoForm.brandId     || null,
      status:           this.infoForm.status,
      tags:             tags.length ? tags : null,
    };
    this.http.patch<ApiResponse<ProductDetail>>(this.EP.BY_ID(this.productId), payload).subscribe({
      next: res => {
        this.infoSaving = false; this.infoSaved = true;
        if (res.data) { this.product.set(res.data); this.populateForms(res.data); }
        setTimeout(() => this.infoSaved = false, 2500);
      },
      error: e => { this.infoSaving = false; this.infoError = extractErrorMessage(e, 'Save failed.'); }
    });
  }

  // ── Pricing save ──────────────────────────────────────────────────────────

  savePricing() {
    this.pricingSaving = true; this.pricingError = ''; this.pricingSaved = false;
    const payload: any = {
      priceRetail:     this.pricingForm.priceRetail,
      priceWholesale:  this.pricingForm.priceWholesale || null,
      priceBroker:     this.pricingForm.priceBroker    || null,
      minQtyWholesale: this.pricingForm.minQtyWholesale,
      gstPercent:      this.pricingForm.gstPercent,
      gstIncluded:     this.pricingForm.gstIncluded,
      stockQty:        this.pricingForm.stockQty,
      weight:          this.pricingForm.weight      || null,
      dimensions:      this.pricingForm.dimensions.trim() || null,
    };
    this.http.patch<ApiResponse<ProductDetail>>(this.EP.BY_ID(this.productId), payload).subscribe({
      next: res => {
        this.pricingSaving = false; this.pricingSaved = true;
        if (res.data) { this.product.set(res.data); }
        setTimeout(() => this.pricingSaved = false, 2500);
      },
      error: e => { this.pricingSaving = false; this.pricingError = extractErrorMessage(e, 'Save failed.'); }
    });
  }

  // ── Attributes save ───────────────────────────────────────────────────────

  saveAttributes() {
    this.attrSaving = true; this.attrError = ''; this.attrSaved = false;
    const attributes = this.attrDefs.map(d => ({
      definitionId: d.id,
      value: d.fieldType === 'MULTISELECT'
        ? JSON.stringify(this.attrMultiValues[d.id] ?? [])
        : (this.attrValues[d.id] ?? '')
    }));
    this.http.put<ApiResponse<any>>(this.EP.ATTRIBUTES(this.productId), { attributes }).subscribe({
      next: () => {
        this.attrSaving = false; this.attrSaved = true;
        setTimeout(() => this.attrSaved = false, 2500);
      },
      error: e => { this.attrSaving = false; this.attrError = extractErrorMessage(e, 'Save failed.'); }
    });
  }

  // ── Media upload ──────────────────────────────────────────────────────────

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    this.uploadFile = input.files?.[0] ?? null;
  }

  uploadMedia() {
    if (!this.uploadFile) return;
    this.uploading = true; this.uploadError = '';
    const fd = new FormData();
    fd.append('file', this.uploadFile);
    fd.append('mediaType', this.uploadMediaType);
    if (this.uploadAltText.trim()) fd.append('altText', this.uploadAltText.trim());

    this.http.post<ApiResponse<ProductImageDto>>(this.EP.MEDIA(this.productId), fd).subscribe({
      next: res => {
        if (res.data) {
          const p = this.product();
          if (p) this.product.set({ ...p, media: [...p.media, res.data] });
        }
        this.uploading = false; this.uploadFile = null; this.uploadAltText = '';
        this.uploadMediaType = 'IMAGE_GALLERY';
        const input = document.getElementById('media-upload-input') as HTMLInputElement;
        if (input) input.value = '';
      },
      error: e => { this.uploading = false; this.uploadError = extractErrorMessage(e, 'Upload failed.'); }
    });
  }

  openDeleteMedia(m: ProductImageDto) { this.deleteConfirmMedia = m; }
  closeDeleteMedia() { this.deleteConfirmMedia = null; }

  confirmDeleteMedia() {
    if (!this.deleteConfirmMedia) return;
    this.deletingMedia = true;
    this.http.delete<ApiResponse<void>>(this.EP.MEDIA_BY_ID(this.productId, this.deleteConfirmMedia.id)).subscribe({
      next: () => {
        const removed = this.deleteConfirmMedia!;
        const p = this.product();
        if (p) this.product.set({ ...p, media: p.media.filter(m => m.id !== removed.id) });
        this.deletingMedia = false; this.deleteConfirmMedia = null;
      },
      error: e => {
        this.deletingMedia = false;
        alert(extractErrorMessage(e, 'Delete failed.'));
      }
    });
  }

  // ── Status actions ────────────────────────────────────────────────────────

  setStatus(status: ProductStatus) {
    this.http.patch<ApiResponse<ProductDetail>>(this.EP.BY_ID(this.productId), { status }).subscribe({
      next: res => {
        if (res.data) { this.product.set(res.data); this.populateForms(res.data); }
      },
      error: e => alert(extractErrorMessage(e, 'Status update failed.'))
    });
  }

  clone() {
    this.http.post<ApiResponse<any>>(this.EP.CLONE(this.productId), {}).subscribe({
      next: res => { if (res.data?.id) this.router.navigate(['/products', res.data.id]); },
      error: e => alert(extractErrorMessage(e, 'Clone failed.'))
    });
  }

  // ── Helpers ───────────────────────────────────────────────────────────────

  back() { this.router.navigate(['/products']); }

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

  isVideo(mt: MediaType): boolean { return mt === 'VIDEO'; }

  inr(n: number | null): string {
    if (!n) return '—';
    return '₹' + Number(n).toLocaleString('en-IN');
  }

  statusClass(s: ProductStatus): string {
    return { ACTIVE: 'st-active', DRAFT: 'st-draft', INACTIVE: 'st-inactive', DISCONTINUED: 'st-discontinued' }[s] ?? '';
  }
}
