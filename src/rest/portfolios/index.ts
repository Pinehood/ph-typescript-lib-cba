import { API_PREFIX, RESTBase } from '../utils';
import {
  CreatePortfolioRequest,
  CreatePortfolioResponse,
  DeletePortfolioRequest,
  DeletePortfolioResponse,
  EditPortfolioRequest,
  EditPortfolioResponse,
  GetPortfolioBreakdownRequest,
  GetPortfolioBreakdownResponse,
  ListPortfoliosRequest,
  ListPortfoliosResponse,
  MovePortfolioFundsRequest,
  MovePortfolioFundsResponse,
} from './types';

export class PortfoliosAPI extends RESTBase {
  constructor(key?: string | undefined, secret?: string | undefined) {
    super(key, secret);
  }

  list(requestParams: ListPortfoliosRequest): Promise<ListPortfoliosResponse> {
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/portfolios`,
      queryParams: requestParams,
      isPublic: false,
    });
  }

  create(
    requestParams: CreatePortfolioRequest
  ): Promise<CreatePortfolioResponse> {
    return this.request({
      method: 'POST',
      endpoint: `${API_PREFIX}/portfolios`,
      bodyParams: requestParams,
      isPublic: false,
    });
  }

  moveFunds(
    requestParams: MovePortfolioFundsRequest
  ): Promise<MovePortfolioFundsResponse> {
    return this.request({
      method: 'POST',
      endpoint: `${API_PREFIX}/portfolios/move_funds`,
      bodyParams: requestParams,
      isPublic: false,
    });
  }

  getBreakdown({
    portfolioUuid,
    ...requestParams
  }: GetPortfolioBreakdownRequest): Promise<GetPortfolioBreakdownResponse> {
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/portfolios/${portfolioUuid}`,
      queryParams: requestParams,
      isPublic: false,
    });
  }

  delete({
    portfolioUuid,
  }: DeletePortfolioRequest): Promise<DeletePortfolioResponse> {
    return this.request({
      method: 'DELETE',
      endpoint: `${API_PREFIX}/portfolios/${portfolioUuid}`,
      isPublic: false,
    });
  }

  edit({
    portfolioUuid,
    ...requestParams
  }: EditPortfolioRequest): Promise<EditPortfolioResponse> {
    return this.request({
      method: 'PUT',
      endpoint: `${API_PREFIX}/portfolios/${portfolioUuid}`,
      bodyParams: requestParams,
      isPublic: false,
    });
  }
}
