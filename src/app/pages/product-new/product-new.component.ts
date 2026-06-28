import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { concat, finalize } from 'rxjs';
import { PRODUCT_ENDPOINTS } from '../../core/constants/api.constants';
import { ApiResponse, extractErrorMessage } from '../../core/models/api.models';
import {
  AppBtnComponent, AppInputComponent,
  AppSelectComponent, AppTextareaComponent, AppCheckboxComponent
} from '../../shared/ui';
import { ProductApiService, CategoryOption, BrandOption } from '../../services/product-api.service';

type FieldType = 'TEXT' | 'NUMBER' | 'BOOLEAN' | 'SELECT' | 'MULTISELECT';

interface AttributeDefinitionDto {
  id: string; label: string; fieldKey: string; fieldType: FieldType;
  options: string | null; unit: string | null; defaultValue: string | null;
  required: boolean; sortOrder: number; groupName: string | null;
}

interface VariantOption {
  name:     string;
  values:   string[];
  newValue: string;
}

interface VariantForm {
  attrs:          { key: string; value: string }[];
  priceOverride:  number | null;
  priceWholesale: number | null;
  priceBroker:    number | null;
  stockQty:       number;
}

@Component({
  selector: 'app-product-new',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink,
    AppBtnComponent, AppInputComponent,
    AppSelectComponent, AppTextareaComponent, AppCheckboxComponent],
  templateUrl: './product-new.component.html',
  styleUrl:    './product-new.component.scss'
})
export class ProductNewComponent implements OnInit {

  // ── Wizard state ──────────────────────────────────────────────────────────
  step      = 1;
  productId = '';
  saving    = false;
  error     = '';
  touched   = false;

  // ── Reference data ────────────────────────────────────────────────────────
  categories: CategoryOption[] = [];
  brands:     BrandOption[]    = [];

  // ── Step 1: Basic Info ────────────────────────────────────────────────────
  step1 = {
    name: '', sku: '', categoryId: '', brandId: '',
    shortDescription: '', description: ''
  };

  // ── Step 2: Spec Fields ───────────────────────────────────────────────────
  attrDefs:   AttributeDefinitionDto[] = [];
  attrLoading = false;
  attrValues: Record<string, string>   = {};
  attrMulti:  Record<string, string[]> = {};

  // ── Step 3: Variants ──────────────────────────────────────────────────────
  variantOptions:    VariantOption[] = [];
  generatedVariants: VariantForm[]   = [];
  optionNewName      = '';
  variantError       = '';

  get variants(): VariantForm[] { return this.generatedVariants; }

  // ── Step 4: Pricing ───────────────────────────────────────────────────────
  pricing = {
    priceRetail:    null as number | null,
    priceWholesale: null as number | null,
    priceBroker:    null as number | null,
    gstPercent:     18,
    gstIncluded:    false,
    stockQty:       0
  };

  // ── Discard modal ─────────────────────────────────────────────────────────
  showDiscard = false;

  constructor(
    private router:     Router,
    private http:       HttpClient,
    private productApi: ProductApiService
  ) {}

  ngOnInit() {
    this.productApi.listCategories().subscribe(c => this.categories = c);
    this.productApi.listBrands().subscribe(b => this.brands = b);
  }

  // ── Select options ────────────────────────────────────────────────────────

  get categoryOpts() {
    const parents = this.categories.filter(c => !c.parentName);
    const result: { value: string; label: string }[] = [];
    for (const p of parents) {
      const children = this.categories.filter(c => c.parentName === p.name);
      if (children.length) children.forEach(c => result.push({ value: c.id, label: `${p.name} › ${c.name}` }));
      else result.push({ value: p.id, label: p.name });
    }
    return result;
  }

  get brandOpts() {
    return [
      { value: '', label: 'No brand' },
      ...this.brands.map(b => ({ value: b.id, label: b.name }))
    ];
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

  get steps() {
    return [
      { label: 'Basic Info',  icon: 'description' },
      { label: 'Spec Fields', icon: 'tune' },
      { label: 'Variants',    icon: 'palette' },
      { label: 'Pricing',     icon: 'payments' },
    ];
  }

  // ── Auto-generate SKU ─────────────────────────────────────────────────────

  autoSku() {
    if (!this.step1.name.trim() || this.step1.sku) return;
    this.step1.sku = this.step1.name.toUpperCase()
      .replace(/[^A-Z0-9\s]/g, '').trim()
      .split(/\s+/).slice(0, 4).map(w => w.slice(0, 3)).join('-');
  }

  // ── Category change → load attrs ──────────────────────────────────────────

  onCategoryChange(catId: string) {
    this.step1.categoryId = catId;
    this.attrDefs = []; this.attrValues = {}; this.attrMulti = {};
    if (!catId) return;
    this.attrLoading = true;
    this.http.get<ApiResponse<AttributeDefinitionDto[]>>(PRODUCT_ENDPOINTS.CATEGORY_ATTRS(catId))
      .pipe(finalize(() => this.attrLoading = false))
      .subscribe({
        next: res => {
          this.attrDefs = (res.data ?? []).sort((a, b) => a.sortOrder - b.sortOrder);
          for (const d of this.attrDefs) {
            if (d.fieldType === 'MULTISELECT') this.attrMulti[d.id] = [];
            else if (d.fieldType === 'BOOLEAN') this.attrValues[d.id] = 'false';
            else this.attrValues[d.id] = d.defaultValue ?? '';
          }
        }
      });
  }

  parsedOptions(attr: AttributeDefinitionDto): string[] {
    if (!attr.options) return [];
    try { return JSON.parse(attr.options); } catch { return []; }
  }

  isMultiSelected(attr: AttributeDefinitionDto, opt: string): boolean {
    return (this.attrMulti[attr.id] ?? []).includes(opt);
  }

  toggleMulti(attr: AttributeDefinitionDto, opt: string) {
    const arr = this.attrMulti[attr.id] ?? [];
    const idx = arr.indexOf(opt);
    if (idx === -1) arr.push(opt); else arr.splice(idx, 1);
    this.attrMulti[attr.id] = arr;
  }

  getSelectOpts(attr: AttributeDefinitionDto) {
    return this.parsedOptions(attr).map(o => ({ value: o, label: o }));
  }

  // ── Step navigation ───────────────────────────────────────────────────────

  back() {
    this.error = '';
    if (this.step === 1) { this.tryDiscard(); return; }
    this.step--;
  }

  next() {
    this.error = '';
    if (this.step === 1) this.submitStep1();
    else if (this.step === 2) this.submitAttrs();
    else if (this.step === 3) this.goToPricing();
    else if (this.step === 4) this.publish();
  }

  skipToNext() {
    this.error = '';
    this.step++;
  }

  // ── Step 1: Create product draft ──────────────────────────────────────────

  submitStep1() {
    this.touched = true;
    if (!this.step1.name.trim() || !this.step1.sku.trim() || !this.step1.categoryId) {
      this.error = 'Product name, SKU, and Category are required.'; return;
    }
    if (this.productId) {
      this.step = 2; this.touched = false; return;
    }
    this.saving = true;
    this.http.post<ApiResponse<any>>(PRODUCT_ENDPOINTS.BASE, {
      name:             this.step1.name.trim(),
      sku:              this.step1.sku.trim().toUpperCase(),
      categoryId:       this.step1.categoryId,
      brandId:          this.step1.brandId || null,
      shortDescription: this.step1.shortDescription.trim() || null,
      description:      this.step1.description.trim() || null,
    }).pipe(finalize(() => this.saving = false))
      .subscribe({
        next: res => { this.productId = res.data?.id; this.step = 2; this.touched = false; },
        error: e  => this.error = extractErrorMessage(e)
      });
  }

  // ── Step 2: Spec Fields ───────────────────────────────────────────────────

  submitAttrs() {
    const missing = this.attrDefs.filter(d => {
      if (!d.required) return false;
      if (d.fieldKey?.toLowerCase() === 'brand') return false;
      if (d.fieldType === 'MULTISELECT') return (this.attrMulti[d.id] ?? []).length === 0;
      if (d.fieldType === 'BOOLEAN') return false;
      return !this.attrValues[d.id]?.trim();
    });
    if (missing.length) {
      this.error = `Required: ${missing.map(d => d.label).join(', ')}`; return;
    }

    this.saving = true;
    const attributes = this.attrDefs
      .map(d => ({
        definitionId: d.id,
        value: d.fieldType === 'MULTISELECT'
          ? JSON.stringify(this.attrMulti[d.id] ?? [])
          : d.fieldType === 'BOOLEAN'
            ? this.attrValues[d.id] ?? 'false'
            : (this.attrValues[d.id] ?? '')
      }))
      .filter(a => a.value !== '' && a.value !== '[]');

    this.http.put<ApiResponse<any>>(PRODUCT_ENDPOINTS.ATTRIBUTES(this.productId), { attributes })
      .pipe(finalize(() => this.saving = false))
      .subscribe({
        next: () => { this.step = 3; this.touched = false; },
        error: e  => this.error = extractErrorMessage(e)
      });
  }

  // ── Step 3: Variant option matrix ────────────────────────────────────────

  addOptionGroup() {
    const name = this.optionNewName.trim();
    if (!name) return;
    if (this.variantOptions.find(o => o.name.toLowerCase() === name.toLowerCase())) return;
    this.variantOptions.push({ name, values: [], newValue: '' });
    this.optionNewName = '';
  }

  removeOption(i: number) {
    this.variantOptions.splice(i, 1);
    this.rebuildVariants();
  }

  addValue(opt: VariantOption, event: Event) {
    event.preventDefault();
    const val = opt.newValue.trim();
    if (!val || opt.values.includes(val)) return;
    opt.values.push(val);
    opt.newValue = '';
    this.rebuildVariants();
  }

  removeValue(opt: VariantOption, i: number) {
    opt.values.splice(i, 1);
    this.rebuildVariants();
  }

  rebuildVariants() {
    const opts = this.variantOptions.filter(o => o.values.length > 0);
    if (opts.length === 0) { this.generatedVariants = []; return; }

    let combos: Record<string, string>[] = [{}];
    for (const opt of opts) {
      const next: Record<string, string>[] = [];
      for (const combo of combos) {
        for (const val of opt.values) {
          next.push({ ...combo, [opt.name]: val });
        }
      }
      combos = next;
    }

    const existing = new Map(this.generatedVariants.map(v => [this.variantLabel(v), v]));
    this.generatedVariants = combos.map(attrs => {
      const label = Object.values(attrs).join(' / ');
      const prev  = existing.get(label);
      return {
        attrs:          Object.entries(attrs).map(([key, value]) => ({ key, value })),
        priceOverride:  prev?.priceOverride  ?? null,
        priceWholesale: prev?.priceWholesale ?? null,
        priceBroker:    prev?.priceBroker    ?? null,
        stockQty:       prev?.stockQty       ?? 0
      };
    });
  }

  variantLabel(v: VariantForm): string {
    return v.attrs.map(a => a.value.trim()).filter(Boolean).join(' / ') || 'Variant';
  }

  get combinationCount(): number {
    const opts = this.variantOptions.filter(o => o.values.length > 0);
    return opts.reduce((acc, o) => acc * o.values.length, 1);
  }

  private attrsToMap(attrs: { key: string; value: string }[]): Record<string, string> {
    const map: Record<string, string> = {};
    for (const a of attrs) { if (a.key.trim()) map[a.key.trim()] = a.value.trim(); }
    return map;
  }

  goToPricing() {
    this.error = '';
    this.step = 4;
  }

  // ── Step 4: Pricing + Publish ─────────────────────────────────────────────

  publish() {
    this.touched = true;
    this.error   = '';

    if (this.variants.length === 0) {
      if (!this.pricing.priceRetail || this.pricing.priceRetail <= 0) {
        this.error = 'Retail price is required.'; return;
      }
    } else {
      const unpriced = this.variants.find(v => !v.priceOverride || v.priceOverride <= 0);
      if (unpriced) {
        this.error = `Price is required for ${this.variantLabel(unpriced)}.`; return;
      }
    }

    this.saving = true;
    const done  = () => { this.productId = ''; this.router.navigate(['/products']); };
    const errFn = (e: any) => { this.saving = false; this.error = extractErrorMessage(e); };

    if (this.variants.length === 0) {
      this.http.patch<ApiResponse<any>>(PRODUCT_ENDPOINTS.BY_ID(this.productId), {
        priceRetail:    this.pricing.priceRetail,
        priceWholesale: this.pricing.priceWholesale || null,
        priceBroker:    this.pricing.priceBroker    || null,
        gstPercent:     this.pricing.gstPercent,
        gstIncluded:    this.pricing.gstIncluded,
        stockQty:       this.pricing.stockQty,
        status:         'ACTIVE'
      }).pipe(finalize(() => this.saving = false))
        .subscribe({ next: done, error: errFn });
    } else {
      const minPrice = Math.min(...this.variants.map(v => v.priceOverride ?? 0));

      const variantRequests = this.variants.map(v =>
        this.http.post<ApiResponse<any>>(PRODUCT_ENDPOINTS.VARIANTS(this.productId), {
          attributes:     this.attrsToMap(v.attrs),
          priceOverride:  v.priceOverride,
          priceWholesale: v.priceWholesale || null,
          priceBroker:    v.priceBroker    || null,
          stockQty:       v.stockQty || 0,
        })
      );

      const activate$ = this.http.patch<ApiResponse<any>>(
        PRODUCT_ENDPOINTS.BY_ID(this.productId), {
          priceRetail:    minPrice,
          priceWholesale: this.pricing.priceWholesale || null,
          priceBroker:    this.pricing.priceBroker    || null,
          gstPercent:     this.pricing.gstPercent,
          gstIncluded:    this.pricing.gstIncluded,
          status:         'ACTIVE'
        }
      );

      concat(...variantRequests, activate$)
        .pipe(finalize(() => this.saving = false))
        .subscribe({ complete: done, error: errFn });
    }
  }

  // ── Discard ───────────────────────────────────────────────────────────────

  tryDiscard() {
    if (!this.productId) { this.router.navigate(['/inventory']); return; }
    this.showDiscard = true;
  }

  discardAsDraft() {
    this.showDiscard = false;
    this.productId = '';
    this.router.navigate(['/inventory']);
  }

  confirmDelete() {
    if (!this.productId) { this.router.navigate(['/inventory']); return; }
    this.http.delete<ApiResponse<any>>(PRODUCT_ENDPOINTS.BY_ID(this.productId)).subscribe({
      next: () => { this.productId = ''; this.router.navigate(['/inventory']); },
      error: () => { this.productId = ''; this.router.navigate(['/inventory']); }
    });
    this.showDiscard = false;
  }

  @HostListener('window:beforeunload', ['$event'])
  onBeforeUnload(e: BeforeUnloadEvent) {
    if (this.productId) e.preventDefault();
  }

  // ── Helpers ───────────────────────────────────────────────────────────────

  fieldTypeLabel(ft: FieldType): string {
    return { TEXT: 'Text', NUMBER: 'Number', BOOLEAN: 'Yes / No',
             SELECT: 'Dropdown', MULTISELECT: 'Multi-select' }[ft] ?? ft;
  }

  get stepLabel(): string  { return this.steps[this.step - 1]?.label ?? ''; }
  get isLastStep(): boolean { return this.step === 4; }
  get hasNoAttrs(): boolean { return !this.attrLoading && this.attrDefs.length === 0; }

  trackGroup(_: number, grp: { name: string }) { return grp.name; }
  trackAttr(_: number, attr: AttributeDefinitionDto) { return attr.id; }

  get attrGroups(): { name: string; attrs: AttributeDefinitionDto[] }[] {
    const map = new Map<string, AttributeDefinitionDto[]>();
    for (const def of this.attrDefs) {
      if (def.fieldKey?.toLowerCase() === 'brand') continue;
      const key = def.groupName?.trim() || 'General';
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(def);
    }
    return Array.from(map.entries()).map(([name, attrs]) => ({ name, attrs }));
  }
}
