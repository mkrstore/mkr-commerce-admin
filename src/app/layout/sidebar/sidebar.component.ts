import { Component, computed } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../../services/sidebar.service';
import { AuthService, UserRole } from '../../services/auth.service';
import { ICONS } from '../../core/constants/icons.constants';

interface NavItem {
  icon: string;
  label: string;
  route: string;
  badge?: string;
  badgeClass?: string;
  roles?: UserRole[];   // undefined = visible to all roles
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

const ALL_NAV_GROUPS: NavGroup[] = [
  {
    label: 'Overview',
    items: [
      { icon: ICONS.dashboard,  label: 'Dashboard', route: '/dashboard' },
      { icon: ICONS.analytics,  label: 'Analytics', route: '/analytics', roles: ['SUPER_ADMIN', 'ADMIN'] },
    ]
  },
  {
    label: 'Catalogue',
    items: [
      { icon: ICONS.products,   label: 'Products',   route: '/products',   roles: ['SUPER_ADMIN', 'ADMIN', 'INVENTORY'] },
      { icon: ICONS.categories, label: 'Categories', route: '/categories', roles: ['SUPER_ADMIN', 'ADMIN', 'INVENTORY'] },
      { icon: ICONS.brands,     label: 'Brands',     route: '/brands',     roles: ['SUPER_ADMIN', 'ADMIN', 'INVENTORY'] },
      { icon: ICONS.inventory,  label: 'Inventory',  route: '/inventory',  roles: ['SUPER_ADMIN', 'ADMIN', 'INVENTORY'], badge: '3', badgeClass: 'red' },
    ]
  },
  {
    label: 'Commerce',
    items: [
      { icon: ICONS.billing,    label: 'Billing',    route: '/billing',    roles: ['SUPER_ADMIN', 'ADMIN', 'SALES'] },
      { icon: ICONS.orders,     label: 'Orders',     route: '/orders',     badge: '12', badgeClass: 'red' },
      { icon: ICONS.customers,  label: 'Customers',  route: '/customers',  roles: ['SUPER_ADMIN', 'ADMIN', 'SALES', 'SUPPORT'] },
      { icon: ICONS.payments,   label: 'Payments',   route: '/payments',   roles: ['SUPER_ADMIN', 'ADMIN', 'SALES'] },
      { icon: ICONS.promotions, label: 'Promotions', route: '/promotions', roles: ['SUPER_ADMIN', 'ADMIN'] },
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
      { icon: ICONS.staff,    label: 'Staff',    route: '/users',    roles: ['SUPER_ADMIN', 'ADMIN', 'SALES'] },
      { icon: ICONS.settings, label: 'Settings', route: '/settings', roles: ['SUPER_ADMIN', 'ADMIN'] },
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
export class SidebarComponent {

  filteredNavGroups = computed(() => {
    const user = this.auth.currentUser();
    if (!user) return [];

    return ALL_NAV_GROUPS
      .map(group => ({
        ...group,
        items: group.items.filter(item =>
          !item.roles || item.roles.includes(user.role)
        )
      }))
      .filter(group => group.items.length > 0);
  });

  showLogoutConfirm = false;

  constructor(public sidebar: SidebarService, public auth: AuthService) {}

  onNavClick() {
    this.sidebar.close();
  }

  logout() {
    this.showLogoutConfirm = true;
  }

  confirmLogout() {
    this.showLogoutConfirm = false;
    this.sidebar.close();
    this.auth.logout();
  }

  cancelLogout() {
    this.showLogoutConfirm = false;
  }
}
