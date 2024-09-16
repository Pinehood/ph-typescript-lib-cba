import * as Types from '.';

export type TGetAccount = ({
  accountUuid,
}: Types.GetAccountRequest) => Promise<Types.GetAccountResponse>;
export type TListAccounts = (
  requestParams: Types.ListAccountsRequest
) => Promise<Types.ListAccountsResponse>;
export type TCreateConvertQuote = (
  requestParams: Types.CreateConvertQuoteRequest
) => Promise<Types.CreateConvertQuoteResponse>;
export type TCommitConvertTrade = ({
  tradeId,
  ...requestParams
}: Types.CommitConvertTradeRequest) => Promise<Types.CommitConvertTradeResponse>;
export type TGetConvertTrade = ({
  tradeId,
  ...requestParams
}: Types.GetConvertTradeRequest) => Promise<Types.GetConvertTradeResponse>;
export type TGetTransactionSummary = (
  requestParams: Types.GetTransactionsSummaryRequest
) => Promise<Types.GetTransactionsSummaryResponse>;
export type TGetFuturesBalanceSummary =
  () => Promise<Types.GetFuturesBalanceSummaryResponse>;
export type TGetIntradayMarginSetting =
  () => Promise<Types.GetIntradayMarginSettingResponse>;
export type TSetIntradayMarginSetting = (
  requestParams: Types.SetIntradayMarginSettingRequest
) => Promise<Types.SetIntradayMarginSettingResponse>;
export type TGetCurrentMarginWindow = (
  requestParams: Types.GetCurrentMarginWindowRequest
) => Promise<Types.GetCurrentMarginWindowResponse>;
export type TListFuturesPositions =
  () => Promise<Types.ListFuturesPositionsResponse>;
export type TGetFuturesPosition = ({
  productId,
}: Types.GetFuturesPositionRequest) => Promise<Types.GetFuturesPositionResponse>;
export type TScheduleFuturesSweep = (
  requestParams: Types.ScheduleFuturesSweepRequest
) => Promise<Types.ScheduleFuturesSweepResponse>;
export type TListFuturesSweeps = () => Promise<Types.ListFuturesSweepsResponse>;
export type TCancelPendingFuturesSweep =
  () => Promise<Types.CancelPendingFuturesSweep>;
export type TCreateOrder = (
  requestParams: Types.CreateOrderRequest
) => Promise<Types.CreateOrderResponse>;
export type TCancelOrders = (
  requestParams: Types.CancelOrdersRequest
) => Promise<Types.CancelOrdersResponse>;
export type TEditOrder = (
  requestParams: Types.EditOrderRequest
) => Promise<Types.EditOrderResponse>;
export type TEditOrderPreview = (
  requestParams: Types.EditOrderPreviewRequest
) => Promise<Types.EditOrderPreviewResponse>;
export type TListOrders = (
  requestParams: Types.ListOrdersRequest
) => Promise<Types.ListOrdersResponse>;
export type TListFills = (
  requestParams: Types.ListFillsRequest
) => Promise<Types.ListFillsResponse>;
export type TGetOrder = ({
  orderId,
}: Types.GetOrderRequest) => Promise<Types.GetOrderResponse>;
export type TPreviewOrder = (
  requestParams: Types.PreviewOrderRequest
) => Promise<Types.PreviewOrderResponse>;
export type TClosePosition = (
  requestParams: Types.ClosePositionRequest
) => Promise<Types.ClosePositionResponse>;
export type TListPaymentMethods =
  () => Promise<Types.ListPaymentMethodsResponse>;
export type TGetPaymentMethod = ({
  paymentMethodId,
}: Types.GetPaymentMethodRequest) => Promise<Types.GetPaymentMethodResponse>;
export type TAllocatePortfolio = (
  requestParams: Types.AllocatePortfolioRequest
) => Promise<Types.AllocatePortfolioResponse>;
export type TGetPerpetualsPortfolioSummary = ({
  portfolioUuid,
}: Types.GetPerpetualsPortfolioSummaryRequest) => Promise<Types.GetPerpetualsPortfolioSummaryResponse>;
export type TListPerpetualsPositions = ({
  portfolioUuid,
}: Types.ListPerpetualsPositionsRequest) => Promise<Types.ListPerpetualsPositionsResponse>;
export type TGetPerpetualsPosition = ({
  portfolioUuid,
  symbol,
}: Types.GetPerpetualsPositionRequest) => Promise<Types.GetPerpetualsPositionResponse>;
export type TGetPortfolioBalances = ({
  portfolioUuid,
}: Types.GetPortfolioBalancesRequest) => Promise<Types.GetPortfolioBalancesResponse>;
export type TOptInOutMultiAssetCollateral = (
  requestParams: Types.OptInOutMultiAssetCollateralRequest
) => Promise<Types.OptInOutMultiAssetCollateralResponse>;
export type TListPortfolios = (
  requestParams: Types.ListPortfoliosRequest
) => Promise<Types.ListPortfoliosResponse>;
export type TCreatePortfolio = (
  requestParams: Types.CreatePortfolioRequest
) => Promise<Types.CreatePortfolioResponse>;
export type TDeletePortfolio = ({
  portfolioUuid,
}: Types.DeletePortfolioRequest) => Promise<Types.DeletePortfolioResponse>;
export type TEditPortfolio = ({
  portfolioUuid,
  ...requestParams
}: Types.EditPortfolioRequest) => Promise<Types.EditPortfolioResponse>;
export type TMovePortfolioFunds = (
  requestParams: Types.MovePortfolioFundsRequest
) => Promise<Types.MovePortfolioFundsResponse>;
export type TGetPortfolioBreakdown = ({
  portfolioUuid,
  ...requestParams
}: Types.GetPortfolioBreakdownRequest) => Promise<Types.GetPortfolioBreakdownResponse>;
export type TGetBestBidAsk = (
  requestParams: Types.GetBestBidAskRequest
) => Promise<Types.GetBestBidAskResponse>;
export type TGetProductBook = (
  requestParams: Types.GetProductBookRequest
) => Promise<Types.GetProductBookResponse>;
export type TListProducts = (
  requestParams: Types.ListProductsRequest
) => Promise<Types.ListProductsResponse>;
export type TGetProduct = ({
  productId,
  ...requestParams
}: Types.GetProductRequest) => Promise<Types.GetProductResponse>;
export type TGetProductCandles = ({
  productId,
  ...requestParams
}: Types.GetProductCandlesRequest) => Promise<Types.GetProductCandlesResponse>;
export type TGetMarketTrades = ({
  productId,
  ...requestParams
}: Types.GetMarketTradesRequest) => Promise<Types.GetMarketTradesResponse>;
export type TGetServerTime = () => Promise<Types.GetServerTimeResponse>;
export type TGetPublicProductBook = (
  requestParams: Types.GetPublicProductBookRequest
) => Promise<Types.GetPublicProductBookResponse>;
export type TListPublicProducts = (
  requestParams: Types.ListPublicProductsRequest
) => Promise<Types.ListPublicProductsResponse>;
export type TGetPublicProduct = ({
  productId,
}: Types.GetPublicProductRequest) => Promise<Types.GetPublicProductResponse>;
export type TGetPublicProductCandles = ({
  productId,
  ...requestParams
}: Types.GetPublicProductCandlesRequest) => Promise<Types.GetPublicProductCandlesResponse>;
export type TGetPublicMarketTrades = ({
  productId,
  ...requestParams
}: Types.GetPublicMarketTradesRequest) => Promise<Types.GetPublicMarketTradesResponse>;
