import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  styles: [':host { display: block; }'],
  template: `
    <div class="field">
      <label class="field-label" *ngIf="label">
        {{ label }}
        <span class="req" *ngIf="required">*</span>
        <span class="opt" *ngIf="optLabel"> ({{ optLabel }})</span>
      </label>
      <input
        class="f-input"
        [type]="type"
        [value]="value ?? ''"
        [placeholder]="placeholder"
        [disabled]="disabled"
        [class.error]="showError"
        (input)="onInput($event)"
        (blur)="blurred.emit()"
        (wheel)="onWheel($event)"
        (keydown)="onKeyDown($event)"
      />
      <div class="field-error" *ngIf="showError">
        <span class="icon icon-xs">error</span>
        {{ errorMsg || label + ' is required' }}
      </div>
      <div class="field-hint" *ngIf="hint && !showError">{{ hint }}</div>
    </div>
  `
})
export class AppInputComponent {
  @Input() label = '';
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() required = false;
  @Input() value: any = '';
  @Input() touched = false;
  @Input() errorMsg = '';
  @Input() disabled = false;
  @Input() hint = '';
  @Input() optLabel = '';
  @Input() minVal: number | null = null;

  @Output() valueChange = new EventEmitter<any>();
  @Output() blurred     = new EventEmitter<void>();

  get showError(): boolean {
    if (!this.required) return false;
    if (!this.touched && !this.dirty) return false;
    const v = this.value;
    if (v === null || v === undefined || String(v).trim() === '') return true;
    if (this.type === 'number' && this.minVal !== null) return Number(v) < this.minVal;
    return false;
  }

  dirty = false;

  onInput(e: Event) {
    this.dirty = true;
    const raw = (e.target as HTMLInputElement).value;
    this.valueChange.emit(this.type === 'number' ? (raw === '' ? null : Number(raw)) : raw);
  }

  onWheel(e: WheelEvent) {
    if (this.type === 'number') (e.target as HTMLInputElement).blur();
  }

  onKeyDown(e: KeyboardEvent) {
    if (this.type === 'number' && ['e', 'E', '+', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
      e.preventDefault();
    }
  }
}
