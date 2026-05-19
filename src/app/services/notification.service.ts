import { Injectable, signal, computed } from '@angular/core';

export type NotifType = 'payment' | 'stock' | 'message';

export interface AppNotif {
  id:    string;
  type:  NotifType;
  icon:  string;
  title: string;
  body:  string;
  time:  Date;
  read:  boolean;
}

const SAMPLE: AppNotif[] = [
  { id: 'n1', type: 'payment', icon: 'payments',       title: 'Cash Payment Received',  body: 'Ravi Kumar paid ₹32,990 for Whirlpool AC 1.5T',         time: new Date(Date.now() - 5   * 60000),   read: false },
  { id: 'n2', type: 'stock',   icon: 'warning',        title: 'Low Stock Alert',        body: 'Samsung 32" Smart TV — only 1 unit remaining',          time: new Date(Date.now() - 18  * 60000),   read: false },
  { id: 'n3', type: 'payment', icon: 'smartphone',     title: 'UPI Payment Received',   body: 'Priya Sharma paid ₹14,490 for LG 190L Fridge',          time: new Date(Date.now() - 45  * 60000),   read: false },
  { id: 'n4', type: 'stock',   icon: 'inventory_2',    title: 'Out of Stock',           body: 'Bajaj Cooler PX 97 — stock is now zero',                time: new Date(Date.now() - 2   * 3600000), read: true  },
  { id: 'n5', type: 'message', icon: 'support_agent',  title: 'Customer Enquiry',       body: 'Meena Patel asked about LG AC price and availability',  time: new Date(Date.now() - 3   * 3600000), read: false },
  { id: 'n6', type: 'payment', icon: 'credit_card',    title: 'Card Payment Received',  body: 'Arun Nair paid ₹18,490 for LG Washing Machine 7kg',     time: new Date(Date.now() - 4   * 3600000), read: true  },
  { id: 'n7', type: 'message', icon: 'chat',           title: 'Customer Enquiry',       body: 'Sunita Rao asked about Samsung Fridge warranty period', time: new Date(Date.now() - 5   * 3600000), read: true  },
];

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private _items = signal<AppNotif[]>(SAMPLE);

  all         = computed(() => this._items());
  payments    = computed(() => this._items().filter(n => n.type === 'payment'));
  stockAlerts = computed(() => this._items().filter(n => n.type === 'stock'));
  messages    = computed(() => this._items().filter(n => n.type === 'message'));

  totalUnread   = computed(() => this._items().filter(n => !n.read).length);
  payUnread     = computed(() => this._items().filter(n => n.type === 'payment' && !n.read).length);
  stockUnread   = computed(() => this._items().filter(n => n.type === 'stock'   && !n.read).length);
  messageUnread = computed(() => this._items().filter(n => n.type === 'message' && !n.read).length);

  markRead(id: string) {
    this._items.update(list => list.map(n => n.id === id ? { ...n, read: true } : n));
  }

  markAllRead() {
    this._items.update(list => list.map(n => ({ ...n, read: true })));
  }

  push(type: NotifType, icon: string, title: string, body: string) {
    const notif: AppNotif = {
      id: `n${Date.now()}`, type, icon, title, body,
      time: new Date(), read: false
    };
    this._items.update(list => [notif, ...list]);
  }

  timeAgo(d: Date): string {
    const diff = Math.floor((Date.now() - d.getTime()) / 1000);
    if (diff < 60)         return 'Just now';
    if (diff < 3600)       return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400)      return `${Math.floor(diff / 3600)}h ago`;
    return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short' });
  }
}
