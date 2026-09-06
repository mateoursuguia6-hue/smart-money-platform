import React, { useState } from 'react';
import { ConsensusAsset, FactType } from '../types/intelligence';

// Datos de demostración estructurados con estricta evidencia
const SAMPLE_CONSENSUS: ConsensusAsset[] = [
  {
    ticker: 'NVDA',
    name: 'NVIDIA Corporation',
    assetType: 'STOCKS',
    sector: 'Semiconductores',
    country: 'Estados Unidos',
    highQualityHoldersCount: 14,
    totalHoldersCount: 18,
    convictionScore: 91,
    dataConfidenceScore: 98,
    smartMoneyFlow: 'ACCUMULATION',
    lastUpdated: '2026-09-01T10:00:00Z',
    holders: [],
    thesis: {
      level1Simple: 'Los mejores inversores del mundo están acumulando esta empresa porque domina la infraestructura global de inteligencia artificial.',
      level2Evidence: 'Filings 13F confirmados muestran incremento de posición en 8 fondos de primer nivel. Entrevistas públicas coinciden en la expansión sostenida de margen operativo.',
      level3ProMetrics: {
        peRatio: 38.5,
        evEbitda: 31.2,
        roic: 54.1,
        revGrowthYoy: 78.4,
      },
      whyAreTheyBuying: [
        'Ventaja competitiva (moat) en ecosistema de software CUDA y chips Blackwell.',
        'Crecimiento acelerado del gasto en capital (CapEx) en centros de datos a nivel global.',
        'Flujo de caja libre con niveles récord de conversión.'
      ],
      whyNotRisks: [
        'Riesgo geopolítico y restricciones de exportación en la cadena de suministro.',
        'Alta concentración de ingresos en pocos clientes gigantes tecnológicos.'
      ],
      whatWouldChangeMind: [
        'Caída sostenida en los presupuestos CapEx de clientes Big Tech.',
        'Pérdida de cuota de mercado frente a soluciones de silicio personalizadas (ASICs).'
      ],
      status: 'STRONGER'
    }
  },
  {
    ticker: 'AAPL',
    name: 'Apple Inc.',
    assetType: 'STOCKS',
    sector: 'Tecnología de Consumo',
    country: 'Estados Unidos',
    highQualityHoldersCount: 11,
    totalHoldersCount: 15,
    convictionScore: 84,
    dataConfidenceScore: 95,
    smartMoneyFlow: 'NEUTRAL',
    lastUpdated: '2026-09-02T14:30:00Z',
    holders: [],
    thesis: {
      level1Simple: 'Es la mayor posición histórica de grandes inversores de valor debido a la fuerza de su marca y recompra masiva de acciones.',
      level2Evidence: 'Documentación pública 13F indica retención estable a largo plazo con ligeras reducciones estratégicas para rebalanceo de liquidez.',
      level3ProMetrics: {
        peRatio: 29.1,
        evEbitda: 22.4,
        roic: 58.9,
        revGrowthYoy: 6.2,
      },
      whyAreTheyBuying: [
        'Generación inigualable de flujo de caja libre rebañado en recompras de acciones.',
        'Ecosistema de servicios con altos márgenes e ingresos recurrentes.'
      ],
      whyNotRisks: [
        'Madurez del mercado global de smartphones y ciclos de renovación más lentos.',
        'Presión regulatoria en App Store en múltiples jurisdicciones.'
      ],
      whatWouldChangeMind: [
        'Desaceleración continuada en el segmento de servicios.',
        'Impacto severo de decisiones antimonopolio sobre el modelo de negocio.'
      ],
      status: 'UNCHANGED'
    }
  }
];

export const SmartMoneyApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'HOME' | 'CONSENSUS' | 'SOURCES'>('HOME');
  const [detailLevel, setDetailLevel] = useState<1 | 2 | 3>(1);
  const [selectedAsset, setSelectedAsset] = useState<ConsensusAsset | null>(SAMPLE_CONSENSUS[0]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      {/* Encabezado Principal Premium */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center font-bold text-slate-950">
              S
            </div>
            <span className="font-bold text-lg tracking-wide bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              SMART MONEY INTELLIGENCE
            </span>
          </div>

          {/* Selector de Nivel de Profundidad */}
          <div className="flex bg-slate-800/80 p-1 rounded-lg border border-slate-700 text-xs font-medium">
            <button
              onClick={() => setDetailLevel(1)}
              className={`px-3 py-1.5 rounded-md transition ${detailLevel === 1 ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'}`}
            >
              Nivel 1: Simple
            </button>
            <button
              onClick={() => setDetailLevel(2)}
              className={`px-3 py-1.5 rounded-md transition ${detailLevel === 2 ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'}`}
            >
              Nivel 2: Evidencia
            </button>
            <button
              onClick={() => setDetailLevel(3)}
              className={`px-3 py-1.5 rounded-md transition ${detailLevel === 3 ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'}`}
            >
              Nivel 3: Pro
            </button>
          </div>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Panel Izquierdo: Lista de Consenso de Inversores */}
        <section className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-tight text-slate-100">
              TOP INVESTOR CONSENSUS
            </h2>
            <span className="text-xs bg-slate-800 text-slate-400 border border-slate-700 px-2 py-1 rounded-full">
              Basado en evidencia pública
            </span>
          </div>

          <div className="space-y-3">
            {SAMPLE_CONSENSUS.map((asset) => (
              <div
                key={asset.ticker}
                onClick={() => setSelectedAsset(asset)}
                className={`p-4 rounded-xl border cursor-pointer transition ${
                  selectedAsset?.ticker === asset.ticker
                    ? 'bg-slate-900 border-emerald-500/50 shadow-lg shadow-emerald-500/5'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-lg text-emerald-400">{asset.ticker}</span>
                      <span className="text-xs text-slate-400">{asset.name}</span>
                    </div>
                    <span className="text-xs font-mono text-slate-500">{asset.sector}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-slate-200">
                      Score: <span className="text-emerald-400">{asset.convictionScore}/100</span>
                    </div>
                    <span className="text-[10px] text-slate-400 block">
                      {asset.highQualityHoldersCount} inversores de alta calidad
                    </span>
                  </div>
                </div>

                {/* Vista previa simplificada para principiantes */}
                <p className="text-xs text-slate-300 line-clamp-2 mt-2">
                  {asset.thesis.level1Simple}
                </p>

                <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    Flujo: <strong className="text-slate-200">{asset.smartMoneyFlow}</strong>
                  </span>
                  <span className="text-slate-500">
                    Confianza Datos: {asset.dataConfidenceScore}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Panel Derecho: Inspección Profunda (Deep Dive) */}
        <section className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
          {selectedAsset ? (
            <div className="space-y-6">
              
              {/* Cabecera del Activo Seleccionado */}
              <div className="flex justify-between items-start border-b border-slate-800 pb-4">
                <div>
                  <div className="flex items-center space-x-3">
                    <h1 className="text-3xl font-extrabold text-slate-100">{selectedAsset.ticker}</h1>
                    <span className="text-sm bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700">
                      {selectedAsset.name}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    {selectedAsset.sector} • {selectedAsset.country}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 block">Estado de la Tesis</span>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded">
                    {selectedAsset.thesis.status}
                  </span>
                </div>
              </div>

              {/* RENDERIZADO SEGÚN NIVEL SELECCIONADO */}

              {/* NIVEL 1: PRINCIPIANTE */}
              {detailLevel === 1 && (
                <div className="space-y-4">
                  <div className="bg-slate-950/60 border border-slate-800 p-4 rounded-xl">
                    <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
                      ¿Por qué es relevante? (Resumen Sencillo)
                    </h3>
                    <p className="text-sm text-slate-200 leading-relaxed">
                      {selectedAsset.thesis.level1Simple}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-950/40 border border-slate-800 p-4 rounded-xl">
                      <h4 className="text-xs font-bold text-emerald-400 mb-2">¿Por qué están comprando?</h4>
                      <ul className="text-xs space-y-1.5 text-slate-300 list-disc list-inside">
                        {selectedAsset.thesis.whyAreTheyBuying.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-slate-950/40 border border-slate-800 p-4 rounded-xl">
                      <h4 className="text-xs font-bold text-rose-400 mb-2">¿Cuáles son los principales riesgos?</h4>
                      <ul className="text-xs space-y-1.5 text-slate-300 list-disc list-inside">
                        {selectedAsset.thesis.whyNotRisks.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* NIVEL 2: EVIDENCIA Y FUENTES */}
              {detailLevel === 2 && (
                <div className="space-y-4">
                  <div className="bg-slate-950/60 border border-slate-800 p-4 rounded-xl">
                    <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
                      Evidencia Documentada y Registros
                    </h3>
                    <p className="text-sm text-slate-200 leading-relaxed">
                      {selectedAsset.thesis.level2Evidence}
                    </p>
                  </div>

                  <div className="bg-slate-950/40 border border-slate-800 p-4 rounded-xl space-y-2">
                    <h4 className="text-xs font-bold text-slate-300">¿Qué hechos cambiarían la tesis?</h4>
                    <ul className="text-xs space-y-1 text-slate-400 list-disc list-inside">
                      {selectedAsset.thesis.whatWouldChangeMind.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* NIVEL 3: PROFESIONAL */}
              {detailLevel === 3 && (
                <div className="space-y-4">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Métricas Fundamentales e Indicadores Profesionales
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="bg-slate-950/80 border border-slate-800 p-3 rounded-lg text-center">
                      <span className="text-[10px] text-slate-500 block">P/E Ratio</span>
                      <span className="text-lg font-mono font-bold text-slate-200">
                        {selectedAsset.thesis.level3ProMetrics.peRatio ?? 'N/A'}
                      </span>
                    </div>
                    <div className="bg-slate-950/80 border border-slate-800 p-3 rounded-lg text-center">
                      <span className="text-[10px] text-slate-500 block">EV / EBITDA</span>
                      <span className="text-lg font-mono font-bold text-slate-200">
                        {selectedAsset.thesis.level3ProMetrics.evEbitda ?? 'N/A'}
                      </span>
                    </div>
                    <div className="bg-slate-950/80 border border-slate-800 p-3 rounded-lg text-center">
                      <span className="text-[10px] text-slate-500 block">ROIC</span>
                      <span className="text-lg font-mono font-bold text-emerald-400">
                        {selectedAsset.thesis.level3ProMetrics.roic}%
                      </span>
                    </div>
                    <div className="bg-slate-950/80 border border-slate-800 p-3 rounded-lg text-center">
                      <span className="text-[10px] text-slate-500 block">Crecimiento Rev. YoY</span>
                      <span className="text-lg font-mono font-bold text-emerald-400">
                        {selectedAsset.thesis.level3ProMetrics.revGrowthYoy}%
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Aviso Legal Estricto de Transparencia */}
              <div className="p-3 rounded-lg bg-slate-950/40 border border-slate-800/80 text-[11px] text-slate-500 leading-normal">
                <strong>Aviso de Rigor:</strong> La información mostrada proviene de registros públicos y documentos regulatorios (SEC Filings, estados financieros auditados). No constituye una recomendación directa de compra ni promesa de rentabilidad.
              </div>

            </div>
          ) : (
            <div className="text-center py-12 text-slate-500 text-sm">
              Selecciona un activo para ver el análisis de consenso.
            </div>
          )}
        </section>

      </main>
    </div>
  );
};