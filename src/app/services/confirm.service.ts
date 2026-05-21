import { Injectable, signal } from '@angular/core';

export interface ConfirmOptions {
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: 'danger' | 'primary' | 'success' | 'warning';
}

@Injectable({ providedIn: 'root' })
export class ConfirmService {
  private _open    = signal(false);
  private _opts    = signal<ConfirmOptions>({ title: '', message: '' });
  private _resolve: ((v: boolean) => void) | null = null;

  readonly isOpen = this._open.asReadonly();
  readonly opts   = this._opts.asReadonly();

  ask(opts: ConfirmOptions): Promise<boolean> {
    this._opts.set(opts);
    this._open.set(true);
    return new Promise(resolve => { this._resolve = resolve; });
  }

  confirm() { this._resolve?.(true);  this._close(); }
  cancel()  { this._resolve?.(false); this._close(); }

  private _close() { this._open.set(false); this._resolve = null; }
}
