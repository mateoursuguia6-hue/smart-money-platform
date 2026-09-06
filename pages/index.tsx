import React, { useState } from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-emerald-400 mb-4">
        Smart Money Platform
      </h1>
      <p className="text-slate-400 max-w-md text-center">
        ¡Plataforma desplegada correctamente en Vercel!
      </p>
    </div>
  );
}
