import { Component } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { BottomNavComponent } from './layout/bottom-nav/bottom-nav.component';
import { ThemeService } from './services/theme.service';
import { SidebarService } from './services/sidebar.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SidebarComponent, TopbarComponent, BottomNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isLoginPage = false;

  private isPublicPage(url: string): boolean {
    return url.startsWith('/login') ||
           url.startsWith('/reset-password') ||
           url.startsWith('/set-password');
  }

  constructor(
    public theme: ThemeService,
    public sidebar: SidebarService,
    router: Router
  ) {
    router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((e: any) => {
      this.isLoginPage = this.isPublicPage(e.urlAfterRedirects);
    });
    this.isLoginPage = this.isPublicPage(window.location.pathname);
  }
}
