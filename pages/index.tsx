import React, { useState } from 'react';

export default function Home() {
  const [selectedAsset, setSelectedAsset] = useState('NVDA');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8 flex flex-col items-center justify-center font-sans">
      <header className="max-w-4xl w-full mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-emerald-400 mb-2">
          Smart Money Platform
        </h1>
        <p className="text-slate-400">
          Plataforma de inteligencia de inversión institucional y análisis de consenso.
        </p>
      </header>

      <main className="max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-100">NVIDIA Corporation (NVDA)</h2>
            <span className="text-xs text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-800/50 px-2 py-0.5 rounded-full mt-1 inline-block">
              Acumulación Fuerte
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs text-slate-400 block">Conviction Score</span>
            <span className="text-2xl font-bold font-mono text-emerald-400">91/100</span>
          </div>
        </div>

        <section className="space-y-4 text-sm text-slate-300">
          <div className="bg-slate-950/60 p-4 rounded-lg border border-slate-800/80">
            <h3 className="text-xs font-semibold uppercase text-slate-400 mb-1">Tesis Simplificada</h3>
            <p>Los principales inversores del mundo están aumentando exposición debido al dominio en la infraestructura de inteligencia artificial.</p>
          </div>

          <div className="bg-slate-950/60 p-4 rounded-lg border border-slate-800/80">
            <h3 className="text-xs font-semibold uppercase text-slate-400 mb-1">Evidencia Documentada</h3>
            <p>Registros 13F ante la SEC confirman incremento de posición en 8 fondos de primer nivel. Margen operativo en expansión constante.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
