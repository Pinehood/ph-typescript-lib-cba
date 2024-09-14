import { API_PREFIX } from '../constants';
import { RESTBase } from './rest-base';
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
} from './types/futures-types';

export function getFuturesBalanceSummary(
  this: RESTBase
): Promise<GetFuturesBalanceSummaryResponse> {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/cfm/balance_summary`,
    isPublic: false,
  });
}

export function getIntradayMarginSetting(
  this: RESTBase
): Promise<GetIntradayMarginSettingResponse> {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/cfm/intraday/margin_setting`,
    isPublic: false,
  });
}

export function setIntradayMarginSetting(
  this: RESTBase,
  requestParams: SetIntradayMarginSettingRequest
): Promise<SetIntradayMarginSettingResponse> {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/cfm/intraday/margin_setting`,
    bodyParams: requestParams,
    isPublic: false,
  });
}

export function getCurrentMarginWindow(
  this: RESTBase,
  requestParams: GetCurrentMarginWindowRequest
): Promise<GetCurrentMarginWindowResponse> {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/cfm/intraday/current_margin_window`,
    queryParams: requestParams,
    isPublic: false,
  });
}

export function listFuturesPositions(
  this: RESTBase
): Promise<ListFuturesPositionsResponse> {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/cfm/positions`,
    isPublic: false,
  });
}

export function getFuturesPosition(
  this: RESTBase,
  { productId }: GetFuturesPositionRequest
): Promise<GetFuturesPositionResponse> {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/cfm/positions/${productId}`,
    isPublic: false,
  });
}

export function scheduleFuturesSweep(
  this: RESTBase,
  requestParams: ScheduleFuturesSweepRequest
): Promise<ScheduleFuturesSweepResponse> {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/cfm/sweeps/schedule`,
    bodyParams: requestParams,
    isPublic: false,
  });
}

export function listFuturesSweeps(
  this: RESTBase
): Promise<ListFuturesSweepsResponse> {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/cfm/sweeps`,
    isPublic: false,
  });
}

export function cancelPendingFuturesSweep(
  this: RESTBase
): Promise<CancelPendingFuturesSweep> {
  return this.request({
    method: 'DELETE',
    endpoint: `${API_PREFIX}/cfm/sweeps`,
    isPublic: false,
  });
}
