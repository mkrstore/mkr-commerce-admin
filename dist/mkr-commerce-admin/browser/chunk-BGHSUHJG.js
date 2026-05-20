import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-MBTJ2QPL.js";
import {
  EventEmitter,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PEVOVQSE.js";

// src/app/shared/ui/input/input.component.ts
function AppInputComponent_label_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function AppInputComponent_label_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", ctx_r0.optLabel, ")");
  }
}
function AppInputComponent_label_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 5);
    \u0275\u0275text(1);
    \u0275\u0275template(2, AppInputComponent_label_1_span_2_Template, 2, 0, "span", 6)(3, AppInputComponent_label_1_span_3_Template, 2, 1, "span", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.required);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.optLabel);
  }
}
function AppInputComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 11);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMsg || ctx_r0.label + " is required", " ");
  }
}
function AppInputComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.hint);
  }
}
var AppInputComponent = class _AppInputComponent {
  label = "";
  type = "text";
  placeholder = "";
  required = false;
  value = "";
  touched = false;
  errorMsg = "";
  disabled = false;
  hint = "";
  optLabel = "";
  minVal = null;
  valueChange = new EventEmitter();
  get showError() {
    if (!this.touched || !this.required)
      return false;
    const v = this.value;
    if (v === null || v === void 0 || String(v).trim() === "")
      return true;
    if (this.type === "number" && this.minVal !== null)
      return Number(v) < this.minVal;
    return false;
  }
  onInput(e) {
    const raw = e.target.value;
    this.valueChange.emit(this.type === "number" ? raw === "" ? null : Number(raw) : raw);
  }
  onWheel(e) {
    if (this.type === "number")
      e.target.blur();
  }
  onKeyDown(e) {
    if (this.type === "number" && (e.key === "ArrowUp" || e.key === "ArrowDown")) {
      e.preventDefault();
    }
  }
  static \u0275fac = function AppInputComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppInputComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppInputComponent, selectors: [["app-input"]], inputs: { label: "label", type: "type", placeholder: "placeholder", required: "required", value: "value", touched: "touched", errorMsg: "errorMsg", disabled: "disabled", hint: "hint", optLabel: "optLabel", minVal: "minVal" }, outputs: { valueChange: "valueChange" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 9, consts: [[1, "field"], ["class", "field-label", 4, "ngIf"], [1, "f-input", 3, "input", "wheel", "keydown", "type", "value", "placeholder", "disabled"], ["class", "field-error", 4, "ngIf"], ["class", "field-hint", 4, "ngIf"], [1, "field-label"], ["class", "req", 4, "ngIf"], ["class", "opt", 4, "ngIf"], [1, "req"], [1, "opt"], [1, "field-error"], [1, "icon", "icon-xs"], [1, "field-hint"]], template: function AppInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, AppInputComponent_label_1_Template, 4, 3, "label", 1);
      \u0275\u0275elementStart(2, "input", 2);
      \u0275\u0275listener("input", function AppInputComponent_Template_input_input_2_listener($event) {
        return ctx.onInput($event);
      })("wheel", function AppInputComponent_Template_input_wheel_2_listener($event) {
        return ctx.onWheel($event);
      })("keydown", function AppInputComponent_Template_input_keydown_2_listener($event) {
        return ctx.onKeyDown($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, AppInputComponent_div_3_Template, 4, 1, "div", 3)(4, AppInputComponent_div_4_Template, 2, 1, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_3_0;
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.label);
      \u0275\u0275advance();
      \u0275\u0275classProp("error", ctx.showError);
      \u0275\u0275property("type", ctx.type)("value", (tmp_3_0 = ctx.value) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : "")("placeholder", ctx.placeholder)("disabled", ctx.disabled);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showError);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hint && !ctx.showError);
    }
  }, dependencies: [CommonModule, NgIf], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=input.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppInputComponent, { className: "AppInputComponent", filePath: "src\\app\\shared\\ui\\input\\input.component.ts", lineNumber: 35 });
})();

// src/app/shared/ui/select/select.component.ts
var _c0 = ["*"];
function AppSelectComponent_label_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function AppSelectComponent_label_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", ctx_r0.optLabel, ")");
  }
}
function AppSelectComponent_label_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 7);
    \u0275\u0275text(1);
    \u0275\u0275template(2, AppSelectComponent_label_1_span_2_Template, 2, 0, "span", 8)(3, AppSelectComponent_label_1_span_3_Template, 2, 1, "span", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.required);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.optLabel);
  }
}
function AppSelectComponent_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.placeholder);
  }
}
function AppSelectComponent_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const opt_r2 = ctx.$implicit;
    \u0275\u0275property("value", opt_r2.value)("disabled", (tmp_3_0 = opt_r2.disabled) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r2.label);
  }
}
function AppSelectComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 15);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMsg || ctx_r0.label + " is required", " ");
  }
}
function AppSelectComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.hint);
  }
}
var AppSelectComponent = class _AppSelectComponent {
  label = "";
  placeholder = "Select\u2026";
  options = [];
  value = "";
  required = false;
  touched = false;
  errorMsg = "";
  disabled = false;
  hint = "";
  optLabel = "";
  valueChange = new EventEmitter();
  get showError() {
    return this.touched && this.required && (this.value === null || this.value === void 0 || this.value === "");
  }
  onChange(e) {
    this.valueChange.emit(e.target.value);
  }
  static \u0275fac = function AppSelectComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppSelectComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppSelectComponent, selectors: [["app-select"]], inputs: { label: "label", placeholder: "placeholder", options: "options", value: "value", required: "required", touched: "touched", errorMsg: "errorMsg", disabled: "disabled", hint: "hint", optLabel: "optLabel" }, outputs: { valueChange: "valueChange" }, standalone: true, features: [\u0275\u0275StandaloneFeature], ngContentSelectors: _c0, decls: 8, vars: 9, consts: [[1, "field"], ["class", "field-label", 4, "ngIf"], [1, "f-select", 3, "change", "value", "disabled"], ["value", "", 4, "ngIf"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], ["class", "field-error", 4, "ngIf"], ["class", "field-hint", 4, "ngIf"], [1, "field-label"], ["class", "req", 4, "ngIf"], ["class", "opt", 4, "ngIf"], [1, "req"], [1, "opt"], ["value", ""], [3, "value", "disabled"], [1, "field-error"], [1, "icon", "icon-xs"], [1, "field-hint"]], template: function AppSelectComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, AppSelectComponent_label_1_Template, 4, 3, "label", 1);
      \u0275\u0275elementStart(2, "select", 2);
      \u0275\u0275listener("change", function AppSelectComponent_Template_select_change_2_listener($event) {
        return ctx.onChange($event);
      });
      \u0275\u0275template(3, AppSelectComponent_option_3_Template, 2, 1, "option", 3)(4, AppSelectComponent_option_4_Template, 2, 3, "option", 4);
      \u0275\u0275projection(5);
      \u0275\u0275elementEnd();
      \u0275\u0275template(6, AppSelectComponent_div_6_Template, 4, 1, "div", 5)(7, AppSelectComponent_div_7_Template, 2, 1, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.label);
      \u0275\u0275advance();
      \u0275\u0275classProp("error", ctx.showError);
      \u0275\u0275property("value", (tmp_2_0 = ctx.value) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : "")("disabled", ctx.disabled);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.placeholder);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.options);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.showError);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hint && !ctx.showError);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=select.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppSelectComponent, { className: "AppSelectComponent", filePath: "src\\app\\shared\\ui\\select\\select.component.ts", lineNumber: 45 });
})();

// src/app/shared/ui/textarea/textarea.component.ts
function AppTextareaComponent_label_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function AppTextareaComponent_label_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", ctx_r0.optLabel, ")");
  }
}
function AppTextareaComponent_label_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 5);
    \u0275\u0275text(1);
    \u0275\u0275template(2, AppTextareaComponent_label_1_span_2_Template, 2, 0, "span", 6)(3, AppTextareaComponent_label_1_span_3_Template, 2, 1, "span", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.required);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.optLabel);
  }
}
function AppTextareaComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 11);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMsg || ctx_r0.label + " is required", " ");
  }
}
function AppTextareaComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.hint);
  }
}
var AppTextareaComponent = class _AppTextareaComponent {
  label = "";
  placeholder = "";
  rows = 3;
  value = "";
  required = false;
  touched = false;
  errorMsg = "";
  disabled = false;
  hint = "";
  optLabel = "";
  valueChange = new EventEmitter();
  get showError() {
    return this.touched && this.required && !this.value?.trim();
  }
  onInput(e) {
    this.valueChange.emit(e.target.value);
  }
  static \u0275fac = function AppTextareaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppTextareaComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppTextareaComponent, selectors: [["app-textarea"]], inputs: { label: "label", placeholder: "placeholder", rows: "rows", value: "value", required: "required", touched: "touched", errorMsg: "errorMsg", disabled: "disabled", hint: "hint", optLabel: "optLabel" }, outputs: { valueChange: "valueChange" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 9, consts: [[1, "field"], ["class", "field-label", 4, "ngIf"], [1, "f-textarea", 3, "input", "rows", "placeholder", "disabled"], ["class", "field-error", 4, "ngIf"], ["class", "field-hint", 4, "ngIf"], [1, "field-label"], ["class", "req", 4, "ngIf"], ["class", "opt", 4, "ngIf"], [1, "req"], [1, "opt"], [1, "field-error"], [1, "icon", "icon-xs"], [1, "field-hint"]], template: function AppTextareaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, AppTextareaComponent_label_1_Template, 4, 3, "label", 1);
      \u0275\u0275elementStart(2, "textarea", 2);
      \u0275\u0275listener("input", function AppTextareaComponent_Template_textarea_input_2_listener($event) {
        return ctx.onInput($event);
      });
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, AppTextareaComponent_div_4_Template, 4, 1, "div", 3)(5, AppTextareaComponent_div_5_Template, 2, 1, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.label);
      \u0275\u0275advance();
      \u0275\u0275classProp("error", ctx.showError);
      \u0275\u0275property("rows", ctx.rows)("placeholder", ctx.placeholder)("disabled", ctx.disabled);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.value);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showError);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hint && !ctx.showError);
    }
  }, dependencies: [CommonModule, NgIf], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=textarea.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppTextareaComponent, { className: "AppTextareaComponent", filePath: "src\\app\\shared\\ui\\textarea\\textarea.component.ts", lineNumber: 32 });
})();

// src/app/shared/ui/checkbox/checkbox.component.ts
function AppCheckboxComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.hint);
  }
}
var AppCheckboxComponent = class _AppCheckboxComponent {
  label = "";
  checked = false;
  disabled = false;
  hint = "";
  checkedChange = new EventEmitter();
  onChange(e) {
    this.checkedChange.emit(e.target.checked);
  }
  static \u0275fac = function AppCheckboxComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppCheckboxComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppCheckboxComponent, selectors: [["app-checkbox"]], inputs: { label: "label", checked: "checked", disabled: "disabled", hint: "hint" }, outputs: { checkedChange: "checkedChange" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 4, consts: [[1, "check-label"], ["type", "checkbox", 3, "change", "checked", "disabled"], ["class", "field-hint", "style", "margin-left:2px", 4, "ngIf"], [1, "field-hint", 2, "margin-left", "2px"]], template: function AppCheckboxComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "label", 0)(1, "input", 1);
      \u0275\u0275listener("change", function AppCheckboxComponent_Template_input_change_1_listener($event) {
        return ctx.onChange($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "span");
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, AppCheckboxComponent_span_4_Template, 2, 1, "span", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("checked", ctx.checked)("disabled", ctx.disabled);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.label);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hint);
    }
  }, dependencies: [CommonModule, NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppCheckboxComponent, { className: "AppCheckboxComponent", filePath: "src\\app\\shared\\ui\\checkbox\\checkbox.component.ts", lineNumber: 21 });
})();

// src/app/shared/ui/button/button.component.ts
var _c02 = ["*"];
function AppBtnComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 3);
  }
}
function AppBtnComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap("icon-" + ctx_r0.iconSize);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.icon);
  }
}
var AppBtnComponent = class _AppBtnComponent {
  variant = "primary";
  size = "md";
  disabled = false;
  loading = false;
  icon = "";
  type = "button";
  clicked = new EventEmitter();
  get iconSize() {
    return this.size === "lg" ? "md" : "sm";
  }
  get classes() {
    const cls = ["btn", `btn-${this.variant}`];
    if (this.size !== "md")
      cls.push(`btn-${this.size}`);
    return cls.join(" ");
  }
  static \u0275fac = function AppBtnComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppBtnComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppBtnComponent, selectors: [["app-btn"]], inputs: { variant: "variant", size: "size", disabled: "disabled", loading: "loading", icon: "icon", type: "type" }, outputs: { clicked: "clicked" }, standalone: true, features: [\u0275\u0275StandaloneFeature], ngContentSelectors: _c02, decls: 4, vars: 6, consts: [[3, "click", "type", "disabled"], ["class", "btn-spinner", 4, "ngIf"], ["class", "icon", 3, "class", 4, "ngIf"], [1, "btn-spinner"], [1, "icon"]], template: function AppBtnComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function AppBtnComponent_Template_button_click_0_listener($event) {
        return ctx.clicked.emit($event);
      });
      \u0275\u0275template(1, AppBtnComponent_span_1_Template, 1, 0, "span", 1)(2, AppBtnComponent_span_2_Template, 2, 3, "span", 2);
      \u0275\u0275projection(3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classMap(ctx.classes);
      \u0275\u0275property("type", ctx.type)("disabled", ctx.disabled || ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.icon && !ctx.loading);
    }
  }, dependencies: [CommonModule, NgIf], styles: ["\n\n[_nghost-%COMP%] {\n  display: contents;\n}\n/*# sourceMappingURL=button.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppBtnComponent, { className: "AppBtnComponent", filePath: "src\\app\\shared\\ui\\button\\button.component.ts", lineNumber: 25 });
})();

export {
  AppInputComponent,
  AppSelectComponent,
  AppTextareaComponent,
  AppCheckboxComponent,
  AppBtnComponent
};
//# sourceMappingURL=chunk-BGHSUHJG.js.map
