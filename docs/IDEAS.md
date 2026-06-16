# MKR Commerce — Ideas & Pending Work

Mark done with `[x]`, remove when shipped.

---

## PWA / Mobile

- [ ] **Pull-to-refresh styling** — native browser pull-to-refresh looks bad on hold-and-drag. Fixed with `overscroll-behavior-y: contain` on body. May need custom pull-to-refresh component later.
- [ ] **Scroll-to-top on page open** — navigating between pages sometimes keeps scroll position. Fixed with `scrollPositionRestoration: 'top'` in router config.
- [ ] **Auto-rotate even when device rotation is locked** — `manifest.webmanifest` orientation is already `"any"` (correct). iOS Safari PWAs have a known WebKit limitation — they sometimes ignore the system rotation lock. No clean fix available without locking to portrait (which breaks landscape use). Monitor future iOS updates.

---

## Branch-Based Architecture  *(major feature — needs backend + frontend work)*

- [ ] **Multi-branch support** — an organisation can have multiple branches; one is the "main branch".
- [ ] **Data isolation by branch** — stocks and products belong to a specific branch. All queries must filter by the active branch.
- [ ] **Customers are global** — a customer is not tied to one branch; visible and usable across all branches.
- [ ] **Users are cross-branch visible** — a user created in Branch A can be seen and assigned in Branch B (but may have branch-specific roles/permissions).
- [ ] **Branch switcher in UI** — staff needs to be able to select/switch their active branch context.
- [ ] **Backend** — every product, stock, order entity needs a `branch_id` FK. Customer entity stays global. User entity links to a home branch but is visible globally.

---

## Products

- [ ] **Category attribute changes on existing products** — if a field is removed from a category, existing product attribute values for that field should be soft-deleted/archived (not hard-deleted). If a new MANDATORY field is added, existing products in that category should be auto-flagged as `INCOMPLETE` status and require re-editing before they can go Active.
- [ ] **Brands scoped to category** — during category setup, admin selects which brands are allowed. During product creation/editing, only those brands appear in the brand dropdown. Needs a `category_brands` join table on the backend.
- [x] **Brand dropdown bug** — "No brand" option initialises incorrectly AND selecting another brand also misbehaves. Fix: initialise `brandId = ''` and map `''` → `null` on save; ensure select component handles empty string correctly.
- [ ] **Spec field GROUPS** — attributes should be grouped under named sections (e.g. Battery → Capacity, Fast Charging, Charge Time; Processor → Name, Brand, Clock Speed). Flipkart-style. Needs:
  - Backend: add `groupName` (nullable `VARCHAR`) to `AttributeDefinition` entity + DTO + migration. Existing attrs without a group fall under a default "General" section.
  - Frontend wizard Step 3: group `attrDefs` by `groupName`, render each group as a collapsible/expandable section header with its fields underneath.
  - Category admin UI: when adding/editing an attribute, allow setting its group name.
- [ ] **Field sort order** — within each group, fields render in `sortOrder` ascending. Already coded on the frontend; verify backend returns correct `sortOrder` values.
- [ ] **Clone product** — backend already has `POST /products/:id/clone`. Add a "Clone" button on the product detail page. Useful for adding similar products without re-entering everything.
- [ ] **Bulk actions** — checkbox select on the products list → bulk status change (Activate / Deactivate / Draft), bulk category reassign. Essential once the catalog grows past 100 products.
- [ ] **Cost price + margin** — add a "Purchase Cost" field per product. Show profit margin % on the product detail page and a margin column in inventory list. Helps with buying decisions.
- [ ] **Configurable low-stock threshold** — currently `≤ 5` is hardcoded everywhere as "low stock". Add a "Reorder Level" field per product; inventory alerts and dashboard use that number instead.
- [ ] **Barcode / QR per product** — generate a barcode (EAN / Code128) for each product. Print barcode label sheets from inventory. In billing, allow typing or scanning a barcode to instantly add the product instead of searching by name.
- [ ] **CSV import / export** — export full product catalog to CSV for bulk editing in Excel; import back to update prices, stock, and status in one operation. Needed once catalog exceeds ~200 products.
- [ ] **Bundle / combo products** — group multiple products into a combo (e.g. TV + Wall Mount + HDMI Cable). When a bundle is billed, stock deducts from each component individually.

### Product Creation Flow  *(agreed — implement in this order)*

1. **Basic Info** — name, SKU (auto-generated from name), category, brand (filtered by category), short description, description
2. **Pricing & Stock** — retail price (required), wholesale price, broker price, GST %, GST included toggle, initial stock qty
3. **Spec Fields** — category-specific attributes rendered in collapsible groups (groupName), ordered by sortOrder within each group. Required fields marked with *
4. **Variants** — colour / size / storage combinations. Each variant has: Colour Name, Colour Hex, Size/Storage label, Variant Price (optional — if blank uses base retail price from Step 2), Stock Qty. Rename "price override" → "Variant Price" everywhere.
5. **Media** — file picker accumulates selections (new picks ADD to staged list, do NOT replace). Deduplicate by filename (same name = replace that one file). Show browser previews only (URL.createObjectURL) — NO upload yet. User can remove any staged file.
6. **Review & Publish** — read-only summary of everything: basic info card, pricing card, grouped spec field values, variants table, media thumbnail strip. On "Publish": (a) upload all staged media to Cloudinary in parallel, (b) PATCH product status → ACTIVE, (c) navigate to /products. If media upload fails, show error but keep product in DRAFT so user can retry.

---

## Billing

- [x] **Customer-type pricing** — billing currently always uses `priceRetail`. When a Wholesale or Broker customer is selected, auto-apply `priceWholesale` / `priceBroker` to all line items. Backend already stores all three prices; just needs to be wired into the billing confirm payload.

---

## Inventory

- [ ] Stock levels per branch (depends on Branch Architecture above).
- [ ] **Stock movement history** — every restock logs: date, quantity added, staff member, and an optional note. Currently inventory just overwrites the qty with no audit trail. Needed for accountability and loss detection.

---

## Category / Brand

- [ ] **Brand–category association** — UI to assign allowed brands to a category. Backend already needs a `category_brands` join table.

---

## Lookup Lists (Master Value Maintenance)  *(new module — needed before complex categories are built)*

**Problem:** SELECT/MULTISELECT spec field options (e.g. `["5G","4G","3G","2G"]`) are typed inline per attribute definition. No reuse — if "Network Types" is needed in both Smartphones and Feature Phones categories, you type it twice. Adding a new value requires editing every category separately.

**Solution:** A "Lookup Lists" admin page where named value lists are maintained centrally.

### Backend — new entities
- `lookup_list`: `id`, `name` (unique), `description`
- `lookup_value`: `id`, `lookup_list_id` (FK), `value`, `sort_order`

### Frontend — new "Lookup Lists" page (under Settings or its own nav item)
- List all lookup lists with value count
- Create / edit a list → add, remove, reorder values inline

### Category spec field integration (copy-on-assign)
- When `fieldType = SELECT` or `MULTISELECT`, show "Import from Lookup List" button in the attribute form
- Selecting a list **copies** its values into the field's `options` JSON at that moment
- The definition then owns its own copy — future changes to the list do NOT auto-propagate (intentional: protects existing product data from silent value removal)
- Admin can still manually edit options after importing

### Examples of lists to create
| List Name | Values |
|-----------|--------|
| Network Types | 5G, 4G LTE, 4G, 3G, 2G, VoLTE |
| Energy Star Rating | 5 Star, 4 Star, 3 Star, 2 Star, 1 Star |
| WiFi Standard | WiFi 7, WiFi 6E, WiFi 6, WiFi 5 (ac), WiFi 4 (n) |
| Bluetooth Version | 5.4, 5.3, 5.2, 5.1, 5.0, 4.2 |
| USB Type | USB-C 3.2, USB-C 2.0, Micro USB, Lightning |
| Display Type | AMOLED, Super AMOLED, OLED, IPS LCD, TFT |
| OS Platform | Android 15, Android 14, Android 13, iOS 18, iOS 17 |
| Compressor Type | Inverter, Non-Inverter |
| Refrigerator Capacity | 150L–200L, 200L–300L, 300L–400L, 400L+ |

---

*Add new items above in the relevant section. Once shipped, replace `[ ]` with `[x]` or delete the line.*
