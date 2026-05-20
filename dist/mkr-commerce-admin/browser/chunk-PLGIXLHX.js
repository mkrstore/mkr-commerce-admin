import {
  __spreadValues,
  ɵɵdefineInjectable
} from "./chunk-PEVOVQSE.js";

// src/app/services/shop-settings.service.ts
var KEY = "mkr_shop_settings";
var DEFAULTS = {
  name: "MKR Store",
  tagline: "Home Appliances & Electronics",
  address: "",
  phone: "",
  phone2: "",
  email: "",
  gstin: ""
};
var ShopSettingsService = class _ShopSettingsService {
  get() {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? __spreadValues(__spreadValues({}, DEFAULTS), JSON.parse(raw)) : __spreadValues({}, DEFAULTS);
    } catch {
      return __spreadValues({}, DEFAULTS);
    }
  }
  save(s) {
    localStorage.setItem(KEY, JSON.stringify(s));
  }
  static \u0275fac = function ShopSettingsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShopSettingsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ShopSettingsService, factory: _ShopSettingsService.\u0275fac, providedIn: "root" });
};

export {
  ShopSettingsService
};
//# sourceMappingURL=chunk-PLGIXLHX.js.map
