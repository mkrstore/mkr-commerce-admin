import { Component, OnDestroy, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { ShopSettingsService, ShopSettings } from '../../services/shop-settings.service';
import { NotificationService } from '../../services/notification.service';
import { CustomerService } from '../../services/customer.service';
import { BILLING_ENDPOINTS, PRODUCT_ENDPOINTS } from '../../core/constants/api.constants';
import { ApiResponse } from '../../core/models/api.models';

// ── Types ─────────────────────────────────────────────────────────────────────

interface BillingProduct {
  id: string;
  name: string;
  sku: string;
  categoryName: string;
  priceRetail:    number;
  priceWholesale: number | null;
  priceBroker:    number | null;
  gstPercent: number;
  stockQty: number;
  primaryImageUrl: string | null;
  status: string;
}

interface BillItem {
  product: BillingProduct;
  qty: number;
  unitPrice: number;
  discount: number;
}

interface Customer {
  id?: string;
  phone: string;
  name: string;
  email: string;
  address: string;
  pendingAmount?: number;
  type?: 'RETAIL' | 'WHOLESALE' | 'BROKER';
}

interface SavedBill {
  id: string;       // MKR-BILL-XXXX display format
  uuid?: string;    // backend UUID — used for reprint via API
  date: Date;
  customer: Customer;
  items: BillItem[];
  gstEnabled: boolean;
  paymentMethod: string;
  khataAmount: number;  // 0 = fully paid now; >0 = amount added to khata
  subtotal: number;
  totalDiscount: number;
  gstAmount: number;
  grandTotal: number;
}

interface ProductPage {
  content: BillingProduct[];
  totalElements: number;
  totalPages: number;
  number: number;
}

// ── Component ─────────────────────────────────────────────────────────────────

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.scss',
})
export class BillingComponent implements OnInit, OnDestroy {

  private readonly EP         = PRODUCT_ENDPOINTS;
  private readonly BILLING_EP = BILLING_ENDPOINTS;

  private _activeTab: 'new' | 'history' = 'new';
  get activeTab(): 'new' | 'history' { return this._activeTab; }
  set activeTab(val: 'new' | 'history') {
    this._activeTab = val;
    if (val === 'history' && !this.historyLoaded) this.loadHistory();
  }

  historyLoading = false;
  private historyLoaded = false;

  // ── Products (from API) ───────────────────────────────────────────────────
  allProducts: BillingProduct[] = [];
  productsLoading = false;

  searchQ = '';
  selectedCategory = '';

  // Pagination for product list
  prodPage     = 0;
  prodPageSize = 20;

  // ── Bill state ────────────────────────────────────────────────────────────
  billItems: BillItem[] = [];
  customer: Customer = { phone: '', name: '', email: '', address: '' };
  gstEnabled = false;
  paymentMethod: 'cash' | 'upi' | 'card' | null = null;
  paymentState: 'idle' | 'confirming' | 'done' = 'idle';

  // ── Khata payment mode ────────────────────────────────────────────────────
  paymentMode: 'full' | 'partial' | 'khata' = 'full';
  paidNow: number | null = null;
  partialMethod: 'cash' | 'upi' | 'card' | null = null;
  khataLoading = false;

  // ── History ───────────────────────────────────────────────────────────────
  historySearch = '';
  savedBills: SavedBill[] = [];
  printBill: SavedBill | null = null;
  selectedBill: SavedBill | null = null;
  private counter = 1001;

  // ── Customer typeahead ────────────────────────────────────────────────────
  phoneDropdown: Customer[] = [];
  showPhoneDropdown = false;
  customerSearching = false;
  phoneSearchDone = false;   // true after first search completes with no results
  private phoneSearch$ = new Subject<string>();
  private destroy$    = new Subject<void>();

  // In-memory customer cache for offline fallback (current session only)
  private knownCustomers: Customer[] = [];

  // ── Validation touched flags ──────────────────────────────────────────────
  nameTouched       = false;
  phoneTouched      = false;
  emailTouched      = false;
  isExistingCustomer = false;  // locked when selected from dropdown

  // ── UPI flow ──────────────────────────────────────────────────────────────
  upiState: 'init' | 'waiting' | 'received' = 'init';
  upiCountdown = 0;
  private upiTimer: ReturnType<typeof setInterval> | null = null;

  // ── Shop settings ─────────────────────────────────────────────────────────
  shopSettings: ShopSettings;

  // ── PDF / Email / Share ───────────────────────────────────────────────────
  pdfLoading   = false;
  emailSending = false;
  emailSentMsg = '';


  constructor(
    private http: HttpClient,
    private settingsSvc: ShopSettingsService,
    private notifSvc: NotificationService,
    private customerSvc: CustomerService,
    private cdr: ChangeDetectorRef,
    private zone: NgZone,
  ) {
    this.shopSettings = this.settingsSvc.get();
  }

  ngOnInit() {
    this.loadProducts();
    this.fetchNextBillNumber();

    this.phoneSearch$.pipe(
      debounceTime(280),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(q => this.doCustomerSearch(q));
  }

  // Fetch the most recent bill so the preview number shown on the new-bill tab
  // reflects the actual sequence, not the hardcoded 1001 default.
  private fetchNextBillNumber() {
    this.http.get<ApiResponse<any>>(this.BILLING_EP.LIST, { params: { page: '0', size: '1' } })
      .subscribe({
        next: res => {
          const bills = res.data?.content ?? [];
          if (bills.length > 0) {
            const num = parseInt((bills[0].billId as string)?.replace('MKR-BILL-', '') ?? '0', 10);
            if (!isNaN(num) && num >= 1001) this.counter = num + 1;
          }
        }
      });
  }

  // Returns the right price tier for the current customer type.
  priceFor(p: BillingProduct): number {
    const type = this.customer.type;
    if (type === 'WHOLESALE' && p.priceWholesale) return p.priceWholesale;
    if (type === 'BROKER'    && p.priceBroker)    return p.priceBroker;
    return p.priceRetail;
  }

  // ── Products from API ─────────────────────────────────────────────────────

  loadProducts() {
    this.productsLoading = true;
    this.fetchProductPage(0, []);
  }

  private fetchProductPage(page: number, accumulated: BillingProduct[]) {
    this.http.get<ApiResponse<ProductPage>>(this.EP.BASE, {
      params: { status: 'ACTIVE', size: '500', page: String(page), sortBy: 'name', dir: 'asc' }
    }).subscribe({
      next: res => {
        const data  = res.data;
        const items = [...accumulated, ...(data?.content ?? [])];
        const isLast = !data || data.number >= data.totalPages - 1;
        if (isLast) {
          this.allProducts     = items;
          this.productsLoading = false;
        } else {
          this.fetchProductPage(page + 1, items);
        }
      },
      error: () => {
        this.allProducts     = accumulated;
        this.productsLoading = false;
      }
    });
  }

  get categories(): string[] {
    const names = this.allProducts.map(p => p.categoryName).filter(Boolean);
    return [...new Set(names)].sort();
  }

  get filteredProducts(): BillingProduct[] {
    const q = this.searchQ.trim().toLowerCase();
    return this.allProducts.filter(p => {
      const matchCat = !this.selectedCategory || p.categoryName === this.selectedCategory;
      const matchQ   = !q || p.name.toLowerCase().includes(q)
                          || p.sku.toLowerCase().includes(q)
                          || p.categoryName.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }

  get prodTotalPages(): number {
    return Math.max(1, Math.ceil(this.filteredProducts.length / this.prodPageSize));
  }

  get displayedProducts(): BillingProduct[] {
    const start = this.prodPage * this.prodPageSize;
    return this.filteredProducts.slice(start, start + this.prodPageSize);
  }

  goToProdPage(p: number) {
    this.prodPage = Math.max(0, Math.min(p, this.prodTotalPages - 1));
  }

  // ── Bill items ────────────────────────────────────────────────────────────

  addProduct(p: BillingProduct) {
    if (p.stockQty === 0) return;
    const existing = this.billItems.find(i => i.product.sku === p.sku);
    if (existing) { existing.qty++; return; }
    this.billItems.push({ product: p, qty: 1, unitPrice: this.priceFor(p), discount: 0 });
  }

  removeItem(index: number) { this.billItems.splice(index, 1); }
  decQty(item: BillItem) { if (item.qty > 1) item.qty--; }
  incQty(item: BillItem) { item.qty++; }

  lineSubtotal(item: BillItem): number { return item.qty * item.unitPrice; }
  lineTotal(item: BillItem): number {
    const disc = Math.max(0, item.discount || 0);
    return item.qty * item.unitPrice - disc;
  }
  lineGst(item: BillItem): number {
    if (!this.gstEnabled) return 0;
    return Math.round((this.lineTotal(item) * item.product.gstPercent / 100) * 100) / 100;
  }

  get subtotal():      number { return this.billItems.reduce((s, i) => s + this.lineSubtotal(i), 0); }
  get totalDiscount(): number { return this.billItems.reduce((s, i) => s + (i.discount || 0), 0); }
  get taxableAmount(): number { return this.subtotal - this.totalDiscount; }
  get gstAmount():     number { return this.billItems.reduce((s, i) => s + this.lineGst(i), 0); }
  get grandTotal():    number { return this.taxableAmount + this.gstAmount; }

  // ── Customer search via API ───────────────────────────────────────────────

  private doCustomerSearch(q: string) {
    this.customerSearching = true;
    this.phoneSearchDone   = false;
    this.customerSvc.list({ search: q, size: 6 }).subscribe({
      next: res => {
        this.phoneDropdown = res.content.map(c => ({
          id:            c.id,
          phone:         c.phone ?? '',
          name:          c.name,
          email:         c.email ?? '',
          address:       '',
          pendingAmount: c.pendingAmount,
          type:          c.type,
        }));
        this.showPhoneDropdown = this.phoneDropdown.length > 0;
        this.phoneSearchDone   = this.phoneDropdown.length === 0;
        this.customerSearching = false;
      },
      error: () => {
        this.phoneDropdown = this.knownCustomers
          .filter(c => c.phone.includes(q) || c.name.toLowerCase().includes(q.toLowerCase()))
          .slice(0, 6);
        this.showPhoneDropdown = this.phoneDropdown.length > 0;
        this.phoneSearchDone   = this.phoneDropdown.length === 0;
        this.customerSearching = false;
      },
    });
  }

  private normalizePhone(raw: string): string {
    let v = raw.replace(/\D/g, '');
    if (v.startsWith('91') && v.length > 10) v = v.slice(2);
    return v.slice(0, 10);
  }

  onPhoneInput() {
    this.customer.phone = this.normalizePhone(this.customer.phone);
    this.phoneTouched    = true;
    this.phoneSearchDone = false;
    const q = this.customer.phone;
    if (q.length >= 3) {
      this.phoneSearch$.next(q);
    } else {
      this.phoneDropdown = [];
      this.showPhoneDropdown = false;
      this.customerSearching = false;
    }
  }

  selectFromDropdown(c: Customer) {
    const prevType = this.customer.type;
    this.customer = { ...c, phone: this.normalizePhone(c.phone) };
    this.phoneDropdown     = [];
    this.showPhoneDropdown = false;
    this.phoneSearchDone   = false;
    this.phoneTouched      = true;
    this.nameTouched       = true;
    this.isExistingCustomer = true;
    // Reprice existing bill items if customer type changed
    if (c.type && c.type !== prevType) {
      this.billItems = this.billItems.map(i => ({
        ...i,
        unitPrice: this.priceFor(i.product)
      }));
    }
  }

  clearCustomer() {
    this.customer          = { phone: '', name: '', email: '', address: '' };
    this.isExistingCustomer = false;
    this.phoneTouched      = false;
    this.nameTouched       = false;
    this.emailTouched      = false;
    this.phoneSearchDone   = false;
  }

  closeDropdown() { setTimeout(() => { this.showPhoneDropdown = false; }, 150); }

  // ── Validation ────────────────────────────────────────────────────────────

  onNameInput() {
    this.customer.name = this.customer.name.replace(/[^a-zA-Z .'-]/g, '');
    this.nameTouched = true;
  }

  onEmailInput() { this.emailTouched = true; }

  get nameError(): string | null {
    if (!this.nameTouched) return null;
    const v = this.customer.name.trim();
    if (!v) return 'Name is required';
    if (v.length < 2) return 'Name is too short';
    return null;
  }

  get phoneError(): string | null {
    if (!this.phoneTouched) return null;
    const v = this.customer.phone.trim();
    if (!v) return 'Phone number is required';
    if (v.length !== 10) return 'Must be exactly 10 digits';
    return null;
  }

  get emailError(): string | null {
    if (!this.emailTouched) return null;
    const v = this.customer.email.trim();
    if (!v) return null;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return 'Enter a valid email address';
    return null;
  }

  get canBill(): boolean {
    return this.billItems.length > 0
      && this.customer.name.trim().length >= 2
      && this.customer.phone.trim().length === 10
      && !this.emailError;
  }

  get canUseKhata(): boolean { return !!this.customer.id; }

  get khataAmountComputed(): number {
    if (this.paymentMode === 'khata') return this.grandTotal;
    if (this.paymentMode === 'partial') return Math.max(0, this.grandTotal - (this.paidNow ?? 0));
    return 0;
  }

  get paidNowError(): string | null {
    if (this.paymentMode !== 'partial' || this.paidNow === null) return null;
    if (this.paidNow <= 0) return 'Enter an amount greater than 0';
    if (this.paidNow >= this.grandTotal) return `Must be less than ${this.inr(this.grandTotal)}`;
    return null;
  }

  get partialConfirmReady(): boolean {
    return this.paymentMode === 'partial'
      && !!this.paidNow
      && this.paidNow > 0
      && !this.paidNowError
      && !!this.partialMethod;
  }

  get currentBillId(): string { return `MKR-BILL-${this.counter}`; }

  // ── Payment flow ──────────────────────────────────────────────────────────

  selectPayment(m: 'cash' | 'upi' | 'card') {
    if (!this.canBill) return;
    this.paymentMode   = 'full';
    this.paymentMethod = m;
    this.paymentState  = 'confirming';
    if (m === 'upi') this.upiState = 'init';
  }

  selectKhataMode(mode: 'partial' | 'khata') {
    if (!this.canBill || !this.canUseKhata) return;
    this.paymentMode   = mode;
    this.paymentMethod = null;
    this.paidNow       = null;
    this.partialMethod = null;
    this.paymentState  = 'confirming';
  }

  startUpiWaiting() {
    this.upiState = 'waiting';
    this.upiCountdown = 120;
    this.upiTimer = setInterval(() => {
      this.upiCountdown--;
      if (this.upiCountdown <= 0) this.cancelUpiWait();
    }, 1000);
  }

  upiPaymentReceived() {
    if (this.upiTimer) { clearInterval(this.upiTimer); this.upiTimer = null; }
    this.upiState = 'received';
    setTimeout(() => this.confirmPayment(), 350);
  }

  cancelUpiWait() {
    if (this.upiTimer) { clearInterval(this.upiTimer); this.upiTimer = null; }
    this.upiState = 'init';
    this.upiCountdown = 0;
  }

  upiTimerLabel(): string {
    const m = Math.floor(this.upiCountdown / 60);
    const s = this.upiCountdown % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  confirmPayment() {
    const khataAmt = this.khataAmountComputed;
    const effectiveMethod: string =
      this.paymentMode === 'khata'   ? 'khata' :
      this.paymentMode === 'partial' ? (this.partialMethod ?? 'cash') :
      (this.paymentMethod ?? 'cash');

    const body = {
      customerId:      this.customer.id ?? null,
      customerPhone:   this.customer.phone || null,
      customerName:    this.customer.name || null,
      customerEmail:   this.customer.email || null,
      customerAddress: this.customer.address || null,
      items: this.billItems.map(i => ({
        productId: i.product.id,
        qty:       i.qty,
        unitPrice: i.unitPrice,
        discount:  i.discount || 0,
      })),
      gstEnabled:    this.gstEnabled,
      paymentMethod: effectiveMethod,
      khataAmount:   khataAmt,
      paidViaMethod: this.paymentMode === 'partial' ? (this.partialMethod ?? null) : null,
    };

    this.khataLoading = true;

    this.http.post<ApiResponse<any>>(this.BILLING_EP.CONFIRM, body).subscribe({
      next: res => {
        this.khataLoading = false;
        const d = res.data;

        const bill: SavedBill = {
          id:   d.billId,
          uuid: d.id,
          date: new Date(d.createdAt),
          customer: d.customer ? {
            id:            d.customer.id,
            phone:         d.customer.phone ?? '',
            name:          d.customer.name,
            email:         d.customer.email ?? '',
            address:       '',
            pendingAmount: Number(d.customer.pendingAmount),
          } : { ...this.customer },
          items:         this.billItems.map(i => ({ ...i, product: { ...i.product } })),
          gstEnabled:    this.gstEnabled,
          paymentMethod: effectiveMethod,
          khataAmount:   Number(d.khataAmount),
          subtotal:      Number(d.subtotal),
          totalDiscount: Number(d.totalDiscount),
          gstAmount:     Number(d.gstAmount),
          grandTotal:    Number(d.grandTotal),
        };

        this.savedBills.unshift(bill);
        this.printBill  = bill;
        this.paymentState = 'done';
        // Keep counter in sync with the actual sequence from the backend
        const nextNum = parseInt(d.billId?.replace('MKR-BILL-', '') ?? '0', 10);
        if (!isNaN(nextNum)) this.counter = nextNum + 1;

        const notifDesc = khataAmt > 0
          ? `${this.customer.name} — ${this.inr(Number(d.grandTotal) - khataAmt)} now + ${this.inr(khataAmt)} khata`
          : `${this.customer.name} paid ${this.inr(Number(d.grandTotal))} — ${d.billId}`;
        this.notifSvc.push('payment', this.payIcon(effectiveMethod),
          `${this.payLabel(effectiveMethod)} Payment`, notifDesc);

        if (!this.knownCustomers.find(c => c.phone === this.customer.phone)) {
          this.knownCustomers.push({ ...this.customer });
        }
      },
      error: err => {
        this.khataLoading = false;
        const msg = err?.error?.message ?? 'Billing failed. Please try again.';
        this.notifSvc.push('message', '❌', 'Billing Error', msg);
      },
    });
  }

  doPrint() { this.printInNewWindow(this.printBill); }

  private printInNewWindow(bill: SavedBill | null) {
    if (!bill) return;
    const s      = this.shopSettings;
    const win    = window.open('', '_blank', 'width=960,height=820,scrollbars=yes');
    if (!win) { alert('Allow pop-ups to print the invoice.'); return; }

    const paidNow  = bill.grandTotal - bill.khataAmount;
    const hasKhata = bill.khataAmount > 0;
    const hasDisc  = bill.totalDiscount > 0;
    const hasGst   = bill.gstEnabled && bill.gstAmount > 0;
    const showSub  = hasDisc || hasGst;
    const date     = `${this.fmtDate(bill.date)}, ${this.fmtTime(bill.date)}`;

    const itemRows = bill.items.map((item, i) => {
      const net   = item.qty * item.unitPrice - (item.discount || 0);
      const gstPc = bill.gstEnabled ? item.product.gstPercent : 0;
      const total = net + net * gstPc / 100;
      const rowBg = i % 2 === 1 ? '#f8faff' : '#ffffff';
      let cells = `
        <td class="td-num">${i + 1}</td>
        <td class="td-name">${this.esc(item.product.name)}</td>
        <td class="td-sku">${this.esc(item.product.sku)}</td>
        <td class="td-center">${item.qty}</td>
        <td class="td-right">${this.inr(item.unitPrice)}</td>`;
      if (hasDisc) cells += `<td class="td-right">${item.discount ? this.inr(item.discount) : '<span style="color:#c0c0c0">—</span>'}</td>`;
      if (hasGst)  cells += `<td class="td-center">${gstPc > 0 ? gstPc + '%' : '<span style="color:#c0c0c0">—</span>'}</td>`;
      cells += `<td class="td-right td-amt">${this.inr(total)}</td>`;
      return `<tr style="background:${rowBg}">${cells}</tr>`;
    }).join('');

    const thDisc = hasDisc ? `<th class="th-right" style="width:9%">Discount</th>` : '';
    const thGst  = hasGst  ? `<th class="th-center" style="width:7%">GST %</th>`   : '';

    const sumRows = [
      showSub ? `<div class="s-row"><span class="s-lbl">Subtotal</span><span class="s-amt">${this.inr(bill.subtotal)}</span></div>` : '',
      hasDisc ? `<div class="s-row"><span class="s-lbl">Discount</span><span class="s-amt s-disc">− ${this.inr(bill.totalDiscount)}</span></div>` : '',
      hasGst  ? `<div class="s-row"><span class="s-lbl">GST</span><span class="s-amt s-gst">+ ${this.inr(bill.gstAmount)}</span></div>` : '',
    ].filter(Boolean).join('');

    const html = `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><title>Invoice ${this.esc(bill.id)}</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Segoe UI',Arial,Helvetica,sans-serif;font-size:9.5px;color:#1e293b;
  background:#f1f5f9;min-height:100vh}

/* ── PAGE WRAPPER ─────────────────────────────────── */
.page{max-width:760px;margin:24px auto;background:#fff;border-radius:6px;
  overflow:hidden;box-shadow:0 2px 16px rgba(0,0,0,.10)}

/* ── TOP ACCENT BAR ───────────────────────────────── */
.top-bar{height:4px;background:linear-gradient(to right,#2874F0,#FF9F00)}

/* ── HEADER ───────────────────────────────────────── */
.hdr{padding:24px 32px 20px;display:flex;justify-content:space-between;
  align-items:flex-start;border-bottom:1px solid #e2e8f0}
.logo-text{font-size:24px;font-weight:900;letter-spacing:-.8px;line-height:1}
.logo-mkr{color:#2874F0}
.logo-com{color:#FF9F00}
.shop-tag{font-size:8px;color:#64748b;margin-top:3px;font-style:italic}
.shop-info{margin-top:8px;font-size:8px;color:#475569;line-height:1.9}
.shop-info .gstin{font-weight:700;color:#1e293b;margin-top:2px}
.inv-block{text-align:right}
.inv-label{display:inline-block;border:1.5px solid #2874F0;color:#2874F0;
  font-size:8px;font-weight:800;padding:2px 10px;border-radius:3px;
  letter-spacing:1.8px;margin-bottom:8px}
.inv-number{font-size:18px;font-weight:800;color:#1e293b;letter-spacing:-.3px}
.inv-date{font-size:8px;color:#64748b;margin-top:5px}

/* ── BODY ─────────────────────────────────────────── */
.body{padding:20px 32px 28px}

/* ── INFO ROW ─────────────────────────────────────── */
.info-row{display:flex;gap:12px;margin-bottom:20px}
.info-box{flex:1;padding:12px 14px;border:1px solid #e2e8f0;border-radius:5px}
.info-box.billed{border-top:3px solid #2874F0}
.info-box.payment{border-top:3px solid ${hasKhata ? '#C02A2A' : '#16803E'}}
.info-cap{font-size:7px;font-weight:800;color:#2874F0;letter-spacing:1.2px;
  text-transform:uppercase;margin-bottom:8px;padding-bottom:5px;border-bottom:1px solid #e2e8f0}
.cust-name{font-size:13px;font-weight:700;color:#1e293b;margin-bottom:4px}
.info-line{font-size:8.5px;color:#1e293b;margin-bottom:3px;display:flex;gap:6px}
.info-key{color:#64748b;min-width:38px;font-size:7.5px;font-weight:700;padding-top:1px}
.pay-method{font-size:15px;font-weight:800;color:#1e293b;margin-bottom:5px}
.chip{display:inline-block;font-size:7px;font-weight:700;padding:2px 8px;
  border-radius:10px;margin-right:3px;border:1px solid}
.chip-paid{background:#f0fdf4;color:#166534;border-color:#bbf7d0}
.chip-partial{background:#fff1f2;color:#9f1239;border-color:#fecdd3}
.chip-gst{background:#eff6ff;color:#1d4ed8;border-color:#bfdbfe}
.pay-detail{font-size:8px;color:#475569;margin-top:7px;line-height:1.9}
.pay-detail strong{color:#1e293b}

/* ── SECTION TITLE ────────────────────────────────── */
.sec-title{font-size:6.5px;font-weight:800;color:#94a3b8;letter-spacing:1.4px;
  text-transform:uppercase;margin-bottom:7px;padding-bottom:5px;
  border-bottom:1.5px solid #e2e8f0}

/* ── ITEMS TABLE ──────────────────────────────────── */
table.items{width:100%;border-collapse:collapse;margin-bottom:14px;border:1px solid #e2e8f0}
table.items thead tr{background:#EBF2FF}
table.items thead th{color:#1e40af;padding:8px 7px;font-size:7px;font-weight:800;
  border:none;border-bottom:2px solid #2874F0;letter-spacing:.6px;text-transform:uppercase;text-align:left}
.th-right{text-align:right!important}
.th-center{text-align:center!important}
table.items tbody tr{border-bottom:1px solid #f1f5f9}
table.items tbody td{padding:7px 7px;font-size:8.5px;color:#334155;vertical-align:middle}
.td-num{text-align:center;color:#94a3b8;width:4%}
.td-name{font-weight:600;color:#1e293b}
.td-sku{color:#64748b;font-family:monospace;font-size:8px}
.td-center{text-align:center}
.td-right{text-align:right}
.td-amt{font-weight:700;color:#1e293b}

/* ── SUMMARY ──────────────────────────────────────── */
.sum-wrap{display:flex;justify-content:flex-end;margin-bottom:16px}
.sum-box{width:38%;min-width:210px;border:1px solid #e2e8f0;border-radius:5px;overflow:hidden}
.s-row{display:flex;justify-content:space-between;padding:6px 10px;
  font-size:8.5px;border-bottom:1px solid #f1f5f9}
.s-lbl{color:#64748b}
.s-amt{font-weight:600;color:#334155}
.s-disc{color:#16803E}
.s-gst{color:#2874F0}
.grand-row{display:flex;justify-content:space-between;align-items:center;
  padding:11px 10px;background:#EBF2FF;border-top:2px solid #2874F0}
.gt-lbl{font-size:8px;font-weight:800;color:#1e40af;letter-spacing:.6px;text-transform:uppercase}
.gt-amt{font-size:16px;font-weight:900;color:#FF9F00}

/* ── PAYMENT SUMMARY ──────────────────────────────── */
.pay-sum{border:1px solid #e2e8f0;border-radius:5px;overflow:hidden;margin-bottom:16px}
.pay-sum-hdr{background:#f8fafc;padding:8px 14px;font-size:7px;font-weight:800;
  color:#2874F0;letter-spacing:1.2px;text-transform:uppercase;border-bottom:1px solid #e2e8f0}
.pay-row{display:flex;justify-content:space-between;align-items:center;
  padding:8px 14px;border-bottom:1px solid #f8fafc;font-size:8.5px}
.p-lbl{color:#64748b}
.p-val{font-weight:700;color:#1e293b}
.p-green{color:#16803E}
.p-red{color:#C02A2A}
.p-blue{color:#2874F0}
.khata-note{padding:8px 14px;font-size:8px;color:#64748b;font-style:italic;
  border-top:1px solid #fecaca;background:#fff8f8}

/* ── FOOTER ───────────────────────────────────────── */
.footer{padding:12px 32px;border-top:1px dashed #e2e8f0;text-align:center;
  font-size:8px;color:#94a3b8}
.footer strong{color:#64748b}

/* ── PRINT ────────────────────────────────────────── */
@page{size:A4;margin:0}
@media print{
  body{background:#fff}
  .page{box-shadow:none;border-radius:0;margin:0;max-width:100%}
  *{-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important}
}
</style></head>
<body>

<div class="page">
  <div class="top-bar"></div>

  <!-- ══ HEADER ══ -->
  <div class="hdr">
    <div>
      <div class="logo-text">
        <span class="logo-mkr">MKR</span><span class="logo-com">Commerce</span>
      </div>
      ${s.tagline ? `<div class="shop-tag">${this.esc(s.tagline)}</div>` : ''}
      <div class="shop-info">
        ${s.address ? `<div>${this.esc(s.address)}</div>` : ''}
        ${(s.phone || s.phone2) ? `<div>Ph: ${this.esc(s.phone)}${s.phone2 ? ' &nbsp;/&nbsp; ' + this.esc(s.phone2) : ''}</div>` : ''}
        ${s.email ? `<div>${this.esc(s.email)}</div>` : ''}
        ${s.gstin ? `<div class="gstin">GSTIN: ${this.esc(s.gstin)}</div>` : ''}
      </div>
    </div>
    <div class="inv-block">
      <div class="inv-label">INVOICE</div>
      <div class="inv-number">${this.esc(bill.id)}</div>
      <div class="inv-date">${this.esc(date)}</div>
    </div>
  </div>

  <div class="body">

    <!-- ══ BILLED TO + PAYMENT ══ -->
    <div class="info-row">
      <div class="info-box billed">
        <div class="info-cap">Billed To</div>
        <div class="cust-name">${this.esc(bill.customer.name)}</div>
        ${bill.customer.phone ? `<div class="info-line"><span class="info-key">Phone</span>${this.esc(bill.customer.phone)}</div>` : ''}
        ${bill.customer.email ? `<div class="info-line"><span class="info-key">Email</span>${this.esc(bill.customer.email)}</div>` : ''}
      </div>
      <div class="info-box payment">
        <div class="info-cap">Payment</div>
        <div class="pay-method">${this.esc(bill.paymentMethod).toUpperCase()}</div>
        <div>
          ${bill.gstEnabled ? `<span class="chip chip-gst">GST</span>` : ''}
          ${hasKhata ? `<span class="chip chip-partial">Partial Payment</span>` : `<span class="chip chip-paid">Fully Paid</span>`}
        </div>
        ${hasKhata ? `<div class="pay-detail">
          Collected: <strong>${this.inr(paidNow)}</strong><br>
          Khata (deferred): <strong style="color:#C02A2A">${this.inr(bill.khataAmount)}</strong>
        </div>` : ''}
      </div>
    </div>

    <!-- ══ ITEMS ══ -->
    <div class="sec-title">Items</div>
    <table class="items">
      <thead>
        <tr>
          <th style="width:4%;text-align:center">#</th>
          <th style="width:${hasDisc && hasGst ? '27' : hasDisc || hasGst ? '31' : '37'}%">Item</th>
          <th style="width:11%">SKU</th>
          <th class="th-center" style="width:6%">Qty</th>
          <th class="th-right" style="width:12%">Unit Price</th>
          ${thDisc}${thGst}
          <th class="th-right" style="width:13%">Amount</th>
        </tr>
      </thead>
      <tbody>${itemRows}</tbody>
    </table>

    <!-- ══ SUMMARY ══ -->
    <div class="sum-wrap">
      <div class="sum-box">
        ${sumRows}
        <div class="grand-row">
          <span class="gt-lbl">Grand Total</span>
          <span class="gt-amt">${this.inr(bill.grandTotal)}</span>
        </div>
      </div>
    </div>

    <!-- ══ PAYMENT SUMMARY ══ -->
    <div class="pay-sum">
      <div class="pay-sum-hdr">Payment Summary</div>
      <div class="pay-row">
        <span class="p-lbl">Payment Method</span>
        <span class="p-val p-blue">${this.esc(bill.paymentMethod).toUpperCase()}</span>
      </div>
      <div class="pay-row">
        <span class="p-lbl">Amount Collected</span>
        <span class="p-val p-green">${this.inr(paidNow)}</span>
      </div>
      ${hasKhata ? `
      <div class="pay-row">
        <span class="p-lbl">Deferred to Khata</span>
        <span class="p-val p-red">${this.inr(bill.khataAmount)}</span>
      </div>
      <div class="khata-note">
        ${this.inr(bill.khataAmount)} has been recorded in ${this.esc(bill.customer.name)}'s Khata.
        Check the Khata tab for the current outstanding balance.
      </div>` : ''}
    </div>

  </div><!-- /body -->

  <!-- ══ FOOTER ══ -->
  <div class="footer">
    Thank you for shopping at <strong>${this.esc(s.name)}</strong> &nbsp;&bull;&nbsp;
    Computer generated invoice &mdash; no signature required.
  </div>
</div><!-- /page -->

<script>
  window.onload = function() {
    window.print();
    window.onafterprint = function() {
      try { if (window.opener && !window.opener.closed) window.opener.focus(); } catch(e) {}
      window.close();
    };
  };
<\/script>
</body></html>`;

    win.document.write(html);
    win.document.close();
  }

  private esc(s: string | undefined | null): string {
    if (!s) return '';
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  // ── PDF download ──────────────────────────────────────────────────────────
  downloadPdf(bill: SavedBill | null) {
    if (!bill) return;
    const uuid = bill.uuid;
    if (!uuid) { alert('Bill UUID not available — save the bill first.'); return; }
    this.pdfLoading = true;
    const s = this.shopSettings;
    const params: Record<string, string> = {
      shopName:    s.name    || '',
      shopTagline: s.tagline || '',
      shopAddress: s.address || '',
      shopPhone:   s.phone   || '',
      shopPhone2:  s.phone2  || '',
      shopEmail:   s.email   || '',
      shopGstin:   s.gstin   || '',
    };
    const query = new URLSearchParams(params).toString();
    this.http.get(`/api/billing/${uuid}/pdf?${query}`, { responseType: 'blob' })
      .subscribe({
        next: blob => {
          const url = URL.createObjectURL(blob);
          // iOS Safari ignores the `download` attribute on blob URLs — open in
          // a new tab so the browser's built-in PDF viewer handles it instead.
          const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent);
          if (isIos) {
            window.open(url, '_blank');
          } else {
            const a = document.createElement('a');
            a.href     = url;
            a.download = `${bill!.id}.pdf`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          }
          setTimeout(() => URL.revokeObjectURL(url), 10000);
          this.pdfLoading = false;
        },
        error: () => { this.pdfLoading = false; alert('PDF generation failed.'); }
      });
  }

  // ── Email ─────────────────────────────────────────────────────────────────
  sendEmail(bill: SavedBill | null) {
    if (!bill?.uuid) return;
    this.emailSending = true;
    this.emailSentMsg = '';
    const s = this.shopSettings;
    this.http.post(`/api/billing/${bill.uuid}/send-email`, {
      shopName:    s.name    || '',
      shopTagline: s.tagline || '',
      shopAddress: s.address || '',
      shopPhone:   s.phone   || '',
      shopPhone2:  s.phone2  || '',
      shopEmail:   s.email   || '',
      shopGstin:   s.gstin   || '',
      toEmail:     bill.customer.email || null,
    }).subscribe({
      next: () => {
        this.emailSending = false;
        this.emailSentMsg = `Invoice sent to ${bill.customer.email}`;
        setTimeout(() => this.emailSentMsg = '', 4000);
      },
      error: () => { this.emailSending = false; alert('Failed to send email.'); }
    });
  }

  // ── WhatsApp share ────────────────────────────────────────────────────────
  shareWhatsApp(bill: SavedBill | null) {
    if (!bill?.customer?.phone) return;
    const s       = this.shopSettings;
    const phone   = bill.customer.phone.replace(/\D/g, '');
    const e91     = phone.startsWith('91') ? phone : `91${phone}`;
    const paidNow = bill.grandTotal - bill.khataAmount;
    const date    = `${this.fmtDate(bill.date)}, ${this.fmtTime(bill.date)}`;

    const itemLines = bill.items.map((item, i) => {
      const net   = item.qty * item.unitPrice - (item.discount || 0);
      const gstPc = bill.gstEnabled ? item.product.gstPercent : 0;
      const total = net + net * gstPc / 100;
      return `  ${i + 1}. ${item.product.name} (${item.product.sku})\n     ${item.qty} x ${this.inr(item.unitPrice)}${item.discount ? ' - disc ' + this.inr(item.discount) : ''} = *${this.inr(total)}*`;
    }).join('\n');

    const lines = [
      `🧾 *INVOICE — ${bill.id}*`,
      `📅 ${date}`,
      `🏪 *${s.name}*`,
      s.address ? `📍 ${s.address}` : '',
      s.phone   ? `📞 ${s.phone}` : '',
      s.gstin   ? `GST: ${s.gstin}` : '',
      '',
      `👤 *${bill.customer.name}*`,
      bill.customer.phone ? `📱 ${bill.customer.phone}` : '',
      '',
      `*Items:*`,
      itemLines,
      '',
      `Subtotal : ${this.inr(bill.subtotal)}`,
      bill.totalDiscount > 0 ? `Discount : - ${this.inr(bill.totalDiscount)}` : '',
      bill.gstEnabled && bill.gstAmount > 0 ? `GST      : + ${this.inr(bill.gstAmount)}` : '',
      `*TOTAL   : ${this.inr(bill.grandTotal)}*`,
      '',
      `💳 Payment: ${this.payLabel(bill.paymentMethod)}`,
      `✅ Paid Now: *${this.inr(paidNow)}*`,
      bill.khataAmount > 0 ? `📒 Khata (Due): *${this.inr(bill.khataAmount)}*` : '',
      '',
      `Thank you for shopping at *${s.name}*! 🙏`,
    ].filter(l => !!l).join('\n');

    window.open(`https://wa.me/${e91}?text=${encodeURIComponent(lines)}`, '_blank');
  }

  startNewBill() {
    this.shopSettings = this.settingsSvc.get();
    if (this.upiTimer) { clearInterval(this.upiTimer); this.upiTimer = null; }
    this.billItems = [];
    this.customer  = { phone: '', name: '', email: '', address: '' };
    this.paymentMethod = null;
    this.paymentState  = 'idle';
    this.gstEnabled    = false;
    this.searchQ       = '';
    this.selectedCategory = '';
    this.printBill = null;
    this.phoneDropdown      = [];
    this.showPhoneDropdown  = false;
    this.phoneSearchDone    = false;
    this.isExistingCustomer = false;
    this.nameTouched   = false;
    this.phoneTouched  = false;
    this.emailTouched  = false;
    this.prodPage      = 0;
    this.upiState      = 'init';
    this.paymentMode   = 'full';
    this.paidNow       = null;
    this.partialMethod = null;
    this.khataLoading  = false;
    this.historyLoaded = false;   // force reload on next history visit
    this._activeTab    = 'new';
  }

  // ── Bill history ──────────────────────────────────────────────────────────

  viewBillDetail(b: SavedBill) {
    this.zone.run(() => { this.selectedBill = b; this.cdr.detectChanges(); });
  }
  closeBillDetail() {
    this.zone.run(() => { this.selectedBill = null; this.cdr.detectChanges(); });
  }
  reprintBill(b: SavedBill) { this.printInNewWindow(b); }

  get filteredHistory(): SavedBill[] {
    const q = this.historySearch.toLowerCase();
    if (!q) return this.savedBills;
    return this.savedBills.filter(b =>
      b.id.toLowerCase().includes(q)
      || b.customer.name.toLowerCase().includes(q)
      || b.customer.phone.includes(q)
    );
  }

  loadHistory() {
    this.historyLoading = true;
    this.http.get<ApiResponse<any>>(this.BILLING_EP.LIST, {
      params: { page: '0', size: '100' }
    }).subscribe({
      next: res => {
        this.savedBills    = (res.data?.content ?? []).map((d: any) => this.mapApiToBill(d));
        this.historyLoading = false;
        this.historyLoaded  = true;
      },
      error: () => { this.historyLoading = false; }
    });
  }

  private mapApiToBill(d: any): SavedBill {
    return {
      id:   d.billId,
      uuid: d.id,
      date: new Date(d.createdAt),
      customer: d.customer ? {
        id:            d.customer.id,
        phone:         d.customer.phone    ?? '',
        name:          d.customer.name     ?? 'Walk-in',
        email:         d.customer.email    ?? '',
        address:       '',
        pendingAmount: Number(d.customer.pendingAmount ?? 0),
      } : { phone: '', name: 'Walk-in', email: '', address: '' },
      items: (d.lineItems ?? []).map((li: any) => ({
        product: {
          id:              li.productId      ?? '',
          name:            li.productName    ?? '',
          sku:             li.productSku     ?? '',
          priceRetail:     Number(li.unitPrice  ?? 0),
          gstPercent:      Number(li.gstPercent ?? 0),
          stockQty:        0,
          categoryName:    '',
          primaryImageUrl: null,
          status:          'ACTIVE',
        },
        qty:       li.qty,
        unitPrice: Number(li.unitPrice ?? 0),
        discount:  Number(li.discount  ?? 0),
      })),
      gstEnabled:    d.gstEnabled    ?? false,
      paymentMethod: d.paymentMethod ?? '',
      khataAmount:   Number(d.khataAmount   ?? 0),
      subtotal:      Number(d.subtotal      ?? 0),
      totalDiscount: Number(d.totalDiscount ?? 0),
      gstAmount:     Number(d.gstAmount     ?? 0),
      grandTotal:    Number(d.grandTotal    ?? 0),
    };
  }


  // ── Utilities ─────────────────────────────────────────────────────────────

  inr(n: number): string {
    return '₹' + n.toLocaleString('en-IN');
  }

  fmtDate(d: Date): string {
    return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  fmtTime(d: Date): string {
    return d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  }

  payLabel(m: string): string {
    if (m === 'cash')  return 'Cash';
    if (m === 'upi')   return 'UPI';
    if (m === 'card')  return 'Card';
    if (m === 'khata') return 'Khata';
    return m;
  }
  // Material Symbol name for each payment method (used in template icon spans)
  payIconName(m: string): string {
    if (m === 'cash')  return 'currency_rupee';
    if (m === 'upi')   return 'qr_code_scanner';
    if (m === 'card')  return 'credit_card';
    if (m === 'khata') return 'menu_book';
    return 'payments';
  }
  // Emoji kept for plain-text contexts (WhatsApp, notifications)
  payIcon(m: string): string {
    if (m === 'cash')  return '💵';
    if (m === 'upi')   return '📱';
    if (m === 'card')  return '💳';
    if (m === 'khata') return '📒';
    return '💰';
  }

  stockClass(qty: number): string {
    if (qty === 0) return 's-out';
    if (qty <= 5)  return 's-low';
    return '';
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.upiTimer) clearInterval(this.upiTimer);
  }
}
