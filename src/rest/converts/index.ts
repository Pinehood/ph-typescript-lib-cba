import { API_PREFIX, RESTBase } from '../utils';
import {
  CommitConvertTradeRequest,
  CommitConvertTradeResponse,
  CreateConvertQuoteRequest,
  CreateConvertQuoteResponse,
  GetConvertTradeRequest,
  GetConvertTradeResponse,
} from './types';

export class ConvertsAPI extends RESTBase {
  constructor(key?: string | undefined, secret?: string | undefined) {
    super(key, secret);
  }

  createQuote(
    requestParams: CreateConvertQuoteRequest
  ): Promise<CreateConvertQuoteResponse> {
    return this.request({
      method: 'POST',
      endpoint: `${API_PREFIX}/convert/quote`,
      bodyParams: requestParams,
      isPublic: false,
    });
  }

  getTrade({
    tradeId,
    ...requestParams
  }: GetConvertTradeRequest): Promise<GetConvertTradeResponse> {
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/convert/trade/${tradeId}`,
      queryParams: requestParams,
      isPublic: false,
    });
  }

  commitTrade({
    tradeId,
    ...requestParams
  }: CommitConvertTradeRequest): Promise<CommitConvertTradeResponse> {
    return this.request({
      method: 'POST',
      endpoint: `${API_PREFIX}/convert/trade/${tradeId}`,
      bodyParams: requestParams,
      isPublic: false,
    });
  }
}
