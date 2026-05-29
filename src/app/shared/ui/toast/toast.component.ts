import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService, Toast } from '../../../services/toast.service';

const STYLES = `
:host { position: fixed; top: 20px; right: 20px; z-index: 99999; pointer-events: none; }

.toast {
  display: flex; align-items: flex-start; gap: 10px;
  min-width: 280px; max-width: 360px;
  padding: 13px 14px; border-radius: 10px;
  font-family: "Inter", "Roboto", system-ui, sans-serif;
  font-size: 13.5px; line-height: 1.45;
  box-shadow: 0 8px 24px rgba(0,0,0,.15);
  pointer-events: all;
  animation: slide-in .22s ease;
}
@keyframes slide-in {
  from { opacity: 0; transform: translateX(24px); }
  to   { opacity: 1; transform: translateX(0); }
}

.toast-icon { font-size: 18px !important; flex-shrink: 0; margin-top: 1px; }
.toast-msg  { flex: 1; font-weight: 500; }
.toast-close {
  flex-shrink: 0; background: none; border: none; cursor: pointer;
  font-size: 16px !important; padding: 0; margin-top: 1px; opacity: .55;
  font-family: inherit; line-height: 1;
}
.toast-close:hover { opacity: 1; }

.toast-success {
  background: #f0fdf4; border: 1px solid #86efac; border-left: 4px solid #22c55e; color: #166534;
}
.toast-success .toast-icon  { color: #22c55e; }
.toast-success .toast-close { color: #166534; }

.toast-warning {
  background: #fffbeb; border: 1px solid #fcd34d; border-left: 4px solid #f59e0b; color: #78350f;
}
.toast-warning .toast-icon  { color: #f59e0b; }
.toast-warning .toast-close { color: #78350f; }

.toast-error {
  background: #fff1f2; border: 1px solid #fca5a5; border-left: 4px solid #ef4444; color: #991b1b;
}
.toast-error .toast-icon  { color: #ef4444; }
.toast-error .toast-close { color: #991b1b; }

.toast-info {
  background: #eff6ff; border: 1px solid #93c5fd; border-left: 4px solid #3b82f6; color: #1e40af;
}
.toast-info .toast-icon  { color: #3b82f6; }
.toast-info .toast-close { color: #1e40af; }

@media (max-width: 480px) {
  :host { top: 12px; right: 12px; left: 12px; }
  .toast { min-width: unset; max-width: 100%; }
}
`;

const ICON: Record<string, string> = {
  success: 'check_circle',
  warning: 'warning',
  error:   'error',
  info:    'info',
};

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  styles: [STYLES],
  template: `
    <div *ngIf="svc.current() as t"
         class="toast"
         [class]="'toast toast-' + t.type">
      <span class="icon toast-icon">{{ icon(t) }}</span>
      <span class="toast-msg">{{ t.message }}</span>
      <button class="toast-close icon" type="button" (click)="svc.dismiss()">close</button>
    </div>
  `
})
export class ToastComponent {
  svc = inject(ToastService);
  icon(t: Toast) { return ICON[t.type] ?? 'info'; }
}
