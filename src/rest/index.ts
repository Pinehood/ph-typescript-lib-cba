import { RESTBase } from '../utils';
import { AccountsAPI } from './accounts';
import { ConvertsAPI } from './converts';
import { FeesAPI } from './fees';
import { FuturesAPI } from './futures';
import { OrdersAPI } from './orders';
import { PaymentsAPI } from './payments';
import { PerpetualsAPI } from './perpetuals';
import { PortfoliosAPI } from './portfolios';
import { ProductsAPI } from './products';
import { PublicAPI } from './public';

export class RESTClient extends RESTBase {
  public readonly accounts: AccountsAPI;
  public readonly converts: ConvertsAPI;
  public readonly fees: FeesAPI;
  public readonly futures: FuturesAPI;
  public readonly orders: OrdersAPI;
  public readonly payments: PaymentsAPI;
  public readonly perpetuals: PerpetualsAPI;
  public readonly portfolios: PortfoliosAPI;
  public readonly products: ProductsAPI;
  public readonly public: PublicAPI;

  constructor(
    key?: string | undefined,
    secret?: string | undefined,
    sandbox?: boolean | undefined
  ) {
    super(key, secret);
    this.accounts = new AccountsAPI(key, secret, sandbox);
    this.converts = new ConvertsAPI(key, secret, sandbox);
    this.fees = new FeesAPI(key, secret, sandbox);
    this.futures = new FuturesAPI(key, secret, sandbox);
    this.orders = new OrdersAPI(key, secret, sandbox);
    this.payments = new PaymentsAPI(key, secret, sandbox);
    this.perpetuals = new PerpetualsAPI(key, secret, sandbox);
    this.portfolios = new PortfoliosAPI(key, secret, sandbox);
    this.products = new ProductsAPI(key, secret, sandbox);
    this.public = new PublicAPI();
  }
}
