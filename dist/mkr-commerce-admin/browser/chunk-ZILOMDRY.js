import {
  extractErrorMessage
} from "./chunk-XY6GHRJG.js";
import {
  AppBtnComponent,
  AppCheckboxComponent,
  AppInputComponent,
  AppSelectComponent,
  AppTextareaComponent
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
  HttpClient
} from "./chunk-CADB6C7J.js";
import {
  CommonModule,
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
  ɵɵpropertyInterpolate1,
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

// src/app/pages/categories/categories.component.ts
function CategoriesComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.totalCount(), " categories");
  }
}
function CategoriesComponent_app_btn_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-btn", 22);
    \u0275\u0275listener("clicked", function CategoriesComponent_app_btn_7_Template_app_btn_clicked_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openCreate());
    });
    \u0275\u0275text(1, "New Category");
    \u0275\u0275elementEnd();
  }
}
function CategoriesComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function CategoriesComponent_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.searchQuery = "";
      return \u0275\u0275resetView(ctx_r0.onFilterChange());
    });
    \u0275\u0275elementStart(1, "span", 24);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function CategoriesComponent_app_btn_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-btn", 25);
    \u0275\u0275listener("clicked", function CategoriesComponent_app_btn_15_Template_app_btn_clicked_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clearFilters());
    });
    \u0275\u0275text(1, "Clear");
    \u0275\u0275elementEnd();
  }
}
function CategoriesComponent_div_16_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "div", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275element(4, "div", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275element(6, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275element(8, "div", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "td");
    \u0275\u0275elementEnd();
  }
}
function CategoriesComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "table", 28)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Parent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Spec Fields");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, CategoriesComponent_div_16_tr_15_Template, 10, 0, "tr", 29);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r0.skeletonRows);
  }
}
function CategoriesComponent_div_17_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1, " Create categories to organise products (e.g. Smartphones, Refrigerators, TVs) ");
    \u0275\u0275elementEnd();
  }
}
function CategoriesComponent_div_17_app_btn_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-btn", 22);
    \u0275\u0275listener("clicked", function CategoriesComponent_div_17_app_btn_7_Template_app_btn_clicked_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openCreate());
    });
    \u0275\u0275text(1, "New Category");
    \u0275\u0275elementEnd();
  }
}
function CategoriesComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "span", 36);
    \u0275\u0275text(3, "folder");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 37);
    \u0275\u0275text(5, "No categories found");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, CategoriesComponent_div_17_div_6_Template, 2, 0, "div", 38)(7, CategoriesComponent_div_17_app_btn_7_Template, 2, 0, "app-btn", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !ctx_r0.searchQuery && !ctx_r0.activeFilter && ctx_r0.canManage());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.searchQuery && !ctx_r0.activeFilter && ctx_r0.canManage());
  }
}
function CategoriesComponent_div_18_th_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th");
  }
}
function CategoriesComponent_div_18_tr_15_td_17_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 52);
    \u0275\u0275listener("click", function CategoriesComponent_div_18_tr_15_td_17_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const cat_r7 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openDelete(cat_r7));
    });
    \u0275\u0275elementStart(1, "span", 55);
    \u0275\u0275text(2, "block");
    \u0275\u0275elementEnd()();
  }
}
function CategoriesComponent_div_18_tr_15_td_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 50);
    \u0275\u0275listener("click", function CategoriesComponent_div_18_tr_15_td_17_Template_td_click_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 51)(2, "button", 52);
    \u0275\u0275listener("click", function CategoriesComponent_div_18_tr_15_td_17_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const cat_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEdit(cat_r7));
    });
    \u0275\u0275elementStart(3, "span", 53);
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, CategoriesComponent_div_18_tr_15_td_17_button_5_Template, 3, 0, "button", 54);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", cat_r7.isActive);
  }
}
function CategoriesComponent_div_18_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 43);
    \u0275\u0275listener("click", function CategoriesComponent_div_18_tr_15_Template_tr_click_0_listener() {
      const cat_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEdit(cat_r7));
    });
    \u0275\u0275elementStart(1, "td")(2, "div")(3, "div", 44);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 45);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td", 46);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 47)(11, "span", 24);
    \u0275\u0275text(12, "tune");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td")(15, "span", 48);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, CategoriesComponent_div_18_tr_15_td_17_Template, 6, 1, "td", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const cat_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(cat_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r7.slug);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_5_0 = cat_r7.parentName) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("has-specs", ((tmp_6_0 = cat_r7.attributeDefinitions == null ? null : cat_r7.attributeDefinitions.length) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : 0) > 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (tmp_7_0 = cat_r7.attributeDefinitions == null ? null : cat_r7.attributeDefinitions.length) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : 0, " fields ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-green", cat_r7.isActive)("badge-gray", !cat_r7.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r7.isActive ? "Active" : "Inactive", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.canManage());
  }
}
function CategoriesComponent_div_18_div_16_ng_container_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function CategoriesComponent_div_18_div_16_ng_container_4_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 61);
    \u0275\u0275listener("click", function CategoriesComponent_div_18_div_16_ng_container_4_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const pg_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.goToPage(pg_r12));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pg_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", pg_r12 === ctx_r0.currentPage());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(pg_r12 + 1);
  }
}
function CategoriesComponent_div_18_div_16_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CategoriesComponent_div_18_div_16_ng_container_4_span_1_Template, 2, 0, "span", 58)(2, CategoriesComponent_div_18_div_16_ng_container_4_button_2_Template, 2, 3, "button", 59);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const pg_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", pg_r12 === -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", pg_r12 !== -1);
  }
}
function CategoriesComponent_div_18_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56)(1, "button", 57);
    \u0275\u0275listener("click", function CategoriesComponent_div_18_div_16_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToPage(ctx_r0.currentPage() - 1));
    });
    \u0275\u0275elementStart(2, "span", 53);
    \u0275\u0275text(3, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, CategoriesComponent_div_18_div_16_ng_container_4_Template, 3, 2, "ng-container", 29);
    \u0275\u0275elementStart(5, "button", 57);
    \u0275\u0275listener("click", function CategoriesComponent_div_18_div_16_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToPage(ctx_r0.currentPage() + 1));
    });
    \u0275\u0275elementStart(6, "span", 53);
    \u0275\u0275text(7, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.currentPage() === 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.pageNumbers());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.currentPage() === ctx_r0.totalPages() - 1);
  }
}
function CategoriesComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "table", 28)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Parent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Spec Fields");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, CategoriesComponent_div_18_th_13_Template, 1, 0, "th", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, CategoriesComponent_div_18_tr_15_Template, 18, 12, "tr", 41);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(16, CategoriesComponent_div_18_div_16_Template, 8, 3, "div", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275property("ngIf", ctx_r0.canManage());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.categories());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.totalPages() > 1);
  }
}
function CategoriesComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275listener("click", function CategoriesComponent_div_19_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementEnd();
  }
}
function CategoriesComponent_div_20_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275text(1, "Edit category details and spec fields");
    \u0275\u0275elementEnd();
  }
}
function CategoriesComponent_div_20_div_9_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.attrs.length);
  }
}
function CategoriesComponent_div_20_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70)(1, "button", 71);
    \u0275\u0275listener("click", function CategoriesComponent_div_20_div_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.activeTab = "details");
    });
    \u0275\u0275text(2, "Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 71);
    \u0275\u0275listener("click", function CategoriesComponent_div_20_div_9_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.activeTab = "specs";
      return \u0275\u0275resetView(ctx_r0.loadAttrsIfNeeded());
    });
    \u0275\u0275elementStart(4, "span", 53);
    \u0275\u0275text(5, "tune");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Spec Fields ");
    \u0275\u0275template(7, CategoriesComponent_div_20_div_9_span_7_Template, 2, 1, "span", 72);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r0.activeTab === "details");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r0.activeTab === "specs");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.attrs.length > 0);
  }
}
function CategoriesComponent_div_20_ng_container_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86)(1, "span", 53);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.modalError, " ");
  }
}
function CategoriesComponent_div_20_ng_container_10_app_checkbox_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-checkbox", 87);
    \u0275\u0275listener("checkedChange", function CategoriesComponent_div_20_ng_container_10_app_checkbox_9_Template_app_checkbox_checkedChange_0_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.form.isActive = $event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("checked", ctx_r0.form.isActive);
  }
}
function CategoriesComponent_div_20_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 74);
    \u0275\u0275template(2, CategoriesComponent_div_20_ng_container_10_div_2_Template, 4, 1, "div", 75);
    \u0275\u0275elementStart(3, "app-input", 76);
    \u0275\u0275listener("valueChange", function CategoriesComponent_div_20_ng_container_10_Template_app_input_valueChange_3_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.form.name = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-input", 77);
    \u0275\u0275listener("valueChange", function CategoriesComponent_div_20_ng_container_10_Template_app_input_valueChange_4_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.form.slug = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "app-textarea", 78);
    \u0275\u0275listener("valueChange", function CategoriesComponent_div_20_ng_container_10_Template_app_textarea_valueChange_5_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.form.description = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 79)(7, "app-select", 80);
    \u0275\u0275listener("valueChange", function CategoriesComponent_div_20_ng_container_10_Template_app_select_valueChange_7_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.form.parentId = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "app-input", 81);
    \u0275\u0275listener("valueChange", function CategoriesComponent_div_20_ng_container_10_Template_app_input_valueChange_8_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.form.sortOrder = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, CategoriesComponent_div_20_ng_container_10_app_checkbox_9_Template, 1, 1, "app-checkbox", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 83)(11, "app-btn", 84);
    \u0275\u0275listener("clicked", function CategoriesComponent_div_20_ng_container_10_Template_app_btn_clicked_11_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(12, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "app-btn", 85);
    \u0275\u0275listener("clicked", function CategoriesComponent_div_20_ng_container_10_Template_app_btn_clicked_13_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.save());
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.modalError);
    \u0275\u0275advance();
    \u0275\u0275property("required", true)("touched", ctx_r0.formTouched)("value", ctx_r0.form.name);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.form.slug);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.form.description)("rows", 2);
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r0.parentCategoryOpts)("value", ctx_r0.form.parentId);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.form.sortOrder);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.modalMode === "edit");
    \u0275\u0275advance(4);
    \u0275\u0275property("loading", ctx_r0.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.modalMode === "create" ? "Create Category" : "Save Changes", " ");
  }
}
function CategoriesComponent_div_20_ng_container_11_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86)(1, "span", 53);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.attrError, " ");
  }
}
function CategoriesComponent_div_20_ng_container_11_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93);
    \u0275\u0275element(1, "div", 94)(2, "div", 94);
    \u0275\u0275elementEnd();
  }
}
function CategoriesComponent_div_20_ng_container_11_div_12_app_input_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-input", 110);
    \u0275\u0275listener("valueChange", function CategoriesComponent_div_20_ng_container_11_div_12_app_input_9_Template_app_input_valueChange_0_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.attrForm.fieldKey = $event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("required", true)("touched", ctx_r0.attrFormTouched)("value", ctx_r0.attrForm.fieldKey);
  }
}
function CategoriesComponent_div_20_ng_container_11_div_12_div_13_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 117)(1, "input", 118);
    \u0275\u0275listener("input", function CategoriesComponent_div_20_ng_container_11_div_12_div_13_div_6_Template_input_input_1_listener($event) {
      const oi_r22 = \u0275\u0275restoreView(_r21).index;
      const ctx_r0 = \u0275\u0275nextContext(5);
      ctx_r0.optionInputs[oi_r22] = $event.target.value;
      return \u0275\u0275resetView(ctx_r0.syncOptions());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 119);
    \u0275\u0275listener("click", function CategoriesComponent_div_20_ng_container_11_div_12_div_13_div_6_Template_button_click_2_listener() {
      const oi_r22 = \u0275\u0275restoreView(_r21).index;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.removeOption(oi_r22));
    });
    \u0275\u0275elementStart(3, "span", 53);
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const oi_r22 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("placeholder", "Option ", oi_r22 + 1, "");
    \u0275\u0275property("value", ctx_r0.optionInputs[oi_r22]);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.optionInputs.length === 1);
  }
}
function CategoriesComponent_div_20_ng_container_11_div_12_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 111)(1, "label", 112);
    \u0275\u0275text(2, "Options ");
    \u0275\u0275elementStart(3, "span", 113);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 114);
    \u0275\u0275template(6, CategoriesComponent_div_20_ng_container_11_div_12_div_13_div_6_Template, 5, 4, "div", 115);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 116);
    \u0275\u0275listener("click", function CategoriesComponent_div_20_ng_container_11_div_12_div_13_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.addOption());
    });
    \u0275\u0275elementStart(8, "span", 53);
    \u0275\u0275text(9, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Add option ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r0.optionInputs);
  }
}
function CategoriesComponent_div_20_ng_container_11_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 95)(1, "div", 96)(2, "button", 97);
    \u0275\u0275listener("click", function CategoriesComponent_div_20_ng_container_11_div_12_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.backToAttrList());
    });
    \u0275\u0275elementStart(3, "span", 53);
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 98);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 99)(8, "app-input", 100);
    \u0275\u0275listener("valueChange", function CategoriesComponent_div_20_ng_container_11_div_12_Template_app_input_valueChange_8_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.attrForm.label = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, CategoriesComponent_div_20_ng_container_11_div_12_app_input_9_Template, 1, 3, "app-input", 101);
    \u0275\u0275elementStart(10, "div", 79)(11, "app-select", 102);
    \u0275\u0275listener("valueChange", function CategoriesComponent_div_20_ng_container_11_div_12_Template_app_select_valueChange_11_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.attrForm.fieldType = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "app-input", 103);
    \u0275\u0275listener("valueChange", function CategoriesComponent_div_20_ng_container_11_div_12_Template_app_input_valueChange_12_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.attrForm.unit = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, CategoriesComponent_div_20_ng_container_11_div_12_div_13_Template, 11, 1, "div", 104);
    \u0275\u0275elementStart(14, "div", 79)(15, "app-input", 105);
    \u0275\u0275listener("valueChange", function CategoriesComponent_div_20_ng_container_11_div_12_Template_app_input_valueChange_15_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.attrForm.defaultValue = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 106)(17, "app-checkbox", 107);
    \u0275\u0275listener("checkedChange", function CategoriesComponent_div_20_ng_container_11_div_12_Template_app_checkbox_checkedChange_17_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.attrForm.required = $event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 108)(19, "app-btn", 25);
    \u0275\u0275listener("clicked", function CategoriesComponent_div_20_ng_container_11_div_12_Template_app_btn_clicked_19_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.backToAttrList());
    });
    \u0275\u0275text(20, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "app-btn", 109);
    \u0275\u0275listener("clicked", function CategoriesComponent_div_20_ng_container_11_div_12_Template_app_btn_clicked_21_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.saveAttr());
    });
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.attrEditTarget ? "Edit Field" : "New Spec Field", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("required", true)("touched", ctx_r0.attrFormTouched)("value", ctx_r0.attrForm.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.attrEditTarget);
    \u0275\u0275advance(2);
    \u0275\u0275property("required", true)("options", ctx_r0.fieldTypeOpts)("value", ctx_r0.attrForm.fieldType);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.attrForm.unit);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showOptionInputs);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r0.attrForm.defaultValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r0.attrForm.required);
    \u0275\u0275advance(4);
    \u0275\u0275property("loading", ctx_r0.attrSaving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.attrEditTarget ? "Update Field" : "Add Field", " ");
  }
}
function CategoriesComponent_div_20_ng_container_11_ng_container_13_div_1_app_btn_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-btn", 22);
    \u0275\u0275listener("clicked", function CategoriesComponent_div_20_ng_container_11_ng_container_13_div_1_app_btn_8_Template_app_btn_clicked_0_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.openCreateAttr());
    });
    \u0275\u0275text(1, "Add First Field");
    \u0275\u0275elementEnd();
  }
}
function CategoriesComponent_div_20_ng_container_11_ng_container_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122)(1, "div", 35)(2, "span", 123);
    \u0275\u0275text(3, "tune");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 124);
    \u0275\u0275text(5, "No spec fields yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 39);
    \u0275\u0275text(7, "Add fields like RAM, Screen Size, Battery etc. to collect product specs for this category.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, CategoriesComponent_div_20_ng_container_11_ng_container_13_div_1_app_btn_8_Template, 2, 0, "app-btn", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r0.canManage());
  }
}
function CategoriesComponent_div_20_ng_container_11_ng_container_13_div_2_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 136);
    \u0275\u0275text(1, "required");
    \u0275\u0275elementEnd();
  }
}
function CategoriesComponent_div_20_ng_container_11_ng_container_13_div_2_div_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r24 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", a_r24.unit, "");
  }
}
function CategoriesComponent_div_20_ng_container_11_ng_container_13_div_2_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 137)(1, "button", 52);
    \u0275\u0275listener("click", function CategoriesComponent_div_20_ng_container_11_ng_container_13_div_2_div_1_div_12_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r25);
      const a_r24 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.openEditAttr(a_r24));
    });
    \u0275\u0275elementStart(2, "span", 53);
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 52);
    \u0275\u0275listener("click", function CategoriesComponent_div_20_ng_container_11_ng_container_13_div_2_div_1_div_12_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r25);
      const a_r24 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.openDeleteAttr(a_r24));
    });
    \u0275\u0275elementStart(5, "span", 55);
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd()()();
  }
}
function CategoriesComponent_div_20_ng_container_11_ng_container_13_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127)(1, "div", 128)(2, "div", 129)(3, "span", 130);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, CategoriesComponent_div_20_ng_container_11_ng_container_13_div_2_div_1_span_5_Template, 2, 0, "span", 131);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 132)(7, "span", 133);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, CategoriesComponent_div_20_ng_container_11_ng_container_13_div_2_div_1_span_9_Template, 2, 1, "span", 40);
    \u0275\u0275elementStart(10, "span", 134);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(12, CategoriesComponent_div_20_ng_container_11_ng_container_13_div_2_div_1_div_12_Template, 7, 0, "div", 135);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r24 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(a_r24.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", a_r24.required);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.fieldTypeLabel(a_r24.fieldType));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", a_r24.unit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r24.fieldKey);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.canManage());
  }
}
function CategoriesComponent_div_20_ng_container_11_ng_container_13_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 125);
    \u0275\u0275template(1, CategoriesComponent_div_20_ng_container_11_ng_container_13_div_2_div_1_Template, 13, 6, "div", 126);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.attrs);
  }
}
function CategoriesComponent_div_20_ng_container_11_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CategoriesComponent_div_20_ng_container_11_ng_container_13_div_1_Template, 9, 1, "div", 120)(2, CategoriesComponent_div_20_ng_container_11_ng_container_13_div_2_Template, 2, 1, "div", 121);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.attrs.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.attrs.length > 0);
  }
}
function CategoriesComponent_div_20_ng_container_11_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 83)(1, "app-btn", 84);
    \u0275\u0275listener("clicked", function CategoriesComponent_div_20_ng_container_11_div_14_Template_app_btn_clicked_1_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(2, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-btn", 138);
    \u0275\u0275listener("clicked", function CategoriesComponent_div_20_ng_container_11_div_14_Template_app_btn_clicked_3_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openCreateAttr());
    });
    \u0275\u0275text(4, "Add Spec Field");
    \u0275\u0275elementEnd()();
  }
}
function CategoriesComponent_div_20_ng_container_11_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 83)(1, "app-btn", 84);
    \u0275\u0275listener("clicked", function CategoriesComponent_div_20_ng_container_11_div_15_Template_app_btn_clicked_1_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(2, "Close");
    \u0275\u0275elementEnd()();
  }
}
function CategoriesComponent_div_20_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 74)(2, "div", 88)(3, "span", 89);
    \u0275\u0275text(4, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Spec fields define what product info is collected for ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " \u2014 e.g. for Smartphones: RAM, Storage, Battery, OS. These appear as a form when adding products in this category.");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, CategoriesComponent_div_20_ng_container_11_div_10_Template, 4, 1, "div", 75)(11, CategoriesComponent_div_20_ng_container_11_div_11_Template, 3, 0, "div", 90)(12, CategoriesComponent_div_20_ng_container_11_div_12_Template, 23, 14, "div", 91)(13, CategoriesComponent_div_20_ng_container_11_ng_container_13_Template, 3, 2, "ng-container", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, CategoriesComponent_div_20_ng_container_11_div_14_Template, 5, 0, "div", 92)(15, CategoriesComponent_div_20_ng_container_11_div_15_Template, 3, 0, "div", 92);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.editTarget == null ? null : ctx_r0.editTarget.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.attrError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.attrLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.attrLoading && ctx_r0.attrView === "form");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.attrLoading && ctx_r0.attrView === "list");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.attrLoading && ctx_r0.attrView === "list" && ctx_r0.canManage());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.attrLoading || ctx_r0.attrView === "form");
  }
}
function CategoriesComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275listener("click", function CategoriesComponent_div_20_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 64)(2, "div")(3, "div", 65);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, CategoriesComponent_div_20_div_5_Template, 2, 0, "div", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 67);
    \u0275\u0275listener("click", function CategoriesComponent_div_20_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementStart(7, "span", 53);
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, CategoriesComponent_div_20_div_9_Template, 8, 5, "div", 68)(10, CategoriesComponent_div_20_ng_container_10_Template, 15, 13, "ng-container", 40)(11, CategoriesComponent_div_20_ng_container_11_Template, 16, 7, "ng-container", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.modalMode === "create" ? "New Category" : ctx_r0.editTarget == null ? null : ctx_r0.editTarget.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.modalMode === "edit");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.modalMode === "edit");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeTab === "details");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeTab === "specs");
  }
}
function CategoriesComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275listener("click", function CategoriesComponent_div_21_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDelete());
    });
    \u0275\u0275elementEnd();
  }
}
function CategoriesComponent_div_22_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.deleteError);
  }
}
function CategoriesComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 139);
    \u0275\u0275listener("click", function CategoriesComponent_div_22_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r29);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 140)(2, "div", 141)(3, "span", 142);
    \u0275\u0275text(4, "block");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Deactivate Category?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p")(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " will be hidden from the product catalogue.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, CategoriesComponent_div_22_div_11_Template, 2, 1, "div", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 83)(13, "app-btn", 84);
    \u0275\u0275listener("clicked", function CategoriesComponent_div_22_Template_app_btn_clicked_13_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDelete());
    });
    \u0275\u0275text(14, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "app-btn", 143);
    \u0275\u0275listener("clicked", function CategoriesComponent_div_22_Template_app_btn_clicked_15_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmDelete());
    });
    \u0275\u0275text(16, "Deactivate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.deleteTarget.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.deleteError);
    \u0275\u0275advance(4);
    \u0275\u0275property("loading", ctx_r0.deleting);
  }
}
function CategoriesComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 144);
    \u0275\u0275listener("click", function CategoriesComponent_div_23_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteAttr());
    });
    \u0275\u0275elementEnd();
  }
}
function CategoriesComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 145);
    \u0275\u0275listener("click", function CategoriesComponent_div_24_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r31);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 140)(2, "div", 146)(3, "span", 142);
    \u0275\u0275text(4, "delete");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Delete Spec Field?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p")(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " and all its saved values on existing products will be permanently removed. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 83)(12, "app-btn", 84);
    \u0275\u0275listener("clicked", function CategoriesComponent_div_24_Template_app_btn_clicked_12_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteAttr());
    });
    \u0275\u0275text(13, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "app-btn", 143);
    \u0275\u0275listener("clicked", function CategoriesComponent_div_24_Template_app_btn_clicked_14_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmDeleteAttr());
    });
    \u0275\u0275text(15, "Delete Field");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.attrDeleteTarget.label);
    \u0275\u0275advance(5);
    \u0275\u0275property("loading", ctx_r0.attrDeleting);
  }
}
var CategoriesComponent = class _CategoriesComponent {
  http;
  auth;
  EP = PRODUCT_ENDPOINTS;
  // ── List state ────────────────────────────────────────────────────────────
  categories = signal([]);
  loading = signal(true);
  totalCount = signal(0);
  totalPages = signal(0);
  currentPage = signal(0);
  skeletonRows = Array(8);
  activeFilter = "";
  searchQuery = "";
  // ── Tree (for parent dropdown) ────────────────────────────────────────────
  tree = signal([]);
  // ── Create / Edit modal ───────────────────────────────────────────────────
  modalMode = "closed";
  saving = false;
  modalError = "";
  formTouched = false;
  attrFormTouched = false;
  editTarget = null;
  form = { name: "", slug: "", description: "", parentId: "", sortOrder: 0, isActive: true };
  // ── Delete confirm ────────────────────────────────────────────────────────
  deleteTarget = null;
  deleting = false;
  deleteError = "";
  // ── Tabs ─────────────────────────────────────────────────────────────────
  activeTab = "details";
  // ── Attribute Definitions (inline in edit modal) ─────────────────────────
  attrTarget = null;
  attrs = [];
  attrLoading = false;
  attrView = "list";
  attrEditTarget = null;
  attrSaving = false;
  attrError = "";
  attrDeleteTarget = null;
  attrDeleting = false;
  attrsLoaded = false;
  attrForm = {
    label: "",
    fieldKey: "",
    fieldType: "TEXT",
    options: "",
    unit: "",
    defaultValue: "",
    required: false,
    sortOrder: 0
  };
  // Individual option inputs for SELECT/MULTISELECT (replaces JSON textarea)
  optionInputs = [""];
  get showOptionInputs() {
    return this.attrForm.fieldType === "SELECT" || this.attrForm.fieldType === "MULTISELECT";
  }
  addOption() {
    this.optionInputs.push("");
  }
  removeOption(i) {
    if (this.optionInputs.length > 1)
      this.optionInputs.splice(i, 1);
  }
  syncOptions() {
    const opts = this.optionInputs.map((o) => o.trim()).filter(Boolean);
    this.attrForm.options = opts.length ? JSON.stringify(opts) : "";
  }
  fieldTypes = ["TEXT", "NUMBER", "BOOLEAN", "SELECT", "MULTISELECT"];
  // ── Computed ──────────────────────────────────────────────────────────────
  canManage = computed(() => {
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
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
  }
  ngOnInit() {
    this.loadTree();
    this.load(0);
  }
  // ── List ──────────────────────────────────────────────────────────────────
  load(page = 0) {
    this.loading.set(true);
    const params = { page: String(page), size: "20" };
    if (this.activeFilter)
      params["active"] = this.activeFilter;
    if (this.searchQuery.trim())
      params["search"] = this.searchQuery.trim();
    this.http.get(this.EP.CATEGORIES, { params }).subscribe({
      next: (res) => {
        this.categories.set(res.data?.content ?? []);
        this.totalCount.set(res.data?.totalElements ?? 0);
        this.totalPages.set(res.data?.totalPages ?? 0);
        this.currentPage.set(res.data?.number ?? 0);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  loadTree() {
    this.http.get(this.EP.CATEGORIES_TREE).subscribe({
      next: (res) => this.tree.set(res.data ?? [])
    });
  }
  onFilterChange() {
    this.load(0);
  }
  clearFilters() {
    this.searchQuery = "";
    this.activeFilter = "";
    this.load(0);
  }
  goToPage(p) {
    if (p >= 0 && p < this.totalPages())
      this.load(p);
  }
  get statusFilterOpts() {
    return [{ value: "true", label: "Active" }, { value: "false", label: "Inactive" }];
  }
  get parentCategoryOpts() {
    return this.flatTree(this.tree()).map((n) => ({
      value: n.id,
      label: n.label,
      disabled: this.modalMode === "edit" && n.id === this.editTarget?.id
    }));
  }
  get fieldTypeOpts() {
    return this.fieldTypes.map((ft) => ({ value: ft, label: this.fieldTypeLabel(ft) }));
  }
  // ── Create / Edit ─────────────────────────────────────────────────────────
  openEdit(cat) {
    this.form = {
      name: cat.name,
      slug: cat.slug,
      description: cat.description ?? "",
      parentId: cat.parentId ?? "",
      sortOrder: cat.sortOrder,
      isActive: cat.isActive
    };
    this.modalError = "";
    this.formTouched = false;
    this.editTarget = cat;
    this.activeTab = "details";
    this.attrTarget = cat;
    this.attrs = [];
    this.attrsLoaded = false;
    this.attrView = "list";
    this.attrError = "";
    this.attrEditTarget = null;
    this.modalMode = "edit";
  }
  openCreate() {
    this.form = { name: "", slug: "", description: "", parentId: "", sortOrder: 0, isActive: true };
    this.modalError = "";
    this.formTouched = false;
    this.editTarget = null;
    this.activeTab = "details";
    this.modalMode = "create";
  }
  closeModal() {
    this.modalMode = "closed";
    this.modalError = "";
    this.attrError = "";
  }
  save() {
    this.formTouched = true;
    if (!this.form.name.trim()) {
      return;
    }
    this.saving = true;
    this.modalError = "";
    const payload = {
      name: this.form.name.trim(),
      slug: this.form.slug.trim() || null,
      description: this.form.description.trim() || null,
      parentId: this.form.parentId || null,
      sortOrder: this.form.sortOrder,
      isActive: this.form.isActive
    };
    const req$ = this.modalMode === "create" ? this.http.post(this.EP.CATEGORIES, payload) : this.http.put(`${this.EP.CATEGORIES}/${this.editTarget.id}`, payload);
    req$.subscribe({
      next: () => {
        const isCreate = this.modalMode === "create";
        this.saving = false;
        this.modalMode = "closed";
        this.load(isCreate ? 0 : this.currentPage());
        this.loadTree();
      },
      error: (e) => {
        this.saving = false;
        this.modalError = extractErrorMessage(e, "Save failed.");
      }
    });
  }
  // ── Delete ────────────────────────────────────────────────────────────────
  openDelete(cat) {
    this.deleteTarget = cat;
    this.deleteError = "";
    this.deleting = false;
  }
  closeDelete() {
    this.deleteTarget = null;
    this.deleteError = "";
  }
  confirmDelete() {
    if (!this.deleteTarget)
      return;
    this.deleting = true;
    this.deleteError = "";
    this.http.delete(`${this.EP.CATEGORIES}/${this.deleteTarget.id}`).subscribe({
      next: () => {
        this.deleting = false;
        this.deleteTarget = null;
        this.load(this.currentPage());
        this.loadTree();
      },
      error: (e) => {
        this.deleting = false;
        this.deleteError = extractErrorMessage(e, "Failed to deactivate.");
      }
    });
  }
  // ── Attribute Definitions ─────────────────────────────────────────────────
  loadAttrsIfNeeded() {
    if (this.attrsLoaded || !this.attrTarget)
      return;
    this.loadAttrs();
  }
  loadAttrs() {
    if (!this.attrTarget)
      return;
    this.attrLoading = true;
    this.http.get(this.EP.CATEGORY_ATTRS(this.attrTarget.id)).subscribe({
      next: (res) => {
        this.attrs = res.data ?? [];
        this.attrLoading = false;
        this.attrsLoaded = true;
      },
      error: () => this.attrLoading = false
    });
  }
  openCreateAttr() {
    this.attrForm = {
      label: "",
      fieldKey: "",
      fieldType: "TEXT",
      options: "",
      unit: "",
      defaultValue: "",
      required: false,
      sortOrder: this.attrs.length
    };
    this.optionInputs = [""];
    this.attrEditTarget = null;
    this.attrError = "";
    this.attrFormTouched = false;
    this.attrView = "form";
  }
  openEditAttr(attr) {
    this.attrForm = {
      label: attr.label,
      fieldKey: attr.fieldKey,
      fieldType: attr.fieldType,
      options: attr.options ?? "",
      unit: attr.unit ?? "",
      defaultValue: attr.defaultValue ?? "",
      required: attr.required,
      sortOrder: attr.sortOrder
    };
    try {
      const parsed = attr.options ? JSON.parse(attr.options) : [];
      this.optionInputs = parsed.length ? parsed : [""];
    } catch {
      this.optionInputs = [""];
    }
    this.attrEditTarget = attr;
    this.attrError = "";
    this.attrView = "form";
  }
  backToAttrList() {
    this.attrView = "list";
    this.attrError = "";
  }
  saveAttr() {
    if (!this.attrTarget)
      return;
    this.attrFormTouched = true;
    if (!this.attrForm.label.trim()) {
      return;
    }
    if (!this.attrEditTarget && !this.attrForm.fieldKey.trim()) {
      return;
    }
    this.attrSaving = true;
    this.attrError = "";
    let payload;
    let url;
    let req$;
    if (this.attrEditTarget) {
      payload = {
        label: this.attrForm.label.trim(),
        fieldType: this.attrForm.fieldType,
        options: this.attrForm.options.trim() || null,
        unit: this.attrForm.unit.trim() || null,
        defaultValue: this.attrForm.defaultValue.trim() || null,
        required: this.attrForm.required,
        sortOrder: this.attrForm.sortOrder
      };
      url = this.EP.CATEGORY_ATTR_ID(this.attrTarget.id, this.attrEditTarget.id);
      req$ = this.http.put(url, payload);
    } else {
      payload = {
        label: this.attrForm.label.trim(),
        fieldKey: this.attrForm.fieldKey.trim(),
        fieldType: this.attrForm.fieldType,
        options: this.attrForm.options.trim() || null,
        unit: this.attrForm.unit.trim() || null,
        defaultValue: this.attrForm.defaultValue.trim() || null,
        required: this.attrForm.required,
        sortOrder: this.attrForm.sortOrder
      };
      url = this.EP.CATEGORY_ATTRS(this.attrTarget.id);
      req$ = this.http.post(url, payload);
    }
    req$.subscribe({
      next: () => {
        this.attrSaving = false;
        this.attrView = "list";
        this.loadAttrs();
      },
      error: (e) => {
        this.attrSaving = false;
        this.attrError = extractErrorMessage(e, "Save failed.");
      }
    });
  }
  openDeleteAttr(attr) {
    this.attrDeleteTarget = attr;
  }
  closeDeleteAttr() {
    this.attrDeleteTarget = null;
  }
  confirmDeleteAttr() {
    if (!this.attrTarget || !this.attrDeleteTarget)
      return;
    this.attrDeleting = true;
    this.http.delete(this.EP.CATEGORY_ATTR_ID(this.attrTarget.id, this.attrDeleteTarget.id)).subscribe({
      next: () => {
        this.attrDeleting = false;
        this.attrDeleteTarget = null;
        this.loadAttrs();
      },
      error: (e) => {
        this.attrDeleting = false;
        this.attrError = extractErrorMessage(e, "Delete failed.");
      }
    });
  }
  // ── Helpers ───────────────────────────────────────────────────────────────
  formatDate(iso) {
    return new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  }
  flatTree(nodes, prefix = "") {
    const result = [];
    for (const n of nodes) {
      result.push({ id: n.id, label: prefix + n.name });
      if (n.children?.length)
        result.push(...this.flatTree(n.children, prefix + "\u2014 "));
    }
    return result;
  }
  fieldTypeLabel(ft) {
    return { TEXT: "Text", NUMBER: "Number", BOOLEAN: "Yes/No", SELECT: "Dropdown", MULTISELECT: "Multi-select" }[ft] ?? ft;
  }
  static \u0275fac = function CategoriesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CategoriesComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoriesComponent, selectors: [["app-categories"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 25, vars: 16, consts: [[1, "page"], [1, "page-hd"], [1, "page-hd-left"], [1, "page-hd-title"], ["class", "page-hd-sub", 4, "ngIf"], [1, "page-hd-right"], ["variant", "primary", "size", "sm", "icon", "add", 3, "clicked", 4, "ngIf"], [1, "filter-bar"], [1, "search-bar"], [1, "sb-icon", "icon", "icon-sm"], ["type", "text", "placeholder", "Search categories\u2026", 3, "ngModelChange", "ngModel"], ["class", "sb-clear", 3, "click", 4, "ngIf"], ["placeholder", "All Status", 3, "valueChange", "options", "value"], ["variant", "ghost", "size", "sm", 3, "clicked", 4, "ngIf"], ["class", "tbl-card", 4, "ngIf"], ["class", "empty", 4, "ngIf"], ["class", "overlay", 3, "click", 4, "ngIf"], ["class", "modal modal-lg", 3, "click", 4, "ngIf"], ["class", "modal modal-sm", 3, "click", 4, "ngIf"], ["class", "overlay", "style", "z-index:302", 3, "click", 4, "ngIf"], ["class", "modal modal-sm", "style", "z-index:303", 3, "click", 4, "ngIf"], [1, "page-hd-sub"], ["variant", "primary", "size", "sm", "icon", "add", 3, "clicked"], [1, "sb-clear", 3, "click"], [1, "icon", "icon-xs"], ["variant", "ghost", "size", "sm", 3, "clicked"], [1, "tbl-card"], [1, "tbl-wrap"], [1, "tbl"], [4, "ngFor", "ngForOf"], [1, "sk", 2, "width", "120px", "height", "13px"], [1, "sk", 2, "width", "80px", "height", "13px"], [1, "sk", 2, "width", "60px", "height", "13px"], [1, "sk", 2, "width", "60px", "height", "20px", "border-radius", "99px"], [1, "empty"], [1, "empty-icon"], [1, "icon", "icon-xl", "icon-muted"], [1, "empty-title"], ["class", "empty-sub", 4, "ngIf"], [1, "empty-sub"], [4, "ngIf"], ["class", "tbl-row", 3, "click", 4, "ngFor", "ngForOf"], ["class", "pgn", 4, "ngIf"], [1, "tbl-row", 3, "click"], [2, "font-weight", "600", "color", "var(--t1)"], [2, "font-size", "11px", "color", "var(--t3)", "font-family", "monospace"], [2, "color", "var(--t3)"], [1, "cat-spec-count"], [1, "badge"], [3, "click", 4, "ngIf"], [3, "click"], [2, "display", "flex", "gap", "6px"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "icon", "icon-sm"], ["class", "btn btn-ghost btn-sm", 3, "click", 4, "ngIf"], [1, "icon", "icon-sm", "icon-red"], [1, "pgn"], [1, "pgn-btn", 3, "click", "disabled"], ["class", "pgn-ellipsis", 4, "ngIf"], ["class", "pgn-btn", 3, "active", "click", 4, "ngIf"], [1, "pgn-ellipsis"], [1, "pgn-btn", 3, "click"], [1, "overlay", 3, "click"], [1, "modal", "modal-lg", 3, "click"], [1, "modal-hd"], [1, "modal-title"], ["style", "font-size:12px;color:var(--t3)", 4, "ngIf"], [1, "modal-close", 3, "click"], ["class", "tabs", "style", "padding:0 22px", 4, "ngIf"], [2, "font-size", "12px", "color", "var(--t3)"], [1, "tabs", 2, "padding", "0 22px"], [1, "tab-btn", 3, "click"], ["class", "tab-count", 4, "ngIf"], [1, "tab-count"], [1, "modal-body"], ["class", "alert alert-error", 4, "ngIf"], ["label", "Name", "placeholder", "e.g. Smartphones", 3, "valueChange", "required", "touched", "value"], ["label", "Slug", "optLabel", "auto-generated if blank", "placeholder", "e.g. smartphones", 3, "valueChange", "value"], ["label", "Description", "optLabel", "optional", "placeholder", "Short description of what products go in this category", 3, "valueChange", "value", "rows"], [1, "field-row"], ["label", "Parent Category", "optLabel", "optional", "placeholder", "None (top-level)", 3, "valueChange", "options", "value"], ["label", "Sort Order", "type", "number", 2, "max-width", "110px", 3, "valueChange", "value"], ["label", "Active", 3, "checked", "checkedChange", 4, "ngIf"], [1, "modal-ft"], ["variant", "ghost", 3, "clicked"], ["variant", "primary", 3, "clicked", "loading"], [1, "alert", "alert-error"], ["label", "Active", 3, "checkedChange", "checked"], [1, "spec-info-box"], [1, "icon", "icon-sm", "icon-blue"], ["style", "display:flex;flex-direction:column;gap:8px", 4, "ngIf"], ["class", "attr-form-panel", 4, "ngIf"], ["class", "modal-ft", 4, "ngIf"], [2, "display", "flex", "flex-direction", "column", "gap", "8px"], [1, "sk", 2, "height", "48px", "border-radius", "8px"], [1, "attr-form-panel"], [1, "attr-form-hd"], [1, "attr-back-btn", 3, "click"], [2, "font-size", "14px", "font-weight", "700", "color", "var(--t1)"], [2, "display", "flex", "flex-direction", "column", "gap", "12px", "padding", "14px 16px"], ["label", "Field Label", "placeholder", "e.g. RAM, Screen Size, Battery", 3, "valueChange", "required", "touched", "value"], ["label", "Field Key", "hint", "Unique key in snake_case \u2014 cannot be changed after saving", "placeholder", "e.g. ram, screen_size, battery_mah", 3, "required", "touched", "value", "valueChange", 4, "ngIf"], ["label", "Field Type", 3, "valueChange", "required", "options", "value"], ["label", "Unit", "optLabel", "optional", "placeholder", "e.g. GB, inch, mAh", 3, "valueChange", "value"], ["class", "field", 4, "ngIf"], ["label", "Default Value", "optLabel", "optional", "placeholder", "Leave blank for no default", 2, "flex", "1", 3, "valueChange", "value"], [1, "field", 2, "justify-content", "flex-end", "padding-bottom", "4px"], ["label", "Required field", 3, "checkedChange", "checked"], [2, "display", "flex", "gap", "8px", "justify-content", "flex-end"], ["variant", "primary", "size", "sm", 3, "clicked", "loading"], ["label", "Field Key", "hint", "Unique key in snake_case \u2014 cannot be changed after saving", "placeholder", "e.g. ram, screen_size, battery_mah", 3, "valueChange", "required", "touched", "value"], [1, "field"], [1, "field-label"], [1, "req"], [1, "option-inputs"], ["class", "option-input-row", 4, "ngFor", "ngForOf"], [1, "opt-add-btn", 3, "click"], [1, "option-input-row"], ["type", "text", 1, "f-input", 3, "input", "value", "placeholder"], [1, "opt-remove-btn", 3, "click", "disabled"], ["class", "empty", "style", "padding:28px", 4, "ngIf"], ["style", "display:flex;flex-direction:column;gap:6px", 4, "ngIf"], [1, "empty", 2, "padding", "28px"], [1, "icon", "icon-lg", "icon-muted"], [1, "empty-title", 2, "font-size", "14px"], [2, "display", "flex", "flex-direction", "column", "gap", "6px"], ["class", "attr-item", 4, "ngFor", "ngForOf"], [1, "attr-item"], [1, "attr-item-left"], [2, "display", "flex", "align-items", "center", "gap", "6px"], [2, "font-size", "13px", "font-weight", "600", "color", "var(--t1)"], ["class", "badge badge-red", "style", "font-size:10px", 4, "ngIf"], [2, "font-size", "11px", "color", "var(--t3)", "margin-top", "2px"], [1, "attr-type-chip"], [2, "font-family", "monospace", "margin-left", "6px", "opacity", ".6"], ["style", "display:flex;gap:4px", 4, "ngIf"], [1, "badge", "badge-red", 2, "font-size", "10px"], [2, "display", "flex", "gap", "4px"], ["variant", "primary", "icon", "add", 3, "clicked"], [1, "modal", "modal-sm", 3, "click"], [1, "confirm-body"], [1, "confirm-icon", "warning"], [1, "icon", "icon-lg"], ["variant", "danger", 3, "clicked", "loading"], [1, "overlay", 2, "z-index", "302", 3, "click"], [1, "modal", "modal-sm", 2, "z-index", "303", 3, "click"], [1, "confirm-icon", "danger"]], template: function CategoriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275text(4, "Categories");
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, CategoriesComponent_div_5_Template, 2, 1, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 5);
      \u0275\u0275template(7, CategoriesComponent_app_btn_7_Template, 2, 0, "app-btn", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "span", 9);
      \u0275\u0275text(11, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function CategoriesComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function CategoriesComponent_Template_input_ngModelChange_12_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, CategoriesComponent_button_13_Template, 3, 0, "button", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "app-select", 12);
      \u0275\u0275listener("valueChange", function CategoriesComponent_Template_app_select_valueChange_14_listener($event) {
        ctx.activeFilter = $event;
        return ctx.onFilterChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(15, CategoriesComponent_app_btn_15_Template, 2, 0, "app-btn", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275template(16, CategoriesComponent_div_16_Template, 16, 1, "div", 14)(17, CategoriesComponent_div_17_Template, 8, 2, "div", 15)(18, CategoriesComponent_div_18_Template, 17, 3, "div", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275template(19, CategoriesComponent_div_19_Template, 1, 0, "div", 16)(20, CategoriesComponent_div_20_Template, 12, 5, "div", 17)(21, CategoriesComponent_div_21_Template, 1, 0, "div", 16)(22, CategoriesComponent_div_22_Template, 17, 3, "div", 18)(23, CategoriesComponent_div_23_Template, 1, 0, "div", 19)(24, CategoriesComponent_div_24_Template, 16, 2, "div", 20);
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", !ctx.loading());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.canManage());
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.searchQuery);
      \u0275\u0275advance();
      \u0275\u0275property("options", ctx.statusFilterOpts)("value", ctx.activeFilter);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.searchQuery || ctx.activeFilter);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.categories().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.categories().length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.modalMode !== "closed");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.modalMode !== "closed");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.deleteTarget);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.deleteTarget);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.attrDeleteTarget);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.attrDeleteTarget);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, AppInputComponent, AppTextareaComponent, AppSelectComponent, AppCheckboxComponent, AppBtnComponent], styles: ['@charset "UTF-8";\n\n\n\n.slug-badge[_ngcontent-%COMP%] {\n  background: var(--surface2);\n  color: var(--t3);\n  padding: 2px 7px;\n  border-radius: 4px;\n  font-family: monospace;\n  font-size: 11px;\n}\n.icon-red[_ngcontent-%COMP%] {\n  color: var(--red);\n}\n.cat-spec-count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: var(--t3);\n}\n.cat-spec-count.has-specs[_ngcontent-%COMP%] {\n  color: var(--blue);\n  font-weight: 600;\n}\n.spec-info-box[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: flex-start;\n  padding: 10px 12px;\n  background: var(--blue-soft);\n  border-radius: var(--radius);\n  font-size: 12px;\n  color: var(--t2);\n  line-height: 1.5;\n}\n.spec-info-box[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--t1);\n}\n.attr-form-panel[_ngcontent-%COMP%] {\n  background: var(--surface2);\n  border-radius: var(--radius-md);\n  border: 1px solid var(--border);\n  overflow: hidden;\n}\n.attr-form-hd[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: var(--surface3);\n  border-bottom: 1px solid var(--border);\n}\n.attr-back-btn[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: var(--radius);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: none;\n  border: none;\n  color: var(--t2);\n  cursor: pointer;\n}\n.attr-back-btn[_ngcontent-%COMP%]:hover {\n  background: var(--hover);\n  color: var(--t1);\n}\n.attr-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 10px 14px;\n  background: var(--surface2);\n  border-radius: var(--radius);\n  border: 1px solid var(--border);\n}\n.attr-item[_ngcontent-%COMP%]:hover {\n  border-color: var(--border2);\n}\n.attr-item-left[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.attr-type-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 10px;\n  font-weight: 700;\n  background: var(--surface3);\n  color: var(--t2);\n  padding: 1px 6px;\n  border-radius: 3px;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.option-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 6px;\n}\n.option-input-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.option-input-row[_ngcontent-%COMP%]   .f-input[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.opt-remove-btn[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: none;\n  border: 1px solid var(--border);\n  border-radius: var(--radius);\n  color: var(--t3);\n  cursor: pointer;\n}\n.opt-remove-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--red-bg);\n  color: var(--red);\n  border-color: var(--red);\n}\n.opt-remove-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.opt-add-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 10px;\n  border-radius: var(--radius);\n  background: none;\n  border: 1px dashed var(--border);\n  color: var(--blue);\n  font-size: 12px;\n  font-weight: 600;\n  font-family: var(--font);\n  cursor: pointer;\n}\n.opt-add-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  background: var(--blue-light);\n}\n/*# sourceMappingURL=categories.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoriesComponent, { className: "CategoriesComponent", filePath: "src\\app\\pages\\categories\\categories.component.ts", lineNumber: 40 });
})();
export {
  CategoriesComponent
};
//# sourceMappingURL=chunk-ZILOMDRY.js.map
