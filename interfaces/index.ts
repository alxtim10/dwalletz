export interface SelectedCoins {
  id: string,
  name: string;
  image: string,
  symbol: string,
  current_price: number
}

export interface CryptoAsset {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number | null;
  ath: number;
  ath_change_percentage: number;
  ath_date: string; // ISO 8601 date string
  atl: number;
  roi: any;
  atl_change_percentage: number;
  atl_date: string; //_
  last_updated: string;
}

export interface UserAsset {
  id: string;
  symbol: string;
  name: string;
  image: string;
  amount: number;
}

export type Currency = 'EUR' | 'IDR' | 'USD';