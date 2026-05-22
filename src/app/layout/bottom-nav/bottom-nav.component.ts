import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../../services/sidebar.service';
import { ICONS } from '../../core/constants/icons.constants';

@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './bottom-nav.component.html',
  styleUrl: './bottom-nav.component.scss'
})
export class BottomNavComponent {
  constructor(public sidebar: SidebarService) {}

  items = [
    { icon: ICONS.dashboard, label: 'Dashboard', route: '/dashboard' },
    { icon: ICONS.orders,    label: 'Orders',    route: '/orders',    badge: '12' },
    { icon: ICONS.products,  label: 'Products',  route: '/products' },
    { icon: ICONS.billing,   label: 'Billing',   route: '/billing' },
    { icon: ICONS.settings,  label: 'Settings',  route: '/settings' },
  ];

  readonly menuIcon = ICONS.menu;
}
