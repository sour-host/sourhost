'use client';
import { motion } from 'framer-motion';
import { FiWifi, FiGlobe, FiShield, FiZap, FiMaximize2, FiInfo } from 'react-icons/fi';
import { useState } from 'react';

type NetworkLocation = {
  id: string;
  city: string;
  status: 'active' | 'planned' | 'maintenance';
  coverage: string;
  bandwidth: string;
  details: string;
};

type ServiceTier = {
  name: string;
  speed: string;
  price: string;
  features: string[];
  recommended?: boolean;
};

type PeeringPartner = {
  name: string;
  speed: string;
  location: string;
  type: 'public' | 'private';
};

type NetworkMetric = {
  label: string;
  value: string;
  change?: string;
  trend?: 'up' | 'down' | 'stable';
};

type NetworkNode = {
  id: string;
  name: string;
  x: number;
  y: number;
  type: 'datacenter' | 'pop' | 'exchange';
};

export default function ISP() {
  const [locations] = useState<NetworkLocation[]>([
    {
      id: '1',
      city: 'Los Angeles',
      status: 'active',
      coverage: 'Downtown & Greater LA Area',
      bandwidth: '100 Gbps',
      details: 'Major peering point with direct connections to Asia'
    },
    {
      id: '2',
      city: 'New York',
      status: 'planned',
      coverage: 'Manhattan & Tri-State Area',
      bandwidth: '100 Gbps',
      details: 'East coast hub with European connectivity'
    }
  ]);

  const serviceTiers: ServiceTier[] = [
    {
      name: 'Business Fiber',
      speed: '10 Gbps',
      price: '$999/mo',
      features: [
        'Symmetrical speeds',
        'Dedicated fiber line',
        '24/7 support',
        'Static IP block (/29)',
        '99.99% uptime SLA'
      ]
    },
    {
      name: 'Enterprise',
      speed: '100 Gbps',
      price: 'Custom',
      recommended: true,
      features: [
        'Custom bandwidth allocation',
        'Multiple fiber paths',
        'Priority support',
        'Custom IP allocation',
        '99.999% uptime SLA',
        'DDoS protection'
      ]
    },
    {
      name: 'Wholesale',
      speed: '100+ Gbps',
      price: 'Contact',
      features: [
        'Dark fiber options',
        'Custom routing',
        'BGP management',
        'Large IP blocks',
        'NOC access',
        'Custom SLA terms'
      ]
    }
  ];

  const peeringPartners: PeeringPartner[] = [
    { name: 'Hurricane Electric', speed: '100G', location: 'Los Angeles', type: 'public' },
    { name: 'Cloudflare', speed: '100G', location: 'New York', type: 'private' },
    { name: 'Google', speed: '100G', location: 'Both', type: 'private' },
    { name: 'Amazon', speed: '100G', location: 'Both', type: 'private' },
  ];

  const networkMetrics: NetworkMetric[] = [
    { label: 'Average Latency', value: '0.8ms', change: '-0.2ms', trend: 'down' },
    { label: 'Packet Loss', value: '0.001%', change: '0%', trend: 'stable' },
    { label: 'Backbone Usage', value: '0%', change: '+0%', trend: 'up' },
    { label: 'Active Routes', value: '0K', change: '+0K', trend: 'up' },
  ];

  const networkFeatures = [
    {
      title: "Global Network",
      description: "Connected to major internet exchanges worldwide",
      icon: <FiGlobe className="w-6 h-6 text-blue-400" />
    },
    {
      title: "DDoS Protection",
      description: "Advanced mitigation with up to 10 Tbps capacity",
      icon: <FiShield className="w-6 h-6 text-emerald-400" />
    },
    {
      title: "Low Latency",
      description: "Optimized routing with <1ms local latency",
      icon: <FiZap className="w-6 h-6 text-purple-400" />
    },
    {
      title: "24/7 Support",
      description: "Dedicated network operations team",
      icon: <FiWifi className="w-6 h-6 text-yellow-400" />
    }
  ];

  const networkNodes: NetworkNode[] = [
    { id: 'la', name: 'Los Angeles', x: 150, y: 250, type: 'datacenter' },
    { id: 'ny', name: 'New York', x: 650, y: 180, type: 'datacenter' },
    { id: 'ch', name: 'Chicago', x: 480, y: 150, type: 'pop' },
    { id: 'dal', name: 'Dallas', x: 380, y: 300, type: 'pop' },
    { id: 'mia', name: 'Miami', x: 580, y: 350, type: 'exchange' },
    { id: 'sea', name: 'Seattle', x: 150, y: 100, type: 'exchange' },
  ];

  return (
    <div className="p-6 min-h-screen bg-gradient-to-b from-[#0a0a0a] to-zinc-900">
      <h1 className="text-2xl font-bold mb-4 text-white">Network Services</h1>
      
      {/* Network Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="p-6 rounded-lg border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 backdrop-blur-sm">
          <h2 className="text-xl font-semibold mb-4 text-white">Network Statistics</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-zinc-800/50 rounded border border-zinc-700">
              <p className="text-3xl font-bold text-blue-400">200+</p>
              <p className="text-zinc-400">Gbps Capacity</p>
            </div>
            <div className="text-center p-4 bg-zinc-800/50 rounded border border-zinc-700">
              <p className="text-3xl font-bold text-blue-400">&lt;1ms</p>
              <p className="text-zinc-400">Local Latency</p>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 backdrop-blur-sm">
          <h2 className="text-xl font-semibold mb-4 text-white">Protection</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-zinc-800/50 rounded border border-zinc-700">
              <p className="text-3xl font-bold text-emerald-400">10</p>
              <p className="text-zinc-400">Tbps DDoS</p>
            </div>
            <div className="text-center p-4 bg-zinc-800/50 rounded border border-zinc-700">
              <p className="text-3xl font-bold text-emerald-400">24/7</p>
              <p className="text-zinc-400">Monitoring</p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {serviceTiers.map((tier, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-lg border ${
              tier.recommended 
                ? 'border-blue-500 bg-blue-900/10' 
                : 'border-zinc-800 bg-zinc-900/50'
            }`}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold text-white mb-2">{tier.name}</h3>
            <p className="text-3xl font-bold text-blue-400 mb-4">{tier.speed}</p>
            <p className="text-lg text-zinc-400 mb-4">{tier.price}</p>
            <ul className="space-y-2">
              {tier.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-zinc-300">
                  <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            {tier.recommended && (
              <div className="mt-4 py-2 text-center text-sm text-blue-400 border border-blue-500 rounded-full">
                Recommended
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Network Locations */}
      <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 mb-8">
        <h2 className="text-xl font-semibold p-6 border-b border-zinc-800 text-white">
          Network Locations
        </h2>
        <div className="divide-y divide-zinc-800">
          {locations.map((location) => (
            <div key={location.id} className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-medium text-white">{location.city}</h3>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  location.status === 'active' 
                    ? 'bg-emerald-900/50 text-emerald-400 border border-emerald-800' 
                    : location.status === 'planned' 
                    ? 'bg-blue-900/50 text-blue-400 border border-blue-800'
                    : 'bg-yellow-900/50 text-yellow-400 border border-yellow-800'
                }`}>
                  {location.status.charAt(0).toUpperCase() + location.status.slice(1)}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-zinc-400">Coverage Area</p>
                  <p className="text-zinc-300">{location.coverage}</p>
                </div>
                <div>
                  <p className="font-semibold text-zinc-400">Bandwidth</p>
                  <p className="text-zinc-300">{location.bandwidth}</p>
                </div>
                <div>
                  <p className="font-semibold text-zinc-400">Details</p>
                  <p className="text-zinc-300">{location.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Network Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {networkFeatures.map((feature, index) => (
          <motion.div 
            key={index} 
            className="p-4 border border-zinc-800 rounded-lg bg-zinc-800/30 hover:bg-zinc-800/50 transition-all"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-start space-x-4">
              <span className="text-2xl">{feature.icon}</span>
              <div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="text-zinc-400">{feature.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Network Performance Metrics */}
      <div className="mt-12 mb-8">
        <h2 className="text-xl font-semibold text-white mb-6">Network Performance</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {networkMetrics.map((metric, idx) => (
            <div key={idx} className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/50">
              <p className="text-sm text-zinc-400">{metric.label}</p>
              <div className="flex items-end justify-between mt-2">
                <p className="text-2xl font-bold text-white">{metric.value}</p>
                {metric.change && (
                  <div className={`flex items-center ${
                    metric.trend === 'up' ? 'text-emerald-400' :
                    metric.trend === 'down' ? 'text-blue-400' :
                    'text-zinc-400'
                  }`}>
                    {metric.trend === 'up' && '↑'}
                    {metric.trend === 'down' && '↓'}
                    {metric.trend === 'stable' && '→'}
                    <span className="ml-1">{metric.change}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Peering Partners */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-6">Peering Partners</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="py-3 px-4 text-left text-zinc-400 font-medium">Partner</th>
                <th className="py-3 px-4 text-left text-zinc-400 font-medium">Speed</th>
                <th className="py-3 px-4 text-left text-zinc-400 font-medium">Location</th>
                <th className="py-3 px-4 text-left text-zinc-400 font-medium">Type</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {peeringPartners.map((partner, idx) => (
                <tr key={idx} className="hover:bg-zinc-800/30">
                  <td className="py-3 px-4 text-white">{partner.name}</td>
                  <td className="py-3 px-4 text-zinc-300">{partner.speed}</td>
                  <td className="py-3 px-4 text-zinc-300">{partner.location}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      partner.type === 'private' 
                        ? 'bg-blue-900/50 text-blue-400 border border-blue-800'
                        : 'bg-purple-900/50 text-purple-400 border border-purple-800'
                    }`}>
                      {partner.type}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Network Map */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-6">Network Coverage</h2>
        <div className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/50">
          <div className="aspect-[16/9] relative bg-zinc-800/20 rounded-lg overflow-hidden">
            <svg
              viewBox="0 0 800 450"
              className="w-full h-full"
              style={{ background: '#0a0a0a' }}
            >
              {/* US Map outline - simplified path */}
              <path
                d="M100,50 L700,50 L700,400 L100,400 Z"
                fill="none"
                stroke="#27272a"
                strokeWidth="1"
              />

              {/* Network Lines */}
              {networkNodes.map((node) => 
                networkNodes.map((target) => 
                  node.id < target.id && (
                    <g key={`line-${node.id}-${target.id}`}>
                      <line
                        x1={node.x}
                        y1={node.y}
                        x2={target.x}
                        y2={target.y}
                        stroke="#3b82f6"
                        strokeWidth="1.5"
                        strokeOpacity="0.3"
                      />
                      <line
                        x1={node.x}
                        y1={node.y}
                        x2={target.x}
                        y2={target.y}
                        stroke="#3b82f6"
                        strokeWidth="0.5"
                        strokeOpacity="0.8"
                        strokeDasharray="4 4"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          from="0"
                          to="8"
                          dur="1s"
                          repeatCount="indefinite"
                        />
                      </line>
                    </g>
                  )
                )
              )}

              {/* Network Nodes */}
              {networkNodes.map((node) => (
                <g
                  key={node.id}
                  transform={`translate(${node.x},${node.y})`}
                  className="cursor-pointer"
                >
                  {/* Pulse Animation */}
                  <circle
                    r="12"
                    fill={
                      node.type === 'datacenter'
                        ? 'rgba(59, 130, 246, 0.2)'
                        : node.type === 'pop'
                        ? 'rgba(16, 185, 129, 0.2)'
                        : 'rgba(139, 92, 246, 0.2)'
                    }
                  >
                    <animate
                      attributeName="r"
                      from="8"
                      to="16"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.8"
                      to="0"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  {/* Node Circle */}
                  <circle
                    r="6"
                    fill={
                      node.type === 'datacenter'
                        ? '#3b82f6'
                        : node.type === 'pop'
                        ? '#10b981'
                        : '#8b5cf6'
                    }
                    stroke="#fff"
                    strokeWidth="2"
                  />

                  {/* Node Label */}
                  <text
                    y="-12"
                    textAnchor="middle"
                    fill="#fff"
                    fontSize="12"
                    fontWeight="500"
                  >
                    {node.name}
                  </text>
                </g>
              ))}

              {/* Legend */}
              <g transform="translate(40, 380)">
                <rect width="180" height="80" fill="#18181b" rx="4" />
                {[
                  { type: 'Data Center', color: '#3b82f6', y: 20 },
                  { type: 'PoP', color: '#10b981', y: 40 },
                  { type: 'Exchange', color: '#8b5cf6', y: 60 }
                ].map((item, i) => (
                  <g key={i} transform={`translate(15, ${item.y})`}>
                    <circle r="4" fill={item.color} />
                    <text x="15" y="4" fill="#fff" fontSize="12">
                      {item.type}
                    </text>
                  </g>
                ))}
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="mt-12 mb-8">
        <div className="p-8 rounded-lg border border-zinc-800 bg-gradient-to-br from-blue-900/20 to-zinc-900/50">
          <h2 className="text-2xl font-semibold text-white mb-4">Ready to Connect?</h2>
          <p className="text-zinc-400 mb-6">Contact our team to discuss custom network solutions for your business.</p>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}