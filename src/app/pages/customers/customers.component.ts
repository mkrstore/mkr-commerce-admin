import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, forkJoin, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { CustomerService, CustomerSummary, CustomerType, AuthMethod, CustomerPage } from '../../services/customer.service';
import { extractErrorMessage } from '../../core/models/api.models';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent implements OnInit, OnDestroy {

  // ── Filter state ──────────────────────────────────────────────────────────
  selectedType: 'All' | CustomerType = 'All';
  showPendingOnly = false;
  searchQ = '';

  readonly types: CustomerType[] = ['RETAIL', 'WHOLESALE', 'BROKER'];

  // ── Pagination ────────────────────────────────────────────────────────────
  page          = 0;
  pageSize      = 8;
  totalElements = 0;
  totalPages    = 0;

  // ── Tab counts ────────────────────────────────────────────────────────────
  typeCounts: Partial<Record<'All' | CustomerType, number>> = {};
  pendingCount: number | null = null;

  // ── Data ──────────────────────────────────────────────────────────────────
  customers: CustomerSummary[] = [];
  loading   = false;
  error     = '';

  // ── Search debounce ───────────────────────────────────────────────────────
  private searchInput$ = new Subject<string>();
  private destroy$     = new Subject<void>();

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.searchInput$.pipe(
      debounceTime(350),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(() => { this.page = 0; this.load(); });

    this.load();
    this.loadCounts();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ── Data loading ──────────────────────────────────────────────────────────

  load(): void {
    this.loading = true;
    this.error   = '';

    this.customerService.list({
      type:        this.selectedType !== 'All' ? this.selectedType : undefined,
      pendingOnly: this.showPendingOnly || undefined,
      search:      this.searchQ.trim() || undefined,
      page:        this.page,
      size:        this.pageSize,
      sortBy:      'createdAt',
      dir:         'desc',
    }).subscribe({
      next: (res: CustomerPage) => {
        this.customers     = res.content;
        this.totalElements = res.totalElements;
        this.totalPages    = res.totalPages;
        this.loading       = false;
      },
      error: (err) => {
        this.error   = extractErrorMessage(err);
        this.loading = false;
      }
    });
  }

  // ── Tab counts ────────────────────────────────────────────────────────────

  loadCounts(): void {
    const keys: ('All' | CustomerType)[] = ['All', 'RETAIL', 'WHOLESALE', 'BROKER'];
    forkJoin([
      ...keys.map(k => this.customerService.list({ type: k !== 'All' ? k : undefined, page: 0, size: 1 })),
      this.customerService.list({ pendingOnly: true, page: 0, size: 1 })
    ]).subscribe({
      next: results => {
        keys.forEach((k, i) => this.typeCounts[k] = results[i].totalElements);
        this.pendingCount = results[keys.length].totalElements;
      }
    });
  }

  // ── Filter actions ────────────────────────────────────────────────────────

  onSearch(): void    { this.searchInput$.next(this.searchQ); }
  clearSearch(): void { this.searchQ = ''; this.page = 0; this.load(); }

  setType(t: 'All' | CustomerType): void {
    this.selectedType    = t;
    this.showPendingOnly = false;
    this.page = 0;
    this.load();
  }

  togglePending(): void {
    this.showPendingOnly = !this.showPendingOnly;
    this.selectedType    = 'All';
    this.page = 0;
    this.load();
  }

  // ── Pagination ────────────────────────────────────────────────────────────

  get pageStart(): number { return this.page * this.pageSize + 1; }
  get pageEnd():   number { return Math.min((this.page + 1) * this.pageSize, this.totalElements); }

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

  goToPage(p: number | '...'): void {
    if (p === '...') return;
    this.page = (p as number) - 1;
    this.load();
  }

  prevPage(): void { if (this.page > 0)                    { this.page--; this.load(); } }
  nextPage(): void { if (this.page < this.totalPages - 1)  { this.page++; this.load(); } }

  // ── Helpers ───────────────────────────────────────────────────────────────

  authLabel(m: AuthMethod): string {
    if (m === 'GMAIL')  return 'Gmail';
    if (m === 'MOBILE') return 'Mobile';
    return 'User ID';
  }

  authIcon(m: AuthMethod): string {
    if (m === 'GMAIL')  return 'mail';
    if (m === 'MOBILE') return 'phone_iphone';
    return 'badge';
  }

  typeLabel(t: CustomerType): string {
    return t.charAt(0) + t.slice(1).toLowerCase();
  }

  avatar(name: string): string { return name.split(' ').map(w => w[0]).slice(0, 2).join(''); }
  fmt(n: number):       string { return '₹' + n.toLocaleString('en-IN'); }
  viewCustomer(id: string): void { this.router.navigate(['/customers', id]); }
}
