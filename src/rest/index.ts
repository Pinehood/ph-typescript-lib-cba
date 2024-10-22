import { RESTBase } from './utils';
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

  constructor(key?: string | undefined, secret?: string | undefined) {
    super(key, secret);
    this.accounts = new AccountsAPI(key, secret);
    this.converts = new ConvertsAPI(key, secret);
    this.fees = new FeesAPI(key, secret);
    this.futures = new FuturesAPI(key, secret);
    this.orders = new OrdersAPI(key, secret);
    this.payments = new PaymentsAPI(key, secret);
    this.perpetuals = new PerpetualsAPI(key, secret);
    this.portfolios = new PortfoliosAPI(key, secret);
    this.products = new ProductsAPI(key, secret);
    this.public = new PublicAPI();
  }
}
