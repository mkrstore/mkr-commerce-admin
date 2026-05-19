import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-textarea',
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
      <textarea
        class="f-textarea"
        [rows]="rows"
        [placeholder]="placeholder"
        [disabled]="disabled"
        [class.error]="showError"
        (input)="onInput($event)"
      >{{ value }}</textarea>
      <div class="field-error" *ngIf="showError">
        <span class="icon icon-xs">error</span>
        {{ errorMsg || label + ' is required' }}
      </div>
      <div class="field-hint" *ngIf="hint && !showError">{{ hint }}</div>
    </div>
  `
})
export class AppTextareaComponent {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() rows = 3;
  @Input() value = '';
  @Input() required = false;
  @Input() touched = false;
  @Input() errorMsg = '';
  @Input() disabled = false;
  @Input() hint = '';
  @Input() optLabel = '';

  @Output() valueChange = new EventEmitter<string>();

  get showError(): boolean {
    return this.touched && this.required && !this.value?.trim();
  }

  onInput(e: Event) {
    this.valueChange.emit((e.target as HTMLTextAreaElement).value);
  }
}
