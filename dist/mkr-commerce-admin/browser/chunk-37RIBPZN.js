import {
  AppBtnComponent,
  AppSelectComponent
} from "./chunk-BGHSUHJG.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-OOFYAVIO.js";
import {
  AuthService
} from "./chunk-WXBPIA4S.js";
import {
  PRODUCT_ENDPOINTS
} from "./chunk-O3NE7GYO.js";
import {
  HttpClient,
  Router
} from "./chunk-CADB6C7J.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-MBTJ2QPL.js";
import {
  computed,
  signal,
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
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-PEVOVQSE.js";

// src/app/pages/products/products.component.ts
var _c0 = () => [1, 2, 3, 4, 5];
function ProductsComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.totalCount(), " products total");
  }
}
function ProductsComponent_app_btn_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-btn", 26);
    \u0275\u0275listener("clicked", function ProductsComponent_app_btn_7_Template_app_btn_clicked_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.router.navigate(["/products/new"]));
    });
    \u0275\u0275text(1, "New Product");
    \u0275\u0275elementEnd();
  }
}
function ProductsComponent_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 29);
  }
}
function ProductsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, ProductsComponent_div_14_div_1_Template, 1, 0, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function ProductsComponent_ng_container_15_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275listener("click", function ProductsComponent_ng_container_15_div_1_span_4_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const cat_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r0.toggleCat(cat_r4.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.expandedCats.has(cat_r4.id) ? "expand_more" : "chevron_right", " ");
  }
}
function ProductsComponent_ng_container_15_div_1_div_5_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function ProductsComponent_ng_container_15_div_1_div_5_button_1_Template_button_click_0_listener() {
      const child_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.selectCategory(child_r7.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("active", ctx_r0.selectedCategoryId === child_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", child_r7.name, " ");
  }
}
function ProductsComponent_ng_container_15_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275template(1, ProductsComponent_ng_container_15_div_1_div_5_button_1_Template, 2, 3, "button", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", cat_r4.children);
  }
}
function ProductsComponent_ng_container_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "button", 32);
    \u0275\u0275listener("click", function ProductsComponent_ng_container_15_div_1_Template_button_click_1_listener() {
      const cat_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectCategory(cat_r4.id));
    });
    \u0275\u0275elementStart(2, "span", 33);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ProductsComponent_ng_container_15_div_1_span_4_Template, 2, 1, "span", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ProductsComponent_ng_container_15_div_1_div_5_Template, 2, 1, "div", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r0.selectedCategoryId === cat_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r4.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cat_r4.children.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cat_r4.children.length && ctx_r0.expandedCats.has(cat_r4.id));
  }
}
function ProductsComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ProductsComponent_ng_container_15_div_1_Template, 6, 5, "div", 30);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.categories());
  }
}
function ProductsComponent_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function ProductsComponent_button_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.searchQuery = "";
      return \u0275\u0275resetView(ctx_r0.onFilterChange());
    });
    \u0275\u0275elementStart(1, "span", 41);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function ProductsComponent_app_btn_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-btn", 42);
    \u0275\u0275listener("clicked", function ProductsComponent_app_btn_25_Template_app_btn_clicked_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clearFilters());
    });
    \u0275\u0275text(1, "Clear");
    \u0275\u0275elementEnd();
  }
}
function ProductsComponent_ng_container_26_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275element(1, "div", 46);
    \u0275\u0275elementStart(2, "div", 47);
    \u0275\u0275element(3, "div", 48)(4, "div", 49);
    \u0275\u0275elementEnd()();
  }
}
function ProductsComponent_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 43);
    \u0275\u0275template(2, ProductsComponent_ng_container_26_div_2_Template, 5, 0, "div", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.skeletonRows);
  }
}
function ProductsComponent_div_27_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275text(1, "Try adjusting your filters");
    \u0275\u0275elementEnd();
  }
}
function ProductsComponent_div_27_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275text(1, "Get started by adding your first product");
    \u0275\u0275elementEnd();
  }
}
function ProductsComponent_div_27_app_btn_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-btn", 26);
    \u0275\u0275listener("clicked", function ProductsComponent_div_27_app_btn_8_Template_app_btn_clicked_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.router.navigate(["/products/new"]));
    });
    \u0275\u0275text(1, " Add Product ");
    \u0275\u0275elementEnd();
  }
}
function ProductsComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 51)(2, "span", 52);
    \u0275\u0275text(3, "inventory_2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 53);
    \u0275\u0275text(5, "No products found");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ProductsComponent_div_27_div_6_Template, 2, 0, "div", 54)(7, ProductsComponent_div_27_div_7_Template, 2, 0, "div", 54)(8, ProductsComponent_div_27_app_btn_8_Template, 2, 0, "app-btn", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r0.hasFilters);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.hasFilters && ctx_r0.canCreate());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.hasFilters && ctx_r0.canCreate());
  }
}
function ProductsComponent_div_28_tr_19_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275element(1, "img", 71);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", p_r12.primaryImageUrl, \u0275\u0275sanitizeUrl)("alt", p_r12.name);
  }
}
function ProductsComponent_div_28_tr_19_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "span", 73);
    \u0275\u0275text(2, "inventory_2");
    \u0275\u0275elementEnd()();
  }
}
function ProductsComponent_div_28_tr_19_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r12.brandName);
  }
}
function ProductsComponent_div_28_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 59);
    \u0275\u0275listener("click", function ProductsComponent_div_28_tr_19_Template_tr_click_0_listener() {
      const p_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openDetail(p_r12.id));
    });
    \u0275\u0275elementStart(1, "td", 60);
    \u0275\u0275template(2, ProductsComponent_div_28_tr_19_div_2_Template, 2, 2, "div", 61)(3, ProductsComponent_div_28_tr_19_div_3_Template, 3, 0, "div", 62);
    \u0275\u0275elementStart(4, "div", 63)(5, "div", 64);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ProductsComponent_div_28_tr_19_div_7_Template, 2, 1, "div", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "span", 66);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span", 67);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td")(19, "span", 68);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 69);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r12 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r12.primaryImageUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !p_r12.primaryImageUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r12.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r12.brandName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r12.sku);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r12.categoryName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.inr(p_r12.priceRetail));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.stockClass(p_r12.stockQty));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.stockLabel(p_r12.stockQty));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.statusClass(p_r12.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r12.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(p_r12.createdAt));
  }
}
function ProductsComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "table", 57)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "SKU");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Created");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275template(19, ProductsComponent_div_28_tr_19_Template, 23, 12, "tr", 58);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", ctx_r0.products());
  }
}
function ProductsComponent_div_29_ng_container_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 81);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function ProductsComponent_div_29_ng_container_4_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 82);
    \u0275\u0275listener("click", function ProductsComponent_div_29_ng_container_4_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const pg_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToPage(pg_r15));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pg_r15 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", pg_r15 === ctx_r0.currentPage());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(pg_r15 + 1);
  }
}
function ProductsComponent_div_29_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ProductsComponent_div_29_ng_container_4_span_1_Template, 2, 0, "span", 79)(2, ProductsComponent_div_29_ng_container_4_button_2_Template, 2, 3, "button", 80);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const pg_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", pg_r15 === -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", pg_r15 !== -1);
  }
}
function ProductsComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75)(1, "button", 76);
    \u0275\u0275listener("click", function ProductsComponent_div_29_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToPage(ctx_r0.currentPage() - 1));
    });
    \u0275\u0275elementStart(2, "span", 77);
    \u0275\u0275text(3, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, ProductsComponent_div_29_ng_container_4_Template, 3, 2, "ng-container", 78);
    \u0275\u0275elementStart(5, "button", 76);
    \u0275\u0275listener("click", function ProductsComponent_div_29_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToPage(ctx_r0.currentPage() + 1));
    });
    \u0275\u0275elementStart(6, "span", 77);
    \u0275\u0275text(7, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.currentPage() === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.pageNumbers());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.currentPage() === ctx_r0.totalPages() - 1);
  }
}
var ProductsComponent = class _ProductsComponent {
  http;
  router;
  auth;
  EP = PRODUCT_ENDPOINTS;
  // ── List data ─────────────────────────────────────────────────────────────
  categories = signal([]);
  brands = signal([]);
  products = signal([]);
  loading = signal(true);
  catLoading = signal(true);
  // ── Pagination ────────────────────────────────────────────────────────────
  totalCount = signal(0);
  totalPages = signal(0);
  currentPage = signal(0);
  skeletonRows = Array(8);
  // ── Filters ───────────────────────────────────────────────────────────────
  selectedCategoryId = "";
  selectedBrandId = "";
  selectedStatus = "";
  searchQuery = "";
  // ── Category tree nav ─────────────────────────────────────────────────────
  expandedCats = /* @__PURE__ */ new Set();
  // ── Computed ──────────────────────────────────────────────────────────────
  canCreate = computed(() => {
    const r = this.auth.currentUser()?.role;
    return r === "SUPER_ADMIN" || r === "ADMIN" || r === "INVENTORY";
  });
  pageNumbers = computed(() => {
    const total = this.totalPages(), cur = this.currentPage();
    if (total <= 7)
      return Array.from({ length: total }, (_, i) => i);
    const pages = [0];
    if (cur > 2)
      pages.push(-1);
    for (let i = Math.max(1, cur - 1); i <= Math.min(total - 2, cur + 1); i++)
      pages.push(i);
    if (cur < total - 3)
      pages.push(-1);
    pages.push(total - 1);
    return pages;
  });
  get hasFilters() {
    return !!(this.searchQuery || this.selectedCategoryId || this.selectedBrandId || this.selectedStatus);
  }
  get brandFilterOpts() {
    return this.brands().map((b) => ({ value: b.id, label: b.name }));
  }
  get statusFilterOpts() {
    return [
      { value: "ACTIVE", label: "Active" },
      { value: "DRAFT", label: "Draft" },
      { value: "INACTIVE", label: "Inactive" },
      { value: "DISCONTINUED", label: "Discontinued" }
    ];
  }
  constructor(http, router, auth) {
    this.http = http;
    this.router = router;
    this.auth = auth;
  }
  ngOnInit() {
    this.loadCategories();
    this.loadBrands();
    this.loadProducts(0);
  }
  // ── Data loading ──────────────────────────────────────────────────────────
  loadCategories() {
    this.catLoading.set(true);
    this.http.get(this.EP.CATEGORIES_TREE).subscribe({
      next: (res) => {
        this.categories.set(res.data ?? []);
        this.catLoading.set(false);
      },
      error: () => this.catLoading.set(false)
    });
  }
  loadBrands() {
    this.http.get(this.EP.BRANDS + "?active=true&size=200").subscribe({
      next: (res) => this.brands.set(res.data?.content ?? [])
    });
  }
  loadProducts(page = 0) {
    this.loading.set(true);
    const params = { page: String(page), size: "20" };
    if (this.selectedCategoryId)
      params["categoryId"] = this.selectedCategoryId;
    if (this.selectedBrandId)
      params["brandId"] = this.selectedBrandId;
    if (this.selectedStatus)
      params["status"] = this.selectedStatus;
    if (this.searchQuery.trim())
      params["search"] = this.searchQuery.trim();
    this.http.get(this.EP.BASE, { params }).subscribe({
      next: (res) => {
        this.products.set(res.data?.content ?? []);
        this.totalCount.set(res.data?.totalElements ?? 0);
        this.totalPages.set(res.data?.totalPages ?? 0);
        this.currentPage.set(res.data?.number ?? 0);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  onFilterChange() {
    this.loadProducts(0);
  }
  clearFilters() {
    this.searchQuery = "";
    this.selectedCategoryId = "";
    this.selectedBrandId = "";
    this.selectedStatus = "";
    this.loadProducts(0);
  }
  goToPage(page) {
    if (page >= 0 && page < this.totalPages())
      this.loadProducts(page);
  }
  // ── Category tree ─────────────────────────────────────────────────────────
  toggleCat(id) {
    this.expandedCats.has(id) ? this.expandedCats.delete(id) : this.expandedCats.add(id);
  }
  selectCategory(id) {
    this.selectedCategoryId = this.selectedCategoryId === id ? "" : id;
    this.loadProducts(0);
  }
  // ── Actions ───────────────────────────────────────────────────────────────
  openDetail(id) {
    this.router.navigate(["/products", id]);
  }
  // ── Helpers ───────────────────────────────────────────────────────────────
  statusClass(s) {
    return { ACTIVE: "st-active", DRAFT: "st-draft", INACTIVE: "st-inactive", DISCONTINUED: "st-discontinued" }[s] ?? "";
  }
  stockClass(qty) {
    if (qty === 0)
      return "s-out";
    if (qty <= 5)
      return "s-low";
    return "s-ok";
  }
  stockLabel(qty) {
    if (qty === 0)
      return "Out";
    if (qty <= 5)
      return `${qty} left`;
    return `${qty} in stock`;
  }
  inr(n) {
    if (!n)
      return "\u2014";
    return "\u20B9" + Number(n).toLocaleString("en-IN");
  }
  formatDate(iso) {
    return new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  }
  static \u0275fac = function ProductsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductsComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductsComponent, selectors: [["app-products"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 30, vars: 17, consts: [[1, "page", "prod-page-layout"], [1, "page-hd"], [1, "page-hd-left"], [1, "page-hd-title"], ["class", "page-hd-sub", 4, "ngIf"], [1, "page-hd-right"], ["variant", "primary", "size", "sm", "icon", "add", 3, "clicked", 4, "ngIf"], [1, "prod-body"], [1, "prod-sidebar"], [1, "ps-title"], [1, "ps-all", 3, "click"], ["class", "prod-skeleton", 4, "ngIf"], [4, "ngIf"], [1, "prod-main"], [1, "filter-bar"], [1, "search-bar"], [1, "sb-icon", "icon", "icon-sm"], ["type", "text", "placeholder", "Search by name or SKU\u2026", 3, "ngModelChange", "ngModel"], ["class", "sb-clear", 3, "click", 4, "ngIf"], ["placeholder", "All Brands", 3, "valueChange", "options", "value"], ["placeholder", "All Status", 3, "valueChange", "options", "value"], ["variant", "ghost", "size", "sm", 3, "clicked", 4, "ngIf"], ["class", "empty", 4, "ngIf"], ["class", "tbl-wrap", 4, "ngIf"], ["class", "pgn", 4, "ngIf"], [1, "page-hd-sub"], ["variant", "primary", "size", "sm", "icon", "add", 3, "clicked"], [1, "prod-skeleton"], ["class", "sk", "style", "height:14px;border-radius:4px", 4, "ngFor", "ngForOf"], [1, "sk", 2, "height", "14px", "border-radius", "4px"], ["class", "ps-cat", 4, "ngFor", "ngForOf"], [1, "ps-cat"], [1, "psc-row", 3, "click"], [1, "psc-name"], ["class", "psc-toggle icon icon-xs", 3, "click", 4, "ngIf"], ["class", "psc-children", 4, "ngIf"], [1, "psc-toggle", "icon", "icon-xs", 3, "click"], [1, "psc-children"], ["class", "psc-child", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "psc-child", 3, "click"], [1, "sb-clear", 3, "click"], [1, "icon", "icon-xs"], ["variant", "ghost", "size", "sm", 3, "clicked"], [1, "psk-list"], ["class", "psk-row", 4, "ngFor", "ngForOf"], [1, "psk-row"], [1, "sk", "psk-img"], [1, "psk-lines"], [1, "sk", 2, "height", "14px", "width", "60%"], [1, "sk", 2, "height", "11px", "width", "40%", "margin-top", "6px"], [1, "empty"], [1, "empty-icon"], [1, "icon", "icon-xl", "icon-muted"], [1, "empty-title"], ["class", "empty-sub", 4, "ngIf"], [1, "empty-sub"], [1, "tbl-wrap"], [1, "tbl"], ["class", "tbl-row", 3, "click", 4, "ngFor", "ngForOf"], [1, "tbl-row", 3, "click"], [1, "pt-name"], ["class", "ptn-img", 4, "ngIf"], ["class", "ptn-placeholder", 4, "ngIf"], [1, "ptn-info"], [1, "ptn-title"], ["class", "ptn-brand", 4, "ngIf"], [1, "sku-badge"], [1, "stock-badge", 3, "ngClass"], [1, "status-badge", 3, "ngClass"], [1, "pt-date"], [1, "ptn-img"], [3, "src", "alt"], [1, "ptn-placeholder"], [1, "icon", "icon-sm", "icon-muted"], [1, "ptn-brand"], [1, "pgn"], [1, "pgn-btn", 3, "click", "disabled"], [1, "icon", "icon-sm"], [4, "ngFor", "ngForOf"], ["class", "pgn-ellipsis", 4, "ngIf"], ["class", "pgn-btn", 3, "active", "click", 4, "ngIf"], [1, "pgn-ellipsis"], [1, "pgn-btn", 3, "click"]], template: function ProductsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275text(4, "Products");
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, ProductsComponent_div_5_Template, 2, 1, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 5);
      \u0275\u0275template(7, ProductsComponent_app_btn_7_Template, 2, 0, "app-btn", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "div", 9);
      \u0275\u0275text(11, "Categories");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 10);
      \u0275\u0275listener("click", function ProductsComponent_Template_button_click_12_listener() {
        return ctx.selectCategory("");
      });
      \u0275\u0275text(13, " All Products ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(14, ProductsComponent_div_14_Template, 2, 2, "div", 11)(15, ProductsComponent_ng_container_15_Template, 2, 1, "ng-container", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 13)(17, "div", 14)(18, "div", 15)(19, "span", 16);
      \u0275\u0275text(20, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "input", 17);
      \u0275\u0275twoWayListener("ngModelChange", function ProductsComponent_Template_input_ngModelChange_21_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ProductsComponent_Template_input_ngModelChange_21_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(22, ProductsComponent_button_22_Template, 3, 0, "button", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "app-select", 19);
      \u0275\u0275listener("valueChange", function ProductsComponent_Template_app_select_valueChange_23_listener($event) {
        ctx.selectedBrandId = $event;
        return ctx.onFilterChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "app-select", 20);
      \u0275\u0275listener("valueChange", function ProductsComponent_Template_app_select_valueChange_24_listener($event) {
        ctx.selectedStatus = $event;
        return ctx.onFilterChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(25, ProductsComponent_app_btn_25_Template, 2, 0, "app-btn", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275template(26, ProductsComponent_ng_container_26_Template, 3, 1, "ng-container", 12)(27, ProductsComponent_div_27_Template, 9, 3, "div", 22)(28, ProductsComponent_div_28_Template, 20, 1, "div", 23)(29, ProductsComponent_div_29_Template, 8, 3, "div", 24);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", !ctx.loading());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.canCreate());
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", !ctx.selectedCategoryId);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.catLoading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.catLoading());
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.searchQuery);
      \u0275\u0275advance();
      \u0275\u0275property("options", ctx.brandFilterOpts)("value", ctx.selectedBrandId);
      \u0275\u0275advance();
      \u0275\u0275property("options", ctx.statusFilterOpts)("value", ctx.selectedStatus);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasFilters);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.products().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.products().length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.totalPages() > 1);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, AppSelectComponent, AppBtnComponent], styles: ["\n\n.prod-page-layout[_ngcontent-%COMP%] {\n  overflow: hidden;\n  gap: 12px;\n}\n.prod-body[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex: 1;\n  min-height: 0;\n  overflow: hidden;\n}\n.prod-sidebar[_ngcontent-%COMP%] {\n  width: 200px;\n  flex-shrink: 0;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 12px 8px;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.prod-sidebar[_ngcontent-%COMP%]   .ps-title[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--t3);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  padding: 4px 8px 8px;\n}\n.prod-sidebar[_ngcontent-%COMP%]   .ps-all[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n  background: none;\n  border: none;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--t2);\n  cursor: pointer;\n}\n.prod-sidebar[_ngcontent-%COMP%]   .ps-all[_ngcontent-%COMP%]:hover {\n  background: var(--hover);\n}\n.prod-sidebar[_ngcontent-%COMP%]   .ps-all.active[_ngcontent-%COMP%] {\n  background: var(--blue-soft);\n  color: var(--blue);\n}\n.prod-sidebar[_ngcontent-%COMP%]   .psc-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  background: none;\n  border: none;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 13px;\n  color: var(--t2);\n  cursor: pointer;\n  text-align: left;\n}\n.prod-sidebar[_ngcontent-%COMP%]   .psc-row[_ngcontent-%COMP%]:hover {\n  background: var(--hover);\n}\n.prod-sidebar[_ngcontent-%COMP%]   .psc-row.active[_ngcontent-%COMP%] {\n  background: var(--blue-soft);\n  color: var(--blue);\n  font-weight: 600;\n}\n.prod-sidebar[_ngcontent-%COMP%]   .psc-row[_ngcontent-%COMP%]   .psc-name[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.prod-sidebar[_ngcontent-%COMP%]   .psc-row[_ngcontent-%COMP%]   .psc-toggle[_ngcontent-%COMP%] {\n  color: var(--t3);\n  padding: 0 2px;\n}\n.prod-sidebar[_ngcontent-%COMP%]   .psc-children[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.prod-sidebar[_ngcontent-%COMP%]   .psc-child[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n  background: none;\n  border: none;\n  border-radius: 6px;\n  padding: 6px 10px;\n  font-size: 12px;\n  color: var(--t3);\n  cursor: pointer;\n}\n.prod-sidebar[_ngcontent-%COMP%]   .psc-child[_ngcontent-%COMP%]:hover {\n  background: var(--hover);\n  color: var(--t1);\n}\n.prod-sidebar[_ngcontent-%COMP%]   .psc-child.active[_ngcontent-%COMP%] {\n  color: var(--blue);\n  font-weight: 600;\n}\n.prod-main[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 16px;\n  overflow-y: auto;\n  min-height: 0;\n}\n.prod-main[_ngcontent-%COMP%]   .pgn[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--border);\n  padding: 12px 0 0;\n  margin-top: 4px;\n}\n.psk-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.psk-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n}\n.psk-img[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 6px;\n  flex-shrink: 0;\n}\n.psk-lines[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.pt-name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 200px;\n}\n.pt-name[_ngcontent-%COMP%]   .ptn-img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 6px;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.pt-name[_ngcontent-%COMP%]   .ptn-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.pt-name[_ngcontent-%COMP%]   .ptn-placeholder[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 6px;\n  background: var(--hover);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.pt-name[_ngcontent-%COMP%]   .ptn-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--t1);\n  font-size: 13px;\n}\n.pt-name[_ngcontent-%COMP%]   .ptn-brand[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--t3);\n  margin-top: 2px;\n}\n.sku-badge[_ngcontent-%COMP%] {\n  background: var(--hover);\n  color: var(--t2);\n  padding: 3px 7px;\n  border-radius: 4px;\n  font-family: monospace;\n  font-size: 11px;\n  white-space: nowrap;\n}\n.stock-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 8px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.stock-badge.s-ok[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.12);\n  color: #16A34A;\n}\n.stock-badge.s-low[_ngcontent-%COMP%] {\n  background: rgba(234, 179, 8, 0.15);\n  color: #B45309;\n}\n.stock-badge.s-out[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #DC2626;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 8px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.status-badge.st-active[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.12);\n  color: #16A34A;\n}\n.status-badge.st-draft[_ngcontent-%COMP%] {\n  background: rgba(107, 114, 128, 0.12);\n  color: #6B7280;\n}\n.status-badge.st-inactive[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #DC2626;\n}\n.status-badge.st-discontinued[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.12);\n  color: #7C3AED;\n}\n.pt-date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--t3);\n  white-space: nowrap;\n}\n.media-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));\n  gap: 8px;\n  margin-bottom: 4px;\n}\n.media-thumb[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 1;\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--border);\n  overflow: hidden;\n  background: var(--hover);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.media-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.media-thumb[_ngcontent-%COMP%]   .media-video-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.media-thumb[_ngcontent-%COMP%]   .media-type-tag[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 3px;\n  left: 3px;\n  right: 3px;\n  background: rgba(0, 0, 0, 0.6);\n  color: #fff;\n  font-size: 9px;\n  text-align: center;\n  border-radius: 3px;\n  padding: 1px 3px;\n  text-transform: uppercase;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.media-empty[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--t3);\n  padding: 12px 0 4px;\n}\n.upload-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.upload-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.upload-row[_ngcontent-%COMP%]   .upload-file-label[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  background: var(--input-bg);\n  border: 1.5px solid var(--border);\n  border-radius: var(--radius);\n  padding: 8px 12px;\n  cursor: pointer;\n  font-size: 13px;\n  color: var(--t2);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.upload-row[_ngcontent-%COMP%]   .upload-file-label[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n.upload-row[_ngcontent-%COMP%]   .upload-file-label[_ngcontent-%COMP%]:hover {\n  background: var(--hover);\n}\n.step-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--t3);\n}\n.ft-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.multi-check-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n@media (max-width: 768px) {\n  .prod-body[_ngcontent-%COMP%] {\n    flex-direction: column;\n    overflow: visible;\n  }\n  .prod-sidebar[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow-y: visible;\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 4px;\n  }\n  .prod-sidebar[_ngcontent-%COMP%]   .ps-title[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .prod-main[_ngcontent-%COMP%] {\n    overflow-y: visible;\n  }\n}\n/*# sourceMappingURL=products.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductsComponent, { className: "ProductsComponent", filePath: "src\\app\\pages\\products\\products.component.ts", lineNumber: 42 });
})();
export {
  ProductsComponent
};
//# sourceMappingURL=chunk-37RIBPZN.js.map
