TypeScript
import React, { useState } from 'react';

export default function Home() {
  const [selectedTicker, setSelectedTicker] = useState('NVDA');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#020617', color: '#f8fafc', padding: '2rem', fontFamily: 'sans-serif' }}>
      <header style={{ maxWidth: '56rem', margin: '0 auto 2rem auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#34d399', marginBottom: '0.5rem' }}>
          Smart Money Platform
        </h1>
        <p style={{ color: '#94a3b8' }}>
          Plataforma de inteligencia de inversión institucional y análisis de consenso.
        </p>
      </header>

      <main style={{ maxWidth: '56rem', margin: '0 auto', backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '0.75rem', padding: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#f1f5f9', margin: 0 }}>
              NVIDIA Corporation ({selectedTicker})
            </h2>
            <span style={{ fontSize: '0.75rem', color: '#34d399', backgroundColor: '#022c22', border: '1px solid #065f46', padding: '0.125rem 0.5rem', borderRadius: '9999px', marginTop: '0.25rem', display: 'inline-block' }}>
              Acumulación Fuerte
            </span>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'block' }}>Conviction Score</span>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#34d399' }}>91/100</span>
          </div>
        </div>

        <section style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.875rem', color: '#cbd5e1' }}>
          <div style={{ backgroundColor: '#020617', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #1e293b' }}>
            <h3 style={{ fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', color: '#94a3b8', margin: '0 0 0.25rem 0' }}>Tesis Simplificada</h3>
            <p style={{ margin: 0 }}>Los mejores inversores institucionales están acumulando esta empresa debido a su dominio en infraestructura de inteligencia artificial.</p>
          </div>

          <div style={{ backgroundColor: '#020617', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #1e293b' }}>
            <h3 style={{ fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', color: '#94a3b8', margin: '0 0 0.25rem 0' }}>Evidencia Documentada</h3>
            <p style={{ margin: 0 }}>Registros oficiales 13F ante la SEC confirman incremento de posición en 8 fondos de primer nivel.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
