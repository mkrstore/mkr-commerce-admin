import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZone } from '@angular/core';
import { SavedBill, BillItem } from '../../billing.types';
import { inr, fmtDate, fmtTime, payLabel, payIconName, lineTotal } from '../../billing.utils';

@Component({
  selector: 'app-bill-history',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bill-history.component.html',
  styleUrl: './bill-history.component.scss',
})
export class BillHistoryComponent {
  @Input() bills: SavedBill[] = [];
  @Input() loading = false;
  @Input() printLoading   = false;
  @Input() pdfLoading     = false;
  @Input() emailSending   = false;
  @Input() whatsappSending = false;

  @Output() reprint   = new EventEmitter<SavedBill>();
  @Output() download  = new EventEmitter<SavedBill>();
  @Output() email     = new EventEmitter<{ bill: SavedBill; toEmail?: string }>();
  @Output() whatsapp  = new EventEmitter<SavedBill>();

  searchQuery = '';
  selectedBill: SavedBill | null = null;
  shareEmailTo  = '';
  showEmailInput = false;

  inr = inr;
  fmtDate = fmtDate;
  fmtTime = fmtTime;
  payLabel = payLabel;
  payIconName = payIconName;
  lineTotal = lineTotal;

  constructor(private zone: NgZone, private cdr: ChangeDetectorRef) {}

  get filtered(): SavedBill[] {
    const q = this.searchQuery.toLowerCase();
    if (!q) return this.bills;
    return this.bills.filter(b =>
      b.id.toLowerCase().includes(q)
      || b.customer.name.toLowerCase().includes(q)
      || b.customer.phone.includes(q)
    );
  }

  openDetail(b: SavedBill) {
    this.shareEmailTo  = b.customer.email || '';
    this.showEmailInput = false;
    this.zone.run(() => { this.selectedBill = b; this.cdr.detectChanges(); });
  }

  closeDetail() {
    this.zone.run(() => { this.selectedBill = null; this.cdr.detectChanges(); });
  }

  onEmailClick() {
    if (!this.selectedBill) return;
    const billEmail = this.selectedBill.customer.email;
    if (billEmail || this.shareEmailTo) {
      this.email.emit({ bill: this.selectedBill, toEmail: this.shareEmailTo || undefined });
      this.showEmailInput = false;
    } else {
      this.showEmailInput = true;
    }
  }

  onEmailSend() {
    if (!this.selectedBill || !this.shareEmailTo.trim()) return;
    this.email.emit({ bill: this.selectedBill, toEmail: this.shareEmailTo.trim() });
    this.showEmailInput = false;
  }
}
