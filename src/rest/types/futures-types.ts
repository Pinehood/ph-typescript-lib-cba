import {
  FCMBalanceSummary,
  FCMPosition,
  FCMSweep,
  IntradayMarginSetting,
} from './common-types';

export type GetFuturesBalanceSummaryResponse = {
  balance_summary?: FCMBalanceSummary;
};

export type GetIntradayMarginSettingResponse = {
  setting?: IntradayMarginSetting;
};

export type SetIntradayMarginSettingRequest = {
  setting?: IntradayMarginSetting;
};

export type SetIntradayMarginSettingResponse = Record<string, never>;

export type GetCurrentMarginWindowRequest = {
  marginProfileType?: string;
};

export type GetCurrentMarginWindowResponse = {
  margin_window?: Record<string, any>;
  is_intraday_margin_killswitch_enabled?: boolean;
  is_intraday_margin_enrollment_killswitch_enabled?: boolean;
};

export type ListFuturesPositionsResponse = {
  positions?: FCMPosition[];
};

export type GetFuturesPositionRequest = {
  productId: string;
};

export type GetFuturesPositionResponse = {
  position?: FCMPosition;
};

export type ScheduleFuturesSweepRequest = {
  usdAmount?: string;
};

export type ScheduleFuturesSweepResponse = {
  success?: boolean;
};

export type ListFuturesSweepsResponse = {
  sweeps: FCMSweep[];
};

export type CancelPendingFuturesSweep = {
  success?: boolean;
};
