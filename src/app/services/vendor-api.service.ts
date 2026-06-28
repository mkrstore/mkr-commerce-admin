import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { VENDOR_ENDPOINTS } from '../core/constants/api.constants';
import { ApiResponse } from '../core/models/api.models';
import { ProductSummary } from './product-api.service';
import { InventoryTx, TxPage } from './inventory-api.service';

export interface VendorSummary {
  id:   string;
  name: string;
}

export interface Vendor {
  id:        string;
  name:      string;
  phone:     string | null;
  email:     string | null;
  address:   string | null;
  gstin:     string | null;
  notes:     string | null;
  isActive:  boolean;
  createdAt: string;
}

export interface CreateVendorPayload {
  name:    string;
  phone:   string | null;
  email:   string | null;
  address: string | null;
  gstin:   string | null;
  notes:   string | null;
}

export interface UpdateVendorPayload {
  name?:     string;
  phone?:    string | null;
  email?:    string | null;
  address?:  string | null;
  gstin?:    string | null;
  notes?:    string | null;
  isActive?: boolean;
}

@Injectable({ providedIn: 'root' })
export class VendorApiService {
  private http = inject(HttpClient);

  list(search?: string): Observable<Vendor[]> {
    let params = new HttpParams();
    if (search) params = params.set('search', search);
    return this.http
      .get<ApiResponse<Vendor[]>>(VENDOR_ENDPOINTS.BASE, { params })
      .pipe(map(r => r.data!));
  }

  summary(): Observable<VendorSummary[]> {
    return this.http
      .get<ApiResponse<VendorSummary[]>>(VENDOR_ENDPOINTS.SUMMARY)
      .pipe(map(r => r.data!));
  }

  get(id: string): Observable<Vendor> {
    return this.http
      .get<ApiResponse<Vendor>>(VENDOR_ENDPOINTS.BY_ID(id))
      .pipe(map(r => r.data!));
  }

  create(req: CreateVendorPayload): Observable<Vendor> {
    return this.http
      .post<ApiResponse<Vendor>>(VENDOR_ENDPOINTS.BASE, req)
      .pipe(map(r => r.data!));
  }

  update(id: string, req: UpdateVendorPayload): Observable<Vendor> {
    return this.http
      .patch<ApiResponse<Vendor>>(VENDOR_ENDPOINTS.BY_ID(id), req)
      .pipe(map(r => r.data!));
  }

  deactivate(id: string): Observable<void> {
    return this.http
      .delete<ApiResponse<void>>(VENDOR_ENDPOINTS.BY_ID(id))
      .pipe(map(() => undefined));
  }

  getProducts(id: string): Observable<ProductSummary[]> {
    return this.http
      .get<ApiResponse<ProductSummary[]>>(VENDOR_ENDPOINTS.PRODUCTS(id))
      .pipe(map(r => r.data!));
  }

  getTransactions(id: string, page = 0, size = 20): Observable<TxPage> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http
      .get<ApiResponse<TxPage>>(VENDOR_ENDPOINTS.TRANSACTIONS(id), { params })
      .pipe(map(r => r.data!));
  }
}
