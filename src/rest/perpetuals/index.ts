import { API_PREFIX, RESTBase } from '../utils';
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
    requestParams: AllocatePortfolioRequest
  ): Promise<AllocatePortfolioResponse> {
    return this.request({
      method: 'POST',
      endpoint: `${API_PREFIX}/intx/allocate`,
      bodyParams: requestParams,
      isPublic: false,
    });
  }

  getSummary({
    portfolioUuid,
  }: GetPerpetualsPortfolioSummaryRequest): Promise<GetPerpetualsPortfolioSummaryResponse> {
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/intx/portfolio/${portfolioUuid}`,
      isPublic: false,
    });
  }

  listPositions({
    portfolioUuid,
  }: ListPerpetualsPositionsRequest): Promise<ListPerpetualsPositionsResponse> {
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/intx/positions/${portfolioUuid}`,
      isPublic: false,
    });
  }

  getPosition({
    portfolioUuid,
    symbol,
  }: GetPerpetualsPositionRequest): Promise<GetPerpetualsPositionResponse> {
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/intx/positions/${portfolioUuid}/${symbol}`,
      isPublic: false,
    });
  }

  getBalances({
    portfolioUuid,
  }: GetPortfolioBalancesRequest): Promise<GetPortfolioBalancesResponse> {
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/intx/balances/${portfolioUuid}`,
      isPublic: false,
    });
  }

  optInOutMultiAssetCollateral(
    requestParams: OptInOutMultiAssetCollateralRequest
  ): Promise<OptInOutMultiAssetCollateralResponse> {
    return this.request({
      method: 'POST',
      endpoint: `${API_PREFIX}/intx/multi_asset_collateral`,
      bodyParams: requestParams,
      isPublic: false,
    });
  }
}
