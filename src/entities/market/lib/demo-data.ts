import type { MarketData } from "../model/types";

/** Constant soʻm/USD rate used for every derived USD figure on the landing. */
export const USD_RATE = 12_600;

const usd = (uzs: number) => Math.round(uzs / USD_RATE);

export const MARKET_DEMO: MarketData = {
  stats: { hiringStartups: 58, openRoles: 210, totalFundingUSD: 94_000_000 },
  byStage: [
    {
      stage: "pre-seed",
      cashMinUZS: 8_000_000,
      cashMaxUZS: 14_000_000,
      cashMinUSD: usd(8_000_000),
      cashMaxUSD: usd(14_000_000),
      equityMin: 1,
      equityMax: 3,
    },
    {
      stage: "seed",
      cashMinUZS: 12_000_000,
      cashMaxUZS: 20_000_000,
      cashMinUSD: usd(12_000_000),
      cashMaxUSD: usd(20_000_000),
      equityMin: 0.5,
      equityMax: 2,
    },
    {
      stage: "series-a",
      cashMinUZS: 20_000_000,
      cashMaxUZS: 35_000_000,
      cashMinUSD: usd(20_000_000),
      cashMaxUSD: usd(35_000_000),
      equityMin: 0.1,
      equityMax: 0.5,
    },
    {
      stage: "series-b+",
      cashMinUZS: 30_000_000,
      cashMaxUZS: 55_000_000,
      cashMinUSD: usd(30_000_000),
      cashMaxUSD: usd(55_000_000),
      equityMin: 0.05,
      equityMax: 0.2,
    },
  ],
  sectors: [
    { name: "Fintech", share: 0.3 },
    { name: "E-commerce", share: 0.22 },
    { name: "Edtech", share: 0.18 },
    { name: "Logistics", share: 0.16 },
    { name: "Healthtech", share: 0.14 },
  ],
  sampleLabel: "Namuna maʼlumotlar",
  updatedNote: "toʻliq baza tez orada",
};
