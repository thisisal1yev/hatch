import type { MarketData } from "../model/types";
import { MARKET_DEMO } from "../lib/demo-data";

/**
 * Ecosystem stats for the landing. Currently demo data; async to match the future
 * Supabase aggregate query. Swap the return for a real query here — no caller changes.
 */
export async function getMarketStats(): Promise<MarketData> {
  return MARKET_DEMO;
}
