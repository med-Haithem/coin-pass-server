export interface Rates {
  [key: string]: number;
}

export interface ConverterResponse {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: Rates;
}
