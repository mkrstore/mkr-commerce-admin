import { Injectable, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

const KEY = 'mkr_theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private _mode = signal<ThemeMode>((localStorage.getItem(KEY) as ThemeMode) ?? 'light');

  mode()   { return this._mode(); }
  isDark() { return this._mode() === 'dark'; }

  set(m: ThemeMode) {
    this._mode.set(m);
    localStorage.setItem(KEY, m);
  }

  toggle() { this.set(this._mode() === 'light' ? 'dark' : 'light'); }

  themeClass() { return this._mode() === 'dark' ? 'dark-mode' : ''; }

  themeLabel() { return this._mode() === 'light' ? '☀️ Light' : '🌙 Dark'; }
}
