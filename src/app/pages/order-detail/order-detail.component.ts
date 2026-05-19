import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

interface OrderItem {
  icon: string; name: string; sku: string;
  variant: string; qty: number;
  unitPrice: number; discount: number; gstPct: number;
}

interface OrderDetail {
  id: string;
  date: string; time: string;
  source: 'Online' | 'In-Store';
  status: string; statusClass: string;

  customer: { name: string; email: string; phone: string; type: 'Retail' | 'Wholesale' | 'Broker'; address: string; };
  staff: { name: string; role: string; phone: string; };

  items: OrderItem[];

  subtotal: number;
  gst: number;
  shipping: number;
  discount: number;
  total: number;

  payment: { status: string; method: string; txnId: string; paidOn: string; };
  notes: string;
}

const ORDERS: Record<string, OrderDetail> = {
  '#MKR-00128': {
    id: '#MKR-00128', date: 'Apr 8, 2026', time: '2:30 PM', source: 'Online',
    status: 'Pending', statusClass: 'pending',
    customer: { name: 'Ravi Kumar', email: 'ravi.k@gmail.com', phone: '+91 98765 43210', type: 'Retail', address: '12, Rose Garden, Koramangala, Bengaluru – 560034' },
    staff: { name: 'Anand Raj', role: 'Sales Executive', phone: '+91 91234 00001' },
    items: [
      { icon: '👔', name: 'Nike Polo T-Shirt', sku: 'NK-POLO-BL', variant: 'Blue / L', qty: 1, unitPrice: 999, discount: 0, gstPct: 12 },
    ],
    subtotal: 999, gst: 120, shipping: 49, discount: 0, total: 1168,
    payment: { status: 'Paid', method: 'UPI', txnId: 'UPI2026040800128', paidOn: 'Apr 8, 2026 · 2:31 PM' },
    notes: 'Customer requested express delivery.',
  },
  '#MKR-00127': {
    id: '#MKR-00127', date: 'Apr 8, 2026', time: '1:15 PM', source: 'In-Store',
    status: 'Confirmed', statusClass: 'confirmed',
    customer: { name: 'Priya Sharma', email: 'priya.s@outlook.com', phone: '+91 91234 56789', type: 'Wholesale', address: '45, Linking Road, Bandra West, Mumbai – 400050' },
    staff: { name: 'Sundar Rajan', role: 'Store Manager', phone: '+91 91234 00002' },
    items: [
      { icon: '👗', name: 'Libas Floral Kurta Set', sku: 'LIB-KUR-FL', variant: 'Floral / M', qty: 10, unitPrice: 499, discount: 50, gstPct: 5 },
      { icon: '👶', name: 'Mothercare School Uniform', sku: 'MC-SCH-UNI', variant: 'Navy / Age 8', qty: 5, unitPrice: 449, discount: 0, gstPct: 5 },
    ],
    subtotal: 7240, gst: 362, shipping: 0, discount: 500, total: 7102,
    payment: { status: 'Paid', method: 'Bank Transfer', txnId: 'NEFT20260408SHR127', paidOn: 'Apr 8, 2026 · 1:00 PM' },
    notes: '',
  },
  '#MKR-00126': {
    id: '#MKR-00126', date: 'Apr 8, 2026', time: '11:00 AM', source: 'Online',
    status: 'Shipped', statusClass: 'shipped',
    customer: { name: 'Meena Patel', email: 'meena.p@yahoo.com', phone: '+91 99887 76655', type: 'Broker', address: '78, Satellite Road, Ahmedabad – 380015' },
    staff: { name: 'Kavya Nair', role: 'Sales Executive', phone: '+91 91234 00003' },
    items: [
      { icon: '📺', name: 'Samsung 32" Smart TV', sku: 'SAM-TV-32-BL', variant: 'Black / 32"', qty: 2, unitPrice: 12499, discount: 1000, gstPct: 18 },
    ],
    subtotal: 23998, gst: 4320, shipping: 0, discount: 2000, total: 26318,
    payment: { status: 'Paid', method: 'Razorpay', txnId: 'RZP_PAY_00126MNA', paidOn: 'Apr 8, 2026 · 10:55 AM' },
    notes: 'Bulk broker deal — 2 units dispatched via Blue Dart.',
  },
  '#MKR-00125': {
    id: '#MKR-00125', date: 'Apr 7, 2026', time: '4:00 PM', source: 'Online',
    status: 'Delivered', statusClass: 'delivered',
    customer: { name: 'Arun Nair', email: 'arun.n@gmail.com', phone: '+91 97654 32109', type: 'Retail', address: '23, MG Road, Kochi – 682016' },
    staff: { name: 'Anand Raj', role: 'Sales Executive', phone: '+91 91234 00001' },
    items: [
      { icon: '👟', name: 'Adidas Running Shoes', sku: 'ADI-RUN-WH', variant: 'White / UK 9', qty: 1, unitPrice: 3499, discount: 0, gstPct: 12 },
    ],
    subtotal: 3499, gst: 420, shipping: 49, discount: 0, total: 3968,
    payment: { status: 'Paid', method: 'COD', txnId: 'COD-00125', paidOn: 'Apr 7, 2026 · 5:30 PM' },
    notes: '',
  },
  '#MKR-00124': {
    id: '#MKR-00124', date: 'Apr 7, 2026', time: '10:00 AM', source: 'In-Store',
    status: 'Pending', statusClass: 'pending',
    customer: { name: 'Sunita Rao', email: 'sunita.r@gmail.com', phone: '+91 88776 55443', type: 'Wholesale', address: '5, Industrial Estate, Hyderabad – 500038' },
    staff: { name: 'Sundar Rajan', role: 'Store Manager', phone: '+91 91234 00002' },
    items: [
      { icon: '❄️', name: 'Whirlpool 1.5T AC 5-Star', sku: 'WHP-AC-1.5T', variant: 'White / 1.5 Ton', qty: 3, unitPrice: 27500, discount: 2000, gstPct: 28 },
    ],
    subtotal: 76500, gst: 21420, shipping: 0, discount: 6000, total: 91920,
    payment: { status: 'Pending', method: 'Bank Transfer', txnId: '—', paidOn: '—' },
    notes: 'Awaiting bank transfer confirmation from Sunita Rao.',
  },
  '#MKR-00123': {
    id: '#MKR-00123', date: 'Apr 6, 2026', time: '9:00 AM', source: 'Online',
    status: 'Delivered', statusClass: 'delivered',
    customer: { name: 'Kiran Das', email: 'kiran.d@gmail.com', phone: '+91 77665 44332', type: 'Retail', address: '11, Park Street, Kolkata – 700016' },
    staff: { name: 'Kavya Nair', role: 'Sales Executive', phone: '+91 91234 00003' },
    items: [
      { icon: '👶', name: 'Mothercare School Uniform', sku: 'MC-SCH-UNI', variant: 'Navy / Age 6', qty: 2, unitPrice: 599, discount: 0, gstPct: 5 },
    ],
    subtotal: 1198, gst: 60, shipping: 49, discount: 0, total: 1307,
    payment: { status: 'Paid', method: 'UPI', txnId: 'UPI2026040600123', paidOn: 'Apr 6, 2026 · 9:01 AM' },
    notes: '',
  },
  '#MKR-00122': {
    id: '#MKR-00122', date: 'Apr 6, 2026', time: '3:00 PM', source: 'Online',
    status: 'Shipped', statusClass: 'shipped',
    customer: { name: 'Farhan Ali', email: 'farhan.a@gmail.com', phone: '+91 66554 33221', type: 'Broker', address: '88, MIDC Road, Pune – 411019' },
    staff: { name: 'Anand Raj', role: 'Sales Executive', phone: '+91 91234 00001' },
    items: [
      { icon: '📺', name: 'Samsung 32" Smart TV', sku: 'SAM-TV-32-BL', variant: 'Black / 32"', qty: 5, unitPrice: 12499, discount: 5000, gstPct: 18 },
      { icon: '❄️', name: 'Whirlpool 1.5T AC 5-Star', sku: 'WHP-AC-1.5T', variant: 'White / 1.5 Ton', qty: 2, unitPrice: 27500, discount: 0, gstPct: 28 },
    ],
    subtotal: 117495, gst: 28349, shipping: 0, discount: 10000, total: 135844,
    payment: { status: 'Paid', method: 'Razorpay', txnId: 'RZP_PAY_00122FAR', paidOn: 'Apr 6, 2026 · 2:58 PM' },
    notes: 'Large broker consignment. Dispatched via GATI logistics.',
  },
};

@Component({
  selector: 'app-order-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.scss'
})
export class OrderDetailComponent implements OnInit {
  order: OrderDetail | null = null;
  invoiceGenerated = false;

  pipeline = ['Pending', 'Confirmed', 'Shipped', 'Delivered'];

  showCancelModal = false;
  showStatusModal = false;
  selectedStatus = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.order = ORDERS[id] ?? null;
  }

  pipelineStep(status: string): number {
    return this.pipeline.indexOf(status);
  }

  itemSubtotal(item: OrderItem): number {
    return item.qty * item.unitPrice - item.discount;
  }

  itemGst(item: OrderItem): number {
    return Math.round(this.itemSubtotal(item) * item.gstPct / 100);
  }

  generateInvoice() { this.invoiceGenerated = true; }

  printInvoice() { window.print(); }

  formatCurrency(n: number): string {
    return '₹' + n.toLocaleString('en-IN');
  }

  goBack() { this.router.navigate(['/orders']); }

  openStatusModal() {
    if (!this.order) return;
    this.selectedStatus = this.order.status;
    this.showStatusModal = true;
  }

  applyStatus() {
    if (!this.order || !this.selectedStatus) return;
    this.order.status = this.selectedStatus;
    this.order.statusClass = this.selectedStatus.toLowerCase();
    this.showStatusModal = false;
  }

  confirmCancel() {
    if (!this.order) return;
    this.order.status = 'Cancelled';
    this.order.statusClass = 'cancelled';
    this.showCancelModal = false;
  }
}
