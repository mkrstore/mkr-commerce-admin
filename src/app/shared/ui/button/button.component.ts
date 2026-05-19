import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type BtnVariant = 'primary' | 'ghost' | 'danger' | 'success' | 'secondary' | 'outline';
export type BtnSize    = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [CommonModule],
  styles: [':host { display: contents; }'],
  template: `
    <button
      [type]="type"
      [disabled]="disabled || loading"
      [class]="classes"
      (click)="clicked.emit($event)"
    >
      <span class="btn-spinner" *ngIf="loading"></span>
      <span class="icon" [class]="'icon-' + iconSize" *ngIf="icon && !loading">{{ icon }}</span>
      <ng-content></ng-content>
    </button>
  `
})
export class AppBtnComponent {
  @Input() variant: BtnVariant = 'primary';
  @Input() size: BtnSize = 'md';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() icon = '';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  @Output() clicked = new EventEmitter<MouseEvent>();

  get iconSize(): string {
    return this.size === 'lg' ? 'md' : 'sm';
  }

  get classes(): string {
    const cls = ['btn', `btn-${this.variant}`];
    if (this.size !== 'md') cls.push(`btn-${this.size}`);
    return cls.join(' ');
  }
}
