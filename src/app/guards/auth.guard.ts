import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService, UserRole } from '../services/auth.service';

/** Protects any route that requires the user to be signed in. */
export const authGuard: CanActivateFn = (_route, _state) => {
  const auth   = inject(AuthService);
  const router = inject(Router);
  if (auth.isLoggedIn()) return true;
  router.navigate(['/login']);
  return false;
};

/**
 * Protects routes that require a specific role.
 * Usage in routes:  canActivate: [roleGuard], data: { roles: ['ADMIN', 'SUPER_ADMIN'] }
 */
export const roleGuard: CanActivateFn = (route, _state) => {
  const auth   = inject(AuthService);
  const router = inject(Router);

  if (!auth.isLoggedIn()) {
    router.navigate(['/login']);
    return false;
  }

  const allowed = route.data?.['roles'] as UserRole[] | undefined;
  if (!allowed || allowed.length === 0) return true;   // no restriction

  if (auth.hasRole(...allowed)) return true;

  // Signed in but wrong role → redirect to dashboard
  router.navigate(['/dashboard']);
  return false;
};
