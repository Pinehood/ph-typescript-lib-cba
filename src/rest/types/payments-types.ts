import { PaymentMethod } from './common-types';

export type ListPaymentMethodsResponse = {
  paymentMethods?: PaymentMethod;
};

export type GetPaymentMethodRequest = {
  paymentMethodId: string;
};

export type GetPaymentMethodResponse = {
  paymentMethod?: PaymentMethod;
};
