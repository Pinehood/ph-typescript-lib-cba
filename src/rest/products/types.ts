import {
  ContractExpiryType,
  ExpiringContractStatus,
  Granularity,
  HistoricalMarketTrade,
  PriceBook,
  ProductType,
} from '../../types';

export type GetBestBidAskRequest = {
  productIds?: string[];
};

export type GetBestBidAskResponse = {
  pricebooks: PriceBook[];
};

export type GetProductBookRequest = {
  productId: string;
  limit?: number;
  aggregationPriceIncrement?: number;
};

export type GetProductBookResponse = {
  pricebook: PriceBook;
  last: string;
  mid_market: string;
  spread_bps: string;
  spread_absolute: string;
};

export type ListProductsRequest = {
  limit?: number;
  offset?: number;
  productType?: ProductType;
  productIds?: string[];
  contractExpiryType?: ContractExpiryType;
  expiringContractStatus?: ExpiringContractStatus;
  getTradabilityStatus?: boolean;
  getAllProducts?: boolean;
};

export type GetProductRequest = {
  productId: string;
  getTradabilityStatus?: boolean;
};

export type GetProductCandlesRequest = {
  productId: string;
  start: string;
  end: string;
  granularity: Granularity;
  limit?: number;
};

export type GetMarketTradesRequest = {
  productId: string;
  limit: number;
  start?: string;
  end?: string;
};

export type GetMarketTradesResponse = {
  trades?: HistoricalMarketTrade[];
  best_bid?: string;
  best_ask?: string;
};
