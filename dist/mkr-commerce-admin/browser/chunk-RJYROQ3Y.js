import {
  PRODUCT_ENDPOINTS
} from "./chunk-O3NE7GYO.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-CADB6C7J.js";
import {
  inject,
  map,
  ɵɵdefineInjectable
} from "./chunk-PEVOVQSE.js";

// src/app/services/product-api.service.ts
var ProductApiService = class _ProductApiService {
  http = inject(HttpClient);
  listProducts(params) {
    let p = new HttpParams();
    if (params?.search)
      p = p.set("search", params.search);
    if (params?.status)
      p = p.set("status", params.status);
    p = p.set("page", (params?.page ?? 0).toString());
    p = p.set("size", (params?.size ?? 100).toString());
    p = p.set("sortBy", "createdAt");
    p = p.set("dir", "desc");
    return this.http.get(PRODUCT_ENDPOINTS.BASE, { params: p }).pipe(map((r) => r.data));
  }
  createProduct(req) {
    return this.http.post(PRODUCT_ENDPOINTS.BASE, req).pipe(map((r) => r.data.id));
  }
  patchProduct(id, req) {
    return this.http.patch(PRODUCT_ENDPOINTS.BY_ID(id), req).pipe(map(() => void 0));
  }
  updateStock(id, stockQty) {
    return this.patchProduct(id, { stockQty });
  }
  listCategories() {
    return this.http.get(PRODUCT_ENDPOINTS.CATEGORIES, {
      params: new HttpParams().set("active", "true").set("size", "200")
    }).pipe(map((r) => r.data.content));
  }
  listBrands() {
    return this.http.get(PRODUCT_ENDPOINTS.BRANDS, {
      params: new HttpParams().set("active", "true").set("size", "200")
    }).pipe(map((r) => r.data.content));
  }
  static \u0275fac = function ProductApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductApiService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductApiService, factory: _ProductApiService.\u0275fac, providedIn: "root" });
};

export {
  ProductApiService
};
//# sourceMappingURL=chunk-RJYROQ3Y.js.map
