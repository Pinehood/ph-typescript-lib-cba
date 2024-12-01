import { API_PREFIX, RESTBase } from '../../utils';
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
    request: CreateConvertQuoteRequest
  ): Promise<CreateConvertQuoteResponse> {
    return this.request({
      method: 'POST',
      endpoint: `${API_PREFIX}/convert/quote`,
      bodyParams: request,
      isPublic: false,
    });
  }

  getTrade(request: GetConvertTradeRequest): Promise<GetConvertTradeResponse> {
    const { tradeId, ...restOfRequest } = request;
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/convert/trade/${tradeId}`,
      queryParams: restOfRequest,
      isPublic: false,
    });
  }

  commitTrade(
    request: CommitConvertTradeRequest
  ): Promise<CommitConvertTradeResponse> {
    const { tradeId, ...restOfRequest } = request;
    return this.request({
      method: 'POST',
      endpoint: `${API_PREFIX}/convert/trade/${tradeId}`,
      bodyParams: restOfRequest,
      isPublic: false,
    });
  }
}
