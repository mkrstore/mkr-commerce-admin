import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ShopSettingsService,
  ShopSettings,
} from '../../services/shop-settings.service';
import { CatalogService, CatalogProduct } from '../../services/catalog.service';
import { NotificationService } from '../../services/notification.service';

interface BillItem {
  product: CatalogProduct;
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

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.scss',
})
export class BillingComponent implements OnInit, OnDestroy {
  activeTab: 'new' | 'history' = 'new';
  searchQ = '';
  selectedCategory = '';
  billItems: BillItem[] = [];
  customer: Customer = { phone: '', name: '', email: '', address: '' };
  gstEnabled = false;
  paymentMethod: 'cash' | 'upi' | 'card' | null = null;
  paymentState: 'idle' | 'confirming' | 'done' = 'idle';
  historySearch = '';
  savedBills: SavedBill[] = [];
  printBill: SavedBill | null = null;
  private counter = 1001;

  // Phone typeahead
  phoneDropdown: Customer[] = [];
  showPhoneDropdown = false;

  // Infinite scroll: how many products are visible
  productsShown = 20;

  // Field touched flags — set on input for real-time validation
  nameTouched = false;
  phoneTouched = false;
  emailTouched = false;

  // Bill history detail modal
  selectedBill: SavedBill | null = null;

  // UPI flow states
  upiState: 'init' | 'waiting' | 'received' = 'init';
  upiCountdown = 0;
  private upiTimer: ReturnType<typeof setInterval> | null = null;

  // Shop settings (for receipt header)
  shopSettings: ShopSettings;

  // localStorage keys
  private readonly LS_BILLS = 'mkr_bills';
  private readonly LS_COUNTER = 'mkr_bill_counter';
  private readonly LS_CUSTOMERS = 'mkr_customers';

  constructor(
    private settingsSvc: ShopSettingsService,
    private catalogSvc: CatalogService,
    private notifSvc: NotificationService
  ) {
    this.shopSettings = this.settingsSvc.get();
  }

  ngOnInit() {
    this.loadFromStorage();
  }

  // ── Storage ───────────────────────────────────────────────────────────────

  private loadFromStorage() {
    try {
      const cnt = localStorage.getItem(this.LS_COUNTER);
      if (cnt) this.counter = parseInt(cnt, 10);

      const raw = localStorage.getItem(this.LS_BILLS);
      if (raw) {
        this.savedBills = JSON.parse(raw).map((b: any) => ({
          ...b,
          date: new Date(b.date),
        }));
      }

      const custs = localStorage.getItem(this.LS_CUSTOMERS);
      if (custs) {
        const saved: Customer[] = JSON.parse(custs);
        saved.forEach((c) => {
          if (!this.knownCustomers.find((k) => k.phone === c.phone)) {
            this.knownCustomers.push(c);
          }
        });
      }
    } catch {
      /* ignore corrupt storage */
    }
  }

  private persist() {
    try {
      localStorage.setItem(this.LS_COUNTER, String(this.counter));
      localStorage.setItem(this.LS_BILLS, JSON.stringify(this.savedBills));
      localStorage.setItem(
        this.LS_CUSTOMERS,
        JSON.stringify(this.knownCustomers)
      );
    } catch {
      /* storage quota exceeded */
    }
  }

  // ── Known customers (seed + saved) ───────────────────────────────────────

  knownCustomers: Customer[] = [
    {
      phone: '9876543210',
      name: 'Ravi Kumar',
      email: 'ravi.k@gmail.com',
      address: '12 Main Street, Bangalore',
    },
    {
      phone: '9123456789',
      name: 'Priya Sharma',
      email: '',
      address: '45 Park Road, Chennai',
    },
    {
      phone: '9988776655',
      name: 'Meena Patel',
      email: 'meena.p@yahoo.com',
      address: '78 MG Road, Hyderabad',
    },
    {
      phone: '9845012345',
      name: 'Arun Nair',
      email: '',
      address: '56 Gandhi Nagar, Kochi',
    },
    {
      phone: '9712345678',
      name: 'Sunita Rao',
      email: 'sunita.r@gmail.com',
      address: '23 Ring Road, Pune',
    },
  ];

  // ── Product catalog (from shared service) ────────────────────────────────

  get categories(): string[] {
    return this.catalogSvc.categories();
  }

  get filteredProducts(): CatalogProduct[] {
    const q = this.searchQ.trim().toLowerCase();
    return this.catalogSvc.products().filter((p) => {
      const matchCat =
        !this.selectedCategory || p.category === this.selectedCategory;
      const matchQ =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }

  // Show limited slice when not filtering; user scrolls to load more
  get displayedProducts(): CatalogProduct[] {
    const all = this.filteredProducts;
    const isFiltering = !!this.searchQ.trim() || !!this.selectedCategory;
    return isFiltering ? all : all.slice(0, this.productsShown);
  }

  get hasMoreProducts(): boolean {
    const isFiltering = !!this.searchQ.trim() || !!this.selectedCategory;
    return !isFiltering && this.filteredProducts.length > this.productsShown;
  }

  // Triggered by scroll event on .product-list-card
  onProductListScroll(e: Event) {
    const el = e.target as HTMLElement;
    if (el.scrollHeight - el.scrollTop - el.clientHeight < 60) {
      this.productsShown += 20;
    }
  }

  // ── Bill items ────────────────────────────────────────────────────────────

  addProduct(p: CatalogProduct) {
    if (p.stock === 0) return; // cannot add out-of-stock
    const existing = this.billItems.find((i) => i.product.sku === p.sku);
    if (existing) {
      existing.qty++;
      return;
    }
    this.billItems.push({
      product: p,
      qty: 1,
      unitPrice: p.price,
      discount: 0,
    });
  }

  removeItem(index: number) {
    this.billItems.splice(index, 1);
  }
  decQty(item: BillItem) {
    if (item.qty > 1) item.qty--;
  }
  incQty(item: BillItem) {
    item.qty++;
  }

  lineSubtotal(item: BillItem): number {
    return item.qty * item.unitPrice;
  }
  lineTotal(item: BillItem): number {
    return Math.max(0, item.qty * item.unitPrice - (item.discount || 0));
  }
  lineGst(item: BillItem): number {
    return this.gstEnabled
      ? Math.round((this.lineTotal(item) * item.product.gstRate) / 100)
      : 0;
  }

  get subtotal(): number {
    return this.billItems.reduce((s, i) => s + this.lineSubtotal(i), 0);
  }
  get totalDiscount(): number {
    return this.billItems.reduce((s, i) => s + (i.discount || 0), 0);
  }
  get taxableAmount(): number {
    return this.subtotal - this.totalDiscount;
  }
  get gstAmount(): number {
    return this.billItems.reduce((s, i) => s + this.lineGst(i), 0);
  }
  get grandTotal(): number {
    return this.taxableAmount + this.gstAmount;
  }

  // ── Phone typeahead ───────────────────────────────────────────────────────

  onPhoneInput() {
    this.customer.phone = this.customer.phone.replace(/\D/g, '').slice(0, 10);
    this.phoneTouched = true; // real-time validation
    const q = this.customer.phone;
    this.phoneDropdown =
      q.length >= 3
        ? this.knownCustomers.filter(
            (c) => c.phone.startsWith(q) || c.phone.includes(q)
          )
        : [];
    this.showPhoneDropdown = this.phoneDropdown.length > 0;
  }

  // mousedown fires before blur so click registers before field loses focus
  selectFromDropdown(c: Customer) {
    this.customer = { ...c };
    this.phoneDropdown = [];
    this.showPhoneDropdown = false;
    this.phoneTouched = true;
    this.nameTouched = true;
  }

  closeDropdown() {
    setTimeout(() => {
      this.showPhoneDropdown = false;
    }, 150);
  }

  // ── Validation (real-time) ────────────────────────────────────────────────

  onNameInput() {
    this.customer.name = this.customer.name.replace(/[^a-zA-Z .'-]/g, '');
    this.nameTouched = true; // show error immediately while typing
  }

  onEmailInput() {
    this.emailTouched = true; // show email error immediately while typing
  }

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
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))
      return 'Enter a valid email address';
    return null;
  }

  get canBill(): boolean {
    return (
      this.billItems.length > 0 &&
      this.customer.name.trim().length >= 2 &&
      this.customer.phone.trim().length === 10 &&
      !this.emailError
    );
  }

  get currentBillId(): string {
    return `MKR-BILL-${this.counter}`;
  }

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
    if (this.upiTimer) {
      clearInterval(this.upiTimer);
      this.upiTimer = null;
    }
    this.upiState = 'received';
    setTimeout(() => this.confirmPayment(), 800);
  }

  cancelUpiWait() {
    if (this.upiTimer) {
      clearInterval(this.upiTimer);
      this.upiTimer = null;
    }
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
      items: this.billItems.map((i) => ({ ...i, product: { ...i.product } })),
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

    // Reduce stock in shared catalog so inventory reflects the sale
    this.catalogSvc.reduceStock(
      this.billItems.map((i) => ({ sku: i.product.sku, qty: i.qty }))
    );

    // Push payment notification to the bell icon
    const icon =
      this.paymentMethod === 'cash'
        ? '💵'
        : this.paymentMethod === 'upi'
        ? '📱'
        : '💳';
    const method =
      this.paymentMethod === 'cash'
        ? 'Cash'
        : this.paymentMethod === 'upi'
        ? 'UPI'
        : 'Card';
    this.notifSvc.push(
      'payment',
      icon,
      `${method} Payment Received`,
      `${this.customer.name} paid ${this.inr(this.grandTotal)} — ${bill.id}`
    );

    if (!this.knownCustomers.find((c) => c.phone === this.customer.phone)) {
      this.knownCustomers.push({ ...this.customer });
    }
    this.persist();
  }

  doPrint() {
    setTimeout(() => window.print(), 100);
  }

  startNewBill() {
    this.shopSettings = this.settingsSvc.get();
    if (this.upiTimer) {
      clearInterval(this.upiTimer);
      this.upiTimer = null;
    }
    this.billItems = [];
    this.customer = { phone: '', name: '', email: '', address: '' };
    this.paymentMethod = null;
    this.paymentState = 'idle';
    this.gstEnabled = false;
    this.searchQ = '';
    this.selectedCategory = '';
    this.printBill = null;
    this.productsShown = 20;
    this.phoneDropdown = [];
    this.showPhoneDropdown = false;
    this.nameTouched = false;
    this.phoneTouched = false;
    this.emailTouched = false;
    this.upiState = 'init';
  }

  // ── Bill history ──────────────────────────────────────────────────────────

  viewBillDetail(b: SavedBill) {
    this.selectedBill = b;
  }
  closeBillDetail() {
    this.selectedBill = null;
  }

  reprintBill(b: SavedBill) {
    this.printBill = b;
    setTimeout(() => window.print(), 100);
  }

  get filteredHistory(): SavedBill[] {
    const q = this.historySearch.toLowerCase();
    if (!q) return this.savedBills;
    return this.savedBills.filter(
      (b) =>
        b.id.toLowerCase().includes(q) ||
        b.customer.name.toLowerCase().includes(q) ||
        b.customer.phone.includes(q)
    );
  }

  // ── Utilities ─────────────────────────────────────────────────────────────

  inr(n: number): string {
    return '₹' + n.toLocaleString('en-IN');
  }

  fmtDate(d: Date): string {
    return d.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  }

  fmtTime(d: Date): string {
    return d.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  payLabel(m: string): string {
    return m === 'cash' ? 'Cash' : m === 'upi' ? 'UPI' : 'Card';
  }
  payIcon(m: string): string {
    return m === 'cash' ? '💵' : m === 'upi' ? '📱' : '💳';
  }

  ngOnDestroy() {
    if (this.upiTimer) clearInterval(this.upiTimer);
  }
}
