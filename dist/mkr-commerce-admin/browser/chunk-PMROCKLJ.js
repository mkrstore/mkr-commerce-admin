import {
  ShopSettingsService
} from "./chunk-PLGIXLHX.js";
import {
  NotificationService
} from "./chunk-P4VIPG72.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-OOFYAVIO.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-MBTJ2QPL.js";
import {
  __spreadProps,
  __spreadValues,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-PEVOVQSE.js";

// src/app/services/catalog.service.ts
var INITIAL = [
  { icon: "\u2744\uFE0F", name: "Whirlpool 1.5T AC 5-Star", sku: "WHP-AC-1.5T", price: 32990, gstRate: 28, category: "AC", stock: 18 },
  { icon: "\u2744\uFE0F", name: "LG 1T AC 3-Star", sku: "LG-AC-1T", price: 24990, gstRate: 28, category: "AC", stock: 12 },
  { icon: "\u2744\uFE0F", name: "Voltas 2T AC 5-Star", sku: "VOL-AC-2T", price: 42990, gstRate: 28, category: "AC", stock: 6 },
  { icon: "\u{1F9CA}", name: "Samsung 253L Refrigerator", sku: "SAM-RF-253", price: 22990, gstRate: 18, category: "Fridge", stock: 11 },
  { icon: "\u{1F9CA}", name: "LG 190L Single Door Fridge", sku: "LG-RF-190", price: 14490, gstRate: 18, category: "Fridge", stock: 8 },
  { icon: "\u{1F9CA}", name: "Haier 320L Double Door Fridge", sku: "HAI-RF-320", price: 28990, gstRate: 18, category: "Fridge", stock: 4 },
  { icon: "\u{1F9FA}", name: "LG 7kg Washing Machine", sku: "LG-WM-7KG", price: 18490, gstRate: 18, category: "Washing Machine", stock: 9 },
  { icon: "\u{1F9FA}", name: "Samsung 6.5kg Top Load", sku: "SAM-WM-6.5", price: 13990, gstRate: 18, category: "Washing Machine", stock: 14 },
  { icon: "\u{1F9FA}", name: "Whirlpool 8kg Front Load", sku: "WHP-WM-8F", price: 24990, gstRate: 18, category: "Washing Machine", stock: 5 },
  { icon: "\u{1F4FA}", name: 'Samsung 32" Smart TV', sku: "SAM-TV-32", price: 15999, gstRate: 28, category: "TV", stock: 1 },
  { icon: "\u{1F4FA}", name: 'LG 43" 4K Smart TV', sku: "LG-TV-43", price: 32990, gstRate: 28, category: "TV", stock: 7 },
  { icon: "\u{1F4FA}", name: 'Sony 55" 4K OLED TV', sku: "SON-TV-55", price: 89990, gstRate: 28, category: "TV", stock: 3 },
  { icon: "\u{1F4A8}", name: "Symphony Diet 22i Cooler", sku: "SYM-CLR-22", price: 8990, gstRate: 28, category: "Cooler", stock: 22 },
  { icon: "\u{1F4A8}", name: "Bajaj Platini PX 97 Cooler", sku: "BAJ-CLR-97", price: 6990, gstRate: 28, category: "Cooler", stock: 0 },
  { icon: "\u{1F300}", name: "Orient Pedestal Fan 1200mm", sku: "ORI-FAN-PD", price: 2490, gstRate: 18, category: "Fan", stock: 30 },
  { icon: "\u{1F300}", name: "Havells Ceiling Fan 1200mm", sku: "HAV-FAN-CL", price: 1890, gstRate: 18, category: "Fan", stock: 25 },
  { icon: "\u{1F4F1}", name: "Samsung Galaxy M34 5G", sku: "SAM-M34-5G", price: 15999, gstRate: 18, category: "Mobile", stock: 34 },
  { icon: "\u{1F4F1}", name: "Redmi Note 13 5G", sku: "RED-N13-5G", price: 13999, gstRate: 18, category: "Mobile", stock: 19 },
  { icon: "\u{1F4BB}", name: "HP Pavilion 15 Laptop", sku: "HP-PAV-15", price: 54990, gstRate: 18, category: "Laptop", stock: 8 },
  { icon: "\u{1F50C}", name: "Philips Air Fryer 4.1L", sku: "PHI-AF-4L", price: 4999, gstRate: 18, category: "Kitchen", stock: 16 },
  { icon: "\u{1F50C}", name: "Bosch 20L Microwave Oven", sku: "BOS-MW-20", price: 9499, gstRate: 18, category: "Kitchen", stock: 10 },
  { icon: "\u{1F50C}", name: "Havells Mixer Grinder 750W", sku: "HAV-MG-750", price: 1890, gstRate: 18, category: "Kitchen", stock: 42 }
];
var CatalogService = class _CatalogService {
  _products = signal(INITIAL);
  products = computed(() => this._products());
  categories = computed(() => [...new Set(this._products().map((p) => p.category))]);
  lowStock = computed(() => this._products().filter((p) => p.stock > 0 && p.stock <= 5));
  outOfStock = computed(() => this._products().filter((p) => p.stock === 0));
  stockLabel(p) {
    if (p.stock === 0)
      return "Out of stock";
    if (p.stock <= 5)
      return `Low \u2014 ${p.stock} left`;
    return `${p.stock} units`;
  }
  stockClass(p) {
    if (p.stock === 0)
      return "s-out";
    if (p.stock <= 5)
      return "s-low";
    return "s-ok";
  }
  reduceStock(items) {
    this._products.update((list) => list.map((p) => {
      const sold = items.find((i) => i.sku === p.sku);
      if (!sold)
        return p;
      return __spreadProps(__spreadValues({}, p), { stock: Math.max(0, p.stock - sold.qty) });
    }));
  }
  addStock(sku, qty) {
    this._products.update((list) => list.map((p) => p.sku === sku ? __spreadProps(__spreadValues({}, p), { stock: p.stock + qty }) : p));
  }
  static \u0275fac = function CatalogService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CatalogService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CatalogService, factory: _CatalogService.\u0275fac, providedIn: "root" });
};

// src/app/pages/billing/billing.component.ts
function BillingComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.savedBills.length);
  }
}
function BillingComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" # ", ctx_r0.currentBillId, " ");
  }
}
function BillingComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function BillingComponent_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.startNewBill());
    });
    \u0275\u0275text(1, " \u2795 New Bill ");
    \u0275\u0275elementEnd();
  }
}
function BillingComponent_ng_container_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275text(2, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 19);
    \u0275\u0275text(4, "Payment Confirmed!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 21);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 22);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 23);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 24)(14, "button", 25);
    \u0275\u0275listener("click", function BillingComponent_ng_container_11_div_1_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.doPrint());
    });
    \u0275\u0275text(15, "\u{1F5A8}\uFE0F Print Receipt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 26);
    \u0275\u0275listener("click", function BillingComponent_ng_container_11_div_1_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.startNewBill());
    });
    \u0275\u0275text(17, " \u2795 New Bill ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "p", 27);
    \u0275\u0275text(19, " Print dialog opens \u2014 works with thermal printers (80mm) and normal printers (A4). ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.printBill.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.inr(ctx_r0.printBill.grandTotal));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r0.payIcon(ctx_r0.printBill.paymentMethod), " ", ctx_r0.payLabel(ctx_r0.printBill.paymentMethod), " \u2014 PAID ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r0.printBill.customer.name, " \xB7 ", ctx_r0.printBill.customer.phone, " ");
  }
}
function BillingComponent_ng_container_11_div_2_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 61);
    \u0275\u0275listener("click", function BillingComponent_ng_container_11_div_2_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(3);
      ctx_r0.searchQ = "";
      return \u0275\u0275resetView(ctx_r0.productsShown = 20);
    });
    \u0275\u0275text(1, " \u2715 ");
    \u0275\u0275elementEnd();
  }
}
function BillingComponent_ng_container_11_div_2_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function BillingComponent_ng_container_11_div_2_button_11_Template_button_click_0_listener() {
      const cat_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      ctx_r0.selectedCategory = cat_r7;
      return \u0275\u0275resetView(ctx_r0.productsShown = 20);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r0.selectedCategory === cat_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r7, " ");
  }
}
function BillingComponent_ng_container_11_div_2_div_13_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", p_r9.stock, " left");
  }
}
function BillingComponent_ng_container_11_div_2_div_13_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 73);
    \u0275\u0275text(1, "Out of stock");
    \u0275\u0275elementEnd();
  }
}
function BillingComponent_ng_container_11_div_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275listener("click", function BillingComponent_ng_container_11_div_2_div_13_Template_div_click_0_listener() {
      const p_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.addProduct(p_r9));
    });
    \u0275\u0275elementStart(1, "span", 63);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 64)(4, "span", 65);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 66);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 67);
    \u0275\u0275template(9, BillingComponent_ng_container_11_div_2_div_13_span_9_Template, 2, 1, "span", 68)(10, BillingComponent_ng_container_11_div_2_div_13_span_10_Template, 2, 0, "span", 69);
    \u0275\u0275elementStart(11, "span", 70);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 71);
    \u0275\u0275listener("click", function BillingComponent_ng_container_11_div_2_div_13_Template_button_click_13_listener($event) {
      const p_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r0.addProduct(p_r9));
    });
    \u0275\u0275text(14, "+ Add");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("row-out-of-stock", p_r9.stock === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r9.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", p_r9.sku, " \xB7 ", p_r9.category, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r9.stock > 0 && p_r9.stock <= 5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r9.stock === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.inr(p_r9.price));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", p_r9.stock === 0);
  }
}
function BillingComponent_ng_container_11_div_2_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275text(1, " \u2193 Scroll to load more products ");
    \u0275\u0275elementEnd();
  }
}
function BillingComponent_ng_container_11_div_2_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(' No products found for "', ctx_r0.searchQ, '" ');
  }
}
function BillingComponent_ng_container_11_div_2_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r0.billItems.length, ")");
  }
}
function BillingComponent_ng_container_11_div_2_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77)(1, "span");
    \u0275\u0275text(2, "\u{1F6D2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " No items yet \u2014 click ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6, "+ Add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " on any product above ");
    \u0275\u0275elementEnd()();
  }
}
function BillingComponent_ng_container_11_div_2_div_22_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 82);
    \u0275\u0275text(1, "GST%");
    \u0275\u0275elementEnd();
  }
}
function BillingComponent_ng_container_11_div_2_div_22_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 82);
    \u0275\u0275text(1, "GST (\u20B9)");
    \u0275\u0275elementEnd();
  }
}
function BillingComponent_ng_container_11_div_2_div_22_tr_20_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 99);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" MRP ", ctx_r0.inr(item_r11.product.price), " ");
  }
}
function BillingComponent_ng_container_11_div_2_div_22_tr_20_td_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 100);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", item_r11.product.gstRate, "%");
  }
}
function BillingComponent_ng_container_11_div_2_div_22_tr_20_td_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 101);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.inr(ctx_r0.lineGst(item_r11)));
  }
}
function BillingComponent_ng_container_11_div_2_div_22_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 84);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 85)(4, "span", 86);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "div", 87);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 88);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "td", 80)(12, "div", 89)(13, "button", 90);
    \u0275\u0275listener("click", function BillingComponent_ng_container_11_div_2_div_22_tr_20_Template_button_click_13_listener() {
      const item_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.decQty(item_r11));
    });
    \u0275\u0275text(14, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 91);
    \u0275\u0275twoWayListener("ngModelChange", function BillingComponent_ng_container_11_div_2_div_22_tr_20_Template_input_ngModelChange_15_listener($event) {
      const item_r11 = \u0275\u0275restoreView(_r10).$implicit;
      \u0275\u0275twoWayBindingSet(item_r11.qty, $event) || (item_r11.qty = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 90);
    \u0275\u0275listener("click", function BillingComponent_ng_container_11_div_2_div_22_tr_20_Template_button_click_16_listener() {
      const item_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.incQty(item_r11));
    });
    \u0275\u0275text(17, "+");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "td")(19, "input", 92);
    \u0275\u0275twoWayListener("ngModelChange", function BillingComponent_ng_container_11_div_2_div_22_tr_20_Template_input_ngModelChange_19_listener($event) {
      const item_r11 = \u0275\u0275restoreView(_r10).$implicit;
      \u0275\u0275twoWayBindingSet(item_r11.unitPrice, $event) || (item_r11.unitPrice = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, BillingComponent_ng_container_11_div_2_div_22_tr_20_span_20_Template, 2, 1, "span", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td")(22, "input", 94);
    \u0275\u0275twoWayListener("ngModelChange", function BillingComponent_ng_container_11_div_2_div_22_tr_20_Template_input_ngModelChange_22_listener($event) {
      const item_r11 = \u0275\u0275restoreView(_r10).$implicit;
      \u0275\u0275twoWayBindingSet(item_r11.discount, $event) || (item_r11.discount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, BillingComponent_ng_container_11_div_2_div_22_tr_20_td_23_Template, 2, 1, "td", 95)(24, BillingComponent_ng_container_11_div_2_div_22_tr_20_td_24_Template, 2, 1, "td", 96);
    \u0275\u0275elementStart(25, "td", 97);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td")(28, "button", 98);
    \u0275\u0275listener("click", function BillingComponent_ng_container_11_div_2_div_22_tr_20_Template_button_click_28_listener() {
      const i_r12 = \u0275\u0275restoreView(_r10).index;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.removeItem(i_r12));
    });
    \u0275\u0275text(29, " \u2715 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r12 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r11.product.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r11.product.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r11.product.sku);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", item_r11.qty);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", item_r11.unitPrice);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r11.unitPrice !== item_r11.product.price);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", item_r11.discount);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.gstEnabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.gstEnabled);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.inr(ctx_r0.lineTotal(item_r11)));
  }
}
function BillingComponent_ng_container_11_div_2_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78)(1, "table", 79)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 80);
    \u0275\u0275text(9, "Qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Unit Price (\u20B9)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Discount (\u20B9)");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, BillingComponent_ng_container_11_div_2_div_22_th_14_Template, 2, 0, "th", 81)(15, BillingComponent_ng_container_11_div_2_div_22_th_15_Template, 2, 0, "th", 81);
    \u0275\u0275elementStart(16, "th", 82);
    \u0275\u0275text(17, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275template(20, BillingComponent_ng_container_11_div_2_div_22_tr_20_Template, 30, 11, "tr", 83);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngIf", ctx_r0.gstEnabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.gstEnabled);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r0.billItems);
  }
}
function BillingComponent_ng_container_11_div_2_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 102);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.customer.phone.length, "/10");
  }
}
function BillingComponent_ng_container_11_div_2_div_31_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r14.address);
  }
}
function BillingComponent_ng_container_11_div_2_div_31_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 105);
    \u0275\u0275listener("mousedown", function BillingComponent_ng_container_11_div_2_div_31_div_1_Template_div_mousedown_0_listener() {
      const c_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.selectFromDropdown(c_r14));
    });
    \u0275\u0275elementStart(1, "div", 106)(2, "span", 107);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 108);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, BillingComponent_ng_container_11_div_2_div_31_div_1_div_6_Template, 2, 1, "div", 109);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r14 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r14.phone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r14.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r14.address);
  }
}
function BillingComponent_ng_container_11_div_2_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 103);
    \u0275\u0275template(1, BillingComponent_ng_container_11_div_2_div_31_div_1_Template, 7, 3, "div", 104);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.phoneDropdown);
  }
}
function BillingComponent_ng_container_11_div_2_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.phoneError);
  }
}
function BillingComponent_ng_container_11_div_2_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.nameError);
  }
}
function BillingComponent_ng_container_11_div_2_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.emailError);
  }
}
function BillingComponent_ng_container_11_div_2_div_41_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 121)(1, "span");
    \u0275\u0275text(2, "Discount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u2212 ", ctx_r0.inr(ctx_r0.totalDiscount), "");
  }
}
function BillingComponent_ng_container_11_div_2_div_41_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122)(1, "span");
    \u0275\u0275text(2, "GST ");
    \u0275\u0275elementStart(3, "span", 123);
    \u0275\u0275text(4, "(as per item rate)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("+ ", ctx_r0.inr(ctx_r0.gstAmount), "");
  }
}
function BillingComponent_ng_container_11_div_2_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49);
    \u0275\u0275text(2, " \u{1F9FE} Bill Summary ");
    \u0275\u0275elementStart(3, "label", 112)(4, "input", 113);
    \u0275\u0275twoWayListener("ngModelChange", function BillingComponent_ng_container_11_div_2_div_41_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.gstEnabled, $event) || (ctx_r0.gstEnabled = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "span", 114);
    \u0275\u0275elementStart(6, "span", 115);
    \u0275\u0275text(7, "Add GST");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 116)(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, BillingComponent_ng_container_11_div_2_div_41_div_13_Template, 5, 1, "div", 117)(14, BillingComponent_ng_container_11_div_2_div_41_div_14_Template, 7, 1, "div", 118);
    \u0275\u0275element(15, "div", 119);
    \u0275\u0275elementStart(16, "div", 120)(17, "span");
    \u0275\u0275text(18, "Total Payable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.gstEnabled);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("Subtotal (", ctx_r0.billItems.length, " item", ctx_r0.billItems.length !== 1 ? "s" : "", ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.inr(ctx_r0.subtotal));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.totalDiscount > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.gstEnabled);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.inr(ctx_r0.grandTotal));
  }
}
function BillingComponent_ng_container_11_div_2_div_42_div_3_p_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 131);
    \u0275\u0275text(1, " Fill customer name & 10-digit phone to enable payment ");
    \u0275\u0275elementEnd();
  }
}
function BillingComponent_ng_container_11_div_2_div_42_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, BillingComponent_ng_container_11_div_2_div_42_div_3_p_1_Template, 2, 0, "p", 126);
    \u0275\u0275elementStart(2, "div", 127)(3, "button", 128);
    \u0275\u0275listener("click", function BillingComponent_ng_container_11_div_2_div_42_div_3_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.selectPayment("cash"));
    });
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "\u{1F4B5}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "Cash ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 129);
    \u0275\u0275listener("click", function BillingComponent_ng_container_11_div_2_div_42_div_3_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.selectPayment("upi"));
    });
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "\u{1F4F1}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "UPI ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 130);
    \u0275\u0275listener("click", function BillingComponent_ng_container_11_div_2_div_42_div_3_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.selectPayment("card"));
    });
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "\u{1F4B3}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "Card ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.canBill);
    \u0275\u0275advance();
    \u0275\u0275classProp("locked", !ctx_r0.canBill);
  }
}
function BillingComponent_ng_container_11_div_2_div_42_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 132)(1, "div", 133);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 134);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 135);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 136);
    \u0275\u0275listener("click", function BillingComponent_ng_container_11_div_2_div_42_div_4_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.confirmPayment());
    });
    \u0275\u0275text(8, " \u2713 Payment Received \u2014 Confirm Bill ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 137);
    \u0275\u0275listener("click", function BillingComponent_ng_container_11_div_2_div_42_div_4_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext(4);
      ctx_r0.paymentState = "idle";
      return \u0275\u0275resetView(ctx_r0.paymentMethod = null);
    });
    \u0275\u0275text(10, " \u2190 Change Method ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.inr(ctx_r0.grandTotal));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r0.payIcon(ctx_r0.paymentMethod), " ", ctx_r0.payLabel(ctx_r0.paymentMethod), " Payment ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Collect ", ctx_r0.inr(ctx_r0.grandTotal), " from customer, then confirm ");
  }
}
function BillingComponent_ng_container_11_div_2_div_42_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 142)(1, "div", 143);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 144)(4, "p");
    \u0275\u0275text(5, " Tell the customer the amount ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, " Customer scans your ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11, "UPI merchant QR stand");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " and pays ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 145)(14, "span", 146);
    \u0275\u0275text(15, "\u{1F4F1}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 147);
    \u0275\u0275text(17, "\u{1F4B0}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 148);
    \u0275\u0275text(19, "\u{1F535}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 149);
    \u0275\u0275text(21, "\u{1F4F2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 150);
    \u0275\u0275text(23, "Any UPI app");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "button", 151);
    \u0275\u0275listener("click", function BillingComponent_ng_container_11_div_2_div_42_div_5_div_1_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.startUpiWaiting());
    });
    \u0275\u0275text(25, " \u{1F4E1} I'm Waiting for Payment ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 152);
    \u0275\u0275text(27, "\u2014 or \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 153);
    \u0275\u0275listener("click", function BillingComponent_ng_container_11_div_2_div_42_div_5_div_1_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.confirmPayment());
    });
    \u0275\u0275text(29, " \u2713 Already Received \u2014 Confirm ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 137);
    \u0275\u0275listener("click", function BillingComponent_ng_container_11_div_2_div_42_div_5_div_1_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(5);
      ctx_r0.paymentState = "idle";
      return \u0275\u0275resetView(ctx_r0.paymentMethod = null);
    });
    \u0275\u0275text(31, " \u2190 Change Method ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.inr(ctx_r0.grandTotal));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.inr(ctx_r0.grandTotal));
  }
}
function BillingComponent_ng_container_11_div_2_div_42_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 154)(1, "div", 155);
    \u0275\u0275element(2, "div", 156);
    \u0275\u0275elementStart(3, "span", 157);
    \u0275\u0275text(4, "\u{1F4E1}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 158);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 159);
    \u0275\u0275text(8, "Waiting for UPI payment...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 160);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 161);
    \u0275\u0275text(12, " Once customer pays, click the button below.");
    \u0275\u0275element(13, "br");
    \u0275\u0275elementStart(14, "em");
    \u0275\u0275text(15, "Auto-verify will be available after Razorpay backend setup.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 162);
    \u0275\u0275listener("click", function BillingComponent_ng_container_11_div_2_div_42_div_5_div_2_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.upiPaymentReceived());
    });
    \u0275\u0275text(17, " \u2713 Payment Received on Phone ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 163);
    \u0275\u0275listener("click", function BillingComponent_ng_container_11_div_2_div_42_div_5_div_2_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.cancelUpiWait());
    });
    \u0275\u0275text(19, " \u2715 Cancel ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.inr(ctx_r0.grandTotal));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.upiTimerLabel(), " remaining");
  }
}
function BillingComponent_ng_container_11_div_2_div_42_div_5_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 164)(1, "div", 165);
    \u0275\u0275text(2, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 166);
    \u0275\u0275text(4, "UPI Payment Received!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 167);
    \u0275\u0275text(6, "Saving bill...");
    \u0275\u0275elementEnd()();
  }
}
function BillingComponent_ng_container_11_div_2_div_42_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 138);
    \u0275\u0275template(1, BillingComponent_ng_container_11_div_2_div_42_div_5_div_1_Template, 32, 2, "div", 139)(2, BillingComponent_ng_container_11_div_2_div_42_div_5_div_2_Template, 20, 2, "div", 140)(3, BillingComponent_ng_container_11_div_2_div_42_div_5_div_3_Template, 7, 0, "div", 141);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.upiState === "init");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.upiState === "waiting");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.upiState === "received");
  }
}
function BillingComponent_ng_container_11_div_2_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49);
    \u0275\u0275text(2, "\u{1F4B3} Payment");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, BillingComponent_ng_container_11_div_2_div_42_div_3_Template, 15, 3, "div", 8)(4, BillingComponent_ng_container_11_div_2_div_42_div_4_Template, 11, 4, "div", 124)(5, BillingComponent_ng_container_11_div_2_div_42_div_5_Template, 4, 3, "div", 125);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.paymentState === "idle");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paymentState === "confirming" && ctx_r0.paymentMethod !== "upi");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paymentState === "confirming" && ctx_r0.paymentMethod === "upi");
  }
}
function BillingComponent_ng_container_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "div", 30)(3, "div", 31)(4, "span", 32);
    \u0275\u0275text(5, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function BillingComponent_ng_container_11_div_2_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.searchQ, $event) || (ctx_r0.searchQ = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function BillingComponent_ng_container_11_div_2_Template_input_ngModelChange_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.productsShown = 20);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, BillingComponent_ng_container_11_div_2_button_7_Template, 2, 0, "button", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 35)(9, "button", 36);
    \u0275\u0275listener("click", function BillingComponent_ng_container_11_div_2_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.selectedCategory = "";
      return \u0275\u0275resetView(ctx_r0.productsShown = 20);
    });
    \u0275\u0275text(10, " All ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, BillingComponent_ng_container_11_div_2_button_11_Template, 2, 3, "button", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 38);
    \u0275\u0275listener("scroll", function BillingComponent_ng_container_11_div_2_Template_div_scroll_12_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onProductListScroll($event));
    });
    \u0275\u0275template(13, BillingComponent_ng_container_11_div_2_div_13_Template, 15, 10, "div", 39)(14, BillingComponent_ng_container_11_div_2_div_14_Template, 2, 0, "div", 40)(15, BillingComponent_ng_container_11_div_2_div_15_Template, 2, 1, "div", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 42)(17, "div", 43)(18, "h3");
    \u0275\u0275text(19, " Bill Items ");
    \u0275\u0275template(20, BillingComponent_ng_container_11_div_2_span_20_Template, 2, 1, "span", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, BillingComponent_ng_container_11_div_2_div_21_Template, 8, 0, "div", 45)(22, BillingComponent_ng_container_11_div_2_div_22_Template, 21, 3, "div", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 47)(24, "div", 48)(25, "div", 49);
    \u0275\u0275text(26, "\u{1F464} Customer Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 50)(28, "div", 51)(29, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function BillingComponent_ng_container_11_div_2_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.customer.phone, $event) || (ctx_r0.customer.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function BillingComponent_ng_container_11_div_2_Template_input_input_29_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onPhoneInput());
    })("blur", function BillingComponent_ng_container_11_div_2_Template_input_blur_29_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.phoneTouched = true;
      return \u0275\u0275resetView(ctx_r0.closeDropdown());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, BillingComponent_ng_container_11_div_2_span_30_Template, 2, 1, "span", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, BillingComponent_ng_container_11_div_2_div_31_Template, 2, 1, "div", 54)(32, BillingComponent_ng_container_11_div_2_div_32_Template, 2, 1, "div", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 50)(34, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function BillingComponent_ng_container_11_div_2_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.customer.name, $event) || (ctx_r0.customer.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function BillingComponent_ng_container_11_div_2_Template_input_input_34_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onNameInput());
    })("blur", function BillingComponent_ng_container_11_div_2_Template_input_blur_34_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.nameTouched = true);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, BillingComponent_ng_container_11_div_2_div_35_Template, 2, 1, "div", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 50)(37, "input", 57);
    \u0275\u0275twoWayListener("ngModelChange", function BillingComponent_ng_container_11_div_2_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.customer.email, $event) || (ctx_r0.customer.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function BillingComponent_ng_container_11_div_2_Template_input_input_37_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onEmailInput());
    })("blur", function BillingComponent_ng_container_11_div_2_Template_input_blur_37_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.emailTouched = true);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, BillingComponent_ng_container_11_div_2_div_38_Template, 2, 1, "div", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 58)(40, "input", 59);
    \u0275\u0275twoWayListener("ngModelChange", function BillingComponent_ng_container_11_div_2_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.customer.address, $event) || (ctx_r0.customer.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(41, BillingComponent_ng_container_11_div_2_div_41_Template, 21, 7, "div", 60)(42, BillingComponent_ng_container_11_div_2_div_42_Template, 6, 3, "div", 60);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.searchQ);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.searchQ);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", !ctx_r0.selectedCategory);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.categories);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.displayedProducts);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasMoreProducts);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.filteredProducts.length === 0);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.billItems.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.billItems.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.billItems.length > 0);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.customer.phone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.customer.phone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showPhoneDropdown);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.phoneError);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.customer.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.nameError);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.customer.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.emailError);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.customer.address);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.billItems.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.billItems.length > 0);
  }
}
function BillingComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, BillingComponent_ng_container_11_div_1_Template, 20, 6, "div", 15)(2, BillingComponent_ng_container_11_div_2_Template, 43, 22, "div", 16);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paymentState === "done" && ctx_r0.printBill);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paymentState !== "done");
  }
}
function BillingComponent_div_12_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 176)(1, "span");
    \u0275\u0275text(2, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No bills yet. Generate your first bill from New Bill tab.");
    \u0275\u0275elementEnd()();
  }
}
function BillingComponent_div_12_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 177);
    \u0275\u0275listener("click", function BillingComponent_div_12_div_7_Template_div_click_0_listener() {
      const b_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.viewBillDetail(b_r22));
    });
    \u0275\u0275elementStart(1, "div", 178)(2, "span", 179);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 180);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 181)(7, "span", 182);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 183);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 184);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 185);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 186);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 187);
    \u0275\u0275listener("click", function BillingComponent_div_12_div_7_Template_button_click_17_listener($event) {
      const b_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r0.reprintBill(b_r22));
    });
    \u0275\u0275text(18, " \u{1F5A8} ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r22 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(b_r22.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.fmtDate(b_r22.date), " \xB7 ", ctx_r0.fmtTime(b_r22.date), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(b_r22.customer.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r22.customer.phone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", b_r22.items.length, " item", b_r22.items.length !== 1 ? "s" : "", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.inr(b_r22.grandTotal));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", b_r22.paymentMethod);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.payIcon(b_r22.paymentMethod), " ", ctx_r0.payLabel(b_r22.paymentMethod), " ");
  }
}
function BillingComponent_div_12_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 188);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(' No bills match "', ctx_r0.historySearch, '" ');
  }
}
function BillingComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 168)(1, "div", 169)(2, "input", 170);
    \u0275\u0275twoWayListener("ngModelChange", function BillingComponent_div_12_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.historySearch, $event) || (ctx_r0.historySearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 171);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, BillingComponent_div_12_div_5_Template, 5, 0, "div", 172);
    \u0275\u0275elementStart(6, "div", 173);
    \u0275\u0275template(7, BillingComponent_div_12_div_7_Template, 19, 11, "div", 174);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, BillingComponent_div_12_div_8_Template, 2, 1, "div", 175);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.historySearch);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.savedBills.length, " bill", ctx_r0.savedBills.length !== 1 ? "s" : "", " this session");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.savedBills.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.filteredHistory);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.savedBills.length > 0 && ctx_r0.filteredHistory.length === 0);
  }
}
function BillingComponent_div_13_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 213);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2709 ", ctx_r0.selectedBill.customer.email, "");
  }
}
function BillingComponent_div_13_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 214);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4CD} ", ctx_r0.selectedBill.customer.address, "");
  }
}
function BillingComponent_div_13_tr_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 84);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275element(5, "br");
    \u0275\u0275elementStart(6, "small", 88);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 80);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 82);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 82);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 215);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r24 = ctx.$implicit;
    const i_r25 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r25 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", item_r24.product.icon, " ", item_r24.product.name, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r24.product.sku);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r24.qty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.inr(item_r24.unitPrice));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r24.discount ? ctx_r0.inr(item_r24.discount) : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.inr(ctx_r0.lineTotal(item_r24)));
  }
}
function BillingComponent_div_13_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 216)(1, "span");
    \u0275\u0275text(2, "Discount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u2212 ", ctx_r0.inr(ctx_r0.selectedBill.totalDiscount), "");
  }
}
function BillingComponent_div_13_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 205)(1, "span");
    \u0275\u0275text(2, "GST");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("+ ", ctx_r0.inr(ctx_r0.selectedBill.gstAmount), "");
  }
}
function BillingComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 189);
    \u0275\u0275listener("click", function BillingComponent_div_13_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeBillDetail());
    });
    \u0275\u0275elementStart(1, "div", 190);
    \u0275\u0275listener("click", function BillingComponent_div_13_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r23);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 191)(3, "div")(4, "div", 192);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 193);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 194);
    \u0275\u0275listener("click", function BillingComponent_div_13_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeBillDetail());
    });
    \u0275\u0275text(9, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 195)(11, "div", 196)(12, "div", 197);
    \u0275\u0275text(13, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 198)(15, "span", 199);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 200);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, BillingComponent_div_13_span_19_Template, 2, 1, "span", 201)(20, BillingComponent_div_13_span_20_Template, 2, 1, "span", 202);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 196)(22, "div", 197);
    \u0275\u0275text(23, "Items Purchased");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "table", 203)(25, "thead")(26, "tr")(27, "th");
    \u0275\u0275text(28, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th");
    \u0275\u0275text(30, "Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "th", 80);
    \u0275\u0275text(32, "Qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "th", 82);
    \u0275\u0275text(34, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "th", 82);
    \u0275\u0275text(36, "Disc");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th", 82);
    \u0275\u0275text(38, "Total");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "tbody");
    \u0275\u0275template(40, BillingComponent_div_13_tr_40_Template, 16, 8, "tr", 83);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 204)(42, "div", 205)(43, "span");
    \u0275\u0275text(44, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span");
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(47, BillingComponent_div_13_div_47_Template, 5, 1, "div", 206)(48, BillingComponent_div_13_div_48_Template, 5, 1, "div", 207);
    \u0275\u0275elementStart(49, "div", 208)(50, "span");
    \u0275\u0275text(51, "Total Paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span");
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 209);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "div", 210)(57, "button", 211);
    \u0275\u0275listener("click", function BillingComponent_div_13_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.reprintBill(ctx_r0.selectedBill));
    });
    \u0275\u0275text(58, " \u{1F5A8} Print Receipt ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "button", 212);
    \u0275\u0275listener("click", function BillingComponent_div_13_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeBillDetail());
    });
    \u0275\u0275text(60, "Close");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.selectedBill.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r0.fmtDate(ctx_r0.selectedBill.date), " at ", ctx_r0.fmtTime(ctx_r0.selectedBill.date), " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.selectedBill.customer.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4F1} ", ctx_r0.selectedBill.customer.phone, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedBill.customer.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedBill.customer.address);
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx_r0.selectedBill.items);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.inr(ctx_r0.selectedBill.subtotal));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedBill.totalDiscount > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedBill.gstEnabled && ctx_r0.selectedBill.gstAmount > 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.inr(ctx_r0.selectedBill.grandTotal));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r0.payIcon(ctx_r0.selectedBill.paymentMethod), " ", ctx_r0.payLabel(ctx_r0.selectedBill.paymentMethod), " \u2014 PAID ");
  }
}
function BillingComponent_div_14_div_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Ph: ", ctx_r0.shopSettings.phone, "");
  }
}
function BillingComponent_div_14_div_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" | ", ctx_r0.shopSettings.email, "");
  }
}
function BillingComponent_div_14_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 236);
    \u0275\u0275template(1, BillingComponent_div_14_div_6_span_1_Template, 2, 1, "span", 8)(2, BillingComponent_div_14_div_6_span_2_Template, 2, 1, "span", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.shopSettings.phone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.shopSettings.email);
  }
}
function BillingComponent_div_14_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 237);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.shopSettings.address, " ");
  }
}
function BillingComponent_div_14_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 238);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" GSTIN: ", ctx_r0.shopSettings.gstin, " ");
  }
}
function BillingComponent_div_14_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "b");
    \u0275\u0275text(2, "Email :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.printBill.customer.email, " ");
  }
}
function BillingComponent_div_14_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "b");
    \u0275\u0275text(2, "Address:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.printBill.customer.address, " ");
  }
}
function BillingComponent_div_14_tr_51_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 243);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r26 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" | Disc: ", ctx_r0.inr(item_r26.discount), "");
  }
}
function BillingComponent_div_14_tr_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 239);
    \u0275\u0275text(2);
    \u0275\u0275element(3, "br");
    \u0275\u0275elementStart(4, "span", 240);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, BillingComponent_div_14_tr_51_span_6_Template, 2, 1, "span", 241);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 242);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 242);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 242);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r26 = ctx.$implicit;
    const i_r27 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", i_r27 + 1, ". ", item_r26.product.name, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r26.product.sku);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r26.discount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r26.qty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.inr(item_r26.unitPrice));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.inr(ctx_r0.lineTotal(item_r26)));
  }
}
function BillingComponent_div_14_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 230)(1, "span");
    \u0275\u0275text(2, "Discount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("-", ctx_r0.inr(ctx_r0.printBill.totalDiscount), "");
  }
}
function BillingComponent_div_14_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 230)(1, "span");
    \u0275\u0275text(2, "GST");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.inr(ctx_r0.printBill.gstAmount));
  }
}
function BillingComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 217)(1, "div", 218)(2, "div", 219);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 220);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, BillingComponent_div_14_div_6_Template, 3, 2, "div", 221)(7, BillingComponent_div_14_div_7_Template, 2, 1, "div", 222)(8, BillingComponent_div_14_div_8_Template, 2, 1, "div", 223);
    \u0275\u0275elementStart(9, "div", 224);
    \u0275\u0275text(10, "================================");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 225)(12, "div")(13, "b");
    \u0275\u0275text(14, "Bill No:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div")(17, "b");
    \u0275\u0275text(18, "Date :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div")(21, "b");
    \u0275\u0275text(22, "Time :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 224);
    \u0275\u0275text(25, "--------------------------------");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 225)(27, "div")(28, "b");
    \u0275\u0275text(29, "Customer:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div")(32, "b");
    \u0275\u0275text(33, "Phone :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, BillingComponent_div_14_div_35_Template, 4, 1, "div", 8)(36, BillingComponent_div_14_div_36_Template, 4, 1, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 224);
    \u0275\u0275text(38, "--------------------------------");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "table", 226)(40, "thead")(41, "tr")(42, "th", 227);
    \u0275\u0275text(43, "Item");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "th", 228);
    \u0275\u0275text(45, "Qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "th", 228);
    \u0275\u0275text(47, "Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th", 228);
    \u0275\u0275text(49, "Amt");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "tbody");
    \u0275\u0275template(51, BillingComponent_div_14_tr_51_Template, 13, 7, "tr", 83);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 224);
    \u0275\u0275text(53, "--------------------------------");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 229)(55, "div", 230)(56, "span");
    \u0275\u0275text(57, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span");
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(60, BillingComponent_div_14_div_60_Template, 5, 1, "div", 231)(61, BillingComponent_div_14_div_61_Template, 5, 1, "div", 231);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 224);
    \u0275\u0275text(63, "================================");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 232)(65, "span");
    \u0275\u0275text(66, "TOTAL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "span");
    \u0275\u0275text(68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 224);
    \u0275\u0275text(70, "================================");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 233);
    \u0275\u0275text(72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "div", 224);
    \u0275\u0275text(74, "--------------------------------");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div", 234);
    \u0275\u0275text(76, "Thank You! Visit Again \u{1F64F}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "div", 235);
    \u0275\u0275text(78, "Computer generated bill. No signature required.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "div", 224);
    \u0275\u0275text(80, "================================");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.shopSettings.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.shopSettings.tagline);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.shopSettings.phone || ctx_r0.shopSettings.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.shopSettings.address);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.shopSettings.gstin);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r0.printBill.id, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.fmtDate(ctx_r0.printBill.date), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.fmtTime(ctx_r0.printBill.date), "");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r0.printBill.customer.name, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.printBill.customer.phone, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.printBill.customer.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.printBill.customer.address);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r0.printBill.items);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.inr(ctx_r0.printBill.subtotal));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.printBill.totalDiscount > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.printBill.gstEnabled && ctx_r0.printBill.gstAmount > 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.inr(ctx_r0.printBill.grandTotal));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" Payment: ", ctx_r0.payIcon(ctx_r0.printBill.paymentMethod), " ", ctx_r0.payLabel(ctx_r0.printBill.paymentMethod), " \u2014 PAID ");
  }
}
var BillingComponent = class _BillingComponent {
  settingsSvc;
  catalogSvc;
  notifSvc;
  activeTab = "new";
  searchQ = "";
  selectedCategory = "";
  billItems = [];
  customer = { phone: "", name: "", email: "", address: "" };
  gstEnabled = false;
  paymentMethod = null;
  paymentState = "idle";
  historySearch = "";
  savedBills = [];
  printBill = null;
  counter = 1001;
  // Phone typeahead
  phoneDropdown = [];
  showPhoneDropdown = false;
  // Infinite scroll: how many products are visible
  productsShown = 20;
  // Field touched flags — set on input for real-time validation
  nameTouched = false;
  phoneTouched = false;
  emailTouched = false;
  // Bill history detail modal
  selectedBill = null;
  // UPI flow states
  upiState = "init";
  upiCountdown = 0;
  upiTimer = null;
  // Shop settings (for receipt header)
  shopSettings;
  // localStorage keys
  LS_BILLS = "mkr_bills";
  LS_COUNTER = "mkr_bill_counter";
  LS_CUSTOMERS = "mkr_customers";
  constructor(settingsSvc, catalogSvc, notifSvc) {
    this.settingsSvc = settingsSvc;
    this.catalogSvc = catalogSvc;
    this.notifSvc = notifSvc;
    this.shopSettings = this.settingsSvc.get();
  }
  ngOnInit() {
    this.loadFromStorage();
  }
  // ── Storage ───────────────────────────────────────────────────────────────
  loadFromStorage() {
    try {
      const cnt = localStorage.getItem(this.LS_COUNTER);
      if (cnt)
        this.counter = parseInt(cnt, 10);
      const raw = localStorage.getItem(this.LS_BILLS);
      if (raw) {
        this.savedBills = JSON.parse(raw).map((b) => __spreadProps(__spreadValues({}, b), {
          date: new Date(b.date)
        }));
      }
      const custs = localStorage.getItem(this.LS_CUSTOMERS);
      if (custs) {
        const saved = JSON.parse(custs);
        saved.forEach((c) => {
          if (!this.knownCustomers.find((k) => k.phone === c.phone)) {
            this.knownCustomers.push(c);
          }
        });
      }
    } catch {
    }
  }
  persist() {
    try {
      localStorage.setItem(this.LS_COUNTER, String(this.counter));
      localStorage.setItem(this.LS_BILLS, JSON.stringify(this.savedBills));
      localStorage.setItem(this.LS_CUSTOMERS, JSON.stringify(this.knownCustomers));
    } catch {
    }
  }
  // ── Known customers (seed + saved) ───────────────────────────────────────
  knownCustomers = [
    {
      phone: "9876543210",
      name: "Ravi Kumar",
      email: "ravi.k@gmail.com",
      address: "12 Main Street, Bangalore"
    },
    {
      phone: "9123456789",
      name: "Priya Sharma",
      email: "",
      address: "45 Park Road, Chennai"
    },
    {
      phone: "9988776655",
      name: "Meena Patel",
      email: "meena.p@yahoo.com",
      address: "78 MG Road, Hyderabad"
    },
    {
      phone: "9845012345",
      name: "Arun Nair",
      email: "",
      address: "56 Gandhi Nagar, Kochi"
    },
    {
      phone: "9712345678",
      name: "Sunita Rao",
      email: "sunita.r@gmail.com",
      address: "23 Ring Road, Pune"
    }
  ];
  // ── Product catalog (from shared service) ────────────────────────────────
  get categories() {
    return this.catalogSvc.categories();
  }
  get filteredProducts() {
    const q = this.searchQ.trim().toLowerCase();
    return this.catalogSvc.products().filter((p) => {
      const matchCat = !this.selectedCategory || p.category === this.selectedCategory;
      const matchQ = !q || p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }
  // Show limited slice when not filtering; user scrolls to load more
  get displayedProducts() {
    const all = this.filteredProducts;
    const isFiltering = !!this.searchQ.trim() || !!this.selectedCategory;
    return isFiltering ? all : all.slice(0, this.productsShown);
  }
  get hasMoreProducts() {
    const isFiltering = !!this.searchQ.trim() || !!this.selectedCategory;
    return !isFiltering && this.filteredProducts.length > this.productsShown;
  }
  // Triggered by scroll event on .product-list-card
  onProductListScroll(e) {
    const el = e.target;
    if (el.scrollHeight - el.scrollTop - el.clientHeight < 60) {
      this.productsShown += 20;
    }
  }
  // ── Bill items ────────────────────────────────────────────────────────────
  addProduct(p) {
    if (p.stock === 0)
      return;
    const existing = this.billItems.find((i) => i.product.sku === p.sku);
    if (existing) {
      existing.qty++;
      return;
    }
    this.billItems.push({
      product: p,
      qty: 1,
      unitPrice: p.price,
      discount: 0
    });
  }
  removeItem(index) {
    this.billItems.splice(index, 1);
  }
  decQty(item) {
    if (item.qty > 1)
      item.qty--;
  }
  incQty(item) {
    item.qty++;
  }
  lineSubtotal(item) {
    return item.qty * item.unitPrice;
  }
  lineTotal(item) {
    return Math.max(0, item.qty * item.unitPrice - (item.discount || 0));
  }
  lineGst(item) {
    return this.gstEnabled ? Math.round(this.lineTotal(item) * item.product.gstRate / 100) : 0;
  }
  get subtotal() {
    return this.billItems.reduce((s, i) => s + this.lineSubtotal(i), 0);
  }
  get totalDiscount() {
    return this.billItems.reduce((s, i) => s + (i.discount || 0), 0);
  }
  get taxableAmount() {
    return this.subtotal - this.totalDiscount;
  }
  get gstAmount() {
    return this.billItems.reduce((s, i) => s + this.lineGst(i), 0);
  }
  get grandTotal() {
    return this.taxableAmount + this.gstAmount;
  }
  // ── Phone typeahead ───────────────────────────────────────────────────────
  onPhoneInput() {
    this.customer.phone = this.customer.phone.replace(/\D/g, "").slice(0, 10);
    this.phoneTouched = true;
    const q = this.customer.phone;
    this.phoneDropdown = q.length >= 3 ? this.knownCustomers.filter((c) => c.phone.startsWith(q) || c.phone.includes(q)) : [];
    this.showPhoneDropdown = this.phoneDropdown.length > 0;
  }
  // mousedown fires before blur so click registers before field loses focus
  selectFromDropdown(c) {
    this.customer = __spreadValues({}, c);
    this.phoneDropdown = [];
    this.showPhoneDropdown = false;
    this.phoneTouched = true;
    this.nameTouched = true;
  }
  closeDropdown() {
    setTimeout(() => {
      this.showPhoneDropdown = false;
    }, 150);
  }
  // ── Validation (real-time) ────────────────────────────────────────────────
  onNameInput() {
    this.customer.name = this.customer.name.replace(/[^a-zA-Z .'-]/g, "");
    this.nameTouched = true;
  }
  onEmailInput() {
    this.emailTouched = true;
  }
  get nameError() {
    if (!this.nameTouched)
      return null;
    const v = this.customer.name.trim();
    if (!v)
      return "Name is required";
    if (v.length < 2)
      return "Name is too short";
    return null;
  }
  get phoneError() {
    if (!this.phoneTouched)
      return null;
    const v = this.customer.phone.trim();
    if (!v)
      return "Phone number is required";
    if (v.length !== 10)
      return "Must be exactly 10 digits";
    return null;
  }
  get emailError() {
    if (!this.emailTouched)
      return null;
    const v = this.customer.email.trim();
    if (!v)
      return null;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))
      return "Enter a valid email address";
    return null;
  }
  get canBill() {
    return this.billItems.length > 0 && this.customer.name.trim().length >= 2 && this.customer.phone.trim().length === 10 && !this.emailError;
  }
  get currentBillId() {
    return `MKR-BILL-${this.counter}`;
  }
  // ── Payment flow ──────────────────────────────────────────────────────────
  selectPayment(m) {
    if (!this.canBill)
      return;
    this.paymentMethod = m;
    this.paymentState = "confirming";
    if (m === "upi")
      this.upiState = "init";
  }
  startUpiWaiting() {
    this.upiState = "waiting";
    this.upiCountdown = 120;
    this.upiTimer = setInterval(() => {
      this.upiCountdown--;
      if (this.upiCountdown <= 0)
        this.cancelUpiWait();
    }, 1e3);
  }
  upiPaymentReceived() {
    if (this.upiTimer) {
      clearInterval(this.upiTimer);
      this.upiTimer = null;
    }
    this.upiState = "received";
    setTimeout(() => this.confirmPayment(), 800);
  }
  cancelUpiWait() {
    if (this.upiTimer) {
      clearInterval(this.upiTimer);
      this.upiTimer = null;
    }
    this.upiState = "init";
    this.upiCountdown = 0;
  }
  upiTimerLabel() {
    const m = Math.floor(this.upiCountdown / 60);
    const s = this.upiCountdown % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  }
  confirmPayment() {
    const bill = {
      id: `MKR-BILL-${this.counter++}`,
      date: /* @__PURE__ */ new Date(),
      customer: __spreadValues({}, this.customer),
      items: this.billItems.map((i) => __spreadProps(__spreadValues({}, i), { product: __spreadValues({}, i.product) })),
      gstEnabled: this.gstEnabled,
      paymentMethod: this.paymentMethod,
      subtotal: this.subtotal,
      totalDiscount: this.totalDiscount,
      gstAmount: this.gstAmount,
      grandTotal: this.grandTotal
    };
    this.savedBills.unshift(bill);
    this.printBill = bill;
    this.paymentState = "done";
    this.catalogSvc.reduceStock(this.billItems.map((i) => ({ sku: i.product.sku, qty: i.qty })));
    const icon = this.paymentMethod === "cash" ? "\u{1F4B5}" : this.paymentMethod === "upi" ? "\u{1F4F1}" : "\u{1F4B3}";
    const method = this.paymentMethod === "cash" ? "Cash" : this.paymentMethod === "upi" ? "UPI" : "Card";
    this.notifSvc.push("payment", icon, `${method} Payment Received`, `${this.customer.name} paid ${this.inr(this.grandTotal)} \u2014 ${bill.id}`);
    if (!this.knownCustomers.find((c) => c.phone === this.customer.phone)) {
      this.knownCustomers.push(__spreadValues({}, this.customer));
    }
    this.persist();
  }
  doPrint() {
    setTimeout(() => window.print(), 100);
  }
  startNewBill() {
    this.shopSettings = this.settingsSvc.get();
    if (this.upiTimer) {
      clearInterval(this.upiTimer);
      this.upiTimer = null;
    }
    this.billItems = [];
    this.customer = { phone: "", name: "", email: "", address: "" };
    this.paymentMethod = null;
    this.paymentState = "idle";
    this.gstEnabled = false;
    this.searchQ = "";
    this.selectedCategory = "";
    this.printBill = null;
    this.productsShown = 20;
    this.phoneDropdown = [];
    this.showPhoneDropdown = false;
    this.nameTouched = false;
    this.phoneTouched = false;
    this.emailTouched = false;
    this.upiState = "init";
  }
  // ── Bill history ──────────────────────────────────────────────────────────
  viewBillDetail(b) {
    this.selectedBill = b;
  }
  closeBillDetail() {
    this.selectedBill = null;
  }
  reprintBill(b) {
    this.printBill = b;
    setTimeout(() => window.print(), 100);
  }
  get filteredHistory() {
    const q = this.historySearch.toLowerCase();
    if (!q)
      return this.savedBills;
    return this.savedBills.filter((b) => b.id.toLowerCase().includes(q) || b.customer.name.toLowerCase().includes(q) || b.customer.phone.includes(q));
  }
  // ── Utilities ─────────────────────────────────────────────────────────────
  inr(n) {
    return "\u20B9" + n.toLocaleString("en-IN");
  }
  fmtDate(d) {
    return d.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  }
  fmtTime(d) {
    return d.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  payLabel(m) {
    return m === "cash" ? "Cash" : m === "upi" ? "UPI" : "Card";
  }
  payIcon(m) {
    return m === "cash" ? "\u{1F4B5}" : m === "upi" ? "\u{1F4F1}" : "\u{1F4B3}";
  }
  ngOnDestroy() {
    if (this.upiTimer)
      clearInterval(this.upiTimer);
  }
  static \u0275fac = function BillingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BillingComponent)(\u0275\u0275directiveInject(ShopSettingsService), \u0275\u0275directiveInject(CatalogService), \u0275\u0275directiveInject(NotificationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BillingComponent, selectors: [["app-billing"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 11, consts: [[1, "billing-page"], [1, "tab-bar"], [1, "tabs"], [1, "tab", 3, "click"], ["class", "tab-badge", 4, "ngIf"], [1, "tab-right"], ["class", "bill-id-label", 4, "ngIf"], ["class", "btn-new-bill", 3, "click", 4, "ngIf"], [4, "ngIf"], ["class", "history-tab", 4, "ngIf"], ["class", "bd-overlay", 3, "click", 4, "ngIf"], ["class", "print-receipt", 4, "ngIf"], [1, "tab-badge"], [1, "bill-id-label"], [1, "btn-new-bill", 3, "click"], ["class", "success-screen", 4, "ngIf"], ["class", "pos-layout", 4, "ngIf"], [1, "success-screen"], [1, "ss-icon"], [1, "ss-heading"], [1, "ss-id"], [1, "ss-amount"], [1, "ss-method"], [1, "ss-customer"], [1, "ss-actions"], [1, "btn-print", 3, "click"], [1, "btn-start-new", 3, "click"], [1, "ss-hint"], [1, "pos-layout"], [1, "pos-left"], [1, "search-card"], [1, "search-box"], [1, "si"], ["type", "text", "placeholder", "Search product by name, SKU or category...", 1, "si-input", 3, "ngModelChange", "ngModel"], ["class", "si-clear", 3, "click", 4, "ngIf"], [1, "cat-chips"], [1, "chip", 3, "click"], ["class", "chip", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "product-list-card", 3, "scroll"], ["class", "product-row", 3, "row-out-of-stock", "click", 4, "ngFor", "ngForOf"], ["class", "scroll-hint", 4, "ngIf"], ["class", "no-results", 4, "ngIf"], [1, "bill-items-card"], [1, "bi-header"], ["class", "bi-count", 4, "ngIf"], ["class", "bi-empty", 4, "ngIf"], ["class", "bill-table-wrap", 4, "ngIf"], [1, "pos-right"], [1, "card"], [1, "card-title"], [1, "field-wrap"], [1, "phone-box"], ["type", "tel", "placeholder", "Phone number *", "maxlength", "10", 1, "field", 3, "ngModelChange", "input", "blur", "ngModel"], ["class", "phone-digits", 4, "ngIf"], ["class", "phone-dropdown", 4, "ngIf"], ["class", "field-error", 4, "ngIf"], ["type", "text", "placeholder", "Full name *", 1, "field", 3, "ngModelChange", "input", "blur", "ngModel"], ["type", "email", "placeholder", "Email (optional)", 1, "field", 3, "ngModelChange", "input", "blur", "ngModel"], [1, "field-wrap", "last"], ["type", "text", "placeholder", "Address (optional)", 1, "field", 3, "ngModelChange", "ngModel"], ["class", "card", 4, "ngIf"], [1, "si-clear", 3, "click"], [1, "product-row", 3, "click"], [1, "pr-icon"], [1, "pr-info"], [1, "pr-name"], [1, "pr-meta"], [1, "pr-right"], ["class", "pr-stock s-low", 4, "ngIf"], ["class", "pr-stock s-out", 4, "ngIf"], [1, "pr-price"], [1, "add-btn", 3, "click", "disabled"], [1, "pr-stock", "s-low"], [1, "pr-stock", "s-out"], [1, "scroll-hint"], [1, "no-results"], [1, "bi-count"], [1, "bi-empty"], [1, "bill-table-wrap"], [1, "bill-table"], [1, "tc"], ["class", "tr", 4, "ngIf"], [1, "tr"], [4, "ngFor", "ngForOf"], [1, "td-n"], [1, "td-prod"], [1, "td-ico"], [1, "td-name"], [1, "td-sku"], [1, "qty-ctrl"], [3, "click"], ["type", "number", "min", "1", 1, "qty-in", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", 1, "price-in", 3, "ngModelChange", "ngModel"], ["class", "negotiated", 4, "ngIf"], ["type", "number", "min", "0", "placeholder", "0", 1, "disc-in", 3, "ngModelChange", "ngModel"], ["class", "tr gst-pct", 4, "ngIf"], ["class", "tr gst-amt", 4, "ngIf"], [1, "td-total", "tr"], ["title", "Remove", 1, "remove-btn", 3, "click"], [1, "negotiated"], [1, "tr", "gst-pct"], [1, "tr", "gst-amt"], [1, "phone-digits"], [1, "phone-dropdown"], ["class", "pd-item", 3, "mousedown", 4, "ngFor", "ngForOf"], [1, "pd-item", 3, "mousedown"], [1, "pd-top"], [1, "pd-phone"], [1, "pd-name"], ["class", "pd-addr", 4, "ngIf"], [1, "pd-addr"], [1, "field-error"], ["title", "GST is tax added by government. Turn ON if your shop is GST registered.", 1, "gst-toggle"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "gt-track"], [1, "gt-label"], [1, "sum-row"], ["class", "sum-row disc", 4, "ngIf"], ["class", "sum-row gst-row", 4, "ngIf"], [1, "sum-divider"], [1, "sum-total"], [1, "sum-row", "disc"], [1, "sum-row", "gst-row"], [1, "gst-note"], ["class", "pay-confirm-box", 4, "ngIf"], ["class", "pay-upi-box", 4, "ngIf"], ["class", "pay-need", 4, "ngIf"], [1, "pay-methods"], [1, "pay-btn", "cash", 3, "click"], [1, "pay-btn", "upi", 3, "click"], [1, "pay-btn", "card", 3, "click"], [1, "pay-need"], [1, "pay-confirm-box"], [1, "pc-amount"], [1, "pc-method"], [1, "pc-note"], [1, "btn-confirm", 3, "click"], [1, "btn-back", 3, "click"], [1, "pay-upi-box"], ["class", "upi-init", 4, "ngIf"], ["class", "upi-waiting", 4, "ngIf"], ["class", "upi-received", 4, "ngIf"], [1, "upi-init"], [1, "upi-amount"], [1, "upi-instruction"], [1, "upi-apps"], ["title", "PhonePe"], ["title", "Google Pay"], ["title", "Paytm"], ["title", "Any UPI App"], [1, "upi-apps-label"], [1, "btn-upi-wait", 3, "click"], [1, "upi-divider"], [1, "btn-confirm-sm", 3, "click"], [1, "upi-waiting"], [1, "upi-pulse-wrap"], [1, "upi-pulse"], [1, "upi-pulse-icon"], [1, "upi-wait-amount"], [1, "upi-wait-status"], [1, "upi-countdown"], [1, "upi-wait-note"], [1, "btn-upi-received", 3, "click"], [1, "btn-cancel-upi", 3, "click"], [1, "upi-received"], [1, "upi-received-icon"], [1, "upi-received-text"], [1, "upi-received-sub"], [1, "history-tab"], [1, "history-top"], ["type", "text", "placeholder", "Search by bill ID, customer name or phone...", 1, "history-search", 3, "ngModelChange", "ngModel"], [1, "history-meta"], ["class", "history-empty", 4, "ngIf"], [1, "history-list"], ["class", "h-row", 3, "click", 4, "ngFor", "ngForOf"], ["class", "no-match", 4, "ngIf"], [1, "history-empty"], [1, "h-row", 3, "click"], [1, "h-col-id"], [1, "h-id"], [1, "h-date"], [1, "h-col-cust"], [1, "h-name"], [1, "h-phone"], [1, "h-col-items"], [1, "h-col-amount"], [1, "h-pay-badge", 3, "ngClass"], [1, "reprint-btn", 3, "click"], [1, "no-match"], [1, "bd-overlay", 3, "click"], [1, "bd-modal", 3, "click"], [1, "bd-head"], [1, "bd-bill-id"], [1, "bd-bill-date"], [1, "bd-close", 3, "click"], [1, "bd-body"], [1, "bd-section"], [1, "bd-sec-title"], [1, "bd-customer"], [1, "bd-cust-name"], [1, "bd-cust-phone"], ["class", "bd-cust-email", 4, "ngIf"], ["class", "bd-cust-addr", 4, "ngIf"], [1, "bd-table"], [1, "bd-section", "bd-summary-section"], [1, "bd-sum-row"], ["class", "bd-sum-row green", 4, "ngIf"], ["class", "bd-sum-row", 4, "ngIf"], [1, "bd-sum-total"], [1, "bd-pay-method"], [1, "bd-foot"], [1, "bd-btn-print", 3, "click"], [1, "bd-btn-close", 3, "click"], [1, "bd-cust-email"], [1, "bd-cust-addr"], [1, "tr", "td-total"], [1, "bd-sum-row", "green"], [1, "print-receipt"], [1, "receipt"], [1, "r-shop"], [1, "r-sub"], ["class", "r-contact", 4, "ngIf"], ["class", "r-address", 4, "ngIf"], ["class", "r-gstin", 4, "ngIf"], [1, "r-line"], [1, "r-block"], [1, "r-table"], [1, "r-th-item"], [1, "r-th-num"], [1, "r-sum-rows"], [1, "r-sum-row"], ["class", "r-sum-row", 4, "ngIf"], [1, "r-total"], [1, "r-pay"], [1, "r-thanks"], [1, "r-note"], [1, "r-contact"], [1, "r-address"], [1, "r-gstin"], [1, "r-td-item"], [1, "r-sku"], ["class", "r-disc", 4, "ngIf"], [1, "r-td-num"], [1, "r-disc"]], template: function BillingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      \u0275\u0275listener("click", function BillingComponent_Template_button_click_3_listener() {
        return ctx.activeTab = "new";
      });
      \u0275\u0275text(4, " \u{1F9FE} New Bill ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 3);
      \u0275\u0275listener("click", function BillingComponent_Template_button_click_5_listener() {
        return ctx.activeTab = "history";
      });
      \u0275\u0275text(6, " \u{1F4CB} Bill History ");
      \u0275\u0275template(7, BillingComponent_span_7_Template, 2, 1, "span", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 5);
      \u0275\u0275template(9, BillingComponent_span_9_Template, 2, 1, "span", 6)(10, BillingComponent_button_10_Template, 2, 0, "button", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(11, BillingComponent_ng_container_11_Template, 3, 2, "ng-container", 8)(12, BillingComponent_div_12_Template, 9, 6, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, BillingComponent_div_13_Template, 61, 14, "div", 10)(14, BillingComponent_div_14_Template, 81, 19, "div", 11);
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.activeTab === "new");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab === "history");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.savedBills.length);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.activeTab === "new" && ctx.paymentState !== "done");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.paymentState === "done");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "new");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "history");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedBill);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.printBill);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, MaxLengthValidator, MinValidator, NgModel], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.billing-page[_ngcontent-%COMP%] {\n  padding: 1rem 1rem 3rem;\n}\n.tab-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.25rem;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n.tab[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0.45rem 1.1rem;\n  border: none;\n  border-radius: 8px;\n  background: #f3f4f6;\n  color: #4b5563;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.15s;\n  white-space: nowrap;\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: #2874F0;\n  color: #fff;\n}\n.tab-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 4px;\n  background: #ef4444;\n  color: #fff;\n  border-radius: 9px;\n  font-size: 0.65rem;\n  font-weight: 700;\n  margin-left: 0.3rem;\n  vertical-align: middle;\n}\n.tab-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.bill-id-label[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #9ca3af;\n  font-weight: 500;\n}\n.btn-new-bill[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.9rem;\n  background: #16a34a;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-new-bill[_ngcontent-%COMP%]:hover {\n  background: #15803d;\n}\n.success-screen[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 1rem;\n  max-width: 440px;\n  margin: 0 auto;\n}\n.success-screen[_ngcontent-%COMP%]   .ss-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  display: block;\n}\n.success-screen[_ngcontent-%COMP%]   .ss-heading[_ngcontent-%COMP%] {\n  margin: 0.6rem 0 0.2rem;\n  font-size: 1.5rem;\n  color: #16a34a;\n}\n.success-screen[_ngcontent-%COMP%]   .ss-id[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #9ca3af;\n  margin: 0.15rem 0;\n}\n.success-screen[_ngcontent-%COMP%]   .ss-amount[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0.2rem 0;\n}\n.success-screen[_ngcontent-%COMP%]   .ss-method[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #4b5563;\n}\n.success-screen[_ngcontent-%COMP%]   .ss-customer[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #6b7280;\n  margin: 0.2rem 0 1.25rem;\n}\n.success-screen[_ngcontent-%COMP%]   .ss-hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #9ca3af;\n  margin-top: 0.75rem;\n}\n.ss-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.btn-print[_ngcontent-%COMP%] {\n  padding: 0.65rem 1.25rem;\n  background: #2874F0;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-print[_ngcontent-%COMP%]:hover {\n  background: #1d5ed4;\n}\n.btn-start-new[_ngcontent-%COMP%] {\n  padding: 0.65rem 1.25rem;\n  background: #16a34a;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-start-new[_ngcontent-%COMP%]:hover {\n  background: #15803d;\n}\n.pos-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 340px;\n  gap: 1rem;\n  align-items: start;\n}\n.pos-left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.875rem;\n}\n.search-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 0.875rem;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  border: 1.5px solid #d1d5db;\n  border-radius: 8px;\n  padding: 0.45rem 0.7rem;\n  margin-bottom: 0.65rem;\n  transition: border-color 0.15s;\n}\n.search-box[_ngcontent-%COMP%]:focus-within {\n  border-color: #2874F0;\n}\n.si[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  flex-shrink: 0;\n}\n.si-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 0.875rem;\n  background: transparent;\n}\n.si-clear[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  color: #9ca3af;\n  cursor: pointer;\n  font-size: 0.8rem;\n}\n.si-clear[_ngcontent-%COMP%]:hover {\n  color: #374151;\n}\n.cat-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.3rem;\n}\n.chip[_ngcontent-%COMP%] {\n  padding: 0.18rem 0.65rem;\n  border-radius: 20px;\n  border: 1px solid #d1d5db;\n  background: #f9fafb;\n  font-size: 0.72rem;\n  color: #4b5563;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.chip.active[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-color: #2874F0;\n  color: #2874F0;\n  font-weight: 600;\n}\n.product-list-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  max-height: 260px;\n  overflow-y: auto;\n}\n.product-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  padding: 0.55rem 0.875rem;\n  cursor: pointer;\n  border-bottom: 1px solid #f3f4f6;\n  transition: background 0.1s;\n}\n.product-row[_ngcontent-%COMP%]:hover {\n  background: #f0f7ff;\n}\n.product-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.pr-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  width: 1.75rem;\n  text-align: center;\n  flex-shrink: 0;\n}\n.pr-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.05rem;\n}\n.pr-name[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  font-weight: 500;\n  color: #111827;\n}\n.pr-meta[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #9ca3af;\n}\n.pr-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-shrink: 0;\n}\n.pr-price[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #111827;\n  font-size: 0.84rem;\n}\n.add-btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.6rem;\n  border: 1.5px solid #2874F0;\n  border-radius: 6px;\n  color: #2874F0;\n  background: transparent;\n  font-size: 0.75rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n  white-space: nowrap;\n}\n.add-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2874F0;\n  color: #fff;\n}\n.add-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n  border-color: #d1d5db;\n  color: #9ca3af;\n}\n.row-out-of-stock[_ngcontent-%COMP%] {\n  opacity: 0.55;\n  cursor: default;\n}\n.row-out-of-stock[_ngcontent-%COMP%]:hover {\n  background: transparent !important;\n}\n.pr-stock[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 700;\n  padding: 0.1rem 0.4rem;\n  border-radius: 10px;\n  white-space: nowrap;\n}\n.pr-stock.s-low[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.pr-stock.s-out[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.scroll-hint[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.5rem;\n  font-size: 0.72rem;\n  color: #9ca3af;\n  border-top: 1px solid #f3f4f6;\n  letter-spacing: 0.01em;\n}\n.no-results[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  text-align: center;\n  color: #9ca3af;\n  font-size: 0.84rem;\n}\n.bill-items-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.bi-header[_ngcontent-%COMP%] {\n  padding: 0.65rem 0.875rem;\n  border-bottom: 1px solid #f3f4f6;\n}\n.bi-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #111827;\n}\n.bi-header[_ngcontent-%COMP%]   .bi-count[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-weight: 400;\n}\n.bi-empty[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n  color: #9ca3af;\n}\n.bi-empty[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  display: block;\n}\n.bi-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.4rem 0 0;\n  font-size: 0.84rem;\n}\n.bill-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.bill-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.82rem;\n}\n.bill-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  padding: 0.5rem 0.65rem;\n  text-align: left;\n  font-weight: 600;\n  color: #6b7280;\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.025em;\n  border-bottom: 1px solid #e5e7eb;\n  white-space: nowrap;\n}\n.bill-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.55rem 0.65rem;\n  border-bottom: 1px solid #f3f4f6;\n  vertical-align: middle;\n}\n.bill-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.bill-table[_ngcontent-%COMP%]   .tc[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.bill-table[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.gst-pct[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.75rem;\n  white-space: nowrap;\n}\n.gst-amt[_ngcontent-%COMP%] {\n  color: #374151;\n  font-size: 0.8rem;\n  white-space: nowrap;\n}\n.td-n[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 0.75rem;\n}\n.td-prod[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  min-width: 160px;\n}\n.td-ico[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.td-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #111827;\n}\n.td-sku[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: #9ca3af;\n}\n.td-total[_ngcontent-%COMP%] {\n  font-weight: 600;\n  white-space: nowrap;\n}\n.qty-ctrl[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.15rem;\n}\n.qty-ctrl[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  border: 1px solid #d1d5db;\n  border-radius: 4px;\n  background: #f9fafb;\n  cursor: pointer;\n  font-size: 0.95rem;\n  line-height: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.qty-ctrl[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n}\n.qty-in[_ngcontent-%COMP%] {\n  width: 38px;\n  text-align: center;\n  border: 1px solid #d1d5db;\n  border-radius: 4px;\n  padding: 0.15rem 0.2rem;\n  font-size: 0.82rem;\n}\n.qty-in[_ngcontent-%COMP%]:focus {\n  border-color: #2874F0;\n  outline: none;\n}\n.price-in[_ngcontent-%COMP%], \n.disc-in[_ngcontent-%COMP%] {\n  width: 85px;\n  border: 1px solid #d1d5db;\n  border-radius: 4px;\n  padding: 0.22rem 0.35rem;\n  font-size: 0.82rem;\n  display: block;\n}\n.price-in[_ngcontent-%COMP%]:focus, \n.disc-in[_ngcontent-%COMP%]:focus {\n  border-color: #2874F0;\n  outline: none;\n}\n.negotiated[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.67rem;\n  color: #f59e0b;\n  margin-top: 0.1rem;\n}\n.remove-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 0.8rem;\n  color: #d1d5db;\n  transition: color 0.15s;\n}\n.remove-btn[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n}\n.pos-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.875rem;\n  position: sticky;\n  top: 1rem;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 0.875rem;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #111827;\n  margin-bottom: 0.75rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.field-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 0.45rem;\n}\n.field-wrap.last[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.phone-box[_ngcontent-%COMP%] {\n  position: relative;\n}\n.phone-box[_ngcontent-%COMP%]   .phone-digits[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.6rem;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 0.68rem;\n  color: #9ca3af;\n  pointer-events: none;\n}\n.field[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  border: 1.5px solid #d1d5db;\n  border-radius: 8px;\n  padding: 0.48rem 0.7rem;\n  font-size: 0.84rem;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.field[_ngcontent-%COMP%]:focus {\n  border-color: #2874F0;\n}\n.field-error[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #ef4444;\n  margin-top: 0.2rem;\n  padding-left: 0.1rem;\n}\n.phone-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 2px);\n  left: 0;\n  right: 0;\n  background: #fff;\n  border: 1.5px solid #2874F0;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  z-index: 50;\n  overflow: hidden;\n}\n.pd-item[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.7rem;\n  cursor: pointer;\n  border-bottom: 1px solid #f3f4f6;\n  transition: background 0.1s;\n}\n.pd-item[_ngcontent-%COMP%]:hover {\n  background: #f0f7ff;\n}\n.pd-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.pd-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.pd-phone[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.82rem;\n  color: #2874F0;\n}\n.pd-name[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #111827;\n}\n.pd-addr[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #9ca3af;\n  margin-top: 0.15rem;\n}\n.gst-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  cursor: pointer;\n  font-weight: 400;\n  font-size: 0.75rem;\n  color: #4b5563;\n}\n.gst-toggle[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  display: none;\n}\n.gst-toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .gt-track[_ngcontent-%COMP%] {\n  background: #2874F0;\n}\n.gst-toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .gt-track[_ngcontent-%COMP%]::after {\n  transform: translateX(13px);\n}\n.gt-track[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 15px;\n  background: #d1d5db;\n  border-radius: 8px;\n  position: relative;\n  transition: background 0.2s;\n  flex-shrink: 0;\n}\n.gt-track[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 11px;\n  height: 11px;\n  background: #fff;\n  border-radius: 50%;\n  top: 2px;\n  left: 2px;\n  transition: transform 0.2s;\n}\n.gt-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.sum-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.84rem;\n  color: #4b5563;\n  margin-bottom: 0.35rem;\n}\n.sum-row.disc[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: #16a34a;\n}\n.sum-row.gst-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: #6b7280;\n}\n.gst-note[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: #9ca3af;\n}\n.sum-divider[_ngcontent-%COMP%] {\n  border-top: 1px dashed #e5e7eb;\n  margin: 0.5rem 0;\n}\n.sum-total[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-weight: 700;\n  font-size: 1.1rem;\n  color: #111827;\n}\n.pay-need[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: #9ca3af;\n  text-align: center;\n  margin-bottom: 0.65rem;\n  background: #fefce8;\n  border-radius: 6px;\n  padding: 0.4rem 0.6rem;\n}\n.pay-methods[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 0.4rem;\n}\n.pay-methods.locked[_ngcontent-%COMP%]   .pay-btn[_ngcontent-%COMP%] {\n  opacity: 0.4;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.pay-btn[_ngcontent-%COMP%] {\n  padding: 0.7rem 0.4rem;\n  border: 2px solid #e5e7eb;\n  border-radius: 10px;\n  background: #f9fafb;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #374151;\n  transition: all 0.15s;\n}\n.pay-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n.pay-btn.cash[_ngcontent-%COMP%]:hover {\n  border-color: #16a34a;\n  color: #16a34a;\n  background: #f0fdf4;\n}\n.pay-btn.upi[_ngcontent-%COMP%]:hover {\n  border-color: #7c3aed;\n  color: #7c3aed;\n  background: #faf5ff;\n}\n.pay-btn.card[_ngcontent-%COMP%]:hover {\n  border-color: #2874F0;\n  color: #2874F0;\n  background: #eff6ff;\n}\n.pay-confirm-box[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.pc-amount[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 0.15rem;\n}\n.pc-method[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #4b5563;\n  margin-bottom: 0.5rem;\n}\n.pc-note[_ngcontent-%COMP%] {\n  font-size: 0.77rem;\n  color: #9ca3af;\n  margin-bottom: 0.875rem;\n}\n.upi-init[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.upi-amount[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #7c3aed;\n  margin-bottom: 0.5rem;\n}\n.upi-instruction[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #4b5563;\n  line-height: 1.6;\n  background: #faf5ff;\n  border-radius: 8px;\n  padding: 0.6rem 0.75rem;\n  margin-bottom: 0.65rem;\n  text-align: left;\n}\n.upi-instruction[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 0.2rem;\n}\n.upi-apps[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  font-size: 1.4rem;\n  margin-bottom: 0.75rem;\n}\n.upi-apps[_ngcontent-%COMP%]   .upi-apps-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #9ca3af;\n}\n.upi-divider[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.75rem;\n  color: #d1d5db;\n  margin: 0.5rem 0;\n}\n.upi-waiting[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.upi-pulse-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 60px;\n  height: 60px;\n  margin: 0 auto 0.75rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.upi-pulse[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  background: rgba(124, 58, 237, 0.15);\n  animation: _ngcontent-%COMP%_pulse 1.5s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    transform: scale(1);\n    opacity: 0.8;\n  }\n  50% {\n    transform: scale(1.3);\n    opacity: 0.3;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 0.8;\n  }\n}\n.upi-pulse-icon[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  position: relative;\n  z-index: 1;\n}\n.upi-wait-amount[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #7c3aed;\n  margin-bottom: 0.15rem;\n}\n.upi-wait-status[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.25rem;\n}\n.upi-countdown[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #9ca3af;\n  margin-bottom: 0.5rem;\n  font-variant-numeric: tabular-nums;\n}\n.upi-wait-note[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #6b7280;\n  background: #f9fafb;\n  border-radius: 6px;\n  padding: 0.4rem 0.6rem;\n  margin-bottom: 0.65rem;\n  line-height: 1.5;\n}\n.upi-wait-note[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.upi-received[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1rem 0;\n}\n.upi-received-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  animation: _ngcontent-%COMP%_pop 0.4s ease-out;\n}\n.upi-received-text[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #16a34a;\n  margin: 0.4rem 0 0.2rem;\n}\n.upi-received-sub[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #9ca3af;\n}\n@keyframes _ngcontent-%COMP%_pop {\n  0% {\n    transform: scale(0.5);\n  }\n  70% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.btn-confirm[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.65rem;\n  background: #16a34a;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  margin-bottom: 0.4rem;\n  transition: background 0.15s;\n}\n.btn-confirm[_ngcontent-%COMP%]:hover {\n  background: #15803d;\n}\n.btn-confirm-sm[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.5rem;\n  background: #f3f4f6;\n  color: #374151;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  cursor: pointer;\n  margin-bottom: 0.4rem;\n}\n.btn-confirm-sm[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n}\n.btn-upi-wait[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.65rem;\n  background: #7c3aed;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  margin-bottom: 0.4rem;\n  transition: background 0.15s;\n}\n.btn-upi-wait[_ngcontent-%COMP%]:hover {\n  background: #6d28d9;\n}\n.btn-upi-received[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.65rem;\n  background: #16a34a;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  margin-bottom: 0.4rem;\n}\n.btn-upi-received[_ngcontent-%COMP%]:hover {\n  background: #15803d;\n}\n.btn-cancel-upi[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.4rem;\n  background: none;\n  border: none;\n  color: #ef4444;\n  font-size: 0.78rem;\n  cursor: pointer;\n}\n.btn-cancel-upi[_ngcontent-%COMP%]:hover {\n  color: #dc2626;\n}\n.btn-back[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.35rem;\n  background: none;\n  border: none;\n  color: #6b7280;\n  font-size: 0.78rem;\n  cursor: pointer;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  color: #111827;\n}\n.history-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 0.875rem;\n  flex-wrap: wrap;\n}\n.history-search[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  border: 1.5px solid #d1d5db;\n  border-radius: 8px;\n  padding: 0.45rem 0.7rem;\n  font-size: 0.875rem;\n  outline: none;\n}\n.history-search[_ngcontent-%COMP%]:focus {\n  border-color: #2874F0;\n}\n.history-meta[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #9ca3af;\n  white-space: nowrap;\n}\n.history-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n  color: #9ca3af;\n}\n.history-empty[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  display: block;\n}\n.history-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.history-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.h-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n  padding: 0.65rem 0.875rem;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.12s;\n  flex-wrap: wrap;\n}\n.h-row[_ngcontent-%COMP%]:hover {\n  border-color: #2874F0;\n  box-shadow: 0 2px 8px rgba(40, 116, 240, 0.08);\n}\n.h-col-id[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 130px;\n}\n.h-id[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.82rem;\n  color: #2874F0;\n}\n.h-date[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #9ca3af;\n}\n.h-col-cust[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n.h-name[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  font-weight: 500;\n  color: #111827;\n}\n.h-phone[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #9ca3af;\n}\n.h-col-items[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #6b7280;\n  white-space: nowrap;\n}\n.h-col-amount[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.9rem;\n  color: #111827;\n  white-space: nowrap;\n}\n.h-pay-badge[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.6rem;\n  border-radius: 20px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.h-pay-badge.cash[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.h-pay-badge.upi[_ngcontent-%COMP%] {\n  background: #faf5ff;\n  color: #7c3aed;\n}\n.h-pay-badge.card[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #2874F0;\n}\n.reprint-btn[_ngcontent-%COMP%] {\n  padding: 0.28rem 0.6rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  background: #f9fafb;\n  font-size: 0.78rem;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.reprint-btn[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n}\n.no-match[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1.5rem;\n  color: #9ca3af;\n  font-size: 0.875rem;\n}\n.bd-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 400;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n}\n.bd-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  width: 100%;\n  max-width: 600px;\n  max-height: 85vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.bd-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 1rem 1.25rem;\n  border-bottom: 1px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.bd-bill-id[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1rem;\n  color: #2874F0;\n}\n.bd-bill-date[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #9ca3af;\n  margin-top: 0.15rem;\n}\n.bd-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.1rem;\n  cursor: pointer;\n  color: #9ca3af;\n  line-height: 1;\n}\n.bd-close[_ngcontent-%COMP%]:hover {\n  color: #111827;\n}\n.bd-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1rem 1.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.bd-sec-title[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #9ca3af;\n  margin-bottom: 0.5rem;\n}\n.bd-customer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.bd-customer[_ngcontent-%COMP%]   .bd-cust-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1rem;\n  color: #111827;\n}\n.bd-customer[_ngcontent-%COMP%]   .bd-cust-phone[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  color: #4b5563;\n}\n.bd-customer[_ngcontent-%COMP%]   .bd-cust-email[_ngcontent-%COMP%], \n.bd-customer[_ngcontent-%COMP%]   .bd-cust-addr[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6b7280;\n}\n.bd-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.82rem;\n}\n.bd-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  padding: 0.45rem 0.6rem;\n  text-align: left;\n  font-weight: 600;\n  color: #6b7280;\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  border-bottom: 1px solid #e5e7eb;\n}\n.bd-table[_ngcontent-%COMP%]   th.tc[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.bd-table[_ngcontent-%COMP%]   th.tr[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.bd-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.6rem;\n  border-bottom: 1px solid #f3f4f6;\n  color: #111827;\n}\n.bd-table[_ngcontent-%COMP%]   td.tc[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.bd-table[_ngcontent-%COMP%]   td.tr[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.bd-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.bd-table[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: #9ca3af;\n}\n.bd-table[_ngcontent-%COMP%]   .td-sku[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: #9ca3af;\n}\n.bd-table[_ngcontent-%COMP%]   .td-total[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.bd-summary-section[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border-radius: 10px;\n  padding: 0.875rem;\n}\n.bd-sum-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.84rem;\n  color: #4b5563;\n  margin-bottom: 0.35rem;\n}\n.bd-sum-row.green[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: #16a34a;\n}\n.bd-sum-total[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-weight: 700;\n  font-size: 1.05rem;\n  color: #111827;\n  padding-top: 0.5rem;\n  border-top: 1px solid #e5e7eb;\n  margin-top: 0.25rem;\n}\n.bd-pay-method[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #16a34a;\n  margin-top: 0.5rem;\n  background: #f0fdf4;\n  border-radius: 6px;\n  padding: 0.3rem 0.5rem;\n}\n.bd-foot[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  padding: 0.875rem 1.25rem;\n  border-top: 1px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.bd-btn-print[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.55rem;\n  background: #2874F0;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.84rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.bd-btn-print[_ngcontent-%COMP%]:hover {\n  background: #1d5ed4;\n}\n.bd-btn-close[_ngcontent-%COMP%] {\n  padding: 0.55rem 1.25rem;\n  background: #f3f4f6;\n  color: #374151;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.84rem;\n  font-weight: 500;\n  cursor: pointer;\n}\n.bd-btn-close[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n}\n.print-receipt[_ngcontent-%COMP%] {\n  display: none;\n}\n.receipt[_ngcontent-%COMP%] {\n  font-family:\n    "Courier New",\n    Courier,\n    monospace;\n  font-size: 12px;\n  line-height: 1.5;\n  color: #000;\n  padding: 4mm;\n  box-sizing: border-box;\n}\n.receipt[_ngcontent-%COMP%]   .r-shop[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 18px;\n  font-weight: bold;\n  letter-spacing: 1px;\n}\n.receipt[_ngcontent-%COMP%]   .r-sub[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 10px;\n}\n.receipt[_ngcontent-%COMP%]   .r-contact[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 10px;\n  margin-top: 1mm;\n}\n.receipt[_ngcontent-%COMP%]   .r-address[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 10px;\n}\n.receipt[_ngcontent-%COMP%]   .r-gstin[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 10px;\n  font-weight: bold;\n  margin-bottom: 1mm;\n}\n.receipt[_ngcontent-%COMP%]   .r-line[_ngcontent-%COMP%] {\n  color: #555;\n  font-size: 10px;\n  margin: 2mm 0;\n}\n.receipt[_ngcontent-%COMP%]   .r-block[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: 1mm 0;\n  font-size: 11px;\n}\n.receipt[_ngcontent-%COMP%]   .r-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 11px;\n  margin: 1mm 0;\n}\n.receipt[_ngcontent-%COMP%]   .r-table[_ngcontent-%COMP%]   .r-th-item[_ngcontent-%COMP%] {\n  text-align: left;\n  border-bottom: 1px solid #000;\n  padding: 1mm 0;\n  width: 55%;\n}\n.receipt[_ngcontent-%COMP%]   .r-table[_ngcontent-%COMP%]   .r-th-num[_ngcontent-%COMP%] {\n  text-align: right;\n  border-bottom: 1px solid #000;\n  padding: 1mm 1mm;\n}\n.receipt[_ngcontent-%COMP%]   .r-table[_ngcontent-%COMP%]   .r-td-item[_ngcontent-%COMP%] {\n  padding: 1mm 0;\n  vertical-align: top;\n}\n.receipt[_ngcontent-%COMP%]   .r-table[_ngcontent-%COMP%]   .r-td-num[_ngcontent-%COMP%] {\n  text-align: right;\n  padding: 1mm 1mm;\n  vertical-align: top;\n  white-space: nowrap;\n}\n.receipt[_ngcontent-%COMP%]   .r-sku[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: #555;\n}\n.receipt[_ngcontent-%COMP%]   .r-disc[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: #555;\n}\n.receipt[_ngcontent-%COMP%]   .r-sum-rows[_ngcontent-%COMP%] {\n  margin: 1mm 0;\n}\n.receipt[_ngcontent-%COMP%]   .r-sum-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 11px;\n  margin: 0.5mm 0;\n}\n.receipt[_ngcontent-%COMP%]   .r-total[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 16px;\n  font-weight: bold;\n  margin: 1mm 0;\n}\n.receipt[_ngcontent-%COMP%]   .r-pay[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bold;\n  font-size: 11px;\n  margin: 1mm 0;\n}\n.receipt[_ngcontent-%COMP%]   .r-thanks[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 13px;\n  font-weight: bold;\n  margin: 2mm 0 1mm;\n}\n.receipt[_ngcontent-%COMP%]   .r-note[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 9px;\n  color: #555;\n}\n@media print {\n  .billing-page[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .bd-overlay[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .print-receipt[_ngcontent-%COMP%] {\n    display: block !important;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n  }\n  @page {\n    size: 80mm auto;\n    margin: 3mm;\n  }\n}\n@media (max-width: 900px) {\n  .pos-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .pos-right[_ngcontent-%COMP%] {\n    position: static;\n  }\n}\n/*# sourceMappingURL=billing.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BillingComponent, { className: "BillingComponent", filePath: "src\\app\\pages\\billing\\billing.component.ts", lineNumber: 45 });
})();
export {
  BillingComponent
};
//# sourceMappingURL=chunk-PMROCKLJ.js.map
