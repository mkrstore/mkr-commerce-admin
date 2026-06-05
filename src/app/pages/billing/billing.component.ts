import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ShopSettingsService, ShopSettings } from '../../services/shop-settings.service';
import { NotificationService } from '../../services/notification.service';
import { BILLING_ENDPOINTS, PRODUCT_ENDPOINTS } from '../../core/constants/api.constants';
import { ApiResponse } from '../../core/models/api.models';

import { BillingProduct, BillItem, Customer, SavedBill, ProductPage, ConfirmedPayment } from './billing.types';
import { inr, priceFor, lineSubtotal, lineTotal, lineGst, mapApiToBill, formatBillId, payEmoji, payLabel } from './billing.utils';

import { BillCartComponent } from './components/bill-cart/bill-cart.component';
import { CustomerSectionComponent } from './components/customer-section/customer-section.component';
import { PaymentPanelComponent } from './components/payment-panel/payment-panel.component';
import { BillSuccessComponent } from './components/bill-success/bill-success.component';
import { BillHistoryComponent } from './components/bill-history/bill-history.component';

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    BillCartComponent, CustomerSectionComponent, PaymentPanelComponent,
    BillSuccessComponent, BillHistoryComponent,
  ],
  templateUrl: './billing.component.html',
  styleUrl:    './billing.component.scss',
})
export class BillingComponent implements OnInit, OnDestroy {

  private readonly EP         = PRODUCT_ENDPOINTS;
  private readonly BILLING_EP = BILLING_ENDPOINTS;

  @ViewChild(PaymentPanelComponent) paymentPanel?: PaymentPanelComponent;

  // Tab
  private _activeTab: 'new' | 'history' = 'new';
  get activeTab() { return this._activeTab; }
  set activeTab(val: 'new' | 'history') {
    this._activeTab = val;
    if (val === 'history' && !this.historyLoaded) this.loadHistory();
  }

  // Products
  allProducts: BillingProduct[] = [];
  productsLoading = false;
  searchQ = '';
  selectedCategory = '';
  prodPage = 0;
  readonly prodPageSize = 20;

  // Bill state
  billItems: BillItem[] = [];
  customer: Customer = { phone: '', name: '', email: '', address: '' };
  gstEnabled = false;
  isExistingCustomer = false;
  paymentState: 'idle' | 'confirming' | 'done' = 'idle';
  khataLoading = false;

  // History
  savedBills: SavedBill[] = [];
  printBill: SavedBill | null = null;
  private historyLoaded = false;
  historyLoading    = false;
  historyPage       = 0;
  historyTotalPages = 0;
  historyTotalCount = 0;
  private historySearch = '';
  private counter = 1;

  // Bill actions loading state
  printLoading    = false;
  pdfLoading      = false;
  emailSending    = false;
  emailSentMsg    = '';
  showEmailInput  = false;
  shareEmailTo    = '';
  whatsappSending = false;
  paymentError    = '';

  shopSettings: ShopSettings;

  inr = inr;

  constructor(
    private http: HttpClient,
    private settingsSvc: ShopSettingsService,
    private notifSvc: NotificationService,
  ) {
    this.shopSettings = this.settingsSvc.get();
  }

  ngOnInit() {
    this.loadProducts();
    this.fetchNextBillNumber();
  }

  ngOnDestroy() {}

  // ── Products ──────────────────────────────────────────────────────────────

  loadProducts() {
    this.productsLoading = true;
    this.fetchPage(0, []);
  }

  private fetchPage(page: number, acc: BillingProduct[]) {
    this.http.get<ApiResponse<ProductPage>>(this.EP.BASE, {
      params: { status: 'ACTIVE', size: '500', page: String(page), sortBy: 'name', dir: 'asc' }
    }).subscribe({
      next: res => {
        const data  = res.data;
        const items = [...acc, ...(data?.content ?? [])];
        const last  = !data || data.number >= data.totalPages - 1;
        if (last) { this.allProducts = items; this.productsLoading = false; }
        else       { this.fetchPage(page + 1, items); }
      },
      error: () => { this.allProducts = acc; this.productsLoading = false; }
    });
  }

  get categories(): string[] {
    return [...new Set(this.allProducts.map(p => p.categoryName).filter(Boolean))].sort();
  }

  get filteredProducts(): BillingProduct[] {
    const q = this.searchQ.trim().toLowerCase();
    return this.allProducts.filter(p => {
      const cat = !this.selectedCategory || p.categoryName === this.selectedCategory;
      const txt = !q || p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q);
      return cat && txt;
    });
  }

  get totalPages() { return Math.max(1, Math.ceil(this.filteredProducts.length / this.prodPageSize)); }

  get displayedProducts(): BillingProduct[] {
    const start = this.prodPage * this.prodPageSize;
    return this.filteredProducts.slice(start, start + this.prodPageSize);
  }

  goToPage(p: number) { this.prodPage = Math.max(0, Math.min(p, this.totalPages - 1)); }

  addProduct(p: BillingProduct) {
    if (p.stockQty === 0) return;
    const existing = this.billItems.find(i => i.product.sku === p.sku);
    if (existing) { existing.qty++; return; }
    this.billItems.push({ product: p, qty: 1, unitPrice: priceFor(p, this.customer.type), discount: 0 });
  }

  // ── Bill totals ───────────────────────────────────────────────────────────

  get subtotal()      { return this.billItems.reduce((s, i) => s + lineSubtotal(i), 0); }
  get totalDiscount() { return this.billItems.reduce((s, i) => s + (i.discount || 0), 0); }
  get gstAmount()     { return this.billItems.reduce((s, i) => s + lineGst(i, this.gstEnabled), 0); }
  get grandTotal()    { return this.subtotal - this.totalDiscount + this.gstAmount; }

  get canBill(): boolean {
    return this.billItems.length > 0
      && this.customer.name.trim().length >= 2
      && this.customer.phone.trim().length === 10;
  }

  get canUseKhata(): boolean { return !!this.customer.id; }

  get currentBillId(): string { return formatBillId(this.counter); }

  // ── Payment ───────────────────────────────────────────────────────────────

  onPaymentConfirmed(p: ConfirmedPayment) {
    const body = {
      customerId:      this.customer.id ?? null,
      customerPhone:   this.customer.phone || null,
      customerName:    this.customer.name  || null,
      customerEmail:   this.customer.email || null,
      customerAddress: this.customer.address || null,
      items: this.billItems.map(i => ({
        productId: i.product.id, qty: i.qty,
        unitPrice: i.unitPrice, discount: i.discount || 0,
      })),
      gstEnabled:    this.gstEnabled,
      paymentMethod: p.method,
      khataAmount:   p.mode === 'khata'   ? this.grandTotal
                   : p.mode === 'partial' ? Math.max(0, this.grandTotal - (p.paidNow ?? 0))
                   : 0,
      paidViaMethod: p.mode === 'partial' ? (p.partialMethod ?? null) : null,
    };

    this.khataLoading = true;

    this.http.post<ApiResponse<any>>(this.BILLING_EP.CONFIRM, body).subscribe({
      next: res => {
        this.khataLoading = false;
        const d = res.data;
        const khata = Number(d.khataAmount);

        const bill: SavedBill = {
          id:   d.billId,  uuid: d.id,
          date: new Date(d.createdAt),
          customer: d.customer ? {
            id: d.customer.id, phone: d.customer.phone ?? '',
            name: d.customer.name, email: d.customer.email ?? '',
            address: '', pendingAmount: Number(d.customer.pendingAmount),
          } : { ...this.customer },
          items:         this.billItems.map(i => ({ ...i, product: { ...i.product } })),
          gstEnabled:    this.gstEnabled,
          paymentMethod: p.method,
          khataAmount:   khata,
          subtotal:      Number(d.subtotal),
          totalDiscount: Number(d.totalDiscount),
          gstAmount:     Number(d.gstAmount),
          grandTotal:    Number(d.grandTotal),
        };

        this.printBill    = bill;
        this.historyLoaded = false;
        this.paymentState = 'done';
        this.shareEmailTo = bill.customer.email || '';

        const nextNum = parseInt(d.billId?.replace('MKR-BILL-', '') ?? '0', 10);
        if (!isNaN(nextNum)) this.counter = nextNum + 1;

        const desc = khata > 0
          ? `${this.customer.name} — ${inr(Number(d.grandTotal) - khata)} now + ${inr(khata)} khata`
          : `${this.customer.name} paid ${inr(Number(d.grandTotal))} — ${d.billId}`;
        this.notifSvc.push('payment', payEmoji(p.method), `${payLabel(p.method)} Payment`, desc);
      },
      error: err => {
        this.khataLoading = false;
        this.paymentError = err?.error?.message ?? 'Payment failed. Please try again.';
      },
    });
  }

  // ── PDF / Print / Email / WhatsApp ────────────────────────────────────────

  doPrint(bill: SavedBill | null = this.printBill) {
    if (!bill?.uuid) return;
    this.printLoading = true;
    this.fetchPdf(bill).subscribe({
      next: blob => {
        const url = URL.createObjectURL(blob);
        const win = window.open(url, '_blank');
        if (!win) this.notifSvc.push('message', '⚠️', 'Pop-up Blocked', 'Allow pop-ups to open the invoice.');
        setTimeout(() => URL.revokeObjectURL(url), 60000);
        this.printLoading = false;
      },
      error: () => {
        this.printLoading = false;
        this.notifSvc.push('message', '❌', 'PDF Error', 'Could not generate the invoice.');
      }
    });
  }

  doDownload(bill: SavedBill | null = this.printBill) {
    if (!bill?.uuid) return;
    this.pdfLoading = true;
    this.fetchPdf(bill).subscribe({
      next: blob => {
        const a = document.createElement('a');
        a.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
        a.href = URL.createObjectURL(blob);
        a.download = `${bill!.id}.pdf`;
        document.body.appendChild(a);
        a.click();
        setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(a.href); }, 1000);
        this.pdfLoading = false;
      },
      error: () => {
        this.pdfLoading = false;
        this.notifSvc.push('message', '❌', 'Download Failed', 'Could not generate invoice PDF.');
      }
    });
  }

  doEmail(bill: SavedBill | null = this.printBill, toEmail?: string) {
    if (!bill?.uuid) return;
    const email = (toEmail ?? this.shareEmailTo ?? bill.customer.email ?? '').trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      this.showEmailInput = true;
      return;
    }
    this.emailSending = true;
    this.emailSentMsg = '';
    const s = this.shopSettings;
    this.http.post(this.BILLING_EP.EMAIL(bill.uuid!), {
      shopName: s.name || '', shopTagline: s.tagline || '', shopAddress: s.address || '',
      shopPhone: s.phone || '', shopPhone2: s.phone2 || '', shopEmail: s.email || '',
      shopGstin: s.gstin || '', toEmail: email,
    }).subscribe({
      next: () => {
        this.emailSending   = false;
        this.showEmailInput = false;
        this.emailSentMsg   = `Invoice sent to ${email}`;
        setTimeout(() => this.emailSentMsg = '', 5000);
      },
      error: err => {
        this.emailSending = false;
        this.notifSvc.push('message', '❌', 'Email Failed', err?.error?.message ?? 'Failed to send email.');
      }
    });
  }

  doWhatsApp(bill: SavedBill | null = this.printBill) {
    if (!bill?.customer?.phone || !bill.uuid) return;
    this.whatsappSending = true;
    const s = this.shopSettings;
    this.http.post(this.BILLING_EP.WHATSAPP(bill.uuid), {
      shopName: s.name || '', shopTagline: s.tagline || '', shopAddress: s.address || '',
      shopPhone: s.phone || '', shopPhone2: s.phone2 || '', shopEmail: s.email || '',
      shopGstin: s.gstin || '',
    }).subscribe({
      next: () => {
        this.whatsappSending = false;
        this.notifSvc.push('message', '✅', 'WhatsApp Sent', `Invoice sent to ${bill!.customer.phone}`);
      },
      error: err => {
        this.whatsappSending = false;
        const msg = err?.error?.message ?? '';
        if (msg.includes('not configured')) {
          this.openWhatsAppLink(bill!);
        } else {
          this.notifSvc.push('message', '❌', 'WhatsApp Failed', msg || 'Could not send.');
        }
      }
    });
  }

  private fetchPdf(bill: SavedBill) {
    const s = this.shopSettings;
    const q = new URLSearchParams({
      shopName: s.name || '', shopTagline: s.tagline || '', shopAddress: s.address || '',
      shopPhone: s.phone || '', shopPhone2: s.phone2 || '',
      shopEmail: s.email || '', shopGstin: s.gstin || '',
    });
    return this.http.get(`${this.BILLING_EP.PDF(bill.uuid!)}?${q}`, { responseType: 'blob' });
  }

  private openWhatsAppLink(bill: SavedBill) {
    const s     = this.shopSettings;
    const phone = bill.customer.phone.replace(/\D/g, '');
    const e91   = phone.startsWith('91') ? phone : `91${phone}`;
    const paid  = bill.grandTotal - bill.khataAmount;
    const date  = `${bill.date.toLocaleDateString('en-IN')}, ${bill.date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}`;
    const itemLines = bill.items.map((item, i) => {
      const net  = item.qty * item.unitPrice - (item.discount || 0);
      const gst  = bill.gstEnabled ? net * item.product.gstPercent / 100 : 0;
      return `  ${i + 1}. ${item.product.name}\n     ${item.qty} x ${inr(item.unitPrice)} = *${inr(net + gst)}*`;
    }).join('\n');
    const msg = [
      `🧾 *INVOICE — ${bill.id}*`, `📅 ${date}`, `🏪 *${s.name}*`,
      s.address ? `📍 ${s.address}` : '', s.phone ? `📞 ${s.phone}` : '',
      '', `👤 *${bill.customer.name}*`, `📱 ${bill.customer.phone}`,
      '', '*Items:*', itemLines, '',
      `Subtotal : ${inr(bill.subtotal)}`,
      bill.totalDiscount > 0 ? `Discount : - ${inr(bill.totalDiscount)}` : '',
      bill.gstEnabled && bill.gstAmount > 0 ? `GST : + ${inr(bill.gstAmount)}` : '',
      `*TOTAL : ${inr(bill.grandTotal)}*`, '',
      `💳 Payment: ${payLabel(bill.paymentMethod)}`,
      `✅ Paid Now: *${inr(paid)}*`,
      bill.khataAmount > 0 ? `📒 Khata (Due): *${inr(bill.khataAmount)}*` : '',
      '', `Thank you for shopping at *${s.name}*! 🙏`,
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/${e91}?text=${encodeURIComponent(msg)}`, '_blank');
  }

  // ── History ───────────────────────────────────────────────────────────────

  loadHistory() {
    this.historyLoading = true;
    const params: Record<string, string> = {
      page: String(this.historyPage),
      size: '20',
    };
    if (this.historySearch.trim()) params['search'] = this.historySearch.trim();
    this.http.get<ApiResponse<any>>(this.BILLING_EP.LIST, { params }).subscribe({
      next: res => {
        this.savedBills       = (res.data?.content ?? []).map((d: any) => mapApiToBill(d));
        this.historyTotalPages = res.data?.totalPages   ?? 1;
        this.historyTotalCount = res.data?.totalElements ?? 0;
        this.historyLoading   = false;
        this.historyLoaded    = true;
      },
      error: () => { this.historyLoading = false; }
    });
  }

  onHistorySearch(q: string) {
    this.historySearch = q;
    this.historyPage   = 0;
    this.loadHistory();
  }

  onHistoryPageChange(p: number) {
    this.historyPage = p;
    this.loadHistory();
  }

  // ── Reset ─────────────────────────────────────────────────────────────────

  retryPayment() {
    this.paymentError = '';
  }

  startNewBill() {
    this.shopSettings      = this.settingsSvc.get();
    this.billItems         = [];
    this.customer          = { phone: '', name: '', email: '', address: '' };
    this.gstEnabled        = false;
    this.isExistingCustomer = false;
    this.paymentState      = 'idle';
    this.khataLoading      = false;
    this.paymentError      = '';
    this.searchQ           = '';
    this.selectedCategory  = '';
    this.prodPage          = 0;
    this.printBill         = null;
    this.showEmailInput    = false;
    this.emailSentMsg      = '';
    this.printLoading      = false;
    this.pdfLoading        = false;
    this.historyLoaded     = false;
    this.historyPage       = 0;
    this.historyTotalPages = 0;
    this.historyTotalCount = 0;
    this.historySearch     = '';
    this._activeTab        = 'new';
    this.paymentPanel?.reset();
  }

  onHistoryEmail(e: { bill: SavedBill; toEmail?: string }) {
    this.doEmail(e.bill, e.toEmail);
  }

  private fetchNextBillNumber() {
    this.http.get<ApiResponse<any>>(this.BILLING_EP.LIST, { params: { page: '0', size: '1' } })
      .subscribe({
        next: res => {
          const bills = res.data?.content ?? [];
          if (bills.length > 0) {
            const num = parseInt((bills[0].billId as string)?.replace('MKR-BILL-', '') ?? '0', 10);
            if (!isNaN(num) && num > 0) this.counter = num + 1;
          }
        }
      });
  }
}
