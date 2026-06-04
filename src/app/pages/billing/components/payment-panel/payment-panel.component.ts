import { Component, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Customer, ConfirmedPayment } from '../../billing.types';
import { inr, payIconName, payLabel } from '../../billing.utils';

@Component({
  selector: 'app-payment-panel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment-panel.component.html',
  styleUrl: './payment-panel.component.scss',
})
export class PaymentPanelComponent implements OnDestroy {
  @Input() canBill = false;
  @Input() canUseKhata = false;
  @Input() grandTotal = 0;
  @Input() customer: Customer = { phone: '', name: '', email: '', address: '' };
  @Input() loading = false;

  @Output() confirmed = new EventEmitter<ConfirmedPayment>();
  @Output() cancelled = new EventEmitter<void>();

  paymentMethod: 'cash' | 'upi' | 'card' | null = null;
  paymentMode: 'full' | 'partial' | 'khata' = 'full';
  paidNow: number | null = null;
  partialMethod: 'cash' | 'upi' | 'card' | null = null;

  upiState: 'init' | 'waiting' | 'received' = 'init';
  upiCountdown = 0;
  private upiTimer: ReturnType<typeof setInterval> | null = null;

  inr = inr;
  payIconName = payIconName;
  payLabel = payLabel;

  get khataAmount(): number {
    if (this.paymentMode === 'khata') return this.grandTotal;
    if (this.paymentMode === 'partial') return Math.max(0, this.grandTotal - (this.paidNow ?? 0));
    return 0;
  }

  get paidNowError(): string | null {
    if (this.paymentMode !== 'partial' || this.paidNow === null) return null;
    if (this.paidNow <= 0) return 'Enter an amount greater than 0';
    if (this.paidNow >= this.grandTotal) return `Must be less than ${inr(this.grandTotal)}`;
    return null;
  }

  get partialReady(): boolean {
    return this.paymentMode === 'partial'
      && !!this.paidNow && this.paidNow > 0
      && !this.paidNowError && !!this.partialMethod;
  }

  selectMethod(m: 'cash' | 'upi' | 'card') {
    if (!this.canBill) return;
    this.paymentMode   = 'full';
    this.paymentMethod = m;
    if (m === 'upi') this.upiState = 'init';
  }

  selectKhataMode(mode: 'partial' | 'khata') {
    if (!this.canBill || !this.canUseKhata) return;
    this.paymentMode   = mode;
    this.paymentMethod = null;
    this.paidNow       = null;
    this.partialMethod = null;
  }

  back() {
    this.paymentMethod = null;
    this.paymentMode   = 'full';
    this.cancelUpiWait();
    this.cancelled.emit();
  }

  confirm() {
    const method = this.paymentMode === 'khata'   ? 'khata'
                 : this.paymentMode === 'partial' ? (this.partialMethod ?? 'cash')
                 : (this.paymentMethod ?? 'cash');

    this.confirmed.emit({
      method,
      mode:          this.paymentMode,
      paidNow:       this.paidNow,
      partialMethod: this.partialMethod,
    });
  }

  startUpiWaiting() {
    this.upiState = 'waiting';
    this.upiCountdown = 120;
    this.upiTimer = setInterval(() => {
      this.upiCountdown--;
      if (this.upiCountdown <= 0) this.cancelUpiWait();
    }, 1000);
  }

  upiReceived() {
    if (this.upiTimer) { clearInterval(this.upiTimer); this.upiTimer = null; }
    this.upiState = 'received';
    setTimeout(() => this.confirm(), 350);
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

  blockNeg(e: KeyboardEvent) {
    if (['-', '+', 'e', 'E'].includes(e.key)) e.preventDefault();
  }

  sanitizePaidNow(e: Event) {
    const val = parseFloat((e.target as HTMLInputElement).value);
    this.paidNow = isNaN(val) || val < 0 ? null : val;
  }

  reset() {
    this.paymentMethod = null;
    this.paymentMode   = 'full';
    this.paidNow       = null;
    this.partialMethod = null;
    this.upiState      = 'init';
    this.cancelUpiWait();
  }

  ngOnDestroy() {
    if (this.upiTimer) clearInterval(this.upiTimer);
  }
}
