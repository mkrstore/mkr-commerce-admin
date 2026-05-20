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
  FormsModule
} from "./chunk-OOFYAVIO.js";
import {
  AuthService
} from "./chunk-WXBPIA4S.js";
import {
  PRODUCT_ENDPOINTS
} from "./chunk-O3NE7GYO.js";
import {
  ActivatedRoute,
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
  __spreadProps,
  __spreadValues,
  computed,
  signal,
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
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-PEVOVQSE.js";

// src/app/pages/product-detail/product-detail.component.ts
function ProductDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementStart(2, "div", 7);
    \u0275\u0275text(3, "Loading product\u2026");
    \u0275\u0275elementEnd()();
  }
}
function ProductDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "span", 10);
    \u0275\u0275text(3, "inventory_2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 11);
    \u0275\u0275text(5, "Product not found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "app-btn", 12);
    \u0275\u0275listener("clicked", function ProductDetailComponent_div_1_Template_app_btn_clicked_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275text(7, "Back to Products");
    \u0275\u0275elementEnd()();
  }
}
function ProductDetailComponent_div_2_div_9_app_btn_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-btn", 27);
    \u0275\u0275listener("clicked", function ProductDetailComponent_div_2_div_9_app_btn_3_Template_app_btn_clicked_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setStatus("ACTIVE"));
    });
    \u0275\u0275text(1, "Activate");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_div_2_div_9_app_btn_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-btn", 28);
    \u0275\u0275listener("clicked", function ProductDetailComponent_div_2_div_9_app_btn_4_Template_app_btn_clicked_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setStatus("INACTIVE"));
    });
    \u0275\u0275text(1, "Deactivate");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_div_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "app-btn", 24);
    \u0275\u0275listener("clicked", function ProductDetailComponent_div_2_div_9_Template_app_btn_clicked_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clone());
    });
    \u0275\u0275text(2, "Clone");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ProductDetailComponent_div_2_div_9_app_btn_3_Template, 2, 0, "app-btn", 25)(4, ProductDetailComponent_div_2_div_9_app_btn_4_Template, 2, 0, "app-btn", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", p_r7.status !== "ACTIVE");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r7.status === "ACTIVE");
  }
}
function ProductDetailComponent_div_2_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r7.attributes.length);
  }
}
function ProductDetailComponent_div_2_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r7.media.length);
  }
}
function ProductDetailComponent_div_2_div_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "span", 46);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.infoError, "");
  }
}
function ProductDetailComponent_div_2_div_21_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "span", 46);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Saved successfully");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_div_2_div_21_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "app-btn", 49);
    \u0275\u0275listener("clicked", function ProductDetailComponent_div_2_div_21_div_14_Template_app_btn_clicked_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveInfo());
    });
    \u0275\u0275text(2, "Save Changes");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r1.infoSaving);
  }
}
function ProductDetailComponent_div_2_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275template(1, ProductDetailComponent_div_2_div_21_div_1_Template, 4, 1, "div", 31)(2, ProductDetailComponent_div_2_div_21_div_2_Template, 4, 0, "div", 32);
    \u0275\u0275elementStart(3, "div", 33)(4, "app-input", 34);
    \u0275\u0275listener("valueChange", function ProductDetailComponent_div_2_div_21_Template_app_input_valueChange_4_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.infoForm.name = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "app-input", 35);
    \u0275\u0275listener("valueChange", function ProductDetailComponent_div_2_div_21_Template_app_input_valueChange_5_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.infoForm.sku = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "app-input", 36);
    \u0275\u0275listener("valueChange", function ProductDetailComponent_div_2_div_21_Template_app_input_valueChange_6_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.infoForm.slug = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "app-input", 37);
    \u0275\u0275listener("valueChange", function ProductDetailComponent_div_2_div_21_Template_app_input_valueChange_7_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.infoForm.barcode = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "app-select", 38);
    \u0275\u0275listener("valueChange", function ProductDetailComponent_div_2_div_21_Template_app_select_valueChange_8_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.infoForm.status = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "app-select", 39);
    \u0275\u0275listener("valueChange", function ProductDetailComponent_div_2_div_21_Template_app_select_valueChange_9_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.infoForm.categoryId = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "app-select", 40);
    \u0275\u0275listener("valueChange", function ProductDetailComponent_div_2_div_21_Template_app_select_valueChange_10_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.infoForm.brandId = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "app-input", 41);
    \u0275\u0275listener("valueChange", function ProductDetailComponent_div_2_div_21_Template_app_input_valueChange_11_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.infoForm.shortDescription = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "app-textarea", 42);
    \u0275\u0275listener("valueChange", function ProductDetailComponent_div_2_div_21_Template_app_textarea_valueChange_12_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.infoForm.description = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "app-input", 43);
    \u0275\u0275listener("valueChange", function ProductDetailComponent_div_2_div_21_Template_app_input_valueChange_13_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.infoForm.tagsRaw = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, ProductDetailComponent_div_2_div_21_div_14_Template, 3, 1, "div", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.infoError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.infoSaved);
    \u0275\u0275advance(2);
    \u0275\u0275property("required", true)("value", ctx_r1.infoForm.name);
    \u0275\u0275advance();
    \u0275\u0275property("required", true)("value", ctx_r1.infoForm.sku);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.infoForm.slug);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.infoForm.barcode);
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r1.statusOpts)("value", ctx_r1.infoForm.status);
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r1.categoryOpts)("value", ctx_r1.infoForm.categoryId);
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r1.brandOpts)("value", ctx_r1.infoForm.brandId);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.infoForm.shortDescription);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.infoForm.description)("rows", 5);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.infoForm.tagsRaw);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canEdit());
  }
}
function ProductDetailComponent_div_2_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "span", 46);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.pricingError, "");
  }
}
function ProductDetailComponent_div_2_div_22_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "span", 46);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Saved successfully");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_div_2_div_22_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "span");
    \u0275\u0275text(2, "Wholesale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.inr(ctx_r1.pricingForm.priceWholesale));
  }
}
function ProductDetailComponent_div_2_div_22_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "span");
    \u0275\u0275text(2, "Broker");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.inr(ctx_r1.pricingForm.priceBroker));
  }
}
function ProductDetailComponent_div_2_div_22_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "app-btn", 49);
    \u0275\u0275listener("clicked", function ProductDetailComponent_div_2_div_22_div_27_Template_app_btn_clicked_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.savePricing());
    });
    \u0275\u0275text(2, "Save Changes");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r1.pricingSaving);
  }
}
function ProductDetailComponent_div_2_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275template(1, ProductDetailComponent_div_2_div_22_div_1_Template, 4, 1, "div", 31)(2, ProductDetailComponent_div_2_div_22_div_2_Template, 4, 0, "div", 32);
    \u0275\u0275elementStart(3, "div", 33)(4, "app-input", 50);
    \u0275\u0275listener("valueChange", function ProductDetailComponent_div_2_div_22_Template_app_input_valueChange_4_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.pricingForm.priceRetail = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "app-input", 51);
    \u0275\u0275listener("valueChange", function ProductDetailComponent_div_2_div_22_Template_app_input_valueChange_5_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.pricingForm.priceWholesale = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "app-input", 52);
    \u0275\u0275listener("valueChange", function ProductDetailComponent_div_2_div_22_Template_app_input_valueChange_6_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.pricingForm.priceBroker = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "app-input", 53);
    \u0275\u0275listener("valueChange", function ProductDetailComponent_div_2_div_22_Template_app_input_valueChange_7_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.pricingForm.minQtyWholesale = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "app-input", 54);
    \u0275\u0275listener("valueChange", function ProductDetailComponent_div_2_div_22_Template_app_input_valueChange_8_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.pricingForm.gstPercent = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "app-input", 55);
    \u0275\u0275listener("valueChange", function ProductDetailComponent_div_2_div_22_Template_app_input_valueChange_9_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.pricingForm.stockQty = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "app-input", 56);
    \u0275\u0275listener("valueChange", function ProductDetailComponent_div_2_div_22_Template_app_input_valueChange_10_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.pricingForm.weight = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "app-input", 57);
    \u0275\u0275listener("valueChange", function ProductDetailComponent_div_2_div_22_Template_app_input_valueChange_11_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.pricingForm.dimensions = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 58)(13, "app-checkbox", 59);
    \u0275\u0275listener("checkedChange", function ProductDetailComponent_div_2_div_22_Template_app_checkbox_checkedChange_13_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.pricingForm.gstIncluded = $event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 60)(15, "div", 61)(16, "span");
    \u0275\u0275text(17, "Retail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "strong");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, ProductDetailComponent_div_2_div_22_div_20_Template, 5, 1, "div", 62)(21, ProductDetailComponent_div_2_div_22_div_21_Template, 5, 1, "div", 62);
    \u0275\u0275elementStart(22, "div", 61)(23, "span");
    \u0275\u0275text(24, "GST");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "strong");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(27, ProductDetailComponent_div_2_div_22_div_27_Template, 3, 1, "div", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pricingError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pricingSaved);
    \u0275\u0275advance(2);
    \u0275\u0275property("required", true)("value", ctx_r1.pricingForm.priceRetail);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.pricingForm.priceWholesale);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.pricingForm.priceBroker);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.pricingForm.minQtyWholesale);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.pricingForm.gstPercent);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.pricingForm.stockQty);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.pricingForm.weight);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.pricingForm.dimensions);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.pricingForm.gstIncluded);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.inr(ctx_r1.pricingForm.priceRetail));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pricingForm.priceWholesale);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pricingForm.priceBroker);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.pricingForm.gstPercent, "% ", ctx_r1.pricingForm.gstIncluded ? "(incl.)" : "(excl.)", "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canEdit());
  }
}
function ProductDetailComponent_div_2_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "span", 46);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.attrError, "");
  }
}
function ProductDetailComponent_div_2_div_23_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "span", 46);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Saved successfully");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_div_2_div_23_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275text(1, " This category has no attribute definitions yet. Go to ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "Categories");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " and add fields to ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, ". ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(p_r7.categoryName);
  }
}
function ProductDetailComponent_div_2_div_23_div_4_div_1_app_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-input", 72);
    \u0275\u0275listener("valueChange", function ProductDetailComponent_div_2_div_23_div_4_div_1_app_input_1_Template_app_input_valueChange_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const def_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.attrValues[def_r13.id] = $event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_11_0;
    const def_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("label", def_r13.label)("optLabel", (tmp_8_0 = def_r13.unit) !== null && tmp_8_0 !== void 0 ? tmp_8_0 : "")("required", def_r13.required)("value", ctx_r1.attrValues[def_r13.id])("placeholder", (tmp_11_0 = def_r13.defaultValue) !== null && tmp_11_0 !== void 0 ? tmp_11_0 : "");
  }
}
function ProductDetailComponent_div_2_div_23_div_4_div_1_app_input_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-input", 73);
    \u0275\u0275listener("valueChange", function ProductDetailComponent_div_2_div_23_div_4_div_1_app_input_2_Template_app_input_valueChange_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const def_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.attrValues[def_r13.id] = $event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_11_0;
    const def_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("label", def_r13.label)("optLabel", (tmp_8_0 = def_r13.unit) !== null && tmp_8_0 !== void 0 ? tmp_8_0 : "")("required", def_r13.required)("value", ctx_r1.attrValues[def_r13.id])("placeholder", (tmp_11_0 = def_r13.defaultValue) !== null && tmp_11_0 !== void 0 ? tmp_11_0 : "0");
  }
}
function ProductDetailComponent_div_2_div_23_div_4_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 74)(1, "label", 75);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-checkbox", 76);
    \u0275\u0275listener("checkedChange", function ProductDetailComponent_div_2_div_23_div_4_div_1_div_3_Template_app_checkbox_checkedChange_3_listener($event) {
      \u0275\u0275restoreView(_r15);
      const def_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.attrValues[def_r13.id] = $event ? "true" : "false");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const def_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(def_r13.label);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.attrValues[def_r13.id] === "true");
  }
}
function ProductDetailComponent_div_2_div_23_div_4_div_1_app_select_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-select", 77);
    \u0275\u0275listener("valueChange", function ProductDetailComponent_div_2_div_23_div_4_div_1_app_select_4_Template_app_select_valueChange_0_listener($event) {
      \u0275\u0275restoreView(_r16);
      const def_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.attrValues[def_r13.id] = $event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const def_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("label", def_r13.label + (def_r13.unit ? " (" + def_r13.unit + ")" : ""))("options", ctx_r1.getAttrOpts(def_r13))("required", def_r13.required)("value", ctx_r1.attrValues[def_r13.id]);
  }
}
function ProductDetailComponent_div_2_div_23_div_4_div_1_div_5_app_checkbox_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-checkbox", 80);
    \u0275\u0275listener("checkedChange", function ProductDetailComponent_div_2_div_23_div_4_div_1_div_5_app_checkbox_4_Template_app_checkbox_checkedChange_0_listener() {
      const opt_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const def_r13 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleMultiValue(def_r13.id, opt_r18));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r18 = ctx.$implicit;
    const def_r13 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("label", opt_r18)("checked", ctx_r1.isMultiSelected(def_r13.id, opt_r18));
  }
}
function ProductDetailComponent_div_2_div_23_div_4_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74)(1, "label", 75);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 78);
    \u0275\u0275template(4, ProductDetailComponent_div_2_div_23_div_4_div_1_div_5_app_checkbox_4_Template, 1, 2, "app-checkbox", 79);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const def_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(def_r13.label);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.parsedOptions(def_r13));
  }
}
function ProductDetailComponent_div_2_div_23_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275template(1, ProductDetailComponent_div_2_div_23_div_4_div_1_app_input_1_Template, 1, 5, "app-input", 68)(2, ProductDetailComponent_div_2_div_23_div_4_div_1_app_input_2_Template, 1, 5, "app-input", 69)(3, ProductDetailComponent_div_2_div_23_div_4_div_1_div_3_Template, 4, 2, "div", 70)(4, ProductDetailComponent_div_2_div_23_div_4_div_1_app_select_4_Template, 1, 4, "app-select", 71)(5, ProductDetailComponent_div_2_div_23_div_4_div_1_div_5_Template, 5, 2, "div", 70);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const def_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", def_r13.fieldType === "TEXT");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", def_r13.fieldType === "NUMBER");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", def_r13.fieldType === "BOOLEAN");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", def_r13.fieldType === "SELECT");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", def_r13.fieldType === "MULTISELECT");
  }
}
function ProductDetailComponent_div_2_div_23_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275template(1, ProductDetailComponent_div_2_div_23_div_4_div_1_Template, 6, 5, "div", 66);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.attrDefs);
  }
}
function ProductDetailComponent_div_2_div_23_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "app-btn", 49);
    \u0275\u0275listener("clicked", function ProductDetailComponent_div_2_div_23_div_5_Template_app_btn_clicked_1_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveAttributes());
    });
    \u0275\u0275text(2, "Save Attributes");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r1.attrSaving);
  }
}
function ProductDetailComponent_div_2_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275template(1, ProductDetailComponent_div_2_div_23_div_1_Template, 4, 1, "div", 31)(2, ProductDetailComponent_div_2_div_23_div_2_Template, 4, 0, "div", 32)(3, ProductDetailComponent_div_2_div_23_div_3_Template, 8, 1, "div", 63)(4, ProductDetailComponent_div_2_div_23_div_4_Template, 2, 1, "div", 64)(5, ProductDetailComponent_div_2_div_23_div_5_Template, 3, 1, "div", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.attrError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.attrSaved);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.attrDefs.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.attrDefs.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canEdit() && ctx_r1.attrDefs.length > 0);
  }
}
function ProductDetailComponent_div_2_div_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "span", 46);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.uploadError, "");
  }
}
function ProductDetailComponent_div_2_div_24_div_2_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 94);
  }
  if (rf & 2) {
    let tmp_8_0;
    const m_r20 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", m_r20.url, \u0275\u0275sanitizeUrl)("alt", (tmp_8_0 = m_r20.altText) !== null && tmp_8_0 !== void 0 ? tmp_8_0 : "");
  }
}
function ProductDetailComponent_div_2_div_24_div_2_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95)(1, "span", 96);
    \u0275\u0275text(2, "play_arrow");
    \u0275\u0275elementEnd()();
  }
}
function ProductDetailComponent_div_2_div_24_div_2_div_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 97);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r20 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r20.altText);
  }
}
function ProductDetailComponent_div_2_div_24_div_2_div_1_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 98);
    \u0275\u0275listener("click", function ProductDetailComponent_div_2_div_24_div_2_div_1_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const m_r20 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openDeleteMedia(m_r20));
    });
    \u0275\u0275elementStart(1, "span", 99);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function ProductDetailComponent_div_2_div_24_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86)(1, "div", 87);
    \u0275\u0275template(2, ProductDetailComponent_div_2_div_24_div_2_div_1_img_2_Template, 1, 2, "img", 88)(3, ProductDetailComponent_div_2_div_24_div_2_div_1_div_3_Template, 3, 0, "div", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 90)(5, "span", 91);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ProductDetailComponent_div_2_div_24_div_2_div_1_span_7_Template, 2, 1, "span", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ProductDetailComponent_div_2_div_24_div_2_div_1_button_8_Template, 3, 0, "button", 93);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r20 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.isVideo(m_r20.mediaType));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isVideo(m_r20.mediaType));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", "mt-" + m_r20.mediaType.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", m_r20.mediaType.replace("_", " "), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", m_r20.altText);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canEdit());
  }
}
function ProductDetailComponent_div_2_div_24_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275template(1, ProductDetailComponent_div_2_div_24_div_2_div_1_Template, 9, 6, "div", 85);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", p_r7.media);
  }
}
function ProductDetailComponent_div_2_div_24_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275text(1, " No media uploaded yet. ");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_div_2_div_24_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 101)(1, "div", 102);
    \u0275\u0275text(2, "Upload Media");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 33)(4, "app-select", 103);
    \u0275\u0275listener("valueChange", function ProductDetailComponent_div_2_div_24_div_4_Template_app_select_valueChange_4_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.uploadMediaType = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "app-input", 104);
    \u0275\u0275listener("valueChange", function ProductDetailComponent_div_2_div_24_div_4_Template_app_input_valueChange_5_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.uploadAltText = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 105)(7, "label", 106)(8, "input", 107);
    \u0275\u0275listener("change", function ProductDetailComponent_div_2_div_24_div_4_Template_input_change_8_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "app-btn", 108);
    \u0275\u0275listener("clicked", function ProductDetailComponent_div_2_div_24_div_4_Template_app_btn_clicked_11_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.uploadMedia());
    });
    \u0275\u0275text(12, " Upload ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("options", ctx_r1.mediaTypeOpts)("value", ctx_r1.uploadMediaType);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.uploadAltText);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.uploadFile ? ctx_r1.uploadFile.name : "Choose file\u2026");
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r1.uploading)("disabled", !ctx_r1.uploadFile);
  }
}
function ProductDetailComponent_div_2_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275template(1, ProductDetailComponent_div_2_div_24_div_1_Template, 4, 1, "div", 31)(2, ProductDetailComponent_div_2_div_24_div_2_Template, 2, 1, "div", 81)(3, ProductDetailComponent_div_2_div_24_div_3_Template, 2, 0, "div", 82)(4, ProductDetailComponent_div_2_div_24_div_4_Template, 13, 6, "div", 83);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const p_r7 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.uploadError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_4_0 = p_r7.media == null ? null : p_r7.media.length) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : 0) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !p_r7.media || p_r7.media.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canEdit());
  }
}
function ProductDetailComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "app-btn", 12);
    \u0275\u0275listener("clicked", function ProductDetailComponent_div_2_Template_app_btn_clicked_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275text(3, "Products");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 15)(5, "h1", 16);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 17);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, ProductDetailComponent_div_2_div_9_Template, 5, 2, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 19)(11, "button", 20);
    \u0275\u0275listener("click", function ProductDetailComponent_div_2_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab = "info");
    });
    \u0275\u0275text(12, "Basic Info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 20);
    \u0275\u0275listener("click", function ProductDetailComponent_div_2_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab = "pricing");
    });
    \u0275\u0275text(14, "Pricing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 20);
    \u0275\u0275listener("click", function ProductDetailComponent_div_2_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab = "attributes");
    });
    \u0275\u0275text(16, " Attributes ");
    \u0275\u0275template(17, ProductDetailComponent_div_2_span_17_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 20);
    \u0275\u0275listener("click", function ProductDetailComponent_div_2_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab = "media");
    });
    \u0275\u0275text(19, " Media ");
    \u0275\u0275template(20, ProductDetailComponent_div_2_span_20_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, ProductDetailComponent_div_2_div_21_Template, 15, 19, "div", 22)(22, ProductDetailComponent_div_2_div_22_Template, 28, 18, "div", 22)(23, ProductDetailComponent_div_2_div_23_Template, 6, 5, "div", 22)(24, ProductDetailComponent_div_2_div_24_Template, 5, 4, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(p_r7.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.statusClass(p_r7.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r7.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canEdit());
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "info");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "pricing");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "attributes");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r7.attributes == null ? null : p_r7.attributes.length);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.activeTab === "media");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r7.media == null ? null : p_r7.media.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "info");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "pricing");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "attributes");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "media");
  }
}
function ProductDetailComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 109);
    \u0275\u0275listener("click", function ProductDetailComponent_div_3_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteMedia());
    });
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 110)(1, "div", 111)(2, "div", 112)(3, "span", 113);
    \u0275\u0275text(4, "delete");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Delete Media?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "This ");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " will be permanently removed from Cloudinary.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 114)(13, "app-btn", 115);
    \u0275\u0275listener("clicked", function ProductDetailComponent_div_4_Template_app_btn_clicked_13_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteMedia());
    });
    \u0275\u0275text(14, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "app-btn", 116);
    \u0275\u0275listener("clicked", function ProductDetailComponent_div_4_Template_app_btn_clicked_15_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDeleteMedia());
    });
    \u0275\u0275text(16, "Delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.deleteConfirmMedia.mediaType.replace("_", " ").toLowerCase());
    \u0275\u0275advance(5);
    \u0275\u0275property("loading", ctx_r1.deletingMedia);
  }
}
var ProductDetailComponent = class _ProductDetailComponent {
  http;
  route;
  router;
  auth;
  EP = PRODUCT_ENDPOINTS;
  product = signal(null);
  loading = signal(true);
  notFound = false;
  activeTab = "info";
  // ── Info tab ──────────────────────────────────────────────────────────────
  categories = signal([]);
  brands = signal([]);
  infoForm = {
    name: "",
    slug: "",
    sku: "",
    barcode: "",
    shortDescription: "",
    description: "",
    categoryId: "",
    brandId: "",
    status: "DRAFT",
    tagsRaw: ""
  };
  infoSaving = false;
  infoSaved = false;
  infoError = "";
  // ── Pricing tab ───────────────────────────────────────────────────────────
  pricingForm = {
    priceRetail: 0,
    priceWholesale: null,
    priceBroker: null,
    minQtyWholesale: 10,
    gstPercent: 18,
    gstIncluded: false,
    stockQty: 0,
    weight: null,
    dimensions: ""
  };
  pricingSaving = false;
  pricingSaved = false;
  pricingError = "";
  // ── Attributes tab ────────────────────────────────────────────────────────
  attrDefs = [];
  attrValues = {};
  attrMultiValues = {};
  attrSaving = false;
  attrSaved = false;
  attrError = "";
  // ── Media tab ─────────────────────────────────────────────────────────────
  uploadFile = null;
  uploadMediaType = "IMAGE_GALLERY";
  uploadAltText = "";
  uploading = false;
  uploadError = "";
  deleteConfirmMedia = null;
  deletingMedia = false;
  mediaTypeOptions = [
    { value: "IMAGE_PRIMARY", label: "Primary Image" },
    { value: "IMAGE_GALLERY", label: "Gallery Image" },
    { value: "IMAGE_SPEC", label: "Spec Sheet" },
    { value: "VIDEO", label: "Video" }
  ];
  allStatuses = ["DRAFT", "ACTIVE", "INACTIVE", "DISCONTINUED"];
  // ── Computed ──────────────────────────────────────────────────────────────
  canEdit = computed(() => {
    const r = this.auth.currentUser()?.role;
    return r === "SUPER_ADMIN" || r === "ADMIN" || r === "INVENTORY";
  });
  get productId() {
    return this.route.snapshot.paramMap.get("id") ?? "";
  }
  get statusOpts() {
    return this.allStatuses.map((s) => ({ value: s, label: s }));
  }
  get categoryOpts() {
    const result = [];
    const flatten = (nodes, prefix = "") => {
      for (const n of nodes) {
        result.push({ value: n.id, label: prefix + n.name });
        if (n.children?.length)
          flatten(n.children, prefix + "\u2014 ");
      }
    };
    flatten(this.categories());
    return result;
  }
  get brandOpts() {
    return [{ value: "", label: "No brand" }, ...this.brands().map((b) => ({ value: b.id, label: b.name }))];
  }
  get mediaTypeOpts() {
    return this.mediaTypeOptions;
  }
  getAttrOpts(def) {
    return this.parsedOptions(def).map((o) => ({ value: o, label: o }));
  }
  constructor(http, route, router, auth) {
    this.http = http;
    this.route = route;
    this.router = router;
    this.auth = auth;
  }
  ngOnInit() {
    this.loadProduct();
    this.loadCategories();
    this.loadBrands();
  }
  // ── Load ──────────────────────────────────────────────────────────────────
  loadProduct() {
    this.loading.set(true);
    this.http.get(this.EP.BY_ID(this.productId)).subscribe({
      next: (res) => {
        const p = res.data;
        this.product.set(p);
        this.populateForms(p);
        this.loading.set(false);
        this.loadAttrDefs(p.categoryId, p.attributes);
      },
      error: () => {
        this.loading.set(false);
        this.notFound = true;
      }
    });
  }
  populateForms(p) {
    this.infoForm = {
      name: p.name,
      slug: p.slug,
      sku: p.sku,
      barcode: p.barcode ?? "",
      shortDescription: p.shortDescription ?? "",
      description: p.description ?? "",
      categoryId: p.categoryId,
      brandId: p.brandId ?? "",
      status: p.status,
      tagsRaw: (p.tags ?? []).join(", ")
    };
    this.pricingForm = {
      priceRetail: p.priceRetail,
      priceWholesale: p.priceWholesale,
      priceBroker: p.priceBroker,
      minQtyWholesale: p.minQtyWholesale,
      gstPercent: p.gstPercent,
      gstIncluded: p.gstIncluded,
      stockQty: p.stockQty,
      weight: p.weight,
      dimensions: p.dimensions ?? ""
    };
  }
  loadCategories() {
    this.http.get(this.EP.CATEGORIES_TREE).subscribe({
      next: (res) => this.categories.set(res.data ?? [])
    });
  }
  loadBrands() {
    this.http.get(this.EP.BRANDS + "?active=true&size=200").subscribe({
      next: (res) => this.brands.set(res.data?.content ?? [])
    });
  }
  loadAttrDefs(categoryId, existingAttrs) {
    this.http.get(this.EP.CATEGORY_ATTRS(categoryId)).subscribe({
      next: (res) => {
        this.attrDefs = res.data ?? [];
        this.attrValues = {};
        this.attrMultiValues = {};
        this.attrDefs.forEach((def) => {
          const existing = existingAttrs.find((a) => a.definitionId === def.id);
          if (def.fieldType === "MULTISELECT") {
            try {
              this.attrMultiValues[def.id] = existing ? JSON.parse(existing.value) : [];
            } catch {
              this.attrMultiValues[def.id] = [];
            }
          } else {
            this.attrValues[def.id] = existing?.value ?? def.defaultValue ?? "";
          }
        });
      }
    });
  }
  // ── Info save ─────────────────────────────────────────────────────────────
  saveInfo() {
    this.infoSaving = true;
    this.infoError = "";
    this.infoSaved = false;
    const tags = this.infoForm.tagsRaw.split(",").map((t) => t.trim()).filter(Boolean);
    const payload = {
      name: this.infoForm.name.trim() || null,
      slug: this.infoForm.slug.trim() || null,
      sku: this.infoForm.sku.trim() || null,
      barcode: this.infoForm.barcode.trim() || null,
      shortDescription: this.infoForm.shortDescription.trim() || null,
      description: this.infoForm.description.trim() || null,
      categoryId: this.infoForm.categoryId || null,
      brandId: this.infoForm.brandId || null,
      status: this.infoForm.status,
      tags: tags.length ? tags : null
    };
    this.http.patch(this.EP.BY_ID(this.productId), payload).subscribe({
      next: (res) => {
        this.infoSaving = false;
        this.infoSaved = true;
        if (res.data) {
          this.product.set(res.data);
          this.populateForms(res.data);
        }
        setTimeout(() => this.infoSaved = false, 2500);
      },
      error: (e) => {
        this.infoSaving = false;
        this.infoError = extractErrorMessage(e, "Save failed.");
      }
    });
  }
  // ── Pricing save ──────────────────────────────────────────────────────────
  savePricing() {
    this.pricingSaving = true;
    this.pricingError = "";
    this.pricingSaved = false;
    const payload = {
      priceRetail: this.pricingForm.priceRetail,
      priceWholesale: this.pricingForm.priceWholesale || null,
      priceBroker: this.pricingForm.priceBroker || null,
      minQtyWholesale: this.pricingForm.minQtyWholesale,
      gstPercent: this.pricingForm.gstPercent,
      gstIncluded: this.pricingForm.gstIncluded,
      stockQty: this.pricingForm.stockQty,
      weight: this.pricingForm.weight || null,
      dimensions: this.pricingForm.dimensions.trim() || null
    };
    this.http.patch(this.EP.BY_ID(this.productId), payload).subscribe({
      next: (res) => {
        this.pricingSaving = false;
        this.pricingSaved = true;
        if (res.data) {
          this.product.set(res.data);
        }
        setTimeout(() => this.pricingSaved = false, 2500);
      },
      error: (e) => {
        this.pricingSaving = false;
        this.pricingError = extractErrorMessage(e, "Save failed.");
      }
    });
  }
  // ── Attributes save ───────────────────────────────────────────────────────
  saveAttributes() {
    this.attrSaving = true;
    this.attrError = "";
    this.attrSaved = false;
    const attributes = this.attrDefs.map((d) => ({
      definitionId: d.id,
      value: d.fieldType === "MULTISELECT" ? JSON.stringify(this.attrMultiValues[d.id] ?? []) : this.attrValues[d.id] ?? ""
    }));
    this.http.put(this.EP.ATTRIBUTES(this.productId), { attributes }).subscribe({
      next: () => {
        this.attrSaving = false;
        this.attrSaved = true;
        setTimeout(() => this.attrSaved = false, 2500);
      },
      error: (e) => {
        this.attrSaving = false;
        this.attrError = extractErrorMessage(e, "Save failed.");
      }
    });
  }
  // ── Media upload ──────────────────────────────────────────────────────────
  onFileSelected(event) {
    const input = event.target;
    this.uploadFile = input.files?.[0] ?? null;
  }
  uploadMedia() {
    if (!this.uploadFile)
      return;
    this.uploading = true;
    this.uploadError = "";
    const fd = new FormData();
    fd.append("file", this.uploadFile);
    fd.append("mediaType", this.uploadMediaType);
    if (this.uploadAltText.trim())
      fd.append("altText", this.uploadAltText.trim());
    this.http.post(this.EP.MEDIA(this.productId), fd).subscribe({
      next: (res) => {
        if (res.data) {
          const p = this.product();
          if (p)
            this.product.set(__spreadProps(__spreadValues({}, p), { media: [...p.media, res.data] }));
        }
        this.uploading = false;
        this.uploadFile = null;
        this.uploadAltText = "";
        this.uploadMediaType = "IMAGE_GALLERY";
        const input = document.getElementById("media-upload-input");
        if (input)
          input.value = "";
      },
      error: (e) => {
        this.uploading = false;
        this.uploadError = extractErrorMessage(e, "Upload failed.");
      }
    });
  }
  openDeleteMedia(m) {
    this.deleteConfirmMedia = m;
  }
  closeDeleteMedia() {
    this.deleteConfirmMedia = null;
  }
  confirmDeleteMedia() {
    if (!this.deleteConfirmMedia)
      return;
    this.deletingMedia = true;
    this.http.delete(this.EP.MEDIA_BY_ID(this.productId, this.deleteConfirmMedia.id)).subscribe({
      next: () => {
        const removed = this.deleteConfirmMedia;
        const p = this.product();
        if (p)
          this.product.set(__spreadProps(__spreadValues({}, p), { media: p.media.filter((m) => m.id !== removed.id) }));
        this.deletingMedia = false;
        this.deleteConfirmMedia = null;
      },
      error: (e) => {
        this.deletingMedia = false;
        alert(extractErrorMessage(e, "Delete failed."));
      }
    });
  }
  // ── Status actions ────────────────────────────────────────────────────────
  setStatus(status) {
    this.http.patch(this.EP.BY_ID(this.productId), { status }).subscribe({
      next: (res) => {
        if (res.data) {
          this.product.set(res.data);
          this.populateForms(res.data);
        }
      },
      error: (e) => alert(extractErrorMessage(e, "Status update failed."))
    });
  }
  clone() {
    this.http.post(this.EP.CLONE(this.productId), {}).subscribe({
      next: (res) => {
        if (res.data?.id)
          this.router.navigate(["/products", res.data.id]);
      },
      error: (e) => alert(extractErrorMessage(e, "Clone failed."))
    });
  }
  // ── Helpers ───────────────────────────────────────────────────────────────
  back() {
    this.router.navigate(["/products"]);
  }
  parsedOptions(def) {
    if (!def.options)
      return [];
    try {
      return JSON.parse(def.options);
    } catch {
      return [];
    }
  }
  isMultiSelected(defId, option) {
    return (this.attrMultiValues[defId] ?? []).includes(option);
  }
  toggleMultiValue(defId, option) {
    const current = this.attrMultiValues[defId] ?? [];
    this.attrMultiValues[defId] = current.includes(option) ? current.filter((v) => v !== option) : [...current, option];
  }
  isVideo(mt) {
    return mt === "VIDEO";
  }
  inr(n) {
    if (!n)
      return "\u2014";
    return "\u20B9" + Number(n).toLocaleString("en-IN");
  }
  statusClass(s) {
    return { ACTIVE: "st-active", DRAFT: "st-draft", INACTIVE: "st-inactive", DISCONTINUED: "st-discontinued" }[s] ?? "";
  }
  static \u0275fac = function ProductDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductDetailComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductDetailComponent, selectors: [["app-product-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 5, consts: [["class", "detail-loading", 4, "ngIf"], ["class", "detail-notfound", 4, "ngIf"], ["class", "detail-page", 4, "ngIf"], ["class", "overlay", 3, "click", 4, "ngIf"], ["class", "modal modal-sm", 4, "ngIf"], [1, "detail-loading"], [1, "dl-spinner"], [1, "dl-text"], [1, "detail-notfound"], [1, "dnf-icon"], [1, "icon", "icon-xl", "icon-muted"], [1, "dnf-title"], ["variant", "ghost", "size", "sm", "icon", "arrow_back", 3, "clicked"], [1, "detail-page"], [1, "detail-topbar"], [1, "dt-center"], [1, "dt-name"], [1, "status-badge", 3, "ngClass"], ["class", "dt-actions", 4, "ngIf"], [1, "tabs"], [1, "tab-btn", 3, "click"], ["class", "tab-count", 4, "ngIf"], ["class", "tab-content", 4, "ngIf"], [1, "dt-actions"], ["variant", "ghost", "size", "sm", "icon", "content_copy", 3, "clicked"], ["variant", "primary", "size", "sm", 3, "clicked", 4, "ngIf"], ["variant", "danger", "size", "sm", 3, "clicked", 4, "ngIf"], ["variant", "primary", "size", "sm", 3, "clicked"], ["variant", "danger", "size", "sm", 3, "clicked"], [1, "tab-count"], [1, "tab-content"], ["class", "alert alert-error", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], [1, "form-grid"], ["label", "Product Name", 1, "span-2", 3, "valueChange", "required", "value"], ["label", "SKU", 3, "valueChange", "required", "value"], ["label", "Slug", 3, "valueChange", "value"], ["label", "Barcode", "optLabel", "EAN / UPC", 3, "valueChange", "value"], ["label", "Status", 3, "valueChange", "options", "value"], ["label", "Category", "placeholder", "Select category\u2026", 3, "valueChange", "options", "value"], ["label", "Brand", "placeholder", "No brand", 3, "valueChange", "options", "value"], ["label", "Short Description", "placeholder", "One-liner shown in listing", 1, "span-2", 3, "valueChange", "value"], ["label", "Description", 1, "span-2", 3, "valueChange", "value", "rows"], ["label", "Tags", "optLabel", "comma-separated", "placeholder", "e.g. TV, 4K, QLED", 1, "span-2", 3, "valueChange", "value"], ["class", "save-bar", 4, "ngIf"], [1, "alert", "alert-error"], [1, "icon", "icon-sm"], [1, "alert", "alert-success"], [1, "save-bar"], ["variant", "primary", 3, "clicked", "loading"], ["label", "Retail Price (\u20B9)", "type", "number", 3, "valueChange", "required", "value"], ["label", "Wholesale Price", "optLabel", "\u20B9", "type", "number", 3, "valueChange", "value"], ["label", "Broker Price", "optLabel", "\u20B9", "type", "number", 3, "valueChange", "value"], ["label", "Min Qty (Wholesale)", "type", "number", 3, "valueChange", "value"], ["label", "GST %", "type", "number", 3, "valueChange", "value"], ["label", "Stock Qty", "type", "number", 3, "valueChange", "value"], ["label", "Weight", "optLabel", "grams", "type", "number", 3, "valueChange", "value"], ["label", "Dimensions", "placeholder", "10\xD75\xD73 cm", 3, "valueChange", "value"], [1, "fg", "span-2"], ["label", "GST included in price", 3, "checkedChange", "checked"], [1, "price-summary"], [1, "ps-row"], ["class", "ps-row", 4, "ngIf"], ["class", "attr-empty", 4, "ngIf"], ["class", "form-grid", 4, "ngIf"], [1, "attr-empty"], ["class", "fg", 4, "ngFor", "ngForOf"], [1, "fg"], [3, "label", "optLabel", "required", "value", "placeholder", "valueChange", 4, "ngIf"], ["type", "number", 3, "label", "optLabel", "required", "value", "placeholder", "valueChange", 4, "ngIf"], ["class", "field", 4, "ngIf"], ["placeholder", "Select\u2026", 3, "label", "options", "required", "value", "valueChange", 4, "ngIf"], [3, "valueChange", "label", "optLabel", "required", "value", "placeholder"], ["type", "number", 3, "valueChange", "label", "optLabel", "required", "value", "placeholder"], [1, "field"], [1, "field-label"], ["label", "Yes", 3, "checkedChange", "checked"], ["placeholder", "Select\u2026", 3, "valueChange", "label", "options", "required", "value"], [1, "multi-check-group"], [3, "label", "checked", "checkedChange", 4, "ngFor", "ngForOf"], [3, "checkedChange", "label", "checked"], ["class", "media-grid", 4, "ngIf"], ["class", "media-empty", 4, "ngIf"], ["class", "upload-section", 4, "ngIf"], [1, "media-grid"], ["class", "media-card", 4, "ngFor", "ngForOf"], [1, "media-card"], [1, "mc-thumb"], [3, "src", "alt", 4, "ngIf"], ["class", "mc-video-icon", 4, "ngIf"], [1, "mc-info"], [1, "mc-type-badge", 3, "ngClass"], ["class", "mc-alt", 4, "ngIf"], ["class", "mc-delete", "title", "Delete", 3, "click", 4, "ngIf"], [3, "src", "alt"], [1, "mc-video-icon"], [1, "icon", "icon-lg", "icon-muted"], [1, "mc-alt"], ["title", "Delete", 1, "mc-delete", 3, "click"], [1, "icon", "icon-xs"], [1, "media-empty"], [1, "upload-section"], [1, "us-title"], ["label", "Media Type", 3, "valueChange", "options", "value"], ["label", "Alt Text", "optLabel", "optional", "placeholder", "Image description", 3, "valueChange", "value"], [1, "upload-row"], [1, "upload-file-label"], ["id", "media-upload-input", "type", "file", "accept", "image/*,video/*", 3, "change"], ["variant", "primary", 3, "clicked", "loading", "disabled"], [1, "overlay", 3, "click"], [1, "modal", "modal-sm"], [1, "confirm-body"], [1, "confirm-icon", "danger"], [1, "icon", "icon-lg"], [1, "modal-ft"], ["variant", "ghost", 3, "clicked"], ["variant", "danger", 3, "clicked", "loading"]], template: function ProductDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ProductDetailComponent_div_0_Template, 4, 0, "div", 0)(1, ProductDetailComponent_div_1_Template, 8, 0, "div", 1)(2, ProductDetailComponent_div_2_Template, 25, 18, "div", 2)(3, ProductDetailComponent_div_3_Template, 1, 0, "div", 3)(4, ProductDetailComponent_div_4_Template, 17, 2, "div", 4);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.notFound);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && !ctx.notFound && ctx.product());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.deleteConfirmMedia);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.deleteConfirmMedia);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, AppInputComponent, AppSelectComponent, AppTextareaComponent, AppCheckboxComponent, AppBtnComponent], styles: ["\n\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.detail-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 60vh;\n  gap: 16px;\n}\n.detail-loading[_ngcontent-%COMP%]   .dl-spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid var(--border);\n  border-top-color: var(--blue);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.detail-loading[_ngcontent-%COMP%]   .dl-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--t3);\n}\n.detail-notfound[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 50vh;\n  gap: 14px;\n}\n.detail-notfound[_ngcontent-%COMP%]   .dnf-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--t2);\n}\n.detail-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n}\n.detail-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 20px;\n  border-bottom: 1px solid var(--border);\n  background: var(--surface);\n  flex-shrink: 0;\n  gap: 16px;\n}\n.detail-topbar[_ngcontent-%COMP%]   .dt-center[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n  min-width: 0;\n}\n.detail-topbar[_ngcontent-%COMP%]   .dt-center[_ngcontent-%COMP%]   h1.dt-name[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--t1);\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.detail-topbar[_ngcontent-%COMP%]   .dt-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 3px 9px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.status-badge.st-active[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.12);\n  color: #16A34A;\n}\n.status-badge.st-draft[_ngcontent-%COMP%] {\n  background: rgba(107, 114, 128, 0.12);\n  color: #6B7280;\n}\n.status-badge.st-inactive[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #DC2626;\n}\n.status-badge.st-discontinued[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.12);\n  color: #7C3AED;\n}\n.tabs[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  background: var(--surface);\n  flex-shrink: 0;\n}\n.tab-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-grid[_ngcontent-%COMP%]   .span-2[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.form-grid[_ngcontent-%COMP%]   .fg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.save-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 12px;\n  border-top: 1px solid var(--border);\n}\n.price-summary[_ngcontent-%COMP%] {\n  background: var(--surface2);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 14px 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.price-summary[_ngcontent-%COMP%]   .ps-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 13px;\n}\n.price-summary[_ngcontent-%COMP%]   .ps-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--t3);\n}\n.price-summary[_ngcontent-%COMP%]   .ps-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--t1);\n  font-weight: 700;\n}\n.attr-empty[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--t3);\n  line-height: 1.6;\n  padding: 20px 0;\n}\n.attr-empty[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--t1);\n}\n.req-star[_ngcontent-%COMP%] {\n  color: var(--red);\n}\n.multi-check-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.multi-check-group[_ngcontent-%COMP%]   .check-label[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  background: var(--hover);\n  border-radius: 6px;\n}\n.media-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));\n  gap: 12px;\n}\n.media-card[_ngcontent-%COMP%] {\n  position: relative;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  background: var(--hover);\n}\n.media-card[_ngcontent-%COMP%]   .mc-thumb[_ngcontent-%COMP%] {\n  aspect-ratio: 4/3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.media-card[_ngcontent-%COMP%]   .mc-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.media-card[_ngcontent-%COMP%]   .mc-thumb[_ngcontent-%COMP%]   .mc-video-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.media-card[_ngcontent-%COMP%]   .mc-info[_ngcontent-%COMP%] {\n  padding: 6px 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.media-card[_ngcontent-%COMP%]   .mc-info[_ngcontent-%COMP%]   .mc-alt[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--t3);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.media-card[_ngcontent-%COMP%]   .mc-type-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  padding: 2px 6px;\n  border-radius: 4px;\n  align-self: flex-start;\n}\n.media-card[_ngcontent-%COMP%]   .mc-type-badge.mt-image_primary[_ngcontent-%COMP%] {\n  background: rgba(40, 116, 240, 0.12);\n  color: var(--blue);\n}\n.media-card[_ngcontent-%COMP%]   .mc-type-badge.mt-image_gallery[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.12);\n  color: #16A34A;\n}\n.media-card[_ngcontent-%COMP%]   .mc-type-badge.mt-image_spec[_ngcontent-%COMP%] {\n  background: rgba(234, 179, 8, 0.15);\n  color: #B45309;\n}\n.media-card[_ngcontent-%COMP%]   .mc-type-badge.mt-video[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.12);\n  color: #7C3AED;\n}\n.media-card[_ngcontent-%COMP%]   .mc-delete[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n  border: none;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n  display: none;\n  align-items: center;\n  justify-content: center;\n}\n.media-card[_ngcontent-%COMP%]:hover   .mc-delete[_ngcontent-%COMP%] {\n  display: flex;\n}\n.media-empty[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--t3);\n  padding: 8px 0;\n}\n.upload-section[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--border);\n  padding-top: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.upload-section[_ngcontent-%COMP%]   .us-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--t2);\n}\n.upload-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.upload-row[_ngcontent-%COMP%]   .upload-file-label[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  background: var(--input-bg);\n  border: 1.5px solid var(--border);\n  border-radius: var(--radius);\n  padding: 9px 12px;\n  cursor: pointer;\n  font-size: 13px;\n  color: var(--t2);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.upload-row[_ngcontent-%COMP%]   .upload-file-label[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n.upload-row[_ngcontent-%COMP%]   .upload-file-label[_ngcontent-%COMP%]:hover {\n  background: var(--hover);\n}\n@media (max-width: 768px) {\n  .detail-topbar[_ngcontent-%COMP%] {\n    padding: 10px 14px;\n    flex-wrap: wrap;\n  }\n  .tab-content[_ngcontent-%COMP%] {\n    padding: 14px 16px;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-grid[_ngcontent-%COMP%]   .span-2[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n}\n/*# sourceMappingURL=product-detail.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductDetailComponent, { className: "ProductDetailComponent", filePath: "src\\app\\pages\\product-detail\\product-detail.component.ts", lineNumber: 65 });
})();
export {
  ProductDetailComponent
};
//# sourceMappingURL=chunk-JG6SJG4L.js.map
