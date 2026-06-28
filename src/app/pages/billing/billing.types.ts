// Shared interfaces for the billing module.
// Import from here instead of redefining in each component.

export interface BillingVariant {
  id: string;
  sku: string;
  attributes: Record<string, string> | null;
  label: string;
  priceOverride:  number | null;
  priceWholesale: number | null;
  priceBroker:    number | null;
  stockQty: number;
  isActive: boolean;
}

export interface BillingProduct {
  id: string;
  name: string;
  sku: string;
  barcode: string | null;
  categoryName: string;
  priceRetail: number;
  priceWholesale: number | null;
  priceBroker: number | null;
  gstPercent: number;
  stockQty: number;
  primaryImageUrl: string | null;
  status: string;
  variants: BillingVariant[];   // empty array for products without variants
  // Set only on flattened variant rows
  variantId?: string;
  variantLabel?: string;
}

export interface BillItem {
  product: BillingProduct;
  qty: number;
  unitPrice: number;
  discount?: number;          // optional — kept for historical bill display only
  serialNumbers: string[];    // one entry per unit; empty strings = not entered yet
  variantId?: string;
}

export interface Customer {
  id?: string;
  phone: string;
  name: string;
  email: string;
  address: string;
  pendingAmount?: number;
  type?: 'RETAIL' | 'WHOLESALE' | 'BROKER';
}

export interface SavedBill {
  id: string;
  uuid?: string;
  date: Date;
  customer: Customer;
  items: BillItem[];
  gstEnabled: boolean;
  paymentMethod: string;
  khataAmount: number;
  subtotal: number;
  totalDiscount: number;
  gstAmount: number;
  grandTotal: number;
}

export interface ProductPage {
  content: BillingProduct[];
  totalElements: number;
  totalPages: number;
  number: number;
}

export interface ConfirmedPayment {
  method: string;
  mode: 'full' | 'partial' | 'khata';
  paidNow: number | null;
  partialMethod: 'cash' | 'upi' | 'card' | null;
}
