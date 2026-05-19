import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface StatDetail {
  type: 'orders' | 'revenue' | 'customers' | 'products';
}

export const STAT_DATA: Record<string, any> = {
  orders: {
    title: 'Orders — Today vs Yesterday',
    todayLabel: 'Today (Apr 8)',
    yestLabel: 'Yesterday (Apr 7)',
    todayVal: 42,
    yestVal: 36,
    unit: '',
    pct: '+18%',
    trend: 'up',
    diff: '+6 orders',
    hourly: [
      { h: '6am',  t: 1, y: 1 }, { h: '7am',  t: 2, y: 1 }, { h: '8am',  t: 3, y: 2 },
      { h: '9am',  t: 5, y: 4 }, { h: '10am', t: 6, y: 5 }, { h: '11am', t: 5, y: 4 },
      { h: '12pm', t: 4, y: 4 }, { h: '1pm',  t: 3, y: 3 }, { h: '2pm',  t: 4, y: 3 },
      { h: '3pm',  t: 3, y: 2 }, { h: '4pm',  t: 4, y: 3 }, { h: '5pm',  t: 2, y: 4 },
    ],
    byType: [
      { label: 'Retail',    icon: '🛍️', today: 25, yest: 21, unit: '' },
      { label: 'Wholesale', icon: '🏪', today: 12, yest: 10, unit: '' },
      { label: 'Broker',    icon: '🤝', today: 5,  yest: 5,  unit: '' },
    ],
    byCategory: [
      { label: 'Electronics', icon: '💻', today: 14, yest: 10, color: '#2874F0' },
      { label: "Men's",       icon: '👔', today: 11, yest: 9,  color: '#7C3AED' },
      { label: "Women's",     icon: '👗', today: 9,  yest: 8,  color: '#FF9F00' },
      { label: 'Appliances',  icon: '❄️', today: 5,  yest: 6,  color: '#388E3C' },
      { label: 'Kids',        icon: '👶', today: 3,  yest: 3,  color: '#EC4899' },
    ],
  },
  revenue: {
    title: 'Revenue — Today vs Yesterday',
    todayLabel: 'Today (Apr 8)',
    yestLabel: 'Yesterday (Apr 7)',
    todayVal: 84200,
    yestVal: 67900,
    unit: '₹',
    pct: '+24%',
    trend: 'up',
    diff: '+₹16,300',
    hourly: [
      { h: '6am',  t: 2,  y: 1  }, { h: '7am',  t: 4,  y: 2  }, { h: '8am',  t: 7,  y: 5  },
      { h: '9am',  t: 12, y: 9  }, { h: '10am', t: 14, y: 11 }, { h: '11am', t: 11, y: 9  },
      { h: '12pm', t: 9,  y: 8  }, { h: '1pm',  t: 7,  y: 7  }, { h: '2pm',  t: 8,  y: 6  },
      { h: '3pm',  t: 6,  y: 5  }, { h: '4pm',  t: 9,  y: 7  }, { h: '5pm',  t: 5,  y: 8  },
    ],
    byType: [
      { label: 'Retail',    icon: '🛍️', today: 28400, yest: 22100, unit: '₹' },
      { label: 'Wholesale', icon: '🏪', today: 38500, yest: 31200, unit: '₹' },
      { label: 'Broker',    icon: '🤝', today: 17300, yest: 14600, unit: '₹' },
    ],
    byCategory: [
      { label: 'Electronics', icon: '💻', today: 38000, yest: 28000, color: '#2874F0' },
      { label: "Men's",       icon: '👔', today: 16000, yest: 13000, color: '#7C3AED' },
      { label: "Women's",     icon: '👗', today: 14000, yest: 12000, color: '#FF9F00' },
      { label: 'Appliances',  icon: '❄️', today: 10200, yest: 9900,  color: '#388E3C' },
      { label: 'Kids',        icon: '👶', today: 6000,  yest: 5000,  color: '#EC4899' },
    ],
  },
  customers: {
    title: 'New Customers — Today vs Yesterday',
    todayLabel: 'Today (Apr 8)',
    yestLabel: 'Yesterday (Apr 7)',
    todayVal: 128,
    yestVal: 136,
    unit: '',
    pct: '-6%',
    trend: 'dn',
    diff: '-8 signups',
    hourly: [
      { h: '6am',  t: 4, y: 5 }, { h: '7am',  t: 8, y: 10 }, { h: '8am',  t: 12, y: 14 },
      { h: '9am',  t: 16, y: 18 }, { h: '10am', t: 18, y: 19 }, { h: '11am', t: 14, y: 16 },
      { h: '12pm', t: 12, y: 14 }, { h: '1pm',  t: 10, y: 11 }, { h: '2pm',  t: 11, y: 10 },
      { h: '3pm',  t: 9,  y: 10 }, { h: '4pm',  t: 8,  y: 10 }, { h: '5pm',  t: 6,  y: 9  },
    ],
    byType: [
      { label: 'Retail',    icon: '🛍️', today: 95,  yest: 102, unit: '' },
      { label: 'Wholesale', icon: '🏪', today: 26,  yest: 24,  unit: '' },
      { label: 'Broker',    icon: '🤝', today: 7,   yest: 10,  unit: '' },
    ],
    byCategory: [
      { label: 'Via Google',    icon: '🔍', today: 54, yest: 58, color: '#2874F0' },
      { label: 'Direct',        icon: '🔗', today: 38, yest: 41, color: '#7C3AED' },
      { label: 'Via OTP/Phone', icon: '📱', today: 24, yest: 25, color: '#FF9F00' },
      { label: 'Via Referral',  icon: '🎁', today: 12, yest: 12, color: '#388E3C' },
    ],
  },
  products: {
    title: 'Active Products — Today vs Yesterday',
    todayLabel: 'Today (Apr 8)',
    yestLabel: 'Yesterday (Apr 7)',
    todayVal: 847,
    yestVal: 844,
    unit: '',
    pct: '+3',
    trend: 'up',
    diff: '+3 products added',
    hourly: [],
    byType: [
      { label: 'Active',   icon: '✅', today: 812, yest: 809, unit: '' },
      { label: 'Inactive', icon: '⏸️', today: 35,  yest: 35,  unit: '' },
    ],
    byCategory: [
      { label: 'Electronics', icon: '💻', today: 210, yest: 208, color: '#2874F0' },
      { label: "Men's",       icon: '👔', today: 198, yest: 197, color: '#7C3AED' },
      { label: "Women's",     icon: '👗', today: 176, yest: 175, color: '#FF9F00' },
      { label: 'Appliances',  icon: '❄️', today: 143, yest: 143, color: '#388E3C' },
      { label: 'Kids',        icon: '👶', today: 120, yest: 121, color: '#EC4899' },
    ],
  },
};

@Component({
  selector: 'app-stat-detail-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stat-detail-panel.component.html',
  styleUrl: './stat-detail-panel.component.scss'
})
export class StatDetailPanelComponent {
  @Input() type: string | null = null;
  @Output() closed = new EventEmitter<void>();

  get data() { return this.type ? STAT_DATA[this.type] : null; }

  get isOpen() { return !!this.type; }

  pct(today: number, yest: number): string {
    if (yest === 0) return '—';
    const d = ((today - yest) / yest) * 100;
    return (d >= 0 ? '+' : '') + d.toFixed(0) + '%';
  }

  trend(today: number, yest: number): 'up' | 'dn' | 'eq' {
    return today > yest ? 'up' : today < yest ? 'dn' : 'eq';
  }

  maxHourly(data: any[]): number {
    return Math.max(...data.map(h => Math.max(h.t, h.y)), 1);
  }

  barH(val: number, max: number): number {
    return Math.round((val / max) * 80);
  }

  formatVal(val: number, unit: string): string {
    if (unit === '₹') {
      if (val >= 1000) return '₹' + (val / 1000).toFixed(1) + 'k';
      return '₹' + val;
    }
    return String(val);
  }

  maxCat(data: any[]): number {
    return Math.max(...data.map(c => Math.max(c.today, c.yest)), 1);
  }

  close() { this.closed.emit(); }
}
