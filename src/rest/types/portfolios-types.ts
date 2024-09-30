import { Portfolio, PortfolioBreakdown, PortfolioType } from './common-types';

export type ListPortfoliosRequest = {
  portfolioType?: PortfolioType;
};

export type ListPortfoliosResponse = {
  portfolios?: Portfolio[];
};

export type CreatePortfolioRequest = {
  name: string;
};

export type CreatePortfolioResponse = {
  portfolio?: Portfolio;
};

export type MovePortfolioFundsRequest = {
  funds: Record<string, any>;
  sourcePortfolioUuid: string;
  targetPortfolioUuid: string;
};

export type MovePortfolioFundsResponse = {
  source_portfolio_uuid?: string;
  target_portfolio_uuid?: string;
};

export type GetPortfolioBreakdownRequest = {
  portfolioUuid: string;
  currency?: string;
};

export type GetPortfolioBreakdownResponse = {
  breakdown?: PortfolioBreakdown;
};

export type DeletePortfolioRequest = {
  portfolioUuid: string;
};

export type DeletePortfolioResponse = Record<string, never>;

export type EditPortfolioRequest = {
  portfolioUuid: string;
  name: string;
};

export type EditPortfolioResponse = {
  portfolio?: Portfolio;
};
