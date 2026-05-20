import {
  AUTH_ENDPOINTS
} from "./chunk-O3NE7GYO.js";
import {
  HttpClient,
  Router
} from "./chunk-CADB6C7J.js";
import {
  catchError,
  computed,
  map,
  signal,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-PEVOVQSE.js";

// src/app/core/constants/roles.constants.ts
var ROLE_META = {
  SUPER_ADMIN: {
    name: "Super Admin",
    icon: "workspace_premium",
    color: "#7C3AED",
    description: "Full control \u2014 all modules, user management",
    department: "Management"
  },
  ADMIN: {
    name: "Admin",
    icon: "admin_panel_settings",
    color: "#2874F0",
    description: "Manage staff, products, orders, settings",
    department: "Management"
  },
  SALES: {
    name: "Sales Executive",
    icon: "receipt_long",
    color: "#16A34A",
    description: "Billing, customers, orders, payments",
    department: "Sales"
  },
  INVENTORY: {
    name: "Inventory Manager",
    icon: "inventory_2",
    color: "#D97706",
    description: "Products, stock levels, inventory alerts",
    department: "Warehouse"
  },
  SUPPORT: {
    name: "Support Staff",
    icon: "support_agent",
    color: "#0891B2",
    description: "Customer queries, order tracking, chat",
    department: "Customer Care"
  }
};
var ROLE_ORDER = [
  "SUPER_ADMIN",
  "ADMIN",
  "SALES",
  "INVENTORY",
  "SUPPORT"
];

// src/app/services/auth.service.ts
var AuthService = class _AuthService {
  http;
  router;
  EP = AUTH_ENDPOINTS;
  // In-memory only — never stored in localStorage/sessionStorage (security).
  // withCredentials is handled globally by the interceptor; the HttpOnly
  // refresh-token cookie is invisible to JS and sent automatically by the browser.
  _accessToken = signal(null);
  _user = signal(null);
  // Public read-only signals consumed by components and the interceptor.
  currentUser = computed(() => this._user());
  isLoggedIn = computed(() => this._user() !== null);
  accessToken = computed(() => this._accessToken());
  constructor(http, router) {
    this.http = http;
    this.router = router;
  }
  // ── APP_INITIALIZER ────────────────────────────────────────────────────────
  // Called once on startup — silently restores session from the HttpOnly cookie.
  // withCredentials is added by the interceptor (auth endpoint, so no Bearer).
  initAuth() {
    return new Promise((resolve) => {
      this.http.post(this.EP.REFRESH, {}).subscribe({
        next: (res) => {
          if (res.data) {
            this._accessToken.set(res.data.accessToken);
            this._user.set(res.data.user);
          }
          resolve();
        },
        error: () => {
          resolve();
        }
      });
    });
  }
  // ── Login ──────────────────────────────────────────────────────────────────
  login(identifier, password) {
    return this.http.post(this.EP.LOGIN, { identifier, password }).pipe(tap((res) => {
      if (res.data) {
        this._accessToken.set(res.data.accessToken);
        this._user.set(res.data.user);
      }
    }));
  }
  // ── Refresh (called by the interceptor on ACCESS_TOKEN_EXPIRED) ────────────
  // The interceptor only waits for completion and re-reads the accessToken signal;
  // it does not use the emitted value, so Observable<void> is sufficient.
  refreshToken() {
    return this.http.post(this.EP.REFRESH, {}).pipe(
      tap((res) => {
        if (res.data) {
          this._accessToken.set(res.data.accessToken);
          this._user.set(res.data.user);
        }
      }),
      // Map to void so callers don't depend on the shape of the response.
      // We use 'as any' here intentionally — the interceptor never reads the value.
      catchError((err) => {
        throw err;
      })
    );
  }
  // ── Logout ─────────────────────────────────────────────────────────────────
  // Best-effort server call to revoke the refresh token, then clear local state.
  logout() {
    this.http.post(this.EP.LOGOUT, {}).subscribe({ error: () => {
    } });
    this.clearSession();
  }
  clearSession() {
    this._accessToken.set(null);
    this._user.set(null);
    this.router.navigate(["/login"]);
  }
  // ── Password reset ─────────────────────────────────────────────────────────
  forgotPassword(email) {
    return this.http.post(this.EP.FORGOT_PASSWORD, { email });
  }
  validateResetToken(token) {
    return this.http.get(this.EP.VALIDATE_RESET_TOKEN, { params: { token } });
  }
  resetPassword(token, newPassword) {
    return this.http.post(this.EP.RESET_PASSWORD, { token, newPassword });
  }
  // ── Invitation (new staff account setup) ──────────────────────────────────
  validateInvitation(token) {
    return this.http.get(this.EP.VALIDATE_INVITATION, { params: { token } });
  }
  setPassword(token, newPassword) {
    return this.http.post(this.EP.SET_PASSWORD, { token, newPassword });
  }
  // ── Google OAuth ───────────────────────────────────────────────────────────
  loginWithGoogle() {
    window.location.href = AUTH_ENDPOINTS.GOOGLE;
  }
  /** Called by OAuthCallbackComponent after the Spring redirect lands. */
  restoreFromOAuth(token) {
    this._accessToken.set(token);
    return this.http.get(this.EP.ME).pipe(tap((res) => {
      if (res.data)
        this._user.set(res.data);
    }), map(() => void 0));
  }
  // ── Initials ────────────────────────────────────────────────────────────────
  userInitials(user) {
    if (!user)
      return "?";
    return ((user.firstName?.[0] ?? "") + (user.lastName?.[0] ?? "")).toUpperCase() || "?";
  }
  // ── Role helpers — delegate to ROLE_META (single source of truth) ──────────
  hasRole(...roles) {
    const user = this._user();
    return !!user && roles.includes(user.role);
  }
  isAdminLevel() {
    return this.hasRole("SUPER_ADMIN", "ADMIN");
  }
  roleName(role) {
    return ROLE_META[role]?.name ?? role;
  }
  roleColor(role) {
    return ROLE_META[role]?.color ?? "#6B7280";
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};

export {
  ROLE_META,
  ROLE_ORDER,
  AuthService
};
//# sourceMappingURL=chunk-WXBPIA4S.js.map
