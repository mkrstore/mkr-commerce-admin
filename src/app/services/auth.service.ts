import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap, catchError, map, timeout } from 'rxjs';
import { AUTH_ENDPOINTS }             from '../core/constants/api.constants';
import { ROLE_META }                  from '../core/constants/roles.constants';
import { ApiResponse, extractErrorCode, ErrorCode } from '../core/models/api.models';
import { ToastService }              from './toast.service';

// ── Domain types ──────────────────────────────────────────────────────────────

export type UserRole = 'SUPER_ADMIN' | 'ADMIN' | 'SALES' | 'INVENTORY' | 'SUPPORT';

export interface AuthUser {
  id:         string;
  name:       string;
  firstName:  string;
  lastName:   string;
  email:      string;
  role:       UserRole;
  department: string;
}

interface LoginResponse {
  accessToken: string;
  user:        AuthUser;
}

// ── Service ───────────────────────────────────────────────────────────────────

@Injectable({ providedIn: 'root' })
export class AuthService {

  private readonly EP = AUTH_ENDPOINTS;

  // In-memory only — never stored in localStorage/sessionStorage (security).
  // withCredentials is handled globally by the interceptor; the HttpOnly
  // refresh-token cookie is invisible to JS and sent automatically by the browser.
  private _accessToken = signal<string | null>(null);
  private _user        = signal<AuthUser | null>(null);

  // Public read-only signals consumed by components and the interceptor.
  currentUser = computed(() => this._user());
  isLoggedIn  = computed(() => this._user() !== null);
  accessToken = computed(() => this._accessToken());

  constructor(
    private http:  HttpClient,
    private router: Router,
    private toast: ToastService,
  ) {}

  // ── APP_INITIALIZER ────────────────────────────────────────────────────────
  // Called once on startup — silently restores session from the HttpOnly cookie.
  // withCredentials is added by the interceptor (auth endpoint, so no Bearer).

  initAuth(): Promise<void> {
    return new Promise(resolve => {
      this.http.post<ApiResponse<LoginResponse>>(this.EP.REFRESH, {})
        .pipe(timeout(28000))
        .subscribe({
          next: res => {
            if (res.data) {
              this._accessToken.set(res.data.accessToken);
              this._user.set(res.data.user);
            }
            resolve();
          },
          error: (err) => {
            // Refresh token present but expired — show toast when user lands on login
            if (extractErrorCode(err) === ErrorCode.REFRESH_TOKEN_INVALID) {
              this.toast.show('Your session has expired. Please sign in again.', 'warning');
            }
            resolve();
          }
        });
    });
  }

  // ── Login ──────────────────────────────────────────────────────────────────

  login(identifier: string, password: string): Observable<ApiResponse<LoginResponse>> {
    return this.http.post<ApiResponse<LoginResponse>>(
      this.EP.LOGIN,
      { identifier, password }
    ).pipe(
      tap(res => {
        if (res.data) {
          this._accessToken.set(res.data.accessToken);
          this._user.set(res.data.user);
        }
      })
    );
  }

  // ── Refresh (called by the interceptor on ACCESS_TOKEN_EXPIRED) ────────────
  // The interceptor only waits for completion and re-reads the accessToken signal;
  // it does not use the emitted value, so Observable<void> is sufficient.

  refreshToken(): Observable<void> {
    return this.http.post<ApiResponse<LoginResponse>>(this.EP.REFRESH, {}).pipe(
      tap(res => {
        if (res.data) {
          this._accessToken.set(res.data.accessToken);
          this._user.set(res.data.user);
        }
      }),
      // Map to void so callers don't depend on the shape of the response.
      // We use 'as any' here intentionally — the interceptor never reads the value.
      catchError(err => { throw err; })
    ) as unknown as Observable<void>;
  }

  // ── Logout ─────────────────────────────────────────────────────────────────
  // Best-effort server call to revoke the refresh token, then clear local state.

  logout(): void {
    this.http.post(this.EP.LOGOUT, {}).subscribe({ error: () => {} });
    this.toast.show('You have been signed out successfully.', 'success');
    this.clearSession();
  }

  clearSession(reason?: 'session_expired'): void {
    if (reason === 'session_expired') {
      this.toast.show('Your session has expired. Please sign in again.', 'warning');
    }
    this._accessToken.set(null);
    this._user.set(null);
    this.router.navigate(['/login']);
  }

  // ── Password reset ─────────────────────────────────────────────────────────

  forgotPassword(email: string): Observable<ApiResponse<void>> {
    return this.http.post<ApiResponse<void>>(
      this.EP.FORGOT_PASSWORD,
      { email }
    );
  }

  validateResetToken(
    token: string
  ): Observable<ApiResponse<{ valid: boolean; maskedEmail: string | null; message: string }>> {
    return this.http.get<ApiResponse<any>>(
      this.EP.VALIDATE_RESET_TOKEN,
      { params: { token } }
    );
  }

  resetPassword(token: string, newPassword: string): Observable<ApiResponse<void>> {
    return this.http.post<ApiResponse<void>>(
      this.EP.RESET_PASSWORD,
      { token, newPassword }
    );
  }

  // ── Invitation (new staff account setup) ──────────────────────────────────

  validateInvitation(
    token: string
  ): Observable<ApiResponse<{ valid: boolean; maskedEmail: string | null; message: string }>> {
    return this.http.get<ApiResponse<any>>(
      this.EP.VALIDATE_INVITATION,
      { params: { token } }
    );
  }

  setPassword(token: string, newPassword: string): Observable<ApiResponse<void>> {
    return this.http.post<ApiResponse<void>>(
      this.EP.SET_PASSWORD,
      { token, newPassword }
    );
  }

  setFirstPassword(identifier: string, newPassword: string): Observable<ApiResponse<LoginResponse>> {
    return this.http.post<ApiResponse<LoginResponse>>(
      this.EP.FIRST_PASSWORD,
      { identifier, newPassword }
    ).pipe(
      tap(res => {
        if (res.data) {
          this._accessToken.set(res.data.accessToken);
          this._user.set(res.data.user);
        }
      })
    );
  }

  devResetPassword(identifier: string, newPassword: string): Observable<ApiResponse<LoginResponse>> {
    return this.http.post<ApiResponse<LoginResponse>>(
      this.EP.DEV_RESET_PASSWORD,
      { identifier, newPassword }
    ).pipe(
      tap(res => {
        if (res.data) {
          this._accessToken.set(res.data.accessToken);
          this._user.set(res.data.user);
        }
      })
    );
  }

  // ── Google OAuth ───────────────────────────────────────────────────────────

  loginWithGoogle(): void {
    window.location.href = AUTH_ENDPOINTS.GOOGLE;
  }

  /** Called by OAuthCallbackComponent after the Spring redirect lands. */
  restoreFromOAuth(token: string): Observable<void> {
    this._accessToken.set(token);
    return this.http.get<ApiResponse<AuthUser>>(this.EP.ME).pipe(
      tap(res => { if (res.data) this._user.set(res.data); }),
      map(() => void 0)
    );
  }

  // ── Initials ────────────────────────────────────────────────────────────────

  userInitials(user: AuthUser | null): string {
    if (!user) return '?';
    return ((user.firstName?.[0] ?? '') + (user.lastName?.[0] ?? '')).toUpperCase() || '?';
  }

  // ── Role helpers — delegate to ROLE_META (single source of truth) ──────────

  hasRole(...roles: UserRole[]): boolean {
    const user = this._user();
    return !!user && roles.includes(user.role);
  }

  isAdminLevel(): boolean {
    return this.hasRole('SUPER_ADMIN', 'ADMIN');
  }

  roleName(role: UserRole): string {
    return ROLE_META[role]?.name ?? role;
  }

  roleColor(role: UserRole): string {
    return ROLE_META[role]?.color ?? '#6B7280';
  }
}
