import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

export interface Order {
  id: string; name: string; email: string; phone: string;
  type: 'Retail' | 'Wholesale' | 'Broker';
  products: string; qty: number; amount: string;
  payment: string; payMethod: string;
  status: string; statusClass: string;
  date: string;
}

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
  constructor(private router: Router) {}

  searchQ = '';
  activeTab = 'all';
  selectedOrder: Order | null = null;
  showStatusModal = false;
  newStatus = '';

  tabs = [
    { key: 'all',       label: 'All',       count: 248 },
    { key: 'pending',   label: 'Pending',   count: 12  },
    { key: 'confirmed', label: 'Confirmed', count: 34  },
    { key: 'shipped',   label: 'Shipped',   count: 58  },
    { key: 'delivered', label: 'Delivered', count: 132 },
    { key: 'cancelled', label: 'Cancelled', count: 8   },
    { key: 'return',    label: 'Returns',   count: 4   },
  ];

  statuses = ['Pending', 'Confirmed', 'Shipped', 'Delivered', 'Cancelled'];
  pipeline = ['Pending', 'Confirmed', 'Shipped', 'Delivered'];

  allOrders: Order[] = [
    { id:'#MKR-00128', name:'Ravi Kumar',   email:'ravi.k@gmail.com',    phone:'98765 43210', type:'Retail',    products:'Nike Polo T-Shirt × 1',          qty:1,  amount:'₹999',     payment:'Paid',    payMethod:'UPI',      status:'Pending',   statusClass:'pending',   date:'Today, 2:30 PM'  },
    { id:'#MKR-00127', name:'Priya Sharma', email:'priya.s@outlook.com', phone:'91234 56789', type:'Wholesale', products:'Libas Kurta × 10, Kids Set × 5',  qty:15, amount:'₹15,490',  payment:'Paid',    payMethod:'Bank',     status:'Confirmed', statusClass:'confirmed', date:'Today, 1:15 PM'  },
    { id:'#MKR-00126', name:'Meena Patel',  email:'meena.p@yahoo.com',   phone:'99887 76655', type:'Broker',    products:'Samsung TV × 2',                 qty:2,  amount:'₹42,500',  payment:'Paid',    payMethod:'Razorpay', status:'Shipped',   statusClass:'shipped',   date:'Today, 11:00 AM' },
    { id:'#MKR-00125', name:'Arun Nair',    email:'arun.n@gmail.com',    phone:'97654 32109', type:'Retail',    products:'Adidas Shoes × 1',               qty:1,  amount:'₹3,499',   payment:'Paid',    payMethod:'COD',      status:'Delivered', statusClass:'delivered', date:'Yesterday'       },
    { id:'#MKR-00124', name:'Sunita Rao',   email:'sunita.r@gmail.com',  phone:'88776 55443', type:'Wholesale', products:'Whirlpool AC × 3',               qty:3,  amount:'₹89,970',  payment:'Pending', payMethod:'Bank',     status:'Pending',   statusClass:'pending',   date:'Yesterday'       },
    { id:'#MKR-00123', name:'Kiran Das',    email:'kiran.d@gmail.com',   phone:'77665 44332', type:'Retail',    products:'Mothercare Uniform × 2',         qty:2,  amount:'₹1,198',   payment:'Paid',    payMethod:'UPI',      status:'Delivered', statusClass:'delivered', date:'Apr 6'           },
    { id:'#MKR-00122', name:'Farhan Ali',   email:'farhan.a@gmail.com',  phone:'66554 33221', type:'Broker',    products:'Samsung TV × 5, AC × 2',         qty:7,  amount:'₹1,45,970',payment:'Paid',    payMethod:'Razorpay', status:'Shipped',   statusClass:'shipped',   date:'Apr 6'           },
    { id:'#MKR-00121', name:'Deepa Menon',  email:'deepa.m@gmail.com',   phone:'55443 22110', type:'Retail',    products:'Libas Kurta × 1',                qty:1,  amount:'₹649',     payment:'Paid',    payMethod:'UPI',      status:'Delivered', statusClass:'delivered', date:'Apr 5'           },
    { id:'#MKR-00120', name:'Raj Verma',    email:'raj.v@gmail.com',     phone:'44332 11009', type:'Wholesale', products:'Nike T-Shirt × 20',              qty:20, amount:'₹14,980',  payment:'Paid',    payMethod:'Bank',     status:'Cancelled', statusClass:'cancelled', date:'Apr 5'           },
    { id:'#MKR-00119', name:'Anita Singh',  email:'anita.s@gmail.com',   phone:'33221 00998', type:'Retail',    products:'Adidas Shoes × 1',               qty:1,  amount:'₹3,499',   payment:'Paid',    payMethod:'Card',     status:'Return',    statusClass:'return',    date:'Apr 4'           },
  ];

  get filtered(): Order[] {
    return this.allOrders.filter(o => {
      const matchTab = this.activeTab === 'all' || o.statusClass === this.activeTab;
      const q = this.searchQ.toLowerCase();
      const matchSearch = !q || o.id.toLowerCase().includes(q) || o.name.toLowerCase().includes(q);
      return matchTab && matchSearch;
    });
  }

  setTab(key: string) { this.activeTab = key; }
  viewOrder(o: Order) { this.router.navigate(['/orders', o.id]); }
  closeDetail() { this.selectedOrder = null; }
  openStatusModal(o: Order) { this.selectedOrder = o; this.newStatus = o.status; this.showStatusModal = true; }

  applyStatus() {
    if (this.selectedOrder && this.newStatus) {
      this.selectedOrder.status = this.newStatus;
      this.selectedOrder.statusClass = this.newStatus.toLowerCase();
    }
    this.showStatusModal = false;
    this.selectedOrder = null;
  }

  pipelineStep(status: string): number {
    return this.pipeline.indexOf(status);
  }
}
