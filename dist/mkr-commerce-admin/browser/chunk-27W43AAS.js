import {
  PASSWORD_REQUIREMENTS
} from "./chunk-3WTDUPBU.js";
import {
  ThemeService
} from "./chunk-7OGYHBBU.js";
import {
  extractErrorMessage
} from "./chunk-XY6GHRJG.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-OOFYAVIO.js";
import {
  AuthService
} from "./chunk-WXBPIA4S.js";
import "./chunk-O3NE7GYO.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-CADB6C7J.js";
import {
  CommonModule,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-PEVOVQSE.js";

// src/app/pages/set-password/set-password.component.ts
function SetPasswordComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275element(2, "div", 11);
    \u0275\u0275elementStart(3, "p", 12);
    \u0275\u0275text(4, "Verifying your invitation link\u2026");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function SetPasswordComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 10)(2, "div", 13);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 14);
    \u0275\u0275element(4, "circle", 15)(5, "path", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h2");
    \u0275\u0275text(7, "Link expired or invalid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 12);
    \u0275\u0275text(9, " This invitation link has expired or has already been used.");
    \u0275\u0275element(10, "br");
    \u0275\u0275text(11, " Please ask your admin to resend the invitation. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 17);
    \u0275\u0275listener("click", function SetPasswordComponent_ng_container_10_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToLogin());
    });
    \u0275\u0275text(13, "Back to Login");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function SetPasswordComponent_ng_container_11_p_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1, " You're setting up access for ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.maskedEmail);
  }
}
function SetPasswordComponent_ng_container_11__svg_svg_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 33);
    \u0275\u0275element(1, "path", 34)(2, "circle", 35);
    \u0275\u0275elementEnd();
  }
}
function SetPasswordComponent_ng_container_11__svg_svg_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 33);
    \u0275\u0275element(1, "path", 36)(2, "path", 37)(3, "line", 38);
    \u0275\u0275elementEnd();
  }
}
function SetPasswordComponent_ng_container_11_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "div", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r1.strength.score / 6 * 100, "%")("background", ctx_r1.strength.color);
  }
}
function SetPasswordComponent_ng_container_11_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("color", ctx_r1.strength.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.strength.label);
  }
}
function SetPasswordComponent_ng_container_11_ul_16_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span", 44);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const req_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("met", req_r4.test(ctx_r1.newPassword));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(req_r4.test(ctx_r1.newPassword) ? "\u2713" : "\u25CB");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", req_r4.label, " ");
  }
}
function SetPasswordComponent_ng_container_11_ul_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 42);
    \u0275\u0275template(1, SetPasswordComponent_ng_container_11_ul_16_li_1_Template, 4, 4, "li", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.requirements);
  }
}
function SetPasswordComponent_ng_container_11__svg_svg_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 33);
    \u0275\u0275element(1, "path", 34)(2, "circle", 35);
    \u0275\u0275elementEnd();
  }
}
function SetPasswordComponent_ng_container_11__svg_svg_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 33);
    \u0275\u0275element(1, "path", 36)(2, "path", 37)(3, "line", 38);
    \u0275\u0275elementEnd();
  }
}
function SetPasswordComponent_ng_container_11_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("match", ctx_r1.passwordsMatch);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.passwordsMatch ? "\u2713 Passwords match" : "\u2717 Passwords do not match", " ");
  }
}
function SetPasswordComponent_ng_container_11_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function SetPasswordComponent_ng_container_11_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Activate Account");
    \u0275\u0275elementEnd();
  }
}
function SetPasswordComponent_ng_container_11_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275element(1, "span", 48);
    \u0275\u0275text(2, " Setting up\u2026 ");
    \u0275\u0275elementEnd();
  }
}
function SetPasswordComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h2");
    \u0275\u0275text(2, "Set up your account");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SetPasswordComponent_ng_container_11_p_3_Template, 4, 1, "p", 18);
    \u0275\u0275elementStart(4, "form", 19, 0);
    \u0275\u0275listener("ngSubmit", function SetPasswordComponent_ng_container_11_Template_form_ngSubmit_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(6, "div", 20)(7, "label");
    \u0275\u0275text(8, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 21)(10, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function SetPasswordComponent_ng_container_11_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newPassword, $event) || (ctx_r1.newPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 23);
    \u0275\u0275listener("click", function SetPasswordComponent_ng_container_11_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showNew = !ctx_r1.showNew);
    });
    \u0275\u0275template(12, SetPasswordComponent_ng_container_11__svg_svg_12_Template, 3, 0, "svg", 24)(13, SetPasswordComponent_ng_container_11__svg_svg_13_Template, 4, 0, "svg", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, SetPasswordComponent_ng_container_11_div_14_Template, 2, 4, "div", 25)(15, SetPasswordComponent_ng_container_11_span_15_Template, 2, 3, "span", 26)(16, SetPasswordComponent_ng_container_11_ul_16_Template, 2, 1, "ul", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 20)(18, "label");
    \u0275\u0275text(19, "Confirm Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 21)(21, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function SetPasswordComponent_ng_container_11_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.confirmPassword, $event) || (ctx_r1.confirmPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 23);
    \u0275\u0275listener("click", function SetPasswordComponent_ng_container_11_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showConfirm = !ctx_r1.showConfirm);
    });
    \u0275\u0275template(23, SetPasswordComponent_ng_container_11__svg_svg_23_Template, 3, 0, "svg", 24)(24, SetPasswordComponent_ng_container_11__svg_svg_24_Template, 4, 0, "svg", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, SetPasswordComponent_ng_container_11_span_25_Template, 2, 3, "span", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, SetPasswordComponent_ng_container_11_div_26_Template, 2, 1, "div", 30);
    \u0275\u0275elementStart(27, "button", 31);
    \u0275\u0275template(28, SetPasswordComponent_ng_container_11_span_28_Template, 2, 0, "span", 9)(29, SetPasswordComponent_ng_container_11_span_29_Template, 3, 0, "span", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.maskedEmail);
    \u0275\u0275advance(7);
    \u0275\u0275property("type", ctx_r1.showNew ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newPassword);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.showNew);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showNew);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.newPassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.newPassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.newPassword);
    \u0275\u0275advance(5);
    \u0275\u0275property("type", ctx_r1.showConfirm ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.confirmPassword);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.showConfirm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showConfirm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.confirmPassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.state === "submitting" || !ctx_r1.passwordsMatch || ctx_r1.strength.score < 3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.state !== "submitting");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.state === "submitting");
  }
}
function SetPasswordComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 10)(2, "div", 49);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 14);
    \u0275\u0275element(4, "circle", 50)(5, "path", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h2");
    \u0275\u0275text(7, "Account activated!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 12);
    \u0275\u0275text(9, " Your account is ready. You can now log in to the MKR Commerce Admin portal with your company email and the password you just set. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 17);
    \u0275\u0275listener("click", function SetPasswordComponent_ng_container_12_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToLogin());
    });
    \u0275\u0275text(11, "Go to Login");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
var SetPasswordComponent = class _SetPasswordComponent {
  route;
  router;
  auth;
  theme;
  state = "validating";
  maskedEmail = "";
  tokenFromUrl = "";
  newPassword = "";
  confirmPassword = "";
  showNew = false;
  showConfirm = false;
  error = "";
  requirements = PASSWORD_REQUIREMENTS;
  get strength() {
    const p = this.newPassword;
    if (!p)
      return { score: 0, label: "", color: "" };
    let score = 0;
    if (p.length >= 8)
      score++;
    if (p.length >= 12)
      score++;
    if (this.hasUpper(p))
      score++;
    if (this.hasLower(p))
      score++;
    if (this.hasDigit(p))
      score++;
    if (this.hasSymbol(p))
      score++;
    if (score <= 2)
      return { score, label: "Weak", color: "#ef4444" };
    if (score <= 4)
      return { score, label: "Fair", color: "#f59e0b" };
    if (score <= 5)
      return { score, label: "Good", color: "#3b82f6" };
    return { score, label: "Strong", color: "#16a34a" };
  }
  get passwordsMatch() {
    return !!this.confirmPassword && this.newPassword === this.confirmPassword;
  }
  hasUpper(p) {
    return PASSWORD_REQUIREMENTS[0].test(p);
  }
  hasLower(p) {
    return PASSWORD_REQUIREMENTS[1].test(p);
  }
  hasDigit(p) {
    return PASSWORD_REQUIREMENTS[2].test(p);
  }
  hasSymbol(p) {
    return PASSWORD_REQUIREMENTS[3].test(p);
  }
  minLength(p) {
    return PASSWORD_REQUIREMENTS[4].test(p);
  }
  constructor(route, router, auth, theme) {
    this.route = route;
    this.router = router;
    this.auth = auth;
    this.theme = theme;
  }
  ngOnInit() {
    this.tokenFromUrl = this.route.snapshot.queryParamMap.get("token") ?? "";
    if (!this.tokenFromUrl) {
      this.state = "invalid";
      return;
    }
    this.validateToken();
  }
  validateToken() {
    this.auth.validateInvitation(this.tokenFromUrl).subscribe({
      next: (res) => {
        if (res.data?.valid) {
          this.maskedEmail = res.data.maskedEmail ?? "";
          this.state = "form";
        } else {
          this.state = "invalid";
        }
      },
      error: () => {
        this.state = "invalid";
      }
    });
  }
  submit() {
    this.error = "";
    if (this.strength.score < 3) {
      this.error = "Please choose a stronger password.";
      return;
    }
    if (this.newPassword !== this.confirmPassword) {
      this.error = "Passwords do not match.";
      return;
    }
    this.state = "submitting";
    this.auth.setPassword(this.tokenFromUrl, this.newPassword).subscribe({
      next: () => {
        this.state = "success";
      },
      error: (e) => {
        this.error = extractErrorMessage(e, "Failed to set password. Please try again.");
        this.state = "form";
      }
    });
  }
  goToLogin() {
    this.router.navigate(["/login"]);
  }
  static \u0275fac = function SetPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SetPasswordComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ThemeService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetPasswordComponent, selectors: [["app-set-password"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 6, consts: [["f", "ngForm"], [1, "sp-page"], [1, "sp-card"], [1, "sp-brand"], [1, "sp-logo"], ["width", "28", "height", "28", "viewBox", "0 0 28 28", "fill", "none"], ["width", "28", "height", "28", "rx", "8", "fill", "#2874F0"], ["d", "M7 14l5 5 9-9", "stroke", "#fff", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "sp-brand-name"], [4, "ngIf"], [1, "sp-center"], [1, "sp-spinner"], [1, "sp-hint"], [1, "sp-icon-wrap", "error"], ["width", "32", "height", "32", "viewBox", "0 0 24 24", "fill", "none"], ["cx", "12", "cy", "12", "r", "10", "stroke", "#ef4444", "stroke-width", "2"], ["d", "M15 9l-6 6M9 9l6 6", "stroke", "#ef4444", "stroke-width", "2", "stroke-linecap", "round"], [1, "btn-primary", 3, "click"], ["class", "sp-hint", 4, "ngIf"], ["autocomplete", "off", "novalidate", "", 3, "ngSubmit"], [1, "field"], [1, "input-wrap"], ["name", "newPassword", "placeholder", "Create a strong password", "required", "", "autocomplete", "new-password", 3, "ngModelChange", "type", "ngModel"], ["type", "button", "tabindex", "-1", 1, "toggle-eye", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", 4, "ngIf"], ["class", "strength-bar", 4, "ngIf"], ["class", "strength-label", 3, "color", 4, "ngIf"], ["class", "requirements", 4, "ngIf"], ["name", "confirmPassword", "placeholder", "Repeat your password", "required", "", "autocomplete", "new-password", 3, "ngModelChange", "type", "ngModel"], ["class", "match-hint", 3, "match", 4, "ngIf"], ["class", "sp-error", 4, "ngIf"], ["type", "submit", 1, "btn-primary", 3, "disabled"], ["class", "btn-loading", 4, "ngIf"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "3", "stroke", "currentColor", "stroke-width", "2"], ["d", "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["d", "M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["x1", "1", "y1", "1", "x2", "23", "y2", "23", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], [1, "strength-bar"], [1, "strength-fill"], [1, "strength-label"], [1, "requirements"], [3, "met", 4, "ngFor", "ngForOf"], [1, "req-icon"], [1, "match-hint"], [1, "sp-error"], [1, "btn-loading"], [1, "sp-spinner", "small"], [1, "sp-icon-wrap", "success"], ["cx", "12", "cy", "12", "r", "10", "stroke", "#16a34a", "stroke-width", "2"], ["d", "M8 12l3 3 5-5", "stroke", "#16a34a", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"]], template: function SetPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 5);
      \u0275\u0275element(5, "rect", 6)(6, "path", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "span", 8);
      \u0275\u0275text(8, "MKR Commerce");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, SetPasswordComponent_ng_container_9_Template, 5, 0, "ng-container", 9)(10, SetPasswordComponent_ng_container_10_Template, 14, 0, "ng-container", 9)(11, SetPasswordComponent_ng_container_11_Template, 30, 17, "ng-container", 9)(12, SetPasswordComponent_ng_container_12_Template, 12, 0, "ng-container", 9);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("dark", ctx.theme.themeClass() === "dark-mode");
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.state === "validating");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.state === "invalid");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.state === "form" || ctx.state === "submitting");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.state === "success");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ['@charset "UTF-8";\n\n\n\n.sp-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #1e1b4b 0%,\n      #1e3a8a 100%);\n  padding: 24px 16px;\n}\n.sp-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 40px;\n  width: 100%;\n  max-width: 440px;\n  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.18);\n}\n.sp-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 28px;\n}\n.sp-logo[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.sp-brand-name[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  color: #1e1b4b;\n  letter-spacing: -0.3px;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 8px;\n}\n.sp-hint[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  margin: 0 0 24px;\n  line-height: 1.6;\n}\n.sp-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 12px;\n  padding: 16px 0;\n}\n.sp-center[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.sp-center[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  max-width: 320px;\n}\n.sp-icon-wrap[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.sp-icon-wrap.error[_ngcontent-%COMP%] {\n  background: #fef2f2;\n}\n.sp-icon-wrap.success[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n}\n.sp-spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #2874F0;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.sp-spinner.small[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border-width: 2px;\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 6px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.field[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 6px;\n}\n.input-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 11px 44px 11px 14px;\n  border: 1.5px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 15px;\n  color: #111827;\n  outline: none;\n  box-sizing: border-box;\n  transition: border-color 0.15s;\n}\n.input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #2874F0;\n}\n.input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.toggle-eye[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #9ca3af;\n  padding: 0;\n  display: flex;\n  align-items: center;\n}\n.toggle-eye[_ngcontent-%COMP%]:hover {\n  color: #6b7280;\n}\n.strength-bar[_ngcontent-%COMP%] {\n  height: 4px;\n  background: #e5e7eb;\n  border-radius: 2px;\n  margin-top: 8px;\n  overflow: hidden;\n}\n.strength-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 2px;\n  transition: width 0.3s ease, background 0.3s ease;\n}\n.strength-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 600;\n  margin-top: 4px;\n}\n.requirements[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 10px 0 0;\n  padding: 0;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4px 12px;\n}\n.requirements[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  transition: color 0.2s;\n}\n.requirements[_ngcontent-%COMP%]   li.met[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.req-icon[_ngcontent-%COMP%] {\n  font-size: 11px;\n  width: 14px;\n  flex-shrink: 0;\n}\n.match-hint[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  margin-top: 6px;\n  color: #ef4444;\n}\n.match-hint.match[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.sp-error[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 14px;\n  margin-bottom: 16px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 13px;\n  background: #2874F0;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s, opacity 0.15s;\n  margin-top: 4px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d64d8;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.sp-page.dark[_ngcontent-%COMP%]   .sp-card[_ngcontent-%COMP%] {\n  background: #1f2937;\n  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.4);\n}\n.sp-page.dark[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #f9fafb;\n}\n.sp-page.dark[_ngcontent-%COMP%]   .sp-brand-name[_ngcontent-%COMP%] {\n  color: #f9fafb;\n}\n.sp-page.dark[_ngcontent-%COMP%]   .sp-hint[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.sp-page.dark[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #d1d5db;\n}\n.sp-page.dark[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: #374151;\n  border-color: #4b5563;\n  color: #f9fafb;\n}\n.sp-page.dark[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #2874F0;\n}\n.sp-page.dark[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #6b7280;\n}\n.sp-page.dark[_ngcontent-%COMP%]   .toggle-eye[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.sp-page.dark[_ngcontent-%COMP%]   .toggle-eye[_ngcontent-%COMP%]:hover {\n  color: #9ca3af;\n}\n.sp-page.dark[_ngcontent-%COMP%]   .strength-bar[_ngcontent-%COMP%] {\n  background: #374151;\n}\n/*# sourceMappingURL=set-password.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetPasswordComponent, { className: "SetPasswordComponent", filePath: "src\\app\\pages\\set-password\\set-password.component.ts", lineNumber: 19 });
})();
export {
  SetPasswordComponent
};
//# sourceMappingURL=chunk-27W43AAS.js.map
