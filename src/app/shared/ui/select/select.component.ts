import { Component, Input, Output, EventEmitter, HostListener, ElementRef, ViewChild, signal, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SelectOption {
  value: any;
  label: string;
  disabled?: boolean;
}

const STYLES = `
:host { display: block; }

.csel-wrap { position: relative; }

.csel-btn {
  width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 8px;
  background: var(--input-bg); border: 1.5px solid var(--border); border-radius: var(--radius);
  padding: 9px 11px; font-size: 13px; color: var(--t1); font-family: var(--font);
  cursor: pointer; text-align: left;
  transition: border-color .15s, box-shadow .15s, background .15s;
}
.csel-btn:hover:not(:disabled) { border-color: var(--border2); background: var(--hover); }
.csel-wrap.open .csel-btn {
  border-color: var(--blue); box-shadow: 0 0 0 3px var(--blue-soft);
}
.csel-wrap.error .csel-btn {
  border-color: var(--red) !important; box-shadow: 0 0 0 3px var(--red-bg) !important; background: var(--red-bg);
}
.csel-wrap.is-disabled .csel-btn { opacity: 0.5; cursor: not-allowed; }

.csel-val { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; text-align: left; }
.csel-ph  { color: var(--t3); }
.csel-arrow { color: var(--t3); flex-shrink: 0; transition: transform .15s; font-size: 18px !important; }
.csel-wrap.open .csel-arrow { transform: rotate(180deg); color: var(--blue); }

.csel-dropdown {
  position: fixed; z-index: 9999;
  background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-md);
  box-shadow: 0 8px 24px rgba(0,0,0,.14); overflow-y: auto; padding: 4px;
  max-width: min(400px, 90vw);
}

.csel-opt {
  display: flex; align-items: center; gap: 8px;
  padding: 9px 12px; font-size: 13px; color: var(--t1); font-family: var(--font);
  border-radius: var(--radius); cursor: pointer; transition: background .1s;
  user-select: none;
}
.csel-opt:hover:not(.csel-opt-disabled) { background: var(--hover); }
.csel-opt.csel-opt-sel {
  background: var(--blue-soft); color: var(--blue); font-weight: 600;
}
.csel-opt-disabled { opacity: 0.4; cursor: not-allowed; }

.csel-check { font-size: 15px !important; color: var(--blue); flex-shrink: 0; }
.csel-check-ph { width: 15px; flex-shrink: 0; }
`;

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule],
  styles: [STYLES],
  template: `
    <div class="field">
      <label class="field-label" *ngIf="label">
        {{ label }}
        <span class="req" *ngIf="required">*</span>
        <span class="opt" *ngIf="optLabel"> ({{ optLabel }})</span>
      </label>

      <div class="csel-wrap" [class.open]="open()" [class.is-disabled]="disabled" [class.error]="showError">
        <button class="csel-btn" type="button" #triggerBtn [disabled]="disabled" (click)="toggle()">
          <span class="csel-val" [class.csel-ph]="!selectedLabel">{{ selectedLabel || placeholder }}</span>
          <span class="icon icon-sm csel-arrow">expand_more</span>
        </button>

        <div class="csel-dropdown" *ngIf="open()" [ngStyle]="dropdownStyle">
          <div class="csel-opt"
            *ngIf="placeholder"
            [class.csel-opt-sel]="isPlaceholderSelected"
            (click)="pick('')">
            <span class="icon csel-check" *ngIf="isPlaceholderSelected">check</span>
            <span class="csel-check-ph" *ngIf="!isPlaceholderSelected"></span>
            <span style="color:var(--t3)">{{ placeholder }}</span>
          </div>
          <div class="csel-opt"
            *ngFor="let opt of options"
            [class.csel-opt-sel]="opt.value == value"
            [class.csel-opt-disabled]="opt.disabled"
            (click)="!opt.disabled && pick(opt.value)">
            <span class="icon csel-check" *ngIf="opt.value == value">check</span>
            <span class="csel-check-ph" *ngIf="opt.value != value"></span>
            {{ opt.label }}
          </div>
        </div>
      </div>

      <div class="field-error" *ngIf="showError">
        <span class="icon icon-xs">error</span>
        {{ errorMsg || label + ' is required' }}
      </div>
      <div class="field-hint" *ngIf="hint && !showError">{{ hint }}</div>
    </div>
  `
})
export class AppSelectComponent implements OnDestroy {
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
  @ViewChild('triggerBtn') triggerBtn!: ElementRef<HTMLButtonElement>;

  open = signal(false);
  dropdownStyle: Record<string, string> = {};

  private readonly onScroll = (e: Event) => {
    if (this.open() && !this.el.nativeElement.contains(e.target as Node)) this.close();
  };

  get selectedLabel(): string {
    return this.options.find(o => o.value == this.value)?.label ?? '';
  }

  get isPlaceholderSelected(): boolean {
    return this.value === '' || this.value === null || this.value === undefined;
  }

  get showError(): boolean {
    return this.touched && this.required && this.isPlaceholderSelected;
  }

  toggle() {
    if (this.disabled) return;
    if (!this.open()) {
      const rect = this.triggerBtn.nativeElement.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
      const estHeight = Math.min(240, this.options.length * 42 + 16);
      const style: Record<string, string> = {
        left:     rect.left + 'px',
        minWidth: rect.width + 'px',
      };
      if (spaceBelow < estHeight && spaceAbove > spaceBelow) {
        style['bottom']    = (window.innerHeight - rect.top + 4) + 'px';
        style['maxHeight'] = Math.min(240, spaceAbove - 8) + 'px';
      } else {
        style['top']       = (rect.bottom + 4) + 'px';
        style['maxHeight'] = Math.min(240, spaceBelow - 8) + 'px';
      }
      this.dropdownStyle = style;
      this.open.set(true);
      // Close on any scroll anywhere (capture phase catches container scrolls too)
      document.addEventListener('scroll', this.onScroll, { capture: true, passive: true });
    } else {
      this.close();
    }
  }

  private close() {
    this.open.set(false);
    document.removeEventListener('scroll', this.onScroll, { capture: true });
  }

  pick(val: any) {
    this.valueChange.emit(val);
    this.close();
  }

  @HostListener('document:click', ['$event'])
  onDocClick(e: MouseEvent) {
    if (this.open() && !this.el.nativeElement.contains(e.target as Node)) {
      this.close();
    }
  }

  @HostListener('window:resize')
  onWindowResize() { this.close(); }

  @HostListener('document:keydown.escape')
  onEsc() { this.close(); }

  ngOnDestroy() {
    document.removeEventListener('scroll', this.onScroll, { capture: true });
  }

  constructor(private el: ElementRef) {}
}
