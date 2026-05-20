import {
  CommonModule,
  DecimalPipe,
  NgForOf
} from "./chunk-MBTJ2QPL.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-PEVOVQSE.js";

// src/app/pages/analytics/analytics.component.ts
function AnalyticsComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function AnalyticsComponent_button_8_Template_button_click_0_listener() {
      const r_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setRange(r_r2.key));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("on", ctx_r2.range === r_r2.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r2.label);
  }
}
function AnalyticsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 44)(4, "div", 45);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 46);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 47);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 48);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const k_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", k_r4.color + "18")("color", k_r4.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(k_r4.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(k_r4.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(k_r4.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(k_r4.sub);
    \u0275\u0275advance();
    \u0275\u0275classProp("up", k_r4.trend > 0)("dn", k_r4.trend < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", k_r4.trend > 0 ? "\u25B2" : "\u25BC", " ", \u0275\u0275pipeBind2(12, 14, k_r4.trend, "1.1-1"), "% ");
  }
}
function AnalyticsComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50)(2, "div", 51);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 52);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "div", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatRevenue(d_r5.rev));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", d_r5.orders, " orders");
    \u0275\u0275advance();
    \u0275\u0275styleProp("height", d_r5.pct, "%");
  }
}
function AnalyticsComponent_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r6.day);
  }
}
function AnalyticsComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56);
    \u0275\u0275element(2, "span", 57);
    \u0275\u0275elementStart(3, "span", 58);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 59);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 60);
    \u0275\u0275element(8, "div", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 62);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", s_r7.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r7.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r7.value);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", s_r7.pct, "%")("background", s_r7.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", s_r7.pct, "%");
  }
}
function AnalyticsComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "div", 64)(2, "span", 65);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 66);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 67);
    \u0275\u0275element(7, "div", 68);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r8 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r8.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", (c_r8.value / 1e3).toFixed(0), "K");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", c_r8.pct, "%")("background", c_r8.color);
  }
}
function AnalyticsComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 70);
    \u0275\u0275element(2, "span", 71);
    \u0275\u0275elementStart(3, "span", 72);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 73);
    \u0275\u0275element(6, "div", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 75)(8, "span", 76);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 77);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", t_r9.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r9.label);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", t_r9.pct, "%")("background", t_r9.color);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", t_r9.pct, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r9.value);
  }
}
function AnalyticsComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78)(1, "div", 79)(2, "span", 80);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 81);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 82);
    \u0275\u0275element(7, "div", 83);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r10 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r10.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r10.value);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", p_r10.pct, "%")("background", p_r10.color);
  }
}
function AnalyticsComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275element(1, "div", 85);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const h_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("height", h_r11.pct, "%");
  }
}
function AnalyticsComponent_span_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const h_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(h_r12.hour);
  }
}
function AnalyticsComponent_tr_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 87);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "div", 88)(6, "span", 89);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 90);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "td")(11, "span", 91);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 39);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 92);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 39)(18, "span", 93);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r13 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classProp("top3", p_r13.rank <= 3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r13.rank);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r13.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r13.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r13.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r13.sold);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r13.revenue);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("up", p_r13.growth > 0)("dn", p_r13.growth < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", p_r13.growth > 0 ? "\u25B2" : "\u25BC", " ", \u0275\u0275pipeBind2(20, 14, p_r13.growth, "1.0-0"), "% ");
  }
}
var AnalyticsComponent = class _AnalyticsComponent {
  range = "30d";
  ranges = [
    { key: "7d", label: "7 Days" },
    { key: "30d", label: "30 Days" },
    { key: "90d", label: "90 Days" },
    { key: "1y", label: "This Year" }
  ];
  kpis = [
    { label: "Total Revenue", value: "\u20B98,42,390", sub: "vs \u20B97,12,480 last period", trend: 18.2, icon: "\u{1F4B0}", color: "#2874F0" },
    { label: "Total Orders", value: "1,284", sub: "vs 1,098 last period", trend: 16.9, icon: "\u{1F6D2}", color: "#7C3AED" },
    { label: "New Customers", value: "342", sub: "vs 278 last period", trend: 23, icon: "\u{1F465}", color: "#059669" },
    { label: "Avg Order Value", value: "\u20B96,560", sub: "vs \u20B96,489 last period", trend: 1.1, icon: "\u{1F4CA}", color: "#F59E0B" },
    { label: "Conversion Rate", value: "3.8%", sub: "vs 3.2% last period", trend: 18.8, icon: "\u{1F3AF}", color: "#EC4899" },
    { label: "Return Rate", value: "1.4%", sub: "vs 2.1% last period", trend: -33.3, icon: "\u21A9\uFE0F", color: "#64748B" }
  ];
  revenueData = [
    { day: "Mar 10", rev: 24200, orders: 38, pct: 62 },
    { day: "Mar 12", rev: 18900, orders: 29, pct: 48 },
    { day: "Mar 14", rev: 31500, orders: 51, pct: 81 },
    { day: "Mar 16", rev: 28700, orders: 44, pct: 74 },
    { day: "Mar 18", rev: 38900, orders: 62, pct: 100 },
    { day: "Mar 20", rev: 22100, orders: 34, pct: 57 },
    { day: "Mar 22", rev: 34600, orders: 56, pct: 89 },
    { day: "Mar 24", rev: 27300, orders: 43, pct: 70 },
    { day: "Mar 26", rev: 32100, orders: 52, pct: 82 },
    { day: "Mar 28", rev: 19800, orders: 31, pct: 51 },
    { day: "Mar 30", rev: 35400, orders: 57, pct: 91 },
    { day: "Apr 1", rev: 29900, orders: 48, pct: 77 },
    { day: "Apr 3", rev: 33600, orders: 54, pct: 86 },
    { day: "Apr 5", rev: 36200, orders: 58, pct: 93 },
    { day: "Apr 7", rev: 38100, orders: 61, pct: 98 }
  ];
  categories = [
    { label: "Electronics", value: 312490, pct: 100, color: "#2874F0" },
    { label: "Men's Clothing", value: 198340, pct: 63, color: "#7C3AED" },
    { label: "Appliances", value: 187650, pct: 60, color: "#059669" },
    { label: "Women's Clothing", value: 142300, pct: 46, color: "#F59E0B" },
    { label: "Kids", value: 89210, pct: 29, color: "#EC4899" }
  ];
  customerTypes = [
    { label: "Retail", value: 612, pct: 61, color: "#2874F0" },
    { label: "Wholesale", value: 283, pct: 28, color: "#7C3AED" },
    { label: "Broker", value: 112, pct: 11, color: "#059669" }
  ];
  orderStatuses = [
    { label: "Delivered", value: 892, pct: 69, color: "#059669" },
    { label: "Shipped", value: 201, pct: 16, color: "#2874F0" },
    { label: "Confirmed", value: 112, pct: 9, color: "#7C3AED" },
    { label: "Pending", value: 52, pct: 4, color: "#F59E0B" },
    { label: "Cancelled", value: 27, pct: 2, color: "#E53935" }
  ];
  topProducts = [
    { rank: 1, icon: "\u2744\uFE0F", name: "Whirlpool 1.5T AC 5-Star", category: "Appliances", sold: 184, revenue: "\u20B950,60,000", growth: 34 },
    { rank: 2, icon: "\u{1F4FA}", name: 'Samsung 32" Smart TV', category: "Electronics", sold: 156, revenue: "\u20B924,93,844", growth: 12 },
    { rank: 3, icon: "\u{1F4BB}", name: "HP Pavilion 15 Laptop", category: "Electronics", sold: 98, revenue: "\u20B953,89,020", growth: 8 },
    { rank: 4, icon: "\u{1F457}", name: "Libas Floral Kurta Set", category: "Women's Clothing", sold: 420, revenue: "\u20B92,72,580", growth: 44 },
    { rank: 5, icon: "\u{1F4F1}", name: "Samsung Galaxy M34 5G", category: "Electronics", sold: 89, revenue: "\u20B914,23,911", growth: 21 },
    { rank: 6, icon: "\u{1F454}", name: "Nike Polo T-Shirt Blue", category: "Men's Clothing", sold: 312, revenue: "\u20B93,11,688", growth: -5 },
    { rank: 7, icon: "\u{1F9FA}", name: "LG 7kg Washing Machine", category: "Appliances", sold: 74, revenue: "\u20B913,68,260", growth: 18 },
    { rank: 8, icon: "\u{1F456}", name: "Levi's 511 Slim Fit Jeans", category: "Men's Clothing", sold: 198, revenue: "\u20B94,94,802", growth: 9 }
  ];
  hourlyTraffic = [
    { hour: "6A", val: 12, pct: 15 },
    { hour: "8A", val: 34, pct: 43 },
    { hour: "10A", val: 58, pct: 73 },
    { hour: "12P", val: 78, pct: 98 },
    { hour: "2P", val: 80, pct: 100 },
    { hour: "4P", val: 67, pct: 84 },
    { hour: "6P", val: 71, pct: 89 },
    { hour: "8P", val: 54, pct: 68 },
    { hour: "10P", val: 28, pct: 35 }
  ];
  paymentMethods = [
    { label: "UPI", value: 512, pct: 40, color: "#2874F0" },
    { label: "Razorpay", value: 321, pct: 25, color: "#7C3AED" },
    { label: "Bank", value: 257, pct: 20, color: "#059669" },
    { label: "COD", value: 128, pct: 10, color: "#F59E0B" },
    { label: "Card", value: 66, pct: 5, color: "#EC4899" }
  ];
  setRange(r) {
    this.range = r;
  }
  formatRevenue(n) {
    return "\u20B9" + (n / 1e3).toFixed(1) + "K";
  }
  static \u0275fac = function AnalyticsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnalyticsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnalyticsComponent, selectors: [["app-analytics"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 89, vars: 11, consts: [[1, "an-page"], [1, "an-toolbar"], [1, "an-toolbar-left"], [1, "an-title"], [1, "an-sub"], [1, "an-range-tabs"], ["class", "rtab", 3, "on", "click", 4, "ngFor", "ngForOf"], [1, "export-btn"], [1, "kpi-grid"], ["class", "kpi-card", 4, "ngFor", "ngForOf"], [1, "an-row", "two-col"], [1, "an-card", "span2"], [1, "an-card-head"], [1, "an-card-title"], [1, "an-card-sub"], [1, "an-card-body"], [1, "rev-chart-wrap"], [1, "rev-chart-bars"], ["class", "rev-col", 4, "ngFor", "ngForOf"], [1, "rev-chart-days"], ["class", "rev-day", 4, "ngFor", "ngForOf"], [1, "an-card"], [1, "status-bars"], ["class", "sbar-row", 4, "ngFor", "ngForOf"], [1, "cat-bars-an"], ["class", "cat-bar-an", 4, "ngFor", "ngForOf"], [1, "an-row", "three-col"], [1, "type-rings"], ["class", "type-ring-row", 4, "ngFor", "ngForOf"], [1, "pay-method-bars"], ["class", "pmb-item", 4, "ngFor", "ngForOf"], [1, "hour-chart"], [1, "hour-bars"], ["class", "hour-col", 4, "ngFor", "ngForOf"], [1, "hour-labels"], ["class", "hlabel", 4, "ngFor", "ngForOf"], [1, "an-card", "full-card"], [1, "table-scroll"], [1, "an-table"], [1, "num"], [4, "ngFor", "ngForOf"], [1, "rtab", 3, "click"], [1, "kpi-card"], [1, "kpi-icon"], [1, "kpi-body"], [1, "kpi-label"], [1, "kpi-value"], [1, "kpi-sub"], [1, "kpi-trend"], [1, "rev-col"], [1, "rev-tip"], [1, "rev-tip-val"], [1, "rev-tip-orders"], [1, "rev-bar"], [1, "rev-day"], [1, "sbar-row"], [1, "sbar-meta"], [1, "sbar-dot"], [1, "sbar-label"], [1, "sbar-count"], [1, "sbar-track"], [1, "sbar-fill"], [1, "sbar-pct"], [1, "cat-bar-an"], [1, "cat-bar-an-head"], [1, "cat-bar-an-label"], [1, "cat-bar-an-val"], [1, "cat-bar-an-track"], [1, "cat-bar-an-fill"], [1, "type-ring-row"], [1, "trr-info"], [1, "trr-dot"], [1, "trr-label"], [1, "trr-bar-wrap"], [1, "trr-bar"], [1, "trr-right"], [1, "trr-pct"], [1, "trr-count"], [1, "pmb-item"], [1, "pmb-head"], [1, "pmb-label"], [1, "pmb-count"], [1, "pmb-track"], [1, "pmb-fill"], [1, "hour-col"], [1, "hour-bar"], [1, "hlabel"], [1, "rank"], [1, "prod-cell-an"], [1, "prod-icon-an"], [1, "prod-name-an"], [1, "cat-chip-an"], [1, "num", "bold"], [1, "growth-badge"]], template: function AnalyticsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4, "Analytics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6, "Performance overview for your store");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 5);
      \u0275\u0275template(8, AnalyticsComponent_button_8_Template, 2, 3, "button", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 7);
      \u0275\u0275text(10, "\u2B07 Export");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 8);
      \u0275\u0275template(12, AnalyticsComponent_div_12_Template, 13, 17, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "span", 13);
      \u0275\u0275text(17, "Revenue Trend");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span", 14);
      \u0275\u0275text(19, "Last 30 days \xB7 hover bars for details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 15)(21, "div", 16)(22, "div", 17);
      \u0275\u0275template(23, AnalyticsComponent_div_23_Template, 7, 4, "div", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 19);
      \u0275\u0275template(25, AnalyticsComponent_span_25_Template, 2, 1, "span", 20);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(26, "div", 21)(27, "div", 12)(28, "span", 13);
      \u0275\u0275text(29, "Order Status");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 15)(31, "div", 22);
      \u0275\u0275template(32, AnalyticsComponent_div_32_Template, 11, 9, "div", 23);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "div", 21)(34, "div", 12)(35, "span", 13);
      \u0275\u0275text(36, "Sales by Category");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 15)(38, "div", 24);
      \u0275\u0275template(39, AnalyticsComponent_div_39_Template, 8, 6, "div", 25);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(40, "div", 26)(41, "div", 21)(42, "div", 12)(43, "span", 13);
      \u0275\u0275text(44, "Customer Type");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 15)(46, "div", 27);
      \u0275\u0275template(47, AnalyticsComponent_div_47_Template, 12, 9, "div", 28);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "div", 21)(49, "div", 12)(50, "span", 13);
      \u0275\u0275text(51, "Payment Methods");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 15)(53, "div", 29);
      \u0275\u0275template(54, AnalyticsComponent_div_54_Template, 8, 6, "div", 30);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(55, "div", 21)(56, "div", 12)(57, "span", 13);
      \u0275\u0275text(58, "Peak Order Hours");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div", 15)(60, "div", 31)(61, "div", 32);
      \u0275\u0275template(62, AnalyticsComponent_div_62_Template, 2, 2, "div", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 34);
      \u0275\u0275template(64, AnalyticsComponent_span_64_Template, 2, 1, "span", 35);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(65, "div", 36)(66, "div", 12)(67, "span", 13);
      \u0275\u0275text(68, "Top Products by Revenue");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "span", 14);
      \u0275\u0275text(70, "Ranked by total revenue this period");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "div", 37)(72, "table", 38)(73, "thead")(74, "tr")(75, "th");
      \u0275\u0275text(76, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "th");
      \u0275\u0275text(78, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "th");
      \u0275\u0275text(80, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "th", 39);
      \u0275\u0275text(82, "Units Sold");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "th", 39);
      \u0275\u0275text(84, "Revenue");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "th", 39);
      \u0275\u0275text(86, "Growth");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(87, "tbody");
      \u0275\u0275template(88, AnalyticsComponent_tr_88_Template, 21, 17, "tr", 40);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.ranges);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", ctx.kpis);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngForOf", ctx.revenueData);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.revenueData);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngForOf", ctx.orderStatuses);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.customerTypes);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngForOf", ctx.paymentMethods);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.hourlyTraffic);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.hourlyTraffic);
      \u0275\u0275advance(24);
      \u0275\u0275property("ngForOf", ctx.topProducts);
    }
  }, dependencies: [CommonModule, NgForOf, DecimalPipe], styles: ['\n\n.an-page[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.an-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.an-toolbar-left[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.an-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: var(--t1);\n}\n.an-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--t3);\n}\n.an-range-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.rtab[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--t2);\n  background: var(--surface);\n  border: none;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.rtab.on[_ngcontent-%COMP%] {\n  background: var(--blue);\n  color: #fff;\n}\n.rtab[_ngcontent-%COMP%]:hover:not(.on) {\n  background: var(--surface2);\n}\n.export-btn[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  background: var(--surface);\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--t2);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.export-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  color: var(--blue);\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 12px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 16px;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  position: relative;\n  transition: box-shadow 0.2s;\n}\n.kpi-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-md);\n}\n.kpi-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.kpi-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.kpi-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--t3);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 4px;\n}\n.kpi-value[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 900;\n  color: var(--t1);\n  letter-spacing: -1px;\n}\n.kpi-sub[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--t3);\n  margin-top: 3px;\n}\n.kpi-trend[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 7px;\n  border-radius: 20px;\n  white-space: nowrap;\n}\n.kpi-trend.up[_ngcontent-%COMP%] {\n  background: rgba(46, 125, 50, 0.1);\n  color: var(--green);\n}\n.kpi-trend.dn[_ngcontent-%COMP%] {\n  background: rgba(229, 57, 53, 0.1);\n  color: var(--red);\n}\n.an-row[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 14px;\n}\n.two-col[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1fr;\n}\n.three-col[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1fr 1fr;\n}\n.span2[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.an-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n}\n.full-card[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.an-card-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  border-bottom: 1px solid var(--border);\n  gap: 8px;\n}\n.an-card-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 800;\n  color: var(--t1);\n}\n.an-card-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--t3);\n}\n.an-card-body[_ngcontent-%COMP%] {\n  padding: 16px 18px;\n}\n.rev-chart-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.rev-chart-bars[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 6px;\n  height: 140px;\n}\n.rev-col[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n}\n.rev-col[_ngcontent-%COMP%]:hover   .rev-tip[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(-50%) translateY(0);\n}\n.rev-col[_ngcontent-%COMP%]:hover   .rev-bar[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n.rev-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n  background: var(--blue-light);\n  transition: opacity 0.15s;\n  min-height: 4px;\n}\n.rev-tip[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: calc(100% + 6px);\n  left: 50%;\n  transform: translateX(-50%) translateY(4px);\n  background: var(--t1);\n  color: var(--surface);\n  padding: 6px 10px;\n  border-radius: 6px;\n  white-space: nowrap;\n  opacity: 0;\n  transition: all 0.15s;\n  pointer-events: none;\n  z-index: 20;\n}\n.rev-tip[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  border: 5px solid transparent;\n  border-top-color: var(--t1);\n}\n.rev-tip-val[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 800;\n}\n.rev-tip-orders[_ngcontent-%COMP%] {\n  font-size: 10px;\n  opacity: 0.7;\n  margin-top: 1px;\n}\n.rev-chart-days[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.rev-day[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 8px;\n  color: var(--t3);\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.status-bars[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.sbar-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.sbar-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  width: 110px;\n  flex-shrink: 0;\n}\n.sbar-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.sbar-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--t2);\n  flex: 1;\n}\n.sbar-count[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--t1);\n}\n.sbar-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 8px;\n  background: var(--surface2);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.sbar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.5s;\n}\n.sbar-pct[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--t3);\n  width: 32px;\n  text-align: right;\n}\n.cat-bars-an[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.cat-bar-an-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 6px;\n}\n.cat-bar-an-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--t2);\n}\n.cat-bar-an-val[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--t1);\n}\n.cat-bar-an-track[_ngcontent-%COMP%] {\n  height: 8px;\n  background: var(--surface2);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.cat-bar-an-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.5s;\n}\n.type-rings[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.type-ring-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.trr-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  width: 90px;\n  flex-shrink: 0;\n}\n.trr-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n.trr-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--t2);\n}\n.trr-bar-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 10px;\n  background: var(--surface2);\n  border-radius: 5px;\n  overflow: hidden;\n}\n.trr-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 5px;\n  transition: width 0.5s;\n}\n.trr-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  width: 46px;\n  flex-shrink: 0;\n}\n.trr-pct[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--t1);\n}\n.trr-count[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--t3);\n}\n.pay-method-bars[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.pmb-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 5px;\n}\n.pmb-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--t2);\n}\n.pmb-count[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--t3);\n}\n.pmb-track[_ngcontent-%COMP%] {\n  height: 8px;\n  background: var(--surface2);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.pmb-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.5s;\n}\n.hour-chart[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.hour-bars[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 5px;\n  height: 100px;\n}\n.hour-col[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 100%;\n  display: flex;\n  align-items: flex-end;\n}\n.hour-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 4px 4px 0 0;\n  background: var(--blue-light);\n  min-height: 4px;\n}\n.hour-labels[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n}\n.hlabel[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 9px;\n  color: var(--t3);\n  text-align: center;\n}\n.table-scroll[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.an-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 600px;\n}\n.an-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 10px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  color: var(--t3);\n  text-align: left;\n  background: var(--surface2);\n  border-bottom: 1px solid var(--border);\n}\n.an-table[_ngcontent-%COMP%]   th.num[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.an-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-bottom: 1px solid var(--border);\n  font-size: 13px;\n}\n.an-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.an-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--blue-light);\n}\n.rank[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: var(--surface2);\n  border: 1px solid var(--border);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 800;\n  color: var(--t3);\n}\n.rank.top3[_ngcontent-%COMP%] {\n  background: var(--blue);\n  border-color: var(--blue);\n  color: #fff;\n}\n.prod-cell-an[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.prod-icon-an[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.prod-name-an[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--t1);\n}\n.cat-chip-an[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 2px 9px;\n  border-radius: 10px;\n  background: var(--surface2);\n  color: var(--t2);\n}\n.num[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.bold[_ngcontent-%COMP%] {\n  font-weight: 800;\n  color: var(--t1);\n}\n.growth-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 8px;\n  border-radius: 20px;\n}\n.growth-badge.up[_ngcontent-%COMP%] {\n  background: rgba(46, 125, 50, 0.1);\n  color: var(--green);\n}\n.growth-badge.dn[_ngcontent-%COMP%] {\n  background: rgba(229, 57, 53, 0.1);\n  color: var(--red);\n}\n@media (max-width: 1100px) {\n  .two-col[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .span2[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n}\n@media (max-width: 900px) {\n  .three-col[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 640px) {\n  .kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .an-page[_ngcontent-%COMP%] {\n    padding: 14px;\n  }\n}\n/*# sourceMappingURL=analytics.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnalyticsComponent, { className: "AnalyticsComponent", filePath: "src\\app\\pages\\analytics\\analytics.component.ts", lineNumber: 17 });
})();
export {
  AnalyticsComponent
};
//# sourceMappingURL=chunk-UVHGUNJJ.js.map
