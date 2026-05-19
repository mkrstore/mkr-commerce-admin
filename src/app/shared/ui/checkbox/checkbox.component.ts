import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule],
  template: `
    <label class="check-label">
      <input
        type="checkbox"
        [checked]="checked"
        [disabled]="disabled"
        (change)="onChange($event)"
      />
      <span>{{ label }}</span>
      <span class="field-hint" *ngIf="hint" style="margin-left:2px">{{ hint }}</span>
    </label>
  `
})
export class AppCheckboxComponent {
  @Input() label = '';
  @Input() checked = false;
  @Input() disabled = false;
  @Input() hint = '';

  @Output() checkedChange = new EventEmitter<boolean>();

  onChange(e: Event) {
    this.checkedChange.emit((e.target as HTMLInputElement).checked);
  }
}
