// Pure utility functions for the billing module.
// No Angular dependencies — easy to test and reuse.

import { BillItem, BillingProduct, SavedBill } from './billing.types';

export function inr(n: number): string {
  return '₹' + n.toLocaleString('en-IN');
}

export function fmtDate(d: Date): string {
  return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

export function fmtTime(d: Date): string {
  return d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
}

export function fmtDateTime(d: Date): string {
  return `${fmtDate(d)} at ${fmtTime(d)}`;
}

export function payLabel(m: string): string {
  const labels: Record<string, string> = {
    cash: 'Cash', upi: 'UPI', card: 'Card', khata: 'Khata',
  };
  return labels[m] ?? m;
}

export function payIconName(m: string): string {
  const icons: Record<string, string> = {
    cash: 'currency_rupee', upi: 'qr_code_scanner',
    card: 'credit_card', khata: 'menu_book',
  };
  return icons[m] ?? 'payments';
}

export function payEmoji(m: string): string {
  const emojis: Record<string, string> = {
    cash: '💵', upi: '📱', card: '💳', khata: '📒',
  };
  return emojis[m] ?? '💰';
}

export function normalizePhone(raw: string): string {
  let v = raw.replace(/\D/g, '');
  if (v.startsWith('91') && v.length > 10) v = v.slice(2);
  return v.slice(0, 10);
}

export function lineSubtotal(item: BillItem): number {
  return item.qty * item.unitPrice;
}

export function lineTotal(item: BillItem): number {
  return item.qty * item.unitPrice - Math.max(0, item.discount || 0);
}

export function lineGst(item: BillItem, gstEnabled: boolean): number {
  if (!gstEnabled) return 0;
  return Math.round((lineTotal(item) * item.product.gstPercent / 100) * 100) / 100;
}

export function priceFor(product: BillingProduct, customerType?: string): number {
  if (customerType === 'WHOLESALE' && product.priceWholesale) return product.priceWholesale;
  if (customerType === 'BROKER' && product.priceBroker) return product.priceBroker;
  return product.priceRetail;
}

export function mapApiToBill(d: any): SavedBill {
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
        id: li.productId ?? '', name: li.productName ?? '',
        sku: li.productSku ?? '', priceRetail: Number(li.unitPrice ?? 0),
        gstPercent: Number(li.gstPercent ?? 0), stockQty: 0,
        categoryName: '', primaryImageUrl: null, status: 'ACTIVE',
        priceWholesale: null, priceBroker: null,
      },
      qty: li.qty,
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

export function formatBillId(counter: number): string {
  return 'MKR-BILL-' + String(counter).padStart(4, '0');
}
