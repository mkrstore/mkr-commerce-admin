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
    this.setupPullToRefresh();
  }

  private setupPullToRefresh(): void {
    const mainEl = document.querySelector('.app-main') as HTMLElement;
    if (!mainEl) return;

    mainEl.addEventListener('touchstart', (e: TouchEvent) => {
      if (mainEl.scrollTop > 2 || this.isLoginPage) return;
      this.ptrStartY = e.touches[0].clientY;
      this.ptrStartX = e.touches[0].clientX;
      this.ptrActive = true;
    }, { passive: true });

    mainEl.addEventListener('touchmove', (e: TouchEvent) => {
      if (!this.ptrActive) return;
      const dy = e.touches[0].clientY - this.ptrStartY;
      const dx = Math.abs(e.touches[0].clientX - this.ptrStartX);
      if (dx > 30 || dy <= 0) { this.ptrActive = false; this.ptrOffset = 0; return; }
      this.ptrOffset    = Math.min(Math.round(dy * 0.45), this.PTR_MAX);
      this.ptrTriggered = dy > this.PTR_THRESHOLD;
    }, { passive: true });

    mainEl.addEventListener('touchend', () => {
      if (!this.ptrActive) return;
      this.ptrActive = false;
      if (this.ptrTriggered) {
        this.ptrLoading   = true;
        this.ptrTriggered = false;
        this.ptrOffset    = 40;
        setTimeout(() => location.reload(), 400);
      } else {
        this.ptrOffset    = 0;
        this.ptrTriggered = false;
      }
    }, { passive: true });
  }
}
