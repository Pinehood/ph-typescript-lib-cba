import {
  PerpetualPortfolio,
  PortfolioBalance,
  PortfolioSummary,
  Position,
  PositionSummary,
} from '../../types';

export type AllocatePortfolioRequest = {
  portfolioUuid: string;
  symbol: string;
  amount: string;
  currency: string;
};

export type AllocatePortfolioResponse = Record<string, never>;

export type GetPerpetualsPortfolioSummaryRequest = {
  portfolioUuid: string;
};

export type GetPerpetualsPortfolioSummaryResponse = {
  portfolios?: PerpetualPortfolio[];
  summary?: PortfolioSummary;
};

export type ListPerpetualsPositionsRequest = {
  portfolioUuid: string;
};

export type ListPerpetualsPositionsResponse = {
  positions?: Position[];
  summary?: PositionSummary;
};

export type GetPerpetualsPositionRequest = {
  portfolioUuid: string;
  symbol: string;
};

export type GetPerpetualsPositionResponse = {
  position?: Position;
};

export type GetPortfolioBalancesRequest = {
  portfolioUuid: string;
};

export type GetPortfolioBalancesResponse = {
  portfolio_balancces?: PortfolioBalance[];
};

export type OptInOutMultiAssetCollateralRequest = {
  portfolioUuid?: string;
  multiAssetCollateralEnabled?: boolean;
};

export type OptInOutMultiAssetCollateralResponse = {
  cross_collateral_enabled?: boolean;
};
