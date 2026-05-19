import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { PRODUCT_ENDPOINTS } from '../core/constants/api.constants';
import { ApiResponse } from '../core/models/api.models';

export type ProductStatus = 'DRAFT' | 'ACTIVE' | 'INACTIVE' | 'ARCHIVED';

export interface ProductSummary {
  id:              string;
  name:            string;
  slug:            string;
  sku:             string;
  categoryName:    string;
  brandName:       string | null;
  priceRetail:     number;
  gstPercent:      number;
  stockQty:        number;
  status:          ProductStatus;
  primaryImageUrl: string | null;
  createdAt:       string;
}

export interface CategoryOption {
  id:         string;
  name:       string;
  parentName: string | null;
  isActive:   boolean;
}

export interface BrandOption {
  id:       string;
  name:     string;
  isActive: boolean;
}

export interface Page<T> {
  content:       T[];
  totalElements: number;
  totalPages:    number;
  number:        number;
  size:          number;
}

export interface CreateProductBasic {
  name:             string;
  sku:              string;
  categoryId:       string;
  brandId?:         string | null;
  shortDescription?: string;
}

export interface UpdateProductPricing {
  priceRetail:    number;
  priceWholesale: number | null;
  priceBroker:    number | null;
  gstPercent:     number;
  gstIncluded:    boolean;
  stockQty:       number;
  status:         ProductStatus;
}

@Injectable({ providedIn: 'root' })
export class ProductApiService {
  private http = inject(HttpClient);

  listProducts(params?: {
    search?: string;
    status?: ProductStatus;
    page?:   number;
    size?:   number;
  }): Observable<Page<ProductSummary>> {
    let p = new HttpParams();
    if (params?.search) p = p.set('search', params.search);
    if (params?.status) p = p.set('status', params.status);
    p = p.set('page', (params?.page ?? 0).toString());
    p = p.set('size', (params?.size ?? 100).toString());
    p = p.set('sortBy', 'createdAt');
    p = p.set('dir', 'desc');

    return this.http
      .get<ApiResponse<Page<ProductSummary>>>(PRODUCT_ENDPOINTS.BASE, { params: p })
      .pipe(map(r => r.data!));
  }

  createProduct(req: CreateProductBasic): Observable<string> {
    return this.http
      .post<ApiResponse<any>>(PRODUCT_ENDPOINTS.BASE, req)
      .pipe(map(r => r.data!.id as string));
  }

  patchProduct(id: string, req: Partial<UpdateProductPricing>): Observable<void> {
    return this.http
      .patch<ApiResponse<any>>(PRODUCT_ENDPOINTS.BY_ID(id), req)
      .pipe(map(() => undefined));
  }

  updateStock(id: string, stockQty: number): Observable<void> {
    return this.patchProduct(id, { stockQty });
  }

  listCategories(): Observable<CategoryOption[]> {
    return this.http
      .get<ApiResponse<Page<CategoryOption>>>(PRODUCT_ENDPOINTS.CATEGORIES, {
        params: new HttpParams().set('active', 'true').set('size', '200')
      })
      .pipe(map(r => r.data!.content));
  }

  listBrands(): Observable<BrandOption[]> {
    return this.http
      .get<ApiResponse<Page<BrandOption>>>(PRODUCT_ENDPOINTS.BRANDS, {
        params: new HttpParams().set('active', 'true').set('size', '200')
      })
      .pipe(map(r => r.data!.content));
  }
}
