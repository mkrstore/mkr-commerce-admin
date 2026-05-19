import { Injectable } from '@angular/core';

export interface ShopSettings {
  name:       string;
  tagline:    string;
  address:    string;
  phone:      string;
  phone2:     string;
  email:      string;
  gstin:      string;
}

const KEY = 'mkr_shop_settings';

const DEFAULTS: ShopSettings = {
  name:    'MKR Store',
  tagline: 'Home Appliances & Electronics',
  address: '',
  phone:   '',
  phone2:  '',
  email:   '',
  gstin:   '',
};

@Injectable({ providedIn: 'root' })
export class ShopSettingsService {

  get(): ShopSettings {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? { ...DEFAULTS, ...JSON.parse(raw) } : { ...DEFAULTS };
    } catch {
      return { ...DEFAULTS };
    }
  }

  save(s: ShopSettings): void {
    localStorage.setItem(KEY, JSON.stringify(s));
  }
}
