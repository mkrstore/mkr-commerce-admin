import { CURRENCY_SYMBOL } from '../constants/app.constants';

/**
 * Format utilities — pure functions, no dependencies, easily testable.
 *
 * Import only what you need:
 *   import { formatINR, formatDate } from '../../core/utils/format.utils';
 */

// ── Currency ──────────────────────────────────────────────────────────────────

/**
 * Format a number as Indian Rupees.
 * formatINR(12500)    → '₹12,500'
 * formatINR(12500.5)  → '₹12,500.50'
 */
export function formatINR(amount: number, showDecimals = false): string {
  if (amount == null || isNaN(amount)) return `${CURRENCY_SYMBOL}0`;
  const formatted = new Intl.NumberFormat('en-IN', {
    minimumFractionDigits: showDecimals ? 2 : 0,
    maximumFractionDigits: showDecimals ? 2 : 0,
  }).format(amount);
  return `${CURRENCY_SYMBOL}${formatted}`;
}

/** Round to 2 decimal places (safe for financial amounts). */
export function roundMoney(amount: number): number {
  return Math.round((amount + Number.EPSILON) * 100) / 100;
}

// ── GST ───────────────────────────────────────────────────────────────────────

/** Calculate GST amount from price and rate. */
export function calcGST(price: number, gstRate: number): number {
  return roundMoney((price * gstRate) / 100);
}

/** Calculate savings percentage. */
export function savingsPct(price: number, mrp: number): number {
  if (!mrp || mrp <= price) return 0;
  return Math.round((1 - price / mrp) * 100);
}

// ── Date ──────────────────────────────────────────────────────────────────────

/**
 * Format an ISO string or Date to "08 May 2026".
 */
export function formatDate(value: string | Date | null | undefined): string {
  if (!value) return '—';
  const d = value instanceof Date ? value : new Date(value);
  if (isNaN(d.getTime())) return '—';
  return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

/**
 * Format to "08 May 2026, 10:30 AM".
 */
export function formatDateTime(value: string | Date | null | undefined): string {
  if (!value) return '—';
  const d = value instanceof Date ? value : new Date(value);
  if (isNaN(d.getTime())) return '—';
  return d.toLocaleDateString('en-IN', {
    day: '2-digit', month: 'short', year: 'numeric',
    hour: 'numeric', minute: '2-digit', hour12: true,
  });
}

/**
 * Relative time — "2 hours ago", "just now", "3 days ago".
 */
export function timeAgo(value: string | Date | null | undefined): string {
  if (!value) return '';
  const d     = value instanceof Date ? value : new Date(value);
  const diff  = (Date.now() - d.getTime()) / 1000;
  if (diff < 60)                return 'just now';
  if (diff < 3600)              return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400)             return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 86400 * 7)         return `${Math.floor(diff / 86400)}d ago`;
  return formatDate(d);
}

// ── Text ──────────────────────────────────────────────────────────────────────

/**
 * Generate 2-letter initials from a full name.
 * buildInitials('Rajesh Kumar') → 'RK'
 * buildInitials('Meena')        → 'ME'
 */
export function buildInitials(name: string): string {
  if (!name?.trim()) return '??';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/**
 * Truncate text with ellipsis.
 * truncate('Hello World', 8) → 'Hello Wo…'
 */
export function truncate(text: string, maxLength: number): string {
  if (!text || text.length <= maxLength) return text ?? '';
  return text.slice(0, maxLength) + '…';
}

/**
 * Mask email for display.
 * maskEmail('rajesh.kumar@mkr.com') → 'r*********r@mkr.com'
 */
export function maskEmail(email: string): string {
  const atIndex = email.indexOf('@');
  if (atIndex <= 2) return email;
  const local  = email.substring(0, atIndex);
  const domain = email.substring(atIndex);
  return local[0] + '*'.repeat(local.length - 2) + local[local.length - 1] + domain;
}

// ── Order / Status ────────────────────────────────────────────────────────────

export type OrderStatus =
  'PENDING' | 'CONFIRMED' | 'PROCESSING' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED' | 'RETURNED';

export type PaymentStatus = 'UNPAID' | 'PAID' | 'PARTIAL' | 'REFUNDED';

export const ORDER_STATUS_META: Record<OrderStatus, { label: string; color: string; bg: string }> = {
  PENDING:    { label: 'Pending',    color: '#D97706', bg: 'rgba(217,119,6,.12)'  },
  CONFIRMED:  { label: 'Confirmed',  color: '#2874F0', bg: 'rgba(40,116,240,.10)' },
  PROCESSING: { label: 'Processing', color: '#7C3AED', bg: 'rgba(124,58,237,.10)' },
  SHIPPED:    { label: 'Shipped',    color: '#0891B2', bg: 'rgba(8,145,178,.10)'  },
  DELIVERED:  { label: 'Delivered',  color: '#16A34A', bg: 'rgba(22,163,74,.10)'  },
  CANCELLED:  { label: 'Cancelled',  color: '#6B7280', bg: 'rgba(107,114,128,.10)'},
  RETURNED:   { label: 'Returned',   color: '#E53935', bg: 'rgba(229,57,53,.10)'  },
};

export const PAYMENT_STATUS_META: Record<PaymentStatus, { label: string; color: string }> = {
  UNPAID:   { label: 'Unpaid',   color: '#E53935' },
  PAID:     { label: 'Paid',     color: '#16A34A' },
  PARTIAL:  { label: 'Partial',  color: '#D97706' },
  REFUNDED: { label: 'Refunded', color: '#0891B2' },
};
