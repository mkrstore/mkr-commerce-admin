import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-OOFYAVIO.js";
import {
  ActivatedRoute,
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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-PEVOVQSE.js";

// src/app/pages/customer-detail/customer-detail.component.ts
function CustomerDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "span", 7);
    \u0275\u0275text(4, "person");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 8);
    \u0275\u0275text(6, "Customer not found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 9);
    \u0275\u0275listener("click", function CustomerDetailComponent_div_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275elementStart(8, "span", 10);
    \u0275\u0275text(9, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Back to Customers ");
    \u0275\u0275elementEnd()()();
  }
}
function CustomerDetailComponent_div_1_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 56);
    \u0275\u0275listener("click", function CustomerDetailComponent_div_1_button_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openCollect());
    });
    \u0275\u0275elementStart(1, "span", 10);
    \u0275\u0275text(2, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Collect ", ctx_r1.fmt(ctx_r1.customer.pendingAmount), " ");
  }
}
function CustomerDetailComponent_div_1_span_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.fmt(ctx_r1.customer.pendingAmount), " ");
  }
}
function CustomerDetailComponent_div_1_span_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "Clear");
    \u0275\u0275elementEnd();
  }
}
function CustomerDetailComponent_div_1_div_83_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 66);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 67);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 68);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 69);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span", 17);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "span", 17);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 70);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", o_r5.id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r5.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r5.items);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmt(o_r5.amount));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-amber", o_r5.statusClass === "pending")("badge-blue", o_r5.statusClass === "confirmed")("badge-purple", o_r5.statusClass === "shipped")("badge-green", o_r5.statusClass === "delivered")("badge-red", o_r5.statusClass === "cancelled");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", o_r5.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-green", o_r5.paymentStatus === "Paid")("badge-amber", o_r5.paymentStatus === "Pending");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", o_r5.paymentStatus === "Paid" ? "Paid" : "Pending", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r5.paymentMethod);
  }
}
function CustomerDetailComponent_div_1_div_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44)(2, "div", 45);
    \u0275\u0275text(3, "Order History");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 58)(5, "table", 59)(6, "thead")(7, "tr")(8, "th");
    \u0275\u0275text(9, "Order ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 60);
    \u0275\u0275text(15, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Payment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Method");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275template(23, CustomerDetailComponent_div_1_div_83_tr_23_Template, 18, 21, "tr", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "tfoot")(25, "tr", 62)(26, "td", 63);
    \u0275\u0275text(27, " Total Revenue from Customer ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "td", 64);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "td", 65);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(23);
    \u0275\u0275property("ngForOf", ctx_r1.customer.orders);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.fmt(ctx_r1.totalRevenue), " ");
  }
}
function CustomerDetailComponent_div_1_div_84_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74)(1, "div", 6)(2, "span", 75);
    \u0275\u0275text(3, "menu_book");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 76);
    \u0275\u0275text(5, "No khata entries. This customer has no outstanding balance.");
    \u0275\u0275elementEnd()();
  }
}
function CustomerDetailComponent_div_1_div_84_div_9_tr_17_a_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 84);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(k_r7.orderId);
  }
}
function CustomerDetailComponent_div_1_div_84_div_9_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 67);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 79);
    \u0275\u0275text(4);
    \u0275\u0275template(5, CustomerDetailComponent_div_1_div_84_div_9_tr_17_a_5_Template, 2, 1, "a", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "span", 17);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 81);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 82);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 83);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const k_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(k_r7.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", k_r7.description, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", k_r7.orderId);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-blue", k_r7.entryType === "auto-order")("badge-red", k_r7.entryType === "manual-debit")("badge-green", k_r7.entryType === "manual-credit");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", k_r7.entryType === "auto-order" ? "Auto" : k_r7.entryType === "manual-debit" ? "Credit Given" : "Payment", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", k_r7.debit > 0 ? ctx_r1.fmt(k_r7.debit) : "\u2014", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", k_r7.credit > 0 ? ctx_r1.fmt(k_r7.credit) : "\u2014", " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", k_r7.balance > 0 ? "var(--red)" : "var(--green)");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.fmt(k_r7.balance), " ");
  }
}
function CustomerDetailComponent_div_1_div_84_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "table", 59)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 60);
    \u0275\u0275text(11, "Debit (Owes)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 60);
    \u0275\u0275text(13, "Credit (Paid)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 60);
    \u0275\u0275text(15, "Balance");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, CustomerDetailComponent_div_1_div_84_div_9_tr_17_Template, 15, 15, "tr", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "tfoot")(19, "tr", 62)(20, "td", 77);
    \u0275\u0275text(21, " Pending Balance ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 78);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r1.customer.khata);
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("color", ctx_r1.customer.pendingAmount > 0 ? "var(--red)" : "var(--green)");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.customer.pendingAmount > 0 ? ctx_r1.fmt(ctx_r1.customer.pendingAmount) : "Clear", " ");
  }
}
function CustomerDetailComponent_div_1_div_84_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 85)(1, "div", 86)(2, "span", 87);
    \u0275\u0275text(3, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 88);
    \u0275\u0275listener("click", function CustomerDetailComponent_div_1_div_84_div_10_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openCollect());
    });
    \u0275\u0275elementStart(6, "span", 10);
    \u0275\u0275text(7, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Collect Payment ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.fmt(ctx_r1.customer.pendingAmount), " is due from this customer ");
  }
}
function CustomerDetailComponent_div_1_div_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44)(2, "div", 45);
    \u0275\u0275text(3, "Khata Book");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 9);
    \u0275\u0275listener("click", function CustomerDetailComponent_div_1_div_84_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openKhata());
    });
    \u0275\u0275elementStart(5, "span", 10);
    \u0275\u0275text(6, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Add Entry ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, CustomerDetailComponent_div_1_div_84_div_8_Template, 6, 0, "div", 71)(9, CustomerDetailComponent_div_1_div_84_div_9_Template, 24, 4, "div", 72)(10, CustomerDetailComponent_div_1_div_84_div_10_Template, 9, 1, "div", 73);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.customer.khata.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.customer.khata.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.customer.pendingAmount > 0);
  }
}
function CustomerDetailComponent_div_1_div_85_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.customer.notes, " ");
  }
}
function CustomerDetailComponent_div_1_div_85_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275text(1, " No notes added yet. Click Edit Notes to add. ");
    \u0275\u0275elementEnd();
  }
}
function CustomerDetailComponent_div_1_div_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44)(2, "div", 45);
    \u0275\u0275text(3, "Staff Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 9);
    \u0275\u0275listener("click", function CustomerDetailComponent_div_1_div_85_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit());
    });
    \u0275\u0275elementStart(5, "span", 10);
    \u0275\u0275text(6, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Edit Notes ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 46);
    \u0275\u0275template(9, CustomerDetailComponent_div_1_div_85_div_9_Template, 2, 1, "div", 89)(10, CustomerDetailComponent_div_1_div_85_div_10_Template, 2, 0, "div", 90);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.customer.notes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.customer.notes);
  }
}
function CustomerDetailComponent_div_1_div_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "span", 48);
    \u0275\u0275text(2, "GST No.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "code", 51);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.customer.gstNumber);
  }
}
function CustomerDetailComponent_div_1_button_143_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 93);
    \u0275\u0275listener("click", function CustomerDetailComponent_div_1_button_143_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openCollect());
    });
    \u0275\u0275elementStart(1, "span", 10);
    \u0275\u0275text(2, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Collect Payment ");
    \u0275\u0275elementEnd();
  }
}
function CustomerDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 11)(2, "div", 12)(3, "div", 13)(4, "button", 9);
    \u0275\u0275listener("click", function CustomerDetailComponent_div_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275elementStart(5, "span", 10);
    \u0275\u0275text(6, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 14);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div")(10, "div", 15);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 16)(13, "span", 17);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 17)(16, "span", 18);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 19);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(21, "div", 20);
    \u0275\u0275template(22, CustomerDetailComponent_div_1_button_22_Template, 4, 1, "button", 21);
    \u0275\u0275elementStart(23, "button", 22);
    \u0275\u0275listener("click", function CustomerDetailComponent_div_1_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEdit());
    });
    \u0275\u0275elementStart(24, "span", 10);
    \u0275\u0275text(25, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " Edit ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 23)(28, "div", 24)(29, "div", 25)(30, "span", 26);
    \u0275\u0275text(31, "payments");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div")(33, "div", 27);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 19);
    \u0275\u0275text(36, "Total Revenue");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 24)(38, "div", 28)(39, "span", 29);
    \u0275\u0275text(40, "package_2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div")(42, "div", 27);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 19);
    \u0275\u0275text(45, "Total Orders");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 24)(47, "div", 30)(48, "span", 10);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div")(51, "div", 31);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 19);
    \u0275\u0275text(54, "Pending Balance");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "div", 24)(56, "div", 32)(57, "span", 33);
    \u0275\u0275text(58, "calendar_today");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div")(60, "div", 27);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 19);
    \u0275\u0275text(63, "Last Order");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(64, "div", 34)(65, "div", 35)(66, "div", 36)(67, "button", 37);
    \u0275\u0275listener("click", function CustomerDetailComponent_div_1_Template_button_click_67_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab = "orders");
    });
    \u0275\u0275elementStart(68, "span", 10);
    \u0275\u0275text(69, "package_2");
    \u0275\u0275elementEnd();
    \u0275\u0275text(70, " Orders ");
    \u0275\u0275elementStart(71, "span", 38);
    \u0275\u0275text(72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "button", 37);
    \u0275\u0275listener("click", function CustomerDetailComponent_div_1_Template_button_click_73_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab = "khata");
    });
    \u0275\u0275elementStart(74, "span", 10);
    \u0275\u0275text(75, "menu_book");
    \u0275\u0275elementEnd();
    \u0275\u0275text(76, " Khata Book ");
    \u0275\u0275template(77, CustomerDetailComponent_div_1_span_77_Template, 2, 1, "span", 39)(78, CustomerDetailComponent_div_1_span_78_Template, 2, 0, "span", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "button", 37);
    \u0275\u0275listener("click", function CustomerDetailComponent_div_1_Template_button_click_79_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab = "notes");
    });
    \u0275\u0275elementStart(80, "span", 10);
    \u0275\u0275text(81, "notes");
    \u0275\u0275elementEnd();
    \u0275\u0275text(82, " Notes ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(83, CustomerDetailComponent_div_1_div_83_Template, 31, 2, "div", 41)(84, CustomerDetailComponent_div_1_div_84_Template, 11, 3, "div", 41)(85, CustomerDetailComponent_div_1_div_85_Template, 11, 2, "div", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "div", 42)(87, "div", 43)(88, "div", 44)(89, "div", 45);
    \u0275\u0275text(90, "Contact Info");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(91, "div", 46)(92, "div", 47)(93, "span", 48);
    \u0275\u0275text(94, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "span", 49);
    \u0275\u0275text(96);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(97, "div", 47)(98, "span", 48);
    \u0275\u0275text(99, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "span", 49);
    \u0275\u0275text(101);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(102, "div", 47)(103, "span", 48);
    \u0275\u0275text(104, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "span", 49);
    \u0275\u0275text(106);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(107, CustomerDetailComponent_div_1_div_107_Template, 5, 1, "div", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(108, "div", 43)(109, "div", 44)(110, "div", 45);
    \u0275\u0275text(111, "Account Info");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(112, "div", 46)(113, "div", 47)(114, "span", 48);
    \u0275\u0275text(115, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "code", 51);
    \u0275\u0275text(117);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(118, "div", 47)(119, "span", 48);
    \u0275\u0275text(120, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "span", 17);
    \u0275\u0275text(122);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(123, "div", 47)(124, "span", 48);
    \u0275\u0275text(125, "Channel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "span", 17);
    \u0275\u0275text(127);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(128, "div", 47)(129, "span", 48);
    \u0275\u0275text(130, "Since");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "span", 49);
    \u0275\u0275text(132);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(133, "div", 52)(134, "span", 48);
    \u0275\u0275text(135, "Last Order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "span", 49);
    \u0275\u0275text(137);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(138, "div", 43)(139, "div", 44)(140, "div", 45);
    \u0275\u0275text(141, "Actions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(142, "div", 53);
    \u0275\u0275template(143, CustomerDetailComponent_div_1_button_143_Template, 4, 0, "button", 54);
    \u0275\u0275elementStart(144, "button", 55);
    \u0275\u0275listener("click", function CustomerDetailComponent_div_1_Template_button_click_144_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openKhata());
    });
    \u0275\u0275elementStart(145, "span", 10);
    \u0275\u0275text(146, "menu_book");
    \u0275\u0275elementEnd();
    \u0275\u0275text(147, " Add Khata Entry ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(148, "button", 55);
    \u0275\u0275listener("click", function CustomerDetailComponent_div_1_Template_button_click_148_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEdit());
    });
    \u0275\u0275elementStart(149, "span", 10);
    \u0275\u0275text(150, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(151, " Edit Customer ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275classMap("cd-avatar-" + ctx_r1.customer.type.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.avatar(ctx_r1.customer.name), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.customer.name);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-blue", ctx_r1.customer.type === "Retail")("badge-green", ctx_r1.customer.type === "Wholesale")("badge-purple", ctx_r1.customer.type === "Broker");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.customer.type, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("badge-blue", ctx_r1.customer.source === "Online")("badge-green", ctx_r1.customer.source === "In-Store");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.customer.source === "Online" ? "language" : "store");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.customer.source, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Customer since ", ctx_r1.customer.since, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.customer.pendingAmount > 0);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.fmt(ctx_r1.customer.totalSpent));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.totalOrders);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("stat-card-warn", ctx_r1.customer.pendingAmount > 0);
    \u0275\u0275advance();
    \u0275\u0275classProp("stat-icon-amber", ctx_r1.customer.pendingAmount > 0)("stat-icon-green", ctx_r1.customer.pendingAmount === 0);
    \u0275\u0275advance();
    \u0275\u0275classProp("icon-amber", ctx_r1.customer.pendingAmount > 0)("icon-green", ctx_r1.customer.pendingAmount === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.customer.pendingAmount > 0 ? "warning" : "check_circle", " ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r1.customer.pendingAmount > 0 ? "var(--amber)" : "var(--green)");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.customer.pendingAmount > 0 ? ctx_r1.fmt(ctx_r1.customer.pendingAmount) : "Clear", " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.customer.lastOrder);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "orders");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.totalOrders);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.activeTab === "khata");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.customer.pendingAmount > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.customer.pendingAmount === 0);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.activeTab === "notes");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "orders");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "khata");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "notes");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.customer.email);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.customer.phone);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.customer.address);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.customer.gstNumber);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.customer.id);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("badge-blue", ctx_r1.customer.type === "Retail")("badge-green", ctx_r1.customer.type === "Wholesale")("badge-purple", ctx_r1.customer.type === "Broker");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.customer.type, " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("badge-blue", ctx_r1.customer.source === "Online")("badge-green", ctx_r1.customer.source === "In-Store");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.customer.source, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.customer.since);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.customer.lastOrder);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.customer.pendingAmount > 0);
  }
}
function CustomerDetailComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275listener("click", function CustomerDetailComponent_div_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showEditModal = false);
    });
    \u0275\u0275elementEnd();
  }
}
function CustomerDetailComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 95);
    \u0275\u0275listener("click", function CustomerDetailComponent_div_3_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 96)(2, "span", 97);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 98);
    \u0275\u0275listener("click", function CustomerDetailComponent_div_3_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showEditModal = false);
    });
    \u0275\u0275elementStart(5, "span", 10);
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 99)(8, "div", 100)(9, "div", 101)(10, "label", 102);
    \u0275\u0275text(11, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 103);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerDetailComponent_div_3_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editForm.name, $event) || (ctx_r1.editForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 101)(14, "label", 102);
    \u0275\u0275text(15, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 104);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerDetailComponent_div_3_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editForm.phone, $event) || (ctx_r1.editForm.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 101)(18, "label", 102);
    \u0275\u0275text(19, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 105);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerDetailComponent_div_3_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editForm.email, $event) || (ctx_r1.editForm.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 101)(22, "label", 102);
    \u0275\u0275text(23, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 106);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerDetailComponent_div_3_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editForm.address, $event) || (ctx_r1.editForm.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 100)(26, "div", 101)(27, "label", 102);
    \u0275\u0275text(28, "Customer Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "select", 107);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerDetailComponent_div_3_Template_select_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editForm.type, $event) || (ctx_r1.editForm.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(30, "option", 108);
    \u0275\u0275text(31, "Retail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 109);
    \u0275\u0275text(33, "Wholesale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option", 110);
    \u0275\u0275text(35, "Broker");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 101)(37, "label", 102);
    \u0275\u0275text(38, "GST Number ");
    \u0275\u0275elementStart(39, "span", 111);
    \u0275\u0275text(40, "(optional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "input", 112);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerDetailComponent_div_3_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editForm.gstNumber, $event) || (ctx_r1.editForm.gstNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "div", 101)(43, "label", 102);
    \u0275\u0275text(44, "Staff Notes ");
    \u0275\u0275elementStart(45, "span", 111);
    \u0275\u0275text(46, "(optional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "textarea", 113);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerDetailComponent_div_3_Template_textarea_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editForm.notes, $event) || (ctx_r1.editForm.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 114)(49, "button", 22);
    \u0275\u0275listener("click", function CustomerDetailComponent_div_3_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showEditModal = false);
    });
    \u0275\u0275text(50, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "button", 115);
    \u0275\u0275listener("click", function CustomerDetailComponent_div_3_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveEdit());
    });
    \u0275\u0275text(52, "Save Changes");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Edit Customer \u2014 ", ctx_r1.customer == null ? null : ctx_r1.customer.name, "");
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editForm.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editForm.phone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editForm.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editForm.address);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editForm.type);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editForm.gstNumber);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editForm.notes);
  }
}
function CustomerDetailComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275listener("click", function CustomerDetailComponent_div_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCollectModal = false);
    });
    \u0275\u0275elementEnd();
  }
}
function CustomerDetailComponent_div_5_option_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r15);
  }
}
function CustomerDetailComponent_div_5_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 125);
    \u0275\u0275text(1, " Remaining after collection: ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r1.customer.pendingAmount - ctx_r1.collectAmount <= 0 ? "var(--green)" : "var(--amber)");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.customer.pendingAmount - ctx_r1.collectAmount <= 0 ? "Fully Cleared" : ctx_r1.fmt(ctx_r1.customer.pendingAmount - ctx_r1.collectAmount), " ");
  }
}
function CustomerDetailComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 116);
    \u0275\u0275listener("click", function CustomerDetailComponent_div_5_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 96)(2, "span", 97);
    \u0275\u0275text(3, "Collect Payment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 98);
    \u0275\u0275listener("click", function CustomerDetailComponent_div_5_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCollectModal = false);
    });
    \u0275\u0275elementStart(5, "span", 10);
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 99)(8, "div", 117)(9, "div", 118);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "div", 119);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 120);
    \u0275\u0275text(15, " Outstanding: ");
    \u0275\u0275elementStart(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(18, "div", 101)(19, "label", 102);
    \u0275\u0275text(20, "Amount Received (\u20B9)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 121);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerDetailComponent_div_5_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.collectAmount, $event) || (ctx_r1.collectAmount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 101)(23, "label", 102);
    \u0275\u0275text(24, "Payment Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "select", 107);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerDetailComponent_div_5_Template_select_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.collectMethod, $event) || (ctx_r1.collectMethod = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(26, CustomerDetailComponent_div_5_option_26_Template, 2, 1, "option", 61);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 101)(28, "label", 102);
    \u0275\u0275text(29, "Note ");
    \u0275\u0275elementStart(30, "span", 111);
    \u0275\u0275text(31, "(optional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "input", 122);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerDetailComponent_div_5_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.collectNote, $event) || (ctx_r1.collectNote = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(33, CustomerDetailComponent_div_5_div_33_Template, 4, 3, "div", 123);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 114)(35, "button", 22);
    \u0275\u0275listener("click", function CustomerDetailComponent_div_5_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCollectModal = false);
    });
    \u0275\u0275text(36, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 124);
    \u0275\u0275listener("click", function CustomerDetailComponent_div_5_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitCollect());
    });
    \u0275\u0275elementStart(38, "span", 10);
    \u0275\u0275text(39, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, " Mark Collected ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275classMap("cd-avatar-" + ctx_r1.customer.type.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.avatar(ctx_r1.customer.name), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.customer.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.fmt(ctx_r1.customer.pendingAmount));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.collectAmount);
    \u0275\u0275property("max", ctx_r1.customer.pendingAmount);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.collectMethod);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.paymentMethods);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.collectNote);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.collectAmount > 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.collectAmount <= 0);
  }
}
function CustomerDetailComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275listener("click", function CustomerDetailComponent_div_6_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showKhataModal = false);
    });
    \u0275\u0275elementEnd();
  }
}
function CustomerDetailComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 116);
    \u0275\u0275listener("click", function CustomerDetailComponent_div_7_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r17);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 96)(2, "span", 97);
    \u0275\u0275text(3, "Add Khata Entry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 98);
    \u0275\u0275listener("click", function CustomerDetailComponent_div_7_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showKhataModal = false);
    });
    \u0275\u0275elementStart(5, "span", 10);
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 99)(8, "div", 126)(9, "button", 127);
    \u0275\u0275listener("click", function CustomerDetailComponent_div_7_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.khataEntryType = "manual-debit");
    });
    \u0275\u0275elementStart(10, "span", 10);
    \u0275\u0275text(11, "arrow_outward");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Credit Given (Customer Owes) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 127);
    \u0275\u0275listener("click", function CustomerDetailComponent_div_7_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.khataEntryType = "manual-credit");
    });
    \u0275\u0275elementStart(14, "span", 10);
    \u0275\u0275text(15, "arrow_downward");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " Payment Received ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 101)(18, "label", 102);
    \u0275\u0275text(19, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 128);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerDetailComponent_div_7_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.khataDesc, $event) || (ctx_r1.khataDesc = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 101)(22, "label", 102);
    \u0275\u0275text(23, "Amount (\u20B9)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 129);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerDetailComponent_div_7_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.khataAmount, $event) || (ctx_r1.khataAmount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 101)(26, "label", 102);
    \u0275\u0275text(27, "Note ");
    \u0275\u0275elementStart(28, "span", 111);
    \u0275\u0275text(29, "(optional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "input", 130);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerDetailComponent_div_7_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.khataNote, $event) || (ctx_r1.khataNote = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 114)(32, "button", 22);
    \u0275\u0275listener("click", function CustomerDetailComponent_div_7_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showKhataModal = false);
    });
    \u0275\u0275text(33, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 131);
    \u0275\u0275listener("click", function CustomerDetailComponent_div_7_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitKhata());
    });
    \u0275\u0275text(35, " Add Entry ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275classProp("entry-toggle-debit", ctx_r1.khataEntryType === "manual-debit");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("entry-toggle-credit", ctx_r1.khataEntryType === "manual-credit");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.khataDesc);
    \u0275\u0275property("placeholder", ctx_r1.khataEntryType === "manual-debit" ? "e.g. Goods given on credit" : "e.g. Cash received at store");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.khataAmount);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.khataNote);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r1.khataDesc || ctx_r1.khataAmount <= 0);
  }
}
var CUSTOMERS = {
  "CUS-001": {
    id: "CUS-001",
    name: "Ravi Kumar",
    email: "ravi.k@gmail.com",
    phone: "+91 98765 43210",
    type: "Retail",
    source: "Online",
    address: "12, Rose Garden, Koramangala, Bengaluru \u2013 560034",
    since: "Jan 2025",
    lastOrder: "Apr 8, 2026",
    gstNumber: "",
    totalSpent: 14200,
    pendingAmount: 0,
    orders: [
      { id: "#MKR-00128", date: "Apr 8, 2026", items: "Nike Polo T-Shirt (\xD71)", amount: 1168, status: "Pending", statusClass: "pending", paymentMethod: "UPI", paymentStatus: "Paid" },
      { id: "#MKR-00105", date: "Mar 12, 2026", items: "Adidas Running Shoes (\xD71)", amount: 3968, status: "Delivered", statusClass: "delivered", paymentMethod: "UPI", paymentStatus: "Paid" },
      { id: "#MKR-00089", date: "Feb 2, 2026", items: "Samsung Galaxy M34 5G (\xD71)", amount: 15999, status: "Delivered", statusClass: "delivered", paymentMethod: "Razorpay", paymentStatus: "Paid" }
    ],
    khata: [],
    notes: "Preferred delivery: morning slots. Requested gift wrapping on last order."
  },
  "CUS-002": {
    id: "CUS-002",
    name: "Meena Patel",
    email: "meena.p@yahoo.com",
    phone: "+91 99887 76655",
    type: "Broker",
    source: "Online",
    address: "78, Satellite Road, Ahmedabad \u2013 380015",
    since: "Mar 2024",
    lastOrder: "Apr 8, 2026",
    gstNumber: "24AABCM1234Z1Z2",
    totalSpent: 105800,
    pendingAmount: 0,
    orders: [
      { id: "#MKR-00126", date: "Apr 8, 2026", items: 'Samsung 32" Smart TV (\xD72)', amount: 26318, status: "Shipped", statusClass: "shipped", paymentMethod: "Razorpay", paymentStatus: "Paid" },
      { id: "#MKR-00098", date: "Mar 5, 2026", items: "HP Pavilion 15 Laptop (\xD71)", amount: 54990, status: "Delivered", statusClass: "delivered", paymentMethod: "Razorpay", paymentStatus: "Paid" },
      { id: "#MKR-00074", date: "Jan 14, 2026", items: "Samsung Galaxy M34 5G (\xD71), TV \xD71", amount: 15999, status: "Delivered", statusClass: "delivered", paymentMethod: "Razorpay", paymentStatus: "Paid" },
      { id: "#MKR-00051", date: "Nov 20, 2025", items: "Whirlpool 1.5T AC 5-Star (\xD71)", amount: 32990, status: "Delivered", statusClass: "delivered", paymentMethod: "Razorpay", paymentStatus: "Paid" }
    ],
    khata: [],
    notes: "Bulk broker \u2014 deals in electronics. Negotiate price for orders above \u20B950k."
  },
  "CUS-003": {
    id: "CUS-003",
    name: "Kiran Das",
    email: "kiran.d@gmail.com",
    phone: "+91 77665 44332",
    type: "Retail",
    source: "Online",
    address: "11, Park Street, Kolkata \u2013 700016",
    since: "Aug 2025",
    lastOrder: "Apr 6, 2026",
    gstNumber: "",
    totalSpent: 3200,
    pendingAmount: 0,
    orders: [
      { id: "#MKR-00123", date: "Apr 6, 2026", items: "Mothercare School Uniform (\xD72)", amount: 1307, status: "Delivered", statusClass: "delivered", paymentMethod: "UPI", paymentStatus: "Paid" },
      { id: "#MKR-00112", date: "Mar 18, 2026", items: "Hamleys Teddy Bear 30cm (\xD72)", amount: 1599, status: "Delivered", statusClass: "delivered", paymentMethod: "UPI", paymentStatus: "Paid" }
    ],
    khata: [],
    notes: ""
  },
  "CUS-004": {
    id: "CUS-004",
    name: "Farhan Ali",
    email: "farhan.a@gmail.com",
    phone: "+91 66554 33221",
    type: "Broker",
    source: "Online",
    address: "88, MIDC Road, Pune \u2013 411019",
    since: "Nov 2023",
    lastOrder: "Apr 6, 2026",
    gstNumber: "27AABFA9876B1Z3",
    totalSpent: 45e4,
    pendingAmount: 0,
    orders: [
      { id: "#MKR-00122", date: "Apr 6, 2026", items: "Samsung TV \xD75, Whirlpool AC \xD72", amount: 135844, status: "Shipped", statusClass: "shipped", paymentMethod: "Razorpay", paymentStatus: "Paid" },
      { id: "#MKR-00096", date: "Mar 2, 2026", items: "HP Laptop \xD73, Samsung M34 \xD72", amount: 196470, status: "Delivered", statusClass: "delivered", paymentMethod: "Razorpay", paymentStatus: "Paid" },
      { id: "#MKR-00078", date: "Jan 28, 2026", items: "LG Washing Machine \xD75", amount: 92450, status: "Delivered", statusClass: "delivered", paymentMethod: "Razorpay", paymentStatus: "Paid" },
      { id: "#MKR-00055", date: "Dec 10, 2025", items: "Whirlpool AC \xD73", amount: 98970, status: "Delivered", statusClass: "delivered", paymentMethod: "Razorpay", paymentStatus: "Paid" },
      { id: "#MKR-00039", date: "Nov 5, 2025", items: "Samsung TV \xD72", amount: 31998, status: "Delivered", statusClass: "delivered", paymentMethod: "Razorpay", paymentStatus: "Paid" }
    ],
    khata: [],
    notes: "Top broker \u2014 Pune region. Prefers Razorpay. Usually orders in bulk every 4-6 weeks."
  },
  "CUS-005": {
    id: "CUS-005",
    name: "Arun Nair",
    email: "arun.n@gmail.com",
    phone: "+91 97654 32109",
    type: "Retail",
    source: "Online",
    address: "23, MG Road, Kochi \u2013 682016",
    since: "Jun 2025",
    lastOrder: "Apr 7, 2026",
    gstNumber: "",
    totalSpent: 7500,
    pendingAmount: 0,
    orders: [
      { id: "#MKR-00125", date: "Apr 7, 2026", items: "Adidas Running Shoes (\xD71)", amount: 3968, status: "Delivered", statusClass: "delivered", paymentMethod: "COD", paymentStatus: "Paid" },
      { id: "#MKR-00108", date: "Mar 8, 2026", items: "Nike Polo T-Shirt (\xD72)", amount: 2098, status: "Delivered", statusClass: "delivered", paymentMethod: "UPI", paymentStatus: "Paid" }
    ],
    khata: [],
    notes: ""
  },
  "CUS-006": {
    id: "CUS-006",
    name: "Anjali Verma",
    email: "anjali.v@outlook.com",
    phone: "+91 93456 78901",
    type: "Wholesale",
    source: "Online",
    address: "34, Nehru Place, New Delhi \u2013 110019",
    since: "Feb 2025",
    lastOrder: "Apr 1, 2026",
    gstNumber: "07AABAV4567C1Z5",
    totalSpent: 45e3,
    pendingAmount: 15e3,
    orders: [
      { id: "#MKR-00115", date: "Apr 1, 2026", items: "Libas Floral Kurta Set (\xD720)", amount: 15e3, status: "Confirmed", statusClass: "confirmed", paymentMethod: "Bank Transfer", paymentStatus: "Pending" },
      { id: "#MKR-00092", date: "Feb 20, 2026", items: "Saree with Blouse Piece (\xD710)", amount: 12990, status: "Delivered", statusClass: "delivered", paymentMethod: "Bank Transfer", paymentStatus: "Paid" },
      { id: "#MKR-00071", date: "Jan 8, 2026", items: "Libas Floral Kurta Set (\xD725)", amount: 17500, status: "Delivered", statusClass: "delivered", paymentMethod: "Bank Transfer", paymentStatus: "Paid" }
    ],
    khata: [
      { id: "KH-001", date: "Apr 1, 2026", description: "Order #MKR-00115 \u2014 Bank Transfer awaiting", entryType: "auto-order", debit: 15e3, credit: 0, balance: 15e3, orderId: "#MKR-00115" }
    ],
    notes: "Delhi wholesale distributor \u2014 women's ethnic wear. Bank transfers take 2-3 days."
  },
  "CUS-007": {
    id: "CUS-007",
    name: "Priya Sharma",
    email: "priya.s@outlook.com",
    phone: "+91 91234 56789",
    type: "Wholesale",
    source: "In-Store",
    address: "45, Linking Road, Bandra West, Mumbai \u2013 400050",
    since: "Jan 2023",
    lastOrder: "Apr 8, 2026",
    gstNumber: "27AABPS7890D1Z1",
    totalSpent: 24e4,
    pendingAmount: 0,
    orders: [
      { id: "#MKR-00127", date: "Apr 8, 2026", items: "Libas Floral Kurta Set \xD710, School Uniform \xD75", amount: 7102, status: "Confirmed", statusClass: "confirmed", paymentMethod: "Bank Transfer", paymentStatus: "Paid" },
      { id: "#MKR-00099", date: "Mar 6, 2026", items: "Saree with Blouse Piece \xD715", amount: 19485, status: "Delivered", statusClass: "delivered", paymentMethod: "Bank Transfer", paymentStatus: "Paid" },
      { id: "#MKR-00082", date: "Feb 10, 2026", items: "Libas Floral Kurta Set \xD730", amount: 21e3, status: "Delivered", statusClass: "delivered", paymentMethod: "Cash", paymentStatus: "Paid" },
      { id: "#MKR-00064", date: "Jan 5, 2026", items: "School Uniform \xD740, Kurta \xD720", amount: 31760, status: "Delivered", statusClass: "delivered", paymentMethod: "Bank Transfer", paymentStatus: "Paid" }
    ],
    khata: [],
    notes: "Long-standing wholesale client since Jan 2023. Gets 5% extra discount on orders above \u20B920k."
  },
  "CUS-008": {
    id: "CUS-008",
    name: "Sunita Rao",
    email: "sunita.r@gmail.com",
    phone: "+91 88776 55443",
    type: "Wholesale",
    source: "In-Store",
    address: "5, Industrial Estate, Hyderabad \u2013 500038",
    since: "May 2024",
    lastOrder: "Apr 7, 2026",
    gstNumber: "36AABSR5432E1Z4",
    totalSpent: 38e4,
    pendingAmount: 91920,
    orders: [
      { id: "#MKR-00124", date: "Apr 7, 2026", items: "Whirlpool 1.5T AC 5-Star (\xD73)", amount: 91920, status: "Pending", statusClass: "pending", paymentMethod: "Bank Transfer", paymentStatus: "Pending" },
      { id: "#MKR-00103", date: "Mar 4, 2026", items: "LG 7kg Washing Machine (\xD74)", amount: 73960, status: "Delivered", statusClass: "delivered", paymentMethod: "Bank Transfer", paymentStatus: "Paid" },
      { id: "#MKR-00085", date: "Feb 1, 2026", items: "Whirlpool AC \xD72", amount: 65980, status: "Delivered", statusClass: "delivered", paymentMethod: "Bank Transfer", paymentStatus: "Paid" }
    ],
    khata: [
      { id: "KH-002", date: "Apr 7, 2026", description: "Order #MKR-00124 \u2014 Goods delivered, bank transfer awaited", entryType: "auto-order", debit: 91920, credit: 0, balance: 91920, orderId: "#MKR-00124" }
    ],
    notes: "Awaiting bank transfer confirmation for Apr 7 order. Usually pays within 3 business days."
  },
  "CUS-009": {
    id: "CUS-009",
    name: "Deepa Singh",
    email: "deepa.s@gmail.com",
    phone: "+91 85432 10987",
    type: "Retail",
    source: "In-Store",
    address: "67, Gandhi Nagar, Jaipur \u2013 302015",
    since: "Oct 2024",
    lastOrder: "Mar 15, 2026",
    gstNumber: "",
    totalSpent: 12e3,
    pendingAmount: 2500,
    orders: [
      { id: "#MKR-00111", date: "Mar 15, 2026", items: "Saree with Blouse Piece (\xD72)", amount: 2598, status: "Delivered", statusClass: "delivered", paymentMethod: "Cash", paymentStatus: "Paid" },
      { id: "#MKR-00087", date: "Feb 5, 2026", items: "Libas Floral Kurta Set (\xD73)", amount: 1947, status: "Delivered", statusClass: "delivered", paymentMethod: "Cash", paymentStatus: "Paid" },
      { id: "#MKR-00066", date: "Jan 10, 2026", items: "Hamleys Teddy Bear \xD75, Kurta \xD72", amount: 5295, status: "Delivered", statusClass: "delivered", paymentMethod: "Cash", paymentStatus: "Paid" }
    ],
    khata: [
      { id: "KH-003", date: "Mar 10, 2026", description: "Cotton sarees taken on credit", entryType: "manual-debit", debit: 5e3, credit: 0, balance: 5e3 },
      { id: "KH-004", date: "Mar 15, 2026", description: "Partial cash payment received", entryType: "manual-credit", debit: 0, credit: 2500, balance: 2500 }
    ],
    notes: "Regular walk-in customer. Has \u20B92,500 outstanding from March credit purchase."
  },
  "CUS-010": {
    id: "CUS-010",
    name: "Sanjay Mehta",
    email: "sanjay.m@gmail.com",
    phone: "+91 98001 23456",
    type: "Broker",
    source: "In-Store",
    address: "14, Commerce Park, Surat \u2013 395003",
    since: "Jun 2022",
    lastOrder: "Mar 5, 2026",
    gstNumber: "24AABSM2468F1Z6",
    totalSpent: 12e5,
    pendingAmount: 5e4,
    orders: [
      { id: "#MKR-00110", date: "Mar 5, 2026", items: "HP Pavilion Laptop \xD74, Samsung TV \xD73", amount: 265960, status: "Delivered", statusClass: "delivered", paymentMethod: "Bank Transfer", paymentStatus: "Paid" },
      { id: "#MKR-00091", date: "Feb 10, 2026", items: "Whirlpool AC \xD76, LG WM \xD74", amount: 271940, status: "Delivered", statusClass: "delivered", paymentMethod: "Bank Transfer", paymentStatus: "Paid" },
      { id: "#MKR-00072", date: "Jan 12, 2026", items: "Samsung M34 \xD710, HP Laptop \xD72", amount: 269980, status: "Delivered", statusClass: "delivered", paymentMethod: "Bank Transfer", paymentStatus: "Paid" }
    ],
    khata: [
      { id: "KH-005", date: "Feb 20, 2026", description: "Electronics batch given on credit for March sale", entryType: "manual-debit", debit: 8e4, credit: 0, balance: 8e4 },
      { id: "KH-006", date: "Mar 1, 2026", description: "Partial payment received \u2014 cash", entryType: "manual-credit", debit: 0, credit: 3e4, balance: 5e4 }
    ],
    notes: "Premium broker \u2014 Surat textile & electronics belt. Longest-standing customer. Negotiate on orders above \u20B92L."
  }
};
var CustomerDetailComponent = class _CustomerDetailComponent {
  route;
  router;
  customer = null;
  activeTab = "orders";
  // ── Edit modal ──
  showEditModal = false;
  editForm = { name: "", email: "", phone: "", address: "", type: "", gstNumber: "", notes: "" };
  // ── Collect payment modal ──
  showCollectModal = false;
  collectAmount = 0;
  collectMethod = "Cash";
  collectNote = "";
  // ── Add khata entry modal ──
  showKhataModal = false;
  khataEntryType = "manual-debit";
  khataDesc = "";
  khataAmount = 0;
  khataNote = "";
  paymentMethods = ["Cash", "UPI", "Bank Transfer", "Card", "Razorpay"];
  constructor(route, router) {
    this.route = route;
    this.router = router;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id") ?? "";
    this.customer = CUSTOMERS[id] ?? null;
  }
  goBack() {
    this.router.navigate(["/customers"]);
  }
  avatar(name) {
    return name.split(" ").map((w) => w[0]).slice(0, 2).join("");
  }
  fmt(n) {
    return "\u20B9" + n.toLocaleString("en-IN");
  }
  get totalOrders() {
    return this.customer?.orders.length ?? 0;
  }
  get totalRevenue() {
    return this.customer?.orders.reduce((s, o) => s + o.amount, 0) ?? 0;
  }
  // ── Edit ──
  openEdit() {
    if (!this.customer)
      return;
    this.editForm = {
      name: this.customer.name,
      email: this.customer.email,
      phone: this.customer.phone,
      address: this.customer.address,
      type: this.customer.type,
      gstNumber: this.customer.gstNumber,
      notes: this.customer.notes
    };
    this.showEditModal = true;
  }
  saveEdit() {
    if (!this.customer)
      return;
    Object.assign(this.customer, this.editForm);
    this.showEditModal = false;
  }
  // ── Collect payment ──
  openCollect() {
    this.collectAmount = this.customer?.pendingAmount ?? 0;
    this.collectMethod = "Cash";
    this.collectNote = "";
    this.showCollectModal = true;
  }
  submitCollect() {
    if (!this.customer || this.collectAmount <= 0)
      return;
    const amt = Math.min(this.collectAmount, this.customer.pendingAmount);
    const prevBal = this.customer.pendingAmount;
    const newBal = prevBal - amt;
    const entry = {
      id: "KH-" + Date.now(),
      date: (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
      description: `Payment collected \u2014 ${this.collectMethod}${this.collectNote ? " \xB7 " + this.collectNote : ""}`,
      entryType: "manual-credit",
      debit: 0,
      credit: amt,
      balance: newBal
    };
    this.customer.khata.push(entry);
    this.customer.pendingAmount = newBal;
    this.showCollectModal = false;
    this.activeTab = "khata";
  }
  // ── Add khata entry ──
  openKhata() {
    this.khataEntryType = "manual-debit";
    this.khataDesc = "";
    this.khataAmount = 0;
    this.khataNote = "";
    this.showKhataModal = true;
  }
  submitKhata() {
    if (!this.customer || !this.khataDesc || this.khataAmount <= 0)
      return;
    const last = this.customer.khata.length > 0 ? this.customer.khata[this.customer.khata.length - 1].balance : 0;
    const isDebit = this.khataEntryType === "manual-debit";
    const newBal = isDebit ? last + this.khataAmount : Math.max(0, last - this.khataAmount);
    const entry = {
      id: "KH-" + Date.now(),
      date: (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
      description: this.khataDesc + (this.khataNote ? " \xB7 " + this.khataNote : ""),
      entryType: this.khataEntryType,
      debit: isDebit ? this.khataAmount : 0,
      credit: isDebit ? 0 : this.khataAmount,
      balance: newBal
    };
    this.customer.khata.push(entry);
    this.customer.pendingAmount = newBal;
    this.showKhataModal = false;
  }
  static \u0275fac = function CustomerDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomerDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomerDetailComponent, selectors: [["app-customer-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 8, consts: [["class", "page", 4, "ngIf"], ["class", "overlay", 3, "click", 4, "ngIf"], ["class", "modal modal-lg", 3, "click", 4, "ngIf"], ["class", "modal modal-sm", 3, "click", 4, "ngIf"], [1, "page"], [1, "empty", 2, "padding", "80px"], [1, "empty-icon"], [1, "icon", "icon-xl", "icon-muted"], [1, "empty-title"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "icon", "icon-sm"], [1, "page-hd"], [1, "page-hd-left"], [2, "display", "flex", "align-items", "center", "gap", "14px"], [1, "cd-avatar"], [2, "font-size", "18px", "font-weight", "800", "color", "var(--t1)"], [2, "display", "flex", "align-items", "center", "gap", "6px", "flex-wrap", "wrap", "margin-top", "4px"], [1, "badge"], [1, "icon", "icon-xs"], [2, "font-size", "11px", "color", "var(--t3)"], [1, "page-hd-right"], ["class", "btn btn-amber", 3, "click", 4, "ngIf"], [1, "btn", "btn-ghost", 3, "click"], [1, "stat-strip"], [1, "stat-card"], [1, "stat-icon", "stat-icon-blue"], [1, "icon", "icon-sm", "icon-blue"], [2, "font-size", "15px", "font-weight", "800", "color", "var(--t1)"], [1, "stat-icon", "stat-icon-purple"], [1, "icon", "icon-sm", "icon-purple"], [1, "stat-icon"], [2, "font-size", "15px", "font-weight", "800"], [1, "stat-icon", "stat-icon-gray"], [1, "icon", "icon-sm", "icon-muted"], [1, "cd-grid"], [1, "cd-left"], [1, "tabs-pill", 2, "align-self", "flex-start", "margin-bottom", "12px"], [1, "tab-btn", 3, "click"], [2, "font-size", "11px"], ["style", "font-size:11px;color:var(--amber)", 4, "ngIf"], ["style", "font-size:11px", 4, "ngIf"], ["class", "card", 4, "ngIf"], [1, "cd-right"], [1, "card"], [1, "card-hd"], [1, "card-hd-title"], [1, "card-body"], [1, "info-row"], [1, "ir-label"], [1, "ir-val"], ["class", "info-row", 4, "ngIf"], [1, "gst-code"], [1, "info-row", 2, "border-bottom", "none"], [1, "card-body", 2, "display", "flex", "flex-direction", "column", "gap", "8px"], ["class", "btn btn-amber", "style", "width:100%;justify-content:center", 3, "click", 4, "ngIf"], [1, "btn", "btn-ghost", 2, "width", "100%", "justify-content", "flex-start", 3, "click"], [1, "btn", "btn-amber", 3, "click"], [2, "font-size", "11px", "color", "var(--amber)"], [1, "tbl-wrap"], [1, "tbl"], [2, "text-align", "right"], [4, "ngFor", "ngForOf"], [2, "background", "var(--surface2)"], ["colspan", "3", 2, "font-weight", "700", "color", "var(--t2)", "font-size", "13px", "padding", "11px 14px"], [2, "text-align", "right", "font-size", "15px", "font-weight", "900", "color", "var(--blue)", "padding", "11px 14px"], ["colspan", "3"], [2, "font-size", "11px", "color", "var(--blue)", "font-family", "monospace", "background", "var(--blue-light)", "padding", "2px 6px", "border-radius", "4px"], [2, "color", "var(--t2)", "white-space", "nowrap", "font-size", "12px"], [2, "color", "var(--t2)", "font-size", "12px", "max-width", "220px"], [2, "text-align", "right", "font-weight", "700", "color", "var(--t1)"], [2, "color", "var(--t3)", "font-size", "12px", "white-space", "nowrap"], ["class", "empty", "style", "padding:30px", 4, "ngIf"], ["class", "tbl-wrap", 4, "ngIf"], ["class", "khata-cta", 4, "ngIf"], [1, "empty", 2, "padding", "30px"], [1, "icon", "icon-lg", "icon-muted"], [1, "empty-sub"], ["colspan", "5", 2, "font-weight", "700", "color", "var(--t2)", "font-size", "13px", "padding", "11px 14px"], [2, "text-align", "right", "font-size", "15px", "font-weight", "900", "padding", "11px 14px"], [2, "color", "var(--t2)", "font-size", "12px", "max-width", "240px"], ["style", "font-size:11px;color:var(--blue);font-family:monospace;margin-left:4px;cursor:pointer", 4, "ngIf"], [2, "text-align", "right", "color", "var(--red)", "font-weight", "700"], [2, "text-align", "right", "color", "var(--green)", "font-weight", "700"], [2, "text-align", "right", "font-weight", "800"], [2, "font-size", "11px", "color", "var(--blue)", "font-family", "monospace", "margin-left", "4px", "cursor", "pointer"], [1, "khata-cta"], [2, "display", "flex", "align-items", "center", "gap", "6px", "font-size", "13px", "font-weight", "600", "color", "var(--amber)"], [1, "icon", "icon-sm", "icon-amber"], [1, "btn", "btn-amber", "btn-sm", 3, "click"], ["style", "font-size:14px;color:var(--t2);line-height:1.7", 4, "ngIf"], ["style", "font-size:13px;color:var(--t3);font-style:italic", 4, "ngIf"], [2, "font-size", "14px", "color", "var(--t2)", "line-height", "1.7"], [2, "font-size", "13px", "color", "var(--t3)", "font-style", "italic"], [1, "btn", "btn-amber", 2, "width", "100%", "justify-content", "center", 3, "click"], [1, "overlay", 3, "click"], [1, "modal", "modal-lg", 3, "click"], [1, "modal-hd"], [1, "modal-title"], [1, "modal-close", 3, "click"], [1, "modal-body"], [1, "field-row"], [1, "field"], [1, "field-label"], ["placeholder", "Full name", 1, "f-input", 3, "ngModelChange", "ngModel"], ["placeholder", "+91 XXXXX XXXXX", 1, "f-input", 3, "ngModelChange", "ngModel"], ["placeholder", "email@example.com", 1, "f-input", 3, "ngModelChange", "ngModel"], ["placeholder", "Full address with city & PIN", 1, "f-input", 3, "ngModelChange", "ngModel"], [1, "f-select", 3, "ngModelChange", "ngModel"], ["value", "Retail"], ["value", "Wholesale"], ["value", "Broker"], [1, "opt"], ["placeholder", "e.g. 27AABCM1234Z1Z2", 1, "f-input", 3, "ngModelChange", "ngModel"], ["rows", "3", "placeholder", "Internal notes about this customer\u2026", 1, "f-textarea", 3, "ngModelChange", "ngModel"], [1, "modal-ft"], [1, "btn", "btn-primary", 3, "click"], [1, "modal", "modal-sm", 3, "click"], [2, "display", "flex", "align-items", "center", "gap", "12px", "padding", "12px", "background", "var(--surface2)", "border-radius", "var(--radius)"], [1, "cd-avatar", "cd-avatar-sm"], [2, "font-size", "14px", "font-weight", "700", "color", "var(--t1)"], [2, "font-size", "12px", "color", "var(--amber)"], ["type", "number", "min", "1", 1, "f-input", 3, "ngModelChange", "ngModel", "max"], ["placeholder", "e.g. Received at store counter", 1, "f-input", 3, "ngModelChange", "ngModel"], ["style", "padding:10px 14px;background:var(--surface2);border-radius:var(--radius);font-size:13px;color:var(--t2)", 4, "ngIf"], [1, "btn", "btn-success", 3, "click", "disabled"], [2, "padding", "10px 14px", "background", "var(--surface2)", "border-radius", "var(--radius)", "font-size", "13px", "color", "var(--t2)"], [2, "display", "flex", "gap", "8px"], [1, "entry-toggle", 3, "click"], [1, "f-input", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "number", "min", "1", "placeholder", "0", 1, "f-input", 3, "ngModelChange", "ngModel"], ["placeholder", "Any extra detail\u2026", 1, "f-input", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-primary", 3, "click", "disabled"]], template: function CustomerDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CustomerDetailComponent_div_0_Template, 11, 0, "div", 0)(1, CustomerDetailComponent_div_1_Template, 152, 68, "div", 0)(2, CustomerDetailComponent_div_2_Template, 1, 0, "div", 1)(3, CustomerDetailComponent_div_3_Template, 53, 8, "div", 2)(4, CustomerDetailComponent_div_4_Template, 1, 0, "div", 1)(5, CustomerDetailComponent_div_5_Template, 41, 12, "div", 3)(6, CustomerDetailComponent_div_6_Template, 1, 0, "div", 1)(7, CustomerDetailComponent_div_7_Template, 36, 9, "div", 3);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", !ctx.customer);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.customer);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showEditModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showEditModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showCollectModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showCollectModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showKhataModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showKhataModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel], styles: ["\n\n.cd-avatar[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  font-weight: 800;\n  color: #fff;\n  flex-shrink: 0;\n}\n.cd-avatar.cd-avatar-retail[_ngcontent-%COMP%] {\n  background: var(--blue);\n}\n.cd-avatar.cd-avatar-wholesale[_ngcontent-%COMP%] {\n  background: #388E3C;\n}\n.cd-avatar.cd-avatar-broker[_ngcontent-%COMP%] {\n  background: var(--purple);\n}\n.cd-avatar.cd-avatar-sm[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  font-size: 14px;\n}\n.btn-amber[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 18px;\n  border-radius: var(--radius);\n  font-size: 14px;\n  font-weight: 600;\n  border: 1.5px solid transparent;\n  cursor: pointer;\n  white-space: nowrap;\n  line-height: 1;\n  background: var(--amber);\n  color: #fff;\n  border-color: var(--amber);\n}\n.btn-amber[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #d97706;\n  border-color: #d97706;\n}\n.btn-amber[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-amber.btn-sm[_ngcontent-%COMP%] {\n  padding: 6px 13px;\n  font-size: 13px;\n}\n.stat-strip[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 16px;\n}\n.stat-card.stat-card-warn[_ngcontent-%COMP%] {\n  border-color: rgba(245, 158, 11, 0.35);\n  background: rgba(245, 158, 11, 0.04);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.stat-icon.stat-icon-blue[_ngcontent-%COMP%] {\n  background: var(--blue-soft);\n}\n.stat-icon.stat-icon-purple[_ngcontent-%COMP%] {\n  background: var(--purple-bg);\n}\n.stat-icon.stat-icon-amber[_ngcontent-%COMP%] {\n  background: var(--amber-bg);\n}\n.stat-icon.stat-icon-green[_ngcontent-%COMP%] {\n  background: var(--green-bg);\n}\n.stat-icon.stat-icon-gray[_ngcontent-%COMP%] {\n  background: var(--surface2);\n}\n.cd-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 16px;\n  align-items: start;\n}\n.cd-left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.cd-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.info-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 7px 0;\n  border-bottom: 1px solid var(--border);\n  font-size: 13px;\n}\n.info-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ir-label[_ngcontent-%COMP%] {\n  color: var(--t3);\n  font-size: 12px;\n  font-weight: 600;\n  min-width: 72px;\n  flex-shrink: 0;\n}\n.ir-val[_ngcontent-%COMP%] {\n  color: var(--t1);\n  flex: 1;\n}\n.gst-code[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--blue);\n  font-family: monospace;\n  background: var(--blue-light);\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n.khata-cta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 18px;\n  border-top: 1px solid var(--border);\n  background: rgba(245, 158, 11, 0.06);\n}\n.entry-toggle[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 10px;\n  border-radius: var(--radius);\n  border: 1.5px solid var(--border);\n  background: var(--surface2);\n  color: var(--t2);\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n  text-align: center;\n}\n.entry-toggle.entry-toggle-debit[_ngcontent-%COMP%] {\n  border-color: var(--red);\n  background: var(--red-bg);\n  color: var(--red);\n}\n.entry-toggle.entry-toggle-credit[_ngcontent-%COMP%] {\n  border-color: var(--green);\n  background: var(--green-bg);\n  color: var(--green);\n}\n.entry-toggle[_ngcontent-%COMP%]:hover:not(.entry-toggle-debit):not(.entry-toggle-credit) {\n  border-color: var(--border2);\n}\n@media (max-width: 900px) {\n  .cd-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .stat-strip[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 500px) {\n  .stat-strip[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=customer-detail.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomerDetailComponent, { className: "CustomerDetailComponent", filePath: "src\\app\\pages\\customer-detail\\customer-detail.component.ts", lineNumber: 211 });
})();
export {
  CustomerDetailComponent
};
//# sourceMappingURL=chunk-F4RWOXTH.js.map
