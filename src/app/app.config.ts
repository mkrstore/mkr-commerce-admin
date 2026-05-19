import { ApplicationConfig, APP_INITIALIZER, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors, withFetch } from '@angular/common/http';

import { routes }          from './app.routes';
import { authInterceptor } from './interceptors/auth.interceptor';
import { AuthService }     from './services/auth.service';

/**
 * Called before the app renders.
 * Silently calls /api/auth/refresh — if the HttpOnly cookie is present
 * (user was previously logged in), the access token is restored in memory
 * and the user lands directly on their last page instead of /login.
 */
function initAuth(authService: AuthService): () => Promise<void> {
  return () => authService.initAuth();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    // HttpClient with functional interceptor + fetch API
    provideHttpClient(
      withFetch(),
      withInterceptors([authInterceptor])
    ),

    // Restore session from refresh cookie before first render
    {
      provide:    APP_INITIALIZER,
      useFactory: initAuth,
      deps:       [AuthService],
      multi:      true
    }
  ]
};
