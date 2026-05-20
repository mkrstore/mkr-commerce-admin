import {
  NotificationService
} from "./chunk-P4VIPG72.js";
import {
  ThemeService
} from "./chunk-7OGYHBBU.js";
import {
  ErrorCode,
  extractErrorCode
} from "./chunk-XY6GHRJG.js";
import {
  AuthService
} from "./chunk-WXBPIA4S.js";
import "./chunk-O3NE7GYO.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  bootstrapApplication,
  provideHttpClient,
  provideRouter,
  withFetch,
  withInterceptors
} from "./chunk-CADB6C7J.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-MBTJ2QPL.js";
import {
  APP_INITIALIZER,
  BehaviorSubject,
  __spreadProps,
  __spreadValues,
  catchError,
  computed,
  filter,
  inject,
  map,
  provideZoneChangeDetection,
  signal,
  switchMap,
  take,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PEVOVQSE.js";

// src/app/guards/auth.guard.ts
var authGuard = (_route, _state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isLoggedIn())
    return true;
  router.navigate(["/login"]);
  return false;
};

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  // ── Public ────────────────────────────────────────────────────────────────
  { path: "login", loadComponent: () => import("./chunk-XFENC442.js").then((m) => m.LoginComponent) },
  { path: "reset-password", loadComponent: () => import("./chunk-VSZFDXAQ.js").then((m) => m.ResetPasswordComponent) },
  { path: "set-password", loadComponent: () => import("./chunk-27W43AAS.js").then((m) => m.SetPasswordComponent) },
  { path: "oauth2/callback", loadComponent: () => import("./chunk-PSNSJ4TP.js").then((m) => m.OAuth2CallbackComponent) },
  // ── Protected ─────────────────────────────────────────────────────────────
  { path: "dashboard", canActivate: [authGuard], loadComponent: () => import("./chunk-SJJB2YDF.js").then((m) => m.DashboardComponent) },
  { path: "analytics", canActivate: [authGuard], loadComponent: () => import("./chunk-UVHGUNJJ.js").then((m) => m.AnalyticsComponent) },
  { path: "products", canActivate: [authGuard], loadComponent: () => import("./chunk-37RIBPZN.js").then((m) => m.ProductsComponent) },
  { path: "products/new", canActivate: [authGuard], loadComponent: () => import("./chunk-AY34S7ZC.js").then((m) => m.ProductNewComponent) },
  { path: "products/:id", canActivate: [authGuard], loadComponent: () => import("./chunk-JG6SJG4L.js").then((m) => m.ProductDetailComponent) },
  { path: "categories", canActivate: [authGuard], loadComponent: () => import("./chunk-ZILOMDRY.js").then((m) => m.CategoriesComponent) },
  { path: "brands", canActivate: [authGuard], loadComponent: () => import("./chunk-7MXQBEVB.js").then((m) => m.BrandsComponent) },
  { path: "inventory", canActivate: [authGuard], loadComponent: () => import("./chunk-XTILDC5P.js").then((m) => m.InventoryComponent) },
  { path: "orders", canActivate: [authGuard], loadComponent: () => import("./chunk-BDVQ5ARA.js").then((m) => m.OrdersComponent) },
  { path: "orders/:id", canActivate: [authGuard], loadComponent: () => import("./chunk-GTVGVZGJ.js").then((m) => m.OrderDetailComponent) },
  { path: "customers", canActivate: [authGuard], loadComponent: () => import("./chunk-ARCF23XN.js").then((m) => m.CustomersComponent) },
  { path: "customers/:id", canActivate: [authGuard], loadComponent: () => import("./chunk-F4RWOXTH.js").then((m) => m.CustomerDetailComponent) },
  { path: "billing", canActivate: [authGuard], loadComponent: () => import("./chunk-PMROCKLJ.js").then((m) => m.BillingComponent) },
  { path: "payments", canActivate: [authGuard], loadComponent: () => import("./chunk-IF65Q75K.js").then((m) => m.PaymentsComponent) },
  { path: "promotions", canActivate: [authGuard], loadComponent: () => import("./chunk-FDDAG3HF.js").then((m) => m.PromotionsComponent) },
  { path: "chat", canActivate: [authGuard], loadComponent: () => import("./chunk-HXDCGFTE.js").then((m) => m.ChatComponent) },
  { path: "delivery", canActivate: [authGuard], loadComponent: () => import("./chunk-CKRU2X6B.js").then((m) => m.DeliveryComponent) },
  { path: "users", canActivate: [authGuard], loadComponent: () => import("./chunk-NSPPHTV4.js").then((m) => m.UsersComponent) },
  { path: "users/:id", canActivate: [authGuard], loadComponent: () => import("./chunk-MLQOTSOF.js").then((m) => m.UserDetailComponent) },
  { path: "settings", canActivate: [authGuard], loadComponent: () => import("./chunk-DL3JBZEP.js").then((m) => m.SettingsComponent) },
  { path: "**", redirectTo: "dashboard" }
];

// src/app/interceptors/auth.interceptor.ts
var isRefreshing = false;
var refreshDone$ = new BehaviorSubject(false);
var authInterceptor = (req, next) => {
  const auth = inject(AuthService);
  const isAuthEndpoint = req.url.includes("/api/auth/login") || req.url.includes("/api/auth/refresh") || req.url.includes("/api/auth/logout") || req.url.includes("/api/auth/forgot-password") || req.url.includes("/api/auth/reset-password") || req.url.includes("/api/auth/set-password") || req.url.includes("/api/auth/invitation");
  let outgoing = req.clone({ withCredentials: true });
  if (!isAuthEndpoint) {
    const token = auth.accessToken();
    if (token) {
      outgoing = withBearer(outgoing, token);
    }
  }
  return next(outgoing).pipe(catchError((error) => {
    const errorCode = extractErrorCode(error);
    const shouldRefresh = !isAuthEndpoint && error.status === 401 && (errorCode === ErrorCode.ACCESS_TOKEN_EXPIRED || errorCode === ErrorCode.ACCESS_TOKEN_INVALID);
    if (!shouldRefresh) {
      return throwError(() => error);
    }
    if (isRefreshing) {
      return refreshDone$.pipe(filter((done) => done === true), take(1), switchMap(() => next(rebuildRequest(req, auth.accessToken()))));
    }
    isRefreshing = true;
    refreshDone$.next(false);
    return auth.refreshToken().pipe(switchMap(() => {
      isRefreshing = false;
      refreshDone$.next(true);
      return next(rebuildRequest(req, auth.accessToken()));
    }), catchError((refreshError) => {
      isRefreshing = false;
      refreshDone$.next(false);
      auth.clearSession();
      return throwError(() => refreshError);
    }));
  }));
};
function rebuildRequest(original, token) {
  const cloned = original.clone({ withCredentials: true });
  return token ? withBearer(cloned, token) : cloned;
}
function withBearer(req, token) {
  return req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
}

// src/app/app.config.ts
function initAuth(authService) {
  return () => authService.initAuth();
}
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // HttpClient with functional interceptor + fetch API
    provideHttpClient(withFetch(), withInterceptors([authInterceptor])),
    // Restore session from refresh cookie before first render
    {
      provide: APP_INITIALIZER,
      useFactory: initAuth,
      deps: [AuthService],
      multi: true
    }
  ]
};

// src/app/core/constants/icons.constants.ts
var ICONS = {
  // ── Navigation ─────────────────────────────────────────────────────────────
  dashboard: "dashboard",
  analytics: "bar_chart",
  products: "inventory_2",
  categories: "category",
  brands: "sell",
  inventory: "warehouse",
  billing: "receipt_long",
  orders: "shopping_cart",
  customers: "group",
  payments: "payments",
  promotions: "local_offer",
  chat: "support_agent",
  delivery: "local_shipping",
  staff: "badge",
  settings: "settings",
  // ── Actions ─────────────────────────────────────────────────────────────────
  add: "add",
  edit: "edit",
  delete: "delete",
  remove: "remove",
  save: "save",
  search: "search",
  filter: "filter_list",
  sort: "sort",
  close: "close",
  clear: "close",
  more: "more_vert",
  moreH: "more_horiz",
  refresh: "refresh",
  download: "download",
  upload: "upload",
  copy: "content_copy",
  share: "share",
  print: "print",
  send: "send",
  preview: "visibility",
  hide: "visibility_off",
  link: "link",
  open: "open_in_new",
  back: "arrow_back",
  forward: "arrow_forward",
  expand: "open_in_full",
  collapse: "close_fullscreen",
  // ── Chevrons / Arrows ───────────────────────────────────────────────────────
  chevronDown: "expand_more",
  chevronUp: "expand_less",
  chevronRight: "chevron_right",
  chevronLeft: "chevron_left",
  arrowRight: "arrow_forward_ios",
  arrowLeft: "arrow_back_ios",
  arrowDown: "keyboard_arrow_down",
  arrowUp: "keyboard_arrow_up",
  // ── Status / Feedback ───────────────────────────────────────────────────────
  success: "check_circle",
  check: "check",
  warning: "warning",
  error: "error",
  info: "info",
  help: "help",
  pending: "pending",
  clock: "schedule",
  cancelled: "cancel",
  // ── Auth / User ─────────────────────────────────────────────────────────────
  login: "login",
  logout: "logout",
  user: "person",
  users: "group",
  userAdd: "person_add",
  role: "admin_panel_settings",
  lock: "lock",
  key: "key",
  email: "mail",
  phone: "phone",
  // ── Commerce ─────────────────────────────────────────────────────────────────
  cart: "shopping_cart",
  bag: "shopping_bag",
  product: "inventory_2",
  category: "category",
  tag: "sell",
  discount: "local_offer",
  coupon: "confirmation_number",
  payment: "payment",
  receipt: "receipt",
  invoice: "receipt_long",
  wallet: "account_balance_wallet",
  bank: "account_balance",
  money: "attach_money",
  star: "star",
  starOutline: "star_border",
  heart: "favorite",
  heartOutline: "favorite_border",
  // ── Layout / UI ─────────────────────────────────────────────────────────────
  menu: "menu",
  menuOpen: "menu_open",
  darkMode: "dark_mode",
  lightMode: "light_mode",
  notifications: "notifications",
  notificationOff: "notifications_off",
  image: "image",
  camera: "photo_camera",
  attach: "attach_file",
  calendar: "calendar_today",
  location: "location_on",
  map: "map",
  chart: "bar_chart",
  list: "list",
  grid: "grid_view",
  table: "table_rows"
};

// src/app/services/sidebar.service.ts
var SidebarService = class _SidebarService {
  isOpen = signal(false);
  open() {
    this.isOpen.set(true);
  }
  close() {
    this.isOpen.set(false);
  }
  toggle() {
    this.isOpen.update((v) => !v);
  }
  static \u0275fac = function SidebarService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SidebarService, factory: _SidebarService.\u0275fac, providedIn: "root" });
};

// src/app/layout/sidebar/sidebar.component.ts
function SidebarComponent_ng_container_9_a_3_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngClass", item_r3.badgeClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r3.badge, " ");
  }
}
function SidebarComponent_ng_container_9_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 16);
    \u0275\u0275listener("click", function SidebarComponent_ng_container_9_a_3_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onNavClick());
    });
    \u0275\u0275elementStart(1, "span", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SidebarComponent_ng_container_9_a_3_span_5_Template, 2, 2, "span", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r3.route);
    \u0275\u0275advance();
    \u0275\u0275property("title", item_r3.label);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r3.badge);
  }
}
function SidebarComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SidebarComponent_ng_container_9_a_3_Template, 6, 5, "a", 15);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const group_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(group_r4.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", group_r4.items);
  }
}
function SidebarComponent_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 21);
    \u0275\u0275listener("click", function SidebarComponent_ng_container_21_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelLogout());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 22)(3, "div", 23)(4, "span", 24);
    \u0275\u0275text(5, "logout");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h4");
    \u0275\u0275text(7, "Sign out?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "You'll need to sign in again to access the admin portal.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 25)(11, "button", 26);
    \u0275\u0275listener("click", function SidebarComponent_ng_container_21_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelLogout());
    });
    \u0275\u0275text(12, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 27);
    \u0275\u0275listener("click", function SidebarComponent_ng_container_21_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmLogout());
    });
    \u0275\u0275text(14, "Sign out");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
}
var ALL_NAV_GROUPS = [
  {
    label: "Overview",
    items: [
      { icon: ICONS.dashboard, label: "Dashboard", route: "/dashboard" },
      { icon: ICONS.analytics, label: "Analytics", route: "/analytics", roles: ["SUPER_ADMIN", "ADMIN"] }
    ]
  },
  {
    label: "Catalogue",
    items: [
      { icon: ICONS.products, label: "Products", route: "/products", roles: ["SUPER_ADMIN", "ADMIN", "INVENTORY"] },
      { icon: ICONS.categories, label: "Categories", route: "/categories", roles: ["SUPER_ADMIN", "ADMIN", "INVENTORY"] },
      { icon: ICONS.brands, label: "Brands", route: "/brands", roles: ["SUPER_ADMIN", "ADMIN", "INVENTORY"] },
      { icon: ICONS.inventory, label: "Inventory", route: "/inventory", roles: ["SUPER_ADMIN", "ADMIN", "INVENTORY"], badge: "3", badgeClass: "red" }
    ]
  },
  {
    label: "Commerce",
    items: [
      { icon: ICONS.billing, label: "Billing", route: "/billing", roles: ["SUPER_ADMIN", "ADMIN", "SALES"] },
      { icon: ICONS.orders, label: "Orders", route: "/orders", badge: "12", badgeClass: "red" },
      { icon: ICONS.customers, label: "Customers", route: "/customers", roles: ["SUPER_ADMIN", "ADMIN", "SALES", "SUPPORT"] },
      { icon: ICONS.payments, label: "Payments", route: "/payments", roles: ["SUPER_ADMIN", "ADMIN", "SALES"] },
      { icon: ICONS.promotions, label: "Promotions", route: "/promotions", roles: ["SUPER_ADMIN", "ADMIN"] }
    ]
  },
  {
    label: "Support",
    items: [
      { icon: ICONS.chat, label: "Chat Support", route: "/chat", roles: ["SUPER_ADMIN", "ADMIN", "SUPPORT"], badge: "5", badgeClass: "red" },
      { icon: ICONS.delivery, label: "Delivery", route: "/delivery", roles: ["SUPER_ADMIN", "ADMIN", "SUPPORT"] }
    ]
  },
  {
    label: "System",
    items: [
      { icon: ICONS.staff, label: "Staff", route: "/users", roles: ["SUPER_ADMIN", "ADMIN", "SALES"] },
      { icon: ICONS.settings, label: "Settings", route: "/settings", roles: ["SUPER_ADMIN", "ADMIN"] }
    ]
  }
];
var SidebarComponent = class _SidebarComponent {
  sidebar;
  auth;
  filteredNavGroups = computed(() => {
    const user = this.auth.currentUser();
    if (!user)
      return [];
    return ALL_NAV_GROUPS.map((group) => __spreadProps(__spreadValues({}, group), {
      items: group.items.filter((item) => !item.roles || item.roles.includes(user.role))
    })).filter((group) => group.items.length > 0);
  });
  showLogoutConfirm = false;
  constructor(sidebar, auth) {
    this.sidebar = sidebar;
    this.auth = auth;
  }
  onNavClick() {
    this.sidebar.close();
  }
  logout() {
    this.showLogoutConfirm = true;
  }
  confirmLogout() {
    this.showLogoutConfirm = false;
    this.sidebar.close();
    this.auth.logout();
  }
  cancelLogout() {
    this.showLogoutConfirm = false;
  }
  static \u0275fac = function SidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarComponent)(\u0275\u0275directiveInject(SidebarService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["app-sidebar"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 22, vars: 11, consts: [[1, "adm-aside"], [1, "adm-logo"], [1, "adm-logo-main"], [1, "adm-logo-sub"], [1, "adm-nav"], [4, "ngFor", "ngForOf"], [1, "adm-user"], [1, "adm-avatar"], [1, "adm-user-info"], [1, "adm-user-name"], [1, "adm-user-role"], ["title", "Sign out", 1, "adm-logout", 3, "click"], [1, "icon", "icon-md"], [4, "ngIf"], [1, "nav-grp-lbl"], ["class", "adm-item", "routerLinkActive", "on", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], ["routerLinkActive", "on", 1, "adm-item", 3, "click", "routerLink"], [1, "adm-item-icon", "icon", 3, "title"], [1, "adm-item-lbl"], ["class", "adm-item-badge", 3, "ngClass", 4, "ngIf"], [1, "adm-item-badge", 3, "ngClass"], [1, "logout-overlay", 3, "click"], [1, "logout-popup"], [1, "logout-popup-icon"], [1, "icon", "icon-lg"], [1, "logout-popup-actions"], [1, "logout-popup-cancel", 3, "click"], [1, "logout-popup-ok", 3, "click"]], template: function SidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "aside", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3, "MKR");
      \u0275\u0275elementStart(4, "b");
      \u0275\u0275text(5, "Commerce");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 3);
      \u0275\u0275text(7, "Staff Portal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "nav", 4);
      \u0275\u0275template(9, SidebarComponent_ng_container_9_Template, 4, 2, "ng-container", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 6)(11, "div", 7);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 8)(14, "div", 9);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 10);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "button", 11);
      \u0275\u0275listener("click", function SidebarComponent_Template_button_click_18_listener() {
        return ctx.logout();
      });
      \u0275\u0275elementStart(19, "span", 12);
      \u0275\u0275text(20, "logout");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(21, SidebarComponent_ng_container_21_Template, 15, 0, "ng-container", 13);
    }
    if (rf & 2) {
      let tmp_5_0;
      \u0275\u0275classProp("open", ctx.sidebar.isOpen());
      \u0275\u0275advance(9);
      \u0275\u0275property("ngForOf", ctx.filteredNavGroups());
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("background", ctx.auth.roleColor(ctx.auth.currentUser().role) + "22")("color", ctx.auth.roleColor(ctx.auth.currentUser().role));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.auth.userInitials(ctx.auth.currentUser()), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate((tmp_5_0 = ctx.auth.currentUser()) == null ? null : tmp_5_0.name);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.auth.roleName(ctx.auth.currentUser().role));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.showLogoutConfirm);
    }
  }, dependencies: [RouterLink, RouterLinkActive, CommonModule, NgClass, NgForOf, NgIf], styles: ['@charset "UTF-8";\n\n\n\n.adm-aside[_ngcontent-%COMP%] {\n  width: 230px;\n  flex-shrink: 0;\n  background: var(--sidebar-bg);\n  border-right: 1px solid var(--border);\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  position: sticky;\n  top: 0;\n  transition:\n    background 0.3s,\n    border-color 0.3s,\n    transform 0.28s cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: hidden;\n}\n.adm-logo[_ngcontent-%COMP%] {\n  height: 56px;\n  padding: 0 18px;\n  border-bottom: 1px solid var(--border);\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  box-sizing: border-box;\n}\n.adm-logo-main[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 900;\n  color: var(--blue);\n  letter-spacing: -0.5px;\n}\n.adm-logo-main[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--orange);\n}\n.adm-logo-sub[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  color: var(--t3);\n  margin-top: 2px;\n}\n.adm-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.adm-nav[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n.adm-nav[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--border);\n  border-radius: 3px;\n}\n.nav-grp-lbl[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  color: var(--t3);\n  padding: 10px 18px 5px;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.adm-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 18px;\n  cursor: pointer;\n  transition: all 0.15s;\n  position: relative;\n  text-decoration: none;\n}\n.adm-item[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  background: transparent;\n  border-radius: 0 3px 3px 0;\n  transition: background 0.15s;\n}\n.adm-item[_ngcontent-%COMP%]:hover {\n  background: rgba(40, 116, 240, 0.06);\n}\n.adm-item.on[_ngcontent-%COMP%] {\n  background: rgba(40, 116, 240, 0.08);\n}\n.adm-item.on[_ngcontent-%COMP%]::before {\n  background: var(--blue);\n}\n.adm-item-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  text-align: center;\n  flex-shrink: 0;\n  color: var(--t3);\n  transition: color 0.15s;\n}\n.adm-item-lbl[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--t2);\n  white-space: nowrap;\n  overflow: hidden;\n}\n.adm-item[_ngcontent-%COMP%]:hover   .adm-item-icon[_ngcontent-%COMP%] {\n  color: var(--t2);\n}\n.adm-item.on[_ngcontent-%COMP%]   .adm-item-icon[_ngcontent-%COMP%] {\n  color: var(--blue);\n}\n.adm-item.on[_ngcontent-%COMP%]   .adm-item-lbl[_ngcontent-%COMP%] {\n  color: var(--blue);\n  font-weight: 700;\n}\n.adm-item-badge[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 9px;\n  font-weight: 800;\n  padding: 2px 6px;\n  border-radius: 10px;\n  flex-shrink: 0;\n}\n.adm-item-badge.red[_ngcontent-%COMP%] {\n  background: rgba(255, 97, 97, 0.12);\n  color: var(--red);\n}\n.adm-item-badge.grn[_ngcontent-%COMP%] {\n  background: rgba(56, 142, 60, 0.12);\n  color: var(--green);\n}\n.adm-user[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  border-top: 1px solid var(--border);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n.adm-avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 800;\n}\n.adm-user-info[_ngcontent-%COMP%] {\n  overflow: hidden;\n  flex: 1;\n}\n.adm-user-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--t1);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.adm-user-role[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--t3);\n}\n.adm-logout[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--t3);\n  padding: 6px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s, color 0.15s;\n}\n.adm-logout[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n.logout-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 500;\n  backdrop-filter: blur(2px);\n}\n.logout-popup[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 501;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-lg);\n  padding: 32px 28px 24px;\n  width: 320px;\n  text-align: center;\n}\n.logout-popup[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--t1);\n  margin: 14px 0 8px;\n}\n.logout-popup[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--t2);\n  line-height: 1.5;\n  margin-bottom: 24px;\n}\n.logout-popup-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n}\n.logout-popup-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.logout-popup-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 9px 0;\n  border-radius: var(--radius);\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  transition: background 0.15s, color 0.15s;\n}\n.logout-popup-cancel[_ngcontent-%COMP%] {\n  background: var(--surface2);\n  color: var(--t2);\n  border: 1px solid var(--border) !important;\n}\n.logout-popup-cancel[_ngcontent-%COMP%]:hover {\n  background: var(--surface3);\n  color: var(--t1);\n}\n.logout-popup-ok[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: #fff;\n}\n.logout-popup-ok[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n}\n@media (max-width: 1024px) and (min-width: 769px) {\n  .adm-aside[_ngcontent-%COMP%] {\n    width: 64px;\n  }\n  .adm-logo-main[_ngcontent-%COMP%] {\n    font-size: 0;\n  }\n  .adm-logo-main[_ngcontent-%COMP%]::before {\n    content: "M";\n    font-size: 18px;\n    font-weight: 900;\n    color: var(--blue);\n  }\n  .adm-logo-sub[_ngcontent-%COMP%], \n   .adm-item-lbl[_ngcontent-%COMP%], \n   .nav-grp-lbl[_ngcontent-%COMP%], \n   .adm-item-badge[_ngcontent-%COMP%], \n   .adm-user-info[_ngcontent-%COMP%], \n   .adm-logout[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .adm-item[_ngcontent-%COMP%] {\n    padding: 13px;\n    justify-content: center;\n  }\n  .adm-item-icon[_ngcontent-%COMP%] {\n    width: auto;\n  }\n  .adm-user[_ngcontent-%COMP%] {\n    justify-content: center;\n    padding: 12px;\n  }\n}\n@media (max-width: 768px) {\n  .adm-aside[_ngcontent-%COMP%] {\n    position: fixed;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    z-index: 300;\n    width: 260px;\n    transform: translateX(-100%);\n    box-shadow: 4px 0 20px rgba(0, 0, 0, 0.15);\n  }\n  .adm-aside.open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n}\n/*# sourceMappingURL=sidebar.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "src\\app\\layout\\sidebar\\sidebar.component.ts", lineNumber: 72 });
})();

// src/app/layout/topbar/topbar.component.ts
function TopbarComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.notif.totalUnread());
  }
}
function TopbarComponent_div_15_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function TopbarComponent_div_15_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.notif.markAllRead());
    });
    \u0275\u0275text(1, " Mark all read ");
    \u0275\u0275elementEnd();
  }
}
function TopbarComponent_div_15_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.notif.totalUnread());
  }
}
function TopbarComponent_div_15_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.notif.payUnread());
  }
}
function TopbarComponent_div_15_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.notif.stockUnread());
  }
}
function TopbarComponent_div_15_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.notif.messageUnread());
  }
}
function TopbarComponent_div_15_div_19_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 38);
  }
}
function TopbarComponent_div_15_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275listener("click", function TopbarComponent_div_15_div_19_Template_div_click_0_listener() {
      const n_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.notif.markRead(n_r5.id));
    });
    \u0275\u0275elementStart(1, "span", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 33)(4, "div", 34);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 35);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 36);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, TopbarComponent_div_15_div_19_span_10_Template, 1, 0, "span", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("unread", !n_r5.read);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", n_r5.type === "payment" ? "var(--blue-soft)" : n_r5.type === "stock" ? "var(--amber-bg)" : "var(--green-bg)");
    \u0275\u0275classProp("icon-blue", n_r5.type === "payment")("icon-amber", n_r5.type === "stock")("icon-green", n_r5.type === "message");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r5.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(n_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r5.body);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.notif.timeAgo(n_r5.time));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !n_r5.read);
  }
}
function TopbarComponent_div_15_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1, " No notifications in this category ");
    \u0275\u0275elementEnd();
  }
}
function TopbarComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "span", 17);
    \u0275\u0275text(3, "Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, TopbarComponent_div_15_button_4_Template, 2, 0, "button", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 19)(6, "button", 20);
    \u0275\u0275listener("click", function TopbarComponent_div_15_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.notifTab = "all");
    });
    \u0275\u0275text(7, " All ");
    \u0275\u0275template(8, TopbarComponent_div_15_span_8_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 20);
    \u0275\u0275listener("click", function TopbarComponent_div_15_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.notifTab = "payment");
    });
    \u0275\u0275text(10, " Payments ");
    \u0275\u0275template(11, TopbarComponent_div_15_span_11_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 20);
    \u0275\u0275listener("click", function TopbarComponent_div_15_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.notifTab = "stock");
    });
    \u0275\u0275text(13, " Stock ");
    \u0275\u0275template(14, TopbarComponent_div_15_span_14_Template, 2, 1, "span", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 20);
    \u0275\u0275listener("click", function TopbarComponent_div_15_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.notifTab = "message");
    });
    \u0275\u0275text(16, " Messages ");
    \u0275\u0275template(17, TopbarComponent_div_15_span_17_Template, 2, 1, "span", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 24);
    \u0275\u0275template(19, TopbarComponent_div_15_div_19_Template, 11, 15, "div", 25)(20, TopbarComponent_div_15_div_20_Template, 2, 0, "div", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.notif.totalUnread() > 0);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r0.notifTab === "all");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.notif.totalUnread() > 0);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r0.notifTab === "payment");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.notif.payUnread() > 0);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r0.notifTab === "stock");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.notif.stockUnread() > 0);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r0.notifTab === "message");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.notif.messageUnread() > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.tabItems);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.tabItems.length === 0);
  }
}
function TopbarComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275listener("click", function TopbarComponent_div_16_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.notifOpen = false);
    });
    \u0275\u0275elementEnd();
  }
}
var PAGE_TITLES = {
  dashboard: "Dashboard",
  analytics: "Analytics",
  products: "Products",
  inventory: "Inventory",
  orders: "Orders",
  customers: "Customers",
  billing: "Billing",
  payments: "Payments",
  promotions: "Promotions",
  chat: "Chat Support",
  delivery: "Delivery",
  settings: "Settings"
};
var TopbarComponent = class _TopbarComponent {
  theme;
  sidebar;
  notif;
  auth;
  title = "Dashboard";
  notifOpen = false;
  notifTab = "all";
  constructor(theme, sidebar, notif, auth, router) {
    this.theme = theme;
    this.sidebar = sidebar;
    this.notif = notif;
    this.auth = auth;
    router.events.pipe(filter((e) => e instanceof NavigationEnd), map((e) => {
      const seg = e.urlAfterRedirects.split("/")[1];
      return PAGE_TITLES[seg] ?? "Dashboard";
    })).subscribe((t) => {
      this.title = t;
      this.notifOpen = false;
    });
  }
  toggleNotif() {
    this.notifOpen = !this.notifOpen;
  }
  get tabItems() {
    switch (this.notifTab) {
      case "payment":
        return this.notif.payments();
      case "stock":
        return this.notif.stockAlerts();
      case "message":
        return this.notif.messages();
      default:
        return this.notif.all();
    }
  }
  onEsc() {
    this.notifOpen = false;
  }
  static \u0275fac = function TopbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TopbarComponent)(\u0275\u0275directiveInject(ThemeService), \u0275\u0275directiveInject(SidebarService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopbarComponent, selectors: [["app-topbar"]], hostBindings: function TopbarComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown.escape", function TopbarComponent_keydown_escape_HostBindingHandler() {
        return ctx.onEsc();
      }, false, \u0275\u0275resolveDocument);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 10, consts: [[1, "adm-topbar"], ["title", "Toggle menu", 1, "menu-btn", 3, "click"], [1, "icon"], [1, "adm-pg-title"], [1, "adm-search"], [1, "icon", "icon-sm", 2, "color", "var(--t3)", "font-variation-settings", "'FILL' 0,'wght' 500,'GRAD' 0,'opsz' 20"], ["placeholder", "Search\u2026"], [1, "notif-wrap"], ["title", "Notifications", 1, "notif-btn", 3, "click"], [1, "icon", "icon-md"], ["class", "notif-dot", 4, "ngIf"], ["class", "notif-panel", 4, "ngIf"], ["class", "notif-backdrop", 3, "click", 4, "ngIf"], [1, "adm-avatar-btn", 3, "title"], [1, "notif-dot"], [1, "notif-panel"], [1, "np-head"], [1, "np-title"], ["class", "np-read-all", 3, "click", 4, "ngIf"], [1, "np-tabs"], [1, "np-tab", 3, "click"], ["class", "np-badge", 4, "ngIf"], ["class", "np-badge red", 4, "ngIf"], ["class", "np-badge purple", 4, "ngIf"], [1, "np-list"], ["class", "np-item", 3, "unread", "click", 4, "ngFor", "ngForOf"], ["class", "np-empty", 4, "ngIf"], [1, "np-read-all", 3, "click"], [1, "np-badge"], [1, "np-badge", "red"], [1, "np-badge", "purple"], [1, "np-item", 3, "click"], [1, "np-icon", "icon", "icon-sm"], [1, "np-content"], [1, "np-item-title"], [1, "np-item-body"], [1, "np-item-time"], ["class", "np-unread-dot", 4, "ngIf"], [1, "np-unread-dot"], [1, "np-empty"], [1, "notif-backdrop", 3, "click"]], template: function TopbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "button", 1);
      \u0275\u0275listener("click", function TopbarComponent_Template_button_click_1_listener() {
        return ctx.sidebar.toggle();
      });
      \u0275\u0275elementStart(2, "span", 2);
      \u0275\u0275text(3, "menu");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 4)(7, "span", 5);
      \u0275\u0275text(8, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275element(9, "input", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 7)(11, "button", 8);
      \u0275\u0275listener("click", function TopbarComponent_Template_button_click_11_listener() {
        return ctx.toggleNotif();
      });
      \u0275\u0275elementStart(12, "span", 9);
      \u0275\u0275text(13, "notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275template(14, TopbarComponent_span_14_Template, 2, 1, "span", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275template(15, TopbarComponent_div_15_Template, 21, 15, "div", 11)(16, TopbarComponent_div_16_Template, 1, 0, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 13);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_6_0;
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.title);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.notif.totalUnread() > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.notifOpen);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.notifOpen);
      \u0275\u0275advance();
      \u0275\u0275styleProp("background", ctx.auth.roleColor(ctx.auth.currentUser().role) + "22")("color", ctx.auth.roleColor(ctx.auth.currentUser().role));
      \u0275\u0275property("title", ((tmp_6_0 = (tmp_6_0 = ctx.auth.currentUser()) == null ? null : tmp_6_0.name) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : "") + " \u2014 " + ctx.auth.roleName(ctx.auth.currentUser().role));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.auth.userInitials(ctx.auth.currentUser()));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf], styles: ['\n\n.adm-topbar[_ngcontent-%COMP%] {\n  background: var(--topbar-bg);\n  border-bottom: 1px solid var(--border);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 20px;\n  height: 56px;\n  flex-shrink: 0;\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  transition: background 0.3s, border-color 0.3s;\n}\n.menu-btn[_ngcontent-%COMP%] {\n  color: var(--t2);\n  padding: 6px;\n  border-radius: 6px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n  display: none;\n  align-items: center;\n  justify-content: center;\n}\n.menu-btn[_ngcontent-%COMP%]:hover {\n  background: var(--surface2);\n  color: var(--t1);\n}\n.adm-pg-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 800;\n  color: var(--t1);\n  flex: 1;\n}\n.adm-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--surface2);\n  border: 1px solid var(--border);\n  border-radius: 20px;\n  padding: 7px 14px;\n  width: 200px;\n}\n.adm-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  outline: none;\n  font-size: 13px;\n  color: var(--t1);\n  width: 100%;\n}\n.adm-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--t3);\n}\n.adm-search[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  color: var(--t3);\n  line-height: 1;\n}\n.notif-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.notif-btn[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: var(--surface2);\n  border: 1px solid var(--border);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: var(--t2);\n  position: relative;\n  flex-shrink: 0;\n  transition: all 0.15s;\n}\n.notif-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  background: var(--blue-light);\n  color: var(--blue);\n}\n.notif-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 4px;\n  background: var(--red);\n  color: #fff;\n  border-radius: 9px;\n  font-size: 0.62rem;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid var(--topbar-bg);\n}\n.notif-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 10px);\n  right: 0;\n  width: 380px;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: 14px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.14);\n  z-index: 300;\n  display: flex;\n  flex-direction: column;\n  max-height: 480px;\n  overflow: hidden;\n}\n.np-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.875rem 1rem 0.5rem;\n  flex-shrink: 0;\n}\n.np-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--t1);\n}\n.np-read-all[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--blue);\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-weight: 500;\n}\n.np-read-all[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.np-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0 0.75rem;\n  gap: 0.25rem;\n  border-bottom: 1px solid var(--border);\n  flex-shrink: 0;\n}\n.np-tab[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.6rem;\n  border: none;\n  background: none;\n  font-size: 0.76rem;\n  font-weight: 500;\n  color: var(--t3);\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -1px;\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  transition: all 0.15s;\n  white-space: nowrap;\n}\n.np-tab.active[_ngcontent-%COMP%] {\n  color: var(--blue);\n  border-bottom-color: var(--blue);\n}\n.np-tab[_ngcontent-%COMP%]:hover:not(.active) {\n  color: var(--t2);\n}\n.np-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 16px;\n  height: 16px;\n  padding: 0 3px;\n  background: var(--red);\n  color: #fff;\n  border-radius: 8px;\n  font-size: 0.6rem;\n  font-weight: 800;\n}\n.np-badge.red[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.np-badge.purple[_ngcontent-%COMP%] {\n  background: #7c3aed;\n}\n.np-list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}\n.np-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.65rem;\n  padding: 0.75rem 1rem;\n  cursor: pointer;\n  border-bottom: 1px solid var(--border);\n  position: relative;\n  transition: background 0.1s;\n}\n.np-item[_ngcontent-%COMP%]:hover {\n  background: var(--surface2);\n}\n.np-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.np-item.unread[_ngcontent-%COMP%] {\n  background: var(--blue-light);\n}\n.np-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-top: 0.1rem;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--surface2);\n  color: var(--t2);\n}\n.np-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.np-item-title[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  font-weight: 600;\n  color: var(--t1);\n  margin-bottom: 0.15rem;\n}\n.np-item-body[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: var(--t2);\n  line-height: 1.4;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.np-item-time[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--t3);\n  margin-top: 0.2rem;\n}\n.np-unread-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--blue);\n  flex-shrink: 0;\n  margin-top: 0.35rem;\n}\n.np-empty[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n  font-size: 0.84rem;\n  color: var(--t3);\n}\n.notif-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 200;\n}\n.adm-avatar-btn[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #2874F0,\n      #8B5CF6);\n  color: #fff;\n  font-size: 12px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  cursor: pointer;\n  title: "User";\n}\n@media (max-width: 768px) {\n  .menu-btn[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .adm-search[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .adm-pg-title[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .notif-panel[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 56px;\n    left: 0;\n    right: 0;\n    width: 100%;\n    max-width: 100%;\n    border-radius: 0 0 var(--radius-lg) var(--radius-lg);\n    max-height: calc(100vh - 56px - 62px);\n    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);\n  }\n}\n@media (max-width: 480px) {\n  .adm-topbar[_ngcontent-%COMP%] {\n    padding: 0 12px;\n    gap: 6px;\n  }\n  .adm-pg-title[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .adm-avatar-btn[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n    font-size: 11px;\n  }\n}\n/*# sourceMappingURL=topbar.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopbarComponent, { className: "TopbarComponent", filePath: "src\\app\\layout\\topbar\\topbar.component.ts", lineNumber: 24 });
})();

// src/app/layout/bottom-nav/bottom-nav.component.ts
function BottomNavComponent_a_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.badge);
  }
}
function BottomNavComponent_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7, 0)(2, "div", 4)(3, "span", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, BottomNavComponent_a_1_span_5_Template, 2, 1, "span", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const rla_r2 = \u0275\u0275reference(1);
    \u0275\u0275property("routerLink", item_r1.route);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("font-variation-settings", rla_r2.isActive ? "'FILL' 1,'wght' 500,'GRAD' 0,'opsz' 24" : "'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 24");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r1.icon, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r1.badge);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
var BottomNavComponent = class _BottomNavComponent {
  sidebar;
  constructor(sidebar) {
    this.sidebar = sidebar;
  }
  items = [
    { icon: ICONS.dashboard, label: "Dashboard", route: "/dashboard" },
    { icon: ICONS.orders, label: "Orders", route: "/orders", badge: "12" },
    { icon: ICONS.products, label: "Products", route: "/products" },
    { icon: ICONS.chat, label: "Chat", route: "/chat", badge: "5" }
  ];
  menuIcon = ICONS.menu;
  static \u0275fac = function BottomNavComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BottomNavComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BottomNavComponent, selectors: [["app-bottom-nav"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 2, consts: [["rla", "routerLinkActive"], [1, "bottom-nav"], ["class", "bnav-item", "routerLinkActive", "on", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "bnav-item", 3, "click"], [1, "bnav-icon-wrap"], [1, "bnav-icon", "icon"], [1, "bnav-label"], ["routerLinkActive", "on", 1, "bnav-item", 3, "routerLink"], ["class", "bnav-badge", 4, "ngIf"], [1, "bnav-badge"]], template: function BottomNavComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 1);
      \u0275\u0275template(1, BottomNavComponent_a_1_Template, 8, 6, "a", 2);
      \u0275\u0275elementStart(2, "button", 3);
      \u0275\u0275listener("click", function BottomNavComponent_Template_button_click_2_listener() {
        return ctx.sidebar.toggle();
      });
      \u0275\u0275elementStart(3, "div", 4)(4, "span", 5);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "span", 6);
      \u0275\u0275text(7, "More");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.items);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.menuIcon);
    }
  }, dependencies: [RouterLink, RouterLinkActive, CommonModule, NgForOf, NgIf], styles: ['\n\n.bottom-nav[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 62px;\n  background: var(--surface);\n  border-top: 1px solid var(--border);\n  box-shadow: 0 -2px 16px rgba(0, 0, 0, 0.1);\n  z-index: 150;\n  flex-direction: row;\n  align-items: stretch;\n  padding-bottom: env(safe-area-inset-bottom, 0);\n}\n.bnav-item[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  text-decoration: none;\n  border: none;\n  background: none;\n  cursor: pointer;\n  padding: 6px 4px;\n  position: relative;\n  transition: background 0.15s;\n  -webkit-tap-highlight-color: transparent;\n}\n.bnav-item[_ngcontent-%COMP%]:hover {\n  background: var(--hover);\n}\n.bnav-item.on[_ngcontent-%COMP%] {\n}\n.bnav-item.on[_ngcontent-%COMP%]   .bnav-icon[_ngcontent-%COMP%] {\n  color: var(--blue);\n}\n.bnav-item.on[_ngcontent-%COMP%]   .bnav-label[_ngcontent-%COMP%] {\n  color: var(--blue);\n  font-weight: 700;\n}\n.bnav-item.on[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 32px;\n  height: 3px;\n  background: var(--blue);\n  border-radius: 0 0 4px 4px;\n}\n.bnav-icon-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 28px;\n}\n.bnav-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 1;\n  color: var(--t3);\n  transition: color 0.15s;\n}\n.bnav-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -4px;\n  right: -6px;\n  background: var(--red);\n  color: #fff;\n  font-size: 9px;\n  font-weight: 800;\n  min-width: 16px;\n  height: 16px;\n  padding: 0 3px;\n  border-radius: 8px;\n  border: 2px solid var(--surface);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.bnav-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 500;\n  color: var(--t3);\n  transition: color 0.15s;\n  white-space: nowrap;\n}\n@media (max-width: 768px) {\n  .bottom-nav[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n/*# sourceMappingURL=bottom-nav.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BottomNavComponent, { className: "BottomNavComponent", filePath: "src\\app\\layout\\bottom-nav\\bottom-nav.component.ts", lineNumber: 14 });
})();

// src/app/app.component.ts
function AppComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "router-outlet");
    \u0275\u0275elementContainerEnd();
  }
}
function AppComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275listener("click", function AppComponent_ng_template_1_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sidebar.close());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "div", 4);
    \u0275\u0275element(4, "app-topbar");
    \u0275\u0275elementStart(5, "main", 5);
    \u0275\u0275element(6, "router-outlet");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "app-bottom-nav");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.theme.themeClass());
    \u0275\u0275advance();
    \u0275\u0275classProp("open", ctx_r1.sidebar.isOpen());
  }
}
var AppComponent = class _AppComponent {
  theme;
  sidebar;
  isLoginPage = false;
  isPublicPage(url) {
    return url.startsWith("/login") || url.startsWith("/reset-password") || url.startsWith("/set-password");
  }
  constructor(theme, sidebar, router) {
    this.theme = theme;
    this.sidebar = sidebar;
    router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((e) => {
      this.isLoginPage = this.isPublicPage(e.urlAfterRedirects);
    });
    this.isLoginPage = this.isPublicPage(window.location.pathname);
  }
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)(\u0275\u0275directiveInject(ThemeService), \u0275\u0275directiveInject(SidebarService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 2, consts: [["shell", ""], [4, "ngIf", "ngIfElse"], [1, "app-shell", 3, "ngClass"], [1, "sidebar-overlay", 3, "click"], [1, "app-content"], [1, "app-main"]], template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, AppComponent_ng_container_0_Template, 2, 0, "ng-container", 1)(1, AppComponent_ng_template_1_Template, 8, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const shell_r3 = \u0275\u0275reference(2);
      \u0275\u0275property("ngIf", ctx.isLoginPage)("ngIfElse", shell_r3);
    }
  }, dependencies: [RouterOutlet, CommonModule, NgClass, NgIf, SidebarComponent, TopbarComponent, BottomNavComponent], styles: ["\n\n.app-shell[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  overflow: hidden;\n  background: var(--bg);\n  transition: background 0.3s;\n}\n.app-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  overflow: hidden;\n}\n.app-main[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding-bottom: 0;\n}\n.sidebar-overlay[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 200;\n  opacity: 0;\n  transition: opacity 0.25s;\n}\n.sidebar-overlay.open[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n@media (max-width: 768px) {\n  .sidebar-overlay[_ngcontent-%COMP%] {\n    display: block;\n    pointer-events: none;\n  }\n  .sidebar-overlay.open[_ngcontent-%COMP%] {\n    pointer-events: all;\n  }\n}\n/*# sourceMappingURL=app.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 18 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
