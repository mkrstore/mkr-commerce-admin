import { Injectable, signal, computed } from '@angular/core';

export interface CatalogProduct {
  icon: string; name: string; sku: string;
  price: number; gstRate: number; category: string;
  stock: number;
}

const INITIAL: CatalogProduct[] = [
  { icon: '❄️', name: 'Whirlpool 1.5T AC 5-Star',     sku: 'WHP-AC-1.5T', price: 32990, gstRate: 28, category: 'AC',             stock: 18 },
  { icon: '❄️', name: 'LG 1T AC 3-Star',               sku: 'LG-AC-1T',    price: 24990, gstRate: 28, category: 'AC',             stock: 12 },
  { icon: '❄️', name: 'Voltas 2T AC 5-Star',           sku: 'VOL-AC-2T',   price: 42990, gstRate: 28, category: 'AC',             stock: 6  },
  { icon: '🧊', name: 'Samsung 253L Refrigerator',     sku: 'SAM-RF-253',  price: 22990, gstRate: 18, category: 'Fridge',         stock: 11 },
  { icon: '🧊', name: 'LG 190L Single Door Fridge',    sku: 'LG-RF-190',   price: 14490, gstRate: 18, category: 'Fridge',         stock: 8  },
  { icon: '🧊', name: 'Haier 320L Double Door Fridge', sku: 'HAI-RF-320',  price: 28990, gstRate: 18, category: 'Fridge',         stock: 4  },
  { icon: '🧺', name: 'LG 7kg Washing Machine',        sku: 'LG-WM-7KG',   price: 18490, gstRate: 18, category: 'Washing Machine',stock: 9  },
  { icon: '🧺', name: 'Samsung 6.5kg Top Load',        sku: 'SAM-WM-6.5',  price: 13990, gstRate: 18, category: 'Washing Machine',stock: 14 },
  { icon: '🧺', name: 'Whirlpool 8kg Front Load',      sku: 'WHP-WM-8F',   price: 24990, gstRate: 18, category: 'Washing Machine',stock: 5  },
  { icon: '📺', name: 'Samsung 32" Smart TV',          sku: 'SAM-TV-32',   price: 15999, gstRate: 28, category: 'TV',             stock: 1  },
  { icon: '📺', name: 'LG 43" 4K Smart TV',            sku: 'LG-TV-43',    price: 32990, gstRate: 28, category: 'TV',             stock: 7  },
  { icon: '📺', name: 'Sony 55" 4K OLED TV',           sku: 'SON-TV-55',   price: 89990, gstRate: 28, category: 'TV',             stock: 3  },
  { icon: '💨', name: 'Symphony Diet 22i Cooler',      sku: 'SYM-CLR-22',  price: 8990,  gstRate: 28, category: 'Cooler',         stock: 22 },
  { icon: '💨', name: 'Bajaj Platini PX 97 Cooler',    sku: 'BAJ-CLR-97',  price: 6990,  gstRate: 28, category: 'Cooler',         stock: 0  },
  { icon: '🌀', name: 'Orient Pedestal Fan 1200mm',    sku: 'ORI-FAN-PD',  price: 2490,  gstRate: 18, category: 'Fan',            stock: 30 },
  { icon: '🌀', name: 'Havells Ceiling Fan 1200mm',    sku: 'HAV-FAN-CL',  price: 1890,  gstRate: 18, category: 'Fan',            stock: 25 },
  { icon: '📱', name: 'Samsung Galaxy M34 5G',         sku: 'SAM-M34-5G',  price: 15999, gstRate: 18, category: 'Mobile',         stock: 34 },
  { icon: '📱', name: 'Redmi Note 13 5G',              sku: 'RED-N13-5G',  price: 13999, gstRate: 18, category: 'Mobile',         stock: 19 },
  { icon: '💻', name: 'HP Pavilion 15 Laptop',         sku: 'HP-PAV-15',   price: 54990, gstRate: 18, category: 'Laptop',         stock: 8  },
  { icon: '🔌', name: 'Philips Air Fryer 4.1L',        sku: 'PHI-AF-4L',   price: 4999,  gstRate: 18, category: 'Kitchen',        stock: 16 },
  { icon: '🔌', name: 'Bosch 20L Microwave Oven',      sku: 'BOS-MW-20',   price: 9499,  gstRate: 18, category: 'Kitchen',        stock: 10 },
  { icon: '🔌', name: 'Havells Mixer Grinder 750W',    sku: 'HAV-MG-750',  price: 1890,  gstRate: 18, category: 'Kitchen',        stock: 42 },
];

@Injectable({ providedIn: 'root' })
export class CatalogService {
  private _products = signal<CatalogProduct[]>(INITIAL);

  products    = computed(() => this._products());
  categories  = computed(() => [...new Set(this._products().map(p => p.category))]);
  lowStock    = computed(() => this._products().filter(p => p.stock > 0 && p.stock <= 5));
  outOfStock  = computed(() => this._products().filter(p => p.stock === 0));

  stockLabel(p: CatalogProduct): string {
    if (p.stock === 0)  return 'Out of stock';
    if (p.stock <= 5)   return `Low — ${p.stock} left`;
    return `${p.stock} units`;
  }

  stockClass(p: CatalogProduct): string {
    if (p.stock === 0)  return 's-out';
    if (p.stock <= 5)   return 's-low';
    return 's-ok';
  }

  reduceStock(items: { sku: string; qty: number }[]) {
    this._products.update(list =>
      list.map(p => {
        const sold = items.find(i => i.sku === p.sku);
        if (!sold) return p;
        return { ...p, stock: Math.max(0, p.stock - sold.qty) };
      })
    );
  }

  addStock(sku: string, qty: number) {
    this._products.update(list =>
      list.map(p => p.sku === sku ? { ...p, stock: p.stock + qty } : p)
    );
  }
}
