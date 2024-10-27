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
    request: GetPublicProductBookRequest
  ): Promise<GetPublicProductBookResponse> {
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/market/product_book`,
      queryParams: request,
      isPublic: true,
    });
  }

  listProducts(request: ListPublicProductsRequest): Promise<Products> {
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/market/products`,
      queryParams: request,
      isPublic: true,
    });
  }

  getProduct(request: GetPublicProductRequest): Promise<Product> {
    const { productId } = request;
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/market/products/${productId}`,
      isPublic: true,
    });
  }

  getProductCandles(request: GetPublicProductCandlesRequest): Promise<Candles> {
    const { productId, ...restOfProps } = request;
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/market/products/${productId}/candles`,
      queryParams: restOfProps,
      isPublic: true,
    });
  }

  getMarketTrades(
    request: GetPublicMarketTradesRequest
  ): Promise<GetPublicMarketTradesResponse> {
    const { productId, ...restOfProps } = request;
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/products/${productId}/ticker`,
      queryParams: restOfProps,
      isPublic: true,
    });
  }
}
