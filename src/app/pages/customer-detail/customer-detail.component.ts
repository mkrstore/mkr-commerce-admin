import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  CustomerService, CustomerDetail, CustomerType, AuthMethod,
  KhataEntry, KhataPage, AddKhataEntryRequest, CollectPaymentRequest,
  CustomerOrder
} from '../../services/customer.service';
import { extractErrorMessage } from '../../core/models/api.models';

@Component({
  selector: 'app-customer-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customer-detail.component.html',
  styleUrl: './customer-detail.component.scss'
})
export class CustomerDetailComponent implements OnInit {

  customer: CustomerDetail | null = null;
  loading = false;
  error = '';

  activeTab: 'orders' | 'khata' | 'notes' = 'orders';

  // Orders state
  orders: CustomerOrder[] = [];

  // Khata state
  khataEntries: KhataEntry[] = [];
  currentBalance = 0;
  khataLoading = false;

  // Local notes (no backend yet)
  localNotes = '';

  // ── Edit modal ──
  showEditModal = false;
  editForm = { type: 'RETAIL' as CustomerType, notes: '' };

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
      orders:   this.customerService.getOrders(id).pipe(catchError(() => of([] as CustomerOrder[])))
    }).subscribe({
      next: ({ customer, khata, orders }) => {
        this.customer       = customer;
        this.khataEntries   = khata.entries;
        this.orders         = orders;
        this.currentBalance = customer.pendingAmount;
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

  get totalOrders(): number { return this.customer?.totalOrders ?? 0; }

  address(): string {
    if (!this.customer) return '—';
    const parts = [
      this.customer.addressStreet,
      this.customer.addressCity,
      this.customer.addressState,
      this.customer.addressPostalCode,
      this.customer.addressCountry
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

  // ── Edit ──
  openEdit(): void {
    if (!this.customer) return;
    this.editForm = { type: this.customer.type, notes: this.localNotes };
    this.showEditModal = true;
  }

  saveEdit(): void {
    if (!this.customer) return;
    if (this.editForm.type !== this.customer.type) {
      this.customerService.updateType(this.customer.id, this.editForm.type).subscribe({
        next: updated => { if (this.customer) this.customer = { ...this.customer, type: updated.type }; }
      });
    }
    this.localNotes    = this.editForm.notes;
    this.showEditModal = false;
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
