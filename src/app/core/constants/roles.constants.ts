import { UserRole } from '../../services/auth.service';

/**
 * SINGLE SOURCE OF TRUTH for role metadata.
 *
 * Every component that needs role names, colors, icons, or descriptions
 * imports from here. Never hardcode these in a component.
 *
 * When adding a new role:
 *   1. Add to UserRole type in auth.service.ts
 *   2. Add entry here
 *   3. Add to sidebar nav in sidebar.component.ts
 *   That's it — nothing else needs to change.
 */
export interface RoleMeta {
  name:        string;   // Display name
  icon:        string;   // Emoji icon
  color:       string;   // Brand color (hex)
  description: string;   // Short description shown in role cards
  department:  string;   // Default department for new users of this role
}

export const ROLE_META: Record<UserRole, RoleMeta> = {
  SUPER_ADMIN: {
    name:        'Super Admin',
    icon:        'workspace_premium',
    color:       '#7C3AED',
    description: 'Full control — all modules, user management',
    department:  'Management',
  },
  ADMIN: {
    name:        'Admin',
    icon:        'admin_panel_settings',
    color:       '#2874F0',
    description: 'Manage staff, products, orders, settings',
    department:  'Management',
  },
  SALES: {
    name:        'Sales Executive',
    icon:        'receipt_long',
    color:       '#16A34A',
    description: 'Billing, customers, orders, payments',
    department:  'Sales',
  },
  INVENTORY: {
    name:        'Inventory Manager',
    icon:        'inventory_2',
    color:       '#D97706',
    description: 'Products, stock levels, inventory alerts',
    department:  'Warehouse',
  },
  SUPPORT: {
    name:        'Support Staff',
    icon:        'support_agent',
    color:       '#0891B2',
    description: 'Customer queries, order tracking, chat',
    department:  'Customer Care',
  },
};

/** Helper — get color for a role (safe, returns grey for unknown). */
export function roleColor(role: UserRole): string {
  return ROLE_META[role]?.color ?? '#6B7280';
}

/** Helper — get display name for a role. */
export function roleName(role: UserRole): string {
  return ROLE_META[role]?.name ?? role;
}

/** Ordered list of roles for display (login page cards, user management, etc.). */
export const ROLE_ORDER: UserRole[] = [
  'SUPER_ADMIN',
  'ADMIN',
  'SALES',
  'INVENTORY',
  'SUPPORT',
];
