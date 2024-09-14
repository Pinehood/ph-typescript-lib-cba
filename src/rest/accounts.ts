import { API_PREFIX } from '../constants';
import { RESTBase } from './rest-base';
import {
  GetAccountRequest,
  GetAccountResponse,
  ListAccountsRequest,
  ListAccountsResponse,
} from './types/accounts-types';

export function getAccount(
  this: RESTBase,
  { accountUuid }: GetAccountRequest
): Promise<GetAccountResponse> {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/accounts/${accountUuid}`,
    isPublic: false,
  });
}

export function listAccounts(
  this: RESTBase,
  requestParams: ListAccountsRequest
): Promise<ListAccountsResponse> {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/accounts`,
    queryParams: requestParams,
    isPublic: false,
  });
}
