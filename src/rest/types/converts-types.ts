import { RatConvertTrade, TradeIncentiveMetadata } from './common-types';

export type CreateConvertQuoteRequest = {
  fromAccount: string;
  toAccount: string;
  amount: string;
  tradeIncentiveMetadata?: TradeIncentiveMetadata;
};

export type CreateConvertQuoteResponse = {
  trade?: RatConvertTrade;
};

export type GetConvertTradeRequest = {
  tradeId: string;
  fromAccount: string;
  toAccount: string;
};

export type GetConvertTradeResponse = {
  trade?: RatConvertTrade;
};

export type CommitConvertTradeRequest = {
  tradeId: string;
  fromAccount: string;
  toAccount: string;
};

export type CommitConvertTradeResponse = {
  trade?: RatConvertTrade;
};
