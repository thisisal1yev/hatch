import type { Stage } from "@/entities/job";

export interface StageComp {
  stage: Stage;
  cashMinUZS: number;
  cashMaxUZS: number;
  cashMinUSD: number;
  cashMaxUSD: number;
  /** Equity offered, in percent. */
  equityMin: number;
  equityMax: number;
}

export interface Sector {
  name: string;
  /** Share of the ecosystem, 0..1. */
  share: number;
}

export interface EcosystemStats {
  hiringStartups: number;
  openRoles: number;
  totalFundingUSD: number;
}

export interface MarketData {
  stats: EcosystemStats;
  byStage: StageComp[];
  sectors: Sector[];
  sampleLabel: string;
  updatedNote: string;
}
