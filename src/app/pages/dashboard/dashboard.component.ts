import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StatDetailPanelComponent } from '../../shared/stat-detail-panel/stat-detail-panel.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, StatDetailPanelComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  activePanel: string | null = null;

  openPanel(type: string) { this.activePanel = type; }
  closePanel() { this.activePanel = null; }

  stats = [
    { icon: '🛒', value: '42',    label: 'Orders Today',    change: '▲ 18% vs yesterday', color: 'blue',   trend: 'up', panelType: 'orders' },
    { icon: '💰', value: '₹84.2k', label: 'Revenue Today',  change: '▲ 24% vs yesterday', color: 'green',  trend: 'up', panelType: 'revenue' },
    { icon: '👥', value: '128',   label: 'New Customers',   change: '▼ 6% vs yesterday',  color: 'orange', trend: 'dn', panelType: 'customers' },
    { icon: '📦', value: '847',   label: 'Active Products', change: '▲ 3 today',           color: 'purple', trend: 'up', panelType: 'products' },
  ];

  revenueBars = [
    { pct: 45, label: 'Mar 26', revenue: '₹37.9k' },
    { pct: 59, label: 'Mar 27', revenue: '₹49.7k' },
    { pct: 38, label: 'Mar 28', revenue: '₹32.0k' },
    { pct: 73, label: 'Mar 29', revenue: '₹61.4k' },
    { pct: 50, label: 'Mar 30', revenue: '₹42.1k' },
    { pct: 82, label: 'Mar 31', revenue: '₹69.0k' },
    { pct: 64, label: 'Apr 1',  revenue: '₹53.8k' },
    { pct: 40, label: 'Apr 2',  revenue: '₹33.6k' },
    { pct: 85, label: 'Apr 3',  revenue: '₹71.5k' },
    { pct: 56, label: 'Apr 4',  revenue: '₹47.1k' },
    { pct: 77, label: 'Apr 5',  revenue: '₹64.8k' },
    { pct: 46, label: 'Apr 6',  revenue: '₹38.7k' },
    { pct: 71, label: 'Apr 7',  revenue: '₹59.7k' },
    { pct: 100, label: 'Today', revenue: '₹84.2k', today: true },
  ];

  categoryBars = [
    { name: 'Electronics', pct: '85%', color: '#2874F0', value: '₹40k' },
    { name: "Men's",       pct: '72%', color: '#7C3AED', value: '₹34k' },
    { name: "Women's",     pct: '58%', color: '#FF9F00', value: '₹27k' },
    { name: 'Appliances',  pct: '45%', color: '#388E3C', value: '₹21k' },
    { name: 'Kids',        pct: '30%', color: '#EC4899', value: '₹14k' },
  ];

  recentOrders = [
    { id: '#MKR-00124', name: 'Ravi Kumar',   email: 'ravi.k@gmail.com',   type: 'Retail',    amount: '₹999',    status: 'Paid',    statusClass: 'paid',    action: 'Process' },
    { id: '#MKR-00125', name: 'Priya Sharma', email: 'priya.s@outlook.com',type: 'Wholesale', amount: '₹15,999', status: 'Pending', statusClass: 'pending', action: 'Process' },
    { id: '#MKR-00126', name: 'Meena Patel',  email: 'meena.p@yahoo.com',  type: 'Broker',    amount: '₹42,500', status: 'Shipped', statusClass: 'shipped', action: 'Track'   },
    { id: '#MKR-00127', name: 'Arun Nair',    email: 'arun.n@gmail.com',   type: 'Retail',    amount: '₹3,499',  status: 'Paid',    statusClass: 'paid',    action: 'Process' },
  ];

  stockAlerts = [
    { icon: '👔', title: 'Nike Polo T-Shirt — Blue, Size M',      sub: '2 units remaining · SKU: NK-POLO-BL-M', action: 'Restock', level: 'warn'   },
    { icon: '📺', title: 'Samsung 32" Smart TV — Black',           sub: '1 unit remaining · SKU: SAM-TV-32-BL',  action: 'Restock', level: 'warn'   },
    { icon: '👟', title: 'Adidas Running Shoes — White, Size 9',   sub: 'Out of stock · SKU: ADI-RUN-WH-9',      action: 'Urgent',  level: 'danger' },
  ];
}
