import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

type CustomerType = 'Retail' | 'Wholesale' | 'Broker';
type CustomerSource = 'Online' | 'In-Store';

interface CustomerSummary {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: CustomerType;
  source: CustomerSource;
  since: string;
  lastOrder: string;
  totalOrders: number;
  totalSpent: number;
  pendingAmount: number;
}

const CUSTOMERS: CustomerSummary[] = [
  // ── Online ──
  { id: 'CUS-001', name: 'Ravi Kumar',   email: 'ravi.k@gmail.com',     phone: '+91 98765 43210', type: 'Retail',    source: 'Online',   since: 'Jan 2025', lastOrder: 'Apr 8, 2026',  totalOrders: 3,  totalSpent: 14200,   pendingAmount: 0 },
  { id: 'CUS-002', name: 'Meena Patel',  email: 'meena.p@yahoo.com',    phone: '+91 99887 76655', type: 'Broker',    source: 'Online',   since: 'Mar 2024', lastOrder: 'Apr 8, 2026',  totalOrders: 4,  totalSpent: 105800,  pendingAmount: 0 },
  { id: 'CUS-003', name: 'Kiran Das',    email: 'kiran.d@gmail.com',    phone: '+91 77665 44332', type: 'Retail',    source: 'Online',   since: 'Aug 2025', lastOrder: 'Apr 6, 2026',  totalOrders: 2,  totalSpent: 3200,    pendingAmount: 0 },
  { id: 'CUS-004', name: 'Farhan Ali',   email: 'farhan.a@gmail.com',   phone: '+91 66554 33221', type: 'Broker',    source: 'Online',   since: 'Nov 2023', lastOrder: 'Apr 6, 2026',  totalOrders: 6,  totalSpent: 450000,  pendingAmount: 0 },
  { id: 'CUS-005', name: 'Arun Nair',    email: 'arun.n@gmail.com',     phone: '+91 97654 32109', type: 'Retail',    source: 'Online',   since: 'Jun 2025', lastOrder: 'Apr 7, 2026',  totalOrders: 2,  totalSpent: 7500,    pendingAmount: 0 },
  { id: 'CUS-006', name: 'Anjali Verma', email: 'anjali.v@outlook.com', phone: '+91 93456 78901', type: 'Wholesale', source: 'Online',   since: 'Feb 2025', lastOrder: 'Apr 1, 2026',  totalOrders: 3,  totalSpent: 45000,   pendingAmount: 15000 },
  // ── In-Store ──
  { id: 'CUS-007', name: 'Priya Sharma', email: 'priya.s@outlook.com',  phone: '+91 91234 56789', type: 'Wholesale', source: 'In-Store', since: 'Jan 2023', lastOrder: 'Apr 8, 2026',  totalOrders: 8,  totalSpent: 240000,  pendingAmount: 0 },
  { id: 'CUS-008', name: 'Sunita Rao',   email: 'sunita.r@gmail.com',   phone: '+91 88776 55443', type: 'Wholesale', source: 'In-Store', since: 'May 2024', lastOrder: 'Apr 7, 2026',  totalOrders: 5,  totalSpent: 380000,  pendingAmount: 91920 },
  { id: 'CUS-009', name: 'Deepa Singh',  email: 'deepa.s@gmail.com',    phone: '+91 85432 10987', type: 'Retail',    source: 'In-Store', since: 'Oct 2024', lastOrder: 'Mar 15, 2026', totalOrders: 3,  totalSpent: 12000,   pendingAmount: 2500 },
  { id: 'CUS-010', name: 'Sanjay Mehta', email: 'sanjay.m@gmail.com',   phone: '+91 98001 23456', type: 'Broker',    source: 'In-Store', since: 'Jun 2022', lastOrder: 'Mar 5, 2026',  totalOrders: 15, totalSpent: 1200000, pendingAmount: 50000 },
];

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent {
  selectedSource: CustomerSource | null = null;
  selectedType: 'All' | CustomerType = 'All';
  searchQ = '';

  readonly customers = CUSTOMERS;
  readonly types: CustomerType[] = ['Retail', 'Wholesale', 'Broker'];

  constructor(private router: Router) {}

  // ── Overview counts ──
  sourceCount(s: CustomerSource)  { return this.customers.filter(c => c.source === s).length; }
  sourcePending(s: CustomerSource){ return this.customers.filter(c => c.source === s && c.pendingAmount > 0).length; }
  typeCount(s: CustomerSource, t: CustomerType) { return this.customers.filter(c => c.source === s && c.type === t).length; }
  sourceTotalSpent(s: CustomerSource) { return this.customers.filter(c => c.source === s).reduce((n, c) => n + c.totalSpent, 0); }

  // ── Navigation ──
  selectSource(s: CustomerSource) { this.selectedSource = s; this.selectedType = 'All'; this.searchQ = ''; }
  goBack() { this.selectedSource = null; this.selectedType = 'All'; this.searchQ = ''; }
  onSearch() {}

  // ── Filtered list ──
  get filtered(): CustomerSummary[] {
    const q = this.searchQ.trim().toLowerCase();
    return this.customers.filter(c => {
      if (c.source !== this.selectedSource) return false;
      if (this.selectedType !== 'All' && c.type !== this.selectedType) return false;
      if (q && !c.name.toLowerCase().includes(q) && !c.email.toLowerCase().includes(q) && !c.phone.includes(q)) return false;
      return true;
    });
  }

  typeFilterCount(t: 'All' | CustomerType): number {
    if (t === 'All') return this.customers.filter(c => c.source === this.selectedSource).length;
    return this.customers.filter(c => c.source === this.selectedSource && c.type === t).length;
  }

  // ── Helpers ──
  avatar(name: string) { return name.split(' ').map(w => w[0]).slice(0, 2).join(''); }
  fmt(n: number) { return '₹' + n.toLocaleString('en-IN'); }
  viewCustomer(id: string) { this.router.navigate(['/customers', id]); }
}
