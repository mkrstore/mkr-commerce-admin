import { Component, computed, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../../services/sidebar.service';
import { AuthService, UserRole } from '../../services/auth.service';
import { ICONS } from '../../core/constants/icons.constants';

interface NavItem {
  icon: string;
  label: string;
  route?: string;
  badge?: string;
  badgeClass?: string;
  roles?: UserRole[];
  children?: NavItem[];
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

const ALL_NAV_GROUPS: NavGroup[] = [
  {
    label: 'Overview',
    items: [
      { icon: ICONS.dashboard, label: 'Dashboard', route: '/dashboard' },
      { icon: ICONS.analytics, label: 'Analytics', route: '/analytics', roles: ['SUPER_ADMIN', 'ADMIN'] },
    ]
  },
  {
    label: 'Catalogue',
    items: [
      { icon: ICONS.products, label: 'Products', route: '/products', roles: ['SUPER_ADMIN', 'ADMIN', 'INVENTORY'] },
      {
        icon: 'build',
        label: 'Maintenance',
        roles: ['SUPER_ADMIN', 'ADMIN', 'INVENTORY'],
        children: [
          { icon: ICONS.brands,      label: 'Brands',       route: '/brands',       roles: ['SUPER_ADMIN', 'ADMIN', 'INVENTORY'] },
          { icon: ICONS.categories,  label: 'Categories',   route: '/categories',   roles: ['SUPER_ADMIN', 'ADMIN', 'INVENTORY'] },
          { icon: ICONS.lookupLists, label: 'Lookup Lists', route: '/lookup-lists', roles: ['SUPER_ADMIN', 'ADMIN'] },
          { icon: ICONS.promotions,  label: 'Promotions',   route: '/promotions',   roles: ['SUPER_ADMIN', 'ADMIN'] },
          { icon: ICONS.settings,    label: 'Settings',     route: '/settings',     roles: ['SUPER_ADMIN', 'ADMIN'] },
        ]
      },
      { icon: ICONS.inventory, label: 'Inventory', route: '/inventory', roles: ['SUPER_ADMIN', 'ADMIN', 'INVENTORY'], badge: '3', badgeClass: 'red' },
    ]
  },
  {
    label: 'Commerce',
    items: [
      { icon: ICONS.billing,   label: 'Billing',    route: '/billing',   roles: ['SUPER_ADMIN', 'ADMIN', 'SALES'] },
      { icon: ICONS.orders,    label: 'Orders',     route: '/orders',    badge: '12', badgeClass: 'red' },
      { icon: ICONS.customers, label: 'Customers',  route: '/customers', roles: ['SUPER_ADMIN', 'ADMIN', 'SALES', 'SUPPORT'] },
      { icon: ICONS.payments,  label: 'Payments',   route: '/payments',  roles: ['SUPER_ADMIN', 'ADMIN', 'SALES'] },
    ]
  },
  {
    label: 'Support',
    items: [
      { icon: ICONS.chat,     label: 'Chat Support', route: '/chat',     roles: ['SUPER_ADMIN', 'ADMIN', 'SUPPORT'], badge: '5', badgeClass: 'red' },
      { icon: ICONS.delivery, label: 'Delivery',     route: '/delivery', roles: ['SUPER_ADMIN', 'ADMIN', 'SUPPORT'] },
    ]
  },
  {
    label: 'System',
    items: [
      { icon: ICONS.staff, label: 'Staff', route: '/users', roles: ['SUPER_ADMIN', 'ADMIN', 'SALES'] },
    ]
  }
];

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit, OnDestroy {

  filteredNavGroups = computed(() => {
    const user = this.auth.currentUser();
    if (!user) return [];
    return ALL_NAV_GROUPS
      .map(group => ({
        ...group,
        items: group.items
          .filter(item => !item.roles || item.roles.includes(user.role))
          .map(item => ({ ...item, children: item.children?.filter(c => !c.roles || c.roles.includes(user.role)) }))
          .filter(item => !item.children || item.children.length > 0)
      }))
      .filter(group => group.items.length > 0);
  });

  // ── Submenu state ─────────────────────────────────────────────────────────
  activeSubmenu: NavItem | null = null;
  submenuLeft = 230;
  private closeTimer: ReturnType<typeof setTimeout> | null = null;

  isSubmenuActive(item: NavItem): boolean {
    return item.children?.some(c => c.route && this.router.isActive(c.route, false)) ?? false;
  }

  private get isMobile(): boolean { return window.innerWidth <= 768; }

  openSubmenu(item: NavItem, el: HTMLElement) {
    if (this.isMobile) return;
    if (this.closeTimer) clearTimeout(this.closeTimer);
    this.activeSubmenu = item;
    this.submenuLeft = window.innerWidth <= 1024 ? 64 : 230;
  }

  toggleSubmenu(item: NavItem, el: HTMLElement) {
    if (this.activeSubmenu === item) { this.closeSubmenu(); } else {
      this.activeSubmenu = item;
      if (!this.isMobile) this.submenuLeft = window.innerWidth <= 1024 ? 64 : 230;
    }
  }

  closeSubmenu() { this.activeSubmenu = null; }

  scheduleClose() {
    if (this.isMobile) return;
    this.closeTimer = setTimeout(() => this.closeSubmenu(), 160);
  }

  cancelClose() { if (this.closeTimer) clearTimeout(this.closeTimer); }

  @HostListener('document:click', ['$event'])
  onDocumentClick(e: MouseEvent) {
    const t = e.target as HTMLElement;
    if (this.activeSubmenu && !t.closest('.adm-item-has-sub') && !t.closest('.adm-subsidebar')) {
      this.closeSubmenu();
    }
  }

  // ── General ───────────────────────────────────────────────────────────────
  constructor(
    public sidebar: SidebarService,
    public auth: AuthService,
    private router: Router,
  ) {}

  ngOnInit()    {}
  ngOnDestroy() { if (this.closeTimer) clearTimeout(this.closeTimer); }

  onNavClick() { this.sidebar.close(); }
}
