import {
  Component, Input, Output, EventEmitter,
  ContentChildren, QueryList, TemplateRef, OnChanges,
} from '@angular/core';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { CellDirective } from './cell.directive';

export interface TableCol {
  key: string;
  header: string;
  align?: 'left' | 'center' | 'right';
  width?: string;
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

  @Output() rowClick = new EventEmitter<any>();

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
}
