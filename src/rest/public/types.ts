import {
  Candles,
  ContractExpiryType,
  ExpiringContractStatus,
  HistoricalMarketTrade,
  PriceBook,
  Product,
  Products,
  ProductType,
} from '../types';

export type GetServerTimeResponse = {
  iso?: string;
  epochSeconds?: number;
  epochMillis?: number;
};

export type GetPublicProductBookRequest = {
  productId: string;
  limit?: number;
  aggregationPriceIncrement?: number;
};

export type GetPublicProductBookResponse = {
  pricebook: PriceBook;
};

export type ListPublicProductsRequest = {
  limit?: number;
  offset?: number;
  productType?: ProductType;
  productIds?: string[];
  contractExpiryType?: ContractExpiryType;
  expiringContractStatus?: ExpiringContractStatus;
  getAllProducts?: boolean;
};

export type GetPublicProductRequest = {
  productId: string;
};

export type GetPublicProductCandlesRequest = {
  productId: string;
  start: string;
  end: string;
  granularity: string;
  limit?: number;
};

export type GetPublicMarketTradesRequest = {
  productId: string;
  limit: number;
  start?: string;
  end?: string;
};

export type GetPublicMarketTradesResponse = {
  trades?: HistoricalMarketTrade[];
  best_bid?: string;
  best_ask?: string;
};
