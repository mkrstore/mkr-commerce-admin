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
  NgIf,
  SlicePipe
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
  ɵɵpipe,
  ɵɵpipeBind3,
  ɵɵproperty,
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

// src/app/pages/brands/brands.component.ts
function BrandsComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.totalCount(), " brands");
  }
}
function BrandsComponent_app_btn_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-btn", 19);
    \u0275\u0275listener("clicked", function BrandsComponent_app_btn_7_Template_app_btn_clicked_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openCreate());
    });
    \u0275\u0275text(1, "New Brand");
    \u0275\u0275elementEnd();
  }
}
function BrandsComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function BrandsComponent_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.searchQuery = "";
      return \u0275\u0275resetView(ctx_r0.onFilterChange());
    });
    \u0275\u0275elementStart(1, "span", 21);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function BrandsComponent_app_btn_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-btn", 22);
    \u0275\u0275listener("clicked", function BrandsComponent_app_btn_15_Template_app_btn_clicked_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clearFilters());
    });
    \u0275\u0275text(1, "Clear");
    \u0275\u0275elementEnd();
  }
}
function BrandsComponent_div_16_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275element(4, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275element(6, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275element(8, "div", 28);
    \u0275\u0275elementEnd()();
  }
}
function BrandsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "table", 25)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "Brand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Slug");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Created");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275template(14, BrandsComponent_div_16_tr_14_Template, 9, 0, "tr", 26);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r0.skeletonRows);
  }
}
function BrandsComponent_div_17_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, " Add brands to associate them with your products ");
    \u0275\u0275elementEnd();
  }
}
function BrandsComponent_div_17_app_btn_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-btn", 19);
    \u0275\u0275listener("clicked", function BrandsComponent_div_17_app_btn_7_Template_app_btn_clicked_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openCreate());
    });
    \u0275\u0275text(1, "New Brand");
    \u0275\u0275elementEnd();
  }
}
function BrandsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31)(2, "span", 32);
    \u0275\u0275text(3, "label");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 33);
    \u0275\u0275text(5, "No brands found");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, BrandsComponent_div_17_div_6_Template, 2, 0, "div", 34)(7, BrandsComponent_div_17_app_btn_7_Template, 2, 0, "app-btn", 6);
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
function BrandsComponent_div_18_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th");
  }
}
function BrandsComponent_div_18_tr_17_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 50);
  }
  if (rf & 2) {
    const brand_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", brand_r7.logoUrl, \u0275\u0275sanitizeUrl)("alt", brand_r7.name);
  }
}
function BrandsComponent_div_18_tr_17_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1, "label");
    \u0275\u0275elementEnd();
  }
}
function BrandsComponent_div_18_tr_17_td_19_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 54);
    \u0275\u0275listener("click", function BrandsComponent_div_18_tr_17_td_19_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const brand_r7 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openDelete(brand_r7));
    });
    \u0275\u0275elementStart(1, "span", 57);
    \u0275\u0275text(2, "block");
    \u0275\u0275elementEnd()();
  }
}
function BrandsComponent_div_18_tr_17_td_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 52);
    \u0275\u0275listener("click", function BrandsComponent_div_18_tr_17_td_19_Template_td_click_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 53)(2, "button", 54);
    \u0275\u0275listener("click", function BrandsComponent_div_18_tr_17_td_19_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const brand_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEdit(brand_r7));
    });
    \u0275\u0275elementStart(3, "span", 55);
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, BrandsComponent_div_18_tr_17_td_19_button_5_Template, 3, 0, "button", 56);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const brand_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", brand_r7.isActive);
  }
}
function BrandsComponent_div_18_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 39);
    \u0275\u0275listener("click", function BrandsComponent_div_18_tr_17_Template_tr_click_0_listener() {
      const brand_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEdit(brand_r7));
    });
    \u0275\u0275elementStart(1, "td")(2, "div", 40)(3, "div", 41);
    \u0275\u0275template(4, BrandsComponent_div_18_tr_17_img_4_Template, 1, 2, "img", 42)(5, BrandsComponent_div_18_tr_17_span_5_Template, 2, 0, "span", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 44);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "td")(9, "span", 45);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 46);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "span", 47);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 48);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, BrandsComponent_div_18_tr_17_td_19_Template, 6, 1, "td", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const brand_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", brand_r7.logoUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !brand_r7.logoUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(brand_r7.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(brand_r7.slug);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", brand_r7.description ? \u0275\u0275pipeBind3(13, 12, brand_r7.description, 0, 60) + (brand_r7.description.length > 60 ? "\u2026" : "") : "\u2014", " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("badge-green", brand_r7.isActive)("badge-gray", !brand_r7.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", brand_r7.isActive ? "Active" : "Inactive", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(brand_r7.createdAt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.canManage());
  }
}
function BrandsComponent_div_18_div_18_ng_container_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function BrandsComponent_div_18_div_18_ng_container_4_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 63);
    \u0275\u0275listener("click", function BrandsComponent_div_18_div_18_ng_container_4_button_2_Template_button_click_0_listener() {
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
function BrandsComponent_div_18_div_18_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, BrandsComponent_div_18_div_18_ng_container_4_span_1_Template, 2, 0, "span", 60)(2, BrandsComponent_div_18_div_18_ng_container_4_button_2_Template, 2, 3, "button", 61);
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
function BrandsComponent_div_18_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58)(1, "button", 59);
    \u0275\u0275listener("click", function BrandsComponent_div_18_div_18_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToPage(ctx_r0.currentPage() - 1));
    });
    \u0275\u0275elementStart(2, "span", 55);
    \u0275\u0275text(3, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, BrandsComponent_div_18_div_18_ng_container_4_Template, 3, 2, "ng-container", 26);
    \u0275\u0275elementStart(5, "button", 59);
    \u0275\u0275listener("click", function BrandsComponent_div_18_div_18_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToPage(ctx_r0.currentPage() + 1));
    });
    \u0275\u0275elementStart(6, "span", 55);
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
function BrandsComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "table", 25)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "Brand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Slug");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, BrandsComponent_div_18_th_15_Template, 1, 0, "th", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, BrandsComponent_div_18_tr_17_Template, 20, 16, "tr", 37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(18, BrandsComponent_div_18_div_18_Template, 8, 3, "div", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275property("ngIf", ctx_r0.canManage());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.brands());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.totalPages() > 1);
  }
}
function BrandsComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275listener("click", function BrandsComponent_div_19_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementEnd();
  }
}
function BrandsComponent_div_20_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78)(1, "span", 55);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.modalError, " ");
  }
}
function BrandsComponent_div_20_app_checkbox_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-checkbox", 79);
    \u0275\u0275listener("checkedChange", function BrandsComponent_div_20_app_checkbox_12_Template_app_checkbox_checkedChange_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.form.isActive = $event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("checked", ctx_r0.form.isActive);
  }
}
function BrandsComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275listener("click", function BrandsComponent_div_20_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 66)(2, "span", 67);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 68);
    \u0275\u0275listener("click", function BrandsComponent_div_20_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementStart(5, "span", 55);
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 69);
    \u0275\u0275template(8, BrandsComponent_div_20_div_8_Template, 4, 1, "div", 70);
    \u0275\u0275elementStart(9, "app-input", 71);
    \u0275\u0275listener("valueChange", function BrandsComponent_div_20_Template_app_input_valueChange_9_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.form.name = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "app-input", 72);
    \u0275\u0275listener("valueChange", function BrandsComponent_div_20_Template_app_input_valueChange_10_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.form.slug = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "app-textarea", 73);
    \u0275\u0275listener("valueChange", function BrandsComponent_div_20_Template_app_textarea_valueChange_11_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.form.description = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, BrandsComponent_div_20_app_checkbox_12_Template, 1, 1, "app-checkbox", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 75)(14, "app-btn", 76);
    \u0275\u0275listener("clicked", function BrandsComponent_div_20_Template_app_btn_clicked_14_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(15, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "app-btn", 77);
    \u0275\u0275listener("clicked", function BrandsComponent_div_20_Template_app_btn_clicked_16_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save());
    });
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.modalMode === "create" ? "New Brand" : "Edit Brand");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.modalError);
    \u0275\u0275advance();
    \u0275\u0275property("required", true)("touched", ctx_r0.formTouched)("value", ctx_r0.form.name);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.form.slug);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.form.description)("rows", 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.modalMode === "edit");
    \u0275\u0275advance(4);
    \u0275\u0275property("loading", ctx_r0.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.modalMode === "create" ? "Create" : "Save Changes", " ");
  }
}
function BrandsComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275listener("click", function BrandsComponent_div_21_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDelete());
    });
    \u0275\u0275elementEnd();
  }
}
function BrandsComponent_div_22_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.deleteError);
  }
}
function BrandsComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275listener("click", function BrandsComponent_div_22_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r17);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 80)(2, "div", 81)(3, "span", 82);
    \u0275\u0275text(4, "block");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Deactivate Brand?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p")(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " will be hidden from the product catalogue.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, BrandsComponent_div_22_div_11_Template, 2, 1, "div", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 75)(13, "app-btn", 76);
    \u0275\u0275listener("clicked", function BrandsComponent_div_22_Template_app_btn_clicked_13_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDelete());
    });
    \u0275\u0275text(14, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "app-btn", 83);
    \u0275\u0275listener("clicked", function BrandsComponent_div_22_Template_app_btn_clicked_15_listener() {
      \u0275\u0275restoreView(_r17);
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
var BrandsComponent = class _BrandsComponent {
  http;
  auth;
  BASE = PRODUCT_ENDPOINTS.BRANDS;
  // ── List ──────────────────────────────────────────────────────────────────
  brands = signal([]);
  loading = signal(true);
  totalCount = signal(0);
  totalPages = signal(0);
  currentPage = signal(0);
  skeletonRows = Array(8);
  activeFilter = "";
  searchQuery = "";
  // ── Modal ─────────────────────────────────────────────────────────────────
  modalMode = "closed";
  saving = false;
  modalError = "";
  formTouched = false;
  editTarget = null;
  form = { name: "", slug: "", description: "", isActive: true };
  // ── Delete ────────────────────────────────────────────────────────────────
  deleteTarget = null;
  deleting = false;
  deleteError = "";
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
    this.load(0);
  }
  // ── Data ──────────────────────────────────────────────────────────────────
  load(page = 0) {
    this.loading.set(true);
    const params = { page: String(page), size: "20" };
    if (this.activeFilter)
      params["active"] = this.activeFilter;
    if (this.searchQuery.trim())
      params["search"] = this.searchQuery.trim();
    this.http.get(this.BASE, { params }).subscribe({
      next: (res) => {
        this.brands.set(res.data?.content ?? []);
        this.totalCount.set(res.data?.totalElements ?? 0);
        this.totalPages.set(res.data?.totalPages ?? 0);
        this.currentPage.set(res.data?.number ?? 0);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
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
  get statusFilterOpts() {
    return [
      { value: "true", label: "Active" },
      { value: "false", label: "Inactive" }
    ];
  }
  goToPage(p) {
    if (p >= 0 && p < this.totalPages())
      this.load(p);
  }
  // ── Create / Edit ─────────────────────────────────────────────────────────
  openCreate() {
    this.form = { name: "", slug: "", description: "", isActive: true };
    this.modalError = "";
    this.formTouched = false;
    this.editTarget = null;
    this.modalMode = "create";
  }
  openEdit(brand) {
    this.form = { name: brand.name, slug: brand.slug, description: brand.description ?? "", isActive: brand.isActive };
    this.modalError = "";
    this.formTouched = false;
    this.editTarget = brand;
    this.modalMode = "edit";
  }
  closeModal() {
    this.modalMode = "closed";
    this.modalError = "";
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
      isActive: this.form.isActive
    };
    const req$ = this.modalMode === "create" ? this.http.post(this.BASE, payload) : this.http.put(`${this.BASE}/${this.editTarget.id}`, payload);
    req$.subscribe({
      next: () => {
        this.saving = false;
        this.modalMode = "closed";
        this.load(this.currentPage());
      },
      error: (e) => {
        this.saving = false;
        this.modalError = extractErrorMessage(e, "Save failed.");
      }
    });
  }
  // ── Delete ────────────────────────────────────────────────────────────────
  openDelete(brand) {
    this.deleteTarget = brand;
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
    this.http.delete(`${this.BASE}/${this.deleteTarget.id}`).subscribe({
      next: () => {
        this.deleting = false;
        this.deleteTarget = null;
        this.load(this.currentPage());
      },
      error: (e) => {
        this.deleting = false;
        this.deleteError = extractErrorMessage(e, "Failed to deactivate.");
      }
    });
  }
  formatDate(iso) {
    return new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  }
  initials(name) {
    return name.slice(0, 2).toUpperCase();
  }
  static \u0275fac = function BrandsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrandsComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BrandsComponent, selectors: [["app-brands"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 23, vars: 14, consts: [[1, "page"], [1, "page-hd"], [1, "page-hd-left"], [1, "page-hd-title"], ["class", "page-hd-sub", 4, "ngIf"], [1, "page-hd-right"], ["variant", "primary", "size", "sm", "icon", "add", 3, "clicked", 4, "ngIf"], [1, "filter-bar"], [1, "search-bar"], [1, "sb-icon", "icon", "icon-sm"], ["type", "text", "placeholder", "Search brands\u2026", 3, "ngModelChange", "ngModel"], ["class", "sb-clear", 3, "click", 4, "ngIf"], ["placeholder", "All Status", 3, "valueChange", "options", "value"], ["variant", "ghost", "size", "sm", 3, "clicked", 4, "ngIf"], ["class", "tbl-card", 4, "ngIf"], ["class", "empty", 4, "ngIf"], ["class", "overlay", 3, "click", 4, "ngIf"], ["class", "modal modal-sm", 3, "click", 4, "ngIf"], [1, "page-hd-sub"], ["variant", "primary", "size", "sm", "icon", "add", 3, "clicked"], [1, "sb-clear", 3, "click"], [1, "icon", "icon-xs"], ["variant", "ghost", "size", "sm", 3, "clicked"], [1, "tbl-card"], [1, "tbl-wrap"], [1, "tbl"], [4, "ngFor", "ngForOf"], [1, "sk", 2, "width", "120px", "height", "13px"], [1, "sk", 2, "width", "80px", "height", "13px"], [1, "sk", 2, "width", "60px", "height", "20px", "border-radius", "99px"], [1, "empty"], [1, "empty-icon"], [1, "icon", "icon-xl", "icon-muted"], [1, "empty-title"], ["class", "empty-sub", 4, "ngIf"], [1, "empty-sub"], [4, "ngIf"], ["class", "tbl-row", 3, "click", 4, "ngFor", "ngForOf"], ["class", "pgn", 4, "ngIf"], [1, "tbl-row", 3, "click"], [2, "display", "flex", "align-items", "center", "gap", "10px"], [1, "brand-logo-cell"], [3, "src", "alt", 4, "ngIf"], ["class", "icon icon-sm icon-muted", 4, "ngIf"], [2, "font-weight", "600", "color", "var(--t1)"], [1, "slug-badge"], [2, "color", "var(--t3)", "font-size", "12px", "max-width", "200px"], [1, "badge"], [2, "color", "var(--t3)", "font-size", "12px"], [3, "click", 4, "ngIf"], [3, "src", "alt"], [1, "icon", "icon-sm", "icon-muted"], [3, "click"], [2, "display", "flex", "gap", "6px"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "icon", "icon-sm"], ["class", "btn btn-ghost btn-sm", 3, "click", 4, "ngIf"], [1, "icon", "icon-sm", "icon-red"], [1, "pgn"], [1, "pgn-btn", 3, "click", "disabled"], ["class", "pgn-ellipsis", 4, "ngIf"], ["class", "pgn-btn", 3, "active", "click", 4, "ngIf"], [1, "pgn-ellipsis"], [1, "pgn-btn", 3, "click"], [1, "overlay", 3, "click"], [1, "modal", "modal-sm", 3, "click"], [1, "modal-hd"], [1, "modal-title"], [1, "modal-close", 3, "click"], [1, "modal-body"], ["class", "alert alert-error", 4, "ngIf"], ["label", "Brand Name", "placeholder", "e.g. Samsung", 3, "valueChange", "required", "touched", "value"], ["label", "Slug", "optLabel", "auto-generated if blank", "placeholder", "e.g. samsung", 3, "valueChange", "value"], ["label", "Description", "optLabel", "optional", "placeholder", "Short brand description\u2026", 3, "valueChange", "value", "rows"], ["label", "Active", 3, "checked", "checkedChange", 4, "ngIf"], [1, "modal-ft"], ["variant", "ghost", 3, "clicked"], ["variant", "primary", 3, "clicked", "loading"], [1, "alert", "alert-error"], ["label", "Active", 3, "checkedChange", "checked"], [1, "confirm-body"], [1, "confirm-icon", "warning"], [1, "icon", "icon-lg"], ["variant", "danger", 3, "clicked", "loading"]], template: function BrandsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275text(4, "Brands");
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, BrandsComponent_div_5_Template, 2, 1, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 5);
      \u0275\u0275template(7, BrandsComponent_app_btn_7_Template, 2, 0, "app-btn", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "span", 9);
      \u0275\u0275text(11, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function BrandsComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function BrandsComponent_Template_input_ngModelChange_12_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, BrandsComponent_button_13_Template, 3, 0, "button", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "app-select", 12);
      \u0275\u0275listener("valueChange", function BrandsComponent_Template_app_select_valueChange_14_listener($event) {
        ctx.activeFilter = $event;
        return ctx.onFilterChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(15, BrandsComponent_app_btn_15_Template, 2, 0, "app-btn", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275template(16, BrandsComponent_div_16_Template, 15, 1, "div", 14)(17, BrandsComponent_div_17_Template, 8, 2, "div", 15)(18, BrandsComponent_div_18_Template, 19, 3, "div", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275template(19, BrandsComponent_div_19_Template, 1, 0, "div", 16)(20, BrandsComponent_div_20_Template, 18, 11, "div", 17)(21, BrandsComponent_div_21_Template, 1, 0, "div", 16)(22, BrandsComponent_div_22_Template, 17, 3, "div", 17);
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
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.brands().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.brands().length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.modalMode !== "closed");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.modalMode !== "closed");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.deleteTarget);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.deleteTarget);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, SlicePipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, AppInputComponent, AppTextareaComponent, AppCheckboxComponent, AppBtnComponent, AppSelectComponent], styles: ["\n\n.brand-logo-cell[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  border: 1px solid var(--border);\n  background: var(--surface2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.brand-logo-cell[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  padding: 4px;\n}\n.slug-badge[_ngcontent-%COMP%] {\n  background: var(--surface2);\n  color: var(--t3);\n  padding: 2px 7px;\n  border-radius: 4px;\n  font-family: monospace;\n  font-size: 11px;\n}\n.icon-red[_ngcontent-%COMP%] {\n  color: var(--red);\n}\n/*# sourceMappingURL=brands.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BrandsComponent, { className: "BrandsComponent", filePath: "src\\app\\pages\\brands\\brands.component.ts", lineNumber: 25 });
})();
export {
  BrandsComponent
};
//# sourceMappingURL=chunk-7MXQBEVB.js.map
