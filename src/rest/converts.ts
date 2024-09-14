import { API_PREFIX } from '../constants';
import { RESTBase } from './rest-base';
import {
  CommitConvertTradeRequest,
  CommitConvertTradeResponse,
  CreateConvertQuoteRequest,
  CreateConvertQuoteResponse,
  GetConvertTradeRequest,
  GetConvertTradeResponse,
} from './types/converts-types';

export function createConvertQuote(
  this: RESTBase,
  requestParams: CreateConvertQuoteRequest
): Promise<CreateConvertQuoteResponse> {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/convert/quote`,
    bodyParams: requestParams,
    isPublic: false,
  });
}

export function getConvertTrade(
  this: RESTBase,
  { tradeId, ...requestParams }: GetConvertTradeRequest
): Promise<GetConvertTradeResponse> {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/convert/trade/${tradeId}`,
    queryParams: requestParams,
    isPublic: false,
  });
}

export function commitConvertTrade(
  this: RESTBase,
  { tradeId, ...requestParams }: CommitConvertTradeRequest
): Promise<CommitConvertTradeResponse> {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/convert/trade/${tradeId}`,
    bodyParams: requestParams,
    isPublic: false,
  });
}