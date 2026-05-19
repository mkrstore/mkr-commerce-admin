import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface KpiCard { label: string; value: string; sub: string; trend: number; icon: string; color: string; }
interface BarItem { label: string; value: number; pct: number; color: string; }
interface DayBar { day: string; rev: number; orders: number; pct: number; }
interface TopProduct { rank: number; icon: string; name: string; category: string; sold: number; revenue: string; growth: number; }
interface HourBar { hour: string; val: number; pct: number; }

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss'
})
export class AnalyticsComponent {
  range = '30d';
  ranges = [
    { key: '7d', label: '7 Days' },
    { key: '30d', label: '30 Days' },
    { key: '90d', label: '90 Days' },
    { key: '1y', label: 'This Year' },
  ];

  kpis: KpiCard[] = [
    { label: 'Total Revenue', value: '₹8,42,390', sub: 'vs ₹7,12,480 last period', trend: 18.2, icon: '💰', color: '#2874F0' },
    { label: 'Total Orders', value: '1,284', sub: 'vs 1,098 last period', trend: 16.9, icon: '🛒', color: '#7C3AED' },
    { label: 'New Customers', value: '342', sub: 'vs 278 last period', trend: 23.0, icon: '👥', color: '#059669' },
    { label: 'Avg Order Value', value: '₹6,560', sub: 'vs ₹6,489 last period', trend: 1.1, icon: '📊', color: '#F59E0B' },
    { label: 'Conversion Rate', value: '3.8%', sub: 'vs 3.2% last period', trend: 18.8, icon: '🎯', color: '#EC4899' },
    { label: 'Return Rate', value: '1.4%', sub: 'vs 2.1% last period', trend: -33.3, icon: '↩️', color: '#64748B' },
  ];

  revenueData: DayBar[] = [
    { day: 'Mar 10', rev: 24200, orders: 38, pct: 62 },
    { day: 'Mar 12', rev: 18900, orders: 29, pct: 48 },
    { day: 'Mar 14', rev: 31500, orders: 51, pct: 81 },
    { day: 'Mar 16', rev: 28700, orders: 44, pct: 74 },
    { day: 'Mar 18', rev: 38900, orders: 62, pct: 100 },
    { day: 'Mar 20', rev: 22100, orders: 34, pct: 57 },
    { day: 'Mar 22', rev: 34600, orders: 56, pct: 89 },
    { day: 'Mar 24', rev: 27300, orders: 43, pct: 70 },
    { day: 'Mar 26', rev: 32100, orders: 52, pct: 82 },
    { day: 'Mar 28', rev: 19800, orders: 31, pct: 51 },
    { day: 'Mar 30', rev: 35400, orders: 57, pct: 91 },
    { day: 'Apr 1',  rev: 29900, orders: 48, pct: 77 },
    { day: 'Apr 3',  rev: 33600, orders: 54, pct: 86 },
    { day: 'Apr 5',  rev: 36200, orders: 58, pct: 93 },
    { day: 'Apr 7',  rev: 38100, orders: 61, pct: 98 },
  ];

  categories: BarItem[] = [
    { label: 'Electronics',      value: 312490, pct: 100, color: '#2874F0' },
    { label: "Men's Clothing",   value: 198340, pct: 63,  color: '#7C3AED' },
    { label: 'Appliances',       value: 187650, pct: 60,  color: '#059669' },
    { label: "Women's Clothing", value: 142300, pct: 46,  color: '#F59E0B' },
    { label: 'Kids',             value: 89210,  pct: 29,  color: '#EC4899' },
  ];

  customerTypes: BarItem[] = [
    { label: 'Retail',    value: 612, pct: 61, color: '#2874F0' },
    { label: 'Wholesale', value: 283, pct: 28, color: '#7C3AED' },
    { label: 'Broker',    value: 112, pct: 11, color: '#059669' },
  ];

  orderStatuses: BarItem[] = [
    { label: 'Delivered',  value: 892, pct: 69, color: '#059669' },
    { label: 'Shipped',    value: 201, pct: 16, color: '#2874F0' },
    { label: 'Confirmed',  value: 112, pct: 9,  color: '#7C3AED' },
    { label: 'Pending',    value: 52,  pct: 4,  color: '#F59E0B' },
    { label: 'Cancelled',  value: 27,  pct: 2,  color: '#E53935' },
  ];

  topProducts: TopProduct[] = [
    { rank: 1, icon: '❄️', name: 'Whirlpool 1.5T AC 5-Star',    category: 'Appliances',        sold: 184, revenue: '₹50,60,000', growth: 34 },
    { rank: 2, icon: '📺', name: 'Samsung 32" Smart TV',         category: 'Electronics',       sold: 156, revenue: '₹24,93,844', growth: 12 },
    { rank: 3, icon: '💻', name: 'HP Pavilion 15 Laptop',        category: 'Electronics',       sold: 98,  revenue: '₹53,89,020', growth: 8  },
    { rank: 4, icon: '👗', name: 'Libas Floral Kurta Set',       category: "Women's Clothing",  sold: 420, revenue: '₹2,72,580',  growth: 44 },
    { rank: 5, icon: '📱', name: 'Samsung Galaxy M34 5G',        category: 'Electronics',       sold: 89,  revenue: '₹14,23,911', growth: 21 },
    { rank: 6, icon: '👔', name: 'Nike Polo T-Shirt Blue',       category: "Men's Clothing",    sold: 312, revenue: '₹3,11,688',  growth: -5 },
    { rank: 7, icon: '🧺', name: 'LG 7kg Washing Machine',      category: 'Appliances',        sold: 74,  revenue: '₹13,68,260', growth: 18 },
    { rank: 8, icon: '👖', name: "Levi's 511 Slim Fit Jeans",   category: "Men's Clothing",    sold: 198, revenue: '₹4,94,802',  growth: 9  },
  ];

  hourlyTraffic: HourBar[] = [
    { hour: '6A', val: 12, pct: 15 }, { hour: '8A', val: 34, pct: 43 }, { hour: '10A', val: 58, pct: 73 },
    { hour: '12P', val: 78, pct: 98 }, { hour: '2P', val: 80, pct: 100 }, { hour: '4P', val: 67, pct: 84 },
    { hour: '6P', val: 71, pct: 89 }, { hour: '8P', val: 54, pct: 68 }, { hour: '10P', val: 28, pct: 35 },
  ];

  paymentMethods: BarItem[] = [
    { label: 'UPI',       value: 512, pct: 40, color: '#2874F0' },
    { label: 'Razorpay',  value: 321, pct: 25, color: '#7C3AED' },
    { label: 'Bank',      value: 257, pct: 20, color: '#059669' },
    { label: 'COD',       value: 128, pct: 10, color: '#F59E0B' },
    { label: 'Card',      value: 66,  pct: 5,  color: '#EC4899' },
  ];

  setRange(r: string) { this.range = r; }

  formatRevenue(n: number): string {
    return '₹' + (n / 1000).toFixed(1) + 'K';
  }
}
