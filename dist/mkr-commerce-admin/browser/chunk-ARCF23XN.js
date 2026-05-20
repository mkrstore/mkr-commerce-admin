import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
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
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-PEVOVQSE.js";

// src/app/pages/customers/customers.component.ts
function CustomersComponent_ng_container_1_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23)(1, "span", 24);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.sourcePending("Online"), " pending ");
  }
}
function CustomersComponent_ng_container_1_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "span", 26);
    \u0275\u0275elementStart(2, "span", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap("sc-dot-" + t_r3.toLowerCase());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.typeCount("Online", t_r3));
  }
}
function CustomersComponent_ng_container_1_span_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23)(1, "span", 24);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.sourcePending("In-Store"), " pending ");
  }
}
function CustomersComponent_ng_container_1_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "span", 26);
    \u0275\u0275elementStart(2, "span", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap("sc-dot-" + t_r4.toLowerCase());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.typeCount("In-Store", t_r4));
  }
}
function CustomersComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "div", 4);
    \u0275\u0275text(4, "Customers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 6)(8, "div", 7);
    \u0275\u0275listener("click", function CustomersComponent_ng_container_1_Template_div_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectSource("Online"));
    });
    \u0275\u0275elementStart(9, "div", 8)(10, "div", 9)(11, "span", 10);
    \u0275\u0275text(12, "language");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 11)(14, "div", 12);
    \u0275\u0275text(15, "Online Customers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 13);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 14);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, CustomersComponent_ng_container_1_span_20_Template, 4, 1, "span", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 16);
    \u0275\u0275template(22, CustomersComponent_ng_container_1_div_22_Template, 6, 4, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 18);
    \u0275\u0275text(24, " View Online Customers ");
    \u0275\u0275elementStart(25, "span", 19);
    \u0275\u0275text(26, "arrow_forward");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 20);
    \u0275\u0275listener("click", function CustomersComponent_ng_container_1_Template_div_click_27_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectSource("In-Store"));
    });
    \u0275\u0275elementStart(28, "div", 8)(29, "div", 21)(30, "span", 10);
    \u0275\u0275text(31, "store");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 11)(33, "div", 12);
    \u0275\u0275text(34, "In-Store Customers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 13);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 14);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(39, CustomersComponent_ng_container_1_span_39_Template, 4, 1, "span", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 16);
    \u0275\u0275template(41, CustomersComponent_ng_container_1_div_41_Template, 6, 4, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 22);
    \u0275\u0275text(43, " View In-Store Customers ");
    \u0275\u0275elementStart(44, "span", 19);
    \u0275\u0275text(45, "arrow_forward");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.customers.length, " total customers across all channels");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.sourceCount("Online"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.fmt(ctx_r1.sourceTotalSpent("Online")), " total revenue");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.sourcePending("Online") > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.types);
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r1.sourceCount("In-Store"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.fmt(ctx_r1.sourceTotalSpent("In-Store")), " total revenue");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.sourcePending("In-Store") > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.types);
  }
}
function CustomersComponent_ng_container_2_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function CustomersComponent_ng_container_2_button_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.searchQ = "";
      return \u0275\u0275resetView(ctx_r1.onSearch());
    });
    \u0275\u0275elementStart(1, "span", 24);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function CustomersComponent_ng_container_2_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function CustomersComponent_ng_container_2_button_21_Template_button_click_0_listener() {
      const t_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectedType = t_r8);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.selectedType === t_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r8, " ");
  }
}
function CustomersComponent_ng_container_2_tr_42_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23)(1, "span", 24);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.fmt(c_r10.pendingAmount), " ");
  }
}
function CustomersComponent_ng_container_2_tr_42_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function CustomersComponent_ng_container_2_tr_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 45);
    \u0275\u0275listener("click", function CustomersComponent_ng_container_2_tr_42_Template_tr_click_0_listener() {
      const c_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewCustomer(c_r10.id));
    });
    \u0275\u0275elementStart(1, "td")(2, "div", 29)(3, "div", 46);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 47);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 48);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td")(11, "div", 14);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 49);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "span", 50);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td", 47);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 51);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td");
    \u0275\u0275template(23, CustomersComponent_ng_container_2_tr_42_span_23_Template, 4, 1, "span", 15)(24, CustomersComponent_ng_container_2_tr_42_span_24_Template, 2, 0, "span", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 49);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classMap("cust-avatar-" + c_r10.type.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.avatar(c_r10.name), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("since ", c_r10.since, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r10.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r10.phone);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-blue", c_r10.type === "Retail")("badge-green", c_r10.type === "Wholesale")("badge-purple", c_r10.type === "Broker");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r10.type, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r10.totalOrders);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmt(c_r10.totalSpent));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", c_r10.pendingAmount > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r10.pendingAmount === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r10.lastOrder);
  }
}
function CustomersComponent_ng_container_2_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 55)(2, "span", 56);
    \u0275\u0275text(3, "person");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 57);
    \u0275\u0275text(5, "No customers found");
    \u0275\u0275elementEnd()();
  }
}
function CustomersComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "div", 29)(4, "button", 30);
    \u0275\u0275listener("click", function CustomersComponent_ng_container_2_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275elementStart(5, "span", 19);
    \u0275\u0275text(6, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "div", 4);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 5);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(12, "div", 31)(13, "div", 32)(14, "span", 33);
    \u0275\u0275text(15, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function CustomersComponent_ng_container_2_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchQ, $event) || (ctx_r1.searchQ = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function CustomersComponent_ng_container_2_Template_input_ngModelChange_16_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearch());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, CustomersComponent_ng_container_2_button_17_Template, 3, 0, "button", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 36)(19, "button", 37);
    \u0275\u0275listener("click", function CustomersComponent_ng_container_2_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectedType = "All");
    });
    \u0275\u0275text(20, " All ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, CustomersComponent_ng_container_2_button_21_Template, 2, 3, "button", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 39)(23, "div", 40)(24, "table", 41)(25, "thead")(26, "tr")(27, "th");
    \u0275\u0275text(28, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th");
    \u0275\u0275text(30, "Contact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "th");
    \u0275\u0275text(32, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "th");
    \u0275\u0275text(34, "Orders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "th");
    \u0275\u0275text(36, "Total Spent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th");
    \u0275\u0275text(38, "Pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th");
    \u0275\u0275text(40, "Last Order");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "tbody");
    \u0275\u0275template(42, CustomersComponent_ng_container_2_tr_42_Template, 27, 19, "tr", 42);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(43, CustomersComponent_ng_container_2_div_43_Template, 6, 0, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedSource, " Customers");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.typeFilterCount("All"), " customers");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchQ);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.searchQ);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.selectedType === "All");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.types);
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", ctx_r1.filtered);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filtered.length === 0);
  }
}
var CUSTOMERS = [
  // ── Online ──
  { id: "CUS-001", name: "Ravi Kumar", email: "ravi.k@gmail.com", phone: "+91 98765 43210", type: "Retail", source: "Online", since: "Jan 2025", lastOrder: "Apr 8, 2026", totalOrders: 3, totalSpent: 14200, pendingAmount: 0 },
  { id: "CUS-002", name: "Meena Patel", email: "meena.p@yahoo.com", phone: "+91 99887 76655", type: "Broker", source: "Online", since: "Mar 2024", lastOrder: "Apr 8, 2026", totalOrders: 4, totalSpent: 105800, pendingAmount: 0 },
  { id: "CUS-003", name: "Kiran Das", email: "kiran.d@gmail.com", phone: "+91 77665 44332", type: "Retail", source: "Online", since: "Aug 2025", lastOrder: "Apr 6, 2026", totalOrders: 2, totalSpent: 3200, pendingAmount: 0 },
  { id: "CUS-004", name: "Farhan Ali", email: "farhan.a@gmail.com", phone: "+91 66554 33221", type: "Broker", source: "Online", since: "Nov 2023", lastOrder: "Apr 6, 2026", totalOrders: 6, totalSpent: 45e4, pendingAmount: 0 },
  { id: "CUS-005", name: "Arun Nair", email: "arun.n@gmail.com", phone: "+91 97654 32109", type: "Retail", source: "Online", since: "Jun 2025", lastOrder: "Apr 7, 2026", totalOrders: 2, totalSpent: 7500, pendingAmount: 0 },
  { id: "CUS-006", name: "Anjali Verma", email: "anjali.v@outlook.com", phone: "+91 93456 78901", type: "Wholesale", source: "Online", since: "Feb 2025", lastOrder: "Apr 1, 2026", totalOrders: 3, totalSpent: 45e3, pendingAmount: 15e3 },
  // ── In-Store ──
  { id: "CUS-007", name: "Priya Sharma", email: "priya.s@outlook.com", phone: "+91 91234 56789", type: "Wholesale", source: "In-Store", since: "Jan 2023", lastOrder: "Apr 8, 2026", totalOrders: 8, totalSpent: 24e4, pendingAmount: 0 },
  { id: "CUS-008", name: "Sunita Rao", email: "sunita.r@gmail.com", phone: "+91 88776 55443", type: "Wholesale", source: "In-Store", since: "May 2024", lastOrder: "Apr 7, 2026", totalOrders: 5, totalSpent: 38e4, pendingAmount: 91920 },
  { id: "CUS-009", name: "Deepa Singh", email: "deepa.s@gmail.com", phone: "+91 85432 10987", type: "Retail", source: "In-Store", since: "Oct 2024", lastOrder: "Mar 15, 2026", totalOrders: 3, totalSpent: 12e3, pendingAmount: 2500 },
  { id: "CUS-010", name: "Sanjay Mehta", email: "sanjay.m@gmail.com", phone: "+91 98001 23456", type: "Broker", source: "In-Store", since: "Jun 2022", lastOrder: "Mar 5, 2026", totalOrders: 15, totalSpent: 12e5, pendingAmount: 5e4 }
];
var CustomersComponent = class _CustomersComponent {
  router;
  selectedSource = null;
  selectedType = "All";
  searchQ = "";
  customers = CUSTOMERS;
  types = ["Retail", "Wholesale", "Broker"];
  constructor(router) {
    this.router = router;
  }
  // ── Overview counts ──
  sourceCount(s) {
    return this.customers.filter((c) => c.source === s).length;
  }
  sourcePending(s) {
    return this.customers.filter((c) => c.source === s && c.pendingAmount > 0).length;
  }
  typeCount(s, t) {
    return this.customers.filter((c) => c.source === s && c.type === t).length;
  }
  sourceTotalSpent(s) {
    return this.customers.filter((c) => c.source === s).reduce((n, c) => n + c.totalSpent, 0);
  }
  // ── Navigation ──
  selectSource(s) {
    this.selectedSource = s;
    this.selectedType = "All";
    this.searchQ = "";
  }
  goBack() {
    this.selectedSource = null;
    this.selectedType = "All";
    this.searchQ = "";
  }
  onSearch() {
  }
  // ── Filtered list ──
  get filtered() {
    const q = this.searchQ.trim().toLowerCase();
    return this.customers.filter((c) => {
      if (c.source !== this.selectedSource)
        return false;
      if (this.selectedType !== "All" && c.type !== this.selectedType)
        return false;
      if (q && !c.name.toLowerCase().includes(q) && !c.email.toLowerCase().includes(q) && !c.phone.includes(q))
        return false;
      return true;
    });
  }
  typeFilterCount(t) {
    if (t === "All")
      return this.customers.filter((c) => c.source === this.selectedSource).length;
    return this.customers.filter((c) => c.source === this.selectedSource && c.type === t).length;
  }
  // ── Helpers ──
  avatar(name) {
    return name.split(" ").map((w) => w[0]).slice(0, 2).join("");
  }
  fmt(n) {
    return "\u20B9" + n.toLocaleString("en-IN");
  }
  viewCustomer(id) {
    this.router.navigate(["/customers", id]);
  }
  static \u0275fac = function CustomersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomersComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomersComponent, selectors: [["app-customers"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 2, consts: [[1, "page"], [4, "ngIf"], [1, "page-hd"], [1, "page-hd-left"], [1, "page-hd-title"], [1, "page-hd-sub"], [1, "source-cards"], [1, "source-card", 3, "click"], [2, "display", "flex", "align-items", "flex-start", "gap", "16px"], [1, "sc-icon", "sc-icon-blue"], [1, "icon", "icon-lg"], [2, "flex", "1"], [2, "font-size", "11px", "font-weight", "700", "color", "var(--t3)", "text-transform", "uppercase", "letter-spacing", ".6px"], [2, "font-size", "36px", "font-weight", "900", "color", "var(--t1)", "line-height", "1.1", "margin", "4px 0"], [2, "font-size", "12px", "color", "var(--t2)"], ["class", "badge badge-amber", 4, "ngIf"], [1, "sc-breakdown"], ["style", "display:flex;align-items:center;gap:6px;flex:1", 4, "ngFor", "ngForOf"], [2, "font-size", "13px", "font-weight", "700", "color", "var(--blue)", "text-align", "right", "display", "flex", "align-items", "center", "justify-content", "flex-end", "gap", "4px"], [1, "icon", "icon-sm"], [1, "source-card", "source-card-store", 3, "click"], [1, "sc-icon", "sc-icon-green"], [1, "sc-cta-store", 2, "display", "flex", "align-items", "center", "justify-content", "flex-end", "gap", "4px"], [1, "badge", "badge-amber"], [1, "icon", "icon-xs"], [2, "display", "flex", "align-items", "center", "gap", "6px", "flex", "1"], [1, "sc-dot"], [2, "font-size", "11px", "color", "var(--t3)", "flex", "1"], [2, "font-size", "13px", "font-weight", "800", "color", "var(--t1)"], [2, "display", "flex", "align-items", "center", "gap", "10px"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "filter-bar"], [1, "search-bar"], [1, "sb-icon", "icon", "icon-sm"], ["type", "text", "placeholder", "Search name, email or phone\u2026", 3, "ngModelChange", "ngModel"], ["class", "sb-clear", 3, "click", 4, "ngIf"], [1, "tabs-pill", 2, "align-self", "flex-start"], [1, "tab-btn", 3, "click"], ["class", "tab-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "tbl-card"], [1, "tbl-wrap"], [1, "tbl"], ["class", "tbl-row", 3, "click", 4, "ngFor", "ngForOf"], ["class", "empty", "style", "padding:40px", 4, "ngIf"], [1, "sb-clear", 3, "click"], [1, "tbl-row", 3, "click"], [1, "cust-avatar"], [2, "font-weight", "600", "color", "var(--t1)"], [2, "font-size", "11px", "color", "var(--t3)"], [2, "font-size", "12px", "color", "var(--t3)"], [1, "badge"], [2, "font-weight", "700", "color", "var(--t1)"], ["style", "color:var(--t3);font-size:12px", 4, "ngIf"], [2, "color", "var(--t3)", "font-size", "12px"], [1, "empty", 2, "padding", "40px"], [1, "empty-icon"], [1, "icon", "icon-xl", "icon-muted"], [1, "empty-title"]], template: function CustomersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, CustomersComponent_ng_container_1_Template, 46, 9, "ng-container", 1)(2, CustomersComponent_ng_container_2_Template, 44, 9, "ng-container", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.selectedSource);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedSource);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.source-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n.source-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1.5px solid var(--border);\n  border-radius: var(--radius-lg);\n  padding: 24px;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.source-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-md);\n  transform: translateY(-2px);\n  border-color: var(--blue);\n}\n.source-card.source-card-store[_ngcontent-%COMP%]:hover {\n  border-color: #388E3C;\n}\n.sc-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.sc-icon.sc-icon-blue[_ngcontent-%COMP%] {\n  background: var(--blue-soft);\n  color: var(--blue);\n}\n.sc-icon.sc-icon-green[_ngcontent-%COMP%] {\n  background: rgba(56, 142, 60, 0.1);\n  color: #388E3C;\n}\n.sc-breakdown[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 12px 14px;\n  border-radius: var(--radius);\n  background: var(--surface2);\n}\n.sc-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.sc-dot.sc-dot-retail[_ngcontent-%COMP%] {\n  background: var(--blue);\n}\n.sc-dot.sc-dot-wholesale[_ngcontent-%COMP%] {\n  background: #388E3C;\n}\n.sc-dot.sc-dot-broker[_ngcontent-%COMP%] {\n  background: var(--purple);\n}\n.sc-cta-store[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #388E3C;\n}\n.cust-avatar[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 800;\n  color: #fff;\n  flex-shrink: 0;\n}\n.cust-avatar.cust-avatar-retail[_ngcontent-%COMP%] {\n  background: var(--blue);\n}\n.cust-avatar.cust-avatar-wholesale[_ngcontent-%COMP%] {\n  background: #388E3C;\n}\n.cust-avatar.cust-avatar-broker[_ngcontent-%COMP%] {\n  background: var(--purple);\n}\n@media (max-width: 700px) {\n  .source-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=customers.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomersComponent, { className: "CustomersComponent", filePath: "src\\app\\pages\\customers\\customers.component.ts", lineNumber: 45 });
})();
export {
  CustomersComponent
};
//# sourceMappingURL=chunk-ARCF23XN.js.map
