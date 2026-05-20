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
import "./chunk-O3NE7GYO.js";
import {
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
  ɵɵclassMap,
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
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-PEVOVQSE.js";

// src/app/pages/inventory/inventory.component.ts
var _c0 = () => [1, 2, 3, 4, 5, 6];
function InventoryComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275listener("click", function InventoryComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeWizard());
    });
    \u0275\u0275elementEnd();
  }
}
function InventoryComponent_div_1_ng_container_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "span", 30);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.wizardError, "");
  }
}
function InventoryComponent_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 26)(2, "div")(3, "div", 27);
    \u0275\u0275text(4, "Add Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 28);
    \u0275\u0275text(6, "Step 1 of 2 \u2014 Basic Info");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 29);
    \u0275\u0275listener("click", function InventoryComponent_div_1_ng_container_1_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeWizard());
    });
    \u0275\u0275elementStart(8, "span", 30);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 31);
    \u0275\u0275template(11, InventoryComponent_div_1_ng_container_1_div_11_Template, 4, 1, "div", 32);
    \u0275\u0275elementStart(12, "app-input", 33);
    \u0275\u0275listener("valueChange", function InventoryComponent_div_1_ng_container_1_Template_app_input_valueChange_12_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.step1.name = $event);
    })("blur", function InventoryComponent_div_1_ng_container_1_Template_app_input_blur_12_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.autoSku());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "app-input", 34);
    \u0275\u0275listener("valueChange", function InventoryComponent_div_1_ng_container_1_Template_app_input_valueChange_13_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.step1.sku = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 35)(15, "app-select", 36);
    \u0275\u0275listener("valueChange", function InventoryComponent_div_1_ng_container_1_Template_app_select_valueChange_15_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.step1.categoryId = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "app-select", 37);
    \u0275\u0275listener("valueChange", function InventoryComponent_div_1_ng_container_1_Template_app_select_valueChange_16_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.step1.brandId = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "app-textarea", 38);
    \u0275\u0275listener("valueChange", function InventoryComponent_div_1_ng_container_1_Template_app_textarea_valueChange_17_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.step1.shortDescription = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 39)(19, "app-btn", 40);
    \u0275\u0275listener("clicked", function InventoryComponent_div_1_ng_container_1_Template_app_btn_clicked_19_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeWizard());
    });
    \u0275\u0275text(20, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "app-btn", 41);
    \u0275\u0275listener("clicked", function InventoryComponent_div_1_ng_container_1_Template_app_btn_clicked_21_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submitStep1());
    });
    \u0275\u0275text(22, "Next: Pricing");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx_r1.wizardError);
    \u0275\u0275advance();
    \u0275\u0275property("required", true)("touched", ctx_r1.wizardTouched)("value", ctx_r1.step1.name);
    \u0275\u0275advance();
    \u0275\u0275property("required", true)("touched", ctx_r1.wizardTouched)("value", ctx_r1.step1.sku);
    \u0275\u0275advance(2);
    \u0275\u0275property("required", true)("touched", ctx_r1.wizardTouched)("options", ctx_r1.categoryWizardOpts)("value", ctx_r1.step1.categoryId);
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r1.brandWizardOpts)("value", ctx_r1.step1.brandId);
    \u0275\u0275advance();
    \u0275\u0275property("rows", 2)("value", ctx_r1.step1.shortDescription);
    \u0275\u0275advance(4);
    \u0275\u0275property("loading", ctx_r1.wizardLoading);
  }
}
function InventoryComponent_div_1_ng_container_2_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "span", 30);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.wizardError, "");
  }
}
function InventoryComponent_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 26)(2, "div")(3, "div", 27);
    \u0275\u0275text(4, "Add Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 28);
    \u0275\u0275text(6, "Step 2 of 2 \u2014 Pricing & Stock");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 29);
    \u0275\u0275listener("click", function InventoryComponent_div_1_ng_container_2_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeWizard());
    });
    \u0275\u0275elementStart(8, "span", 30);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 31);
    \u0275\u0275template(11, InventoryComponent_div_1_ng_container_2_div_11_Template, 4, 1, "div", 32);
    \u0275\u0275elementStart(12, "div", 35)(13, "app-input", 43);
    \u0275\u0275listener("valueChange", function InventoryComponent_div_1_ng_container_2_Template_app_input_valueChange_13_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.step2.priceRetail = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "app-input", 44);
    \u0275\u0275listener("valueChange", function InventoryComponent_div_1_ng_container_2_Template_app_input_valueChange_14_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.step2.priceWholesale = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 35)(16, "app-input", 45);
    \u0275\u0275listener("valueChange", function InventoryComponent_div_1_ng_container_2_Template_app_input_valueChange_16_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.step2.priceBroker = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "app-select", 46);
    \u0275\u0275listener("valueChange", function InventoryComponent_div_1_ng_container_2_Template_app_select_valueChange_17_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.step2.gstPercent = +$event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 35)(19, "app-input", 47);
    \u0275\u0275listener("valueChange", function InventoryComponent_div_1_ng_container_2_Template_app_input_valueChange_19_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.step2.stockQty = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 48)(21, "app-checkbox", 49);
    \u0275\u0275listener("checkedChange", function InventoryComponent_div_1_ng_container_2_Template_app_checkbox_checkedChange_21_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.step2.gstIncluded = $event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "div", 39)(23, "app-btn", 50);
    \u0275\u0275listener("clicked", function InventoryComponent_div_1_ng_container_2_Template_app_btn_clicked_23_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.wizardStep = 1);
    });
    \u0275\u0275text(24, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "app-btn", 51);
    \u0275\u0275listener("clicked", function InventoryComponent_div_1_ng_container_2_Template_app_btn_clicked_25_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submitStep2());
    });
    \u0275\u0275text(26, "Publish Product");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx_r1.wizardError);
    \u0275\u0275advance(2);
    \u0275\u0275property("required", true)("touched", ctx_r1.wizardTouched)("minVal", 1)("value", ctx_r1.step2.priceRetail);
    \u0275\u0275advance();
    \u0275\u0275property("minVal", 1)("value", ctx_r1.step2.priceWholesale);
    \u0275\u0275advance(2);
    \u0275\u0275property("minVal", 1)("value", ctx_r1.step2.priceBroker);
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r1.gstOpts)("value", ctx_r1.step2.gstPercent);
    \u0275\u0275advance(2);
    \u0275\u0275property("minVal", 0)("value", ctx_r1.step2.stockQty);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.step2.gstIncluded);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.wizardLoading);
    \u0275\u0275advance(2);
    \u0275\u0275property("loading", ctx_r1.wizardLoading);
  }
}
function InventoryComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275listener("click", function InventoryComponent_div_1_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(1, InventoryComponent_div_1_ng_container_1_Template, 23, 16, "ng-container", 25)(2, InventoryComponent_div_1_ng_container_2_Template, 27, 16, "ng-container", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardStep === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.wizardStep === 2);
  }
}
function InventoryComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275listener("click", function InventoryComponent_div_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeStock());
    });
    \u0275\u0275elementEnd();
  }
}
function InventoryComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275listener("click", function InventoryComponent_div_3_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 26)(2, "div")(3, "div", 27);
    \u0275\u0275text(4, "Add Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 28);
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 53);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "button", 29);
    \u0275\u0275listener("click", function InventoryComponent_div_3_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeStock());
    });
    \u0275\u0275elementStart(10, "span", 30);
    \u0275\u0275text(11, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 31)(13, "div", 54)(14, "div", 55)(15, "div", 56);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 57);
    \u0275\u0275text(18, "Current Stock");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 55)(20, "div", 56);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 57);
    \u0275\u0275text(23, "After Update");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "app-input", 58);
    \u0275\u0275listener("valueChange", function InventoryComponent_div_3_Template_app_input_valueChange_24_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addQty = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 59)(26, "div", 60)(27, "div", 61);
    \u0275\u0275text(28, "Retail Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 62);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 60)(32, "div", 61);
    \u0275\u0275text(33, "GST");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 62);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "div", 39)(37, "app-btn", 40);
    \u0275\u0275listener("clicked", function InventoryComponent_div_3_Template_app_btn_clicked_37_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeStock());
    });
    \u0275\u0275text(38, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "app-btn", 63);
    \u0275\u0275listener("clicked", function InventoryComponent_div_3_Template_app_btn_clicked_39_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyStock());
    });
    \u0275\u0275text(40, "Add Stock");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedProduct.name, " \xB7 ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedProduct.sku);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.selectedProduct.stockQty);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("color", ctx_r1.selectedProduct.stockQty + ctx_r1.addQty === 0 ? "var(--red)" : ctx_r1.selectedProduct.stockQty + ctx_r1.addQty <= 5 ? "var(--amber)" : "var(--green)");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedProduct.stockQty + ctx_r1.addQty, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("minVal", 0)("value", ctx_r1.addQty);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.formatPrice(ctx_r1.selectedProduct.priceRetail));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedProduct.gstPercent, "%");
    \u0275\u0275advance(4);
    \u0275\u0275property("loading", ctx_r1.stockSaving)("disabled", ctx_r1.addQty <= 0);
  }
}
function InventoryComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r1.filtered.length, " of ", ctx_r1.products.length, " products");
  }
}
function InventoryComponent_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function InventoryComponent_button_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275elementStart(1, "span", 30);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Clear ");
    \u0275\u0275elementEnd();
  }
}
function InventoryComponent_div_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275element(1, "div", 69);
    \u0275\u0275elementStart(2, "div", 70);
    \u0275\u0275element(3, "div", 71)(4, "div", 72)(5, "div", 73);
    \u0275\u0275elementEnd()();
  }
}
function InventoryComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275template(1, InventoryComponent_div_24_div_1_Template, 6, 0, "div", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function InventoryComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 74)(1, "span", 30);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "app-btn", 75);
    \u0275\u0275listener("clicked", function InventoryComponent_div_25_Template_app_btn_clicked_4_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.load());
    });
    \u0275\u0275text(5, "Retry");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function InventoryComponent_div_26_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 89);
  }
  if (rf & 2) {
    const p_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", p_r11.primaryImageUrl, \u0275\u0275sanitizeUrl)("alt", p_r11.name);
  }
}
function InventoryComponent_div_26_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275text(1, "inventory_2");
    \u0275\u0275elementEnd();
  }
}
function InventoryComponent_div_26_div_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", p_r11.brandName, "");
  }
}
function InventoryComponent_div_26_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77)(1, "div", 78);
    \u0275\u0275template(2, InventoryComponent_div_26_div_1_img_2_Template, 1, 2, "img", 79)(3, InventoryComponent_div_26_div_1_span_3_Template, 2, 0, "span", 80);
    \u0275\u0275elementStart(4, "span", 81);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 82)(7, "div", 83);
    \u0275\u0275text(8);
    \u0275\u0275template(9, InventoryComponent_div_26_div_1_span_9_Template, 2, 1, "span", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 84);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 85);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 86);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 87);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 88)(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 65);
    \u0275\u0275listener("click", function InventoryComponent_div_26_div_1_Template_button_click_21_listener($event) {
      const p_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openStock(p_r11, $event));
    });
    \u0275\u0275elementStart(22, "span", 30);
    \u0275\u0275text(23, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " Stock ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r11.primaryImageUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !p_r11.primaryImageUrl);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.statusClass(p_r11));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r11.status);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r11.categoryName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r11.brandName);
    \u0275\u0275advance();
    \u0275\u0275property("title", p_r11.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r11.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r11.sku);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatPrice(p_r11.priceRetail));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("GST ", p_r11.gstPercent, "%");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.stockBadgeClass(p_r11));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.stockLabel(p_r11));
  }
}
function InventoryComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275template(1, InventoryComponent_div_26_div_1_Template, 25, 15, "div", 76);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filtered);
  }
}
function InventoryComponent_div_27_app_btn_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-btn", 9);
    \u0275\u0275listener("clicked", function InventoryComponent_div_27_app_btn_6_Template_app_btn_clicked_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openWizard());
    });
    \u0275\u0275text(1, "Add First Product");
    \u0275\u0275elementEnd();
  }
}
function InventoryComponent_div_27_app_btn_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-btn", 40);
    \u0275\u0275listener("clicked", function InventoryComponent_div_27_app_btn_7_Template_app_btn_clicked_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275text(1, "Clear Filters");
    \u0275\u0275elementEnd();
  }
}
function InventoryComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91)(1, "div", 92)(2, "span", 90);
    \u0275\u0275text(3, "inventory_2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 93);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, InventoryComponent_div_27_app_btn_6_Template, 2, 0, "app-btn", 94)(7, InventoryComponent_div_27_app_btn_7_Template, 2, 0, "app-btn", 95);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.products.length === 0 ? "No products yet" : "No products match");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.products.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasFilters);
  }
}
var InventoryComponent = class _InventoryComponent {
  productApi;
  router;
  // ── List state ────────────────────────────────────────────────────────────
  products = [];
  loading = false;
  error = "";
  searchQ = "";
  filterCategory = "";
  filterBrand = "";
  filterStatus = "";
  sortKey = "newest";
  // ── Stock modal ───────────────────────────────────────────────────────────
  showStockPanel = false;
  selectedProduct = null;
  addQty = 0;
  stockSaving = false;
  // ── Wizard ────────────────────────────────────────────────────────────────
  wizardOpen = false;
  wizardStep = 1;
  wizardLoading = false;
  wizardError = "";
  wizardTouched = false;
  createdId = "";
  categories = [];
  brands = [];
  step1 = { name: "", sku: "", categoryId: "", brandId: "", shortDescription: "" };
  step2 = {
    priceRetail: null,
    priceWholesale: null,
    priceBroker: null,
    gstPercent: 18,
    gstIncluded: false,
    stockQty: 0
  };
  constructor(productApi, router) {
    this.productApi = productApi;
    this.router = router;
  }
  ngOnInit() {
    this.load();
    this.productApi.listCategories().subscribe((c) => this.categories = c);
    this.productApi.listBrands().subscribe((b) => this.brands = b);
  }
  load() {
    this.loading = true;
    this.error = "";
    this.productApi.listProducts({ size: 100 }).pipe(finalize(() => this.loading = false)).subscribe({ next: (p) => this.products = p.content, error: (e) => this.error = extractErrorMessage(e) });
  }
  // ── Derived lists ─────────────────────────────────────────────────────────
  get filtered() {
    let list = this.products;
    if (this.searchQ.trim()) {
      const q = this.searchQ.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q));
    }
    if (this.filterCategory)
      list = list.filter((p) => p.categoryName === this.filterCategory);
    if (this.filterBrand)
      list = list.filter((p) => p.brandName === this.filterBrand);
    if (this.filterStatus === "active")
      list = list.filter((p) => p.status === "ACTIVE");
    if (this.filterStatus === "draft")
      list = list.filter((p) => p.status === "DRAFT");
    if (this.filterStatus === "low")
      list = list.filter((p) => p.stockQty > 0 && p.stockQty <= 5);
    if (this.filterStatus === "out")
      list = list.filter((p) => p.stockQty === 0);
    return [...list].sort((a, b) => {
      switch (this.sortKey) {
        case "name_az":
          return a.name.localeCompare(b.name);
        case "price_asc":
          return a.priceRetail - b.priceRetail;
        case "price_desc":
          return b.priceRetail - a.priceRetail;
        case "stock_asc":
          return a.stockQty - b.stockQty;
        case "oldest":
          return a.createdAt.localeCompare(b.createdAt);
        default:
          return b.createdAt.localeCompare(a.createdAt);
      }
    });
  }
  get categoryOpts() {
    return [...new Set(this.products.map((p) => p.categoryName))].map((n) => ({ value: n, label: n }));
  }
  get brandOpts() {
    return [...new Set(this.products.map((p) => p.brandName).filter(Boolean))].map((n) => ({ value: n, label: n }));
  }
  get sortOpts() {
    return [
      { value: "newest", label: "Newest first" },
      { value: "oldest", label: "Oldest first" },
      { value: "name_az", label: "Name A \u2192 Z" },
      { value: "price_asc", label: "Price: Low \u2192 High" },
      { value: "price_desc", label: "Price: High \u2192 Low" },
      { value: "stock_asc", label: "Stock: Low \u2192 High" }
    ];
  }
  get statusOpts() {
    return [
      { value: "active", label: "Active" },
      { value: "draft", label: "Draft" },
      { value: "low", label: "Low stock" },
      { value: "out", label: "Out of stock" }
    ];
  }
  get categoryWizardOpts() {
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
  get brandWizardOpts() {
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
  clearFilters() {
    this.searchQ = "";
    this.filterCategory = "";
    this.filterBrand = "";
    this.filterStatus = "";
  }
  get hasFilters() {
    return !!(this.searchQ || this.filterCategory || this.filterBrand || this.filterStatus);
  }
  // ── Stock modal ───────────────────────────────────────────────────────────
  openStock(p, e) {
    e.stopPropagation();
    this.selectedProduct = p;
    this.addQty = 0;
    this.showStockPanel = true;
  }
  closeStock() {
    this.showStockPanel = false;
    this.selectedProduct = null;
    this.addQty = 0;
  }
  applyStock() {
    if (!this.selectedProduct || this.addQty <= 0)
      return;
    const newQty = this.selectedProduct.stockQty + this.addQty;
    this.stockSaving = true;
    this.productApi.updateStock(this.selectedProduct.id, newQty).pipe(finalize(() => this.stockSaving = false)).subscribe({ next: () => {
      this.selectedProduct.stockQty = newQty;
      this.closeStock();
    }, error: (e) => alert(extractErrorMessage(e)) });
  }
  // ── Wizard ────────────────────────────────────────────────────────────────
  openWizard() {
    this.router.navigate(["/products/new"]);
  }
  closeWizard() {
    this.wizardOpen = false;
  }
  autoSku() {
    if (!this.step1.name.trim() || this.step1.sku)
      return;
    this.step1.sku = this.step1.name.toUpperCase().replace(/[^A-Z0-9\s]/g, "").trim().split(/\s+/).slice(0, 4).map((w) => w.slice(0, 3)).join("-");
  }
  submitStep1() {
    this.wizardTouched = true;
    if (!this.step1.name.trim() || !this.step1.sku.trim() || !this.step1.categoryId) {
      this.wizardError = "Name, SKU, and Category are required.";
      return;
    }
    this.wizardLoading = true;
    this.wizardError = "";
    this.productApi.createProduct({
      name: this.step1.name.trim(),
      sku: this.step1.sku.trim().toUpperCase(),
      categoryId: this.step1.categoryId,
      brandId: this.step1.brandId || null,
      shortDescription: this.step1.shortDescription.trim() || void 0
    }).pipe(finalize(() => this.wizardLoading = false)).subscribe({ next: (id) => {
      this.createdId = id;
      this.wizardStep = 2;
      this.wizardTouched = false;
    }, error: (e) => this.wizardError = extractErrorMessage(e) });
  }
  submitStep2() {
    this.wizardTouched = true;
    if (!this.step2.priceRetail || this.step2.priceRetail <= 0) {
      this.wizardError = "Retail price is required.";
      return;
    }
    this.wizardLoading = true;
    this.wizardError = "";
    this.productApi.patchProduct(this.createdId, {
      priceRetail: this.step2.priceRetail,
      priceWholesale: this.step2.priceWholesale,
      priceBroker: this.step2.priceBroker,
      gstPercent: this.step2.gstPercent,
      gstIncluded: this.step2.gstIncluded,
      stockQty: this.step2.stockQty,
      status: "ACTIVE"
    }).pipe(finalize(() => this.wizardLoading = false)).subscribe({ next: () => {
      this.wizardOpen = false;
      this.load();
    }, error: (e) => this.wizardError = extractErrorMessage(e) });
  }
  formatPrice(n) {
    return "\u20B9" + n.toLocaleString("en-IN");
  }
  stockBadgeClass(p) {
    if (p.stockQty === 0)
      return "badge badge-red";
    if (p.stockQty <= 5)
      return "badge badge-amber";
    return "badge badge-green";
  }
  stockLabel(p) {
    if (p.stockQty === 0)
      return "Out of stock";
    if (p.stockQty <= 5)
      return p.stockQty + " left";
    return p.stockQty + " in stock";
  }
  statusClass(p) {
    if (p.status === "ACTIVE")
      return "badge badge-green";
    if (p.status === "DRAFT")
      return "badge badge-amber";
    return "badge badge-gray";
  }
  static \u0275fac = function InventoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InventoryComponent)(\u0275\u0275directiveInject(ProductApiService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InventoryComponent, selectors: [["app-inventory"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 28, vars: 19, consts: [["class", "overlay", 3, "click", 4, "ngIf"], ["class", "modal modal-lg", 3, "click", 4, "ngIf"], ["class", "modal", 3, "click", 4, "ngIf"], [1, "page"], [1, "page-hd"], [1, "page-hd-left"], [1, "page-hd-title"], ["class", "page-hd-sub", 4, "ngIf"], [1, "page-hd-right"], ["variant", "primary", "icon", "add", 3, "clicked"], [1, "inv-toolbar"], [1, "search-bar", 2, "flex", "1", "min-width", "200px"], [1, "sb-icon", "icon", "icon-sm"], ["type", "text", "placeholder", "Search by name or SKU\u2026", 3, "ngModelChange", "ngModel"], [1, "inv-filters"], ["placeholder", "All categories", 3, "valueChange", "options", "value"], ["placeholder", "All brands", 3, "valueChange", "options", "value"], ["placeholder", "All status", 3, "valueChange", "options", "value"], ["placeholder", "Sort: Newest", 3, "valueChange", "options", "value"], ["class", "btn btn-ghost btn-sm", 3, "click", 4, "ngIf"], ["class", "prod-grid", 4, "ngIf"], ["class", "alert alert-warn", 4, "ngIf"], ["class", "empty", "style", "padding:60px", 4, "ngIf"], [1, "overlay", 3, "click"], [1, "modal", "modal-lg", 3, "click"], [4, "ngIf"], [1, "modal-hd"], [1, "modal-title"], [2, "font-size", "12px", "color", "var(--t3)"], [1, "modal-close", 3, "click"], [1, "icon", "icon-sm"], [1, "modal-body"], ["class", "alert-err", 4, "ngIf"], ["label", "Product Name", "placeholder", "e.g. Samsung 32 Smart TV", 3, "valueChange", "blur", "required", "touched", "value"], ["label", "SKU", "placeholder", "e.g. SAM-TV-32", "hint", "Auto-filled from name \u2014 must be unique", 3, "valueChange", "required", "touched", "value"], [1, "field-row"], ["label", "Category", "placeholder", "Select category\u2026", 3, "valueChange", "required", "touched", "options", "value"], ["label", "Brand", "optLabel", "optional", 3, "valueChange", "options", "value"], ["label", "Short Description", "optLabel", "optional", "placeholder", "Brief product description", 3, "valueChange", "rows", "value"], [1, "modal-ft"], ["variant", "ghost", 3, "clicked"], ["variant", "primary", "icon", "arrow_forward", 3, "clicked", "loading"], [1, "alert-err"], ["label", "Retail Price \u20B9", "type", "number", "hint", "Walk-in customer price", "placeholder", "0.00", 3, "valueChange", "required", "touched", "minVal", "value"], ["label", "Wholesale Price \u20B9", "type", "number", "optLabel", "optional", "hint", "Bulk buyers", "placeholder", "0.00", 3, "valueChange", "minVal", "value"], ["label", "Broker Price \u20B9", "type", "number", "optLabel", "optional", "placeholder", "0.00", 3, "valueChange", "minVal", "value"], ["label", "GST Rate", 3, "valueChange", "options", "value"], ["label", "Opening Stock (units)", "type", "number", "placeholder", "0", 3, "valueChange", "minVal", "value"], [1, "field", 2, "padding-top", "28px"], ["label", "GST included in price", 3, "checkedChange", "checked"], ["variant", "ghost", 3, "clicked", "disabled"], ["variant", "primary", "icon", "check", 3, "clicked", "loading"], [1, "modal", 3, "click"], [2, "font-family", "monospace"], [2, "display", "flex", "gap", "12px", "margin-bottom", "4px"], [1, "stock-stat"], [1, "stock-stat-val"], [1, "stock-stat-label"], ["label", "Units to Add", "type", "number", "placeholder", "0", 3, "valueChange", "minVal", "value"], [1, "stock-info-row"], [1, "stock-info-cell"], [1, "stock-info-label"], [1, "stock-info-val"], ["variant", "primary", "icon", "add", 3, "clicked", "loading", "disabled"], [1, "page-hd-sub"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "prod-grid"], ["class", "prod-card sk-card", 4, "ngFor", "ngForOf"], [1, "prod-card", "sk-card"], [1, "sk", "sk-img"], [2, "padding", "12px", "display", "flex", "flex-direction", "column", "gap", "8px"], [1, "sk", "sk-text", 2, "width", "70%", "height", "13px"], [1, "sk", "sk-text", 2, "width", "40%", "height", "11px"], [1, "sk", "sk-text", 2, "width", "55%", "height", "11px"], [1, "alert", "alert-warn"], ["variant", "ghost", "size", "sm", "icon", "refresh", 2, "margin-left", "auto", 3, "clicked"], ["class", "prod-card", 4, "ngFor", "ngForOf"], [1, "prod-card"], [1, "prod-img"], [3, "src", "alt", 4, "ngIf"], ["class", "icon icon-xl icon-muted", 4, "ngIf"], [2, "position", "absolute", "top", "8px", "left", "8px"], [1, "prod-body"], [1, "prod-cat"], [1, "prod-name", 3, "title"], [1, "prod-sku"], [1, "prod-price"], [1, "prod-gst"], [1, "prod-foot"], [3, "src", "alt"], [1, "icon", "icon-xl", "icon-muted"], [1, "empty", 2, "padding", "60px"], [1, "empty-icon"], [1, "empty-title"], ["variant", "primary", "icon", "add", 3, "clicked", 4, "ngIf"], ["variant", "ghost", 3, "clicked", 4, "ngIf"]], template: function InventoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, InventoryComponent_div_0_Template, 1, 0, "div", 0)(1, InventoryComponent_div_1_Template, 3, 2, "div", 1)(2, InventoryComponent_div_2_Template, 1, 0, "div", 0)(3, InventoryComponent_div_3_Template, 41, 12, "div", 2);
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6);
      \u0275\u0275text(8, "Inventory");
      \u0275\u0275elementEnd();
      \u0275\u0275template(9, InventoryComponent_div_9_Template, 2, 2, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 8)(11, "app-btn", 9);
      \u0275\u0275listener("clicked", function InventoryComponent_Template_app_btn_clicked_11_listener() {
        return ctx.openWizard();
      });
      \u0275\u0275text(12, "Add Product");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div", 10)(14, "div", 11)(15, "span", 12);
      \u0275\u0275text(16, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function InventoryComponent_Template_input_ngModelChange_17_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQ, $event) || (ctx.searchQ = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 14)(19, "app-select", 15);
      \u0275\u0275listener("valueChange", function InventoryComponent_Template_app_select_valueChange_19_listener($event) {
        return ctx.filterCategory = $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "app-select", 16);
      \u0275\u0275listener("valueChange", function InventoryComponent_Template_app_select_valueChange_20_listener($event) {
        return ctx.filterBrand = $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "app-select", 17);
      \u0275\u0275listener("valueChange", function InventoryComponent_Template_app_select_valueChange_21_listener($event) {
        return ctx.filterStatus = $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "app-select", 18);
      \u0275\u0275listener("valueChange", function InventoryComponent_Template_app_select_valueChange_22_listener($event) {
        return ctx.sortKey = $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(23, InventoryComponent_button_23_Template, 4, 0, "button", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275template(24, InventoryComponent_div_24_Template, 2, 2, "div", 20)(25, InventoryComponent_div_25_Template, 6, 1, "div", 21)(26, InventoryComponent_div_26_Template, 2, 1, "div", 20)(27, InventoryComponent_div_27_Template, 8, 3, "div", 22);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.wizardOpen);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.wizardOpen);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showStockPanel);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showStockPanel && ctx.selectedProduct);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQ);
      \u0275\u0275advance(2);
      \u0275\u0275property("options", ctx.categoryOpts)("value", ctx.filterCategory);
      \u0275\u0275advance();
      \u0275\u0275property("options", ctx.brandOpts)("value", ctx.filterBrand);
      \u0275\u0275advance();
      \u0275\u0275property("options", ctx.statusOpts)("value", ctx.filterStatus);
      \u0275\u0275advance();
      \u0275\u0275property("options", ctx.sortOpts)("value", ctx.sortKey);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasFilters);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && ctx.filtered.length === 0);
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
  ], styles: ['@charset "UTF-8";\n\n\n\n.inv-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-bottom: 4px;\n}\n.inv-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.inv-filters[_ngcontent-%COMP%]   app-select[_ngcontent-%COMP%] {\n  min-width: 150px;\n}\n.prod-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 16px;\n}\n.prod-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  transition: box-shadow 0.18s, transform 0.18s;\n  display: flex;\n  flex-direction: column;\n  cursor: default;\n}\n.prod-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-md);\n  transform: translateY(-2px);\n}\n.prod-img[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 160px;\n  background: var(--surface2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.prod-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.prod-body[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  flex: 1;\n}\n.prod-cat[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--t3);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.prod-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--t1);\n  line-height: 1.35;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.prod-sku[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--t3);\n  font-family: monospace;\n  margin-top: 1px;\n}\n.prod-price[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: var(--t1);\n  margin-top: 6px;\n}\n.prod-gst[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--t3);\n}\n.prod-foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 8px;\n  padding-top: 8px;\n  border-top: 1px solid var(--border);\n}\n.sk-card[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.sk-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 160px;\n  border-radius: 0;\n}\n.stock-stat[_ngcontent-%COMP%] {\n  flex: 1;\n  background: var(--surface2);\n  border-radius: var(--radius);\n  padding: 14px;\n  text-align: center;\n}\n.stock-stat-val[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 900;\n  color: var(--t1);\n}\n.stock-stat-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--t3);\n}\n.stock-info-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n  margin-top: 4px;\n}\n.stock-info-cell[_ngcontent-%COMP%] {\n  background: var(--surface2);\n  border-radius: var(--radius);\n  padding: 10px 12px;\n}\n.stock-info-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--t3);\n}\n.stock-info-val[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--t1);\n}\n.alert-err[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: var(--radius);\n  background: var(--red-bg);\n  color: var(--red);\n  border: 1px solid rgba(255, 97, 97, 0.3);\n  font-size: 13px;\n  margin-bottom: 4px;\n}\n@media (max-width: 700px) {\n  .inv-toolbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .inv-filters[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .inv-filters[_ngcontent-%COMP%]   app-select[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n  .prod-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 480px) {\n  .prod-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=inventory.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InventoryComponent, { className: "InventoryComponent", filePath: "src\\app\\pages\\inventory\\inventory.component.ts", lineNumber: 27 });
})();
export {
  InventoryComponent
};
//# sourceMappingURL=chunk-XTILDC5P.js.map
