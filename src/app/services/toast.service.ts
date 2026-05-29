import { Injectable, signal } from '@angular/core';

export type ToastType = 'success' | 'warning' | 'error' | 'info';

export interface Toast {
  message: string;
  type: ToastType;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  readonly current = signal<Toast | null>(null);
  private timer: ReturnType<typeof setTimeout> | null = null;

  show(message: string, type: ToastType = 'info', duration = 4500) {
    if (this.timer) clearTimeout(this.timer);
    this.current.set({ message, type });
    this.timer = setTimeout(() => this.dismiss(), duration);
  }

  dismiss() {
    if (this.timer) { clearTimeout(this.timer); this.timer = null; }
    this.current.set(null);
  }
}
