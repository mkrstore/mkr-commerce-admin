import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-phone-input',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    :host { display: block; }
    .phone-wrap {
      display: flex; align-items: stretch;
      border: 1.5px solid var(--border); border-radius: var(--radius);
      overflow: hidden; background: var(--input-bg);
      transition: border-color .15s, box-shadow .15s;
    }
    .phone-wrap.focused { border-color: var(--blue); box-shadow: 0 0 0 3px var(--blue-soft); }
    .phone-wrap.error { border-color: var(--red); box-shadow: 0 0 0 3px var(--red-bg); background: var(--red-bg); }
    .phone-prefix {
      padding: 9px 12px; background: var(--surface2);
      border-right: 1.5px solid var(--border);
      font-size: 13px; font-weight: 700; color: var(--t2);
      flex-shrink: 0; display: flex; align-items: center;
      user-select: none; letter-spacing: .5px;
    }
    .phone-field {
      flex: 1; border: none; background: transparent;
      padding: 9px 11px; font-size: 13px; color: var(--t1);
      font-family: var(--font, system-ui); outline: none;
    }
    .phone-field::placeholder { color: var(--t3); }
    .phone-field:disabled { opacity: .5; cursor: not-allowed; }
  `],
  template: `
    <div class="field">
      <label class="field-label" *ngIf="label">
        {{ label }}<span class="req" *ngIf="required"> *</span><span class="opt" *ngIf="optLabel"> ({{ optLabel }})</span>
      </label>
      <div class="phone-wrap" [class.error]="showError" [class.focused]="focused">
        <span class="phone-prefix">+91</span>
        <input class="phone-field" type="tel" inputmode="numeric" pattern="[0-9]*" maxlength="10"
          [value]="value ?? ''" placeholder="10-digit number" [disabled]="disabled"
          (input)="onInput($event)" (keydown)="onKeyDown($event)"
          (focus)="focused = true" (blur)="focused = false; blurred.emit()" />
      </div>
      <div class="field-error" *ngIf="showError">
        <span class="icon icon-xs">error</span> {{ errorText }}
      </div>
      <div class="field-hint" *ngIf="hint && !showError">{{ hint }}</div>
    </div>
  `
})
export class AppPhoneInputComponent {
  @Input() label = '';
  @Input() required = false;
  @Input() optLabel = '';
  @Input() value: string | null = null;
  @Input() touched = false;
  @Input() externalError: string | null = null;
  @Input() disabled = false;
  @Input() hint = '';

  @Output() valueChange = new EventEmitter<string>();
  @Output() blurred     = new EventEmitter<void>();

  dirty   = false;
  focused = false;

  get showError(): boolean {
    if (!this.touched && !this.dirty) return false;
    if (this.externalError) return true;
    if (!this.required) return false;
    const v = this.value;
    return v === null || v === undefined || String(v).trim() === '';
  }

  get errorText(): string {
    if (this.externalError) return this.externalError;
    return (this.label || 'Phone number') + ' is required';
  }

  onInput(e: Event) {
    this.dirty = true;
    const input = e.target as HTMLInputElement;
    // Strip all non-digits (handles paste too)
    const digits = input.value.replace(/\D/g, '').slice(0, 10);
    if (digits !== input.value) {
      input.value = digits;
    }
    this.valueChange.emit(digits);
  }

  onKeyDown(e: KeyboardEvent) {
    // Allow: Backspace, Delete, Tab, Escape, Enter, arrow keys, home/end
    const allowedKeys = ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter',
                         'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
                         'Home', 'End'];
    if (allowedKeys.includes(e.key)) return;
    // Allow Ctrl/Cmd+A, C, V, X
    if ((e.ctrlKey || e.metaKey) && ['a', 'c', 'v', 'x'].includes(e.key.toLowerCase())) return;
    // Block anything that isn't a digit
    if (!/^\d$/.test(e.key)) {
      e.preventDefault();
    }
  }
}
