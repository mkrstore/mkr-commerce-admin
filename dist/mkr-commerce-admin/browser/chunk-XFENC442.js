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
  AuthService,
  ROLE_META,
  ROLE_ORDER
} from "./chunk-WXBPIA4S.js";
import "./chunk-O3NE7GYO.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-CADB6C7J.js";
import {
  CommonModule,
  Location,
  NgClass,
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

// src/app/pages/login/login.component.ts
function LoginComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "span", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 42)(4, "div", 43);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 44);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", r_r1.color + "22")("color", r_r1.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r1.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r1.desc);
  }
}
function LoginComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "span");
    \u0275\u0275text(2, "\u26A0");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function LoginComponent_span_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 46);
  }
}
function LoginComponent_span_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Sign In \u2192");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Signing in\u2026");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275listener("click", function LoginComponent_div_71_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeForgotPassword());
    });
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_72_ng_container_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "span");
    \u0275\u0275text(2, "\u26A0");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.fpError, " ");
  }
}
function LoginComponent_div_72_ng_container_1_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 60);
  }
}
function LoginComponent_div_72_ng_container_1_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Send Reset Link \u2192");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_72_ng_container_1_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Sending\u2026");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_72_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 49)(2, "div", 50);
    \u0275\u0275text(3, "\u{1F511}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 51);
    \u0275\u0275text(5, "Forgot your password?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 52);
    \u0275\u0275text(7, "Enter your staff email and we'll send you a secure reset link.");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, LoginComponent_div_72_ng_container_1_div_8_Template, 4, 1, "div", 53);
    \u0275\u0275elementStart(9, "div", 18)(10, "label", 19);
    \u0275\u0275text(11, "Staff email address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 20)(13, "span", 21);
    \u0275\u0275text(14, "\u2709");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_div_72_ng_container_1_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.fpEmail, $event) || (ctx_r1.fpEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function LoginComponent_div_72_ng_container_1_Template_input_keydown_enter_15_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sendResetLink());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 55)(17, "button", 56);
    \u0275\u0275listener("click", function LoginComponent_div_72_ng_container_1_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeForgotPassword());
    });
    \u0275\u0275text(18, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 57);
    \u0275\u0275listener("click", function LoginComponent_div_72_ng_container_1_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sendResetLink());
    });
    \u0275\u0275template(20, LoginComponent_div_72_ng_container_1_span_20_Template, 1, 0, "span", 58)(21, LoginComponent_div_72_ng_container_1_span_21_Template, 2, 0, "span", 29)(22, LoginComponent_div_72_ng_container_1_span_22_Template, 2, 0, "span", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.fpError);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.fpEmail);
    \u0275\u0275property("disabled", ctx_r1.fpLoading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.fpLoading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.fpLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.fpLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.fpLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.fpLoading);
  }
}
function LoginComponent_div_72_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 61)(2, "div", 62);
    \u0275\u0275text(3, "\u2709\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 51);
    \u0275\u0275text(5, "Check your email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 52);
    \u0275\u0275text(7, " If ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " is registered, you'll receive a reset link within a few minutes. Check your spam folder if you don't see it. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 63);
    \u0275\u0275text(12, "Link expires in 60 minutes.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 64);
    \u0275\u0275listener("click", function LoginComponent_div_72_ng_container_2_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeForgotPassword());
    });
    \u0275\u0275text(14, " Back to Sign In ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.fpEmail);
  }
}
function LoginComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275template(1, LoginComponent_div_72_ng_container_1_Template, 23, 8, "ng-container", 29)(2, LoginComponent_div_72_ng_container_2_Template, 15, 1, "ng-container", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.theme.themeClass());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.modal === "form");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.modal === "sent");
  }
}
var LoginComponent = class _LoginComponent {
  theme;
  auth;
  router;
  route;
  location;
  // ── Login form ──────────────────────────────────────────────────────────
  identifier = "";
  password = "";
  showPwd = false;
  loading = false;
  error = "";
  // ── Forgot password modal ───────────────────────────────────────────────
  modal = "closed";
  fpEmail = "";
  fpLoading = false;
  fpError = "";
  roleCards = ROLE_ORDER.map((r) => ({
    icon: ROLE_META[r].icon,
    name: ROLE_META[r].name,
    desc: ROLE_META[r].description,
    color: ROLE_META[r].color
  }));
  static ERROR_MESSAGES = {
    user_not_found: "No staff account found for this Google email. Contact your admin.",
    account_deactivated: "Your account has been deactivated. Contact your admin.",
    missing_email: "Google did not share your email address. Please try again.",
    server_error: "Service temporarily unavailable. Please try again later.",
    oauth_failed: "Google sign-in failed. Please try again."
  };
  constructor(theme, auth, router, route, location) {
    this.theme = theme;
    this.auth = auth;
    this.router = router;
    this.route = route;
    this.location = location;
    const code = this.route.snapshot.queryParams["error"];
    if (code) {
      this.error = _LoginComponent.ERROR_MESSAGES[code] ?? "Google sign-in failed. Please try again.";
      this.location.replaceState("/login");
      return;
    }
    if (this.auth.isLoggedIn())
      this.router.navigate(["/dashboard"]);
  }
  // ── Login ───────────────────────────────────────────────────────────────
  login() {
    this.error = "";
    if (!this.identifier.trim() || !this.password) {
      this.error = "Please enter your email or phone and password.";
      return;
    }
    this.loading = true;
    this.auth.login(this.identifier.trim(), this.password).subscribe({
      next: () => this.router.navigate(["/dashboard"]),
      error: (e) => {
        this.error = extractErrorMessage(e, "Sign in failed. Please try again.");
        this.loading = false;
      }
    });
  }
  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }
  // ── Forgot password modal ───────────────────────────────────────────────
  openForgotPassword() {
    this.fpEmail = this.identifier.includes("@") ? this.identifier : "";
    this.fpError = "";
    this.modal = "form";
  }
  closeForgotPassword() {
    this.modal = "closed";
    this.fpEmail = "";
    this.fpError = "";
    this.fpLoading = false;
  }
  sendResetLink() {
    this.fpError = "";
    if (!this.fpEmail.trim()) {
      this.fpError = "Please enter your email address.";
      return;
    }
    this.fpLoading = true;
    this.auth.forgotPassword(this.fpEmail.trim()).subscribe({
      next: () => {
        this.fpLoading = false;
        this.modal = "sent";
      },
      error: (e) => {
        this.fpError = extractErrorMessage(e);
        this.fpLoading = false;
      }
    });
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(ThemeService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Location));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 73, vars: 20, consts: [[1, "login-shell", 3, "ngClass"], [1, "lp-left"], [1, "lp-logo"], [1, "logo-mkr"], [1, "logo-commerce"], [1, "logo-badge"], [1, "lp-tagline"], [1, "lp-desc"], [1, "lp-roles"], ["class", "rc", 4, "ngFor", "ngForOf"], [1, "lp-footer"], [1, "lf-dot"], [1, "lp-right"], [1, "login-card"], [1, "lc-head"], [1, "lc-greeting"], [1, "lc-sub"], ["class", "lc-error", 4, "ngIf"], [1, "fg"], [1, "fg-label"], [1, "fg-input"], [1, "fgi-icon"], ["type", "text", "placeholder", "your@company.com or 9876543210", "autocomplete", "off", 3, "ngModelChange", "keydown.enter", "ngModel", "disabled"], [1, "fg-label-row"], ["type", "button", 1, "fg-forgot", 3, "click"], ["placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "autocomplete", "new-password", 3, "ngModelChange", "keydown.enter", "type", "ngModel", "disabled"], ["type", "button", 1, "fgi-eye", 3, "click"], [1, "btn-signin", 3, "click", "disabled"], ["class", "bsi-spinner", 4, "ngIf"], [4, "ngIf"], [1, "or-divider"], [1, "btn-google", 3, "click", "disabled"], ["width", "18", "height", "18", "viewBox", "0 0 18 18", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z", "fill", "#4285F4"], ["d", "M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z", "fill", "#34A853"], ["d", "M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z", "fill", "#FBBC05"], ["d", "M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z", "fill", "#EA4335"], [1, "lc-note"], ["class", "fp-overlay", 3, "click", 4, "ngIf"], ["class", "fp-modal", 3, "ngClass", 4, "ngIf"], [1, "rc"], [1, "rc-icon"], [1, "rc-body"], [1, "rc-name"], [1, "rc-desc"], [1, "lc-error"], [1, "bsi-spinner"], [1, "fp-overlay", 3, "click"], [1, "fp-modal", 3, "ngClass"], [1, "fpm-header"], [1, "fpm-icon"], [1, "fpm-title"], [1, "fpm-sub"], ["class", "fpm-error", 4, "ngIf"], ["type", "email", "placeholder", "your@company.com", "autocomplete", "off", 3, "ngModelChange", "keydown.enter", "ngModel", "disabled"], [1, "fpm-actions"], ["type", "button", 1, "fpm-btn-cancel", 3, "click", "disabled"], ["type", "button", 1, "fpm-btn-send", 3, "click", "disabled"], ["class", "bsi-spinner sm", 4, "ngIf"], [1, "fpm-error"], [1, "bsi-spinner", "sm"], [1, "fpm-success"], [1, "fpm-success-icon"], [1, "fpm-note"], ["type", "button", 1, "fpm-btn-send", 3, "click"]], template: function LoginComponent_Template(rf, ctx) {
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
      \u0275\u0275elementStart(9, "div", 6);
      \u0275\u0275text(10, "Your complete retail");
      \u0275\u0275element(11, "br");
      \u0275\u0275text(12, "management system");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 7);
      \u0275\u0275text(14, " One platform for your entire team \u2014 billing, inventory, analytics, and customer management. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 8);
      \u0275\u0275template(16, LoginComponent_div_16_Template, 8, 7, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 10)(18, "span");
      \u0275\u0275text(19, "\u{1F510} Secure");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "span", 11);
      \u0275\u0275text(21, "\xB7");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "span");
      \u0275\u0275text(23, "\u{1F3AD} Multi-role");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "span", 11);
      \u0275\u0275text(25, "\xB7");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "span");
      \u0275\u0275text(27, "\u{1F6E1} Role-based access");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "div", 12)(29, "div", 13)(30, "div", 14)(31, "div", 15);
      \u0275\u0275text(32, "Welcome back \u{1F44B}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 16);
      \u0275\u0275text(34, "Sign in to MKR Commerce Admin");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(35, LoginComponent_div_35_Template, 4, 1, "div", 17);
      \u0275\u0275elementStart(36, "div", 18)(37, "label", 19);
      \u0275\u0275text(38, "Email or Phone number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 20)(40, "span", 21);
      \u0275\u0275text(41, "\u{1F464}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_42_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.identifier, $event) || (ctx.identifier = $event);
        return $event;
      });
      \u0275\u0275listener("keydown.enter", function LoginComponent_Template_input_keydown_enter_42_listener() {
        return ctx.login();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(43, "div", 18)(44, "div", 23)(45, "label", 19);
      \u0275\u0275text(46, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "button", 24);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_47_listener() {
        return ctx.openForgotPassword();
      });
      \u0275\u0275text(48, "Forgot password?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div", 20)(50, "span", 21);
      \u0275\u0275text(51, "\u{1F512}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "input", 25);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_52_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return $event;
      });
      \u0275\u0275listener("keydown.enter", function LoginComponent_Template_input_keydown_enter_52_listener() {
        return ctx.login();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "button", 26);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_53_listener() {
        return ctx.showPwd = !ctx.showPwd;
      });
      \u0275\u0275text(54);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(55, "button", 27);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_55_listener() {
        return ctx.login();
      });
      \u0275\u0275template(56, LoginComponent_span_56_Template, 1, 0, "span", 28)(57, LoginComponent_span_57_Template, 2, 0, "span", 29)(58, LoginComponent_span_58_Template, 2, 0, "span", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 30)(60, "span");
      \u0275\u0275text(61, "or continue with");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "button", 31);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_62_listener() {
        return ctx.loginWithGoogle();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(63, "svg", 32);
      \u0275\u0275element(64, "path", 33)(65, "path", 34)(66, "path", 35)(67, "path", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275text(68, " Continue with Google ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(69, "div", 37);
      \u0275\u0275text(70, "Don't have an account? Contact your administrator to get access.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(71, LoginComponent_div_71_Template, 1, 0, "div", 38)(72, LoginComponent_div_72_Template, 3, 3, "div", 39);
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.theme.themeClass());
      \u0275\u0275advance(16);
      \u0275\u0275property("ngForOf", ctx.roleCards);
      \u0275\u0275advance(19);
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("fg-input-err", ctx.error && !ctx.loading);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.identifier);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("fg-input-err", ctx.error && !ctx.loading);
      \u0275\u0275advance(3);
      \u0275\u0275property("type", ctx.showPwd ? "text" : "password");
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.showPwd ? "\u{1F648}" : "\u{1F441}\uFE0F", " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.modal !== "closed");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.modal !== "closed");
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.login-shell[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background: #0D1117;\n  font-family:\n    "Inter",\n    "Roboto",\n    system-ui,\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n}\n.lp-left[_ngcontent-%COMP%] {\n  width: 420px;\n  flex-shrink: 0;\n  background:\n    linear-gradient(\n      160deg,\n      #0f172a 0%,\n      #1e1b4b 50%,\n      #0f172a 100%);\n  padding: 48px 40px;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  position: relative;\n  overflow: hidden;\n}\n.lp-left[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -80px;\n  left: -80px;\n  width: 400px;\n  height: 400px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(124, 58, 237, 0.2) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.lp-left[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -60px;\n  right: -60px;\n  width: 300px;\n  height: 300px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(40, 116, 240, 0.15) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.lp-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 4px;\n  margin-bottom: 32px;\n}\n.logo-mkr[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 900;\n  color: #58A6FF;\n  letter-spacing: -1px;\n}\n.logo-commerce[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #f0f6fc;\n  letter-spacing: -0.5px;\n}\n.logo-badge[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  font-size: 10px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  color: #7c3aed;\n  background: rgba(124, 58, 237, 0.2);\n  border: 1px solid rgba(124, 58, 237, 0.4);\n  border-radius: 20px;\n  padding: 2px 8px;\n}\n.lp-tagline[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 800;\n  color: #f0f6fc;\n  line-height: 1.3;\n  margin-bottom: 12px;\n}\n.lp-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #8B949E;\n  line-height: 1.6;\n  margin-bottom: 36px;\n}\n.lp-roles[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  flex: 1;\n}\n.rc[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 10px 14px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 10px;\n  backdrop-filter: blur(4px);\n}\n.rc-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.rc-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.rc-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #e6edf3;\n  margin-bottom: 1px;\n}\n.rc-desc[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #8B949E;\n  line-height: 1.4;\n}\n.lp-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 11px;\n  color: #484F58;\n  margin-top: 24px;\n  flex-wrap: wrap;\n}\n.lf-dot[_ngcontent-%COMP%] {\n  color: #30363D;\n}\n.lp-right[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 24px;\n  background: #f0f2f6;\n}\n.login-shell.dark-mode[_ngcontent-%COMP%]   .lp-right[_ngcontent-%COMP%] {\n  background: #0D1117;\n}\n.login-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 36px 36px 28px;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1);\n}\n.login-shell.dark-mode[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%] {\n  background: #161B22;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5);\n}\n.lc-head[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.lc-greeting[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #111827;\n  margin-bottom: 4px;\n}\n.lc-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6B7280;\n}\n.login-shell.dark-mode[_ngcontent-%COMP%]   .lc-greeting[_ngcontent-%COMP%] {\n  color: #f0f6fc;\n}\n.login-shell.dark-mode[_ngcontent-%COMP%]   .lc-sub[_ngcontent-%COMP%] {\n  color: #8B949E;\n}\n.lc-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff1f1;\n  border: 1px solid #fca5a5;\n  border-left: 4px solid #ef4444;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 13px;\n  color: #991b1b;\n  margin-bottom: 16px;\n}\n.login-shell.dark-mode[_ngcontent-%COMP%]   .lc-error[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  border-color: rgba(239, 68, 68, 0.3);\n  color: #FF7B7B;\n}\n.fg[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.fg-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 700;\n  color: #374151;\n  margin-bottom: 6px;\n  letter-spacing: 0.01em;\n}\n.login-shell.dark-mode[_ngcontent-%COMP%]   .fg-label[_ngcontent-%COMP%] {\n  color: #8B949E;\n}\n.fg-label-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 6px;\n}\n.fg-forgot[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #2874F0;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-weight: 500;\n  padding: 0;\n}\n.fg-forgot[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.fg-input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border: 1.5px solid #d1d5db;\n  border-radius: 10px;\n  padding: 0 12px;\n  height: 46px;\n  background: #f9fafb;\n  transition: border-color 0.15s, background 0.15s;\n}\n.fg-input[_ngcontent-%COMP%]:focus-within {\n  border-color: #2874F0;\n  background: #ffffff;\n  box-shadow: 0 0 0 3px rgba(40, 116, 240, 0.1);\n}\n.fg-input.fg-input-err[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.fg-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  background: transparent;\n  outline: none;\n  font-size: 14px;\n  color: #111827;\n  font-family: inherit;\n}\n.fg-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.fg-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.login-shell.dark-mode[_ngcontent-%COMP%]   .fg-input[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.1);\n  background: #1F2937;\n}\n.login-shell.dark-mode[_ngcontent-%COMP%]   .fg-input[_ngcontent-%COMP%]:focus-within {\n  border-color: #58A6FF;\n  background: #1F2937;\n  box-shadow: 0 0 0 3px rgba(88, 166, 255, 0.1);\n}\n.login-shell.dark-mode[_ngcontent-%COMP%]   .fg-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  color: #f0f6fc;\n}\n.fgi-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  flex-shrink: 0;\n  opacity: 0.5;\n}\n.fgi-eye[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 14px;\n  padding: 0;\n  opacity: 0.5;\n  flex-shrink: 0;\n}\n.fgi-eye[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.btn-signin[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  background: #2874F0;\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  font-size: 15px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background 0.15s, transform 0.1s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  margin-top: 4px;\n  font-family: inherit;\n  letter-spacing: 0.01em;\n}\n.btn-signin[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1a5fc8;\n}\n.btn-signin[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.98);\n}\n.btn-signin[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.bsi-spinner[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.or-divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin: 16px 0;\n  color: #d1d5db;\n  font-size: 12px;\n}\n.or-divider[_ngcontent-%COMP%]::before, \n.or-divider[_ngcontent-%COMP%]::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: #e5e7eb;\n}\n.or-divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.login-shell.dark-mode[_ngcontent-%COMP%]   .or-divider[_ngcontent-%COMP%]::before, \n.login-shell.dark-mode[_ngcontent-%COMP%]   .or-divider[_ngcontent-%COMP%]::after {\n  background: rgba(255, 255, 255, 0.08);\n}\n.btn-google[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 46px;\n  background: #fff;\n  color: #374151;\n  border: 1.5px solid #d1d5db;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  transition: all 0.15s;\n  font-family: inherit;\n}\n.btn-google[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f9fafb;\n  border-color: #9ca3af;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\n.btn-google[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.login-shell.dark-mode[_ngcontent-%COMP%]   .btn-google[_ngcontent-%COMP%] {\n  background: #1F2937;\n  border-color: rgba(255, 255, 255, 0.12);\n  color: #f0f6fc;\n}\n.login-shell.dark-mode[_ngcontent-%COMP%]   .btn-google[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #273344;\n}\n.google-note[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 6px;\n  margin-top: 8px;\n  font-size: 11.5px;\n  color: #6B7280;\n  background: #f3f4f6;\n  border-radius: 8px;\n  padding: 8px 12px;\n  line-height: 1.5;\n}\n.google-note[_ngcontent-%COMP%]   .gn-icon[_ngcontent-%COMP%] {\n  font-style: normal;\n  color: #2874F0;\n  flex-shrink: 0;\n}\n.login-shell.dark-mode[_ngcontent-%COMP%]   .google-note[_ngcontent-%COMP%] {\n  background: rgba(88, 166, 255, 0.06);\n  color: #8B949E;\n}\n.lc-captcha[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 4px 0 2px;\n}\n.lc-note[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 12px;\n  color: #9ca3af;\n  margin-top: 16px;\n}\n.test-panel[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding-top: 16px;\n  border-top: 1px dashed #e5e7eb;\n}\n.login-shell.dark-mode[_ngcontent-%COMP%]   .test-panel[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.08);\n}\n.tp-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 11px;\n  color: #9ca3af;\n  margin-bottom: 8px;\n  font-weight: 600;\n}\n.tp-badge[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 800;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  background: #fef3c7;\n  color: #92400e;\n  border-radius: 4px;\n  padding: 1px 5px;\n}\n.tp-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.tp-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 10px;\n  border: 1px solid;\n  border-radius: 7px;\n  cursor: pointer;\n  font-family: inherit;\n  background: transparent;\n  text-align: left;\n  transition: opacity 0.12s;\n}\n.tp-item[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.tp-role[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 800;\n  min-width: 110px;\n}\n.tp-email[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #6B7280;\n  flex: 1;\n}\n.tp-pwd[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-family: "Courier New", monospace;\n  color: #9ca3af;\n}\n.login-shell.dark-mode[_ngcontent-%COMP%]   .tp-email[_ngcontent-%COMP%] {\n  color: #484F58;\n}\n.login-shell.dark-mode[_ngcontent-%COMP%]   .tp-pwd[_ngcontent-%COMP%] {\n  color: #30363D;\n}\n@media (max-width: 900px) {\n  .lp-left[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .lp-right[_ngcontent-%COMP%] {\n    background: #ffffff;\n    padding: 24px 16px;\n  }\n  .login-shell.dark-mode[_ngcontent-%COMP%]   .lp-right[_ngcontent-%COMP%] {\n    background: #0D1117;\n  }\n  .login-card[_ngcontent-%COMP%] {\n    padding: 28px 24px 24px;\n    border-radius: 16px;\n    box-shadow: none;\n    border: 1px solid #e5e7eb;\n  }\n  .login-shell.dark-mode[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%] {\n    border-color: rgba(255, 255, 255, 0.07);\n  }\n}\n@media (max-width: 480px) {\n  .login-card[_ngcontent-%COMP%] {\n    padding: 24px 18px 20px;\n  }\n}\n.fp-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  backdrop-filter: blur(3px);\n  z-index: 900;\n  animation: _ngcontent-%COMP%_fadeIn 0.15s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.fp-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  max-width: 420px;\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 36px 36px 28px;\n  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.18);\n  z-index: 901;\n  animation: _ngcontent-%COMP%_slideUp 0.2s ease;\n}\n.fp-modal.dark-mode[_ngcontent-%COMP%] {\n  background: #161B22;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translate(-50%, -46%);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, -50%);\n  }\n}\n.fpm-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 24px;\n}\n.fpm-icon[_ngcontent-%COMP%] {\n  font-size: 36px;\n  margin-bottom: 10px;\n}\n.fpm-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: #111827;\n  margin-bottom: 6px;\n}\n.fpm-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6B7280;\n  line-height: 1.5;\n}\n.fp-modal.dark-mode[_ngcontent-%COMP%]   .fpm-title[_ngcontent-%COMP%] {\n  color: #f0f6fc;\n}\n.fp-modal.dark-mode[_ngcontent-%COMP%]   .fpm-sub[_ngcontent-%COMP%] {\n  color: #8B949E;\n}\n.fpm-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff1f1;\n  border: 1px solid #fca5a5;\n  border-left: 4px solid #ef4444;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 13px;\n  color: #991b1b;\n  margin-bottom: 16px;\n}\n.fp-modal.dark-mode[_ngcontent-%COMP%]   .fpm-error[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  border-color: rgba(239, 68, 68, 0.3);\n  color: #FF7B7B;\n}\n.fp-captcha[_ngcontent-%COMP%] {\n  margin: 16px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n}\n.fp-captcha-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  margin: 0;\n}\n.fpm-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 4px;\n}\n.fpm-btn-cancel[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 44px;\n  border: 1.5px solid #d1d5db;\n  border-radius: 10px;\n  background: transparent;\n  font-size: 14px;\n  font-weight: 600;\n  color: #374151;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.15s;\n}\n.fpm-btn-cancel[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f9fafb;\n}\n.fpm-btn-cancel[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.fp-modal.dark-mode[_ngcontent-%COMP%]   .fpm-btn-cancel[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.1);\n  color: #8B949E;\n}\n.fp-modal.dark-mode[_ngcontent-%COMP%]   .fpm-btn-cancel[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(255, 255, 255, 0.05);\n}\n.fpm-btn-send[_ngcontent-%COMP%] {\n  flex: 2;\n  height: 44px;\n  background: #2874F0;\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  font-family: inherit;\n  transition: background 0.15s;\n}\n.fpm-btn-send[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1a5fc8;\n}\n.fpm-btn-send[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.fpm-success[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.fpm-success-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n}\n.fpm-note[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.fpm-success[_ngcontent-%COMP%]   .fpm-btn-send[_ngcontent-%COMP%] {\n  flex: none;\n  width: 100%;\n  margin-top: 8px;\n}\n.bsi-spinner.sm[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border-width: 2px;\n}\n@media (max-width: 480px) {\n  .fp-modal[_ngcontent-%COMP%] {\n    padding: 28px 20px 24px;\n    margin: 0 16px;\n    max-width: calc(100% - 32px);\n  }\n}\n/*# sourceMappingURL=login.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\pages\\login\\login.component.ts", lineNumber: 20 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-XFENC442.js.map
