/**
 * Mirrors the backend ApiResponse<T> envelope.
 * Every HTTP call returns this shape — success or error.
 */
export interface ApiResponse<T = void> {
  success:    boolean;
  message:    string;
  errorCode?: ErrorCode;
  data?:      T;
  timestamp:  string;
}

/**
 * Machine-readable error codes from the backend.
 * Switch on these — never on HTTP status or message strings.
 * Must stay in sync with backend ErrorCode.java enum.
 */
export enum ErrorCode {
  // Auth
  ACCESS_TOKEN_EXPIRED     = 'ACCESS_TOKEN_EXPIRED',
  ACCESS_TOKEN_INVALID     = 'ACCESS_TOKEN_INVALID',
  NO_SESSION               = 'NO_SESSION',
  REFRESH_TOKEN_INVALID    = 'REFRESH_TOKEN_INVALID',
  INVALID_CREDENTIALS      = 'INVALID_CREDENTIALS',
  ACCOUNT_DEACTIVATED      = 'ACCOUNT_DEACTIVATED',
  GOOGLE_LOGIN_REQUIRED    = 'GOOGLE_LOGIN_REQUIRED',

  // Password reset
  RESET_TOKEN_INVALID      = 'RESET_TOKEN_INVALID',
  RESET_TOKEN_EXPIRED      = 'RESET_TOKEN_EXPIRED',
  PASSWORD_RECENTLY_USED   = 'PASSWORD_RECENTLY_USED',
  CAPTCHA_FAILED           = 'CAPTCHA_FAILED',

  // Invitation
  INVITATION_TOKEN_INVALID = 'INVITATION_TOKEN_INVALID',
  INVITATION_TOKEN_EXPIRED = 'INVITATION_TOKEN_EXPIRED',
  ROLE_NOT_PERMITTED       = 'ROLE_NOT_PERMITTED',

  // Validation
  VALIDATION_ERROR         = 'VALIDATION_ERROR',

  // Resource
  RESOURCE_NOT_FOUND       = 'RESOURCE_NOT_FOUND',
  FORBIDDEN                = 'FORBIDDEN',

  // Business
  INSUFFICIENT_STOCK       = 'INSUFFICIENT_STOCK',
  DUPLICATE_EMAIL          = 'DUPLICATE_EMAIL',
  INVALID_PROMO_CODE       = 'INVALID_PROMO_CODE',

  // Generic
  INTERNAL_ERROR           = 'INTERNAL_ERROR',
}

/**
 * Extracts a user-friendly message from any HTTP error.
 *
 * Handles every failure case in one place so components never
 * do their own error parsing.
 *
 * Priority:
 *   1. Status 0            → no connection / backend not running
 *   2. HTML body           → proxy returned an error page (backend down)
 *   3. errorCode override  → specific friendly message for known codes
 *   4. backend message     → use exactly what the backend says
 *   5. HTTP status         → generic message per status code
 *   6. fallback            → last resort
 */
export function extractErrorMessage(
  error: any,
  fallback = 'Something went wrong. Please try again.'
): string {
  if (!error) return fallback;

  // ── 1. No connection or backend completely down ──────────────────────────
  if (error.status === 0) {
    return 'Cannot reach the server. Please check your connection or try again later.';
  }

  const body = error?.error;

  // ── 2. HTML response — proxy/server returned a web page instead of JSON ──
  if (typeof body === 'string' && (body.trimStart().startsWith('<') || body.includes('<!DOCTYPE'))) {
    return 'Server is unreachable. Please try again later.';
  }

  // ── 3. Known error codes — override with specific messages ────────────────
  const code: ErrorCode | undefined = body?.errorCode;
  if (code) {
    switch (code) {
      case ErrorCode.INVALID_CREDENTIALS:
        return 'Invalid email or password.';
      case ErrorCode.ACCOUNT_DEACTIVATED:
        return 'Your account has been deactivated. Please contact your administrator.';
      case ErrorCode.GOOGLE_LOGIN_REQUIRED:
        return 'This account uses Google Sign-In. Please use "Continue with Google".';
      case ErrorCode.ACCESS_TOKEN_EXPIRED:
        return 'Your session has expired. Please log in again.';
      case ErrorCode.ACCESS_TOKEN_INVALID:
        return 'Invalid session. Please log in again.';
      case ErrorCode.REFRESH_TOKEN_INVALID:
        return 'Your session has expired. Please log in again.';
      case ErrorCode.CAPTCHA_FAILED:
        return 'CAPTCHA verification failed. Please try again.';
      case ErrorCode.RESET_TOKEN_EXPIRED:
        return 'This reset link has expired. Please request a new one.';
      case ErrorCode.RESET_TOKEN_INVALID:
        return 'This reset link is invalid or has already been used.';
      case ErrorCode.INVITATION_TOKEN_EXPIRED:
        return 'This invitation link has expired. Please ask your admin to resend it.';
      case ErrorCode.INVITATION_TOKEN_INVALID:
        return 'This invitation link is invalid or has already been used.';
      case ErrorCode.PASSWORD_RECENTLY_USED:
        return body?.message ?? 'You cannot reuse a recent password. Please choose a different one.';
      case ErrorCode.DUPLICATE_EMAIL:
        return 'An account with this email already exists.';
      case ErrorCode.FORBIDDEN:
      case ErrorCode.ROLE_NOT_PERMITTED:
        return body?.message ?? 'You don\'t have permission to perform this action.';
      case ErrorCode.RESOURCE_NOT_FOUND:
        return 'The requested resource was not found.';
      case ErrorCode.VALIDATION_ERROR:
        return body?.message ?? 'Please check your input and try again.';
      case ErrorCode.INTERNAL_ERROR:
        return 'Something went wrong on the server. Please try again.';
    }
  }

  // ── 4. Use backend message directly if present ────────────────────────────
  if (body?.message) return body.message;

  // ── 5. Generic HTTP status fallbacks ─────────────────────────────────────
  switch (error.status) {
    case 400: return 'Invalid request. Please check your input.';
    case 401: return 'Authentication required. Please log in.';
    case 403: return 'You don\'t have permission to perform this action.';
    case 404: return 'The requested resource was not found.';
    case 409: return 'A conflict occurred. Please try again.';
    case 429: return 'Too many requests. Please wait a moment and try again.';
    case 500: return 'Something went wrong on the server. Please try again.';
    case 502:
    case 503:
    case 504: return 'Server is temporarily unavailable. Please try again later.';
  }

  // ── 6. Last resort ────────────────────────────────────────────────────────
  return fallback;
}

/** Safely extracts the errorCode from an HttpErrorResponse. */
export function extractErrorCode(error: any): ErrorCode | null {
  const code = error?.error?.errorCode;
  return code ? (code as ErrorCode) : null;
}
