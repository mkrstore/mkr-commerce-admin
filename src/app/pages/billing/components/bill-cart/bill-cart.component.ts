import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BillItem } from '../../billing.types';
import { inr, lineTotal, lineGst, lineSubtotal } from '../../billing.utils';

@Component({
  selector: 'app-bill-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bill-cart.component.html',
  styleUrl: './bill-cart.component.scss',
})
export class BillCartComponent {
  @Input() items: BillItem[] = [];
  @Input() gstEnabled = false;
  @Output() removeItem = new EventEmitter<number>();

  // Delegating to util functions keeps the template clean
  lineSubtotal = lineSubtotal;
  lineTotal    = lineTotal;
  lineGst(item: BillItem) { return lineGst(item, this.gstEnabled); }
  inr = inr;

  decQty(item: BillItem) { if (item.qty > 1) item.qty--; }
  incQty(item: BillItem) { item.qty++; }

  blockNeg(e: KeyboardEvent) {
    if (['-', '+', 'e', 'E'].includes(e.key)) e.preventDefault();
  }

  stripLeadingZero(e: Event, item: BillItem, field: 'unitPrice' | 'discount') {
    const input = e.target as HTMLInputElement;
    const val = parseFloat(input.value);
    if (!isNaN(val) && val >= 0) item[field] = val;
    else item[field] = 0;
  }
}
