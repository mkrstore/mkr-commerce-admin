import {
  ActivatedRoute,
  Router
} from "./chunk-CADB6C7J.js";
import {
  CommonModule,
  NgClass,
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
  ɵɵtextInterpolate2
} from "./chunk-PEVOVQSE.js";

// src/app/pages/order-detail/order-detail.component.ts
function OrderDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
    \u0275\u0275text(3, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275text(5, "Order not found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 5);
    \u0275\u0275listener("click", function OrderDetailComponent_div_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(7, "\u2190 Back to Orders");
    \u0275\u0275elementEnd()()();
  }
}
function OrderDetailComponent_div_1_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275listener("click", function OrderDetailComponent_div_1_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.printInvoice());
    });
    \u0275\u0275text(1, "\u{1F5A8}\uFE0F Print");
    \u0275\u0275elementEnd();
  }
}
function OrderDetailComponent_div_1_div_15_ng_container_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function OrderDetailComponent_div_1_div_15_ng_container_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u25CF");
    \u0275\u0275elementEnd();
  }
}
function OrderDetailComponent_div_1_div_15_ng_container_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r5 = \u0275\u0275nextContext().index;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r5 + 1);
  }
}
function OrderDetailComponent_div_1_div_15_ng_container_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 62);
  }
  if (rf & 2) {
    const i_r5 = \u0275\u0275nextContext().index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("done", ctx_r1.pipelineStep(ctx_r1.order.status) > i_r5);
  }
}
function OrderDetailComponent_div_1_div_15_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 57)(2, "div", 58);
    \u0275\u0275template(3, OrderDetailComponent_div_1_div_15_ng_container_1_span_3_Template, 2, 0, "span", 59)(4, OrderDetailComponent_div_1_div_15_ng_container_1_span_4_Template, 2, 0, "span", 59)(5, OrderDetailComponent_div_1_div_15_ng_container_1_span_5_Template, 2, 1, "span", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 60);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, OrderDetailComponent_div_1_div_15_ng_container_1_div_8_Template, 1, 2, "div", 61);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const step_r6 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("done", ctx_r1.pipelineStep(ctx_r1.order.status) > i_r5)("active", ctx_r1.pipelineStep(ctx_r1.order.status) === i_r5);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.pipelineStep(ctx_r1.order.status) > i_r5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pipelineStep(ctx_r1.order.status) === i_r5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pipelineStep(ctx_r1.order.status) < i_r5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r6);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r5 < ctx_r1.pipeline.length - 1);
  }
}
function OrderDetailComponent_div_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275template(1, OrderDetailComponent_div_1_div_15_ng_container_1_Template, 9, 9, "ng-container", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.pipeline);
  }
}
function OrderDetailComponent_div_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1, "\u{1F6AB} This order was cancelled");
    \u0275\u0275elementEnd();
  }
}
function OrderDetailComponent_div_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275text(1, "\u21A9\uFE0F Return requested");
    \u0275\u0275elementEnd();
  }
}
function OrderDetailComponent_div_1_tr_44_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("-", ctx_r1.formatCurrency(item_r7.discount), "");
  }
}
function OrderDetailComponent_div_1_tr_44_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 72);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function OrderDetailComponent_div_1_tr_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 65)(3, "span", 66);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 67);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td")(8, "code", 68);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 69);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 23);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 23);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, OrderDetailComponent_div_1_tr_44_td_16_Template, 2, 1, "td", 70)(17, OrderDetailComponent_div_1_tr_44_td_17_Template, 2, 0, "td", 71);
    \u0275\u0275elementStart(18, "td", 72);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 73);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r7.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r7.sku);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.variant);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.qty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(item_r7.unitPrice));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r7.discount > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r7.discount === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r7.gstPct, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.itemSubtotal(item_r7) + ctx_r1.itemGst(item_r7)));
  }
}
function OrderDetailComponent_div_1_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "span", 27);
    \u0275\u0275text(2, "Shipping");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 28);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("+ ", ctx_r1.formatCurrency(ctx_r1.order.shipping), "");
  }
}
function OrderDetailComponent_div_1_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "span", 27);
    \u0275\u0275text(2, "Shipping");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 75);
    \u0275\u0275text(4, "FREE");
    \u0275\u0275elementEnd()();
  }
}
function OrderDetailComponent_div_1_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "span", 27);
    \u0275\u0275text(2, "Discount / Offer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 76);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("- ", ctx_r1.formatCurrency(ctx_r1.order.discount), "");
  }
}
function OrderDetailComponent_div_1_div_89_tr_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const idx_r10 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(idx_r10 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r9.variant);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r9.qty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(item_r9.unitPrice));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r9.gstPct, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.itemSubtotal(item_r9) + ctx_r1.itemGst(item_r9)));
  }
}
function OrderDetailComponent_div_1_div_89_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94)(1, "span");
    \u0275\u0275text(2, "Shipping");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.order.shipping));
  }
}
function OrderDetailComponent_div_1_div_89_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100)(1, "span");
    \u0275\u0275text(2, "Discount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("-", ctx_r1.formatCurrency(ctx_r1.order.discount), "");
  }
}
function OrderDetailComponent_div_1_div_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77)(1, "div", 20);
    \u0275\u0275text(2, "Invoice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 78)(4, "div", 79)(5, "div", 80)(6, "div", 81);
    \u0275\u0275text(7, "MKR");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "div", 82);
    \u0275\u0275text(10, "MKR Commerce");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 83);
    \u0275\u0275text(12, "123, Commerce Hub, Chennai \u2013 600001 \xB7 GST: 33AABCM1234Z1Z2");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 84)(14, "div", 85);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 86);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 87);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 88)(21, "div")(22, "div", 89);
    \u0275\u0275text(23, "Bill To");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 90);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 91);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 91);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 91);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "table", 92)(33, "thead")(34, "tr")(35, "th");
    \u0275\u0275text(36, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th");
    \u0275\u0275text(38, "Item");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th");
    \u0275\u0275text(40, "Variant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "th");
    \u0275\u0275text(42, "Qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "th");
    \u0275\u0275text(44, "Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "th");
    \u0275\u0275text(46, "GST");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "th");
    \u0275\u0275text(48, "Amount");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "tbody");
    \u0275\u0275template(50, OrderDetailComponent_div_1_div_89_tr_50_Template, 15, 7, "tr", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 93)(52, "div", 94)(53, "span");
    \u0275\u0275text(54, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "span");
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 94)(58, "span");
    \u0275\u0275text(59, "GST");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "span");
    \u0275\u0275text(61);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(62, OrderDetailComponent_div_1_div_89_div_62_Template, 5, 1, "div", 95)(63, OrderDetailComponent_div_1_div_89_div_63_Template, 5, 1, "div", 96);
    \u0275\u0275elementStart(64, "div", 97)(65, "span");
    \u0275\u0275text(66, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "span");
    \u0275\u0275text(68);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(69, "div", 98)(70, "div");
    \u0275\u0275text(71, "Thank you for shopping with MKR Commerce!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "div");
    \u0275\u0275text(73);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(74, "button", 99);
    \u0275\u0275listener("click", function OrderDetailComponent_div_1_div_89_Template_button_click_74_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.printInvoice());
    });
    \u0275\u0275text(75, "\u{1F5A8}\uFE0F Print Invoice");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate1("Invoice #INV-", ctx_r1.order.id.replace("#MKR-", ""), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Date: ", ctx_r1.order.date, "");
    \u0275\u0275advance();
    \u0275\u0275classProp("paid", ctx_r1.order.payment.status === "Paid");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.order.payment.status === "Paid" ? "PAID" : "UNPAID", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.order.customer.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.order.customer.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.order.customer.phone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.order.customer.address);
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", ctx_r1.order.items);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.order.subtotal));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.order.gst));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order.shipping > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order.discount > 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.order.total));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("Payment via ", ctx_r1.order.payment.method, " \xB7 Txn: ", ctx_r1.order.payment.txnId, "");
  }
}
function OrderDetailComponent_div_1_div_136_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275text(2, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 101);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.order.notes);
  }
}
function OrderDetailComponent_div_1_button_144_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 102);
    \u0275\u0275listener("click", function OrderDetailComponent_div_1_button_144_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openStatusModal());
    });
    \u0275\u0275text(1, " \u{1F504} Update Status ");
    \u0275\u0275elementEnd();
  }
}
function OrderDetailComponent_div_1_button_145_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 103);
    \u0275\u0275listener("click", function OrderDetailComponent_div_1_button_145_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showCancelModal = true);
    });
    \u0275\u0275text(1, " \u274C Cancel Order ");
    \u0275\u0275elementEnd();
  }
}
function OrderDetailComponent_div_1_div_146_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275text(1, "\u{1F6AB} Order has been cancelled");
    \u0275\u0275elementEnd();
  }
}
function OrderDetailComponent_div_1_div_147_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 114);
    \u0275\u0275listener("click", function OrderDetailComponent_div_1_div_147_button_6_Template_button_click_0_listener() {
      const step_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectedStatus = step_r15);
    });
    \u0275\u0275element(1, "span", 115);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r15 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r1.selectedStatus === step_r15);
    \u0275\u0275advance();
    \u0275\u0275classProp("done", ctx_r1.pipeline.indexOf(step_r15) < ctx_r1.pipeline.indexOf(ctx_r1.selectedStatus))("active", ctx_r1.selectedStatus === step_r15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", step_r15, " ");
  }
}
function OrderDetailComponent_div_1_div_147_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 105);
    \u0275\u0275listener("click", function OrderDetailComponent_div_1_div_147_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showStatusModal = false);
    });
    \u0275\u0275elementStart(1, "div", 106);
    \u0275\u0275listener("click", function OrderDetailComponent_div_1_div_147_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 107);
    \u0275\u0275text(3, "Update Order Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 108)(5, "div", 109);
    \u0275\u0275template(6, OrderDetailComponent_div_1_div_147_button_6_Template, 3, 7, "button", 110);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 111)(8, "button", 112);
    \u0275\u0275listener("click", function OrderDetailComponent_div_1_div_147_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showStatusModal = false);
    });
    \u0275\u0275text(9, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 113);
    \u0275\u0275listener("click", function OrderDetailComponent_div_1_div_147_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.applyStatus());
    });
    \u0275\u0275text(11, "Apply");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.pipeline);
  }
}
function OrderDetailComponent_div_1_div_148_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 105);
    \u0275\u0275listener("click", function OrderDetailComponent_div_1_div_148_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showCancelModal = false);
    });
    \u0275\u0275elementStart(1, "div", 106);
    \u0275\u0275listener("click", function OrderDetailComponent_div_1_div_148_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r16);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 107);
    \u0275\u0275text(3, "Cancel Order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 108)(5, "p", 116);
    \u0275\u0275text(6, "Are you sure you want to cancel order ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "? This action cannot be undone.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 111)(11, "button", 112);
    \u0275\u0275listener("click", function OrderDetailComponent_div_1_div_148_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showCancelModal = false);
    });
    \u0275\u0275text(12, "Go Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 117);
    \u0275\u0275listener("click", function OrderDetailComponent_div_1_div_148_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmCancel());
    });
    \u0275\u0275text(14, "Yes, Cancel Order");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.order.id);
  }
}
function OrderDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 6)(2, "button", 5);
    \u0275\u0275listener("click", function OrderDetailComponent_div_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(3, "\u2190 Orders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 7)(5, "h1", 8);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 9);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 10);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 11)(12, "button", 12);
    \u0275\u0275listener("click", function OrderDetailComponent_div_1_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.generateInvoice());
    });
    \u0275\u0275text(13, "\u{1F4C4} Generate Invoice");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, OrderDetailComponent_div_1_button_14_Template, 2, 0, "button", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, OrderDetailComponent_div_1_div_15_Template, 2, 1, "div", 14)(16, OrderDetailComponent_div_1_div_16_Template, 2, 0, "div", 15)(17, OrderDetailComponent_div_1_div_17_Template, 2, 0, "div", 16);
    \u0275\u0275elementStart(18, "div", 17)(19, "div", 18)(20, "div", 19)(21, "div", 20);
    \u0275\u0275text(22, "Products Ordered");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 21)(24, "table", 22)(25, "thead")(26, "tr")(27, "th");
    \u0275\u0275text(28, "Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th");
    \u0275\u0275text(30, "SKU");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "th");
    \u0275\u0275text(32, "Variant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "th", 23);
    \u0275\u0275text(34, "Qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "th", 23);
    \u0275\u0275text(36, "Unit Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th", 23);
    \u0275\u0275text(38, "Offer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th", 23);
    \u0275\u0275text(40, "GST");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "th", 23);
    \u0275\u0275text(42, "Subtotal");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "tbody");
    \u0275\u0275template(44, OrderDetailComponent_div_1_tr_44_Template, 22, 10, "tr", 24);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(45, "div", 19)(46, "div", 20);
    \u0275\u0275text(47, "Payment Breakdown");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 25)(49, "div", 26)(50, "span", 27);
    \u0275\u0275text(51, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span", 28);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 26)(55, "span", 27);
    \u0275\u0275text(56, "GST");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span", 28);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(59, OrderDetailComponent_div_1_div_59_Template, 5, 1, "div", 29)(60, OrderDetailComponent_div_1_div_60_Template, 5, 0, "div", 29)(61, OrderDetailComponent_div_1_div_61_Template, 5, 1, "div", 29);
    \u0275\u0275element(62, "div", 30);
    \u0275\u0275elementStart(63, "div", 31)(64, "span", 27);
    \u0275\u0275text(65, "Total Paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "span", 32);
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(68, "div", 33)(69, "div", 34)(70, "span", 35);
    \u0275\u0275text(71, "Payment Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "span", 36);
    \u0275\u0275text(73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 34)(75, "span", 35);
    \u0275\u0275text(76, "Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "span", 37);
    \u0275\u0275text(78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "div", 34)(80, "span", 35);
    \u0275\u0275text(81, "Transaction ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "code", 38);
    \u0275\u0275text(83);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 34)(85, "span", 35);
    \u0275\u0275text(86, "Paid On");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "span", 37);
    \u0275\u0275text(88);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(89, OrderDetailComponent_div_1_div_89_Template, 76, 17, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "div", 40)(91, "div", 19)(92, "div", 20);
    \u0275\u0275text(93, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "div", 41);
    \u0275\u0275text(95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "div", 42)(97, "span", 43);
    \u0275\u0275text(98, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "span", 44);
    \u0275\u0275text(100);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(101, "div", 42)(102, "span", 43);
    \u0275\u0275text(103, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "span", 44);
    \u0275\u0275text(105);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(106, "div", 42)(107, "span", 43);
    \u0275\u0275text(108, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "span", 44);
    \u0275\u0275text(110);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(111, "div", 42)(112, "span", 43);
    \u0275\u0275text(113, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "span", 44);
    \u0275\u0275text(115);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(116, "div", 19)(117, "div", 20);
    \u0275\u0275text(118, "Handled By");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "div", 45);
    \u0275\u0275text(120);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "div", 42)(122, "span", 43);
    \u0275\u0275text(123, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "span", 46);
    \u0275\u0275text(125);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(126, "div", 42)(127, "span", 43);
    \u0275\u0275text(128, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "span", 44);
    \u0275\u0275text(130);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(131, "div", 42)(132, "span", 43);
    \u0275\u0275text(133, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "span", 44);
    \u0275\u0275text(135);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(136, OrderDetailComponent_div_1_div_136_Template, 5, 1, "div", 47);
    \u0275\u0275elementStart(137, "div", 48)(138, "div", 20);
    \u0275\u0275text(139, "Actions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(140, "button", 49);
    \u0275\u0275listener("click", function OrderDetailComponent_div_1_Template_button_click_140_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.generateInvoice());
    });
    \u0275\u0275text(141, "\u{1F4C4} Generate Invoice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(142, "button", 50);
    \u0275\u0275listener("click", function OrderDetailComponent_div_1_Template_button_click_142_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.printInvoice());
    });
    \u0275\u0275text(143, "\u{1F5A8}\uFE0F Print Invoice");
    \u0275\u0275elementEnd();
    \u0275\u0275template(144, OrderDetailComponent_div_1_button_144_Template, 2, 0, "button", 51)(145, OrderDetailComponent_div_1_button_145_Template, 2, 0, "button", 52)(146, OrderDetailComponent_div_1_div_146_Template, 2, 0, "div", 53);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(147, OrderDetailComponent_div_1_div_147_Template, 12, 1, "div", 54)(148, OrderDetailComponent_div_1_div_148_Template, 15, 1, "div", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.order.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.order.date, " \xB7 ", ctx_r1.order.time, "");
    \u0275\u0275advance();
    \u0275\u0275classProp("store", ctx_r1.order.source === "In-Store");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.order.source === "Online" ? "\u{1F310}" : "\u{1F3EA}", " ", ctx_r1.order.source, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.invoiceGenerated);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order.statusClass !== "cancelled" && ctx_r1.order.statusClass !== "return");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order.statusClass === "cancelled");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order.statusClass === "return");
    \u0275\u0275advance(27);
    \u0275\u0275property("ngForOf", ctx_r1.order.items);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.order.subtotal));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("+ ", ctx_r1.formatCurrency(ctx_r1.order.gst), "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order.shipping > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order.shipping === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order.discount > 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.order.total));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("paid", ctx_r1.order.payment.status === "Paid");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.order.payment.status === "Paid" ? "\u2713 Paid" : "\u23F3 Pending", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.order.payment.method);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.order.payment.txnId);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.order.payment.paidOn);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.invoiceGenerated);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", ctx_r1.order.customer.type.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.order.customer.type);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.order.customer.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.order.customer.email);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.order.customer.phone);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.order.customer.address);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.order.staff.name.charAt(0));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.order.staff.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.order.staff.role);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.order.staff.phone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order.notes);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", !ctx_r1.invoiceGenerated);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.order.statusClass !== "cancelled");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order.statusClass !== "cancelled");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.order.statusClass === "cancelled");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showStatusModal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showCancelModal);
  }
}
var ORDERS = {
  "#MKR-00128": {
    id: "#MKR-00128",
    date: "Apr 8, 2026",
    time: "2:30 PM",
    source: "Online",
    status: "Pending",
    statusClass: "pending",
    customer: { name: "Ravi Kumar", email: "ravi.k@gmail.com", phone: "+91 98765 43210", type: "Retail", address: "12, Rose Garden, Koramangala, Bengaluru \u2013 560034" },
    staff: { name: "Anand Raj", role: "Sales Executive", phone: "+91 91234 00001" },
    items: [
      { icon: "\u{1F454}", name: "Nike Polo T-Shirt", sku: "NK-POLO-BL", variant: "Blue / L", qty: 1, unitPrice: 999, discount: 0, gstPct: 12 }
    ],
    subtotal: 999,
    gst: 120,
    shipping: 49,
    discount: 0,
    total: 1168,
    payment: { status: "Paid", method: "UPI", txnId: "UPI2026040800128", paidOn: "Apr 8, 2026 \xB7 2:31 PM" },
    notes: "Customer requested express delivery."
  },
  "#MKR-00127": {
    id: "#MKR-00127",
    date: "Apr 8, 2026",
    time: "1:15 PM",
    source: "In-Store",
    status: "Confirmed",
    statusClass: "confirmed",
    customer: { name: "Priya Sharma", email: "priya.s@outlook.com", phone: "+91 91234 56789", type: "Wholesale", address: "45, Linking Road, Bandra West, Mumbai \u2013 400050" },
    staff: { name: "Sundar Rajan", role: "Store Manager", phone: "+91 91234 00002" },
    items: [
      { icon: "\u{1F457}", name: "Libas Floral Kurta Set", sku: "LIB-KUR-FL", variant: "Floral / M", qty: 10, unitPrice: 499, discount: 50, gstPct: 5 },
      { icon: "\u{1F476}", name: "Mothercare School Uniform", sku: "MC-SCH-UNI", variant: "Navy / Age 8", qty: 5, unitPrice: 449, discount: 0, gstPct: 5 }
    ],
    subtotal: 7240,
    gst: 362,
    shipping: 0,
    discount: 500,
    total: 7102,
    payment: { status: "Paid", method: "Bank Transfer", txnId: "NEFT20260408SHR127", paidOn: "Apr 8, 2026 \xB7 1:00 PM" },
    notes: ""
  },
  "#MKR-00126": {
    id: "#MKR-00126",
    date: "Apr 8, 2026",
    time: "11:00 AM",
    source: "Online",
    status: "Shipped",
    statusClass: "shipped",
    customer: { name: "Meena Patel", email: "meena.p@yahoo.com", phone: "+91 99887 76655", type: "Broker", address: "78, Satellite Road, Ahmedabad \u2013 380015" },
    staff: { name: "Kavya Nair", role: "Sales Executive", phone: "+91 91234 00003" },
    items: [
      { icon: "\u{1F4FA}", name: 'Samsung 32" Smart TV', sku: "SAM-TV-32-BL", variant: 'Black / 32"', qty: 2, unitPrice: 12499, discount: 1e3, gstPct: 18 }
    ],
    subtotal: 23998,
    gst: 4320,
    shipping: 0,
    discount: 2e3,
    total: 26318,
    payment: { status: "Paid", method: "Razorpay", txnId: "RZP_PAY_00126MNA", paidOn: "Apr 8, 2026 \xB7 10:55 AM" },
    notes: "Bulk broker deal \u2014 2 units dispatched via Blue Dart."
  },
  "#MKR-00125": {
    id: "#MKR-00125",
    date: "Apr 7, 2026",
    time: "4:00 PM",
    source: "Online",
    status: "Delivered",
    statusClass: "delivered",
    customer: { name: "Arun Nair", email: "arun.n@gmail.com", phone: "+91 97654 32109", type: "Retail", address: "23, MG Road, Kochi \u2013 682016" },
    staff: { name: "Anand Raj", role: "Sales Executive", phone: "+91 91234 00001" },
    items: [
      { icon: "\u{1F45F}", name: "Adidas Running Shoes", sku: "ADI-RUN-WH", variant: "White / UK 9", qty: 1, unitPrice: 3499, discount: 0, gstPct: 12 }
    ],
    subtotal: 3499,
    gst: 420,
    shipping: 49,
    discount: 0,
    total: 3968,
    payment: { status: "Paid", method: "COD", txnId: "COD-00125", paidOn: "Apr 7, 2026 \xB7 5:30 PM" },
    notes: ""
  },
  "#MKR-00124": {
    id: "#MKR-00124",
    date: "Apr 7, 2026",
    time: "10:00 AM",
    source: "In-Store",
    status: "Pending",
    statusClass: "pending",
    customer: { name: "Sunita Rao", email: "sunita.r@gmail.com", phone: "+91 88776 55443", type: "Wholesale", address: "5, Industrial Estate, Hyderabad \u2013 500038" },
    staff: { name: "Sundar Rajan", role: "Store Manager", phone: "+91 91234 00002" },
    items: [
      { icon: "\u2744\uFE0F", name: "Whirlpool 1.5T AC 5-Star", sku: "WHP-AC-1.5T", variant: "White / 1.5 Ton", qty: 3, unitPrice: 27500, discount: 2e3, gstPct: 28 }
    ],
    subtotal: 76500,
    gst: 21420,
    shipping: 0,
    discount: 6e3,
    total: 91920,
    payment: { status: "Pending", method: "Bank Transfer", txnId: "\u2014", paidOn: "\u2014" },
    notes: "Awaiting bank transfer confirmation from Sunita Rao."
  },
  "#MKR-00123": {
    id: "#MKR-00123",
    date: "Apr 6, 2026",
    time: "9:00 AM",
    source: "Online",
    status: "Delivered",
    statusClass: "delivered",
    customer: { name: "Kiran Das", email: "kiran.d@gmail.com", phone: "+91 77665 44332", type: "Retail", address: "11, Park Street, Kolkata \u2013 700016" },
    staff: { name: "Kavya Nair", role: "Sales Executive", phone: "+91 91234 00003" },
    items: [
      { icon: "\u{1F476}", name: "Mothercare School Uniform", sku: "MC-SCH-UNI", variant: "Navy / Age 6", qty: 2, unitPrice: 599, discount: 0, gstPct: 5 }
    ],
    subtotal: 1198,
    gst: 60,
    shipping: 49,
    discount: 0,
    total: 1307,
    payment: { status: "Paid", method: "UPI", txnId: "UPI2026040600123", paidOn: "Apr 6, 2026 \xB7 9:01 AM" },
    notes: ""
  },
  "#MKR-00122": {
    id: "#MKR-00122",
    date: "Apr 6, 2026",
    time: "3:00 PM",
    source: "Online",
    status: "Shipped",
    statusClass: "shipped",
    customer: { name: "Farhan Ali", email: "farhan.a@gmail.com", phone: "+91 66554 33221", type: "Broker", address: "88, MIDC Road, Pune \u2013 411019" },
    staff: { name: "Anand Raj", role: "Sales Executive", phone: "+91 91234 00001" },
    items: [
      { icon: "\u{1F4FA}", name: 'Samsung 32" Smart TV', sku: "SAM-TV-32-BL", variant: 'Black / 32"', qty: 5, unitPrice: 12499, discount: 5e3, gstPct: 18 },
      { icon: "\u2744\uFE0F", name: "Whirlpool 1.5T AC 5-Star", sku: "WHP-AC-1.5T", variant: "White / 1.5 Ton", qty: 2, unitPrice: 27500, discount: 0, gstPct: 28 }
    ],
    subtotal: 117495,
    gst: 28349,
    shipping: 0,
    discount: 1e4,
    total: 135844,
    payment: { status: "Paid", method: "Razorpay", txnId: "RZP_PAY_00122FAR", paidOn: "Apr 6, 2026 \xB7 2:58 PM" },
    notes: "Large broker consignment. Dispatched via GATI logistics."
  }
};
var OrderDetailComponent = class _OrderDetailComponent {
  route;
  router;
  order = null;
  invoiceGenerated = false;
  pipeline = ["Pending", "Confirmed", "Shipped", "Delivered"];
  showCancelModal = false;
  showStatusModal = false;
  selectedStatus = "";
  constructor(route, router) {
    this.route = route;
    this.router = router;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id") ?? "";
    this.order = ORDERS[id] ?? null;
  }
  pipelineStep(status) {
    return this.pipeline.indexOf(status);
  }
  itemSubtotal(item) {
    return item.qty * item.unitPrice - item.discount;
  }
  itemGst(item) {
    return Math.round(this.itemSubtotal(item) * item.gstPct / 100);
  }
  generateInvoice() {
    this.invoiceGenerated = true;
  }
  printInvoice() {
    window.print();
  }
  formatCurrency(n) {
    return "\u20B9" + n.toLocaleString("en-IN");
  }
  goBack() {
    this.router.navigate(["/orders"]);
  }
  openStatusModal() {
    if (!this.order)
      return;
    this.selectedStatus = this.order.status;
    this.showStatusModal = true;
  }
  applyStatus() {
    if (!this.order || !this.selectedStatus)
      return;
    this.order.status = this.selectedStatus;
    this.order.statusClass = this.selectedStatus.toLowerCase();
    this.showStatusModal = false;
  }
  confirmCancel() {
    if (!this.order)
      return;
    this.order.status = "Cancelled";
    this.order.statusClass = "cancelled";
    this.showCancelModal = false;
  }
  static \u0275fac = function OrderDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderDetailComponent, selectors: [["app-order-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 2, consts: [["class", "od-page", 4, "ngIf"], [1, "od-page"], [1, "od-notfound"], [1, "nf-icon"], [1, "nf-title"], [1, "back-btn", 3, "click"], [1, "od-topbar"], [1, "od-title-wrap"], [1, "od-title"], [1, "od-date"], [1, "src-badge"], [1, "od-top-actions"], [1, "act-btn", 3, "click"], ["class", "act-btn primary", 3, "click", 4, "ngIf"], ["class", "status-bar", 4, "ngIf"], ["class", "status-cancelled", 4, "ngIf"], ["class", "status-cancelled return", 4, "ngIf"], [1, "od-grid"], [1, "od-left"], [1, "od-card"], [1, "od-card-title"], [1, "table-wrap"], [1, "items-table"], [1, "num"], [4, "ngFor", "ngForOf"], [1, "pay-breakdown"], [1, "pb-row"], [1, "pb-label"], [1, "pb-val"], ["class", "pb-row", 4, "ngIf"], [1, "pb-divider"], [1, "pb-row", "total"], [1, "pb-val", "total"], [1, "pay-method-block"], [1, "pmb-row"], [1, "pmb-label"], [1, "pay-status"], [1, "pmb-val"], [1, "pmb-txn"], ["class", "od-card invoice-card", 4, "ngIf"], [1, "od-right"], [1, "cust-type-badge", 3, "ngClass"], [1, "info-row"], [1, "ir-label"], [1, "ir-val"], [1, "staff-avatar"], [1, "ir-val", "bold"], ["class", "od-card", 4, "ngIf"], [1, "od-card", "actions-card"], [1, "qa-btn", "primary", 3, "click"], [1, "qa-btn", 3, "click", "disabled"], ["class", "qa-btn", 3, "click", 4, "ngIf"], ["class", "qa-btn danger", 3, "click", 4, "ngIf"], ["class", "cancelled-note", 4, "ngIf"], ["class", "modal-backdrop", 3, "click", 4, "ngIf"], [1, "act-btn", "primary", 3, "click"], [1, "status-bar"], [1, "pipe-step"], [1, "pipe-dot"], [4, "ngIf"], [1, "pipe-label"], ["class", "pipe-line", 3, "done", 4, "ngIf"], [1, "pipe-line"], [1, "status-cancelled"], [1, "status-cancelled", "return"], [1, "item-cell"], [1, "item-icon"], [1, "item-name"], [1, "sku"], [1, "variant"], ["class", "num disc", 4, "ngIf"], ["class", "num muted", 4, "ngIf"], [1, "num", "muted"], [1, "num", "bold"], [1, "num", "disc"], [1, "pb-val", "free"], [1, "pb-val", "disc"], [1, "od-card", "invoice-card"], [1, "invoice-block", "print-area"], [1, "inv-header"], [1, "inv-brand"], [1, "inv-logo"], [1, "inv-brand-name"], [1, "inv-brand-addr"], [1, "inv-meta"], [1, "inv-no"], [1, "inv-date"], [1, "inv-status"], [1, "inv-parties"], [1, "inv-sec-label"], [1, "inv-party-name"], [1, "inv-party-info"], [1, "inv-table"], [1, "inv-totals"], [1, "inv-t-row"], ["class", "inv-t-row", 4, "ngIf"], ["class", "inv-t-row disc", 4, "ngIf"], [1, "inv-t-row", "grand"], [1, "inv-footer"], [1, "print-btn", 3, "click"], [1, "inv-t-row", "disc"], [1, "notes-text"], [1, "qa-btn", 3, "click"], [1, "qa-btn", "danger", 3, "click"], [1, "cancelled-note"], [1, "modal-backdrop", 3, "click"], [1, "modal-box", 3, "click"], [1, "modal-title"], [1, "modal-body"], [1, "status-options"], ["class", "status-option", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "modal-footer"], [1, "mf-btn", 3, "click"], [1, "mf-btn", "primary", 3, "click"], [1, "status-option", 3, "click"], [1, "so-dot"], [1, "modal-warn"], [1, "mf-btn", "danger", 3, "click"]], template: function OrderDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, OrderDetailComponent_div_0_Template, 8, 0, "div", 0)(1, OrderDetailComponent_div_1_Template, 149, 42, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", !ctx.order);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.order);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf], styles: ["\n\n.od-page[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.od-notfound[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px 20px;\n}\n.nf-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 12px;\n}\n.nf-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--t2);\n  margin-bottom: 20px;\n}\n.od-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.back-btn[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  background: var(--surface);\n  color: var(--t2);\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  color: var(--blue);\n}\n.od-title-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n  flex-wrap: wrap;\n}\n.od-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: var(--t1);\n  margin: 0;\n}\n.od-date[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--t3);\n}\n.src-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 20px;\n  background: rgba(40, 116, 240, 0.1);\n  color: var(--blue);\n}\n.src-badge.store[_ngcontent-%COMP%] {\n  background: rgba(56, 142, 60, 0.1);\n  color: #388E3C;\n}\n.od-top-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.act-btn[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  background: var(--surface2);\n  color: var(--t2);\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.act-btn.primary[_ngcontent-%COMP%] {\n  background: var(--blue);\n  color: #fff;\n  border-color: var(--blue);\n}\n.act-btn[_ngcontent-%COMP%]:hover:not(.primary) {\n  border-color: var(--blue);\n  color: var(--blue);\n}\n.status-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 20px 32px;\n  margin-bottom: 20px;\n  gap: 0;\n}\n.pipe-step[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n}\n.pipe-dot[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 2px solid var(--border);\n  background: var(--surface2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--t3);\n}\n.pipe-step.done[_ngcontent-%COMP%]   .pipe-dot[_ngcontent-%COMP%] {\n  background: #388E3C;\n  border-color: #388E3C;\n  color: #fff;\n}\n.pipe-step.active[_ngcontent-%COMP%]   .pipe-dot[_ngcontent-%COMP%] {\n  background: var(--blue);\n  border-color: var(--blue);\n  color: #fff;\n}\n.pipe-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--t3);\n  white-space: nowrap;\n}\n.pipe-step.done[_ngcontent-%COMP%]   .pipe-label[_ngcontent-%COMP%] {\n  color: #388E3C;\n}\n.pipe-step.active[_ngcontent-%COMP%]   .pipe-label[_ngcontent-%COMP%] {\n  color: var(--blue);\n}\n.pipe-line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 2px;\n  background: var(--border);\n  margin: 0 4px;\n  margin-bottom: 18px;\n}\n.pipe-line.done[_ngcontent-%COMP%] {\n  background: #388E3C;\n}\n.status-cancelled[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  border-radius: var(--radius-md);\n  margin-bottom: 20px;\n  background: rgba(255, 97, 97, 0.08);\n  color: var(--red);\n  font-weight: 700;\n  font-size: 14px;\n  border: 1px solid rgba(255, 97, 97, 0.2);\n}\n.status-cancelled.return[_ngcontent-%COMP%] {\n  background: rgba(255, 159, 0, 0.08);\n  color: #FF9F00;\n  border-color: rgba(255, 159, 0, 0.2);\n}\n.od-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 320px;\n  gap: 16px;\n  align-items: start;\n}\n.od-left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.od-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.od-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 20px;\n}\n.od-card-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 800;\n  color: var(--t1);\n  margin-bottom: 14px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.items-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 700px;\n}\n.items-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  font-size: 10px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.7px;\n  color: var(--t3);\n  text-align: left;\n  background: var(--surface2);\n  border-bottom: 1px solid var(--border);\n}\n.items-table[_ngcontent-%COMP%]   th.num[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.items-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-bottom: 1px solid var(--border);\n  vertical-align: middle;\n  font-size: 13px;\n}\n.items-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.item-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.item-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.item-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--t1);\n}\n.sku[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--t3);\n  font-family: monospace;\n  background: var(--surface2);\n  padding: 2px 5px;\n  border-radius: 3px;\n}\n.variant[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--t2);\n}\n.num[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.disc[_ngcontent-%COMP%] {\n  color: #388E3C;\n  font-weight: 700;\n}\n.muted[_ngcontent-%COMP%] {\n  color: var(--t3);\n}\n.bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--t1);\n}\n.pay-breakdown[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.pb-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 7px 0;\n  font-size: 13px;\n  border-bottom: 1px dashed var(--border);\n}\n.pb-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.pb-row.total[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n.pb-label[_ngcontent-%COMP%] {\n  color: var(--t2);\n}\n.pb-val[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--t1);\n}\n.pb-val.free[_ngcontent-%COMP%] {\n  color: #388E3C;\n  font-weight: 700;\n}\n.pb-val.disc[_ngcontent-%COMP%] {\n  color: #388E3C;\n  font-weight: 700;\n}\n.pb-val.total[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: var(--blue);\n}\n.pb-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: var(--border);\n  margin: 8px 0;\n}\n.pay-method-block[_ngcontent-%COMP%] {\n  background: var(--surface2);\n  border-radius: 8px;\n  padding: 14px;\n  margin-top: 4px;\n}\n.pmb-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 0;\n  font-size: 12px;\n}\n.pmb-label[_ngcontent-%COMP%] {\n  color: var(--t3);\n  font-weight: 600;\n}\n.pmb-val[_ngcontent-%COMP%] {\n  color: var(--t1);\n  font-weight: 600;\n}\n.pmb-txn[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--blue);\n  font-family: monospace;\n  background: rgba(40, 116, 240, 0.08);\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n.pay-status[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 20px;\n  background: rgba(255, 159, 0, 0.1);\n  color: #FF9F00;\n}\n.pay-status.paid[_ngcontent-%COMP%] {\n  background: rgba(56, 142, 60, 0.1);\n  color: #388E3C;\n}\n.invoice-block[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  padding: 24px;\n  margin-bottom: 14px;\n  background: var(--surface2);\n}\n.inv-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n}\n.inv-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.inv-logo[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: var(--blue);\n  color: #fff;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 900;\n  font-size: 13px;\n}\n.inv-brand-name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 800;\n  color: var(--t1);\n}\n.inv-brand-addr[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--t3);\n  margin-top: 2px;\n}\n.inv-meta[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.inv-no[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--t1);\n}\n.inv-date[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--t3);\n  margin-top: 3px;\n}\n.inv-status[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 800;\n  padding: 3px 10px;\n  border-radius: 20px;\n  margin-top: 6px;\n  display: inline-block;\n  background: rgba(255, 159, 0, 0.1);\n  color: #FF9F00;\n}\n.inv-status.paid[_ngcontent-%COMP%] {\n  background: rgba(56, 142, 60, 0.1);\n  color: #388E3C;\n}\n.inv-parties[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.inv-sec-label[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 800;\n  text-transform: uppercase;\n  color: var(--t3);\n  letter-spacing: 0.8px;\n  margin-bottom: 4px;\n}\n.inv-party-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--t1);\n}\n.inv-party-info[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--t2);\n  margin-top: 2px;\n}\n.inv-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin-bottom: 16px;\n  font-size: 12px;\n}\n.inv-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  background: var(--surface);\n  font-size: 9px;\n  font-weight: 800;\n  text-transform: uppercase;\n  color: var(--t3);\n  text-align: left;\n  border: 1px solid var(--border);\n}\n.inv-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  border: 1px solid var(--border);\n  color: var(--t1);\n}\n.inv-totals[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 4px;\n  margin-bottom: 16px;\n}\n.inv-t-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  font-size: 12px;\n}\n.inv-t-row.disc[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: #388E3C;\n}\n.inv-t-row.grand[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 14px;\n  color: var(--t1);\n}\n.inv-footer[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--t3);\n  text-align: center;\n  border-top: 1px dashed var(--border);\n  padding-top: 12px;\n}\n.print-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border: none;\n  border-radius: 6px;\n  background: var(--blue);\n  color: #fff;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n}\n.cust-type-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 20px;\n  display: inline-block;\n  margin-bottom: 12px;\n}\n.cust-type-badge.retail[_ngcontent-%COMP%] {\n  background: rgba(40, 116, 240, 0.1);\n  color: var(--blue);\n}\n.cust-type-badge.wholesale[_ngcontent-%COMP%] {\n  background: rgba(56, 142, 60, 0.1);\n  color: #388E3C;\n}\n.cust-type-badge.broker[_ngcontent-%COMP%] {\n  background: rgba(236, 72, 153, 0.1);\n  color: #EC4899;\n}\n.info-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 6px 0;\n  border-bottom: 1px solid var(--border);\n  font-size: 13px;\n}\n.info-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ir-label[_ngcontent-%COMP%] {\n  color: var(--t3);\n  font-weight: 600;\n  min-width: 64px;\n  flex-shrink: 0;\n  font-size: 12px;\n}\n.ir-val[_ngcontent-%COMP%] {\n  color: var(--t1);\n  flex: 1;\n}\n.ir-val.bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.staff-avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: var(--blue);\n  color: #fff;\n  font-size: 18px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 12px;\n}\n.notes-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--t2);\n  line-height: 1.6;\n}\n.qa-btn[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 9px 14px;\n  margin-bottom: 8px;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  background: var(--surface2);\n  color: var(--t2);\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  text-align: left;\n}\n.qa-btn[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.qa-btn.primary[_ngcontent-%COMP%] {\n  background: var(--blue);\n  color: #fff;\n  border-color: var(--blue);\n}\n.qa-btn.danger[_ngcontent-%COMP%] {\n  color: var(--red);\n  border-color: rgba(255, 97, 97, 0.3);\n}\n.qa-btn.danger[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 97, 97, 0.08);\n}\n.qa-btn[_ngcontent-%COMP%]:hover:not(.primary):not(.danger) {\n  border-color: var(--blue);\n  color: var(--blue);\n}\n.qa-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.cancelled-note[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--red);\n  padding: 8px 12px;\n  background: rgba(255, 97, 97, 0.08);\n  border-radius: 6px;\n  border: 1px solid rgba(255, 97, 97, 0.2);\n  text-align: center;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n}\n.modal-box[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  width: 100%;\n  max-width: 400px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);\n}\n.modal-title[_ngcontent-%COMP%] {\n  padding: 18px 20px 14px;\n  font-size: 15px;\n  font-weight: 800;\n  color: var(--t1);\n  border-bottom: 1px solid var(--border);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n}\n.modal-warn[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--t2);\n  line-height: 1.6;\n  margin: 0;\n}\n.modal-warn[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--t1);\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  border-top: 1px solid var(--border);\n}\n.mf-btn[_ngcontent-%COMP%] {\n  padding: 8px 18px;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  border: 1px solid var(--border);\n  background: var(--surface2);\n  color: var(--t2);\n}\n.mf-btn.primary[_ngcontent-%COMP%] {\n  background: var(--blue);\n  color: #fff;\n  border-color: var(--blue);\n}\n.mf-btn.danger[_ngcontent-%COMP%] {\n  background: var(--red);\n  color: #fff;\n  border-color: var(--red);\n}\n.status-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.status-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  border-radius: 8px;\n  border: 1.5px solid var(--border);\n  background: var(--surface2);\n  color: var(--t2);\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  text-align: left;\n  transition: all 0.15s;\n}\n.status-option.selected[_ngcontent-%COMP%] {\n  border-color: var(--blue);\n  background: rgba(40, 116, 240, 0.08);\n  color: var(--blue);\n}\n.status-option[_ngcontent-%COMP%]:hover:not(.selected) {\n  border-color: var(--t3);\n}\n.so-dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  border: 2px solid var(--border);\n  background: var(--surface);\n  flex-shrink: 0;\n}\n.so-dot.active[_ngcontent-%COMP%] {\n  background: var(--blue);\n  border-color: var(--blue);\n}\n.so-dot.done[_ngcontent-%COMP%] {\n  background: #388E3C;\n  border-color: #388E3C;\n}\n@media print {\n  .od-topbar[_ngcontent-%COMP%], \n   .status-bar[_ngcontent-%COMP%], \n   .od-right[_ngcontent-%COMP%], \n   .back-btn[_ngcontent-%COMP%], \n   .od-top-actions[_ngcontent-%COMP%], \n   .print-btn[_ngcontent-%COMP%], \n   .actions-card[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .od-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .invoice-block[_ngcontent-%COMP%] {\n    border: none;\n  }\n}\n@media (max-width: 900px) {\n  .od-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .od-page[_ngcontent-%COMP%] {\n    padding: 14px;\n  }\n}\n/*# sourceMappingURL=order-detail.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderDetailComponent, { className: "OrderDetailComponent", filePath: "src\\app\\pages\\order-detail\\order-detail.component.ts", lineNumber: 128 });
})();
export {
  OrderDetailComponent
};
//# sourceMappingURL=chunk-GTVGVZGJ.js.map
