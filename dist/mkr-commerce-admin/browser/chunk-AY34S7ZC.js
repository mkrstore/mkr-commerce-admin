import {
  ProductApiService
} from "./chunk-RJYROQ3Y.js";
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
  PRODUCT_ENDPOINTS
} from "./chunk-O3NE7GYO.js";
import {
  HttpClient,
  Router
} from "./chunk-CADB6C7J.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-MBTJ2QPL.js";
import {
  finalize,
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
  ɵɵresolveWindow,
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

// src/app/pages/product-new/product-new.component.ts
var _c0 = () => [1, 2, 3];
function ProductNewComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275listener("click", function ProductNewComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showDiscard = false);
    });
    \u0275\u0275elementEnd();
  }
}
function ProductNewComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275listener("click", function ProductNewComponent_div_1_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 23)(2, "div", 24)(3, "span", 25);
    \u0275\u0275text(4, "edit_off");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Leave without finishing?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "This product was saved as a ");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10, "Draft");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, ". You can keep it to continue later, or delete it now.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 26)(13, "app-btn", 27);
    \u0275\u0275listener("clicked", function ProductNewComponent_div_1_Template_app_btn_clicked_13_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showDiscard = false);
    });
    \u0275\u0275text(14, "Keep Editing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "app-btn", 28);
    \u0275\u0275listener("clicked", function ProductNewComponent_div_1_Template_app_btn_clicked_15_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.discardAsDraft());
    });
    \u0275\u0275text(16, "Save as Draft & Leave");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "app-btn", 29);
    \u0275\u0275listener("clicked", function ProductNewComponent_div_1_Template_app_btn_clicked_17_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275text(18, "Delete & Leave");
    \u0275\u0275elementEnd()()();
  }
}
function ProductNewComponent_ng_container_18_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function ProductNewComponent_ng_container_18_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r4 = \u0275\u0275nextContext().index;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r4 + 1);
  }
}
function ProductNewComponent_ng_container_18_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 36);
  }
}
function ProductNewComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 30)(2, "div", 31);
    \u0275\u0275template(3, ProductNewComponent_ng_container_18_span_3_Template, 2, 0, "span", 32)(4, ProductNewComponent_ng_container_18_span_4_Template, 2, 1, "span", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 33);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, ProductNewComponent_ng_container_18_div_7_Template, 1, 0, "div", 34);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active", i_r4 + 1 === ctx_r1.step)("done", i_r4 + 1 < ctx_r1.step);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", i_r4 + 1 < ctx_r1.step);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r4 + 1 >= ctx_r1.step);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r5.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r4 < ctx_r1.steps.length - 1);
  }
}
function ProductNewComponent_ng_container_20_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "span", 5);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function ProductNewComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 37)(2, "div", 38);
    \u0275\u0275text(3, "Basic Information");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ProductNewComponent_ng_container_20_div_4_Template, 4, 1, "div", 39);
    \u0275\u0275elementStart(5, "app-input", 40);
    \u0275\u0275listener("valueChange", function ProductNewComponent_ng_container_20_Template_app_input_valueChange_5_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.step1.name = $event);
    })("blur", function ProductNewComponent_ng_container_20_Template_app_input_blur_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.autoSku());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "app-input", 41);
    \u0275\u0275listener("valueChange", function ProductNewComponent_ng_container_20_Template_app_input_valueChange_6_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.step1.sku = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 42)(8, "app-select", 43);
    \u0275\u0275listener("valueChange", function ProductNewComponent_ng_container_20_Template_app_select_valueChange_8_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCategoryChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "app-select", 44);
    \u0275\u0275listener("valueChange", function ProductNewComponent_ng_container_20_Template_app_select_valueChange_9_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.step1.brandId = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "app-textarea", 45);
    \u0275\u0275listener("valueChange", function ProductNewComponent_ng_container_20_Template_app_textarea_valueChange_10_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.step1.shortDescription = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "app-textarea", 46);
    \u0275\u0275listener("valueChange", function ProductNewComponent_ng_container_20_Template_app_textarea_valueChange_11_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.step1.description = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance();
    \u0275\u0275property("required", true)("touched", ctx_r1.touched)("value", ctx_r1.step1.name);
    \u0275\u0275advance();
    \u0275\u0275property("required", true)("touched", ctx_r1.touched)("value", ctx_r1.step1.sku);
    \u0275\u0275advance(2);
    \u0275\u0275property("required", true)("touched", ctx_r1.touched)("options", ctx_r1.categoryOpts)("value", ctx_r1.step1.categoryId);
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r1.brandOpts)("value", ctx_r1.step1.brandId);
    \u0275\u0275advance();
    \u0275\u0275property("rows", 2)("value", ctx_r1.step1.shortDescription);
    \u0275\u0275advance();
    \u0275\u0275property("rows", 4)("value", ctx_r1.step1.description);
  }
}
function ProductNewComponent_ng_container_21_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "span", 5);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function ProductNewComponent_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 37)(2, "div", 38);
    \u0275\u0275text(3, "Pricing & Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ProductNewComponent_ng_container_21_div_4_Template, 4, 1, "div", 39);
    \u0275\u0275elementStart(5, "div", 48)(6, "div", 49)(7, "div", 50);
    \u0275\u0275text(8, "Retail Price \u20B9 ");
    \u0275\u0275elementStart(9, "span", 51);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 52);
    \u0275\u0275text(12, "Walk-in customer price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "app-input", 53);
    \u0275\u0275listener("valueChange", function ProductNewComponent_ng_container_21_Template_app_input_valueChange_13_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.step2.priceRetail = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 54)(15, "div", 50);
    \u0275\u0275text(16, "Wholesale Price \u20B9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 52);
    \u0275\u0275text(18, "For bulk buyers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "app-input", 55);
    \u0275\u0275listener("valueChange", function ProductNewComponent_ng_container_21_Template_app_input_valueChange_19_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.step2.priceWholesale = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 54)(21, "div", 50);
    \u0275\u0275text(22, "Broker Price \u20B9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 52);
    \u0275\u0275text(24, "For brokers / dealers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "app-input", 55);
    \u0275\u0275listener("valueChange", function ProductNewComponent_ng_container_21_Template_app_input_valueChange_25_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.step2.priceBroker = $event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 42)(27, "app-select", 56);
    \u0275\u0275listener("valueChange", function ProductNewComponent_ng_container_21_Template_app_select_valueChange_27_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.step2.gstPercent = +$event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "app-input", 57);
    \u0275\u0275listener("valueChange", function ProductNewComponent_ng_container_21_Template_app_input_valueChange_28_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.step2.stockQty = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "app-checkbox", 58);
    \u0275\u0275listener("checkedChange", function ProductNewComponent_ng_container_21_Template_app_checkbox_checkedChange_29_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.step2.gstIncluded = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance(9);
    \u0275\u0275property("minVal", 1)("required", true)("touched", ctx_r1.touched)("value", ctx_r1.step2.priceRetail);
    \u0275\u0275advance(6);
    \u0275\u0275property("minVal", 1)("value", ctx_r1.step2.priceWholesale);
    \u0275\u0275advance(6);
    \u0275\u0275property("minVal", 1)("value", ctx_r1.step2.priceBroker);
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r1.gstOpts)("value", ctx_r1.step2.gstPercent);
    \u0275\u0275advance();
    \u0275\u0275property("minVal", 0)("value", ctx_r1.step2.stockQty);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.step2.gstIncluded);
  }
}
function ProductNewComponent_ng_container_22_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "span", 5);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function ProductNewComponent_ng_container_22_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 64);
  }
}
function ProductNewComponent_ng_container_22_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275template(1, ProductNewComponent_ng_container_22_div_7_div_1_Template, 1, 0, "div", 63);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function ProductNewComponent_ng_container_22_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "div", 66)(2, "span", 67);
    \u0275\u0275text(3, "tune");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 68);
    \u0275\u0275text(5, "No spec fields for this category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 69);
    \u0275\u0275text(7, " You can add spec fields (like RAM, Battery, Screen Size) to this category in the ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9, "Categories");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " settings, then come back to fill them in. ");
    \u0275\u0275elementEnd()();
  }
}
function ProductNewComponent_ng_container_22_ng_container_9_ng_container_1_app_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-input", 74);
    \u0275\u0275listener("valueChange", function ProductNewComponent_ng_container_22_ng_container_9_ng_container_1_app_input_1_Template_app_input_valueChange_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const attr_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.attrValues[attr_r9.id] = $event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    const attr_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("label", attr_r9.label + (attr_r9.unit ? " (" + attr_r9.unit + ")" : ""))("type", attr_r9.fieldType === "NUMBER" ? "number" : "text")("required", attr_r9.required)("touched", ctx_r1.touched)("value", ctx_r1.attrValues[attr_r9.id])("placeholder", (tmp_10_0 = attr_r9.defaultValue) !== null && tmp_10_0 !== void 0 ? tmp_10_0 : "");
  }
}
function ProductNewComponent_ng_container_22_ng_container_9_ng_container_1_app_checkbox_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-checkbox", 75);
    \u0275\u0275listener("checkedChange", function ProductNewComponent_ng_container_22_ng_container_9_ng_container_1_app_checkbox_2_Template_app_checkbox_checkedChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const attr_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.attrValues[attr_r9.id] = $event ? "true" : "false");
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attr_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("label", attr_r9.label)("checked", ctx_r1.attrValues[attr_r9.id] === "true");
  }
}
function ProductNewComponent_ng_container_22_ng_container_9_ng_container_1_app_select_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-select", 76);
    \u0275\u0275listener("valueChange", function ProductNewComponent_ng_container_22_ng_container_9_ng_container_1_app_select_3_Template_app_select_valueChange_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const attr_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.attrValues[attr_r9.id] = $event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attr_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("label", attr_r9.label + (attr_r9.unit ? " (" + attr_r9.unit + ")" : ""))("options", ctx_r1.getSelectOpts(attr_r9))("required", attr_r9.required)("touched", ctx_r1.touched)("value", ctx_r1.attrValues[attr_r9.id]);
  }
}
function ProductNewComponent_ng_container_22_ng_container_9_ng_container_1_div_4_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attr_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", attr_r9.unit, ")");
  }
}
function ProductNewComponent_ng_container_22_ng_container_9_ng_container_1_div_4_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ProductNewComponent_ng_container_22_ng_container_9_ng_container_1_div_4_label_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "check_box");
    \u0275\u0275elementEnd();
  }
}
function ProductNewComponent_ng_container_22_ng_container_9_ng_container_1_div_4_label_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "check_box_outline_blank");
    \u0275\u0275elementEnd();
  }
}
function ProductNewComponent_ng_container_22_ng_container_9_ng_container_1_div_4_label_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 83);
    \u0275\u0275listener("click", function ProductNewComponent_ng_container_22_ng_container_9_ng_container_1_div_4_label_6_Template_label_click_0_listener() {
      const opt_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const attr_r9 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleMulti(attr_r9, opt_r13));
    });
    \u0275\u0275template(1, ProductNewComponent_ng_container_22_ng_container_9_ng_container_1_div_4_label_6_span_1_Template, 2, 0, "span", 32)(2, ProductNewComponent_ng_container_22_ng_container_9_ng_container_1_div_4_label_6_span_2_Template, 2, 0, "span", 32);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r13 = ctx.$implicit;
    const attr_r9 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r1.isMultiSelected(attr_r9, opt_r13));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isMultiSelected(attr_r9, opt_r13));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isMultiSelected(attr_r9, opt_r13));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r13, " ");
  }
}
function ProductNewComponent_ng_container_22_ng_container_9_ng_container_1_div_4_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attr_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Unit: ", attr_r9.unit, "");
  }
}
function ProductNewComponent_ng_container_22_ng_container_9_ng_container_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77)(1, "label", 78);
    \u0275\u0275text(2);
    \u0275\u0275template(3, ProductNewComponent_ng_container_22_ng_container_9_ng_container_1_div_4_span_3_Template, 2, 1, "span", 14)(4, ProductNewComponent_ng_container_22_ng_container_9_ng_container_1_div_4_span_4_Template, 2, 0, "span", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 80);
    \u0275\u0275template(6, ProductNewComponent_ng_container_22_ng_container_9_ng_container_1_div_4_label_6_Template, 4, 5, "label", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ProductNewComponent_ng_container_22_ng_container_9_ng_container_1_div_4_div_7_Template, 2, 1, "div", 82);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attr_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", attr_r9.label, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", attr_r9.unit);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", attr_r9.required);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.parsedOptions(attr_r9));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", attr_r9.unit);
  }
}
function ProductNewComponent_ng_container_22_ng_container_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ProductNewComponent_ng_container_22_ng_container_9_ng_container_1_app_input_1_Template, 1, 6, "app-input", 70)(2, ProductNewComponent_ng_container_22_ng_container_9_ng_container_1_app_checkbox_2_Template, 1, 2, "app-checkbox", 71)(3, ProductNewComponent_ng_container_22_ng_container_9_ng_container_1_app_select_3_Template, 1, 5, "app-select", 72)(4, ProductNewComponent_ng_container_22_ng_container_9_ng_container_1_div_4_Template, 8, 5, "div", 73);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const attr_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", attr_r9.fieldType === "TEXT" || attr_r9.fieldType === "NUMBER");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", attr_r9.fieldType === "BOOLEAN");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", attr_r9.fieldType === "SELECT");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", attr_r9.fieldType === "MULTISELECT");
  }
}
function ProductNewComponent_ng_container_22_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ProductNewComponent_ng_container_22_ng_container_9_ng_container_1_Template, 5, 4, "ng-container", 12);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.attrDefs);
  }
}
function ProductNewComponent_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 37)(2, "div", 38);
    \u0275\u0275text(3, " Spec Fields ");
    \u0275\u0275elementStart(4, "span", 59);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, ProductNewComponent_ng_container_22_div_6_Template, 4, 1, "div", 39)(7, ProductNewComponent_ng_container_22_div_7_Template, 2, 2, "div", 60)(8, ProductNewComponent_ng_container_22_div_8_Template, 11, 0, "div", 61)(9, ProductNewComponent_ng_container_22_ng_container_9_Template, 2, 1, "ng-container", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.step1.categoryId ? "" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.attrLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.attrLoading && ctx_r1.attrDefs.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.attrLoading && ctx_r1.attrDefs.length > 0);
  }
}
function ProductNewComponent_ng_container_23_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 94);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.variants.length);
  }
}
function ProductNewComponent_ng_container_23_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "span", 5);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.variantError, " ");
  }
}
function ProductNewComponent_ng_container_23_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "span", 5);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function ProductNewComponent_ng_container_23_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 97)(1, "div", 98)(2, "div", 99);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 100);
    \u0275\u0275listener("click", function ProductNewComponent_ng_container_23_div_12_div_1_Template_button_click_4_listener() {
      const i_r16 = \u0275\u0275restoreView(_r15).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeVariant(i_r16));
    });
    \u0275\u0275elementStart(5, "span", 5);
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 42)(8, "div", 77)(9, "label", 78);
    \u0275\u0275text(10, "Colour Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 101)(12, "input", 102);
    \u0275\u0275twoWayListener("ngModelChange", function ProductNewComponent_ng_container_23_div_12_div_1_Template_input_ngModelChange_12_listener($event) {
      const v_r17 = \u0275\u0275restoreView(_r15).$implicit;
      \u0275\u0275twoWayBindingSet(v_r17.colorHex, $event) || (v_r17.colorHex = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 103);
    \u0275\u0275twoWayListener("ngModelChange", function ProductNewComponent_ng_container_23_div_12_div_1_Template_input_ngModelChange_13_listener($event) {
      const v_r17 = \u0275\u0275restoreView(_r15).$implicit;
      \u0275\u0275twoWayBindingSet(v_r17.colorName, $event) || (v_r17.colorName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "app-input", 104);
    \u0275\u0275listener("valueChange", function ProductNewComponent_ng_container_23_div_12_div_1_Template_app_input_valueChange_14_listener($event) {
      const v_r17 = \u0275\u0275restoreView(_r15).$implicit;
      return \u0275\u0275resetView(v_r17.size = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 42)(16, "app-input", 105);
    \u0275\u0275listener("valueChange", function ProductNewComponent_ng_container_23_div_12_div_1_Template_app_input_valueChange_16_listener($event) {
      const v_r17 = \u0275\u0275restoreView(_r15).$implicit;
      return \u0275\u0275resetView(v_r17.priceOverride = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "app-input", 106);
    \u0275\u0275listener("valueChange", function ProductNewComponent_ng_container_23_div_12_div_1_Template_app_input_valueChange_17_listener($event) {
      const v_r17 = \u0275\u0275restoreView(_r15).$implicit;
      return \u0275\u0275resetView(v_r17.stockQty = $event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const v_r17 = ctx.$implicit;
    const i_r16 = ctx.index;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Variant ", i_r16 + 1, "");
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", v_r17.colorHex);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", v_r17.colorName);
    \u0275\u0275advance();
    \u0275\u0275property("value", v_r17.size);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", v_r17.priceOverride);
    \u0275\u0275advance();
    \u0275\u0275property("minVal", 0)("value", v_r17.stockQty);
  }
}
function ProductNewComponent_ng_container_23_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95);
    \u0275\u0275template(1, ProductNewComponent_ng_container_23_div_12_div_1_Template, 18, 7, "div", 96);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.variants);
  }
}
function ProductNewComponent_ng_container_23_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91)(1, "span", 107);
    \u0275\u0275text(2, "palette");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 108);
    \u0275\u0275text(4, "No variants \u2014 single product listing");
    \u0275\u0275elementEnd()();
  }
}
function ProductNewComponent_ng_container_23_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91)(1, "span", 87);
    \u0275\u0275text(2, "palette");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r1.variants.length, " variant", ctx_r1.variants.length > 1 ? "s" : "", " will be added");
  }
}
function ProductNewComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 37)(2, "div", 38);
    \u0275\u0275text(3, " Product Variants ");
    \u0275\u0275template(4, ProductNewComponent_ng_container_23_span_4_Template, 2, 1, "span", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 86)(6, "span", 87);
    \u0275\u0275text(7, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "Add variants if this product comes in different sizes, storage options, or colours \u2014 e.g. Realme 15 Pro in 6GB+128GB Blue and 8GB+256GB Black. Each variant has its own stock and optional price.");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, ProductNewComponent_ng_container_23_div_10_Template, 4, 1, "div", 39)(11, ProductNewComponent_ng_container_23_div_11_Template, 4, 1, "div", 39)(12, ProductNewComponent_ng_container_23_div_12_Template, 2, 1, "div", 88);
    \u0275\u0275elementStart(13, "button", 89);
    \u0275\u0275listener("click", function ProductNewComponent_ng_container_23_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addVariant());
    });
    \u0275\u0275elementStart(14, "span", 5);
    \u0275\u0275text(15, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " Add Variant ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 90)(18, "div", 91)(19, "span", 87);
    \u0275\u0275text(20, "inventory_2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span")(22, "strong");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " will be published as ");
    \u0275\u0275elementStart(25, "span", 92);
    \u0275\u0275text(26, "Active");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(27, ProductNewComponent_ng_container_23_div_27_Template, 5, 0, "div", 93)(28, ProductNewComponent_ng_container_23_div_28_Template, 5, 2, "div", 93);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.variants.length > 0);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.variantError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.variants.length > 0);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.step1.name || "Product");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.variants.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.variants.length > 0);
  }
}
function ProductNewComponent_app_btn_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-btn", 16);
    \u0275\u0275listener("clicked", function ProductNewComponent_app_btn_28_Template_app_btn_clicked_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.skipToNext());
    });
    \u0275\u0275text(1, "Skip");
    \u0275\u0275elementEnd();
  }
}
function ProductNewComponent_app_btn_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-btn", 109);
    \u0275\u0275listener("clicked", function ProductNewComponent_app_btn_29_Template_app_btn_clicked_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.publish());
    });
    \u0275\u0275text(1, " Publish without variants ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("loading", ctx_r1.saving);
  }
}
var ProductNewComponent = class _ProductNewComponent {
  router;
  http;
  productApi;
  // ── Wizard state ──────────────────────────────────────────────────────────
  step = 1;
  productId = "";
  saving = false;
  error = "";
  touched = false;
  // ── Reference data ────────────────────────────────────────────────────────
  categories = [];
  brands = [];
  // ── Step 1 ────────────────────────────────────────────────────────────────
  step1 = {
    name: "",
    sku: "",
    categoryId: "",
    brandId: "",
    shortDescription: "",
    description: ""
  };
  // ── Step 2 ────────────────────────────────────────────────────────────────
  step2 = {
    priceRetail: null,
    priceWholesale: null,
    priceBroker: null,
    gstPercent: 18,
    gstIncluded: false,
    stockQty: 0
  };
  // ── Step 3 — attributes ───────────────────────────────────────────────────
  attrDefs = [];
  attrLoading = false;
  attrValues = {};
  // TEXT / NUMBER / SELECT / BOOLEAN
  attrMulti = {};
  // MULTISELECT
  // ── Step 4 — variants ─────────────────────────────────────────────────────
  variants = [];
  variantError = "";
  // ── Discard modal ─────────────────────────────────────────────────────────
  showDiscard = false;
  constructor(router, http, productApi) {
    this.router = router;
    this.http = http;
    this.productApi = productApi;
  }
  ngOnInit() {
    this.productApi.listCategories().subscribe((c) => this.categories = c);
    this.productApi.listBrands().subscribe((b) => this.brands = b);
  }
  // ── Select options ────────────────────────────────────────────────────────
  get categoryOpts() {
    const parents = this.categories.filter((c) => !c.parentName);
    const result = [];
    for (const p of parents) {
      const children = this.categories.filter((c) => c.parentName === p.name);
      if (children.length)
        children.forEach((c) => result.push({ value: c.id, label: `${p.name} \u203A ${c.name}` }));
      else
        result.push({ value: p.id, label: p.name });
    }
    return result;
  }
  get brandOpts() {
    return [{ value: "", label: "No brand" }, ...this.brands.map((b) => ({ value: b.id, label: b.name }))];
  }
  get gstOpts() {
    return [
      { value: 0, label: "0% \u2014 Exempt" },
      { value: 5, label: "5%" },
      { value: 12, label: "12%" },
      { value: 18, label: "18% (default)" },
      { value: 28, label: "28%" }
    ];
  }
  get steps() {
    return [
      { label: "Basic Info", icon: "description" },
      { label: "Pricing", icon: "payments" },
      { label: "Spec Fields", icon: "tune" },
      { label: "Variants", icon: "palette" }
    ];
  }
  // ── Auto-generate SKU ─────────────────────────────────────────────────────
  autoSku() {
    if (!this.step1.name.trim() || this.step1.sku)
      return;
    this.step1.sku = this.step1.name.toUpperCase().replace(/[^A-Z0-9\s]/g, "").trim().split(/\s+/).slice(0, 4).map((w) => w.slice(0, 3)).join("-");
  }
  // ── Category change → load attrs ──────────────────────────────────────────
  onCategoryChange(catId) {
    this.step1.categoryId = catId;
    this.attrDefs = [];
    this.attrValues = {};
    this.attrMulti = {};
    if (!catId)
      return;
    this.attrLoading = true;
    this.http.get(PRODUCT_ENDPOINTS.CATEGORY_ATTRS(catId)).pipe(finalize(() => this.attrLoading = false)).subscribe({
      next: (res) => {
        this.attrDefs = (res.data ?? []).sort((a, b) => a.sortOrder - b.sortOrder);
        for (const d of this.attrDefs) {
          if (d.fieldType === "MULTISELECT")
            this.attrMulti[d.id] = [];
          else if (d.fieldType === "BOOLEAN")
            this.attrValues[d.id] = "false";
          else
            this.attrValues[d.id] = d.defaultValue ?? "";
        }
      }
    });
  }
  parsedOptions(attr) {
    if (!attr.options)
      return [];
    try {
      return JSON.parse(attr.options);
    } catch {
      return [];
    }
  }
  isMultiSelected(attr, opt) {
    return (this.attrMulti[attr.id] ?? []).includes(opt);
  }
  toggleMulti(attr, opt) {
    const arr = this.attrMulti[attr.id] ?? [];
    const idx = arr.indexOf(opt);
    if (idx === -1)
      arr.push(opt);
    else
      arr.splice(idx, 1);
    this.attrMulti[attr.id] = arr;
  }
  getSelectOpts(attr) {
    return this.parsedOptions(attr).map((o) => ({ value: o, label: o }));
  }
  // ── Step navigation ───────────────────────────────────────────────────────
  back() {
    this.error = "";
    if (this.step === 1) {
      this.tryDiscard();
      return;
    }
    this.step--;
  }
  next() {
    this.error = "";
    if (this.step === 1)
      this.submitStep1();
    else if (this.step === 2)
      this.submitStep2();
    else if (this.step === 3)
      this.submitStep3();
    else if (this.step === 4)
      this.publish();
  }
  skipToNext() {
    this.error = "";
    this.step++;
  }
  // ── Step 1: Create product ────────────────────────────────────────────────
  submitStep1() {
    this.touched = true;
    if (!this.step1.name.trim() || !this.step1.sku.trim() || !this.step1.categoryId) {
      this.error = "Product name, SKU, and Category are required.";
      return;
    }
    if (this.productId) {
      this.step = 2;
      this.touched = false;
      return;
    }
    this.saving = true;
    this.http.post(PRODUCT_ENDPOINTS.BASE, {
      name: this.step1.name.trim(),
      sku: this.step1.sku.trim().toUpperCase(),
      categoryId: this.step1.categoryId,
      brandId: this.step1.brandId || null,
      shortDescription: this.step1.shortDescription.trim() || null,
      description: this.step1.description.trim() || null
    }).pipe(finalize(() => this.saving = false)).subscribe({
      next: (res) => {
        this.productId = res.data?.id;
        this.step = 2;
        this.touched = false;
      },
      error: (e) => this.error = extractErrorMessage(e)
    });
  }
  // ── Step 2: Pricing ───────────────────────────────────────────────────────
  submitStep2() {
    this.touched = true;
    if (!this.step2.priceRetail || this.step2.priceRetail <= 0) {
      this.error = "Retail price is required.";
      return;
    }
    this.saving = true;
    this.http.patch(PRODUCT_ENDPOINTS.BY_ID(this.productId), {
      priceRetail: this.step2.priceRetail,
      priceWholesale: this.step2.priceWholesale || null,
      priceBroker: this.step2.priceBroker || null,
      gstPercent: this.step2.gstPercent,
      gstIncluded: this.step2.gstIncluded,
      stockQty: this.step2.stockQty
    }).pipe(finalize(() => this.saving = false)).subscribe({
      next: () => {
        this.touched = false;
        this.step = this.attrDefs.length > 0 ? 3 : 4;
      },
      error: (e) => this.error = extractErrorMessage(e)
    });
  }
  // ── Step 3: Attribute values ──────────────────────────────────────────────
  submitStep3() {
    const missing = this.attrDefs.filter((d) => {
      if (!d.required)
        return false;
      if (d.fieldType === "MULTISELECT")
        return (this.attrMulti[d.id] ?? []).length === 0;
      if (d.fieldType === "BOOLEAN")
        return false;
      return !this.attrValues[d.id]?.trim();
    });
    if (missing.length) {
      this.error = `Required: ${missing.map((d) => d.label).join(", ")}`;
      return;
    }
    this.saving = true;
    const attributes = this.attrDefs.map((d) => ({
      definitionId: d.id,
      value: d.fieldType === "MULTISELECT" ? JSON.stringify(this.attrMulti[d.id] ?? []) : d.fieldType === "BOOLEAN" ? this.attrValues[d.id] ?? "false" : this.attrValues[d.id] ?? ""
    })).filter((a) => a.value !== "" && a.value !== "[]");
    this.http.put(PRODUCT_ENDPOINTS.ATTRIBUTES(this.productId), { attributes }).pipe(finalize(() => this.saving = false)).subscribe({
      next: () => {
        this.step = 4;
        this.touched = false;
      },
      error: (e) => this.error = extractErrorMessage(e)
    });
  }
  // ── Step 4: Variants + Publish ────────────────────────────────────────────
  addVariant() {
    this.variants.push({ colorName: "", colorHex: "#3b82f6", size: "", priceOverride: null, stockQty: 0 });
  }
  removeVariant(i) {
    this.variants.splice(i, 1);
  }
  publish() {
    if (this.variants.length > 0) {
      const bad = this.variants.find((v) => !v.colorName.trim() && !v.size.trim());
      if (bad) {
        this.variantError = "Each variant needs at least a colour name or size.";
        return;
      }
    }
    this.variantError = "";
    this.saving = true;
    const saveVariants$ = this.variants.length > 0 ? Promise.all(this.variants.map((v) => this.http.post(PRODUCT_ENDPOINTS.VARIANTS(this.productId), {
      colorName: v.colorName.trim() || null,
      colorHex: v.colorHex || null,
      size: v.size.trim() || null,
      priceOverride: v.priceOverride || null,
      stockQty: v.stockQty || 0
    }).toPromise())) : Promise.resolve([]);
    saveVariants$.then(() => {
      this.http.patch(PRODUCT_ENDPOINTS.BY_ID(this.productId), { status: "ACTIVE" }).subscribe({
        next: () => {
          this.saving = false;
          this.productId = "";
          this.router.navigate(["/products"]);
        },
        error: (e) => {
          this.saving = false;
          this.error = extractErrorMessage(e);
        }
      });
    }).catch((e) => {
      this.saving = false;
      this.variantError = extractErrorMessage(e);
    });
  }
  // ── Discard ───────────────────────────────────────────────────────────────
  tryDiscard() {
    if (!this.productId) {
      this.router.navigate(["/inventory"]);
      return;
    }
    this.showDiscard = true;
  }
  discardAsDraft() {
    this.showDiscard = false;
    this.productId = "";
    this.router.navigate(["/inventory"]);
  }
  confirmDelete() {
    if (!this.productId) {
      this.router.navigate(["/inventory"]);
      return;
    }
    this.http.delete(PRODUCT_ENDPOINTS.BY_ID(this.productId)).subscribe({
      next: () => {
        this.productId = "";
        this.router.navigate(["/inventory"]);
      },
      error: () => {
        this.productId = "";
        this.router.navigate(["/inventory"]);
      }
    });
    this.showDiscard = false;
  }
  onBeforeUnload(e) {
    if (this.productId)
      e.preventDefault();
  }
  // ── Helpers ───────────────────────────────────────────────────────────────
  fieldTypeLabel(ft) {
    return {
      TEXT: "Text",
      NUMBER: "Number",
      BOOLEAN: "Yes / No",
      SELECT: "Dropdown",
      MULTISELECT: "Multi-select"
    }[ft] ?? ft;
  }
  get stepLabel() {
    return this.steps[this.step - 1]?.label ?? "";
  }
  get isLastStep() {
    return this.step === 4;
  }
  get hasNoAttrs() {
    return !this.attrLoading && this.attrDefs.length === 0;
  }
  static \u0275fac = function ProductNewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductNewComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ProductApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductNewComponent, selectors: [["app-product-new"]], hostBindings: function ProductNewComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("beforeunload", function ProductNewComponent_beforeunload_HostBindingHandler($event) {
        return ctx.onBeforeUnload($event);
      }, false, \u0275\u0275resolveWindow);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 32, vars: 15, consts: [["class", "overlay", 3, "click", 4, "ngIf"], ["class", "modal modal-sm", 3, "click", 4, "ngIf"], [1, "pnew"], [1, "pnew-hd"], [1, "pnew-back", 3, "click"], [1, "icon", "icon-sm"], [1, "pnew-hd-text"], [1, "pnew-title"], [1, "pnew-sub"], [1, "pnew-discard", 3, "click"], [1, "hide-mobile"], [1, "pnew-steps"], [4, "ngFor", "ngForOf"], [1, "pnew-content"], [4, "ngIf"], [1, "pnew-footer"], ["variant", "ghost", 3, "clicked"], [2, "display", "flex", "gap", "8px", "align-items", "center"], ["variant", "ghost", 3, "clicked", 4, "ngIf"], ["variant", "ghost", 3, "loading", "clicked", 4, "ngIf"], ["variant", "primary", 3, "clicked", "loading", "icon"], [1, "overlay", 3, "click"], [1, "modal", "modal-sm", 3, "click"], [1, "confirm-body"], [1, "confirm-icon", "warning"], [1, "icon", "icon-lg"], [1, "modal-ft", 2, "flex-direction", "column", "gap", "8px"], ["variant", "ghost", 2, "width", "100%", "justify-content", "center", 3, "clicked"], ["variant", "secondary", 2, "width", "100%", "justify-content", "center", 3, "clicked"], ["variant", "danger", 2, "width", "100%", "justify-content", "center", 3, "clicked"], [1, "pnew-step"], [1, "pnew-step-dot"], ["class", "icon icon-xs", 4, "ngIf"], [1, "pnew-step-lbl"], ["class", "pnew-step-line", 4, "ngIf"], [1, "icon", "icon-xs"], [1, "pnew-step-line"], [1, "form-section"], [1, "form-section-title"], ["class", "alert alert-error", 4, "ngIf"], ["label", "Product Name", "placeholder", "e.g. Samsung 55 QLED 4K Smart TV", 3, "valueChange", "blur", "required", "touched", "value"], ["label", "SKU", "hint", "Auto-filled from name \u2014 must be unique across all products", "placeholder", "e.g. SAM-TV-55-QLED", 3, "valueChange", "required", "touched", "value"], [1, "field-row"], ["label", "Category", "placeholder", "Select a category\u2026", 3, "valueChange", "required", "touched", "options", "value"], ["label", "Brand", "optLabel", "optional", "placeholder", "Select brand\u2026", 3, "valueChange", "options", "value"], ["label", "Short Description", "optLabel", "optional", "placeholder", "One-line summary shown on product cards", 3, "valueChange", "rows", "value"], ["label", "Full Description", "optLabel", "optional", "placeholder", "Detailed product description for the product page", 3, "valueChange", "rows", "value"], [1, "alert", "alert-error"], [1, "price-grid"], [1, "price-card", "required"], [1, "price-card-label"], [1, "req"], [1, "price-card-hint"], ["type", "number", "placeholder", "0", 3, "valueChange", "minVal", "required", "touched", "value"], [1, "price-card"], ["type", "number", "placeholder", "0", 3, "valueChange", "minVal", "value"], ["label", "GST Rate", 3, "valueChange", "options", "value"], ["label", "Opening Stock (units)", "type", "number", "placeholder", "0", 3, "valueChange", "minVal", "value"], ["label", "GST included in the above prices", 3, "checkedChange", "checked"], [1, "form-section-sub"], ["class", "attrs-loading", 4, "ngIf"], ["class", "empty", "style", "padding:32px", 4, "ngIf"], [1, "attrs-loading"], ["class", "sk", "style", "height:56px;border-radius:8px", 4, "ngFor", "ngForOf"], [1, "sk", 2, "height", "56px", "border-radius", "8px"], [1, "empty", 2, "padding", "32px"], [1, "empty-icon"], [1, "icon", "icon-lg", "icon-muted"], [1, "empty-title", 2, "font-size", "14px"], [1, "empty-sub"], [3, "label", "type", "required", "touched", "value", "placeholder", "valueChange", 4, "ngIf"], [3, "label", "checked", "checkedChange", 4, "ngIf"], ["placeholder", "Select\u2026", 3, "label", "options", "required", "touched", "value", "valueChange", 4, "ngIf"], ["class", "field", 4, "ngIf"], [3, "valueChange", "label", "type", "required", "touched", "value", "placeholder"], [3, "checkedChange", "label", "checked"], ["placeholder", "Select\u2026", 3, "valueChange", "label", "options", "required", "touched", "value"], [1, "field"], [1, "field-label"], ["class", "req", 4, "ngIf"], [1, "multi-opts"], ["class", "multi-opt", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["class", "field-hint", 4, "ngIf"], [1, "multi-opt", 3, "click"], [1, "field-hint"], ["class", "form-section-badge", 4, "ngIf"], [1, "variant-info"], [1, "icon", "icon-sm", "icon-blue"], ["class", "variants-list", 4, "ngIf"], [1, "add-variant-btn", 3, "click"], [1, "publish-summary"], [1, "pub-row"], [1, "badge", "badge-green"], ["class", "pub-row", 4, "ngIf"], [1, "form-section-badge"], [1, "variants-list"], ["class", "variant-row", 4, "ngFor", "ngForOf"], [1, "variant-row"], [1, "variant-row-hd"], [1, "variant-num"], [1, "variant-remove", 3, "click"], [1, "color-input-row"], ["type", "color", 1, "color-picker", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. Midnight Blue", 1, "f-input", 3, "ngModelChange", "ngModel"], ["label", "Size / Storage", "placeholder", "e.g. 8GB+256GB or XL", 2, "flex", "1", 3, "valueChange", "value"], ["label", "Price Override \u20B9", "type", "number", "optLabel", "optional \u2014 uses base price if blank", "placeholder", "0", 3, "valueChange", "value"], ["label", "Stock Qty", "type", "number", "placeholder", "0", 3, "valueChange", "minVal", "value"], [1, "icon", "icon-sm", "icon-muted"], [2, "color", "var(--t3)"], ["variant", "ghost", 3, "clicked", "loading"]], template: function ProductNewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ProductNewComponent_div_0_Template, 1, 0, "div", 0)(1, ProductNewComponent_div_1_Template, 19, 0, "div", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "button", 4);
      \u0275\u0275listener("click", function ProductNewComponent_Template_button_click_4_listener() {
        return ctx.back();
      });
      \u0275\u0275elementStart(5, "span", 5);
      \u0275\u0275text(6, "arrow_back");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 6)(8, "div", 7);
      \u0275\u0275text(9, "New Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 8);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "button", 9);
      \u0275\u0275listener("click", function ProductNewComponent_Template_button_click_12_listener() {
        return ctx.tryDiscard();
      });
      \u0275\u0275elementStart(13, "span", 5);
      \u0275\u0275text(14, "close");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "span", 10);
      \u0275\u0275text(16, "Discard");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "div", 11);
      \u0275\u0275template(18, ProductNewComponent_ng_container_18_Template, 8, 8, "ng-container", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 13);
      \u0275\u0275template(20, ProductNewComponent_ng_container_20_Template, 12, 17, "ng-container", 14)(21, ProductNewComponent_ng_container_21_Template, 30, 14, "ng-container", 14)(22, ProductNewComponent_ng_container_22_Template, 10, 5, "ng-container", 14)(23, ProductNewComponent_ng_container_23_Template, 29, 7, "ng-container", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 15)(25, "app-btn", 16);
      \u0275\u0275listener("clicked", function ProductNewComponent_Template_app_btn_clicked_25_listener() {
        return ctx.back();
      });
      \u0275\u0275text(26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 17);
      \u0275\u0275template(28, ProductNewComponent_app_btn_28_Template, 2, 0, "app-btn", 18)(29, ProductNewComponent_app_btn_29_Template, 2, 1, "app-btn", 19);
      \u0275\u0275elementStart(30, "app-btn", 20);
      \u0275\u0275listener("clicked", function ProductNewComponent_Template_app_btn_clicked_30_listener() {
        return ctx.next();
      });
      \u0275\u0275text(31);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.showDiscard);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDiscard);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate2("Step ", ctx.step, " of 4 \u2014 ", ctx.stepLabel, "");
      \u0275\u0275advance(7);
      \u0275\u0275property("ngForOf", ctx.steps);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.step === 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.step === 2);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.step === 3);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.step === 4);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.step === 1 ? "Cancel" : "Back", " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.step === 3 && ctx.hasNoAttrs);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.step === 4 && ctx.variants.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("loading", ctx.saving)("icon", ctx.isLastStep ? "rocket_launch" : "arrow_forward");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isLastStep ? "Publish Product" : "Next", " ");
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    AppBtnComponent,
    AppInputComponent,
    AppSelectComponent,
    AppTextareaComponent,
    AppCheckboxComponent
  ], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n}\n.pnew[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n  background: var(--bg);\n}\n.pnew-hd[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 24px;\n  background: var(--surface);\n  border-bottom: 1px solid var(--border);\n  flex-shrink: 0;\n}\n.pnew-back[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: var(--radius);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: none;\n  border: 1px solid var(--border);\n  color: var(--t2);\n  cursor: pointer;\n}\n.pnew-back[_ngcontent-%COMP%]:hover {\n  background: var(--surface2);\n  color: var(--t1);\n}\n.pnew-hd-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.pnew-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: var(--t1);\n}\n.pnew-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--t3);\n  margin-top: 1px;\n}\n.pnew-discard[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  border-radius: var(--radius);\n  background: none;\n  border: 1px solid var(--border);\n  color: var(--t3);\n  font-size: 13px;\n  cursor: pointer;\n  font-family: var(--font);\n  font-weight: 500;\n}\n.pnew-discard[_ngcontent-%COMP%]:hover {\n  background: var(--red-bg);\n  color: var(--red);\n  border-color: var(--red);\n}\n.pnew-steps[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 16px 24px;\n  background: var(--surface);\n  border-bottom: 1px solid var(--border);\n  flex-shrink: 0;\n  gap: 0;\n}\n.pnew-step[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.pnew-step-dot[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  border: 2px solid var(--border);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--t3);\n  flex-shrink: 0;\n  transition: all 0.15s;\n}\n.pnew-step.active[_ngcontent-%COMP%]   .pnew-step-dot[_ngcontent-%COMP%] {\n  border-color: var(--blue);\n  color: var(--blue);\n}\n.pnew-step.done[_ngcontent-%COMP%]   .pnew-step-dot[_ngcontent-%COMP%] {\n  background: var(--blue);\n  border-color: var(--blue);\n  color: #fff;\n  font-size: 14px;\n}\n.pnew-step-lbl[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--t3);\n  white-space: nowrap;\n}\n.pnew-step.active[_ngcontent-%COMP%]   .pnew-step-lbl[_ngcontent-%COMP%] {\n  color: var(--t1);\n  font-weight: 700;\n}\n.pnew-step.done[_ngcontent-%COMP%]   .pnew-step-lbl[_ngcontent-%COMP%] {\n  color: var(--blue);\n}\n.pnew-step-line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 1px;\n  background: var(--border);\n  margin: 0 12px;\n  min-width: 20px;\n}\n.pnew-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.form-section[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 680px;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.form-section-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 800;\n  color: var(--t1);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding-bottom: 4px;\n  border-bottom: 1px solid var(--border);\n}\n.form-section-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 20px;\n  height: 20px;\n  padding: 0 6px;\n  background: var(--blue);\n  color: #fff;\n  border-radius: 99px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.form-section-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--t3);\n  font-weight: 400;\n}\n.price-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.price-card[_ngcontent-%COMP%] {\n  background: var(--surface2);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.price-card.required[_ngcontent-%COMP%] {\n  border-color: var(--blue);\n  background: var(--blue-light);\n}\n.price-card-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--t1);\n}\n.price-card-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--t3);\n  margin-bottom: 4px;\n}\n.attrs-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.multi-opts[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 8px 0;\n}\n.multi-opt[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  border-radius: 99px;\n  border: 1.5px solid var(--border);\n  background: var(--surface2);\n  font-size: 13px;\n  color: var(--t2);\n  cursor: pointer;\n  transition: all 0.12s;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.multi-opt[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  color: var(--blue);\n}\n.multi-opt.selected[_ngcontent-%COMP%] {\n  border-color: var(--blue);\n  background: var(--blue-soft);\n  color: var(--blue);\n  font-weight: 600;\n}\n.variant-info[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: flex-start;\n  padding: 10px 12px;\n  background: var(--blue-soft);\n  border-radius: var(--radius);\n  font-size: 12px;\n  color: var(--t2);\n  line-height: 1.5;\n}\n.variants-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.variant-row[_ngcontent-%COMP%] {\n  background: var(--surface2);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.variant-row-hd[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.variant-num[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--t2);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.variant-remove[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: none;\n  border: none;\n  color: var(--t3);\n  cursor: pointer;\n  border-radius: var(--radius);\n}\n.variant-remove[_ngcontent-%COMP%]:hover {\n  background: var(--red-bg);\n  color: var(--red);\n}\n.color-input-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.color-picker[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  padding: 2px;\n  border-radius: var(--radius);\n  border: 1.5px solid var(--border);\n  cursor: pointer;\n  background: var(--input-bg);\n  flex-shrink: 0;\n}\n.color-picker[_ngcontent-%COMP%]::-webkit-color-swatch-wrapper {\n  padding: 0;\n}\n.color-picker[_ngcontent-%COMP%]::-webkit-color-swatch {\n  border-radius: 4px;\n  border: none;\n}\n.add-variant-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  width: 100%;\n  padding: 10px;\n  border: 2px dashed var(--border);\n  border-radius: var(--radius-md);\n  background: none;\n  color: var(--t3);\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: var(--font);\n  transition: all 0.15s;\n}\n.add-variant-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  color: var(--blue);\n  background: var(--blue-light);\n}\n.publish-summary[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 14px;\n  background: var(--surface2);\n  border-radius: var(--radius-md);\n  border: 1px solid var(--border);\n  margin-top: 4px;\n}\n.pub-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: var(--t2);\n}\n.pnew-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 24px;\n  background: var(--surface);\n  border-top: 1px solid var(--border);\n  flex-shrink: 0;\n}\n@media (max-width: 768px) {\n  .pnew-hd[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n  .pnew-steps[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n    overflow-x: auto;\n  }\n  .pnew-step-lbl[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .pnew-step.active[_ngcontent-%COMP%]   .pnew-step-lbl[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .pnew-content[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .form-section[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .price-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .pnew-footer[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n}\n/*# sourceMappingURL=product-new.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductNewComponent, { className: "ProductNewComponent", filePath: "src\\app\\pages\\product-new\\product-new.component.ts", lineNumber: 40 });
})();
export {
  ProductNewComponent
};
//# sourceMappingURL=chunk-AY34S7ZC.js.map
