import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { ThemeService } from '../../services/theme.service';
import { SidebarService } from '../../services/sidebar.service';
import { NotificationService } from '../../services/notification.service';
import { AuthService } from '../../services/auth.service';

const PAGE_TITLES: Record<string, string> = {
  dashboard: 'Dashboard', analytics: 'Analytics', products: 'Products',
  inventory: 'Inventory', orders: 'Orders', customers: 'Customers',
  billing: 'Billing', payments: 'Payments', promotions: 'Promotions',
  chat: 'Chat Support', delivery: 'Delivery', settings: 'Settings'
};

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
  title = 'Dashboard';
  notifOpen = false;
  notifTab: 'all' | 'payment' | 'stock' | 'message' = 'all';

  constructor(
    public theme: ThemeService,
    public sidebar: SidebarService,
    public notif: NotificationService,
    public auth: AuthService,
    router: Router
  ) {
    router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map((e: any) => {
        const seg = e.urlAfterRedirects.split('/')[1];
        return PAGE_TITLES[seg] ?? 'Dashboard';
      })
    ).subscribe(t => { this.title = t; this.notifOpen = false; });
  }

  userMenuOpen = false;
  logoutConfirm = false;

  toggleNotif() { this.notifOpen = !this.notifOpen; }
  toggleUserMenu() { this.userMenuOpen = !this.userMenuOpen; this.notifOpen = false; }
  openLogout()  { this.logoutConfirm = true; this.userMenuOpen = false; }
  cancelLogout() { this.logoutConfirm = false; }
  confirmLogout() { this.logoutConfirm = false; this.sidebar.close(); this.auth.logout(); }

  get tabItems() {
    switch (this.notifTab) {
      case 'payment': return this.notif.payments();
      case 'stock':   return this.notif.stockAlerts();
      case 'message': return this.notif.messages();
      default:        return this.notif.all();
    }
  }

  @HostListener('document:keydown.escape')
  onEsc() { this.notifOpen = false; }
}
