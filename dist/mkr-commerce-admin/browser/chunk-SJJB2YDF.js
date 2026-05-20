import {
  RouterLink
} from "./chunk-CADB6C7J.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-MBTJ2QPL.js";
import {
  EventEmitter,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-PEVOVQSE.js";

// src/app/shared/stat-detail-panel/stat-detail-panel.component.ts
function StatDetailPanelComponent_aside_1_div_24_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29);
    \u0275\u0275element(2, "div", 30)(3, "div", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 32);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const h_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("height", ctx_r1.barH(h_r3.t, ctx_r1.maxHourly(ctx_r1.data.hourly)), "px");
    \u0275\u0275property("title", h_r3.t);
    \u0275\u0275advance();
    \u0275\u0275styleProp("height", ctx_r1.barH(h_r3.y, ctx_r1.maxHourly(ctx_r1.data.hourly)), "px");
    \u0275\u0275property("title", h_r3.y);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(h_r3.h);
  }
}
function StatDetailPanelComponent_aside_1_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275text(2, "Hourly Trend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 22);
    \u0275\u0275element(4, "span", 23);
    \u0275\u0275elementStart(5, "span", 24);
    \u0275\u0275text(6, "Today");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "span", 25);
    \u0275\u0275elementStart(8, "span", 24);
    \u0275\u0275text(9, "Yesterday");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 26);
    \u0275\u0275template(11, StatDetailPanelComponent_aside_1_div_24_div_11_Template, 6, 7, "div", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngForOf", ctx_r1.data.hourly);
  }
}
function StatDetailPanelComponent_aside_1_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 36)(6, "span", 37);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 38);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 39);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.label);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatVal(row_r4.today, row_r4.unit));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.trend(row_r4.today, row_r4.yest));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.trend(row_r4.today, row_r4.yest) === "up" ? "\u25B2" : ctx_r1.trend(row_r4.today, row_r4.yest) === "dn" ? "\u25BC" : "\u2014", " ", ctx_r1.pct(row_r4.today, row_r4.yest), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatVal(row_r4.yest, row_r4.unit));
  }
}
function StatDetailPanelComponent_aside_1_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41)(2, "span", 34);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 35);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 38);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 42)(9, "div", 43);
    \u0275\u0275element(10, "div", 44);
    \u0275\u0275elementStart(11, "span", 45);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 43);
    \u0275\u0275element(14, "div", 46);
    \u0275\u0275elementStart(15, "span", 47);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const cat_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(cat_r5.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r5.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.trend(cat_r5.today, cat_r5.yest));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.trend(cat_r5.today, cat_r5.yest) === "up" ? "\u25B2" : ctx_r1.trend(cat_r5.today, cat_r5.yest) === "dn" ? "\u25BC" : "\u2192", " ", ctx_r1.pct(cat_r5.today, cat_r5.yest), " ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", cat_r5.today / ctx_r1.maxCat(ctx_r1.data.byCategory) * 100, "%")("background", cat_r5.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatVal(cat_r5.today, ctx_r1.data.unit));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", cat_r5.yest / ctx_r1.maxCat(ctx_r1.data.byCategory) * 100, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatVal(cat_r5.yest, ctx_r1.data.unit));
  }
}
function StatDetailPanelComponent_aside_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "aside", 2)(1, "div", 3)(2, "div", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 5);
    \u0275\u0275listener("click", function StatDetailPanelComponent_aside_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(5, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "div", 8);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 9);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 10)(13, "div", 11);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 12);
    \u0275\u0275text(16, "vs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 13);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 14)(20, "div", 8);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 15);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(24, StatDetailPanelComponent_aside_1_div_24_Template, 12, 1, "div", 16);
    \u0275\u0275elementStart(25, "div", 17)(26, "div", 18);
    \u0275\u0275text(27, "By Customer Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 19);
    \u0275\u0275template(29, StatDetailPanelComponent_aside_1_div_29_Template, 12, 7, "div", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 17)(31, "div", 18);
    \u0275\u0275text(32, "By Category");
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, StatDetailPanelComponent_aside_1_div_33_Template, 17, 13, "div", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("open", ctx_r1.isOpen);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.data.title);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.data.todayLabel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatVal(ctx_r1.data.todayVal, ctx_r1.data.unit));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.data.trend);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.data.pct);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.data.trend);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.data.diff);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.data.yestLabel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatVal(ctx_r1.data.yestVal, ctx_r1.data.unit));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.data.hourly == null ? null : ctx_r1.data.hourly.length);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.data.byType);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.data.byCategory);
  }
}
var STAT_DATA = {
  orders: {
    title: "Orders \u2014 Today vs Yesterday",
    todayLabel: "Today (Apr 8)",
    yestLabel: "Yesterday (Apr 7)",
    todayVal: 42,
    yestVal: 36,
    unit: "",
    pct: "+18%",
    trend: "up",
    diff: "+6 orders",
    hourly: [
      { h: "6am", t: 1, y: 1 },
      { h: "7am", t: 2, y: 1 },
      { h: "8am", t: 3, y: 2 },
      { h: "9am", t: 5, y: 4 },
      { h: "10am", t: 6, y: 5 },
      { h: "11am", t: 5, y: 4 },
      { h: "12pm", t: 4, y: 4 },
      { h: "1pm", t: 3, y: 3 },
      { h: "2pm", t: 4, y: 3 },
      { h: "3pm", t: 3, y: 2 },
      { h: "4pm", t: 4, y: 3 },
      { h: "5pm", t: 2, y: 4 }
    ],
    byType: [
      { label: "Retail", icon: "\u{1F6CD}\uFE0F", today: 25, yest: 21, unit: "" },
      { label: "Wholesale", icon: "\u{1F3EA}", today: 12, yest: 10, unit: "" },
      { label: "Broker", icon: "\u{1F91D}", today: 5, yest: 5, unit: "" }
    ],
    byCategory: [
      { label: "Electronics", icon: "\u{1F4BB}", today: 14, yest: 10, color: "#2874F0" },
      { label: "Men's", icon: "\u{1F454}", today: 11, yest: 9, color: "#7C3AED" },
      { label: "Women's", icon: "\u{1F457}", today: 9, yest: 8, color: "#FF9F00" },
      { label: "Appliances", icon: "\u2744\uFE0F", today: 5, yest: 6, color: "#388E3C" },
      { label: "Kids", icon: "\u{1F476}", today: 3, yest: 3, color: "#EC4899" }
    ]
  },
  revenue: {
    title: "Revenue \u2014 Today vs Yesterday",
    todayLabel: "Today (Apr 8)",
    yestLabel: "Yesterday (Apr 7)",
    todayVal: 84200,
    yestVal: 67900,
    unit: "\u20B9",
    pct: "+24%",
    trend: "up",
    diff: "+\u20B916,300",
    hourly: [
      { h: "6am", t: 2, y: 1 },
      { h: "7am", t: 4, y: 2 },
      { h: "8am", t: 7, y: 5 },
      { h: "9am", t: 12, y: 9 },
      { h: "10am", t: 14, y: 11 },
      { h: "11am", t: 11, y: 9 },
      { h: "12pm", t: 9, y: 8 },
      { h: "1pm", t: 7, y: 7 },
      { h: "2pm", t: 8, y: 6 },
      { h: "3pm", t: 6, y: 5 },
      { h: "4pm", t: 9, y: 7 },
      { h: "5pm", t: 5, y: 8 }
    ],
    byType: [
      { label: "Retail", icon: "\u{1F6CD}\uFE0F", today: 28400, yest: 22100, unit: "\u20B9" },
      { label: "Wholesale", icon: "\u{1F3EA}", today: 38500, yest: 31200, unit: "\u20B9" },
      { label: "Broker", icon: "\u{1F91D}", today: 17300, yest: 14600, unit: "\u20B9" }
    ],
    byCategory: [
      { label: "Electronics", icon: "\u{1F4BB}", today: 38e3, yest: 28e3, color: "#2874F0" },
      { label: "Men's", icon: "\u{1F454}", today: 16e3, yest: 13e3, color: "#7C3AED" },
      { label: "Women's", icon: "\u{1F457}", today: 14e3, yest: 12e3, color: "#FF9F00" },
      { label: "Appliances", icon: "\u2744\uFE0F", today: 10200, yest: 9900, color: "#388E3C" },
      { label: "Kids", icon: "\u{1F476}", today: 6e3, yest: 5e3, color: "#EC4899" }
    ]
  },
  customers: {
    title: "New Customers \u2014 Today vs Yesterday",
    todayLabel: "Today (Apr 8)",
    yestLabel: "Yesterday (Apr 7)",
    todayVal: 128,
    yestVal: 136,
    unit: "",
    pct: "-6%",
    trend: "dn",
    diff: "-8 signups",
    hourly: [
      { h: "6am", t: 4, y: 5 },
      { h: "7am", t: 8, y: 10 },
      { h: "8am", t: 12, y: 14 },
      { h: "9am", t: 16, y: 18 },
      { h: "10am", t: 18, y: 19 },
      { h: "11am", t: 14, y: 16 },
      { h: "12pm", t: 12, y: 14 },
      { h: "1pm", t: 10, y: 11 },
      { h: "2pm", t: 11, y: 10 },
      { h: "3pm", t: 9, y: 10 },
      { h: "4pm", t: 8, y: 10 },
      { h: "5pm", t: 6, y: 9 }
    ],
    byType: [
      { label: "Retail", icon: "\u{1F6CD}\uFE0F", today: 95, yest: 102, unit: "" },
      { label: "Wholesale", icon: "\u{1F3EA}", today: 26, yest: 24, unit: "" },
      { label: "Broker", icon: "\u{1F91D}", today: 7, yest: 10, unit: "" }
    ],
    byCategory: [
      { label: "Via Google", icon: "\u{1F50D}", today: 54, yest: 58, color: "#2874F0" },
      { label: "Direct", icon: "\u{1F517}", today: 38, yest: 41, color: "#7C3AED" },
      { label: "Via OTP/Phone", icon: "\u{1F4F1}", today: 24, yest: 25, color: "#FF9F00" },
      { label: "Via Referral", icon: "\u{1F381}", today: 12, yest: 12, color: "#388E3C" }
    ]
  },
  products: {
    title: "Active Products \u2014 Today vs Yesterday",
    todayLabel: "Today (Apr 8)",
    yestLabel: "Yesterday (Apr 7)",
    todayVal: 847,
    yestVal: 844,
    unit: "",
    pct: "+3",
    trend: "up",
    diff: "+3 products added",
    hourly: [],
    byType: [
      { label: "Active", icon: "\u2705", today: 812, yest: 809, unit: "" },
      { label: "Inactive", icon: "\u23F8\uFE0F", today: 35, yest: 35, unit: "" }
    ],
    byCategory: [
      { label: "Electronics", icon: "\u{1F4BB}", today: 210, yest: 208, color: "#2874F0" },
      { label: "Men's", icon: "\u{1F454}", today: 198, yest: 197, color: "#7C3AED" },
      { label: "Women's", icon: "\u{1F457}", today: 176, yest: 175, color: "#FF9F00" },
      { label: "Appliances", icon: "\u2744\uFE0F", today: 143, yest: 143, color: "#388E3C" },
      { label: "Kids", icon: "\u{1F476}", today: 120, yest: 121, color: "#EC4899" }
    ]
  }
};
var StatDetailPanelComponent = class _StatDetailPanelComponent {
  type = null;
  closed = new EventEmitter();
  get data() {
    return this.type ? STAT_DATA[this.type] : null;
  }
  get isOpen() {
    return !!this.type;
  }
  pct(today, yest) {
    if (yest === 0)
      return "\u2014";
    const d = (today - yest) / yest * 100;
    return (d >= 0 ? "+" : "") + d.toFixed(0) + "%";
  }
  trend(today, yest) {
    return today > yest ? "up" : today < yest ? "dn" : "eq";
  }
  maxHourly(data) {
    return Math.max(...data.map((h) => Math.max(h.t, h.y)), 1);
  }
  barH(val, max) {
    return Math.round(val / max * 80);
  }
  formatVal(val, unit) {
    if (unit === "\u20B9") {
      if (val >= 1e3)
        return "\u20B9" + (val / 1e3).toFixed(1) + "k";
      return "\u20B9" + val;
    }
    return String(val);
  }
  maxCat(data) {
    return Math.max(...data.map((c) => Math.max(c.today, c.yest)), 1);
  }
  close() {
    this.closed.emit();
  }
  static \u0275fac = function StatDetailPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StatDetailPanelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatDetailPanelComponent, selectors: [["app-stat-detail-panel"]], inputs: { type: "type" }, outputs: { closed: "closed" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 3, consts: [[1, "panel-backdrop", 3, "click"], ["class", "detail-panel", 3, "open", 4, "ngIf"], [1, "detail-panel"], [1, "panel-header"], [1, "panel-title"], [1, "panel-close", 3, "click"], [1, "panel-summary"], [1, "summary-col", "today"], [1, "summary-label"], [1, "summary-val"], [1, "summary-vs"], [1, "vs-badge", 3, "ngClass"], [1, "vs-label"], [1, "vs-diff", 3, "ngClass"], [1, "summary-col", "yest"], [1, "summary-val", "muted"], ["class", "panel-section", 4, "ngIf"], [1, "panel-section"], [1, "section-title"], [1, "compare-rows"], ["class", "compare-row", 4, "ngFor", "ngForOf"], ["class", "cat-compare", 4, "ngFor", "ngForOf"], [1, "legend-row"], [1, "leg-dot", "today-dot"], [1, "leg-lbl"], [1, "leg-dot", "yest-dot"], [1, "hourly-chart"], ["class", "hour-group", 4, "ngFor", "ngForOf"], [1, "hour-group"], [1, "bars-pair"], [1, "bar", "today-bar", 3, "title"], [1, "bar", "yest-bar", 3, "title"], [1, "hour-label"], [1, "compare-row"], [1, "row-icon"], [1, "row-label"], [1, "row-vals"], [1, "val-today"], [1, "trend-badge", 3, "ngClass"], [1, "val-yest"], [1, "cat-compare"], [1, "cat-row-top"], [1, "cat-bars-row"], [1, "cat-bar-wrap"], [1, "cat-bar", "today-cat"], [1, "cat-bar-val"], [1, "cat-bar", "yest-cat"], [1, "cat-bar-val", "muted"]], template: function StatDetailPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function StatDetailPanelComponent_Template_div_click_0_listener() {
        return ctx.close();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(1, StatDetailPanelComponent_aside_1_Template, 34, 14, "aside", 1);
    }
    if (rf & 2) {
      \u0275\u0275classProp("open", ctx.isOpen);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.data);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf], styles: ["\n\n.panel-backdrop[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.35);\n  z-index: 400;\n  opacity: 0;\n  transition: opacity 0.25s;\n}\n.panel-backdrop.open[_ngcontent-%COMP%] {\n  opacity: 1;\n  display: block;\n}\n.detail-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 420px;\n  background: var(--surface);\n  border-left: 1px solid var(--border);\n  z-index: 500;\n  display: flex;\n  flex-direction: column;\n  transform: translateX(100%);\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.12);\n  overflow-y: auto;\n}\n.detail-panel.open[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 20px;\n  border-bottom: 1px solid var(--border);\n  position: sticky;\n  top: 0;\n  background: var(--surface);\n  z-index: 10;\n  flex-shrink: 0;\n}\n.panel-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 800;\n  color: var(--t1);\n}\n.panel-close[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: var(--surface2);\n  border: 1px solid var(--border);\n  font-size: 13px;\n  color: var(--t2);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n}\n.panel-close[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 97, 97, 0.1);\n  color: var(--red);\n  border-color: var(--red);\n}\n.panel-summary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n  gap: 12px;\n  background: var(--surface2);\n  border-bottom: 1px solid var(--border);\n}\n.summary-col[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.summary-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: var(--t3);\n  margin-bottom: 6px;\n}\n.summary-val[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 900;\n  color: var(--num-color);\n  letter-spacing: -1px;\n}\n.summary-val.muted[_ngcontent-%COMP%] {\n  color: var(--t3);\n  font-size: 22px;\n}\n.summary-vs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n.vs-badge[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 800;\n  padding: 4px 10px;\n  border-radius: 20px;\n}\n.vs-badge.up[_ngcontent-%COMP%] {\n  background: rgba(56, 142, 60, 0.12);\n  color: #388E3C;\n}\n.vs-badge.dn[_ngcontent-%COMP%] {\n  background: rgba(255, 97, 97, 0.12);\n  color: var(--red);\n}\n.vs-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--t3);\n  font-weight: 600;\n}\n.vs-diff[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n}\n.vs-diff.up[_ngcontent-%COMP%] {\n  color: #388E3C;\n}\n.vs-diff.dn[_ngcontent-%COMP%] {\n  color: var(--red);\n}\n.panel-section[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: var(--t3);\n  margin-bottom: 14px;\n}\n.legend-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 12px;\n}\n.leg-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 3px;\n  flex-shrink: 0;\n}\n.today-dot[_ngcontent-%COMP%] {\n  background: var(--blue);\n}\n.yest-dot[_ngcontent-%COMP%] {\n  background: var(--border);\n}\n.leg-lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--t2);\n  margin-right: 6px;\n}\n.hourly-chart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 4px;\n  height: 90px;\n  padding-bottom: 20px;\n  position: relative;\n}\n.hour-group[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 3px;\n  position: relative;\n}\n.bars-pair[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 2px;\n  width: 100%;\n  justify-content: center;\n}\n.bar[_ngcontent-%COMP%] {\n  width: 8px;\n  border-radius: 3px 3px 0 0;\n  min-height: 3px;\n  transition: height 0.3s;\n}\n.today-bar[_ngcontent-%COMP%] {\n  background: var(--blue);\n}\n.yest-bar[_ngcontent-%COMP%] {\n  background: var(--border);\n}\n.hour-label[_ngcontent-%COMP%] {\n  font-size: 8px;\n  color: var(--t3);\n  white-space: nowrap;\n  position: absolute;\n  bottom: -18px;\n}\n.compare-rows[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.compare-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 0;\n  border-bottom: 1px solid var(--border);\n}\n.compare-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.row-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 24px;\n  text-align: center;\n  flex-shrink: 0;\n}\n.row-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--t1);\n  flex: 1;\n}\n.row-vals[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.val-today[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 800;\n  color: var(--t1);\n}\n.val-yest[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--t3);\n}\n.trend-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  padding: 2px 7px;\n  border-radius: 10px;\n}\n.trend-badge.up[_ngcontent-%COMP%] {\n  background: rgba(56, 142, 60, 0.1);\n  color: #388E3C;\n}\n.trend-badge.dn[_ngcontent-%COMP%] {\n  background: rgba(255, 97, 97, 0.1);\n  color: var(--red);\n}\n.trend-badge.eq[_ngcontent-%COMP%] {\n  background: var(--surface2);\n  color: var(--t3);\n}\n.cat-compare[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.cat-compare[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.cat-row-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 6px;\n}\n.cat-bars-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.cat-bar-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.cat-bar[_ngcontent-%COMP%] {\n  height: 8px;\n  border-radius: 4px;\n  min-width: 4px;\n  transition: width 0.4s;\n}\n.yest-cat[_ngcontent-%COMP%] {\n  background: var(--border);\n}\n.cat-bar-val[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--t1);\n  white-space: nowrap;\n}\n.cat-bar-val.muted[_ngcontent-%COMP%] {\n  color: var(--t3);\n  font-weight: 400;\n}\n@media (max-width: 480px) {\n  .detail-panel[_ngcontent-%COMP%] {\n    width: 100%;\n    border-left: none;\n  }\n}\n/*# sourceMappingURL=stat-detail-panel.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatDetailPanelComponent, { className: "StatDetailPanelComponent", filePath: "src\\app\\shared\\stat-detail-panel\\stat-detail-panel.component.ts", lineNumber: 127 });
})();

// src/app/pages/dashboard/dashboard.component.ts
function DashboardComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275listener("click", function DashboardComponent_div_2_Template_div_click_0_listener() {
      const stat_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openPanel(stat_r2.panelType));
    });
    \u0275\u0275element(1, "div", 27);
    \u0275\u0275elementStart(2, "div", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 29);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 30);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 31);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 32);
    \u0275\u0275text(11, "Tap to compare \u203A");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const stat_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", stat_r2.color);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", stat_r2.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(stat_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r2.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r2.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", stat_r2.trend);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(stat_r2.change);
  }
}
function DashboardComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bar_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bar_r4.revenue);
    \u0275\u0275advance();
    \u0275\u0275styleProp("height", bar_r4.pct, "%");
    \u0275\u0275classProp("hi", bar_r4.today);
  }
}
function DashboardComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bar_r5 = ctx.$implicit;
    \u0275\u0275classProp("hi", bar_r5.today);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(bar_r5.label);
  }
}
function DashboardComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 39);
    \u0275\u0275element(4, "div", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 41);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", cat_r6.pct)("background", cat_r6.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r6.value);
  }
}
function DashboardComponent_tr_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 42);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "div", 43);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 44);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "span", 45);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "span", 46);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "span", 47);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td")(19, "button", 48);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const order_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r7.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r7.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", order_r7.type.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(order_r7.type);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r7.amount);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", order_r7.statusClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(order_r7.status);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r7.action);
  }
}
function DashboardComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 51)(4, "div", 52);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 53);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 54);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const alert_r8 = ctx.$implicit;
    \u0275\u0275property("ngClass", alert_r8.level);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(alert_r8.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(alert_r8.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(alert_r8.sub);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(alert_r8.action);
  }
}
var DashboardComponent = class _DashboardComponent {
  activePanel = null;
  openPanel(type) {
    this.activePanel = type;
  }
  closePanel() {
    this.activePanel = null;
  }
  stats = [
    { icon: "\u{1F6D2}", value: "42", label: "Orders Today", change: "\u25B2 18% vs yesterday", color: "blue", trend: "up", panelType: "orders" },
    { icon: "\u{1F4B0}", value: "\u20B984.2k", label: "Revenue Today", change: "\u25B2 24% vs yesterday", color: "green", trend: "up", panelType: "revenue" },
    { icon: "\u{1F465}", value: "128", label: "New Customers", change: "\u25BC 6% vs yesterday", color: "orange", trend: "dn", panelType: "customers" },
    { icon: "\u{1F4E6}", value: "847", label: "Active Products", change: "\u25B2 3 today", color: "purple", trend: "up", panelType: "products" }
  ];
  revenueBars = [
    { pct: 45, label: "Mar 26", revenue: "\u20B937.9k" },
    { pct: 59, label: "Mar 27", revenue: "\u20B949.7k" },
    { pct: 38, label: "Mar 28", revenue: "\u20B932.0k" },
    { pct: 73, label: "Mar 29", revenue: "\u20B961.4k" },
    { pct: 50, label: "Mar 30", revenue: "\u20B942.1k" },
    { pct: 82, label: "Mar 31", revenue: "\u20B969.0k" },
    { pct: 64, label: "Apr 1", revenue: "\u20B953.8k" },
    { pct: 40, label: "Apr 2", revenue: "\u20B933.6k" },
    { pct: 85, label: "Apr 3", revenue: "\u20B971.5k" },
    { pct: 56, label: "Apr 4", revenue: "\u20B947.1k" },
    { pct: 77, label: "Apr 5", revenue: "\u20B964.8k" },
    { pct: 46, label: "Apr 6", revenue: "\u20B938.7k" },
    { pct: 71, label: "Apr 7", revenue: "\u20B959.7k" },
    { pct: 100, label: "Today", revenue: "\u20B984.2k", today: true }
  ];
  categoryBars = [
    { name: "Electronics", pct: "85%", color: "#2874F0", value: "\u20B940k" },
    { name: "Men's", pct: "72%", color: "#7C3AED", value: "\u20B934k" },
    { name: "Women's", pct: "58%", color: "#FF9F00", value: "\u20B927k" },
    { name: "Appliances", pct: "45%", color: "#388E3C", value: "\u20B921k" },
    { name: "Kids", pct: "30%", color: "#EC4899", value: "\u20B914k" }
  ];
  recentOrders = [
    { id: "#MKR-00124", name: "Ravi Kumar", email: "ravi.k@gmail.com", type: "Retail", amount: "\u20B9999", status: "Paid", statusClass: "paid", action: "Process" },
    { id: "#MKR-00125", name: "Priya Sharma", email: "priya.s@outlook.com", type: "Wholesale", amount: "\u20B915,999", status: "Pending", statusClass: "pending", action: "Process" },
    { id: "#MKR-00126", name: "Meena Patel", email: "meena.p@yahoo.com", type: "Broker", amount: "\u20B942,500", status: "Shipped", statusClass: "shipped", action: "Track" },
    { id: "#MKR-00127", name: "Arun Nair", email: "arun.n@gmail.com", type: "Retail", amount: "\u20B93,499", status: "Paid", statusClass: "paid", action: "Process" }
  ];
  stockAlerts = [
    { icon: "\u{1F454}", title: "Nike Polo T-Shirt \u2014 Blue, Size M", sub: "2 units remaining \xB7 SKU: NK-POLO-BL-M", action: "Restock", level: "warn" },
    { icon: "\u{1F4FA}", title: 'Samsung 32" Smart TV \u2014 Black', sub: "1 unit remaining \xB7 SKU: SAM-TV-32-BL", action: "Restock", level: "warn" },
    { icon: "\u{1F45F}", title: "Adidas Running Shoes \u2014 White, Size 9", sub: "Out of stock \xB7 SKU: ADI-RUN-WH-9", action: "Urgent", level: "danger" }
  ];
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 60, vars: 7, consts: [[3, "closed", "type"], [1, "adm-stats"], ["class", "scard", "tabindex", "0", 3, "click", 4, "ngFor", "ngForOf"], [1, "adm-body"], [1, "adm-row", "c2"], [1, "adm-card"], [1, "adm-card-head"], [1, "adm-card-title"], [1, "adm-card-link"], [1, "adm-card-body"], [1, "chart-wrap"], [1, "chart-bars"], ["class", "cbar-col", 4, "ngFor", "ngForOf"], [1, "chart-days"], ["class", "cday", 3, "hi", 4, "ngFor", "ngForOf"], [1, "cat-bars"], ["class", "cat-bar-row", 4, "ngFor", "ngForOf"], [1, "adm-row", "c1"], ["routerLink", "/orders", 1, "adm-card-link"], [1, "tbl-wrap"], [1, "tbl"], [4, "ngFor", "ngForOf"], [1, "icon", "icon-sm", "icon-amber", 2, "vertical-align", "middle", "margin-right", "4px"], ["routerLink", "/inventory", 1, "adm-card-link"], [1, "alert-list"], ["class", "adm-alert", 3, "ngClass", 4, "ngFor", "ngForOf"], ["tabindex", "0", 1, "scard", 3, "click"], [1, "scard-accent", 3, "ngClass"], [1, "scard-icon", 3, "ngClass"], [1, "scard-val"], [1, "scard-lbl"], [1, "scard-chg", 3, "ngClass"], [1, "scard-hint"], [1, "cbar-col"], [1, "cbar-amt"], [1, "cbar"], [1, "cday"], [1, "cat-bar-row"], [1, "cat-bar-label"], [1, "cat-bar-track"], [1, "cat-bar-fill"], [1, "cat-bar-val"], [1, "o-id"], [1, "o-name"], [1, "o-email"], [1, "otype", 3, "ngClass"], [1, "oamt"], [1, "ostatus", 3, "ngClass"], [1, "o-act"], [1, "adm-alert", 3, "ngClass"], [1, "adm-alert-icon"], [1, "adm-alert-text"], [1, "adm-alert-title"], [1, "adm-alert-sub"], [1, "adm-alert-act"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-stat-detail-panel", 0);
      \u0275\u0275listener("closed", function DashboardComponent_Template_app_stat_detail_panel_closed_0_listener() {
        return ctx.closePanel();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275template(2, DashboardComponent_div_2_Template, 12, 7, "div", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "span", 7);
      \u0275\u0275text(8, "Revenue \u2014 Last 14 Days");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 8);
      \u0275\u0275text(10, "Download \u2193");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 9)(12, "div", 10)(13, "div", 11);
      \u0275\u0275template(14, DashboardComponent_div_14_Template, 4, 5, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 13);
      \u0275\u0275template(16, DashboardComponent_div_16_Template, 2, 3, "div", 14);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(17, "div", 5)(18, "div", 6)(19, "span", 7);
      \u0275\u0275text(20, "Sales by Category");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 9)(22, "div", 15);
      \u0275\u0275template(23, DashboardComponent_div_23_Template, 7, 6, "div", 16);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(24, "div", 17)(25, "div", 5)(26, "div", 6)(27, "span", 7);
      \u0275\u0275text(28, "Recent Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "a", 18);
      \u0275\u0275text(30, "View All \u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 19)(32, "table", 20)(33, "thead")(34, "tr")(35, "th");
      \u0275\u0275text(36, "Order ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "th");
      \u0275\u0275text(38, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "th");
      \u0275\u0275text(40, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "th");
      \u0275\u0275text(42, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "th");
      \u0275\u0275text(44, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(45, "th");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "tbody");
      \u0275\u0275template(47, DashboardComponent_tr_47_Template, 21, 9, "tr", 21);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(48, "div", 17)(49, "div", 5)(50, "div", 6)(51, "span", 7)(52, "span", 22);
      \u0275\u0275text(53, "warning");
      \u0275\u0275elementEnd();
      \u0275\u0275text(54, " Low Stock Alerts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "a", 23);
      \u0275\u0275text(56, "Manage Inventory \u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 9)(58, "div", 24);
      \u0275\u0275template(59, DashboardComponent_div_59_Template, 10, 5, "div", 25);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("type", ctx.activePanel);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.stats);
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.revenueBars);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.revenueBars);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngForOf", ctx.categoryBars);
      \u0275\u0275advance(24);
      \u0275\u0275property("ngForOf", ctx.recentOrders);
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.stockAlerts);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, RouterLink, StatDetailPanelComponent], styles: ["\n\n.adm-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 14px;\n  padding: 20px 24px 0;\n}\n.scard[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 20px;\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.scard[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-md);\n  transform: translateY(-1px);\n}\n.scard-accent[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n}\n.scard-accent.blue[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #2874F0,\n      #60A5FA);\n}\n.scard-accent.green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #388E3C,\n      #4CAF50);\n}\n.scard-accent.orange[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #FF6161,\n      #FF9F00);\n}\n.scard-accent.purple[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #7C3AED,\n      #A78BFA);\n}\n.scard-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  margin-bottom: 14px;\n}\n.scard-icon.blue[_ngcontent-%COMP%] {\n  background: rgba(40, 116, 240, 0.1);\n}\n.scard-icon.green[_ngcontent-%COMP%] {\n  background: rgba(56, 142, 60, 0.1);\n}\n.scard-icon.orange[_ngcontent-%COMP%] {\n  background: rgba(255, 97, 97, 0.1);\n}\n.scard-icon.purple[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.1);\n}\n.scard-val[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 900;\n  color: var(--num-color);\n  letter-spacing: -1.5px;\n  line-height: 1;\n  margin-bottom: 4px;\n}\n.scard-lbl[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--t3);\n  font-weight: 500;\n  margin-bottom: 12px;\n}\n.scard-hint[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--blue);\n  margin-top: 8px;\n  font-weight: 600;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n.scard[_ngcontent-%COMP%]:hover   .scard-hint[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.scard[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.scard-chg[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 8px;\n  border-radius: 20px;\n}\n.scard-chg.up[_ngcontent-%COMP%] {\n  color: #388E3C;\n  background: rgba(56, 142, 60, 0.1);\n}\n.scard-chg.dn[_ngcontent-%COMP%] {\n  color: #FF6161;\n  background: rgba(255, 97, 97, 0.1);\n}\n.adm-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  overflow-y: auto;\n  flex: 1;\n}\n.adm-row[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 14px;\n  margin-bottom: 16px;\n}\n.adm-row.c2[_ngcontent-%COMP%] {\n  grid-template-columns: 1.6fr 1fr;\n}\n.adm-row.c1[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n}\n.adm-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  transition: background 0.3s, border-color 0.3s;\n}\n.adm-card-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  border-bottom: 1px solid var(--border);\n}\n.adm-card-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--t1);\n}\n.adm-card-link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--blue);\n  cursor: pointer;\n}\n.adm-card-body[_ngcontent-%COMP%] {\n  padding: 16px 18px;\n}\n.chart-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.chart-bars[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 4px;\n  height: 120px;\n}\n.cbar-col[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n}\n.cbar-col[_ngcontent-%COMP%]:hover   .cbar-amt[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.cbar-col[_ngcontent-%COMP%]:hover   .cbar[_ngcontent-%COMP%] {\n  opacity: 0.85;\n}\n.cbar-amt[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -4px;\n  left: 50%;\n  transform: translateX(-50%) translateY(4px);\n  font-size: 9px;\n  font-weight: 700;\n  color: var(--t1);\n  white-space: nowrap;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  padding: 2px 5px;\n  border-radius: 4px;\n  box-shadow: var(--shadow-xs);\n  opacity: 0;\n  transition: opacity 0.15s, transform 0.15s;\n  pointer-events: none;\n  z-index: 10;\n}\n.cbar[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 4px 4px 0 0;\n  transition: opacity 0.15s;\n  background: var(--blue-light);\n}\n.cbar.hi[_ngcontent-%COMP%] {\n  background: var(--blue);\n}\n.chart-days[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.cday[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 8.5px;\n  color: var(--t3);\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.cday.hi[_ngcontent-%COMP%] {\n  color: var(--blue);\n  font-weight: 700;\n}\n.cat-bars[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.cat-bar-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.cat-bar-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--t2);\n  width: 80px;\n  flex-shrink: 0;\n}\n.cat-bar-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 7px;\n  background: var(--surface2);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.cat-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n}\n.cat-bar-val[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--t1);\n  width: 44px;\n  text-align: right;\n}\n.o-id[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--blue);\n}\n.o-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--t1);\n}\n.o-email[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--t3);\n}\n.otype[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 10px;\n}\n.otype.retail[_ngcontent-%COMP%] {\n  background: rgba(40, 116, 240, 0.1);\n  color: var(--blue);\n}\n.otype.wholesale[_ngcontent-%COMP%] {\n  background: rgba(255, 159, 0, 0.1);\n  color: #FF9F00;\n}\n.otype.broker[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.1);\n  color: #7C3AED;\n}\n.oamt[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 800;\n  color: var(--t1);\n}\n.ostatus[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 9px;\n  border-radius: 20px;\n}\n.ostatus.paid[_ngcontent-%COMP%] {\n  background: rgba(56, 142, 60, 0.1);\n  color: #388E3C;\n}\n.ostatus.pending[_ngcontent-%COMP%] {\n  background: rgba(255, 159, 0, 0.1);\n  color: #FF9F00;\n}\n.ostatus.shipped[_ngcontent-%COMP%] {\n  background: rgba(40, 116, 240, 0.1);\n  color: var(--blue);\n}\n.o-act[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 4px;\n  border: 1px solid var(--border);\n  background: var(--surface2);\n  color: var(--t2);\n  font-size: 11px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.o-act[_ngcontent-%COMP%]:hover {\n  background: rgba(40, 116, 240, 0.08);\n  border-color: var(--blue);\n  color: var(--blue);\n}\n.alert-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.adm-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  border-radius: var(--radius);\n}\n.adm-alert.warn[_ngcontent-%COMP%] {\n  background: rgba(255, 159, 0, 0.07);\n  border: 1px solid rgba(255, 159, 0, 0.2);\n}\n.adm-alert.danger[_ngcontent-%COMP%] {\n  background: rgba(255, 97, 97, 0.07);\n  border: 1px solid rgba(255, 97, 97, 0.2);\n}\n.adm-alert-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.adm-alert-text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.adm-alert-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--t1);\n}\n.adm-alert-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--t2);\n  margin-top: 2px;\n}\n.adm-alert-act[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 700;\n  flex-shrink: 0;\n  cursor: pointer;\n}\n.warn[_ngcontent-%COMP%]   .adm-alert-act[_ngcontent-%COMP%] {\n  background: rgba(255, 159, 0, 0.12);\n  border: 1px solid rgba(255, 159, 0, 0.25);\n  color: #FF9F00;\n}\n.danger[_ngcontent-%COMP%]   .adm-alert-act[_ngcontent-%COMP%] {\n  background: rgba(255, 97, 97, 0.12);\n  border: 1px solid rgba(255, 97, 97, 0.25);\n  color: var(--red);\n}\n@media (max-width: 1100px) {\n  .adm-row.c2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .adm-stats[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 520px) {\n  .adm-stats[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .scard-val[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src\\app\\pages\\dashboard\\dashboard.component.ts", lineNumber: 13 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-SJJB2YDF.js.map
