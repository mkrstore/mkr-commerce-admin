import {
  HttpInterceptorFn,
  HttpRequest,
  HttpHandlerFn,
  HttpErrorResponse,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, filter, switchMap, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { ErrorCode, extractErrorCode } from '../core/models/api.models';

/**
 * Single-responsibility HTTP interceptor:
 *
 *  1. withCredentials: true  — on every request so the browser sends the
 *     HttpOnly refresh-token cookie automatically (login, refresh, protected APIs).
 *
 *  2. Authorization: Bearer  — added only to non-auth endpoints; skipped for
 *     /api/auth/* to avoid sending a stale token on login / refresh calls.
 *
 *  3. Silent refresh         — triggered ONLY when the backend returns 401 with
 *     errorCode === ACCESS_TOKEN_EXPIRED.  Other 401s (INVALID_CREDENTIALS from
 *     /api/auth/login, REFRESH_TOKEN_INVALID from /api/auth/refresh, etc.) are
 *     passed through as-is so the calling component can handle them.
 *
 *  4. Queuing               — if a refresh is already in flight, subsequent
 *     failed requests wait for it instead of triggering duplicate refresh calls.
 *
 *  5. Session clear          — if the refresh itself fails, clearSession() is
 *     called which zeros the signals and navigates to /login.
 */

// Module-level — shared state across all concurrent interceptor invocations.
let isRefreshing = false;
const refreshDone$ = new BehaviorSubject<boolean>(false);

export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  const auth = inject(AuthService);

  // /api/auth/me needs Bearer — only skip it for credential/token exchange endpoints
  const isAuthEndpoint =
    req.url.includes('/api/auth/login')         ||
    req.url.includes('/api/auth/refresh')       ||
    req.url.includes('/api/auth/logout')        ||
    req.url.includes('/api/auth/forgot-password') ||
    req.url.includes('/api/auth/reset-password') ||
    req.url.includes('/api/auth/set-password')    ||
    req.url.includes('/api/auth/first-password') ||
    req.url.includes('/api/auth/dev/')           ||
    req.url.includes('/api/auth/invitation');

  // ── 1. withCredentials on every request ───────────────────────────────
  let outgoing = req.clone({ withCredentials: true });

  // ── 2. Bearer token on protected endpoints only ────────────────────────
  if (!isAuthEndpoint) {
    const token = auth.accessToken();
    if (token) {
      outgoing = withBearer(outgoing, token);
    }
  }

  return next(outgoing).pipe(
    catchError((error: HttpErrorResponse) => {
      const errorCode = extractErrorCode(error);

      // Trigger silent refresh for token errors on protected endpoints:
      //   ACCESS_TOKEN_EXPIRED — normal expiry, needs a fresh token.
      //   ACCESS_TOKEN_INVALID — no token in memory (page reload / backend restart)
      //                          or token made invalid by secret rotation.
      // All other 401s (INVALID_CREDENTIALS from /login, REFRESH_TOKEN_INVALID
      // from /refresh, etc.) are passed through for the component to handle.
      const shouldRefresh =
        !isAuthEndpoint &&
        error.status === 401 &&
        (errorCode === ErrorCode.ACCESS_TOKEN_EXPIRED ||
         errorCode === ErrorCode.ACCESS_TOKEN_INVALID);

      if (!shouldRefresh) {
        return throwError(() => error);
      }

      // ── 3 & 4. Refresh logic with queuing ─────────────────────────────
      if (isRefreshing) {
        // Another request already started the refresh — wait for it, then retry.
        return refreshDone$.pipe(
          filter(done => done === true),
          take(1),
          switchMap(() => next(rebuildRequest(req, auth.accessToken())))
        );
      }

      isRefreshing = true;
      refreshDone$.next(false);

      return auth.refreshToken().pipe(
        switchMap(() => {
          isRefreshing = false;
          refreshDone$.next(true);
          return next(rebuildRequest(req, auth.accessToken()));
        }),
        catchError(refreshError => {
          // ── 5. Session clear ─────────────────────────────────────────
          isRefreshing = false;
          refreshDone$.next(false);
          auth.clearSession();
          return throwError(() => refreshError);
        })
      );
    })
  );
};

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Clone the original request with withCredentials + fresh Bearer token. */
function rebuildRequest(
  original: HttpRequest<unknown>,
  token: string | null
): HttpRequest<unknown> {
  const cloned = original.clone({ withCredentials: true });
  return token ? withBearer(cloned, token) : cloned;
}

function withBearer(req: HttpRequest<unknown>, token: string): HttpRequest<unknown> {
  return req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
}
