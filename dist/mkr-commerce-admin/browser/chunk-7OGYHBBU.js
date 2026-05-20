import {
  signal,
  ɵɵdefineInjectable
} from "./chunk-PEVOVQSE.js";

// src/app/services/theme.service.ts
var KEY = "mkr_theme";
var ThemeService = class _ThemeService {
  _mode = signal(localStorage.getItem(KEY) ?? "light");
  mode() {
    return this._mode();
  }
  isDark() {
    return this._mode() === "dark";
  }
  set(m) {
    this._mode.set(m);
    localStorage.setItem(KEY, m);
  }
  toggle() {
    this.set(this._mode() === "light" ? "dark" : "light");
  }
  themeClass() {
    return this._mode() === "dark" ? "dark-mode" : "";
  }
  themeLabel() {
    return this._mode() === "light" ? "\u2600\uFE0F Light" : "\u{1F319} Dark";
  }
  static \u0275fac = function ThemeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
};

export {
  ThemeService
};
//# sourceMappingURL=chunk-7OGYHBBU.js.map
