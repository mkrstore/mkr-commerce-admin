import { Component, OnInit } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  CustomerService, CustomerDetail, CustomerType, AuthMethod,
  KhataEntry, KhataPage, AddKhataEntryRequest, CollectPaymentRequest,
  UpdateCustomerRequest, CustomerOrder, CustomerBill
} from '../../services/customer.service';
import { extractErrorMessage } from '../../core/models/api.models';

@Component({
  selector: 'app-customer-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, TitleCasePipe],
  templateUrl: './customer-detail.component.html',
  styleUrl: './customer-detail.component.scss'
})
export class CustomerDetailComponent implements OnInit {

  customer: CustomerDetail | null = null;
  loading = false;
  error = '';

  activeTab: 'bills' | 'orders' | 'khata' | 'notes' = 'bills';

  // Bills state (in-store POS)
  bills: CustomerBill[] = [];

  // Orders state (online)
  orders: CustomerOrder[] = [];

  // Khata state
  khataEntries: KhataEntry[] = [];
  currentBalance = 0;
  khataLoading = false;

  // Local notes (no backend yet)
  localNotes = '';

  // ── Edit modal ──
  showEditModal = false;
  editSaving    = false;
  editError     = '';
  editForm = {
    firstName:         '',
    lastName:          '',
    phone:             '',
    email:             '',
    type:              'RETAIL' as CustomerType,
    addressStreet:     '',
    addressCity:       '',
    addressMandal:     '',
    addressDistrict:   '',
    addressState:      '',
    addressPostalCode: '',
  };

  // ── Collect payment modal ──
  showCollectModal = false;
  collectAmount = 0;
  collectMethod = 'Cash';
  collectNote = '';
  collectSaving = false;

  // ── Add khata entry modal ──
  showKhataModal = false;
  khataEntryType: 'MANUAL_DEBIT' | 'MANUAL_CREDIT' = 'MANUAL_DEBIT';
  khataDesc = '';
  khataAmount = 0;
  khataNote = '';
  khataSaving = false;

  readonly paymentMethods = ['Cash', 'UPI', 'Bank Transfer', 'Card', 'Razorpay'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.loading = true;

    const emptyKhata: KhataPage = { entries: [], currentBalance: 0 };

    forkJoin({
      customer: this.customerService.getById(id),
      khata:    this.customerService.getKhata(id).pipe(catchError(() => of(emptyKhata))),
      orders:   this.customerService.getOrders(id).pipe(catchError(() => of([] as CustomerOrder[]))),
      bills:    this.customerService.getBills(id).pipe(catchError(() => of([] as CustomerBill[])))
    }).subscribe({
      next: ({ customer, khata, orders, bills }) => {
        this.customer       = customer;
        this.khataEntries   = khata.entries;
        this.orders         = orders;
        this.bills          = bills;
        this.currentBalance = khata.currentBalance;
        this.editForm.type  = customer.type;
        this.loading        = false;
      },
      error: err => {
        this.error   = extractErrorMessage(err);
        this.loading = false;
      }
    });
  }

  goBack(): void { this.router.navigate(['/customers']); }

  avatar(name: string): string { return name.split(' ').map(w => w[0]).slice(0, 2).join(''); }
  fmt(n: number): string       { return '₹' + n.toLocaleString('en-IN'); }

  get totalOrders():    number { return this.customer?.totalOrders ?? 0; }
  get totalBills():     number { return this.bills.length; }
  get totalPurchases(): number { return this.bills.length + this.orders.length; }

  address(): string {
    if (!this.customer) return '—';
    const parts = [
      this.customer.addressStreet,
      this.customer.addressCity,
      this.customer.addressMandal,
      this.customer.addressDistrict,
      this.customer.addressState,
      this.customer.addressPostalCode,
    ].filter(Boolean);
    return parts.length ? parts.join(', ') : '—';
  }

  typeLabel(t: CustomerType): string { return t.charAt(0) + t.slice(1).toLowerCase(); }

  authLabel(m: AuthMethod): string {
    if (m === 'GMAIL')  return 'Gmail';
    if (m === 'MOBILE') return 'Mobile';
    return 'User ID';
  }

  authIcon(m: AuthMethod): string {
    if (m === 'GMAIL')  return 'mail';
    if (m === 'MOBILE') return 'phone_iphone';
    return 'badge';
  }

  orderStatusClass(s: string): string {
    const map: Record<string, string> = {
      PENDING:    'badge-amber',
      CONFIRMED:  'badge-blue',
      PROCESSING: 'badge-purple',
      SHIPPED:    'badge-blue',
      DELIVERED:  'badge-green',
      CANCELLED:  'badge-red',
      RETURNED:   'badge-red',
    };
    return map[s] ?? '';
  }

  orderStatusLabel(s: string): string {
    return s.charAt(0) + s.slice(1).toLowerCase();
  }

  payStatusClass(s: string): string {
    return s === 'PAID' ? 'badge-green' : s === 'PENDING' ? 'badge-amber' : 'badge-red';
  }

  billPayIconName(m: string): string {
    if (m === 'cash')    return 'currency_rupee';
    if (m === 'upi')     return 'qr_code_scanner';
    if (m === 'card')    return 'credit_card';
    if (m === 'khata')   return 'menu_book';
    if (m === 'partial') return 'account_balance_wallet';
    return 'payments';
  }

  fmt2(n: number): string { return '₹' + n.toLocaleString('en-IN'); }

  // ── Edit ──
  openEdit(): void {
    if (!this.customer) return;
    const c = this.customer;
    this.editForm = {
      firstName:         c.firstName         || '',
      lastName:          c.lastName          || '',
      phone:             c.phone             || '',
      email:             c.email             || '',
      type:              c.type,
      addressStreet:     c.addressStreet     || '',
      addressCity:       c.addressCity       || '',
      addressMandal:     c.addressMandal     || '',
      addressDistrict:   c.addressDistrict   || '',
      addressState:      c.addressState      || '',
      addressPostalCode: c.addressPostalCode || '',
    };
    this.editError     = '';
    this.showEditModal = true;
  }

  saveEdit(): void {
    if (!this.customer || this.editSaving) return;
    if (!this.editForm.firstName.trim() || !this.editForm.lastName.trim()) {
      this.editError = 'First name and last name are required.';
      return;
    }
    if (!this.editForm.phone.trim()) {
      this.editError = 'Phone number is required.';
      return;
    }

    this.editSaving = true;
    this.editError  = '';

    const req: UpdateCustomerRequest = {
      firstName:         this.editForm.firstName.trim(),
      lastName:          this.editForm.lastName.trim(),
      phone:             this.editForm.phone.trim(),
      email:             this.editForm.email.trim() || null,
      type:              this.editForm.type,
      addressStreet:     this.editForm.addressStreet.trim()   || null,
      addressCity:       this.editForm.addressCity.trim()     || null,
      addressMandal:     this.editForm.addressMandal.trim()   || null,
      addressDistrict:   this.editForm.addressDistrict.trim() || null,
      addressState:      this.editForm.addressState.trim()    || null,
      addressPostalCode: this.editForm.addressPostalCode.trim() || null,
    };

    this.customerService.update(this.customer.id, req).subscribe({
      next: updated => {
        this.customer      = updated;
        this.editSaving    = false;
        this.showEditModal = false;
      },
      error: err => {
        this.editError  = extractErrorMessage(err);
        this.editSaving = false;
      }
    });
  }

  // ── Collect payment ──
  openCollect(): void {
    this.collectAmount = this.currentBalance;
    this.collectMethod = 'Cash';
    this.collectNote   = '';
    this.showCollectModal = true;
  }

  submitCollect(): void {
    if (this.collectAmount <= 0 || this.collectSaving) return;
    this.collectSaving = true;

    const req: CollectPaymentRequest = {
      amount:        this.collectAmount,
      paymentMethod: this.collectMethod,
      note:          this.collectNote || undefined
    };

    this.customerService.collectPayment(this.customer!.id, req).subscribe({
      next: entry => {
        this.khataEntries   = [...this.khataEntries, entry];
        this.currentBalance = entry.balance;
        this.collectSaving  = false;
        this.showCollectModal = false;
        this.activeTab = 'khata';
      },
      error: err => {
        this.error         = extractErrorMessage(err);
        this.collectSaving = false;
      }
    });
  }

  // ── Add khata entry ──
  openKhata(): void {
    this.khataEntryType = 'MANUAL_DEBIT';
    this.khataDesc   = '';
    this.khataAmount = 0;
    this.khataNote   = '';
    this.showKhataModal = true;
  }

  submitKhata(): void {
    if (!this.khataDesc || this.khataAmount <= 0 || this.khataSaving) return;
    this.khataSaving = true;

    const req: AddKhataEntryRequest = {
      entryType:   this.khataEntryType,
      description: this.khataDesc,
      amount:      this.khataAmount,
      notes:       this.khataNote || undefined
    };

    this.customerService.addKhataEntry(this.customer!.id, req).subscribe({
      next: entry => {
        this.khataEntries   = [...this.khataEntries, entry];
        this.currentBalance = entry.balance;
        this.khataSaving    = false;
        this.showKhataModal = false;
      },
      error: err => {
        this.error       = extractErrorMessage(err);
        this.khataSaving = false;
      }
    });
  }
}
