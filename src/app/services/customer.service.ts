import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { CUSTOMER_ENDPOINTS } from '../core/constants/api.constants';
import { ApiResponse } from '../core/models/api.models';

// ── Domain types (mirror backend DTOs) ───────────────────────────────────────

export type AuthMethod      = 'GMAIL' | 'MOBILE' | 'USER_ID';
export type CustomerType    = 'RETAIL' | 'WHOLESALE' | 'BROKER';
export type KhataEntryType  = 'AUTO_ORDER' | 'MANUAL_DEBIT' | 'MANUAL_CREDIT';
export type OrderStatus     = 'PENDING' | 'CONFIRMED' | 'PROCESSING' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED' | 'RETURNED';
export type OrderPayStatus  = 'PENDING' | 'PAID' | 'FAILED' | 'REFUNDED';

export interface CustomerOrder {
  id:            string;
  orderId:       string;
  status:        OrderStatus;
  paymentMethod: string;
  paymentStatus: OrderPayStatus;
  totalAmount:   number;
  itemsSummary:  string;
  createdAt:     string;
}

export interface KhataEntry {
  id:            string;
  entryType:     KhataEntryType;
  description:   string;
  debit:         number;
  credit:        number;
  balance:       number;
  orderId:       string | null;
  paymentMethod: string | null;
  notes:         string | null;
  createdAt:     string;
}

export interface KhataPage {
  entries:        KhataEntry[];
  currentBalance: number;
}

export interface AddKhataEntryRequest {
  entryType:   'MANUAL_DEBIT' | 'MANUAL_CREDIT';
  description: string;
  amount:      number;
  notes?:      string;
}

export interface CollectPaymentRequest {
  amount:        number;
  paymentMethod: string;
  note?:         string;
}

export interface CustomerSummary {
  id:            string;
  customerId:    string;
  name:          string;
  email:         string | null;
  phone:         string | null;
  authMethod:    AuthMethod;
  type:          CustomerType;
  isActive:      boolean;
  createdAt:     string;
  lastOrderAt:   string | null;
  totalOrders:   number;
  totalSpent:    number;
  pendingAmount: number;
}

export interface CustomerDetail extends CustomerSummary {
  firstName:         string;
  lastName:          string;
  updatedAt:         string;
  addressStreet:     string | null;
  addressCity:       string | null;
  addressState:      string | null;
  addressPostalCode: string | null;
  addressCountry:    string | null;
}

export interface CustomerPage {
  content:       CustomerSummary[];
  totalElements: number;
  totalPages:    number;
  number:        number;
  size:          number;
}

export interface CustomerListParams {
  type?:        CustomerType;
  pendingOnly?: boolean;
  search?:      string;
  page?:        number;
  size?:        number;
  sortBy?:      string;
  dir?:         'asc' | 'desc';
}

// ── Service ───────────────────────────────────────────────────────────────────

@Injectable({ providedIn: 'root' })
export class CustomerService {
  private http = inject(HttpClient);
  private EP   = CUSTOMER_ENDPOINTS;

  list(params: CustomerListParams = {}): Observable<CustomerPage> {
    let p = new HttpParams();
    if (params.type)                   p = p.set('type',        params.type);
    if (params.pendingOnly)            p = p.set('pendingOnly', 'true');
    if (params.search?.trim())         p = p.set('search',      params.search.trim());
    if (params.page   != null)         p = p.set('page',        params.page.toString());
    if (params.size   != null)         p = p.set('size',        params.size.toString());
    if (params.sortBy)                 p = p.set('sortBy',      params.sortBy);
    if (params.dir)                    p = p.set('dir',         params.dir);

    return this.http
      .get<ApiResponse<CustomerPage>>(this.EP.BASE, { params: p })
      .pipe(map(r => r.data!));
  }

  getById(id: string): Observable<CustomerDetail> {
    return this.http
      .get<ApiResponse<CustomerDetail>>(this.EP.BY_ID(id))
      .pipe(map(r => r.data!));
  }

  updateType(id: string, type: CustomerType): Observable<CustomerDetail> {
    return this.http
      .patch<ApiResponse<CustomerDetail>>(this.EP.TYPE(id), { type })
      .pipe(map(r => r.data!));
  }

  updateStatus(id: string, active: boolean): Observable<CustomerDetail> {
    return this.http
      .patch<ApiResponse<CustomerDetail>>(this.EP.STATUS(id), { active })
      .pipe(map(r => r.data!));
  }

  getKhata(customerId: string): Observable<KhataPage> {
    return this.http
      .get<ApiResponse<KhataPage>>(this.EP.KHATA(customerId))
      .pipe(map(r => r.data!));
  }

  addKhataEntry(customerId: string, req: AddKhataEntryRequest): Observable<KhataEntry> {
    return this.http
      .post<ApiResponse<KhataEntry>>(this.EP.KHATA(customerId), req)
      .pipe(map(r => r.data!));
  }

  collectPayment(customerId: string, req: CollectPaymentRequest): Observable<KhataEntry> {
    return this.http
      .post<ApiResponse<KhataEntry>>(this.EP.KHATA_COLLECT(customerId), req)
      .pipe(map(r => r.data!));
  }

  getOrders(customerId: string): Observable<CustomerOrder[]> {
    return this.http
      .get<ApiResponse<CustomerOrder[]>>(this.EP.ORDERS(customerId))
      .pipe(map(r => r.data!));
  }
}
