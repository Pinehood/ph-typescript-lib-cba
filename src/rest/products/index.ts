import { API_PREFIX, RESTBase } from '../utils';
import { Candles, Product, Products } from '../types';
import {
  GetBestBidAskRequest,
  GetBestBidAskResponse,
  GetMarketTradesRequest,
  GetMarketTradesResponse,
  GetProductBookRequest,
  GetProductBookResponse,
  GetProductCandlesRequest,
  GetProductRequest,
  ListProductsRequest,
} from './types';

export class ProductsAPI extends RESTBase {
  constructor(key?: string | undefined, secret?: string | undefined) {
    super(key, secret);
  }

  getBestBidAsk(
    requestParams: GetBestBidAskRequest
  ): Promise<GetBestBidAskResponse> {
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/best_bid_ask`,
      queryParams: requestParams,
      isPublic: false,
    });
  }

  getBook(
    requestParams: GetProductBookRequest
  ): Promise<GetProductBookResponse> {
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/product_book`,
      queryParams: requestParams,
      isPublic: false,
    });
  }

  list(requestParams: ListProductsRequest): Promise<Products> {
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/products`,
      queryParams: requestParams,
      isPublic: false,
    });
  }

  get({ productId, ...requestParams }: GetProductRequest): Promise<Product> {
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/products/${productId}`,
      queryParams: requestParams,
      isPublic: false,
    });
  }

  getCandles({
    productId,
    ...requestParams
  }: GetProductCandlesRequest): Promise<Candles> {
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/products/${productId}/candles`,
      queryParams: requestParams,
      isPublic: false,
    });
  }

  getMarketTrades({
    productId,
    ...requestParams
  }: GetMarketTradesRequest): Promise<GetMarketTradesResponse> {
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/products/${productId}/ticker`,
      queryParams: requestParams,
      isPublic: false,
    });
  }
}
