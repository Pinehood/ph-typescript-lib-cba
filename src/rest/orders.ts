import { API_PREFIX } from '../constants';
import { RESTBase } from './rest-base';
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
} from './types/orders-types';

export function createOrder(
  this: RESTBase,
  requestParams: CreateOrderRequest
): Promise<CreateOrderResponse> {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/orders`,
    bodyParams: requestParams,
    isPublic: false,
  });
}

export function cancelOrders(
  this: RESTBase,
  requestParams: CancelOrdersRequest
): Promise<CancelOrdersResponse> {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/orders/batch_cancel`,
    bodyParams: requestParams,
    isPublic: false,
  });
}

export function editOrder(
  this: RESTBase,
  requestParams: EditOrderRequest
): Promise<EditOrderResponse> {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/orders/edit`,
    bodyParams: requestParams,
    isPublic: false,
  });
}

export function editOrderPreview(
  this: RESTBase,
  requestParams: EditOrderPreviewRequest
): Promise<EditOrderPreviewResponse> {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/orders/edit_preview`,
    bodyParams: requestParams,
    isPublic: false,
  });
}

export function listOrders(
  this: RESTBase,
  requestParams: ListOrdersRequest
): Promise<ListOrdersResponse> {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/orders/historical/batch`,
    queryParams: requestParams,
    isPublic: false,
  });
}

export function listFills(
  this: RESTBase,
  requestParams: ListFillsRequest
): Promise<ListFillsResponse> {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/orders/historical/fills`,
    queryParams: requestParams,
    isPublic: false,
  });
}

export function getOrder(
  this: RESTBase,
  { orderId }: GetOrderRequest
): Promise<GetOrderResponse> {
  return this.request({
    method: 'GET',
    endpoint: `${API_PREFIX}/orders/historical/${orderId}`,
    isPublic: false,
  });
}

export function previewOrder(
  this: RESTBase,
  requestParams: PreviewOrderRequest
): Promise<PreviewOrderResponse> {
  return this.request({
    method: 'POST',
    endpoint: `${API_PREFIX}/orders/preview`,
    bodyParams: requestParams,
    isPublic: false,
  });
}

export function closePosition(
  this: RESTBase,
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