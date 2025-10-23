// components/PricingTable.tsx
'use client';

import React from 'react';

type Plan = {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  recommendedRam: string;
  recommendedPlayers: string;
  cta?: string;
};

export default function PricingTable({ popularPlanId }: { popularPlanId?: string }) {
  const plans: Plan[] = [
    {
      id: 'basic',
      name: 'Unmetered Basic',
      price: '$9.99',
      description: 'Light vanilla servers — fair-use CPU & RAM.',
      features: [
        'Unmetered RAM',
        'Unmetered CPU Cores',
        '100GB NVMe SSD',
        'DDoS protection',
        'Automated backups (weekly)',
      ],
      recommendedRam: '≈ 4 GB',
      recommendedPlayers: 'Up to ~30 players',
      cta: 'Get Basic',
      baseUrl: 'https://portal.sour.host/',
    },
    {
      id: 'standard',
      name: 'Unmetered Standard',
      price: '$19.99',
      description: 'Best value for lightly-modded servers & plugins.',
      features: [
        'Unmetered RAM & CPU (fair-use, higher priority)',
        'NVMe storage + faster I/O',
        'Priority DDoS & networking',
        'Automated backups (daily)',
      ],
      recommendedRam: '≈ 8 GB',
      recommendedPlayers: 'Up to ~75 players',
      cta: 'Get Standard',
      baseUrl: 'https://portal.sour.host/',
    },
    {
      id: 'pro',
      name: 'Unmetered Pro',
      price: '$24.99',
      description: 'For heavy modpacks and plugin-heavy worlds.',
      features: [
        'Unmetered RAM & CPU (high priority)',
        'Lower density per node (better performance)',
        'Daily backups + snapshot on demand',
        'Priority support',
      ],
      recommendedRam: '≈ 12 GB',
      recommendedPlayers: 'Up to ~150 players (depends on mods)',
      cta: 'Get Pro',
      baseUrl: 'https://portal.sour.host/',
    },
  ];

  return (
    <section id="plans" className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold">Unmetered Minecraft Hosting</h2>
        <p className="text-slate-500 mt-2">No fixed RAM caps — fair-use policies keep performance healthy for everyone.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((p) => {
          const isPopular = popularPlanId === p.id;
          return (
            <div
              key={p.id}
              className={`relative rounded-2xl p-6 flex flex-col justify-between shadow-sm transition-transform transform hover:scale-[1.01]
                ${isPopular ? 'ring-2 ring-offset-2 ring-[#00b72f] bg-gray-800' : 'bg-gray-800'}
                border ${isPopular ? 'border-[#00b72f]' : ''}`}
            >
              {/* Popular badge */}
              {isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-2 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" />
                    </svg>
                    Popular
                  </div>
                </div>
              )}

              <div className="mt-4 pt-6">
                <h3 className="text-xl font-bold text-slate-800 text-center">{p.name}</h3>
                <p className="text-center text-sm text-slate-500 mt-1">{p.description}</p>

                <div className="flex items-baseline justify-center gap-2 mt-6">
                  <span className="text-4xl font-extrabold">{p.price}</span>
                  <span className="text-sm text-slate-500">/mo</span>
                </div>

                <ul className="mt-6 space-y-3">
                  <li className="text-sm text-slate-700"><strong>Recommended RAM:</strong> {p.recommendedRam}</li>
                  <li className="text-sm text-slate-700"><strong>Players (est):</strong> {p.recommendedPlayers}</li>
                </ul>

                <ul className="mt-5 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.172l7.879-7.879a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <a href={p.baseUrl}>
                <button
                  className={`w-full py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2
                    ${isPopular ? 'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-300' : 'bg-slate-900 text-white hover:bg-black focus:ring-slate-300'}`}
                >
                  {p.cta}
                </button>
                </a>
                <p className="text-xs text-slate-400 mt-3 text-center">
                  Fair-use policy applies — sustained resource abuse may be limited or migrated.
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-sm text-slate-500 text-center">
        <strong>Node note:</strong> Mid-tier setup (Dual Xeon, 256GB RAM) — we balance density for consistent performance.
      </div>
    </section>
  );
}
