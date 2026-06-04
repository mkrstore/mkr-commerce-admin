import {
  Component, Input, Output, EventEmitter,
  ContentChildren, QueryList, TemplateRef, OnChanges,
} from '@angular/core';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { CellDirective } from './cell.directive';

export type MobileCardRole = 'title' | 'action' | 'hide';

export interface TableCol {
  key: string;
  header: string;
  align?: 'left' | 'center' | 'right';
  width?: string;
  mobileCard?: MobileCardRole;
}

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule, NgTemplateOutlet, CellDirective],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss',
})
export class DataTableComponent implements OnChanges {
  @Input() columns: TableCol[] = [];
  @Input() rows: any[] = [];
  @Input() loading = false;
  @Input() loadingRows = 5;
  @Input() emptyIcon = 'table_chart';
  @Input() emptyTitle = 'No records';
  @Input() emptySubtitle = '';
  @Input() clickable = false;
  @Input() page = 0;
  @Input() totalPages = 0;

  @Output() rowClick   = new EventEmitter<any>();
  @Output() pageChange = new EventEmitter<number>();

  @ContentChildren(CellDirective) cellDefs!: QueryList<CellDirective>;

  skeletonRows: null[] = [];

  ngOnChanges() {
    this.skeletonRows = Array(this.loadingRows).fill(null);
  }

  getCell(key: string): TemplateRef<any> | null {
    return this.cellDefs?.find(c => c.key === key)?.tpl ?? null;
  }

  ctx(row: any, index: number) {
    return { $implicit: row, row, index };
  }

  thStyle(col: TableCol): Record<string, string> {
    const s: Record<string, string> = {};
    if (col.width) s['width'] = col.width;
    if (col.align && col.align !== 'left') s['text-align'] = col.align;
    return s;
  }

  tdStyle(col: TableCol): Record<string, string> {
    if (col.align && col.align !== 'left') return { 'text-align': col.align };
    return {};
  }

  get titleCol():  TableCol | undefined { return this.columns.find(c => c.mobileCard === 'title'); }
  get actionCol(): TableCol | undefined { return this.columns.find(c => c.mobileCard === 'action'); }
  get bodyMobileCols(): TableCol[] { return this.columns.filter(c => !c.mobileCard || c.mobileCard === 'row' as any); }

  get pageNumbers(): (number | '...')[] {
    const total = this.totalPages;
    const cur   = this.page + 1;
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
    const pages: (number | '...')[] = [1];
    if (cur > 3) pages.push('...');
    for (let i = Math.max(2, cur - 1); i <= Math.min(total - 1, cur + 1); i++) pages.push(i);
    if (cur < total - 2) pages.push('...');
    pages.push(total);
    return pages;
  }

  goToPage(p: number | '...') {
    if (p === '...') return;
    this.pageChange.emit((p as number) - 1);
  }

  prev() { if (this.page > 0) this.pageChange.emit(this.page - 1); }
  next() { if (this.page < this.totalPages - 1) this.pageChange.emit(this.page + 1); }
}
