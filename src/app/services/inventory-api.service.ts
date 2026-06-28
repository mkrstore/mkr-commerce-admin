import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { INVENTORY_ENDPOINTS } from '../core/constants/api.constants';
import { ApiResponse } from '../core/models/api.models';
import { ProductSummary } from './product-api.service';

export interface RestockPayload {
  variantId:            string | null;
  qty:                  number;
  vendorId:             string | null;
  vendorName:           string | null;
  purchasePricePerUnit: number | null;
  notes:                string | null;
}

export interface InventoryTx {
  id:                   string;
  productId:            string;
  productName:          string;
  productSku:           string;
  variantLabel:         string | null;
  type:                 'IN' | 'OUT' | 'ADJUSTMENT';
  qty:                  number;
  purchasePricePerUnit: number | null;
  vendorId:             string | null;
  vendorName:           string | null;
  notes:                string | null;
  createdByEmail:       string;
  createdAt:            string;
}

export interface TxPage {
  content:       InventoryTx[];
  totalElements: number;
  totalPages:    number;
  number:        number;
}

@Injectable({ providedIn: 'root' })
export class InventoryApiService {
  private http = inject(HttpClient);

  restock(productId: string, req: RestockPayload): Observable<void> {
    return this.http
      .post<ApiResponse<void>>(INVENTORY_ENDPOINTS.RESTOCK(productId), req)
      .pipe(map(() => undefined));
  }

  getTransactions(page = 0, size = 20): Observable<TxPage> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http
      .get<ApiResponse<TxPage>>(INVENTORY_ENDPOINTS.TRANSACTIONS, { params })
      .pipe(map(r => r.data!));
  }

  getLowStock(threshold = 5): Observable<ProductSummary[]> {
    const params = new HttpParams().set('threshold', threshold);
    return this.http
      .get<ApiResponse<ProductSummary[]>>(INVENTORY_ENDPOINTS.LOW_STOCK, { params })
      .pipe(map(r => r.data!));
  }
}
