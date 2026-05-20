import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  RadioControlValueAccessor
} from "./chunk-OOFYAVIO.js";
import {
  Router
} from "./chunk-CADB6C7J.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-MBTJ2QPL.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-PEVOVQSE.js";

// src/app/pages/orders/orders.component.ts
function OrdersComponent_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function OrdersComponent_button_16_Template_button_click_0_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setTab(tab_r2.key));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeTab === tab_r2.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r2.label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r2.count);
  }
}
function OrdersComponent_tr_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 22);
    \u0275\u0275listener("click", function OrdersComponent_tr_40_Template_tr_click_0_listener() {
      const order_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.viewOrder(order_r5));
    });
    \u0275\u0275elementStart(1, "td")(2, "span", 23);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "div", 24);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 25);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "span", 26);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 27);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 28);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "span", 26);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 29);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td")(22, "span", 26);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td", 30);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td", 31);
    \u0275\u0275listener("click", function OrdersComponent_tr_40_Template_td_click_26_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(27, "button", 32);
    \u0275\u0275listener("click", function OrdersComponent_tr_40_Template_button_click_27_listener() {
      const order_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openStatusModal(order_r5));
    });
    \u0275\u0275elementStart(28, "span", 6);
    \u0275\u0275text(29, "sync");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const order_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r5.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r5.email);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-blue", order_r5.type === "Retail")("badge-amber", order_r5.type === "Wholesale")("badge-purple", order_r5.type === "Broker");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", order_r5.type, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r5.products);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r5.amount);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-green", order_r5.payment === "Paid")("badge-red", order_r5.payment !== "Paid");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", order_r5.payment, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r5.payMethod);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-amber", order_r5.statusClass === "pending")("badge-blue", order_r5.statusClass === "confirmed")("badge-purple", order_r5.statusClass === "shipped")("badge-green", order_r5.statusClass === "delivered")("badge-red", order_r5.statusClass === "cancelled" || order_r5.statusClass === "return");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", order_r5.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r5.date);
  }
}
function OrdersComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "span", 35);
    \u0275\u0275text(3, "receipt_long");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 36);
    \u0275\u0275text(5, "No orders found");
    \u0275\u0275elementEnd()();
  }
}
function OrdersComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275listener("click", function OrdersComponent_div_42_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showStatusModal = false);
    });
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_div_43_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r2.selectedOrder.id, " \xB7 ", ctx_r2.selectedOrder.name, " ");
  }
}
function OrdersComponent_div_43_label_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 50)(1, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function OrdersComponent_div_43_label_10_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.newStatus, $event) || (ctx_r2.newStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 52);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r2.newStatus === s_r9);
    \u0275\u0275advance();
    \u0275\u0275property("value", s_r9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newStatus);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r9);
  }
}
function OrdersComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275listener("click", function OrdersComponent_div_43_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 39)(2, "span", 40);
    \u0275\u0275text(3, "Update Order Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 41);
    \u0275\u0275listener("click", function OrdersComponent_div_43_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showStatusModal = false);
    });
    \u0275\u0275elementStart(5, "span", 6);
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 42);
    \u0275\u0275template(8, OrdersComponent_div_43_div_8_Template, 2, 2, "div", 43);
    \u0275\u0275elementStart(9, "div", 44);
    \u0275\u0275template(10, OrdersComponent_div_43_label_10_Template, 4, 5, "label", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 46)(12, "button", 47);
    \u0275\u0275listener("click", function OrdersComponent_div_43_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showStatusModal = false);
    });
    \u0275\u0275text(13, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 48);
    \u0275\u0275listener("click", function OrdersComponent_div_43_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.applyStatus());
    });
    \u0275\u0275text(15, "Apply");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r2.selectedOrder);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.statuses);
  }
}
var OrdersComponent = class _OrdersComponent {
  router;
  constructor(router) {
    this.router = router;
  }
  searchQ = "";
  activeTab = "all";
  selectedOrder = null;
  showStatusModal = false;
  newStatus = "";
  tabs = [
    { key: "all", label: "All", count: 248 },
    { key: "pending", label: "Pending", count: 12 },
    { key: "confirmed", label: "Confirmed", count: 34 },
    { key: "shipped", label: "Shipped", count: 58 },
    { key: "delivered", label: "Delivered", count: 132 },
    { key: "cancelled", label: "Cancelled", count: 8 },
    { key: "return", label: "Returns", count: 4 }
  ];
  statuses = ["Pending", "Confirmed", "Shipped", "Delivered", "Cancelled"];
  pipeline = ["Pending", "Confirmed", "Shipped", "Delivered"];
  allOrders = [
    { id: "#MKR-00128", name: "Ravi Kumar", email: "ravi.k@gmail.com", phone: "98765 43210", type: "Retail", products: "Nike Polo T-Shirt \xD7 1", qty: 1, amount: "\u20B9999", payment: "Paid", payMethod: "UPI", status: "Pending", statusClass: "pending", date: "Today, 2:30 PM" },
    { id: "#MKR-00127", name: "Priya Sharma", email: "priya.s@outlook.com", phone: "91234 56789", type: "Wholesale", products: "Libas Kurta \xD7 10, Kids Set \xD7 5", qty: 15, amount: "\u20B915,490", payment: "Paid", payMethod: "Bank", status: "Confirmed", statusClass: "confirmed", date: "Today, 1:15 PM" },
    { id: "#MKR-00126", name: "Meena Patel", email: "meena.p@yahoo.com", phone: "99887 76655", type: "Broker", products: "Samsung TV \xD7 2", qty: 2, amount: "\u20B942,500", payment: "Paid", payMethod: "Razorpay", status: "Shipped", statusClass: "shipped", date: "Today, 11:00 AM" },
    { id: "#MKR-00125", name: "Arun Nair", email: "arun.n@gmail.com", phone: "97654 32109", type: "Retail", products: "Adidas Shoes \xD7 1", qty: 1, amount: "\u20B93,499", payment: "Paid", payMethod: "COD", status: "Delivered", statusClass: "delivered", date: "Yesterday" },
    { id: "#MKR-00124", name: "Sunita Rao", email: "sunita.r@gmail.com", phone: "88776 55443", type: "Wholesale", products: "Whirlpool AC \xD7 3", qty: 3, amount: "\u20B989,970", payment: "Pending", payMethod: "Bank", status: "Pending", statusClass: "pending", date: "Yesterday" },
    { id: "#MKR-00123", name: "Kiran Das", email: "kiran.d@gmail.com", phone: "77665 44332", type: "Retail", products: "Mothercare Uniform \xD7 2", qty: 2, amount: "\u20B91,198", payment: "Paid", payMethod: "UPI", status: "Delivered", statusClass: "delivered", date: "Apr 6" },
    { id: "#MKR-00122", name: "Farhan Ali", email: "farhan.a@gmail.com", phone: "66554 33221", type: "Broker", products: "Samsung TV \xD7 5, AC \xD7 2", qty: 7, amount: "\u20B91,45,970", payment: "Paid", payMethod: "Razorpay", status: "Shipped", statusClass: "shipped", date: "Apr 6" },
    { id: "#MKR-00121", name: "Deepa Menon", email: "deepa.m@gmail.com", phone: "55443 22110", type: "Retail", products: "Libas Kurta \xD7 1", qty: 1, amount: "\u20B9649", payment: "Paid", payMethod: "UPI", status: "Delivered", statusClass: "delivered", date: "Apr 5" },
    { id: "#MKR-00120", name: "Raj Verma", email: "raj.v@gmail.com", phone: "44332 11009", type: "Wholesale", products: "Nike T-Shirt \xD7 20", qty: 20, amount: "\u20B914,980", payment: "Paid", payMethod: "Bank", status: "Cancelled", statusClass: "cancelled", date: "Apr 5" },
    { id: "#MKR-00119", name: "Anita Singh", email: "anita.s@gmail.com", phone: "33221 00998", type: "Retail", products: "Adidas Shoes \xD7 1", qty: 1, amount: "\u20B93,499", payment: "Paid", payMethod: "Card", status: "Return", statusClass: "return", date: "Apr 4" }
  ];
  get filtered() {
    return this.allOrders.filter((o) => {
      const matchTab = this.activeTab === "all" || o.statusClass === this.activeTab;
      const q = this.searchQ.toLowerCase();
      const matchSearch = !q || o.id.toLowerCase().includes(q) || o.name.toLowerCase().includes(q);
      return matchTab && matchSearch;
    });
  }
  setTab(key) {
    this.activeTab = key;
  }
  viewOrder(o) {
    this.router.navigate(["/orders", o.id]);
  }
  closeDetail() {
    this.selectedOrder = null;
  }
  openStatusModal(o) {
    this.selectedOrder = o;
    this.newStatus = o.status;
    this.showStatusModal = true;
  }
  applyStatus() {
    if (this.selectedOrder && this.newStatus) {
      this.selectedOrder.status = this.newStatus;
      this.selectedOrder.statusClass = this.newStatus.toLowerCase();
    }
    this.showStatusModal = false;
    this.selectedOrder = null;
  }
  pipelineStep(status) {
    return this.pipeline.indexOf(status);
  }
  static \u0275fac = function OrdersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrdersComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrdersComponent, selectors: [["app-orders"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 44, vars: 6, consts: [[1, "page"], [1, "page-hd"], [1, "page-hd-left"], [1, "page-hd-title"], [1, "page-hd-right"], [1, "btn", "btn-ghost", "btn-sm"], [1, "icon", "icon-sm"], [1, "filter-bar"], [1, "search-bar"], [1, "sb-icon", "icon", "icon-sm"], ["type", "text", "placeholder", "Search by order ID or customer\u2026", 3, "ngModelChange", "ngModel"], [1, "tabs"], ["class", "tab-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "tbl-card"], [1, "tbl-wrap"], [1, "tbl"], ["class", "tbl-row", 3, "click", 4, "ngFor", "ngForOf"], ["class", "empty", "style", "padding:40px", 4, "ngIf"], ["class", "overlay", 3, "click", 4, "ngIf"], ["class", "modal modal-sm", 3, "click", 4, "ngIf"], [1, "tab-btn", 3, "click"], [1, "tab-count"], [1, "tbl-row", 3, "click"], [2, "font-weight", "700", "color", "var(--blue)", "font-size", "12px", "font-family", "monospace"], [2, "font-weight", "600", "color", "var(--t1)"], [2, "font-size", "11px", "color", "var(--t3)"], [1, "badge"], [2, "font-size", "12px", "color", "var(--t2)", "max-width", "200px"], [2, "font-size", "14px", "font-weight", "800", "color", "var(--t1)"], [2, "font-size", "10px", "color", "var(--t3)", "margin-top", "2px"], [2, "font-size", "11px", "color", "var(--t3)", "white-space", "nowrap"], [3, "click"], ["title", "Update Status", 1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "empty", 2, "padding", "40px"], [1, "empty-icon"], [1, "icon", "icon-xl", "icon-muted"], [1, "empty-title"], [1, "overlay", 3, "click"], [1, "modal", "modal-sm", 3, "click"], [1, "modal-hd"], [1, "modal-title"], [1, "modal-close", 3, "click"], [1, "modal-body"], ["style", "font-size:12px;color:var(--t3);margin-bottom:4px", 4, "ngIf"], [2, "display", "flex", "flex-direction", "column", "gap", "6px"], ["class", "status-opt", 3, "selected", 4, "ngFor", "ngForOf"], [1, "modal-ft"], [1, "btn", "btn-ghost", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [2, "font-size", "12px", "color", "var(--t3)", "margin-bottom", "4px"], [1, "status-opt"], ["type", "radio", 3, "ngModelChange", "value", "ngModel"], [2, "font-size", "13px", "font-weight", "600", "color", "var(--t1)"]], template: function OrdersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275text(4, "Orders");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 4)(6, "button", 5)(7, "span", 6);
      \u0275\u0275text(8, "download");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " Export CSV ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "span", 9);
      \u0275\u0275text(13, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function OrdersComponent_Template_input_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQ, $event) || (ctx.searchQ = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 11);
      \u0275\u0275template(16, OrdersComponent_button_16_Template, 4, 4, "button", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 13)(18, "div", 14)(19, "table", 15)(20, "thead")(21, "tr")(22, "th");
      \u0275\u0275text(23, "Order");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th");
      \u0275\u0275text(25, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th");
      \u0275\u0275text(27, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "th");
      \u0275\u0275text(29, "Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "th");
      \u0275\u0275text(31, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "th");
      \u0275\u0275text(33, "Payment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "th");
      \u0275\u0275text(35, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "th");
      \u0275\u0275text(37, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(38, "th");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "tbody");
      \u0275\u0275template(40, OrdersComponent_tr_40_Template, 30, 30, "tr", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(41, OrdersComponent_div_41_Template, 6, 0, "div", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(42, OrdersComponent_div_42_Template, 1, 0, "div", 18)(43, OrdersComponent_div_43_Template, 16, 2, "div", 19);
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQ);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.tabs);
      \u0275\u0275advance(24);
      \u0275\u0275property("ngForOf", ctx.filtered);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.filtered.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showStatusModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showStatusModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.status-opt[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  border: 1.5px solid var(--border);\n  border-radius: var(--radius);\n  cursor: pointer;\n}\n.status-opt[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.status-opt.selected[_ngcontent-%COMP%] {\n  border-color: var(--blue);\n  background: var(--blue-light);\n}\n/*# sourceMappingURL=orders.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrdersComponent, { className: "OrdersComponent", filePath: "src\\app\\pages\\orders\\orders.component.ts", lineNumber: 22 });
})();
export {
  OrdersComponent
};
//# sourceMappingURL=chunk-BDVQ5ARA.js.map
