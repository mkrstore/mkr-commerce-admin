/**
 * Application-wide constants.
 * Import what you need — tree-shaking removes what you don't use.
 */

// ── reCAPTCHA ─────────────────────────────────────────────────────────────────
// Dev: Google's public test keys (always pass verification, safe for localhost)
// Production: replace with your real site key from console.cloud.google.com
export const RECAPTCHA_SITE_KEY = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';

// ── Password validation ───────────────────────────────────────────────────────
// Must match backend ResetPasswordRequest @Pattern exactly
export const PASSWORD_MIN_LENGTH = 8;
export const PASSWORD_PATTERN    =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_#^])[A-Za-z\d@$!%*?&_#^]{8,}$/;

export const PASSWORD_REQUIREMENTS = [
  { label: '↑ Uppercase',  test: (p: string) => /[A-Z]/.test(p) },
  { label: '↓ Lowercase',  test: (p: string) => /[a-z]/.test(p) },
  { label: '# Number',     test: (p: string) => /[0-9]/.test(p) },
  { label: '@ Symbol',     test: (p: string) => /[@$!%*?&_#^]/.test(p) },
  { label: '8+ chars',     test: (p: string) => p.length >= PASSWORD_MIN_LENGTH },
];

// ── Pagination ────────────────────────────────────────────────────────────────
export const DEFAULT_PAGE_SIZE   = 20;
export const PRODUCT_PAGE_SIZE   = 20;
export const ORDER_PAGE_SIZE     = 25;
export const CUSTOMER_PAGE_SIZE  = 25;

// ── Dev test accounts (shown on login page — remove in production) ─────────────
export const DEV_TEST_ACCOUNTS = [
  { role: 'Super Admin',       email: 'superadmin@mkr.com', password: 'Admin@123'   },
  { role: 'Admin',             email: 'admin1@mkr.com',     password: 'Admin@123'   },
  { role: 'Sales',             email: 'sales1@mkr.com',     password: 'Sales@123'   },
  { role: 'Inventory Manager', email: 'inventory@mkr.com',  password: 'Inv@123'     },
  { role: 'Support',           email: 'support@mkr.com',    password: 'Support@123' },
] as const;

// ── Currency ──────────────────────────────────────────────────────────────────
export const CURRENCY_CODE   = 'INR';
export const CURRENCY_SYMBOL = '₹';

// ── GST ───────────────────────────────────────────────────────────────────────
export const DEFAULT_GST_RATE = 18;  // %

// ── Date formats ──────────────────────────────────────────────────────────────
export const DATE_FORMAT      = 'dd MMM yyyy';         // 08 May 2026
export const DATETIME_FORMAT  = 'dd MMM yyyy, h:mm a'; // 08 May 2026, 10:30 AM
