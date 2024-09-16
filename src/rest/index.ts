export * from './types';

import { RESTBase } from './rest-base';
import * as Accounts from './accounts';
import * as Converts from './converts';
import * as Fees from './fees';
import * as Futures from './futures';
import * as Orders from './orders';
import * as Payments from './payments';
import * as Perpetuals from './perpetuals';
import * as Portfolios from './portfolios';
import * as Products from './products';
import * as Public from './public';
import * as FT from './types/function-types';

export class RESTClient extends RESTBase {
  constructor(key?: string | undefined, secret?: string | undefined) {
    super(key, secret);
  }

  public getAccount: FT.TGetAccount = Accounts.getAccount.bind(this);
  public listAccounts: FT.TListAccounts = Accounts.listAccounts.bind(this);

  public createConvertQuote: FT.TCreateConvertQuote =
    Converts.createConvertQuote.bind(this);
  public commitConvertTrade: FT.TCommitConvertTrade =
    Converts.commitConvertTrade.bind(this);
  public getConvertTrade: FT.TGetConvertTrade =
    Converts.getConvertTrade.bind(this);

  public getTransactionSummary: FT.TGetTransactionSummary =
    Fees.getTransactionSummary.bind(this);

  public getFuturesBalanceSummary: FT.TGetFuturesBalanceSummary =
    Futures.getFuturesBalanceSummary.bind(this);
  public getIntradayMarginSetting: FT.TGetIntradayMarginSetting =
    Futures.getIntradayMarginSetting.bind(this);
  public setIntradayMarginSetting: FT.TSetIntradayMarginSetting =
    Futures.setIntradayMarginSetting.bind(this);
  public getCurrentMarginWindow: FT.TGetCurrentMarginWindow =
    Futures.getCurrentMarginWindow.bind(this);
  public listFuturesPositions: FT.TListFuturesPositions =
    Futures.listFuturesPositions.bind(this);
  public getFuturesPosition: FT.TGetFuturesPosition =
    Futures.getFuturesPosition.bind(this);
  public scheduleFuturesSweep: FT.TScheduleFuturesSweep =
    Futures.scheduleFuturesSweep.bind(this);
  public listFuturesSweeps: FT.TListFuturesSweeps =
    Futures.listFuturesSweeps.bind(this);
  public cancelPendingFuturesSweep: FT.TCancelPendingFuturesSweep =
    Futures.cancelPendingFuturesSweep.bind(this);

  public createOrder: FT.TCreateOrder = Orders.createOrder.bind(this);
  public cancelOrders: FT.TCancelOrders = Orders.cancelOrders.bind(this);
  public editOrder: FT.TEditOrder = Orders.editOrder.bind(this);
  public editOrderPreview: FT.TEditOrderPreview =
    Orders.editOrderPreview.bind(this);
  public listOrders: FT.TListOrders = Orders.listOrders.bind(this);
  public listFills: FT.TListFills = Orders.listFills.bind(this);
  public getOrder: FT.TGetOrder = Orders.getOrder.bind(this);
  public previewOrder: FT.TPreviewOrder = Orders.previewOrder.bind(this);
  public closePosition: FT.TClosePosition = Orders.closePosition.bind(this);

  public listPaymentMethods: FT.TListPaymentMethods =
    Payments.listPaymentMethods.bind(this);
  public getPaymentMethod: FT.TGetPaymentMethod =
    Payments.getPaymentMethod.bind(this);

  public allocatePortfolio: FT.TAllocatePortfolio =
    Perpetuals.allocatePortfolio.bind(this);
  public getPerpetualsPortfolioSummary: FT.TGetPerpetualsPortfolioSummary =
    Perpetuals.getPerpetualsPortfolioSummary.bind(this);
  public listPerpetualsPositions: FT.TListPerpetualsPositions =
    Perpetuals.listPerpetualsPositions.bind(this);
  public getPerpetualsPosition: FT.TGetPerpetualsPosition =
    Perpetuals.getPerpertualsPosition.bind(this);
  public getPortfolioBalances: FT.TGetPortfolioBalances =
    Perpetuals.getPortfolioBalances.bind(this);
  public optInOutMultiAssetCollateral: FT.TOptInOutMultiAssetCollateral =
    Perpetuals.optInOutMultiAssetCollateral.bind(this);

  public listPortfolios: FT.TListPortfolios =
    Portfolios.listPortfolios.bind(this);
  public createPortfolio: FT.TCreatePortfolio =
    Portfolios.createPortfolio.bind(this);
  public deletePortfolio: FT.TDeletePortfolio =
    Portfolios.deletePortfolio.bind(this);
  public editPortfolio: FT.TEditPortfolio = Portfolios.editPortfolio.bind(this);
  public movePortfolioFunds: FT.TMovePortfolioFunds =
    Portfolios.movePortfolioFunds.bind(this);
  public getPortfolioBreakdown: FT.TGetPortfolioBreakdown =
    Portfolios.getPortfolioBreakdown.bind(this);

  public getBestBidAsk: FT.TGetBestBidAsk = Products.getBestBidAsk.bind(this);
  public getProductBook: FT.TGetProductBook =
    Products.getProductBook.bind(this);
  public listProducts: FT.TListProducts = Products.listProducts.bind(this);
  public getProduct: FT.TGetProduct = Products.getProduct.bind(this);
  public getProductCandles: FT.TGetProductCandles =
    Products.getProductCandles.bind(this);
  public getMarketTrades: FT.TGetMarketTrades =
    Products.getMarketTrades.bind(this);

  public getServerTime: FT.TGetServerTime = Public.getServerTime.bind(this);
  public getPublicProductBook: FT.TGetPublicProductBook =
    Public.getPublicProductBook.bind(this);
  public listPublicProducts: FT.TListPublicProducts =
    Public.listPublicProducts.bind(this);
  public getPublicProduct: FT.TGetPublicProduct =
    Public.getPublicProduct.bind(this);
  public getPublicProductCandles: FT.TGetPublicProductCandles =
    Public.getPublicProductCandles.bind(this);
  public getPublicMarketTrades: FT.TGetPublicMarketTrades =
    Public.getPublicMarketTrades.bind(this);
}
