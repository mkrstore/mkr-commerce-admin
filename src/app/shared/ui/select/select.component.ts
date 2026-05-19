import { Component, Input, Output, EventEmitter, ContentChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SelectOption {
  value: any;
  label: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-select',
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
      <select
        class="f-select"
        [value]="value ?? ''"
        [disabled]="disabled"
        [class.error]="showError"
        (change)="onChange($event)"
      >
        <option *ngIf="placeholder" value="">{{ placeholder }}</option>
        <option
          *ngFor="let opt of options"
          [value]="opt.value"
          [disabled]="opt.disabled ?? false"
        >{{ opt.label }}</option>
        <ng-content></ng-content>
      </select>
      <div class="field-error" *ngIf="showError">
        <span class="icon icon-xs">error</span>
        {{ errorMsg || label + ' is required' }}
      </div>
      <div class="field-hint" *ngIf="hint && !showError">{{ hint }}</div>
    </div>
  `
})
export class AppSelectComponent {
  @Input() label = '';
  @Input() placeholder = 'Select…';
  @Input() options: SelectOption[] = [];
  @Input() value: any = '';
  @Input() required = false;
  @Input() touched = false;
  @Input() errorMsg = '';
  @Input() disabled = false;
  @Input() hint = '';
  @Input() optLabel = '';

  @Output() valueChange = new EventEmitter<any>();

  get showError(): boolean {
    return this.touched && this.required && (this.value === null || this.value === undefined || this.value === '');
  }

  onChange(e: Event) {
    this.valueChange.emit((e.target as HTMLSelectElement).value);
  }
}
