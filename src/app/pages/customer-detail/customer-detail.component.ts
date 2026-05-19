import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

type CustomerType   = 'Retail' | 'Wholesale' | 'Broker';
type CustomerSource = 'Online' | 'In-Store';

interface KhataEntry {
  id: string;
  date: string;
  description: string;
  entryType: 'auto-order' | 'manual-debit' | 'manual-credit';
  debit: number;
  credit: number;
  balance: number;
  orderId?: string;
}

interface CustOrder {
  id: string;
  date: string;
  items: string;
  amount: number;
  status: string;
  statusClass: string;
  paymentMethod: string;
  paymentStatus: 'Paid' | 'Pending';
}

interface CustomerFull {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: CustomerType;
  source: CustomerSource;
  address: string;
  since: string;
  lastOrder: string;
  gstNumber: string;
  totalSpent: number;
  pendingAmount: number;
  orders: CustOrder[];
  khata: KhataEntry[];
  notes: string;
}

const CUSTOMERS: Record<string, CustomerFull> = {
  'CUS-001': {
    id: 'CUS-001', name: 'Ravi Kumar', email: 'ravi.k@gmail.com',
    phone: '+91 98765 43210', type: 'Retail', source: 'Online',
    address: '12, Rose Garden, Koramangala, Bengaluru – 560034',
    since: 'Jan 2025', lastOrder: 'Apr 8, 2026', gstNumber: '',
    totalSpent: 14200, pendingAmount: 0,
    orders: [
      { id: '#MKR-00128', date: 'Apr 8, 2026',  items: 'Nike Polo T-Shirt (×1)',         amount: 1168,  status: 'Pending',   statusClass: 'pending',   paymentMethod: 'UPI',      paymentStatus: 'Paid' },
      { id: '#MKR-00105', date: 'Mar 12, 2026', items: 'Adidas Running Shoes (×1)',       amount: 3968,  status: 'Delivered', statusClass: 'delivered', paymentMethod: 'UPI',      paymentStatus: 'Paid' },
      { id: '#MKR-00089', date: 'Feb 2, 2026',  items: 'Samsung Galaxy M34 5G (×1)',      amount: 15999, status: 'Delivered', statusClass: 'delivered', paymentMethod: 'Razorpay', paymentStatus: 'Paid' },
    ],
    khata: [],
    notes: 'Preferred delivery: morning slots. Requested gift wrapping on last order.',
  },
  'CUS-002': {
    id: 'CUS-002', name: 'Meena Patel', email: 'meena.p@yahoo.com',
    phone: '+91 99887 76655', type: 'Broker', source: 'Online',
    address: '78, Satellite Road, Ahmedabad – 380015',
    since: 'Mar 2024', lastOrder: 'Apr 8, 2026', gstNumber: '24AABCM1234Z1Z2',
    totalSpent: 105800, pendingAmount: 0,
    orders: [
      { id: '#MKR-00126', date: 'Apr 8, 2026',  items: 'Samsung 32" Smart TV (×2)',       amount: 26318,  status: 'Shipped',   statusClass: 'shipped',   paymentMethod: 'Razorpay', paymentStatus: 'Paid' },
      { id: '#MKR-00098', date: 'Mar 5, 2026',  items: 'HP Pavilion 15 Laptop (×1)',      amount: 54990,  status: 'Delivered', statusClass: 'delivered', paymentMethod: 'Razorpay', paymentStatus: 'Paid' },
      { id: '#MKR-00074', date: 'Jan 14, 2026', items: 'Samsung Galaxy M34 5G (×1), TV ×1',amount: 15999, status: 'Delivered', statusClass: 'delivered', paymentMethod: 'Razorpay', paymentStatus: 'Paid' },
      { id: '#MKR-00051', date: 'Nov 20, 2025', items: 'Whirlpool 1.5T AC 5-Star (×1)',   amount: 32990,  status: 'Delivered', statusClass: 'delivered', paymentMethod: 'Razorpay', paymentStatus: 'Paid' },
    ],
    khata: [],
    notes: 'Bulk broker — deals in electronics. Negotiate price for orders above ₹50k.',
  },
  'CUS-003': {
    id: 'CUS-003', name: 'Kiran Das', email: 'kiran.d@gmail.com',
    phone: '+91 77665 44332', type: 'Retail', source: 'Online',
    address: '11, Park Street, Kolkata – 700016',
    since: 'Aug 2025', lastOrder: 'Apr 6, 2026', gstNumber: '',
    totalSpent: 3200, pendingAmount: 0,
    orders: [
      { id: '#MKR-00123', date: 'Apr 6, 2026',  items: 'Mothercare School Uniform (×2)',  amount: 1307, status: 'Delivered', statusClass: 'delivered', paymentMethod: 'UPI', paymentStatus: 'Paid' },
      { id: '#MKR-00112', date: 'Mar 18, 2026', items: 'Hamleys Teddy Bear 30cm (×2)',    amount: 1599, status: 'Delivered', statusClass: 'delivered', paymentMethod: 'UPI', paymentStatus: 'Paid' },
    ],
    khata: [],
    notes: '',
  },
  'CUS-004': {
    id: 'CUS-004', name: 'Farhan Ali', email: 'farhan.a@gmail.com',
    phone: '+91 66554 33221', type: 'Broker', source: 'Online',
    address: '88, MIDC Road, Pune – 411019',
    since: 'Nov 2023', lastOrder: 'Apr 6, 2026', gstNumber: '27AABFA9876B1Z3',
    totalSpent: 450000, pendingAmount: 0,
    orders: [
      { id: '#MKR-00122', date: 'Apr 6, 2026',  items: 'Samsung TV ×5, Whirlpool AC ×2', amount: 135844, status: 'Shipped',   statusClass: 'shipped',   paymentMethod: 'Razorpay', paymentStatus: 'Paid' },
      { id: '#MKR-00096', date: 'Mar 2, 2026',  items: 'HP Laptop ×3, Samsung M34 ×2',   amount: 196470, status: 'Delivered', statusClass: 'delivered', paymentMethod: 'Razorpay', paymentStatus: 'Paid' },
      { id: '#MKR-00078', date: 'Jan 28, 2026', items: 'LG Washing Machine ×5',           amount: 92450,  status: 'Delivered', statusClass: 'delivered', paymentMethod: 'Razorpay', paymentStatus: 'Paid' },
      { id: '#MKR-00055', date: 'Dec 10, 2025', items: 'Whirlpool AC ×3',                 amount: 98970,  status: 'Delivered', statusClass: 'delivered', paymentMethod: 'Razorpay', paymentStatus: 'Paid' },
      { id: '#MKR-00039', date: 'Nov 5, 2025',  items: 'Samsung TV ×2',                   amount: 31998,  status: 'Delivered', statusClass: 'delivered', paymentMethod: 'Razorpay', paymentStatus: 'Paid' },
    ],
    khata: [],
    notes: 'Top broker — Pune region. Prefers Razorpay. Usually orders in bulk every 4-6 weeks.',
  },
  'CUS-005': {
    id: 'CUS-005', name: 'Arun Nair', email: 'arun.n@gmail.com',
    phone: '+91 97654 32109', type: 'Retail', source: 'Online',
    address: '23, MG Road, Kochi – 682016',
    since: 'Jun 2025', lastOrder: 'Apr 7, 2026', gstNumber: '',
    totalSpent: 7500, pendingAmount: 0,
    orders: [
      { id: '#MKR-00125', date: 'Apr 7, 2026',  items: 'Adidas Running Shoes (×1)',       amount: 3968, status: 'Delivered', statusClass: 'delivered', paymentMethod: 'COD',      paymentStatus: 'Paid' },
      { id: '#MKR-00108', date: 'Mar 8, 2026',  items: 'Nike Polo T-Shirt (×2)',           amount: 2098, status: 'Delivered', statusClass: 'delivered', paymentMethod: 'UPI',      paymentStatus: 'Paid' },
    ],
    khata: [],
    notes: '',
  },
  'CUS-006': {
    id: 'CUS-006', name: 'Anjali Verma', email: 'anjali.v@outlook.com',
    phone: '+91 93456 78901', type: 'Wholesale', source: 'Online',
    address: '34, Nehru Place, New Delhi – 110019',
    since: 'Feb 2025', lastOrder: 'Apr 1, 2026', gstNumber: '07AABAV4567C1Z5',
    totalSpent: 45000, pendingAmount: 15000,
    orders: [
      { id: '#MKR-00115', date: 'Apr 1, 2026',  items: 'Libas Floral Kurta Set (×20)',    amount: 15000, status: 'Confirmed', statusClass: 'confirmed', paymentMethod: 'Bank Transfer', paymentStatus: 'Pending' },
      { id: '#MKR-00092', date: 'Feb 20, 2026', items: 'Saree with Blouse Piece (×10)',   amount: 12990, status: 'Delivered', statusClass: 'delivered', paymentMethod: 'Bank Transfer', paymentStatus: 'Paid' },
      { id: '#MKR-00071', date: 'Jan 8, 2026',  items: 'Libas Floral Kurta Set (×25)',    amount: 17500, status: 'Delivered', statusClass: 'delivered', paymentMethod: 'Bank Transfer', paymentStatus: 'Paid' },
    ],
    khata: [
      { id: 'KH-001', date: 'Apr 1, 2026',  description: 'Order #MKR-00115 — Bank Transfer awaiting', entryType: 'auto-order', debit: 15000, credit: 0, balance: 15000, orderId: '#MKR-00115' },
    ],
    notes: 'Delhi wholesale distributor — women\'s ethnic wear. Bank transfers take 2-3 days.',
  },
  'CUS-007': {
    id: 'CUS-007', name: 'Priya Sharma', email: 'priya.s@outlook.com',
    phone: '+91 91234 56789', type: 'Wholesale', source: 'In-Store',
    address: '45, Linking Road, Bandra West, Mumbai – 400050',
    since: 'Jan 2023', lastOrder: 'Apr 8, 2026', gstNumber: '27AABPS7890D1Z1',
    totalSpent: 240000, pendingAmount: 0,
    orders: [
      { id: '#MKR-00127', date: 'Apr 8, 2026',  items: 'Libas Floral Kurta Set ×10, School Uniform ×5', amount: 7102,  status: 'Confirmed', statusClass: 'confirmed', paymentMethod: 'Bank Transfer', paymentStatus: 'Paid' },
      { id: '#MKR-00099', date: 'Mar 6, 2026',  items: 'Saree with Blouse Piece ×15',    amount: 19485, status: 'Delivered', statusClass: 'delivered', paymentMethod: 'Bank Transfer', paymentStatus: 'Paid' },
      { id: '#MKR-00082', date: 'Feb 10, 2026', items: 'Libas Floral Kurta Set ×30',      amount: 21000, status: 'Delivered', statusClass: 'delivered', paymentMethod: 'Cash',          paymentStatus: 'Paid' },
      { id: '#MKR-00064', date: 'Jan 5, 2026',  items: 'School Uniform ×40, Kurta ×20',   amount: 31760, status: 'Delivered', statusClass: 'delivered', paymentMethod: 'Bank Transfer', paymentStatus: 'Paid' },
    ],
    khata: [],
    notes: 'Long-standing wholesale client since Jan 2023. Gets 5% extra discount on orders above ₹20k.',
  },
  'CUS-008': {
    id: 'CUS-008', name: 'Sunita Rao', email: 'sunita.r@gmail.com',
    phone: '+91 88776 55443', type: 'Wholesale', source: 'In-Store',
    address: '5, Industrial Estate, Hyderabad – 500038',
    since: 'May 2024', lastOrder: 'Apr 7, 2026', gstNumber: '36AABSR5432E1Z4',
    totalSpent: 380000, pendingAmount: 91920,
    orders: [
      { id: '#MKR-00124', date: 'Apr 7, 2026',  items: 'Whirlpool 1.5T AC 5-Star (×3)', amount: 91920, status: 'Pending',   statusClass: 'pending',   paymentMethod: 'Bank Transfer', paymentStatus: 'Pending' },
      { id: '#MKR-00103', date: 'Mar 4, 2026',  items: 'LG 7kg Washing Machine (×4)',    amount: 73960, status: 'Delivered', statusClass: 'delivered', paymentMethod: 'Bank Transfer', paymentStatus: 'Paid' },
      { id: '#MKR-00085', date: 'Feb 1, 2026',  items: 'Whirlpool AC ×2',                amount: 65980, status: 'Delivered', statusClass: 'delivered', paymentMethod: 'Bank Transfer', paymentStatus: 'Paid' },
    ],
    khata: [
      { id: 'KH-002', date: 'Apr 7, 2026', description: 'Order #MKR-00124 — Goods delivered, bank transfer awaited', entryType: 'auto-order', debit: 91920, credit: 0, balance: 91920, orderId: '#MKR-00124' },
    ],
    notes: 'Awaiting bank transfer confirmation for Apr 7 order. Usually pays within 3 business days.',
  },
  'CUS-009': {
    id: 'CUS-009', name: 'Deepa Singh', email: 'deepa.s@gmail.com',
    phone: '+91 85432 10987', type: 'Retail', source: 'In-Store',
    address: '67, Gandhi Nagar, Jaipur – 302015',
    since: 'Oct 2024', lastOrder: 'Mar 15, 2026', gstNumber: '',
    totalSpent: 12000, pendingAmount: 2500,
    orders: [
      { id: '#MKR-00111', date: 'Mar 15, 2026', items: 'Saree with Blouse Piece (×2)',   amount: 2598,  status: 'Delivered', statusClass: 'delivered', paymentMethod: 'Cash', paymentStatus: 'Paid' },
      { id: '#MKR-00087', date: 'Feb 5, 2026',  items: 'Libas Floral Kurta Set (×3)',    amount: 1947,  status: 'Delivered', statusClass: 'delivered', paymentMethod: 'Cash', paymentStatus: 'Paid' },
      { id: '#MKR-00066', date: 'Jan 10, 2026', items: 'Hamleys Teddy Bear ×5, Kurta ×2', amount: 5295, status: 'Delivered', statusClass: 'delivered', paymentMethod: 'Cash', paymentStatus: 'Paid' },
    ],
    khata: [
      { id: 'KH-003', date: 'Mar 10, 2026', description: 'Cotton sarees taken on credit',      entryType: 'manual-debit',  debit: 5000, credit: 0,    balance: 5000 },
      { id: 'KH-004', date: 'Mar 15, 2026', description: 'Partial cash payment received',      entryType: 'manual-credit', debit: 0,    credit: 2500, balance: 2500 },
    ],
    notes: 'Regular walk-in customer. Has ₹2,500 outstanding from March credit purchase.',
  },
  'CUS-010': {
    id: 'CUS-010', name: 'Sanjay Mehta', email: 'sanjay.m@gmail.com',
    phone: '+91 98001 23456', type: 'Broker', source: 'In-Store',
    address: '14, Commerce Park, Surat – 395003',
    since: 'Jun 2022', lastOrder: 'Mar 5, 2026', gstNumber: '24AABSM2468F1Z6',
    totalSpent: 1200000, pendingAmount: 50000,
    orders: [
      { id: '#MKR-00110', date: 'Mar 5, 2026',  items: 'HP Pavilion Laptop ×4, Samsung TV ×3', amount: 265960, status: 'Delivered', statusClass: 'delivered', paymentMethod: 'Bank Transfer', paymentStatus: 'Paid' },
      { id: '#MKR-00091', date: 'Feb 10, 2026', items: 'Whirlpool AC ×6, LG WM ×4',            amount: 271940, status: 'Delivered', statusClass: 'delivered', paymentMethod: 'Bank Transfer', paymentStatus: 'Paid' },
      { id: '#MKR-00072', date: 'Jan 12, 2026', items: 'Samsung M34 ×10, HP Laptop ×2',         amount: 269980, status: 'Delivered', statusClass: 'delivered', paymentMethod: 'Bank Transfer', paymentStatus: 'Paid' },
    ],
    khata: [
      { id: 'KH-005', date: 'Feb 20, 2026', description: 'Electronics batch given on credit for March sale', entryType: 'manual-debit',  debit: 80000, credit: 0,     balance: 80000 },
      { id: 'KH-006', date: 'Mar 1, 2026',  description: 'Partial payment received — cash',                  entryType: 'manual-credit', debit: 0,     credit: 30000, balance: 50000 },
    ],
    notes: 'Premium broker — Surat textile & electronics belt. Longest-standing customer. Negotiate on orders above ₹2L.',
  },
};

@Component({
  selector: 'app-customer-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customer-detail.component.html',
  styleUrl: './customer-detail.component.scss'
})
export class CustomerDetailComponent implements OnInit {
  customer: CustomerFull | null = null;
  activeTab: 'orders' | 'khata' | 'notes' = 'orders';

  // ── Edit modal ──
  showEditModal = false;
  editForm = { name: '', email: '', phone: '', address: '', type: '' as CustomerType, gstNumber: '', notes: '' };

  // ── Collect payment modal ──
  showCollectModal = false;
  collectAmount = 0;
  collectMethod = 'Cash';
  collectNote = '';

  // ── Add khata entry modal ──
  showKhataModal = false;
  khataEntryType: 'manual-debit' | 'manual-credit' = 'manual-debit';
  khataDesc = '';
  khataAmount = 0;
  khataNote = '';

  readonly paymentMethods = ['Cash', 'UPI', 'Bank Transfer', 'Card', 'Razorpay'];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.customer = CUSTOMERS[id] ?? null;
  }

  goBack() { this.router.navigate(['/customers']); }

  avatar(name: string) { return name.split(' ').map(w => w[0]).slice(0, 2).join(''); }
  fmt(n: number) { return '₹' + n.toLocaleString('en-IN'); }

  get totalOrders()  { return this.customer?.orders.length ?? 0; }
  get totalRevenue() { return this.customer?.orders.reduce((s, o) => s + o.amount, 0) ?? 0; }

  // ── Edit ──
  openEdit() {
    if (!this.customer) return;
    this.editForm = {
      name: this.customer.name,
      email: this.customer.email,
      phone: this.customer.phone,
      address: this.customer.address,
      type: this.customer.type,
      gstNumber: this.customer.gstNumber,
      notes: this.customer.notes,
    };
    this.showEditModal = true;
  }

  saveEdit() {
    if (!this.customer) return;
    Object.assign(this.customer, this.editForm);
    this.showEditModal = false;
  }

  // ── Collect payment ──
  openCollect() {
    this.collectAmount = this.customer?.pendingAmount ?? 0;
    this.collectMethod = 'Cash';
    this.collectNote = '';
    this.showCollectModal = true;
  }

  submitCollect() {
    if (!this.customer || this.collectAmount <= 0) return;
    const amt = Math.min(this.collectAmount, this.customer.pendingAmount);
    const prevBal = this.customer.pendingAmount;
    const newBal  = prevBal - amt;
    const entry: KhataEntry = {
      id: 'KH-' + Date.now(),
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      description: `Payment collected — ${this.collectMethod}${this.collectNote ? ' · ' + this.collectNote : ''}`,
      entryType: 'manual-credit',
      debit: 0, credit: amt, balance: newBal,
    };
    this.customer.khata.push(entry);
    this.customer.pendingAmount = newBal;
    this.showCollectModal = false;
    this.activeTab = 'khata';
  }

  // ── Add khata entry ──
  openKhata() {
    this.khataEntryType = 'manual-debit';
    this.khataDesc = '';
    this.khataAmount = 0;
    this.khataNote = '';
    this.showKhataModal = true;
  }

  submitKhata() {
    if (!this.customer || !this.khataDesc || this.khataAmount <= 0) return;
    const last = this.customer.khata.length > 0
      ? this.customer.khata[this.customer.khata.length - 1].balance
      : 0;
    const isDebit  = this.khataEntryType === 'manual-debit';
    const newBal   = isDebit ? last + this.khataAmount : Math.max(0, last - this.khataAmount);
    const entry: KhataEntry = {
      id: 'KH-' + Date.now(),
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      description: this.khataDesc + (this.khataNote ? ' · ' + this.khataNote : ''),
      entryType: this.khataEntryType,
      debit:  isDebit ? this.khataAmount : 0,
      credit: isDebit ? 0 : this.khataAmount,
      balance: newBal,
    };
    this.customer.khata.push(entry);
    this.customer.pendingAmount = newBal;
    this.showKhataModal = false;
  }
}
