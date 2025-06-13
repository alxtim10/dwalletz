import { Currency } from "@/interfaces";

export const formatNumberByCurrency = (value: number, currency: Currency): string => {
  const localeMap: Record<Currency, string> = {
    USD: 'en-US',
    EUR: 'de-DE',
    IDR: 'id-ID',
  };

  return value.toLocaleString(localeMap[currency], {
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const convertFromUSD = (usd: number, to: Currency): number => {
  const rates = {
    EUR: 0.93,     // Example: 1 USD = 0.93 EUR
    IDR: 16000,    // Example: 1 USD = 16,000 IDR
    USD: 1
  };

  return Number((usd * rates[to]).toFixed(2));
};