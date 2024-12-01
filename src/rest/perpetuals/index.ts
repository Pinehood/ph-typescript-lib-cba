import { API_PREFIX, RESTBase } from '../../utils';
import {
  AllocatePortfolioRequest,
  AllocatePortfolioResponse,
  GetPerpetualsPortfolioSummaryRequest,
  GetPerpetualsPortfolioSummaryResponse,
  GetPerpetualsPositionRequest,
  GetPerpetualsPositionResponse,
  GetPortfolioBalancesRequest,
  GetPortfolioBalancesResponse,
  ListPerpetualsPositionsRequest,
  ListPerpetualsPositionsResponse,
  OptInOutMultiAssetCollateralRequest,
  OptInOutMultiAssetCollateralResponse,
} from './types';

export class PerpetualsAPI extends RESTBase {
  constructor(key?: string | undefined, secret?: string | undefined) {
    super(key, secret);
  }

  allocate(
    request: AllocatePortfolioRequest
  ): Promise<AllocatePortfolioResponse> {
    return this.request({
      method: 'POST',
      endpoint: `${API_PREFIX}/intx/allocate`,
      bodyParams: request,
      isPublic: false,
    });
  }

  getSummary(
    request: GetPerpetualsPortfolioSummaryRequest
  ): Promise<GetPerpetualsPortfolioSummaryResponse> {
    const { portfolioUuid } = request;
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/intx/portfolio/${portfolioUuid}`,
      isPublic: false,
    });
  }

  listPositions(
    request: ListPerpetualsPositionsRequest
  ): Promise<ListPerpetualsPositionsResponse> {
    const { portfolioUuid } = request;
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/intx/positions/${portfolioUuid}`,
      isPublic: false,
    });
  }

  getPosition(
    request: GetPerpetualsPositionRequest
  ): Promise<GetPerpetualsPositionResponse> {
    const { portfolioUuid, symbol } = request;
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/intx/positions/${portfolioUuid}/${symbol}`,
      isPublic: false,
    });
  }

  getBalances(
    request: GetPortfolioBalancesRequest
  ): Promise<GetPortfolioBalancesResponse> {
    const { portfolioUuid } = request;
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/intx/balances/${portfolioUuid}`,
      isPublic: false,
    });
  }

  optInOutMultiAssetCollateral(
    request: OptInOutMultiAssetCollateralRequest
  ): Promise<OptInOutMultiAssetCollateralResponse> {
    return this.request({
      method: 'POST',
      endpoint: `${API_PREFIX}/intx/multi_asset_collateral`,
      bodyParams: request,
      isPublic: false,
    });
  }
}
