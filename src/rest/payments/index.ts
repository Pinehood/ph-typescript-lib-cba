import { API_PREFIX, RESTBase } from '../utils';
import {
  GetPaymentMethodRequest,
  GetPaymentMethodResponse,
  ListPaymentMethodsResponse,
} from './types';

export class PaymentsAPI extends RESTBase {
  constructor(key?: string | undefined, secret?: string | undefined) {
    super(key, secret);
  }

  list(): Promise<ListPaymentMethodsResponse> {
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/payment_methods`,
      isPublic: false,
    });
  }

  get(request: GetPaymentMethodRequest): Promise<GetPaymentMethodResponse> {
    const { paymentMethodId } = request;
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/payment_methods/${paymentMethodId}`,
      isPublic: false,
    });
  }
}
