import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmService } from '../../../services/confirm.service';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container *ngIf="confirm.isOpen()">
      <div class="overlay" (click)="confirm.cancel()"></div>
      <div class="modal modal-sm" (click)="$event.stopPropagation()">
        <div class="confirm-body">
          <div class="confirm-icon" [ngClass]="iconClass">
            <span class="icon icon-lg">{{ icon }}</span>
          </div>
          <h3>{{ confirm.opts().title }}</h3>
          <p>{{ confirm.opts().message }}</p>
        </div>
        <div class="modal-ft">
          <button class="btn btn-ghost" (click)="confirm.cancel()">
            {{ confirm.opts().cancelLabel ?? 'Cancel' }}
          </button>
          <button class="btn" [ngClass]="btnClass" (click)="confirm.confirm()">
            {{ confirm.opts().confirmLabel ?? 'Confirm' }}
          </button>
        </div>
      </div>
    </ng-container>
  `
})
export class ConfirmDialogComponent {
  constructor(public confirm: ConfirmService) {}

  get icon(): string {
    const v = this.confirm.opts().variant;
    const map: Record<string, string> = {
      danger: 'delete', success: 'check_circle',
      warning: 'warning', primary: 'help_outline'
    };
    return map[v ?? 'primary'] ?? 'help_outline';
  }

  get iconClass(): string {
    return this.confirm.opts().variant ?? 'primary';
  }

  get btnClass(): string {
    return `btn-${this.confirm.opts().variant ?? 'primary'}`;
  }
}
