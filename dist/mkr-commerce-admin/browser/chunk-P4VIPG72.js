import {
  __spreadProps,
  __spreadValues,
  computed,
  signal,
  ɵɵdefineInjectable
} from "./chunk-PEVOVQSE.js";

// src/app/services/notification.service.ts
var SAMPLE = [
  { id: "n1", type: "payment", icon: "payments", title: "Cash Payment Received", body: "Ravi Kumar paid \u20B932,990 for Whirlpool AC 1.5T", time: new Date(Date.now() - 5 * 6e4), read: false },
  { id: "n2", type: "stock", icon: "warning", title: "Low Stock Alert", body: 'Samsung 32" Smart TV \u2014 only 1 unit remaining', time: new Date(Date.now() - 18 * 6e4), read: false },
  { id: "n3", type: "payment", icon: "smartphone", title: "UPI Payment Received", body: "Priya Sharma paid \u20B914,490 for LG 190L Fridge", time: new Date(Date.now() - 45 * 6e4), read: false },
  { id: "n4", type: "stock", icon: "inventory_2", title: "Out of Stock", body: "Bajaj Cooler PX 97 \u2014 stock is now zero", time: new Date(Date.now() - 2 * 36e5), read: true },
  { id: "n5", type: "message", icon: "support_agent", title: "Customer Enquiry", body: "Meena Patel asked about LG AC price and availability", time: new Date(Date.now() - 3 * 36e5), read: false },
  { id: "n6", type: "payment", icon: "credit_card", title: "Card Payment Received", body: "Arun Nair paid \u20B918,490 for LG Washing Machine 7kg", time: new Date(Date.now() - 4 * 36e5), read: true },
  { id: "n7", type: "message", icon: "chat", title: "Customer Enquiry", body: "Sunita Rao asked about Samsung Fridge warranty period", time: new Date(Date.now() - 5 * 36e5), read: true }
];
var NotificationService = class _NotificationService {
  _items = signal(SAMPLE);
  all = computed(() => this._items());
  payments = computed(() => this._items().filter((n) => n.type === "payment"));
  stockAlerts = computed(() => this._items().filter((n) => n.type === "stock"));
  messages = computed(() => this._items().filter((n) => n.type === "message"));
  totalUnread = computed(() => this._items().filter((n) => !n.read).length);
  payUnread = computed(() => this._items().filter((n) => n.type === "payment" && !n.read).length);
  stockUnread = computed(() => this._items().filter((n) => n.type === "stock" && !n.read).length);
  messageUnread = computed(() => this._items().filter((n) => n.type === "message" && !n.read).length);
  markRead(id) {
    this._items.update((list) => list.map((n) => n.id === id ? __spreadProps(__spreadValues({}, n), { read: true }) : n));
  }
  markAllRead() {
    this._items.update((list) => list.map((n) => __spreadProps(__spreadValues({}, n), { read: true })));
  }
  push(type, icon, title, body) {
    const notif = {
      id: `n${Date.now()}`,
      type,
      icon,
      title,
      body,
      time: /* @__PURE__ */ new Date(),
      read: false
    };
    this._items.update((list) => [notif, ...list]);
  }
  timeAgo(d) {
    const diff = Math.floor((Date.now() - d.getTime()) / 1e3);
    if (diff < 60)
      return "Just now";
    if (diff < 3600)
      return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400)
      return `${Math.floor(diff / 3600)}h ago`;
    return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short" });
  }
  static \u0275fac = function NotificationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationService, factory: _NotificationService.\u0275fac, providedIn: "root" });
};

export {
  NotificationService
};
//# sourceMappingURL=chunk-P4VIPG72.js.map
