import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { concat, from, finalize } from 'rxjs';
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

interface VariantForm {
  colorName: string;
  colorHex:  string;
  size:      string;
  priceOverride: number | null;
  stockQty:  number;
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
  step       = 1;
  productId  = '';
  saving     = false;
  error      = '';
  touched    = false;

  // ── Reference data ────────────────────────────────────────────────────────
  categories: CategoryOption[]   = [];
  brands:     BrandOption[]      = [];

  // ── Step 1 ────────────────────────────────────────────────────────────────
  step1 = {
    name: '', sku: '', categoryId: '', brandId: '',
    shortDescription: '', description: ''
  };

  // ── Step 2 ────────────────────────────────────────────────────────────────
  step2 = {
    priceRetail:     null as number | null,
    priceWholesale:  null as number | null,
    priceBroker:     null as number | null,
    gstPercent:      18,
    gstIncluded:     false,
    stockQty:        0
  };

  // ── Step 3 — attributes ───────────────────────────────────────────────────
  attrDefs:    AttributeDefinitionDto[] = [];
  attrLoading  = false;
  attrValues:  Record<string, string>   = {};   // TEXT / NUMBER / SELECT / BOOLEAN
  attrMulti:   Record<string, string[]> = {};   // MULTISELECT

  // ── Step 4 — variants ─────────────────────────────────────────────────────
  variants:     VariantForm[] = [];
  variantError  = '';

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
      { label: 'Basic Info',   icon: 'description' },
      { label: 'Pricing',      icon: 'payments' },
      { label: 'Spec Fields',  icon: 'tune' },
      { label: 'Variants',     icon: 'palette' },
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
    else if (this.step === 2) this.submitStep2();
    else if (this.step === 3) this.submitStep3();
    else if (this.step === 4) this.publish();
  }

  skipToNext() {
    this.error = '';
    this.step++;
  }

  // ── Step 1: Create product ────────────────────────────────────────────────

  submitStep1() {
    this.touched = true;
    if (!this.step1.name.trim() || !this.step1.sku.trim() || !this.step1.categoryId) {
      this.error = 'Product name, SKU, and Category are required.'; return;
    }

    if (this.productId) {
      // Already created — just advance (changes only save on final publish)
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

  // ── Step 2: Pricing ───────────────────────────────────────────────────────

  submitStep2() {
    this.touched = true;
    if (!this.step2.priceRetail || this.step2.priceRetail <= 0) {
      this.error = 'Retail price is required.'; return;
    }
    this.saving = true;
    this.http.patch<ApiResponse<any>>(PRODUCT_ENDPOINTS.BY_ID(this.productId), {
      priceRetail:    this.step2.priceRetail,
      priceWholesale: this.step2.priceWholesale || null,
      priceBroker:    this.step2.priceBroker    || null,
      gstPercent:     this.step2.gstPercent,
      gstIncluded:    this.step2.gstIncluded,
      stockQty:       this.step2.stockQty,
    }).pipe(finalize(() => this.saving = false))
      .subscribe({
        next: () => {
          this.touched = false;
          this.step = (this.attrLoading || this.attrDefs.length > 0) ? 3 : 4;
        },
        error: e => this.error = extractErrorMessage(e)
      });
  }

  // ── Step 3: Attribute values ──────────────────────────────────────────────

  submitStep3() {
    // Required attr validation
    const missing = this.attrDefs.filter(d => {
      if (!d.required) return false;
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
        next: () => { this.step = 4; this.touched = false; },
        error: e  => this.error = extractErrorMessage(e)
      });
  }

  // ── Step 4: Variants + Publish ────────────────────────────────────────────

  addVariant() {
    this.variants.push({ colorName: '', colorHex: '#3b82f6', size: '', priceOverride: null, stockQty: 0 });
  }

  removeVariant(i: number) {
    this.variants.splice(i, 1);
  }

  publish() {
    // Validate variants if any
    if (this.variants.length > 0) {
      const bad = this.variants.find(v => !v.colorName.trim());
      if (bad) { this.variantError = 'Each variant needs a Colour Name.'; return; }
    }
    this.variantError = '';
    this.saving = true;

    const variantRequests = this.variants.map(v =>
      this.http.post<ApiResponse<any>>(PRODUCT_ENDPOINTS.VARIANTS(this.productId), {
        colorName:     v.colorName.trim(),
        colorHex:      v.colorHex || null,
        size:          v.size.trim() || null,
        priceOverride: v.priceOverride || null,
        stockQty:      v.stockQty || 0,
      })
    );

    const activate$ = this.http.patch<ApiResponse<any>>(
      PRODUCT_ENDPOINTS.BY_ID(this.productId), { status: 'ACTIVE' }
    );

    concat(...variantRequests, activate$).pipe(
      finalize(() => this.saving = false)
    ).subscribe({
      complete: () => {
        this.productId = '';
        this.router.navigate(['/products']);
      },
      error: e => { this.variantError = extractErrorMessage(e); }
    });
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

  get stepLabel(): string { return this.steps[this.step - 1]?.label ?? ''; }
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
