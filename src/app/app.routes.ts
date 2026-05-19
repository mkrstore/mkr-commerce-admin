import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  // ── Public ────────────────────────────────────────────────────────────────
  { path: 'login',           loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
  { path: 'reset-password',  loadComponent: () => import('./pages/reset-password/reset-password.component').then(m => m.ResetPasswordComponent) },
  { path: 'set-password',    loadComponent: () => import('./pages/set-password/set-password.component').then(m => m.SetPasswordComponent) },
  { path: 'oauth2/callback', loadComponent: () => import('./pages/oauth2-callback/oauth2-callback.component').then(m => m.OAuth2CallbackComponent) },

  // ── Protected ─────────────────────────────────────────────────────────────
  { path: 'dashboard',   canActivate: [authGuard], loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent) },
  { path: 'analytics',   canActivate: [authGuard], loadComponent: () => import('./pages/analytics/analytics.component').then(m => m.AnalyticsComponent) },
  { path: 'products',     canActivate: [authGuard], loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent) },
  { path: 'products/new', canActivate: [authGuard], loadComponent: () => import('./pages/product-new/product-new.component').then(m => m.ProductNewComponent) },
  { path: 'products/:id', canActivate: [authGuard], loadComponent: () => import('./pages/product-detail/product-detail.component').then(m => m.ProductDetailComponent) },
  { path: 'categories',  canActivate: [authGuard], loadComponent: () => import('./pages/categories/categories.component').then(m => m.CategoriesComponent) },
  { path: 'brands',      canActivate: [authGuard], loadComponent: () => import('./pages/brands/brands.component').then(m => m.BrandsComponent) },
  { path: 'inventory',   canActivate: [authGuard], loadComponent: () => import('./pages/inventory/inventory.component').then(m => m.InventoryComponent) },
  { path: 'orders',      canActivate: [authGuard], loadComponent: () => import('./pages/orders/orders.component').then(m => m.OrdersComponent) },
  { path: 'orders/:id',  canActivate: [authGuard], loadComponent: () => import('./pages/order-detail/order-detail.component').then(m => m.OrderDetailComponent) },
  { path: 'customers',      canActivate: [authGuard], loadComponent: () => import('./pages/customers/customers.component').then(m => m.CustomersComponent) },
  { path: 'customers/:id',  canActivate: [authGuard], loadComponent: () => import('./pages/customer-detail/customer-detail.component').then(m => m.CustomerDetailComponent) },
  { path: 'billing',     canActivate: [authGuard], loadComponent: () => import('./pages/billing/billing.component').then(m => m.BillingComponent) },
  { path: 'payments',    canActivate: [authGuard], loadComponent: () => import('./pages/payments/payments.component').then(m => m.PaymentsComponent) },
  { path: 'promotions',  canActivate: [authGuard], loadComponent: () => import('./pages/promotions/promotions.component').then(m => m.PromotionsComponent) },
  { path: 'chat',        canActivate: [authGuard], loadComponent: () => import('./pages/chat/chat.component').then(m => m.ChatComponent) },
  { path: 'delivery',    canActivate: [authGuard], loadComponent: () => import('./pages/delivery/delivery.component').then(m => m.DeliveryComponent) },
  { path: 'users',      canActivate: [authGuard], loadComponent: () => import('./pages/users/users.component').then(m => m.UsersComponent) },
  { path: 'users/:id',  canActivate: [authGuard], loadComponent: () => import('./pages/user-detail/user-detail.component').then(m => m.UserDetailComponent) },
  { path: 'settings',    canActivate: [authGuard], loadComponent: () => import('./pages/settings/settings.component').then(m => m.SettingsComponent) },

  { path: '**', redirectTo: 'dashboard' }
];
