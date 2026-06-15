import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BillItem } from '../../billing.types';
import { inr, lineTotal, lineGst } from '../../billing.utils';
import { BILLING_ENDPOINTS } from '../../../../core/constants/api.constants';

@Component({
  selector: 'app-bill-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bill-cart.component.html',
  styleUrl: './bill-cart.component.scss',
})
export class BillCartComponent {
  private http = inject(HttpClient);

  @Input() items: BillItem[] = [];
  @Input() gstEnabled = false;
  @Output() removeItem = new EventEmitter<number>();

  lineTotal = lineTotal;
  lineGst(item: BillItem) { return lineGst(item, this.gstEnabled); }
  inr = inr;

  readonly snMin = 4;
  readonly snMax = 30;

  snErrors: Record<string, string> = {};

  snKey(item: BillItem, si: number): string { return `${item.product.sku}_${si}`; }

  trackByIndex(index: number): number { return index; }
  trackByProduct(_: number, item: BillItem): string { return item.product.sku; }

  private isDuplicateInBill(item: BillItem, si: number, val: string): boolean {
    for (const it of this.items) {
      for (let j = 0; j < (it.serialNumbers?.length ?? 0); j++) {
        if (it === item && j === si) continue;
        if ((it.serialNumbers[j] ?? '') === val) return true;
      }
    }
    return false;
  }

  private checkAlreadySold(item: BillItem, si: number, val: string) {
    const key = this.snKey(item, si);
    this.snErrors[key] = 'Checking…';
    this.http.get<any>(`${BILLING_ENDPOINTS.SERIAL_CHECK}?sn=${encodeURIComponent(val)}`)
      .subscribe({
        next: (res) => {
          if (res?.data?.used) {
            this.snErrors[key] = `Already sold — Bill #${res.data.billNumber}`;
          } else {
            delete this.snErrors[key];
          }
        },
        error: () => delete this.snErrors[key],
      });
  }

  decQty(item: BillItem) {
    if (item.qty > 1) {
      item.qty--;
      item.serialNumbers?.splice(item.qty);
    }
  }

  incQty(item: BillItem) {
    item.qty++;
    (item.serialNumbers ??= []).push('');
  }

  onQtyChange(item: BillItem) {
    const qty = Math.max(1, Math.min(Math.floor(Number(item.qty)) || 1, item.product.stockQty));
    item.qty = qty;
    const sns = (item.serialNumbers ??= []);
    while (sns.length < qty) sns.push('');
    if (sns.length > qty) sns.splice(qty);
  }

  onSnInput(event: Event, item: BillItem, si: number) {
    const input = event.target as HTMLInputElement;
    const pos = input.selectionStart ?? input.value.length;
    const raw = input.value;
    let cleaned = raw.toUpperCase().replace(/[^A-Z0-9\-\/\.]/g, '');
    if (cleaned.length > this.snMax) cleaned = cleaned.slice(0, this.snMax);
    const removedBefore = (raw.slice(0, pos).match(/[^A-Z0-9\-\/\.]/gi) ?? []).length;
    const finalPos = Math.max(0, Math.min(pos - removedBefore, cleaned.length));
    input.value = cleaned;
    input.setSelectionRange(finalPos, finalPos);
    item.serialNumbers[si] = cleaned;
    this.validateSn(item, si, cleaned, false);
    Promise.resolve().then(() => {
      if (document.activeElement === input) input.setSelectionRange(finalPos, finalPos);
    });
  }

  onSnBlur(item: BillItem, si: number) {
    const val = item.serialNumbers[si] ?? '';
    this.validateSn(item, si, val, true);
    // Only hit the server if locally valid
    const key = this.snKey(item, si);
    if (val.length >= this.snMin && !this.snErrors[key]) {
      this.checkAlreadySold(item, si, val);
    }
  }

  private validateSn(item: BillItem, si: number, val: string, blur: boolean) {
    const key = this.snKey(item, si);
    if (val.length === 0) {
      if (blur) this.snErrors[key] = 'Serial number is required';
      else delete this.snErrors[key];
    } else if (val.length < this.snMin) {
      this.snErrors[key] = `Too short — minimum ${this.snMin} characters`;
    } else if (this.isDuplicateInBill(item, si, val)) {
      this.snErrors[key] = 'Duplicate — already entered in this bill';
    } else {
      delete this.snErrors[key];
    }
  }
}
