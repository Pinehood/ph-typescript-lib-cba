import { API_PREFIX, RESTBase } from '../../utils';
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
  constructor(
    key?: string | undefined,
    secret?: string | undefined,
    sandbox?: boolean | undefined
  ) {
    super(key, secret, sandbox);
  }

  list(request: ListPortfoliosRequest): Promise<ListPortfoliosResponse> {
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/portfolios`,
      queryParams: request,
      isPublic: false,
    });
  }

  create(request: CreatePortfolioRequest): Promise<CreatePortfolioResponse> {
    return this.request({
      method: 'POST',
      endpoint: `${API_PREFIX}/portfolios`,
      bodyParams: request,
      isPublic: false,
    });
  }

  moveFunds(
    request: MovePortfolioFundsRequest
  ): Promise<MovePortfolioFundsResponse> {
    return this.request({
      method: 'POST',
      endpoint: `${API_PREFIX}/portfolios/move_funds`,
      bodyParams: request,
      isPublic: false,
    });
  }

  getBreakdown(
    request: GetPortfolioBreakdownRequest
  ): Promise<GetPortfolioBreakdownResponse> {
    const { portfolioUuid, ...restOfRequest } = request;
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/portfolios/${portfolioUuid}`,
      queryParams: restOfRequest,
      isPublic: false,
    });
  }

  delete(request: DeletePortfolioRequest): Promise<DeletePortfolioResponse> {
    const { portfolioUuid } = request;
    return this.request({
      method: 'DELETE',
      endpoint: `${API_PREFIX}/portfolios/${portfolioUuid}`,
      isPublic: false,
    });
  }

  edit(request: EditPortfolioRequest): Promise<EditPortfolioResponse> {
    const { portfolioUuid, ...restOfRequest } = request;
    return this.request({
      method: 'PUT',
      endpoint: `${API_PREFIX}/portfolios/${portfolioUuid}`,
      bodyParams: restOfRequest,
      isPublic: false,
    });
  }
}
