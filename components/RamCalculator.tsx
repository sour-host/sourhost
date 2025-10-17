// app/page.tsx
'use client';

import { useState } from 'react';

interface Plan {
  id: string;
  name: string;
  price: string;
  ram: string;
  period: string;
  players: string;
  icon: string;
  description: string;
  features: string[];
  cta: string;
  baseUrl: string;
}

const plans: Plan[] = [
    {
      id: 'skeleton',
      name: 'Skeleton',
      price: '$10.50',
      ram: '6GB',
      period: '/month',
      players: '20-75 Recommended Players',
      icon: '/skeleton.png',
      description: 'The Best Package for vanilla or slightly modded gameplay.',
      features: [
        '2 CPU Cores',
        'SourGuard - DDoS Protection',
        'NVMe SSD',
        '24/7 Support'
      ],
      cta: 'Choose Base',
      baseUrl: 'https://billing.exphost.net/products/minecraft-basic-tier/base-basic/checkout'
    },
    {
      id: 'creeper',
      name: 'Creeper',
      price: '$14.00',
      ram: '8GB',
      period: '/month',
      players: '75-100 Recommended Players',
      icon: '/creeper.png',
      description: 'Ideal for heavily modded servers and larger communities.',
      features: [
        '3 CPU Cores',
        'SourGuard - DDoS Protection',
        'NVMe SSD',
        '24/7 Support'
      ],
      cta: 'Choose Base',
      baseUrl: 'https://billing.exphost.net/products/minecraft-basic-tier/base-basic/checkout'
    },
    {
      id: 'slime',
      name: 'Slime',
      price: '$17.50',
      ram: '10GB',
      period: '/month',
      players: '100-175 Recommended Players',
      icon: '/slime.png',
      description: 'Ideal for medium-sized to large networks and modpack servers.',
      features: [
        '3 CPU Cores',
        'SourGuard - DDoS Protection',
        'NVMe SSD',
        '24/7 Support'
      ],
      cta: 'Choose Base',
      baseUrl: 'https://billing.exphost.net/products/minecraft-basic-tier/base-basic/checkout'
    },
    {
      id: 'blaze',
      name: 'Blaze',
      price: '$21.00',
      ram: '12GB',
      period: '/month',
      players: '175-225 Recommended Players',
      icon: '/blaze.png',
      description: 'Ultimate performance for large networks and modpack servers.',
      features: [
        '4 CPU Cores',
        'SourGuard - DDoS Protection',
        'NVMe SSD',
        '24/7 Support'
      ],
      cta: 'Choose Base',
      baseUrl: 'https://billing.exphost.net/products/minecraft-basic-tier/base-basic/checkout'
    },
    {
      id: 'ghast',
      name: 'Ghast',
      price: '$28.00',
      ram: '16GB',
      period: '/month',
      players: '225-500 Recommended Players',
      icon: '/ghast.png',
      description: 'Over the top performance, mostly for large networks and modded servers.',
      features: [
        '4 CPU Cores',
        'SourGuard - DDoS Protection',
        'NVMe SSD',
        '24/7 Support'
      ],
      cta: 'Choose Base',
      baseUrl: 'https://billing.exphost.net/products/minecraft-basic-tier/base-basic/checkout'
    },
    {
      id: 'warden',
      name: 'Warden',
      price: '$42.00',
      ram: '24GB',
      period: '/month',
      players: '500+ Recommended Players',
      icon: '/warden.png',
      description: 'Crazy performance, mostly for servers that get large amounts of players.',
      features: [
        '5 CPU Cores',
        'SourGuard - DDoS Protection',
        'NVMe SSD',
        '24/7 Support'
      ],
      cta: 'Choose Base',
      baseUrl: 'https://billing.exphost.net/products/minecraft-basic-tier/base-basic/checkout'
    },
  ];

type ServerType = 'vanilla' | 'optimized' | 'modded' | 'bedrock';

export default function RAMCalculator() {
  const [serverType, setServerType] = useState<ServerType>('vanilla');
  const [playerCount, setPlayerCount] = useState(1);
  const [addonCount, setAddonCount] = useState(0);
  const [usingOptimizedMods, setUsingOptimizedMods] = useState(false);
  const [cloudflareMitigation, setCloudflareMitigation] = useState(false); // ✅ NEW

  const calculateRecommendedPlan = (): Plan => {
    let baseRAM = 2;
    switch (serverType) {
      case 'vanilla': baseRAM = 2 + playerCount / 10; break;
      case 'optimized': baseRAM = 1.5 + playerCount / 15; if (usingOptimizedMods) baseRAM += 1; break;
      case 'modded': baseRAM = 4 + playerCount / 8 + addonCount * 0.5; break;
      case 'bedrock': baseRAM = 1 + playerCount / 20; break;
    }
    if (serverType !== 'vanilla') baseRAM += addonCount * 0.3;
    const totalRAM = Math.max(2, Math.ceil(baseRAM));
    if (totalRAM <= 6) return plans[0];
    if (totalRAM <= 8) return plans[1];
    if (totalRAM <= 10) return plans[2];
    if (totalRAM <= 12) return plans[3];
    if (totalRAM <= 16) return plans[4];
    return plans[5];
  };

  const recommendedPlan = calculateRecommendedPlan();

  const serverTypeInfo = {
    vanilla: { description: 'Standard Minecraft server with no modifications', disabled: false },
    optimized: { description: 'Servers using Paper/Purpur/etc.', disabled: false },
    modded: { description: 'Servers running Forge/Fabric/Modpacks', disabled: false },
    bedrock: { description: 'Bedrock Edition servers', disabled: false },
  };

  return (
    <div className="mt-20 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Minecraft Server RAM Calculator</h1>
          <p className="text-gray-300 text-lg">Find the perfect plan for your Minecraft server based on your needs</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT: Calculator */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-2xl">
            <div className="space-y-8">

              {/* ==== Server type buttons ==== */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Server Type</h2>
                <div className="grid grid-cols-2 gap-4">
                  {(Object.entries(serverTypeInfo) as [ServerType, any][]).map(([type, info]) => (
                    <button
                      key={type}
                      onClick={() => setServerType(type)}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                        serverType === type ? 'border-[#00b72f] bg-[#00b72f]/10 text-white' :
                        'border-gray-600 bg-gray-700/50 text-gray-300 hover:border-gray-500 hover:bg-gray-600/50'
                      }`}
                    >
                      <div className="text-left">
                        <div className="font-medium capitalize mb-1">{type}</div>
                        <div className="text-sm opacity-80">{info.description}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* ==== Player Slider ==== */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-semibold text-white">Player Count</h2>
                  <span className="text-2xl font-bold text-[#00b72f]/75">{playerCount}</span>
                </div>
                <input type="range" min="1" max="500" value={playerCount}
                  onChange={(e) => setPlayerCount(parseInt(e.target.value))}
                  className="w-full h-3 bg-gray-600 rounded-lg appearance-none cursor-pointer slider" />
              </div>

              {/* ==== Addons ==== */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Server Addons/Plugins</h2>
                <div className="flex items-center justify-between bg-gray-700 rounded-xl p-4">
                  <span className="text-gray-300">{serverType === 'vanilla' ? 'Not available for Vanilla' : 'Number of addons/plugins'}</span>
                  <div className="flex items-center space-x-4">
                    <button onClick={() => setAddonCount(Math.max(0, addonCount - 1))}
                      disabled={serverType === 'vanilla' || addonCount === 0}
                      className="w-10 h-10 rounded-full bg-gray-600 text-white font-bold">-</button>
                    <span className="text-2xl font-bold text-white">{addonCount}</span>
                    <button onClick={() => setAddonCount(addonCount + 1)} disabled={serverType === 'vanilla'}
                      className="w-10 h-10 rounded-full bg-gray-600 text-white font-bold">+</button>
                  </div>
                </div>
              </div>

              {/* ==== Optimized Mods ==== */}
              {(serverType === 'optimized' || serverType === 'modded') && (
                <div className="bg-gray-700 rounded-xl p-4">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" checked={usingOptimizedMods}
                      onChange={(e) => setUsingOptimizedMods(e.target.checked)}
                      className="w-5 h-5 text-[#00b72f]" />
                    <span className="text-white font-medium">Using performance optimization mods</span>
                  </label>
                </div>
              )}

              {/* ==== Cloudflare Add-on ==== */}
              <div className="bg-gray-700 rounded-xl p-4">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={cloudflareMitigation}
                    onChange={(e) => setCloudflareMitigation(e.target.checked)}
                    className="w-5 h-5 text-[#00b72f]"
                  />
                  <span className="text-white font-medium">Cloudflare DDoS Mitigation (+$25/mo)</span>
                </label>
              </div>

            </div>
          </div>

          {/* RIGHT: Recommended Plan */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-2xl">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Recommended Plan</h2>
            </div>

            {/* === Plan box === */}
            <div className="bg-gradient-to-br from-[#00b72f] to-[#00b72f] rounded-xl p-8 text-white mb-6">
              <h3 className="text-3xl font-bold mb-2">{recommendedPlan.name}</h3>
              <div className="text-4xl font-bold mb-2">{recommendedPlan.ram}</div>

              {/* ===== PRICE SECTION WITH BREAKDOWN ===== */}
              {!cloudflareMitigation ? (
                <div className="text-2xl font-semibold mb-4">
                  {recommendedPlan.price}<span className="text-lg">{recommendedPlan.period}</span>
                </div>
              ) : (
                <div className="bg-white/15 rounded-lg p-4 text-left space-y-2 mb-4">
                  <div className="flex justify-between"><span>Base Plan</span><span>{recommendedPlan.price}</span></div>
                  <div className="flex justify-between"><span>Cloudflare Mitigation</span><span>+$25.00</span></div>
                  <hr className="border-white/30" />
                  <div className="flex justify-between font-bold text-xl">
                    <span>Total</span>
                    <span>
                      {(() => {
                        const base = parseFloat(recommendedPlan.price.replace('$',''));
                        return `$${(base + 25).toFixed(2)}`;
                      })()}
                      <span className="text-lg">/month</span>
                    </span>
                  </div>
                </div>
              )}

              <p className="text-green-100 mb-4">{recommendedPlan.players}</p>
              <p className="text-green-50">{recommendedPlan.description}</p>
            </div>

            {/* === Features === */}
            <div className="bg-gray-700 rounded-xl p-6 mb-6">
              <ul className="space-y-3">
                {recommendedPlan.features.map((f, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-[#00b72f] mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <a href={recommendedPlan.baseUrl} target="_blank" className="block w-full bg-[#00b72f] text-white py-4 rounded-xl text-lg font-bold">
              Choose {recommendedPlan.name}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
