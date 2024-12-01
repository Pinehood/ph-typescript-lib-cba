import { API_PREFIX, RESTBase } from '../../utils';
import {
  GetAccountRequest,
  GetAccountResponse,
  ListAccountsRequest,
  ListAccountsResponse,
} from './types';

export class AccountsAPI extends RESTBase {
  constructor(
    key?: string | undefined,
    secret?: string | undefined,
    sandbox?: boolean | undefined
  ) {
    super(key, secret, sandbox);
  }

  get(request: GetAccountRequest): Promise<GetAccountResponse> {
    const { accountUuid } = request;
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/accounts/${accountUuid}`,
      isPublic: false,
    });
  }

  list(request: ListAccountsRequest): Promise<ListAccountsResponse> {
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/accounts`,
      queryParams: request,
      isPublic: false,
    });
  }
}
