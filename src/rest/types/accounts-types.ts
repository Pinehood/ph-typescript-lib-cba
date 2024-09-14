import { Account } from './common-types';

export type GetAccountRequest = {
  accountUuid: string;
};

export type GetAccountResponse = {
  account?: Account;
};

export type ListAccountsRequest = {
  limit?: number;
  cursor?: string;
  retailPortfolioId?: string;
};

export type ListAccountsResponse = {
  accounts?: Account[];
  has_next: boolean;
  cursor?: string;
  size?: number;
};
