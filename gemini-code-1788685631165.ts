import { Investor, HoldingPosition, ConsensusAsset } from '../types/intelligence';

export class ConsensusEngine {
  /**
   * Calcula el Conviction Score ponderado por calidad de inversor, peso en cartera y recencia.
   */
  public static calculateConvictionScore(
    positions: { investor: Investor; position: HoldingPosition }[]
  ): number {
    if (!positions || positions.length === 0) return 0;

    let weightedScoreSum = 0;
    let totalWeightSum = 0;

    positions.forEach(({ investor, position }) => {
      // 1. Ponderación por calidad del inversor (0.1 a 1.0)
      const investorQualityWeight = Math.max(0.1, investor.qualityScore / 100);

      // 2. Ponderación por tamaño/peso en su cartera personal
      const portfolioWeightFactor = Math.min(1.5, Math.max(0.5, position.portfolioWeightPct / 5));

      // 3. Multiplicador por tipo de movimiento reciante
      let moveMultiplier = 1.0;
      if (position.moveType === 'INITIATED') moveMultiplier = 1.4;
      if (position.moveType === 'INCREASED') moveMultiplier = 1.2;
      if (position.moveType === 'REDUCED') moveMultiplier = 0.6;
      if (position.moveType === 'EXITED') moveMultiplier = 0.0;

      const baseScore = 70; // Puntuación base por estar en cartera de alta calidad
      const positionScore = baseScore * portfolioWeightFactor * moveMultiplier;

      weightedScoreSum += positionScore * investorQualityWeight;
      totalWeightSum += investorQualityWeight;
    });

    if (totalWeightSum === 0) return 0;

    const rawScore = weightedScoreSum / totalWeightSum;
    // Normalizado de 0 a 100
    return Math.min(100, Math.round(rawScore));
  }

  /**
   * Agrupa posiciones de múltiples inversores en un consenso consolidado por activo.
   */
  public static aggregateConsensus(
    allPositions: { investor: Investor; position: HoldingPosition }[]
  ): Map<string, Partial<ConsensusAsset>> {
    const assetMap = new Map<string, { investor: Investor; position: HoldingPosition }[]>();

    allPositions.forEach((item) => {
      const ticker = item.position.assetTicker;
      if (!assetMap.has(ticker)) {
        assetMap.set(ticker, []);
      }
      assetMap.get(ticker)!.push(item);
    });

    const consensusResults = new Map<string, Partial<ConsensusAsset>>();

    assetMap.forEach((holders, ticker) => {
      const highQualityHolders = holders.filter(h => h.investor.qualityScore >= 75);
      const convictionScore = this.calculateConvictionScore(holders);

      // Determinar flujo de Smart Money
      const increases = holders.filter(h => h.position.moveType === 'INCREASED' || h.position.moveType === 'INITIATED').length;
      const decreases = holders.filter(h => h.position.moveType === 'REDUCED' || h.position.moveType === 'EXITED').length;
      
      let flow: 'ACCUMULATION' | 'DISTRIBUTION' | 'NEUTRAL' = 'NEUTRAL';
      if (increases > decreases) flow = 'ACCUMULATION';
      if (decreases > increases) flow = 'DISTRIBUTION';

      consensusResults.set(ticker, {
        ticker,
        name: holders[0].position.assetName,
        assetType: holders[0].position.assetType,
        highQualityHoldersCount: highQualityHolders.length,
        totalHoldersCount: holders.length,
        convictionScore,
        smartMoneyFlow: flow,
        holders,
        lastUpdated: new Date().toISOString()
      });
    });

    return consensusResults;
  }
}