/**
 * API endpoint constants.
 *
 * All paths relative to the Angular dev proxy (/api → http://localhost:8080/api).
 * In production, set the base URL via environment.ts.
 *
 * Use these everywhere instead of inline strings so a base URL change
 * is a one-line edit here, not a search-and-replace across 20 files.
 */

import { environment } from '../../../environments/environment';

const API = `${environment.apiBase}/api`;

export const AUTH_ENDPOINTS = {
  LOGIN:                  `${API}/auth/login`,
  LOGOUT:                 `${API}/auth/logout`,
  REFRESH:                `${API}/auth/refresh`,
  ME:                     `${API}/auth/me`,
  FORGOT_PASSWORD:        `${API}/auth/forgot-password`,
  RESET_PASSWORD:         `${API}/auth/reset-password`,
  VALIDATE_RESET_TOKEN:   `${API}/auth/reset-password/validate`,
  SET_PASSWORD:           `${API}/auth/set-password`,
  FIRST_PASSWORD:         `${API}/auth/first-password`,
  DEV_RESET_PASSWORD:     `${API}/auth/dev/reset-password`,
  VALIDATE_INVITATION:    `${API}/auth/invitation/validate`,
  // Spring Security OAuth2 initiation — NOT under the /api prefix
  GOOGLE:                 `${environment.apiBase}/oauth2/authorization/google`,
} as const;

export const USER_ENDPOINTS = {
  BASE:               `${API}/users`,
  CHECK:              `${API}/users/check`,
  BY_ID:              (id: string) => `${API}/users/${id}`,
  UPDATE:             (id: string) => `${API}/users/${id}`,
  STATUS:             (id: string) => `${API}/users/${id}/status`,
  ROLE:               (id: string) => `${API}/users/${id}/role`,
  RESEND_INVITATION:  (id: string) => `${API}/users/${id}/resend-invitation`,
  AUDIT_LOGS:         (id: string) => `${API}/users/${id}/audit-logs`,
} as const;

export const PRODUCT_ENDPOINTS = {
  BASE:             `${API}/products`,
  BY_ID:            (id: string) => `${API}/products/${id}`,
  CLONE:            (id: string) => `${API}/products/${id}/clone`,
  ATTRIBUTES:       (id: string) => `${API}/products/${id}/attributes`,
  MEDIA:            (id: string) => `${API}/products/${id}/media`,
  MEDIA_BY_ID:      (id: string, mediaId: string) => `${API}/products/${id}/media/${mediaId}`,
  VARIANTS:         (id: string) => `${API}/products/${id}/variants`,
  VARIANT_BY_ID:    (id: string, varId: string) => `${API}/products/${id}/variants/${varId}`,
  CATEGORIES_TREE:  `${API}/categories/tree`,
  CATEGORIES:       `${API}/categories`,
  CATEGORY_BY_ID:   (id: string) => `${API}/categories/${id}`,
  CATEGORY_ATTRS:   (id: string) => `${API}/categories/${id}/attributes`,
  CATEGORY_ATTR_ID: (id: string, attrId: string) => `${API}/categories/${id}/attributes/${attrId}`,
  BRANDS:           `${API}/brands`,
  BRAND_LOGO:       (id: string) => `${API}/brands/${id}/logo`,
  CATEGORY_IMAGE:   (id: string) => `${API}/categories/${id}/image`,
} as const;

export const ORDER_ENDPOINTS = {
  BASE:      `${API}/orders`,
  BY_ID:     (id: string) => `${API}/orders/${id}`,
  STATUS:    (id: string) => `${API}/orders/${id}/status`,
  CANCEL:    (id: string) => `${API}/orders/${id}/cancel`,
} as const;

export const BILLING_ENDPOINTS = {
  LIST:    `${API}/billing`,
  PREVIEW: `${API}/billing/preview`,
  CONFIRM: `${API}/billing/confirm`,
  BY_ID:   (id: string) => `${API}/billing/${id}`,
  PDF:     (id: string) => `${API}/billing/${id}/pdf`,
  EMAIL:   (id: string) => `${API}/billing/${id}/send-email`,
} as const;

export const CUSTOMER_ENDPOINTS = {
  BASE:          `${API}/customers`,
  BY_ID:         (id: string) => `${API}/customers/${id}`,
  TYPE:          (id: string) => `${API}/customers/${id}/type`,
  STATUS:        (id: string) => `${API}/customers/${id}/status`,
  KHATA:         (id: string) => `${API}/customers/${id}/khata`,
  KHATA_COLLECT: (id: string) => `${API}/customers/${id}/khata/collect`,
  ORDERS:        (id: string) => `${API}/customers/${id}/orders`,
  BILLS:         (id: string) => `${API}/customers/${id}/bills`,
} as const;

export const INVENTORY_ENDPOINTS = {
  BASE:         `${API}/inventory`,
  RESTOCK:      (productId: string) => `${API}/inventory/${productId}/restock`,
  TRANSACTIONS: `${API}/inventory/transactions`,
  LOW_STOCK:    `${API}/inventory/low-stock`,
} as const;

export const PAYMENT_ENDPOINTS = {
  BASE:    `${API}/payments`,
  SUMMARY: `${API}/payments/summary`,
} as const;

export const PROMOTION_ENDPOINTS = {
  BASE:     `${API}/promotions`,
  BY_ID:    (id: string) => `${API}/promotions/${id}`,
  VALIDATE: `${API}/promotions/validate`,
} as const;

export const LOOKUP_ENDPOINTS = {
  BASE:    `${API}/lookup-lists`,
  BY_ID:   (id: string) => `${API}/lookup-lists/${id}`,
} as const;

export const DASHBOARD_ENDPOINTS = {
  STATS:         `${API}/dashboard/stats`,
  CHART:         `${API}/dashboard/chart`,
  RECENT_ORDERS: `${API}/dashboard/recent-orders`,
} as const;
