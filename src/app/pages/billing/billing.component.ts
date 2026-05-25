import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { ShopSettingsService, ShopSettings } from '../../services/shop-settings.service';
import { NotificationService } from '../../services/notification.service';
import { CustomerService } from '../../services/customer.service';
import { PRODUCT_ENDPOINTS } from '../../core/constants/api.constants';
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
  phone: string;
  name: string;
  email: string;
  address: string;
}

interface SavedBill {
  id: string;
  date: Date;
  customer: Customer;
  items: BillItem[];
  gstEnabled: boolean;
  paymentMethod: string;
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

  private readonly EP = PRODUCT_ENDPOINTS;

  activeTab: 'new' | 'history' = 'new';

  // ── Products (from API) ───────────────────────────────────────────────────
  allProducts: BillingProduct[] = [];
  productsLoading = false;

  searchQ = '';
  selectedCategory = '';

  // Show limited slice when not filtering; user scrolls to load more
  productsShown = 20;

  // ── Bill state ────────────────────────────────────────────────────────────
  billItems: BillItem[] = [];
  customer: Customer = { phone: '', name: '', email: '', address: '' };
  gstEnabled = false;
  paymentMethod: 'cash' | 'upi' | 'card' | null = null;
  paymentState: 'idle' | 'confirming' | 'done' = 'idle';

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
  private phoneSearch$ = new Subject<string>();
  private destroy$    = new Subject<void>();

  // Locally saved customers from past bills (offline fallback)
  knownCustomers: Customer[] = [];

  // ── Validation touched flags ──────────────────────────────────────────────
  nameTouched  = false;
  phoneTouched = false;
  emailTouched = false;

  // ── UPI flow ──────────────────────────────────────────────────────────────
  upiState: 'init' | 'waiting' | 'received' = 'init';
  upiCountdown = 0;
  private upiTimer: ReturnType<typeof setInterval> | null = null;

  // ── Shop settings ─────────────────────────────────────────────────────────
  shopSettings: ShopSettings;

  private readonly LS_BILLS     = 'mkr_bills';
  private readonly LS_COUNTER   = 'mkr_bill_counter';
  private readonly LS_CUSTOMERS = 'mkr_customers';

  constructor(
    private http: HttpClient,
    private settingsSvc: ShopSettingsService,
    private notifSvc: NotificationService,
    private customerSvc: CustomerService,
  ) {
    this.shopSettings = this.settingsSvc.get();
  }

  ngOnInit() {
    this.loadFromStorage();
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
    this.http.get<ApiResponse<ProductPage>>(this.EP.BASE, {
      params: { status: 'ACTIVE', size: '500', page: '0', sortBy: 'name', dir: 'asc' }
    }).subscribe({
      next: res => {
        this.allProducts = res.data?.content ?? [];
        this.productsLoading = false;
      },
      error: () => { this.productsLoading = false; }
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

  get displayedProducts(): BillingProduct[] {
    const all = this.filteredProducts;
    const isFiltering = !!this.searchQ.trim() || !!this.selectedCategory;
    return isFiltering ? all : all.slice(0, this.productsShown);
  }

  get hasMoreProducts(): boolean {
    const isFiltering = !!this.searchQ.trim() || !!this.selectedCategory;
    return !isFiltering && this.filteredProducts.length > this.productsShown;
  }

  onProductListScroll(e: Event) {
    const el = e.target as HTMLElement;
    if (el.scrollHeight - el.scrollTop - el.clientHeight < 60) {
      this.productsShown += 20;
    }
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
    this.customerSvc.list({ search: q, size: 6 }).subscribe({
      next: res => {
        this.phoneDropdown = res.content.map(c => ({
          phone: c.phone ?? '',
          name: c.name,
          email: c.email ?? '',
          address: '',
        }));
        this.showPhoneDropdown = this.phoneDropdown.length > 0;
        this.customerSearching = false;
      },
      error: () => {
        this.phoneDropdown = this.knownCustomers
          .filter(c => c.phone.includes(q) || c.name.toLowerCase().includes(q.toLowerCase()))
          .slice(0, 6);
        this.showPhoneDropdown = this.phoneDropdown.length > 0;
        this.customerSearching = false;
      },
    });
  }

  onPhoneInput() {
    this.customer.phone = this.customer.phone.replace(/\D/g, '').slice(0, 10);
    this.phoneTouched = true;
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
    this.customer = { ...c };
    this.phoneDropdown = [];
    this.showPhoneDropdown = false;
    this.phoneTouched = true;
    this.nameTouched  = true;
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

  get currentBillId(): string { return `MKR-BILL-${this.counter}`; }

  // ── Payment flow ──────────────────────────────────────────────────────────

  selectPayment(m: 'cash' | 'upi' | 'card') {
    if (!this.canBill) return;
    this.paymentMethod = m;
    this.paymentState = 'confirming';
    if (m === 'upi') this.upiState = 'init';
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
    setTimeout(() => this.confirmPayment(), 800);
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
    const bill: SavedBill = {
      id: `MKR-BILL-${this.counter++}`,
      date: new Date(),
      customer: { ...this.customer },
      items: this.billItems.map(i => ({ ...i, product: { ...i.product } })),
      gstEnabled: this.gstEnabled,
      paymentMethod: this.paymentMethod!,
      subtotal: this.subtotal,
      totalDiscount: this.totalDiscount,
      gstAmount: this.gstAmount,
      grandTotal: this.grandTotal,
    };

    this.savedBills.unshift(bill);
    this.printBill = bill;
    this.paymentState = 'done';

    const icon   = this.paymentMethod === 'cash' ? '💵' : this.paymentMethod === 'upi' ? '📱' : '💳';
    const method = this.paymentMethod === 'cash' ? 'Cash' : this.paymentMethod === 'upi' ? 'UPI' : 'Card';
    this.notifSvc.push('payment', icon, `${method} Payment Received`,
      `${this.customer.name} paid ${this.inr(this.grandTotal)} — ${bill.id}`);

    if (!this.knownCustomers.find(c => c.phone === this.customer.phone)) {
      this.knownCustomers.push({ ...this.customer });
    }
    this.persist();
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
    this.productsShown = 20;
    this.phoneDropdown = [];
    this.showPhoneDropdown = false;
    this.nameTouched   = false;
    this.phoneTouched  = false;
    this.emailTouched  = false;
    this.upiState      = 'init';
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

  // ── Storage ───────────────────────────────────────────────────────────────

  private loadFromStorage() {
    try {
      const cnt = localStorage.getItem(this.LS_COUNTER);
      if (cnt) this.counter = parseInt(cnt, 10);

      const raw = localStorage.getItem(this.LS_BILLS);
      if (raw) {
        this.savedBills = JSON.parse(raw).map((b: any) => ({ ...b, date: new Date(b.date) }));
      }

      const custs = localStorage.getItem(this.LS_CUSTOMERS);
      if (custs) {
        const saved: Customer[] = JSON.parse(custs);
        saved.forEach(c => {
          if (!this.knownCustomers.find(k => k.phone === c.phone)) this.knownCustomers.push(c);
        });
      }
    } catch { /* ignore corrupt storage */ }
  }

  private persist() {
    try {
      localStorage.setItem(this.LS_COUNTER,   String(this.counter));
      localStorage.setItem(this.LS_BILLS,     JSON.stringify(this.savedBills));
      localStorage.setItem(this.LS_CUSTOMERS, JSON.stringify(this.knownCustomers));
    } catch { /* storage quota exceeded */ }
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

  payLabel(m: string): string { return m === 'cash' ? 'Cash' : m === 'upi' ? 'UPI' : 'Card'; }
  payIcon(m: string):  string { return m === 'cash' ? '💵' : m === 'upi' ? '📱' : '💳'; }

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
