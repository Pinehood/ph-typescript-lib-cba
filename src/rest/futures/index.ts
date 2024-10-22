import { API_PREFIX, RESTBase } from '../utils';
import {
  CancelPendingFuturesSweep,
  GetCurrentMarginWindowRequest,
  GetCurrentMarginWindowResponse,
  GetFuturesBalanceSummaryResponse,
  GetFuturesPositionRequest,
  GetFuturesPositionResponse,
  GetIntradayMarginSettingResponse,
  ListFuturesPositionsResponse,
  ListFuturesSweepsResponse,
  ScheduleFuturesSweepRequest,
  ScheduleFuturesSweepResponse,
  SetIntradayMarginSettingRequest,
  SetIntradayMarginSettingResponse,
} from './types';

export class FuturesAPI extends RESTBase {
  constructor(key?: string | undefined, secret?: string | undefined) {
    super(key, secret);
  }

  getBalanceSummary(): Promise<GetFuturesBalanceSummaryResponse> {
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/cfm/balance_summary`,
      isPublic: false,
    });
  }

  getIntradayMarginSetting(): Promise<GetIntradayMarginSettingResponse> {
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/cfm/intraday/margin_setting`,
      isPublic: false,
    });
  }

  setIntradayMarginSetting(
    requestParams: SetIntradayMarginSettingRequest
  ): Promise<SetIntradayMarginSettingResponse> {
    return this.request({
      method: 'POST',
      endpoint: `${API_PREFIX}/cfm/intraday/margin_setting`,
      bodyParams: requestParams,
      isPublic: false,
    });
  }

  getCurrentMarginWindow(
    requestParams: GetCurrentMarginWindowRequest
  ): Promise<GetCurrentMarginWindowResponse> {
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/cfm/intraday/current_margin_window`,
      queryParams: requestParams,
      isPublic: false,
    });
  }

  listPositions(): Promise<ListFuturesPositionsResponse> {
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/cfm/positions`,
      isPublic: false,
    });
  }

  getPosition({
    productId,
  }: GetFuturesPositionRequest): Promise<GetFuturesPositionResponse> {
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/cfm/positions/${productId}`,
      isPublic: false,
    });
  }

  scheduleSweep(
    requestParams: ScheduleFuturesSweepRequest
  ): Promise<ScheduleFuturesSweepResponse> {
    return this.request({
      method: 'POST',
      endpoint: `${API_PREFIX}/cfm/sweeps/schedule`,
      bodyParams: requestParams,
      isPublic: false,
    });
  }

  listSweeps(): Promise<ListFuturesSweepsResponse> {
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/cfm/sweeps`,
      isPublic: false,
    });
  }

  cancelPendingSweep(): Promise<CancelPendingFuturesSweep> {
    return this.request({
      method: 'DELETE',
      endpoint: `${API_PREFIX}/cfm/sweeps`,
      isPublic: false,
    });
  }
}
