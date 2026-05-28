import { Component, OnDestroy, OnInit } from '@angular/core';
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
  priceRetail: number;
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
  id?: string;           // backend customer ID — present only for known customers
  phone: string;
  name: string;
  email: string;
  address: string;
  pendingAmount?: number; // existing khata balance at time of search
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


  constructor(
    private http: HttpClient,
    private settingsSvc: ShopSettingsService,
    private notifSvc: NotificationService,
    private customerSvc: CustomerService,
  ) {
    this.shopSettings = this.settingsSvc.get();
  }

  ngOnInit() {
    this.loadProducts();

    this.phoneSearch$.pipe(
      debounceTime(280),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(q => this.doCustomerSearch(q));
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
    this.billItems.push({ product: p, qty: 1, unitPrice: p.priceRetail, discount: 0 });
  }

  removeItem(index: number) { this.billItems.splice(index, 1); }
  decQty(item: BillItem) { if (item.qty > 1) item.qty--; }
  incQty(item: BillItem) { item.qty++; }

  lineSubtotal(item: BillItem): number { return item.qty * item.unitPrice; }
  lineTotal(item: BillItem): number {
    return Math.max(0, item.qty * item.unitPrice - (item.discount || 0));
  }
  lineGst(item: BillItem): number {
    return this.gstEnabled
      ? Math.round((this.lineTotal(item) * item.product.gstPercent) / 100)
      : 0;
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
    this.customer = { ...c, phone: this.normalizePhone(c.phone) };
    this.phoneDropdown     = [];
    this.showPhoneDropdown = false;
    this.phoneSearchDone   = false;
    this.phoneTouched      = true;
    this.nameTouched       = true;
    this.isExistingCustomer = true;
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

  doPrint() { setTimeout(() => window.print(), 100); }

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

  viewBillDetail(b: SavedBill)  { this.selectedBill = b; }
  closeBillDetail()             { this.selectedBill = null; }
  reprintBill(b: SavedBill)     { this.printBill = b; setTimeout(() => window.print(), 100); }

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
