import {
  ShopSettingsService
} from "./chunk-PLGIXLHX.js";
import {
  ThemeService
} from "./chunk-7OGYHBBU.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgModel
} from "./chunk-OOFYAVIO.js";
import {
  CommonModule,
  NgIf,
  UpperCasePipe
} from "./chunk-MBTJ2QPL.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
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

// src/app/pages/settings/settings.component.ts
function SettingsComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "label", 23);
    \u0275\u0275text(3, "Shop Name ");
    \u0275\u0275elementStart(4, "span", 24);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_19_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.settings.name, $event) || (ctx_r1.settings.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 26);
    \u0275\u0275text(8, "Printed in large text at top of receipt");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 22)(10, "label", 23);
    \u0275\u0275text(11, "Tagline / Type ");
    \u0275\u0275elementStart(12, "span", 27);
    \u0275\u0275text(13, "(optional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_19_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.settings.tagline, $event) || (ctx_r1.settings.tagline = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 22)(16, "label", 23);
    \u0275\u0275text(17, "Address ");
    \u0275\u0275elementStart(18, "span", 27);
    \u0275\u0275text(19, "(optional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "textarea", 29);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_19_Template_textarea_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.settings.address, $event) || (ctx_r1.settings.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 30)(22, "div", 22)(23, "label", 23);
    \u0275\u0275text(24, "Primary Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_19_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.settings.phone, $event) || (ctx_r1.settings.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 22)(27, "label", 23);
    \u0275\u0275text(28, "Secondary Phone ");
    \u0275\u0275elementStart(29, "span", 27);
    \u0275\u0275text(30, "(optional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_19_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.settings.phone2, $event) || (ctx_r1.settings.phone2 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 33)(33, "label", 23);
    \u0275\u0275text(34, "Email ");
    \u0275\u0275elementStart(35, "span", 27);
    \u0275\u0275text(36, "(optional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_19_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.settings.email, $event) || (ctx_r1.settings.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.settings.name);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.settings.tagline);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.settings.address);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.settings.phone);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.settings.phone2);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.settings.email);
  }
}
function SettingsComponent_div_32_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "span", 39);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " No GSTIN yet? That's fine. You can still bill customers. Add this when you register for GST. ");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_div_32_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "span", 39);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " GSTIN configured. GST invoices can be generated. ");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "label", 23);
    \u0275\u0275text(3, "GSTIN (GST Registration Number)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_32_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.settings.gstin, $event) || (ctx_r1.settings.gstin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 26);
    \u0275\u0275text(6, "15-digit number from GST portal \u2014 printed on tax invoices");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, SettingsComponent_div_32_div_7_Template, 4, 0, "div", 36)(8, SettingsComponent_div_32_div_8_Template, 4, 0, "div", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.settings.gstin);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.settings.gstin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.settings.gstin);
  }
}
function SettingsComponent_div_45_div_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Ph: ", ctx_r1.settings.phone, "");
  }
}
function SettingsComponent_div_45_div_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" / ", ctx_r1.settings.phone2, "");
  }
}
function SettingsComponent_div_45_div_6_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" | ", ctx_r1.settings.email, "");
  }
}
function SettingsComponent_div_45_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275template(1, SettingsComponent_div_45_div_6_span_1_Template, 2, 1, "span", 50)(2, SettingsComponent_div_45_div_6_span_2_Template, 2, 1, "span", 50)(3, SettingsComponent_div_45_div_6_span_3_Template, 2, 1, "span", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.settings.phone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.settings.phone2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.settings.email);
  }
}
function SettingsComponent_div_45_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.settings.address);
  }
}
function SettingsComponent_div_45_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "uppercase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("GSTIN: ", \u0275\u0275pipeBind1(2, 1, ctx_r1.settings.gstin), "");
  }
}
function SettingsComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 41)(2, "div", 42);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 43);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SettingsComponent_div_45_div_6_Template, 4, 3, "div", 44)(7, SettingsComponent_div_45_div_7_Template, 2, 1, "div", 45)(8, SettingsComponent_div_45_div_8_Template, 3, 3, "div", 46);
    \u0275\u0275elementStart(9, "div", 47);
    \u0275\u0275text(10, "================================");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 48);
    \u0275\u0275text(12, "Bill No: MKR-BILL-1001 \xB7 28 Apr 2026");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.settings.name || "Your Shop Name");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.settings.tagline || "Shop Type");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.settings.phone || ctx_r1.settings.phone2 || ctx_r1.settings.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.settings.address);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.settings.gstin);
  }
}
function SettingsComponent_div_58_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_div_58_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 53)(2, "div", 54);
    \u0275\u0275listener("click", function SettingsComponent_div_58_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.theme.set("light"));
    });
    \u0275\u0275elementStart(3, "span", 39);
    \u0275\u0275text(4, "light_mode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 55);
    \u0275\u0275text(6, "Light Mode");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, SettingsComponent_div_58_span_7_Template, 2, 0, "span", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 54);
    \u0275\u0275listener("click", function SettingsComponent_div_58_Template_div_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.theme.set("dark"));
    });
    \u0275\u0275elementStart(9, "span", 39);
    \u0275\u0275text(10, "dark_mode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 55);
    \u0275\u0275text(12, "Dark Mode");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, SettingsComponent_div_58_span_13_Template, 2, 0, "span", 56);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", !ctx_r1.theme.isDark());
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx_r1.theme.isDark());
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.theme.isDark());
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.theme.isDark());
  }
}
function SettingsComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 57)(2, "div", 58)(3, "span", 14);
    \u0275\u0275text(4, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Login & user accounts (JWT)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 58)(7, "span", 14);
    \u0275\u0275text(8, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " Staff roles \u2014 Admin / Sales / Inventory / Support");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 58)(11, "span", 14);
    \u0275\u0275text(12, "inventory_2");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Add, edit, delete products from UI");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 58)(15, "span", 14);
    \u0275\u0275text(16, "bar_chart");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " Real reports & analytics from database");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 58)(19, "span", 14);
    \u0275\u0275text(20, "currency_rupee");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, " UPI auto-verify via Razorpay webhook");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 58)(23, "span", 14);
    \u0275\u0275text(24, "picture_as_pdf");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, " Invoice PDF generation (iText 7 \u2014 Java)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 58)(27, "span", 14);
    \u0275\u0275text(28, "email");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, " Email invoice to customer automatically");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 58)(31, "span", 14);
    \u0275\u0275text(32, "chat");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, " WhatsApp bill delivery (Meta Cloud API)");
    \u0275\u0275elementEnd()()();
  }
}
function SettingsComponent_span_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_span_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275text(1, " Saved. New bills will use these details. ");
    \u0275\u0275elementEnd();
  }
}
var SettingsComponent = class _SettingsComponent {
  theme;
  svc;
  settings;
  saved = false;
  expanded = /* @__PURE__ */ new Set(["shop"]);
  // 'shop' open by default
  constructor(theme, svc) {
    this.theme = theme;
    this.svc = svc;
  }
  ngOnInit() {
    this.settings = this.svc.get();
  }
  toggle(section) {
    this.expanded.has(section) ? this.expanded.delete(section) : this.expanded.add(section);
  }
  isOpen(section) {
    return this.expanded.has(section);
  }
  save() {
    this.svc.save(this.settings);
    this.saved = true;
    setTimeout(() => this.saved = false, 2500);
  }
  static \u0275fac = function SettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsComponent)(\u0275\u0275directiveInject(ThemeService), \u0275\u0275directiveInject(ShopSettingsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 77, vars: 22, consts: [[1, "page", 2, "max-width", "680px"], [1, "page-hd"], [1, "page-hd-left"], [1, "page-hd-title"], [1, "page-hd-sub"], [1, "card"], [1, "card-hd", "acc-toggle", 3, "click"], [2, "display", "flex", "align-items", "center", "gap", "10px"], [1, "icon", "icon-sm", "icon-blue"], [1, "card-hd-title"], [2, "font-size", "11px", "color", "var(--t3)"], [1, "icon", "icon-sm", "icon-muted", "acc-arrow"], ["class", "card-body acc-body", 4, "ngIf"], [1, "icon", "icon-sm", "icon-amber"], [1, "icon", "icon-sm", "icon-muted"], [1, "icon", "icon-sm", "icon-purple"], [1, "card", "coming-card"], [2, "display", "flex", "align-items", "center", "gap", "12px"], [1, "btn", "btn-primary", 3, "click"], ["class", "icon icon-sm", 4, "ngIf"], ["style", "font-size:13px;color:var(--green);font-weight:500", 4, "ngIf"], [1, "card-body", "acc-body"], [1, "field"], [1, "field-label"], [1, "req"], ["type", "text", "placeholder", "e.g. MKR Store", 1, "f-input", 3, "ngModelChange", "ngModel"], [1, "field-hint"], [1, "opt"], ["type", "text", "placeholder", "e.g. Home Appliances & Electronics", 1, "f-input", 3, "ngModelChange", "ngModel"], ["placeholder", "12 Main Road, Gandhi Nagar, Chennai - 600001", "rows", "2", 1, "f-textarea", 3, "ngModelChange", "ngModel"], [1, "field-row"], ["type", "tel", "placeholder", "9876543210", "maxlength", "10", 1, "f-input", 3, "ngModelChange", "ngModel"], ["type", "tel", "placeholder", "9123456789", "maxlength", "10", 1, "f-input", 3, "ngModelChange", "ngModel"], [1, "field", 2, "max-width", "50%"], ["type", "email", "placeholder", "shop@gmail.com", 1, "f-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "29XXXXX1234Z5", "maxlength", "15", 1, "f-input", "gstin-input", 2, "max-width", "50%", 3, "ngModelChange", "ngModel"], ["class", "alert alert-warn", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], [1, "alert", "alert-warn"], [1, "icon", "icon-sm"], [1, "alert", "alert-success"], [1, "receipt-preview"], [1, "rp-name"], [1, "rp-tagline"], ["class", "rp-contact", 4, "ngIf"], ["class", "rp-addr", 4, "ngIf"], ["class", "rp-gstin", 4, "ngIf"], [1, "rp-div"], [1, "rp-sample"], [1, "rp-contact"], [4, "ngIf"], [1, "rp-addr"], [1, "rp-gstin"], [2, "display", "flex", "gap", "12px", "flex-wrap", "wrap"], [1, "theme-opt", 3, "click"], [1, "to-label"], ["class", "icon icon-sm icon-blue", 4, "ngIf"], [1, "coming-list"], [1, "coming-item"], [2, "font-size", "13px", "color", "var(--green)", "font-weight", "500"]], template: function SettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275text(4, "Settings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4);
      \u0275\u0275text(6, "Configure your shop details, receipt layout, and appearance");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 5)(8, "div", 6);
      \u0275\u0275listener("click", function SettingsComponent_Template_div_click_8_listener() {
        return ctx.toggle("shop");
      });
      \u0275\u0275elementStart(9, "div", 7)(10, "span", 8);
      \u0275\u0275text(11, "store");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div")(13, "div", 9);
      \u0275\u0275text(14, "Shop Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 10);
      \u0275\u0275text(16, "Name, address, contact \u2014 appears on every receipt");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "span", 11);
      \u0275\u0275text(18, "chevron_right");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(19, SettingsComponent_div_19_Template, 38, 6, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 5)(21, "div", 6);
      \u0275\u0275listener("click", function SettingsComponent_Template_div_click_21_listener() {
        return ctx.toggle("gst");
      });
      \u0275\u0275elementStart(22, "div", 7)(23, "span", 13);
      \u0275\u0275text(24, "receipt_long");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div")(26, "div", 9);
      \u0275\u0275text(27, "GST / Tax");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 10);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "span", 11);
      \u0275\u0275text(31, "chevron_right");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(32, SettingsComponent_div_32_Template, 9, 3, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 5)(34, "div", 6);
      \u0275\u0275listener("click", function SettingsComponent_Template_div_click_34_listener() {
        return ctx.toggle("preview");
      });
      \u0275\u0275elementStart(35, "div", 7)(36, "span", 14);
      \u0275\u0275text(37, "print");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div")(39, "div", 9);
      \u0275\u0275text(40, "Receipt Preview");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 10);
      \u0275\u0275text(42, "Live preview of your bill header");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(43, "span", 11);
      \u0275\u0275text(44, "chevron_right");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(45, SettingsComponent_div_45_Template, 13, 5, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 5)(47, "div", 6);
      \u0275\u0275listener("click", function SettingsComponent_Template_div_click_47_listener() {
        return ctx.toggle("theme");
      });
      \u0275\u0275elementStart(48, "div", 7)(49, "span", 15);
      \u0275\u0275text(50, "palette");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div")(52, "div", 9);
      \u0275\u0275text(53, "Appearance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 10);
      \u0275\u0275text(55);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(56, "span", 11);
      \u0275\u0275text(57, "chevron_right");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(58, SettingsComponent_div_58_Template, 14, 6, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 16)(60, "div", 6);
      \u0275\u0275listener("click", function SettingsComponent_Template_div_click_60_listener() {
        return ctx.toggle("coming");
      });
      \u0275\u0275elementStart(61, "div", 7)(62, "span", 14);
      \u0275\u0275text(63, "schedule");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "div")(65, "div", 9);
      \u0275\u0275text(66, "Coming with Backend");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "div", 10);
      \u0275\u0275text(68, "Login, roles, product management, auto reports");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(69, "span", 11);
      \u0275\u0275text(70, "chevron_right");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(71, SettingsComponent_div_71_Template, 34, 0, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "div", 17)(73, "button", 18);
      \u0275\u0275listener("click", function SettingsComponent_Template_button_click_73_listener() {
        return ctx.save();
      });
      \u0275\u0275template(74, SettingsComponent_span_74_Template, 2, 0, "span", 19);
      \u0275\u0275text(75);
      \u0275\u0275elementEnd();
      \u0275\u0275template(76, SettingsComponent_span_76_Template, 2, 0, "span", 20);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(17);
      \u0275\u0275classProp("open", ctx.isOpen("shop"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isOpen("shop"));
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1(" ", ctx.settings.gstin ? "GSTIN: " + ctx.settings.gstin : "Not configured \u2014 bills generated without GST", " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.isOpen("gst"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isOpen("gst"));
      \u0275\u0275advance(11);
      \u0275\u0275classProp("open", ctx.isOpen("preview"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isOpen("preview"));
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1("Currently: ", ctx.theme.themeLabel(), "");
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.isOpen("theme"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isOpen("theme"));
      \u0275\u0275advance(11);
      \u0275\u0275classProp("open", ctx.isOpen("coming"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isOpen("coming"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("btn-success", ctx.saved);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.saved);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.saved ? "Settings Saved!" : "Save Settings", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.saved);
    }
  }, dependencies: [CommonModule, NgIf, UpperCasePipe, FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel], styles: ['@charset "UTF-8";\n\n\n\n.acc-toggle[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.acc-arrow[_ngcontent-%COMP%] {\n  transition: transform 0.2s;\n}\n.acc-arrow.open[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.acc-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  animation: _ngcontent-%COMP%_slideDown 0.15s ease-out;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.gstin-input[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  font-weight: 500;\n  font-family: "Courier New", monospace;\n}\n.receipt-preview[_ngcontent-%COMP%] {\n  background: var(--surface2);\n  border: 1px dashed var(--border2);\n  border-radius: 8px;\n  padding: 1rem;\n  font-family:\n    "Courier New",\n    Courier,\n    monospace;\n  font-size: 12px;\n  text-align: center;\n  color: var(--t1);\n  max-width: 300px;\n  margin: 0 auto;\n}\n.receipt-preview[_ngcontent-%COMP%]   .rp-name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  letter-spacing: 1px;\n}\n.receipt-preview[_ngcontent-%COMP%]   .rp-tagline[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin-top: 2px;\n  color: var(--t2);\n}\n.receipt-preview[_ngcontent-%COMP%]   .rp-contact[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin-top: 2px;\n  color: var(--t2);\n}\n.receipt-preview[_ngcontent-%COMP%]   .rp-addr[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin-top: 2px;\n  color: var(--t3);\n}\n.receipt-preview[_ngcontent-%COMP%]   .rp-gstin[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: bold;\n  margin-top: 2px;\n}\n.receipt-preview[_ngcontent-%COMP%]   .rp-div[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--t3);\n  margin: 6px 0 4px;\n}\n.receipt-preview[_ngcontent-%COMP%]   .rp-sample[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--t3);\n}\n.theme-opt[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 120px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border: 2px solid var(--border2);\n  border-radius: var(--radius-md);\n  background: var(--surface2);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.theme-opt[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  background: var(--blue-light);\n}\n.theme-opt.active[_ngcontent-%COMP%] {\n  border-color: var(--blue);\n  background: var(--blue-light);\n}\n.to-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--t1);\n  flex: 1;\n}\n.coming-card[_ngcontent-%COMP%] {\n  background: var(--surface2);\n  opacity: 0.85;\n}\n.coming-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.coming-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: var(--t3);\n}\n/*# sourceMappingURL=settings.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src\\app\\pages\\settings\\settings.component.ts", lineNumber: 14 });
})();
export {
  SettingsComponent
};
//# sourceMappingURL=chunk-DL3JBZEP.js.map
