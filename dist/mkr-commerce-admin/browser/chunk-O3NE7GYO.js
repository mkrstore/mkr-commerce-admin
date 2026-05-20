// src/environments/environment.ts
var environment = {
  production: false,
  apiBase: "http://localhost:8080"
};

// src/app/core/constants/api.constants.ts
var API = `${environment.apiBase}/api`;
var AUTH_ENDPOINTS = {
  LOGIN: `${API}/auth/login`,
  LOGOUT: `${API}/auth/logout`,
  REFRESH: `${API}/auth/refresh`,
  ME: `${API}/auth/me`,
  FORGOT_PASSWORD: `${API}/auth/forgot-password`,
  RESET_PASSWORD: `${API}/auth/reset-password`,
  VALIDATE_RESET_TOKEN: `${API}/auth/reset-password/validate`,
  SET_PASSWORD: `${API}/auth/set-password`,
  VALIDATE_INVITATION: `${API}/auth/invitation/validate`,
  // Spring Security OAuth2 initiation — NOT under the /api prefix
  GOOGLE: `${environment.apiBase}/oauth2/authorization/google`
};
var USER_ENDPOINTS = {
  BASE: `${API}/users`,
  BY_ID: (id) => `${API}/users/${id}`,
  STATUS: (id) => `${API}/users/${id}/status`,
  ROLE: (id) => `${API}/users/${id}/role`,
  RESEND_INVITATION: (id) => `${API}/users/${id}/resend-invitation`,
  AUDIT_LOGS: (id) => `${API}/users/${id}/audit-logs`
};
var PRODUCT_ENDPOINTS = {
  BASE: `${API}/products`,
  BY_ID: (id) => `${API}/products/${id}`,
  CLONE: (id) => `${API}/products/${id}/clone`,
  ATTRIBUTES: (id) => `${API}/products/${id}/attributes`,
  MEDIA: (id) => `${API}/products/${id}/media`,
  MEDIA_BY_ID: (id, mediaId) => `${API}/products/${id}/media/${mediaId}`,
  VARIANTS: (id) => `${API}/products/${id}/variants`,
  VARIANT_BY_ID: (id, varId) => `${API}/products/${id}/variants/${varId}`,
  CATEGORIES_TREE: `${API}/categories/tree`,
  CATEGORIES: `${API}/categories`,
  CATEGORY_BY_ID: (id) => `${API}/categories/${id}`,
  CATEGORY_ATTRS: (id) => `${API}/categories/${id}/attributes`,
  CATEGORY_ATTR_ID: (id, attrId) => `${API}/categories/${id}/attributes/${attrId}`,
  BRANDS: `${API}/brands`
};
var ORDER_ENDPOINTS = {
  BASE: `${API}/orders`,
  BY_ID: (id) => `${API}/orders/${id}`,
  STATUS: (id) => `${API}/orders/${id}/status`,
  CANCEL: (id) => `${API}/orders/${id}/cancel`
};
var BILLING_ENDPOINTS = {
  PREVIEW: `${API}/billing/preview`,
  CONFIRM: `${API}/billing/confirm`
};
var CUSTOMER_ENDPOINTS = {
  BASE: `${API}/customers`,
  BY_ID: (id) => `${API}/customers/${id}`
};
var INVENTORY_ENDPOINTS = {
  BASE: `${API}/inventory`,
  RESTOCK: (productId) => `${API}/inventory/${productId}/restock`,
  TRANSACTIONS: `${API}/inventory/transactions`,
  LOW_STOCK: `${API}/inventory/low-stock`
};
var PAYMENT_ENDPOINTS = {
  BASE: `${API}/payments`,
  SUMMARY: `${API}/payments/summary`
};
var PROMOTION_ENDPOINTS = {
  BASE: `${API}/promotions`,
  BY_ID: (id) => `${API}/promotions/${id}`,
  VALIDATE: `${API}/promotions/validate`
};
var DASHBOARD_ENDPOINTS = {
  STATS: `${API}/dashboard/stats`,
  CHART: `${API}/dashboard/chart`,
  RECENT_ORDERS: `${API}/dashboard/recent-orders`
};

export {
  AUTH_ENDPOINTS,
  USER_ENDPOINTS,
  PRODUCT_ENDPOINTS
};
//# sourceMappingURL=chunk-O3NE7GYO.js.map
