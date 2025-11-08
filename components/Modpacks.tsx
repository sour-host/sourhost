'use client';
import { useState } from 'react';

// Define types for our data structures
interface Plan {
  ram: number | string;
  price: number | string;
  players: string;
  support: string;
  ssd: string;
  backup: string;
  mods: string;
  setup: string;
}

interface HostingProvider {
  name: string;
  logo: string;
  color: string;
  textColor: string;
  borderColor: string;
  plans: {
    starter: Plan;
    standard: Plan;
    advanced: Plan;
    professional: Plan;
  };
}

type PlanType = 'starter' | 'standard' | 'advanced' | 'professional';
type FeatureKey = keyof Plan;

const HostingComparison = () => {
  const [selectedPlan, setSelectedPlan] = useState<PlanType>('standard');

  const hostingProviders: HostingProvider[] = [
    {
      name: 'Aeplo Host',
      logo: '/aeplo.png',
      color: 'from-gray-900 to-gray-900',
      textColor: 'text-[#00b72f]',
      borderColor: 'border-[#00b72f]',
      plans: {
        starter: { ram: 2, price: 5, players: '10', support: '24/7', ssd: 'NVMe', backup: 'Daily', mods: '✓', setup: 'Instant' },
        standard: { ram: 'Unmetered', price: '$9.99', players: 'Unlimited', support: '24/7', ssd: 'NVMe', backup: '2', mods: '✓', setup: 'Instant' },
        advanced: { ram: 8, price: 20, players: '50', support: '24/7', ssd: 'NVMe', backup: 'Daily', mods: '✓', setup: 'Instant' },
        professional: { ram: 16, price: 35, players: '100', support: '24/7', ssd: 'NVMe', backup: 'Daily', mods: '✓', setup: 'Instant' }
      }
    },
    {
      name: 'Shockbyte',
      logo: '/shockbyte-logo.png',
      color: 'from-gray-900 to-gray-900',
      textColor: 'text-orange-400',
      borderColor: 'border-orange-500',
      plans: {
        starter: { ram: 2, price: 5.6, players: '10', support: '24/7', ssd: 'SSD', backup: 'Daily', mods: '✓', setup: 'Instant' },
        standard: { ram: '6GB Plan', price: '$16.79', players: 'Unlimited', support: '24/7', ssd: 'SSD', backup: 'On Request', mods: '✓', setup: 'Instant' },
        advanced: { ram: 8, price: 22.4, players: '50', support: '24/7', ssd: 'SSD', backup: 'Daily', mods: '✓', setup: 'Instant' },
        professional: { ram: 16, price: 39.2, players: '100', support: '24/7', ssd: 'SSD', backup: 'Daily', mods: '✓', setup: 'Instant' }
      }
    },
    {
      name: 'BisectHosting',
      logo: '/bisecthosting-logo.png',
      color: 'from-gray-900 to-gray-900',
      textColor: 'text-purple-400',
      borderColor: 'border-purple-500',
      plans: {
        starter: { ram: 2, price: 7.99, players: '8', support: '24/7', ssd: 'SSD', backup: 'Weekly', mods: '✓', setup: 'Instant' },
        standard: { ram: '6GB Plan', price: '$29.94', players: 'Unlimited', support: '24/7', ssd: 'SSD', backup: 'On Request', mods: '✓', setup: 'Instant' },
        advanced: { ram: 8, price: 31.99, players: '40', support: '24/7', ssd: 'SSD', backup: 'Weekly', mods: '✓', setup: 'Instant' },
        professional: { ram: 16, price: 55.99, players: '80', support: '24/7', ssd: 'SSD', backup: 'Weekly', mods: '✓', setup: 'Instant' }
      }
    },
    {
      name: 'Wise Hosting',
      logo: '/wisehosting-logo.png',
      color: 'from-gray-900 to-gray-900',
      textColor: 'text-indigo-400',
      borderColor: 'border-indigo-500',
      plans: {
        starter: { ram: 2, price: 6, players: '10', support: 'Business', ssd: 'SSD', backup: 'Daily', mods: '✓', setup: 'Instant' },
        standard: { ram: '6GB Plan', price: '$18.99', players: 'Unlimited', support: '24/7', ssd: 'SSD', backup: 'On Request', mods: '✓', setup: 'Instant' },
        advanced: { ram: 8, price: 24, players: '50', support: 'Business', ssd: 'SSD', backup: 'Daily', mods: '✓', setup: 'Instant' },
        professional: { ram: 16, price: 40, players: '100', support: 'Business', ssd: 'SSD', backup: 'Daily', mods: '✓', setup: 'Instant' }
      }
    }
  ];

  const planNames: Record<PlanType, string> = {
    starter: 'Starter',
    standard: 'Standard',
    advanced: 'Advanced',
    professional: 'Professional'
  };

  const features: Array<{ key: FeatureKey; label: string; unit: string; highlight: boolean }> = [
    { key: 'ram', label: 'RAM', unit: '', highlight: true },
    { key: 'price', label: 'Price', unit: '/mo', highlight: true },
    { key: 'players', label: 'Slots', unit: '', highlight: false },
    { key: 'support', label: 'Support', unit: '', highlight: false },
    { key: 'ssd', label: 'Storage', unit: '', highlight: false },
    { key: 'backup', label: 'Backups', unit: '', highlight: false },
    { key: 'mods', label: 'Mod Support', unit: '', highlight: false },
    { key: 'setup', label: 'Setup Time', unit: '', highlight: false }
  ];

  const getBestValue = (featureKey: FeatureKey): number | string | null => {
    const values = hostingProviders.map(provider => {
      const value = provider.plans[selectedPlan][featureKey];
      if (typeof value === 'string') return value;
      if (typeof value === 'number') return value;
      return value === '✓' ? 1 : 0;
    });
    
    if (featureKey === 'price') return Math.min(...values.filter(v => typeof v === 'number') as number[]);
    if (featureKey === 'ram' || featureKey === 'players') return Math.max(...values.filter(v => typeof v === 'number') as number[]);
    return null;
  };

  const isBestValue = (provider: HostingProvider, featureKey: FeatureKey): boolean => {
    const bestValue = getBestValue(featureKey);
    const value = provider.plans[selectedPlan][featureKey];
    
    if (featureKey === 'price') return value === bestValue;
    if (featureKey === 'ram' || featureKey === 'players') return value === bestValue;
    if (featureKey === 'support') return value === '24/7' || value === 'Business';
    if (featureKey === 'ssd') return value === 'NVMe';
    if (featureKey === 'backup') return value === 'Daily';
    return value === '✓' || value === 'Instant';
  };

  return (
    <div className="mt-20 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">How We Compare</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Compare the biggest Minecraft hosting providers to us and see how we're more affordable, more efficient, and just better.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white/10 rounded-lg overflow-hidden shadow-xl">
          {/* Desktop Table */}
          <div className="hidden lg:block">
            <table className="w-full">
              <thead>
                <tr className="bg-white/15">
                  <th className="p-4 text-left w-48">Feature</th>
                  {hostingProviders.map((provider, index) => (
                    <th key={provider.name} className="p-4 text-center">
                      <div className={`flex flex-col items-center p-4 rounded-lg bg-gradient-to-br ${provider.color}`}>
                        <div className="text-2xl mb-2"><img src={provider.logo} className="w-10" alt={`${provider.name} logo`} /></div>
                        <div className="font-bold text-lg">{provider.name}</div>
                        {index === 0 && (
                          <div className="mt-2 px-3 py-1 bg-yellow-500 text-yellow-900 text-xs font-bold rounded-full">
                            RECOMMENDED
                          </div>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, featureIndex) => (
                  <tr 
                    key={feature.key} 
                    className={featureIndex % 2 === 0 ? 'bg-white/12' : 'bg-white/10'}
                  >
                    <td className="p-4 font-semibold">
                      <div className="flex items-center">
                        {feature.label}
                        {feature.highlight && (
                          <span className="ml-2 text-xs bg-white/15 px-2 py-1 rounded">Key Feature</span>
                        )}
                      </div>
                    </td>
                    {hostingProviders.map((provider) => {
                      const value = provider.plans[selectedPlan][feature.key];
                      const bestValue = isBestValue(provider, feature.key);
                      
                      return (
                        <td key={`${provider.name}-${feature.key}`} className="p-4 text-center">
                          <div className={`flex flex-col items-center justify-center min-h-[60px] ${
                            bestValue ? 'text-gray-300' : 'text-gray-300'
                          }`}>
                            <span className="text-lg">
                              {value}
                            </span>
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-4 p-4">
            {hostingProviders.map((provider, index) => (
              <div 
                key={provider.name} 
                className={`border-2 rounded-lg overflow-hidden ${
                  index === 0 ? 'border-green-500' : provider.borderColor
                }`}
              >
                {/* Provider Header */}
                <div className={`p-4 bg-gradient-to-r ${provider.color} text-white`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl"><img src={provider.logo} className="w-10" alt={`${provider.name} logo`} /></div>
                      <div>
                        <div className="font-bold text-lg">{provider.name}</div>
                        <div className="text-sm opacity-90">{planNames[selectedPlan]} Plan</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="bg-gray-750">
                  {features.map((feature, featureIndex) => {
                    const value = provider.plans[selectedPlan][feature.key];
                    const bestValue = isBestValue(provider, feature.key);
                    
                    return (
                      <div 
                        key={feature.key} 
                        className={`flex justify-between items-center p-3 ${
                          featureIndex % 2 === 0 ? 'bg-white/12' : 'bg-white/15'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-gray-300">{feature.label}</span>
                          {feature.highlight && (
                            <span className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300">Key</span>
                          )}
                        </div>
                        <div className={`text-right ${bestValue ? 'text-green-400 font-bold' : 'text-gray-300'}`}>
                          <div className="flex items-center space-x-2">
                            <span>{value}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>Prices and features are based on public information and may change. Last updated {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default HostingComparison;
