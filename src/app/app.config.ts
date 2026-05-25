import { ApplicationConfig, APP_INITIALIZER, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient, withInterceptors, withFetch } from '@angular/common/http';
import { provideServiceWorker } from '@angular/service-worker';

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
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'top' })),

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
    },

    // Service worker — enabled only in production builds
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    })
  ]
};
