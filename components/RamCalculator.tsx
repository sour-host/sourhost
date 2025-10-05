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
    price: '$12.00',
    ram: '6GB',
    period: '/month',
    players: '20-75 Recommended Players',
    icon: '/skeleton.png',
    description: 'The Best Package for vanilla or slightly modded gameplay.',
    features: [
      '2 CPU Cores',
      'DDoS Protection',
      'NVMe SSD',
      '24/7 Support'
    ],
    cta: 'Choose Base',
    baseUrl: 'https://billing.exphost.net/products/minecraft-basic-tier/base-basic/checkout'
  },
  {
    id: 'creeper',
    name: 'Creeper',
    price: '$16.00',
    ram: '8GB',
    period: '/month',
    players: '75-100 Recommended Players',
    icon: '/creeper.png',
    description: 'Ideal for heavily modded servers and larger communities.',
    features: [
      '2 CPU Cores',
      'DDoS Protection',
      'NVMe SSD',
      '24/7 Support'
    ],
    cta: 'Choose Base',
    baseUrl: 'https://billing.exphost.net/products/minecraft-basic-tier/base-basic/checkout'
  },
  {
    id: 'slime',
    name: 'Slime',
    price: '$20.00',
    ram: '10GB',
    period: '/month',
    players: '100-175 Recommended Players',
    icon: '/slime.png',
    description: 'Ideal for medium-sized to large networks and modpack servers.',
    features: [
      '3 CPU Cores',
      'DDoS Protection',
      'NVMe SSD',
      '24/7 Support'
    ],
    cta: 'Choose Base',
    baseUrl: 'https://billing.exphost.net/products/minecraft-basic-tier/base-basic/checkout'
  },
  {
    id: 'blaze',
    name: 'Blaze',
    price: '$24.00',
    ram: '12GB',
    period: '/month',
    players: '175-225 Recommended Players',
    icon: '/blaze.png',
    description: 'Ultimate performance for large networks and modpack servers.',
    features: [
      '3 CPU Cores',
      'DDoS Protection',
      'NVMe SSD',
      '24/7 Support'
    ],
    cta: 'Choose Base',
    baseUrl: 'https://billing.exphost.net/products/minecraft-basic-tier/base-basic/checkout'
  },
  {
    id: 'ghast',
    name: 'Ghast',
    price: '$32.00',
    ram: '16GB',
    period: '/month',
    players: '225-500 Recommended Players',
    icon: '/ghast.png',
    description: 'Over the top performance, mostly for large networks and modded servers.',
    features: [
      '2 CPU Cores',
      'DDoS Protection',
      'NVMe SSD',
      '24/7 Support'
    ],
    cta: 'Choose Base',
    baseUrl: 'https://billing.exphost.net/products/minecraft-basic-tier/base-basic/checkout'
  },
  {
    id: 'wither',
    name: 'Wither',
    price: '$48.00',
    ram: '24GB',
    period: '/month',
    players: '500+ Recommended Players',
    icon: '/wither.png',
    description: 'Crazy performance, mostly for servers that get large amounts of players.',
    features: [
      '2 CPU Cores',
      'DDoS Protection',
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

  const calculateRecommendedPlan = (): Plan => {
    let baseRAM = 2; // Base RAM for vanilla
    
    // Adjust base RAM based on server type
    switch (serverType) {
      case 'vanilla':
        baseRAM = 2 + (playerCount / 10);
        break;
      case 'optimized':
        baseRAM = 1.5 + (playerCount / 15);
        if (usingOptimizedMods) baseRAM += 1;
        break;
      case 'modded':
        baseRAM = 4 + (playerCount / 8) + (addonCount * 0.5);
        break;
      case 'bedrock':
        baseRAM = 1 + (playerCount / 20);
        break;
    }

    // Add RAM for addons if applicable
    if (serverType !== 'vanilla') {
      baseRAM += addonCount * 0.3;
    }

    const totalRAM = Math.max(2, Math.ceil(baseRAM));

    // Find the appropriate plan based on calculated RAM
    if (totalRAM <= 6) return plans[0]; // Skeleton
    if (totalRAM <= 8) return plans[1]; // Creeper
    if (totalRAM <= 10) return plans[2]; // Slime
    if (totalRAM <= 12) return plans[3]; // Blaze
    if (totalRAM <= 16) return plans[4]; // Ghast
    return plans[5]; // Wither
  };

  const recommendedPlan = calculateRecommendedPlan();

  const serverTypeInfo = {
    vanilla: {
      description: 'Standard Minecraft server with no modifications',
      disabled: false
    },
    optimized: {
      description: 'Servers using performance optimization mods like Paper, Purpur, etc.',
      disabled: false
    },
    modded: {
      description: 'Servers with mods like Forge, Fabric, or modpacks',
      disabled: false
    },
    bedrock: {
      description: 'Bedrock Edition servers (Windows 10, Mobile, Console)',
      disabled: false
    }
  };

  return (
    <div className="mt-20 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Minecraft Server RAM Calculator
          </h1>
          <p className="text-gray-300 text-lg">
            Find the perfect plan for your Minecraft server based on your needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculator Section */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-2xl">
            <div className="space-y-8">
              {/* Server Type Selection */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">
                  Server Type
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {(Object.entries(serverTypeInfo) as [ServerType, any][]).map(([type, info]) => (
                    <button
                      key={type}
                      onClick={() => setServerType(type)}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                        serverType === type
                          ? 'border-blue-500 bg-blue-500/10 text-white'
                          : 'border-gray-600 bg-gray-700/50 text-gray-300 hover:border-gray-500 hover:bg-gray-600/50'
                      } ${info.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={info.disabled}
                    >
                      <div className="text-left">
                        <div className="font-medium capitalize mb-1">{type}</div>
                        <div className="text-sm opacity-80">{info.description}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Player Count Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-semibold text-white">
                    Player Count
                  </h2>
                  <span className="text-2xl font-bold text-blue-400">
                    {playerCount}
                  </span>
                </div>
                <p className="mb-4">The player count is unlimited, this is just a calculator to ensure you get the right plan.</p>
                <input
                  type="range"
                  min="1"
                  max="500"
                  value={playerCount}
                  onChange={(e) => setPlayerCount(parseInt(e.target.value))}
                  className="w-full h-3 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>1</span>
                  <span>250</span>
                  <span>500</span>
                </div>
              </div>

              {/* Addon Counter */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">
                  Server Addons/Plugins
                </h2>
                <div className="flex items-center justify-between bg-gray-700 rounded-xl p-4">
                  <span className="text-gray-300">
                    {serverType === 'vanilla' ? 'Not available for Vanilla' : 'Number of addons/plugins'}
                  </span>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setAddonCount(Math.max(0, addonCount - 1))}
                      disabled={serverType === 'vanilla' || addonCount === 0}
                      className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white font-bold text-xl disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-500 transition-colors"
                    >
                      -
                    </button>
                    <span className="text-2xl font-bold text-white min-w-8 text-center">
                      {addonCount}
                    </span>
                    <button
                      onClick={() => setAddonCount(addonCount + 1)}
                      disabled={serverType === 'vanilla'}
                      className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white font-bold text-xl disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-500 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Optimized Mods Checkbox */}
              {(serverType === 'optimized' || serverType === 'modded') && (
                <div className="bg-gray-700 rounded-xl p-4">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={usingOptimizedMods}
                      onChange={(e) => setUsingOptimizedMods(e.target.checked)}
                      className="w-5 h-5 text-blue-500 bg-gray-600 border-gray-400 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <span className="text-white font-medium">
                      Click if using performance optimization mods
                    </span>
                  </label>
                </div>
              )}

              {/* Current Configuration Summary */}
              <div className="bg-gray-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Your Configuration
                </h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Server Type:</span>
                    <span className="font-medium capitalize">{serverType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Player Count:</span>
                    <span className="font-medium">{playerCount}</span>
                  </div>
                  {serverType !== 'vanilla' && (
                    <div className="flex justify-between">
                      <span>Addons/Plugins:</span>
                      <span className="font-medium">{addonCount}</span>
                    </div>
                  )}
                  {(serverType === 'optimized' || serverType === 'modded') && (
                    <div className="flex justify-between">
                      <span>Optimized Mods:</span>
                      <span className="font-medium">
                        {usingOptimizedMods ? 'Yes' : 'No'}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Recommended Plan Section */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-2xl">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">
                Recommended Plan
              </h2>
              <p className="text-gray-300">
                Based on your server configuration
              </p>
            </div>

            {/* Recommended Plan Card */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-8 text-white mb-6">
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-2">{recommendedPlan.name}</h3>
                <div className="text-4xl font-bold mb-2">{recommendedPlan.ram}</div>
                <div className="text-2xl font-semibold mb-4">
                  {recommendedPlan.price}
                  <span className="text-lg">{recommendedPlan.period}</span>
                </div>
                <p className="text-blue-100 mb-4">{recommendedPlan.players}</p>
                <p className="text-blue-50">{recommendedPlan.description}</p>
              </div>
            </div>

            {/* Plan Features */}
            <div className="bg-gray-700 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                Features Included
              </h3>
              <ul className="space-y-3">
                {recommendedPlan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <a
              href={recommendedPlan.baseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-blue-500 hover:bg-blue-600 text-white text-center font-bold py-4 px-6 rounded-xl transition-colors duration-200 text-lg"
            >
              Choose {recommendedPlan.name}
            </a>

            {/* All Plans Link */}
            <div className="text-center mt-4">
              <a
                href="#plans"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                View all available plans →
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #1761fd;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #1761fd;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}