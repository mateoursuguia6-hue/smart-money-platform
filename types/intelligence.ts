export type FactType = 'FACT' | 'INFERRED_THESIS' | 'OPINION' | 'RUMOR';
export type InvestmentType = 'STOCKS' | 'ETF' | 'BONDS' | 'FUNDS' | 'REIT' | 'CRYPTO' | 'COMMODITIES';
export type ThesisStatus = 'STRONGER' | 'UNCHANGED' | 'WEAKER' | 'BROKEN' | 'INSUFFICIENT_DATA';
export type MoveType = 'INITIATED' | 'INCREASED' | 'REDUCED' | 'EXITED' | 'HELD';

export interface SourceRef {
  id: string;
  name: string;
  url?: string;
  timestamp: string;
  type: FactType;
  confidenceScore: number;
  isVerified: boolean;
}

export interface Investor {
  id: string;
  name: string;
  entityName: string;
  avatarUrl?: string;
  qualityScore: number;
  influenceScore: number;
  category: 'LONG_TERM_VALUE' | 'GROWTH' | 'QUANT' | 'ACTIVIST' | 'MACRO';
  aumUsd?: number;
  lastFilingDate?: string;
  dna: {
    valueFocus: number;
    growthFocus: number;
    macroFocus: number;
    concentration: number;
    longTermHorizon: number;
  };
}

export interface HoldingPosition {
  investorId: string;
  assetTicker: string;
  assetName: string;
  assetType: InvestmentType;
  sharesHeld: number;
  marketValueUsd: number;
  portfolioWeightPct: number;
  moveType: MoveType;
  changePct?: number;
  detectedDate: string;
  convictionLevel: 'HIGH' | 'MEDIUM' | 'LOW';
  sources: SourceRef[];
}

export interface ConsensusAsset {
  ticker: string;
  name: string;
  assetType: InvestmentType;
  sector?: string;
  country?: string;
  highQualityHoldersCount: number;
  totalHoldersCount: number;
  convictionScore: number;
  dataConfidenceScore: number;
  smartMoneyFlow?: 'ACCUMULATION' | 'DISTRIBUTION' | 'NEUTRAL';
  lastUpdated?: string;
  holders: {
    investor: Investor;
    position: HoldingPosition;
  }[];
  thesis: {
    level1Simple: string;
    level2Evidence: string;
    level3ProMetrics: {
      peRatio: number;
      evEbitda: number;
      roic: number;
      revGrowthYoy: number;
    };
    whyAreTheyBuying: string[];
  };
}
