import { API_PREFIX, RESTBase } from '../utils';
import { Candles, Product, Products } from '../types';
import {
  GetPublicMarketTradesRequest,
  GetPublicMarketTradesResponse,
  GetPublicProductBookRequest,
  GetPublicProductBookResponse,
  GetPublicProductCandlesRequest,
  GetPublicProductRequest,
  GetServerTimeResponse,
  ListPublicProductsRequest,
} from './types';

export class PublicAPI extends RESTBase {
  constructor(key?: string | undefined, secret?: string | undefined) {
    super(key, secret);
  }

  getServerTime(): Promise<GetServerTimeResponse> {
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/time`,
      isPublic: true,
    });
  }

  getProductBook(
    requestParams: GetPublicProductBookRequest
  ): Promise<GetPublicProductBookResponse> {
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/market/product_book`,
      queryParams: requestParams,
      isPublic: true,
    });
  }

  listProducts(requestParams: ListPublicProductsRequest): Promise<Products> {
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/market/products`,
      queryParams: requestParams,
      isPublic: true,
    });
  }

  getProduct({ productId }: GetPublicProductRequest): Promise<Product> {
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/market/products/${productId}`,
      isPublic: true,
    });
  }

  getProductCandles({
    productId,
    ...requestParams
  }: GetPublicProductCandlesRequest): Promise<Candles> {
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/market/products/${productId}/candles`,
      queryParams: requestParams,
      isPublic: true,
    });
  }

  getMarketTrades({
    productId,
    ...requestParams
  }: GetPublicMarketTradesRequest): Promise<GetPublicMarketTradesResponse> {
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/products/${productId}/ticker`,
      queryParams: requestParams,
      isPublic: true,
    });
  }
}
