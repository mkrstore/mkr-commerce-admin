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
  NgModel
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
  NgClass,
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

// src/app/pages/reset-password/reset-password.component.ts
function ResetPasswordComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 7);
    \u0275\u0275element(2, "div", 8);
    \u0275\u0275elementStart(3, "p", 9);
    \u0275\u0275text(4, "Verifying your reset link\u2026");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function ResetPasswordComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 7)(2, "div", 10);
    \u0275\u0275text(3, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 11);
    \u0275\u0275text(5, "Link expired or invalid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 9);
    \u0275\u0275text(7, " This reset link has expired, been used, or is invalid.");
    \u0275\u0275element(8, "br");
    \u0275\u0275text(9, " Please request a new one from the login page. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 12);
    \u0275\u0275listener("click", function ResetPasswordComponent_ng_container_10_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToLogin());
    });
    \u0275\u0275text(11, "Back to Sign In");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function ResetPasswordComponent_ng_container_11_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span");
    \u0275\u0275text(2, "\u26A0");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, "");
  }
}
function ResetPasswordComponent_ng_container_11_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32);
    \u0275\u0275element(2, "div", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 34);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.strength.score / 6 * 100, "%")("background", ctx_r1.strength.color);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.strength.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.strength.label);
  }
}
function ResetPasswordComponent_ng_container_11_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "span");
    \u0275\u0275text(2, "\u2191 Uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "\u2193 Lowercase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "# Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "@ Symbol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "8+ chars");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("met", ctx_r1.hasUpper(ctx_r1.newPassword));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("met", ctx_r1.hasLower(ctx_r1.newPassword));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("met", ctx_r1.hasDigit(ctx_r1.newPassword));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("met", ctx_r1.hasSymbol(ctx_r1.newPassword));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("met", ctx_r1.minLength(ctx_r1.newPassword));
  }
}
function ResetPasswordComponent_ng_container_11_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1, "\u2713 Passwords match");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_ng_container_11_span_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1, "\u2717 Passwords do not match");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_ng_container_11_span_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 38);
  }
}
function ResetPasswordComponent_ng_container_11_span_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Reset Password \u2192");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_ng_container_11_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Resetting\u2026");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 13)(2, "div", 14);
    \u0275\u0275text(3, "Set new password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 15);
    \u0275\u0275text(5, " Resetting password for ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, ".");
    \u0275\u0275element(9, "br");
    \u0275\u0275text(10, " You cannot reuse your last 2 passwords. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, ResetPasswordComponent_ng_container_11_div_11_Template, 4, 1, "div", 16);
    \u0275\u0275elementStart(12, "div", 17)(13, "label", 18);
    \u0275\u0275text(14, "New password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 19)(16, "span", 20);
    \u0275\u0275text(17, "\u{1F512}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function ResetPasswordComponent_ng_container_11_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newPassword, $event) || (ctx_r1.newPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 22);
    \u0275\u0275listener("click", function ResetPasswordComponent_ng_container_11_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showNew = !ctx_r1.showNew);
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, ResetPasswordComponent_ng_container_11_div_21_Template, 5, 7, "div", 23)(22, ResetPasswordComponent_ng_container_11_div_22_Template, 11, 10, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 17)(24, "label", 18);
    \u0275\u0275text(25, "Confirm new password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 19)(27, "span", 20);
    \u0275\u0275text(28, "\u{1F512}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function ResetPasswordComponent_ng_container_11_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.confirmPassword, $event) || (ctx_r1.confirmPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function ResetPasswordComponent_ng_container_11_Template_input_keydown_enter_29_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 22);
    \u0275\u0275listener("click", function ResetPasswordComponent_ng_container_11_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showConfirm = !ctx_r1.showConfirm);
    });
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(32, ResetPasswordComponent_ng_container_11_span_32_Template, 2, 0, "span", 26)(33, ResetPasswordComponent_ng_container_11_span_33_Template, 2, 0, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 28);
    \u0275\u0275listener("click", function ResetPasswordComponent_ng_container_11_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275template(35, ResetPasswordComponent_ng_container_11_span_35_Template, 1, 0, "span", 29)(36, ResetPasswordComponent_ng_container_11_span_36_Template, 2, 0, "span", 6)(37, ResetPasswordComponent_ng_container_11_span_37_Template, 2, 0, "span", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.maskedEmail);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance(7);
    \u0275\u0275property("type", ctx_r1.showNew ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newPassword);
    \u0275\u0275property("disabled", ctx_r1.state === "submitting");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.showNew ? "\u{1F648}" : "\u{1F441}\uFE0F", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.newPassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.newPassword);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("fg-input-ok", ctx_r1.passwordsMatch)("fg-input-err", ctx_r1.confirmPassword && !ctx_r1.passwordsMatch);
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r1.showConfirm ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.confirmPassword);
    \u0275\u0275property("disabled", ctx_r1.state === "submitting");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.showConfirm ? "\u{1F648}" : "\u{1F441}\uFE0F", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.passwordsMatch);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.confirmPassword && !ctx_r1.passwordsMatch);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.state === "submitting" || !ctx_r1.passwordsMatch || ctx_r1.strength.score < 3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.state === "submitting");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.state !== "submitting");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.state === "submitting");
  }
}
function ResetPasswordComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 7)(2, "div", 39);
    \u0275\u0275text(3, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 11);
    \u0275\u0275text(5, "Password reset!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 9);
    \u0275\u0275text(7, " Your password has been updated successfully.");
    \u0275\u0275element(8, "br");
    \u0275\u0275text(9, " All active sessions have been signed out for security. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 12);
    \u0275\u0275listener("click", function ResetPasswordComponent_ng_container_12_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToLogin());
    });
    \u0275\u0275text(11, "Sign In with New Password");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
var ResetPasswordComponent = class _ResetPasswordComponent {
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
  requirements = PASSWORD_REQUIREMENTS;
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
    this.auth.validateResetToken(this.tokenFromUrl).subscribe({
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
    if (this.newPassword !== this.confirmPassword) {
      this.error = "Passwords do not match.";
      return;
    }
    this.state = "submitting";
    this.auth.resetPassword(this.tokenFromUrl, this.newPassword).subscribe({
      next: () => {
        this.state = "success";
      },
      error: (e) => {
        this.error = extractErrorMessage(e, "Reset failed. Please try again.");
        this.state = "form";
      }
    });
  }
  goToLogin() {
    this.router.navigate(["/login"]);
  }
  static \u0275fac = function ResetPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResetPasswordComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ThemeService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPasswordComponent, selectors: [["app-reset-password"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 5, consts: [[1, "rp-shell", 3, "ngClass"], [1, "rp-card"], [1, "rp-logo"], [1, "logo-mkr"], [1, "logo-commerce"], [1, "logo-badge"], [4, "ngIf"], [1, "rp-center"], [1, "rp-spinner"], [1, "rp-hint"], [1, "rp-state-icon"], [1, "rp-state-title"], [1, "rp-btn-primary", 3, "click"], [1, "rp-head"], [1, "rp-title"], [1, "rp-sub"], ["class", "rp-error", 4, "ngIf"], [1, "fg"], [1, "fg-label"], [1, "fg-input"], [1, "fgi-icon"], ["placeholder", "Min. 8 chars, upper, lower, number, symbol", 3, "ngModelChange", "type", "ngModel", "disabled"], ["type", "button", 1, "fgi-eye", 3, "click"], ["class", "strength-bar", 4, "ngIf"], ["class", "pw-reqs", 4, "ngIf"], ["placeholder", "Re-enter new password", 3, "ngModelChange", "keydown.enter", "type", "ngModel", "disabled"], ["class", "match-hint ok", 4, "ngIf"], ["class", "match-hint err", 4, "ngIf"], [1, "rp-btn-primary", 3, "click", "disabled"], ["class", "rp-spinner sm", 4, "ngIf"], [1, "rp-error"], [1, "strength-bar"], [1, "strength-track"], [1, "strength-fill"], [1, "strength-label"], [1, "pw-reqs"], [1, "match-hint", "ok"], [1, "match-hint", "err"], [1, "rp-spinner", "sm"], [1, "rp-state-icon", "success"]], template: function ResetPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "MKR");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6, "Commerce");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 5);
      \u0275\u0275text(8, "Admin");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, ResetPasswordComponent_ng_container_9_Template, 5, 0, "ng-container", 6)(10, ResetPasswordComponent_ng_container_10_Template, 12, 0, "ng-container", 6)(11, ResetPasswordComponent_ng_container_11_Template, 38, 22, "ng-container", 6)(12, ResetPasswordComponent_ng_container_12_Template, 12, 0, "ng-container", 6);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.theme.themeClass());
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.state === "validating");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.state === "invalid");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.state === "form" || ctx.state === "submitting");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.state === "success");
    }
  }, dependencies: [CommonModule, NgClass, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.rp-shell[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f0f2f6;\n  padding: 24px 16px;\n  font-family:\n    "Inter",\n    "Roboto",\n    system-ui,\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n}\n.rp-shell.dark-mode[_ngcontent-%COMP%] {\n  background: #0D1117;\n}\n.rp-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 440px;\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 36px;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1);\n}\n.rp-shell.dark-mode[_ngcontent-%COMP%]   .rp-card[_ngcontent-%COMP%] {\n  background: #161B22;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n}\n.rp-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 4px;\n  margin-bottom: 28px;\n}\n.logo-mkr[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 900;\n  color: #58A6FF;\n  letter-spacing: -1px;\n}\n.logo-commerce[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  color: #111827;\n  letter-spacing: -0.5px;\n}\n.logo-badge[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  font-size: 9px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  color: #7c3aed;\n  background: rgba(124, 58, 237, 0.15);\n  border: 1px solid rgba(124, 58, 237, 0.3);\n  border-radius: 20px;\n  padding: 2px 7px;\n}\n.rp-shell.dark-mode[_ngcontent-%COMP%]   .logo-commerce[_ngcontent-%COMP%] {\n  color: #f0f6fc;\n}\n.rp-head[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.rp-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: #111827;\n  margin-bottom: 6px;\n}\n.rp-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6B7280;\n  line-height: 1.5;\n}\n.rp-shell.dark-mode[_ngcontent-%COMP%]   .rp-title[_ngcontent-%COMP%] {\n  color: #f0f6fc;\n}\n.rp-shell.dark-mode[_ngcontent-%COMP%]   .rp-sub[_ngcontent-%COMP%] {\n  color: #8B949E;\n}\n.rp-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 12px;\n  padding: 16px 0;\n}\n.rp-state-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n}\n.rp-state-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 800;\n  color: #111827;\n}\n.rp-hint[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6B7280;\n  line-height: 1.6;\n  margin: 0;\n}\n.rp-shell.dark-mode[_ngcontent-%COMP%]   .rp-state-title[_ngcontent-%COMP%] {\n  color: #f0f6fc;\n}\n.rp-shell.dark-mode[_ngcontent-%COMP%]   .rp-hint[_ngcontent-%COMP%] {\n  color: #8B949E;\n}\n.rp-spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid rgba(40, 116, 240, 0.2);\n  border-top-color: #2874F0;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.rp-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff1f1;\n  border: 1px solid #fca5a5;\n  border-left: 4px solid #ef4444;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 13px;\n  color: #991b1b;\n  margin-bottom: 16px;\n}\n.rp-shell.dark-mode[_ngcontent-%COMP%]   .rp-error[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  border-color: rgba(239, 68, 68, 0.3);\n  color: #FF7B7B;\n}\n.fg[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.fg-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 700;\n  color: #374151;\n  margin-bottom: 6px;\n}\n.rp-shell.dark-mode[_ngcontent-%COMP%]   .fg-label[_ngcontent-%COMP%] {\n  color: #8B949E;\n}\n.fg-input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border: 1.5px solid #d1d5db;\n  border-radius: 10px;\n  padding: 0 12px;\n  height: 46px;\n  background: #f9fafb;\n  transition: border-color 0.15s, background 0.15s;\n}\n.fg-input[_ngcontent-%COMP%]:focus-within {\n  border-color: #2874F0;\n  background: #fff;\n  box-shadow: 0 0 0 3px rgba(40, 116, 240, 0.1);\n}\n.fg-input.fg-input-err[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.fg-input.fg-input-ok[_ngcontent-%COMP%] {\n  border-color: #16a34a;\n}\n.fg-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  background: transparent;\n  outline: none;\n  font-size: 14px;\n  color: #111827;\n  font-family: inherit;\n}\n.fg-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.rp-shell.dark-mode[_ngcontent-%COMP%]   .fg-input[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.1);\n  background: #1F2937;\n}\n.rp-shell.dark-mode[_ngcontent-%COMP%]   .fg-input[_ngcontent-%COMP%]:focus-within {\n  border-color: #58A6FF;\n  background: #1F2937;\n}\n.rp-shell.dark-mode[_ngcontent-%COMP%]   .fg-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  color: #f0f6fc;\n}\n.fgi-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  flex-shrink: 0;\n  opacity: 0.5;\n}\n.fgi-eye[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 14px;\n  padding: 0;\n  opacity: 0.5;\n}\n.fgi-eye[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.strength-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 6px;\n}\n.strength-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 4px;\n  background: #e5e7eb;\n  border-radius: 2px;\n  overflow: hidden;\n}\n.strength-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 2px;\n  transition: width 0.3s, background 0.3s;\n}\n.strength-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  min-width: 44px;\n}\n.pw-reqs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  margin-top: 8px;\n}\n.pw-reqs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: #f3f4f6;\n  color: #9ca3af;\n  transition: all 0.15s;\n}\n.pw-reqs[_ngcontent-%COMP%]   span.met[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.12);\n  color: #16a34a;\n}\n.rp-shell.dark-mode[_ngcontent-%COMP%]   .pw-reqs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  color: #484F58;\n}\n.rp-shell.dark-mode[_ngcontent-%COMP%]   .pw-reqs[_ngcontent-%COMP%]   span.met[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.15);\n  color: #4ade80;\n}\n.match-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  margin-top: 4px;\n  display: block;\n}\n.match-hint.ok[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.match-hint.err[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.rp-captcha[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 16px 0;\n}\n.rp-btn-primary[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  background: #2874F0;\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  font-size: 15px;\n  font-weight: 700;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  font-family: inherit;\n  transition: background 0.15s;\n  margin-top: 4px;\n}\n.rp-btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1a5fc8;\n}\n.rp-btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.rp-spinner.sm[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n/*# sourceMappingURL=reset-password.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPasswordComponent, { className: "ResetPasswordComponent", filePath: "src\\app\\pages\\reset-password\\reset-password.component.ts", lineNumber: 19 });
})();
export {
  ResetPasswordComponent
};
//# sourceMappingURL=chunk-VSZFDXAQ.js.map
