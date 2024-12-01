import { API_PREFIX, RESTBase } from '../../utils';
import {
  GetTransactionsSummaryRequest,
  GetTransactionsSummaryResponse,
} from './types';

export class FeesAPI extends RESTBase {
  constructor(
    key?: string | undefined,
    secret?: string | undefined,
    sandbox?: boolean | undefined
  ) {
    super(key, secret, sandbox);
  }

  getTransactionSummary(
    request: GetTransactionsSummaryRequest
  ): Promise<GetTransactionsSummaryResponse> {
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/transaction_summary`,
      queryParams: request,
      isPublic: false,
    });
  }
}
