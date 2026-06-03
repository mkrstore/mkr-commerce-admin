import { Component, AfterViewInit } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { interval } from 'rxjs';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { BottomNavComponent } from './layout/bottom-nav/bottom-nav.component';
import { ConfirmDialogComponent } from './shared/ui/confirm-dialog/confirm-dialog.component';
import { ToastComponent } from './shared/ui/toast/toast.component';
import { ThemeService } from './services/theme.service';
import { SidebarService } from './services/sidebar.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SidebarComponent, TopbarComponent, BottomNavComponent, ConfirmDialogComponent, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  isLoginPage = false;

  // ── Pull to refresh ─────────────────────────────────────────────────────
  ptrOffset    = 0;
  ptrTriggered = false;
  ptrLoading   = false;

  private readonly PTR_MAX       = 64;
  private readonly PTR_THRESHOLD = 55;
  private ptrStartY = 0;
  private ptrStartX = 0;
  private ptrActive = false;

  private isPublicPage(url: string): boolean {
    return url.startsWith('/login') ||
           url.startsWith('/reset-password') ||
           url.startsWith('/set-password');
  }

  constructor(
    public theme: ThemeService,
    public sidebar: SidebarService,
    router: Router,
    swUpdate: SwUpdate,
  ) {
    router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((e: any) => {
      this.isLoginPage = this.isPublicPage(e.urlAfterRedirects);
    });
    this.isLoginPage = this.isPublicPage(window.location.pathname);

    if (swUpdate.isEnabled) {
      // Activate new version as soon as it's ready → reload
      swUpdate.versionUpdates.pipe(
        filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY')
      ).subscribe(async () => {
        await swUpdate.activateUpdate();
        document.location.reload();
      });

      // Check on startup + every 30 minutes for idle tabs
      swUpdate.checkForUpdate();
      interval(30 * 60 * 1000).subscribe(() => swUpdate.checkForUpdate());
    }
  }

  ngAfterViewInit(): void {
    // Pull-to-refresh disabled — causes unwanted page reloads on iOS which
    // clear the in-memory access token and trigger unnecessary re-auth flows.
    // this.setupPullToRefresh();
  }

  // private setupPullToRefresh(): void { ... }
}
