import {
  AuthService
} from "./chunk-WXBPIA4S.js";
import "./chunk-O3NE7GYO.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-CADB6C7J.js";
import {
  CommonModule
} from "./chunk-MBTJ2QPL.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-PEVOVQSE.js";

// src/app/pages/oauth2-callback/oauth2-callback.component.ts
var OAuth2CallbackComponent = class _OAuth2CallbackComponent {
  route;
  router;
  auth;
  constructor(route, router, auth) {
    this.route = route;
    this.router = router;
    this.auth = auth;
  }
  ngOnInit() {
    const params = this.route.snapshot.queryParams;
    const token = params["token"];
    if (!token) {
      this.router.navigate(["/login"], { queryParams: { error: "oauth_failed" }, replaceUrl: true });
      return;
    }
    this.auth.restoreFromOAuth(token).subscribe({
      next: () => this.router.navigate(["/dashboard"], { replaceUrl: true }),
      error: () => this.router.navigate(["/login"], { queryParams: { error: "server_error" }, replaceUrl: true })
    });
  }
  static \u0275fac = function OAuth2CallbackComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OAuth2CallbackComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OAuth2CallbackComponent, selectors: [["app-oauth2-callback"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 0, consts: [[1, "cb-wrap"], [1, "cb-spinner"], [1, "cb-msg"]], template: function OAuth2CallbackComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "div", 1);
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275text(3, "Completing sign in\u2026");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [CommonModule], styles: ["\n\n.cb-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  font-family: sans-serif;\n  gap: 14px;\n  background: #F9FAFB;\n}\n.cb-spinner[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border: 3px solid #E5E7EB;\n  border-top-color: #6366F1;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.75s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.cb-msg[_ngcontent-%COMP%] {\n  color: #6B7280;\n  font-size: 14px;\n}\n/*# sourceMappingURL=oauth2-callback.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OAuth2CallbackComponent, { className: "OAuth2CallbackComponent", filePath: "src\\app\\pages\\oauth2-callback\\oauth2-callback.component.ts", lineNumber: 34 });
})();
export {
  OAuth2CallbackComponent
};
//# sourceMappingURL=chunk-PSNSJ4TP.js.map
