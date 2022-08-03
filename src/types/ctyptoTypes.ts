export interface IStats {
  total: number;
  totalCoins: number;
  totalMarkets: number;
  totalExchanges: number;
  totalMarketCap: string;
  total24hVolume: string;
}

export interface ICoin {
  uuid: string;
  symbol: string;
  name: string;
  color: string;
  iconUrl: string;
  marketCap: string;
  price: string;
  listedAt: number;
  tier: number;
  change: string;
  rank: number;
  sparkline: string[];
  lowVolume: false;
  coinrankingUrl: string;
  "24hVolume": string;
  btcPrice: string;
}

export interface ICoinDetails {
  uuid: string;
  symbol: string;
  name: string;
  description: string;
  color: string;
  iconUrl: string;
  websiteUrl: string;
  links: ILink[];
  supply: {
    confirmed: boolean;
    circulating: string;
    total: string;
  };
  "24hVolume": string;
  marketCap: string;
  price: string;
  btcPrice: string;
  change: string;
  rank: number;
  numberOfMarkets: number;
  numberOfExchanges: number;
  sparkline: string[];
  allTimeHigh: {
    price: string;
    timestamp: number;
  };
  coinrankingUrl: string;
}

export interface ICurrencyHistory {
  status: string;
  data: {
    change: string;
    history: IHistory[];
  };
}

export interface IHistory {
  price: string;
  timestamp: number;
}

export interface ILink {
  name: string;
  url: string;
  type: string;
}

export interface ICurrenciesExchange {
  status: string;
  data: {
    stats: {
      "24hVolume": string;
      total: number;
    };
    exchanges: IExchange[];
  };
}

export interface ICurrenciesResult {
  status: string;
  data: {
    stats: IStats;
    coins: ICoin[];
  };
}

export interface ICurrencyResult {
  status: string;
  data: { coin: ICoinDetails };
}

export interface IQueryHistory {
  coinId: string | undefined;
  timeperiod: string | number;
}

export interface IExchange {
  coinrankingUrl: string;
  uuid: string;
  name: string;
  iconUrl: string;
  numberOfMarkets: number;
  "24hVolume": string;
  rank: number;
  marketShare: string;
  verified: boolean;
  recommended: boolean;
}

export interface IStat {
  title: string;
  value: string | number | JSX.Element;
  icon: JSX.Element;
}
