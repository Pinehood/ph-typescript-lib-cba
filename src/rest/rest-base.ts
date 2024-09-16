import fetch, { Headers, RequestInit, Response } from 'node-fetch';
import { BASE_URL, USER_AGENT } from '../constants';
import { token } from '../jwt-generator';
import { RequestOptions } from './types/request-types';
import { handleException } from './errors';

export class RESTBase {
  private readonly apiKey: string | undefined;
  private readonly apiSecret: string | undefined;

  constructor(key?: string, secret?: string) {
    this.apiKey = key;
    this.apiSecret = secret;
  }

  request(options: RequestOptions): Promise<any> {
    const { method, endpoint, isPublic } = options;
    let { queryParams, bodyParams } = options;
    queryParams = queryParams ? this.filter(queryParams) : {};
    if (bodyParams !== undefined) {
      bodyParams = bodyParams ? this.filter(bodyParams) : {};
    }
    return this.prepare(method, endpoint, queryParams, bodyParams, isPublic);
  }

  private prepare(
    httpMethod: string,
    urlPath: string,
    queryParams?: Record<string, any>,
    bodyParams?: Record<string, any>,
    isPublic?: boolean
  ) {
    const headers: Headers = this.headers(httpMethod, urlPath, isPublic);
    const requestOptions: RequestInit = {
      method: httpMethod,
      headers: headers,
      body: JSON.stringify(bodyParams),
    };
    const queryString = this.query(queryParams);
    const url = `https://${BASE_URL}${urlPath}${queryString}`;
    return this.send(requestOptions, url);
  }

  private async send(requestOptions: RequestInit, url: string) {
    const response: Response = await fetch(url, requestOptions);
    const responseText = await response.text();
    handleException(response, responseText, response.statusText);
    return responseText;
  }

  private headers(httpMethod: string, urlPath: string, isPublic?: boolean) {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('User-Agent', USER_AGENT);
    if (this.apiKey !== undefined && this.apiSecret !== undefined) {
      headers.append(
        'Authorization',
        `Bearer ${token(httpMethod, urlPath, this.apiKey, this.apiSecret)}`
      );
    } else if (isPublic == undefined || isPublic == false) {
      throw new Error(
        'Attempting to access authenticated endpoint with invalid API_KEY or API_SECRET.'
      );
    }
    return headers;
  }

  private filter(data: Record<string, any>) {
    const filteredParams: Record<string, any> = {};
    for (const key in data) {
      if (data[key] !== undefined) {
        filteredParams[key] = data[key];
      }
    }
    return filteredParams;
  }

  private query(queryParams?: Record<string, any>): string {
    if (!queryParams || Object.keys(queryParams).length === 0) {
      return '';
    }
    const queryString = Object.entries(queryParams)
      .flatMap(([key, value]) => {
        if (Array.isArray(value)) {
          return value.map(
            (item) => `${encodeURIComponent(key)}=${encodeURIComponent(item)}`
          );
        } else {
          return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        }
      })
      .join('&');
    return `?${queryString}`;
  }
}
