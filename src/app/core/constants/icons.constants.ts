/**
 * Central icon registry — all Material Symbols Outlined names used in the app.
 * Import ICONS wherever you need an icon name; never hardcode strings directly.
 *
 * Usage in HTML:  <span class="icon">{{ ICONS.dashboard }}</span>
 * Usage in TS:    { icon: ICONS.dashboard }
 */
export const ICONS = {

  // ── Navigation ─────────────────────────────────────────────────────────────
  dashboard:      'dashboard',
  analytics:      'bar_chart',
  products:       'inventory_2',
  categories:     'category',
  brands:         'sell',
  inventory:      'warehouse',
  billing:        'receipt_long',
  orders:         'shopping_cart',
  customers:      'group',
  payments:       'payments',
  promotions:     'local_offer',
  chat:           'support_agent',
  delivery:       'local_shipping',
  staff:          'badge',
  settings:       'settings',

  // ── Actions ─────────────────────────────────────────────────────────────────
  add:            'add',
  edit:           'edit',
  delete:         'delete',
  remove:         'remove',
  save:           'save',
  search:         'search',
  filter:         'filter_list',
  sort:           'sort',
  close:          'close',
  clear:          'close',
  more:           'more_vert',
  moreH:         'more_horiz',
  refresh:        'refresh',
  download:       'download',
  upload:         'upload',
  copy:           'content_copy',
  share:          'share',
  print:          'print',
  send:           'send',
  preview:        'visibility',
  hide:           'visibility_off',
  link:           'link',
  open:           'open_in_new',
  back:           'arrow_back',
  forward:        'arrow_forward',
  expand:         'open_in_full',
  collapse:       'close_fullscreen',

  // ── Chevrons / Arrows ───────────────────────────────────────────────────────
  chevronDown:    'expand_more',
  chevronUp:      'expand_less',
  chevronRight:   'chevron_right',
  chevronLeft:    'chevron_left',
  arrowRight:     'arrow_forward_ios',
  arrowLeft:      'arrow_back_ios',
  arrowDown:      'keyboard_arrow_down',
  arrowUp:        'keyboard_arrow_up',

  // ── Status / Feedback ───────────────────────────────────────────────────────
  success:        'check_circle',
  check:          'check',
  warning:        'warning',
  error:          'error',
  info:           'info',
  help:           'help',
  pending:        'pending',
  clock:          'schedule',
  cancelled:      'cancel',

  // ── Auth / User ─────────────────────────────────────────────────────────────
  login:          'login',
  logout:         'logout',
  user:           'person',
  users:          'group',
  userAdd:        'person_add',
  role:           'admin_panel_settings',
  lock:           'lock',
  key:            'key',
  email:          'mail',
  phone:          'phone',

  // ── Commerce ─────────────────────────────────────────────────────────────────
  cart:           'shopping_cart',
  bag:            'shopping_bag',
  product:        'inventory_2',
  category:       'category',
  tag:            'sell',
  discount:       'local_offer',
  coupon:         'confirmation_number',
  payment:        'payment',
  receipt:        'receipt',
  invoice:        'receipt_long',
  wallet:         'account_balance_wallet',
  bank:           'account_balance',
  money:          'attach_money',
  star:           'star',
  starOutline:    'star_border',
  heart:          'favorite',
  heartOutline:   'favorite_border',

  // ── Layout / UI ─────────────────────────────────────────────────────────────
  menu:           'menu',
  menuOpen:       'menu_open',
  darkMode:       'dark_mode',
  lightMode:      'light_mode',
  notifications:  'notifications',
  notificationOff:'notifications_off',
  image:          'image',
  camera:         'photo_camera',
  attach:         'attach_file',
  calendar:       'calendar_today',
  location:       'location_on',
  map:            'map',
  chart:          'bar_chart',
  list:           'list',
  grid:           'grid_view',
  table:          'table_rows',

} as const;

export type IconName = (typeof ICONS)[keyof typeof ICONS];
