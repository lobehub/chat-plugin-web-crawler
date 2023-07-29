declare module Stock {
  export interface Market {
    region: string;
    status: string;
    status_id: number;
    time_zone: string;
    time_zone_desc?: any;
  }

  export interface Others {
    cyb_switch: boolean;
    pankou_ratio: number;
  }

  export interface Quote {
    amount: number;
    amplitude: number;
    avg_price: number;
    chg: number;
    code: string;
    currency: string;
    current: number;
    current_ext?: any;
    current_year_percent: number;
    delayed: number;
    dividend: number;
    dividend_yield: number;
    eps: number;
    exchange: string;
    float_market_capital: number;
    float_shares: number;
    goodwill_in_net_assets?: any;
    high: number;
    high52w: number;
    is_registration?: any;
    is_registration_desc?: any;
    is_vie?: any;
    is_vie_desc?: any;
    issue_date: number;
    last_close: number;
    limit_down: number;
    limit_up: number;
    lock_set: number;
    lot_size: number;
    low: number;
    low52w: number;
    market_capital: number;
    name: string;
    navps: number;
    no_profit?: any;
    no_profit_desc?: any;
    open: number;
    pb: number;
    pe_forecast: number;
    pe_lyr: number;
    pe_ttm: number;
    percent: number;
    pledge_ratio: number;
    profit: number;
    profit_forecast: number;
    profit_four: number;
    security_status?: any;
    status: number;
    sub_type: string;
    symbol: string;
    tick_size: number;
    time: number;
    timestamp: number;
    timestamp_ext?: any;
    total_shares: number;
    traded_amount_ext?: any;
    turnover_rate: number;
    type: number;
    volume: number;
    volume_ext?: any;
    volume_ratio: number;
    weighted_voting_rights?: any;
    weighted_voting_rights_desc?: any;
  }

  export interface Tag {
    description: string;
    value: number;
  }

  export interface XueqiuStockData {
    market: Market;
    others: Others;
    quote: Quote;
    tags: Tag[];
  }

  export interface XueqiuResponse<T> {
    data: T;
    error_code: number;
    error_description: string;
  }

  export interface Stock {
    code: string;
    name: string;
    enName: string;
    hasexist: string;
    flag?: any;
    type: number;
    stock_id: number;
    ind_id: number;
    ind_name: string;
    ind_color?: any;
    _source: string;
  }

  export interface XueqiuSearchResponse {
    page: number;
    q: string;
    size: number;
    stocks: Stock[];
  }
}
