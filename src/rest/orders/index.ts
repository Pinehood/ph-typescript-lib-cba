import { API_PREFIX, RESTBase } from '../utils';
import {
  CancelOrdersRequest,
  CancelOrdersResponse,
  ClosePositionRequest,
  ClosePositionResponse,
  CreateOrderRequest,
  CreateOrderResponse,
  EditOrderPreviewRequest,
  EditOrderPreviewResponse,
  EditOrderRequest,
  EditOrderResponse,
  GetOrderRequest,
  GetOrderResponse,
  ListFillsRequest,
  ListFillsResponse,
  ListOrdersRequest,
  ListOrdersResponse,
  PreviewOrderRequest,
  PreviewOrderResponse,
} from './types';

export class OrdersAPI extends RESTBase {
  constructor(key?: string | undefined, secret?: string | undefined) {
    super(key, secret);
  }

  create(requestParams: CreateOrderRequest): Promise<CreateOrderResponse> {
    return this.request({
      method: 'POST',
      endpoint: `${API_PREFIX}/orders`,
      bodyParams: requestParams,
      isPublic: false,
    });
  }

  cancel(requestParams: CancelOrdersRequest): Promise<CancelOrdersResponse> {
    return this.request({
      method: 'POST',
      endpoint: `${API_PREFIX}/orders/batch_cancel`,
      bodyParams: requestParams,
      isPublic: false,
    });
  }

  edit(requestParams: EditOrderRequest): Promise<EditOrderResponse> {
    return this.request({
      method: 'POST',
      endpoint: `${API_PREFIX}/orders/edit`,
      bodyParams: requestParams,
      isPublic: false,
    });
  }

  editPreview(
    requestParams: EditOrderPreviewRequest
  ): Promise<EditOrderPreviewResponse> {
    return this.request({
      method: 'POST',
      endpoint: `${API_PREFIX}/orders/edit_preview`,
      bodyParams: requestParams,
      isPublic: false,
    });
  }

  list(requestParams: ListOrdersRequest): Promise<ListOrdersResponse> {
    return this.request({
      method: 'POST',
      endpoint: `${API_PREFIX}/orders/historical/batch`,
      queryParams: requestParams,
      isPublic: false,
    });
  }

  listFills(requestParams: ListFillsRequest): Promise<ListFillsResponse> {
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/orders/historical/fills`,
      queryParams: requestParams,
      isPublic: false,
    });
  }

  get({ orderId }: GetOrderRequest): Promise<GetOrderResponse> {
    return this.request({
      method: 'GET',
      endpoint: `${API_PREFIX}/orders/historical/${orderId}`,
      isPublic: false,
    });
  }

  preview(requestParams: PreviewOrderRequest): Promise<PreviewOrderResponse> {
    return this.request({
      method: 'POST',
      endpoint: `${API_PREFIX}/orders/preview`,
      bodyParams: requestParams,
      isPublic: false,
    });
  }

  closePosition(
    requestParams: ClosePositionRequest
  ): Promise<ClosePositionResponse> {
    return this.request({
      method: 'POST',
      endpoint: `${API_PREFIX}/orders/close_position`,
      queryParams: undefined,
      bodyParams: requestParams,
      isPublic: false,
    });
  }
}
