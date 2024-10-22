import { API_PREFIX, RESTBase } from '../utils';
import {
  GetAccountRequest,
  GetAccountResponse,
  ListAccountsRequest,
  ListAccountsResponse,
} from './types';

export class AccountsAPI extends RESTBase {
  constructor(key?: string | undefined, secret?: string | undefined) {
    super(key, secret);
  }

  get({ accountUuid }: GetAccountRequest): Promise<GetAccountResponse> {
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/accounts/${accountUuid}`,
      isPublic: false,
    });
  }

  list(requestParams: ListAccountsRequest): Promise<ListAccountsResponse> {
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/accounts`,
      queryParams: requestParams,
      isPublic: false,
    });
  }
}