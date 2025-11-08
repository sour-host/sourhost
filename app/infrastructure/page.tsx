'use client';
import { motion } from 'framer-motion';
import { FiServer, FiCloud, FiShield, FiZap, FiMaximize2, FiInfo } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import Image from 'next/image';

type InfrastructureItem = {
  id: string;
  name: string;
  specs: string;
  location: string;
  status: 'active' | 'planned' | 'maintenance';
  details: string;
}

type ZoneInfo = {
  id: string;
  name: string;
  area: string;
  description: string;
  color: string;
};

export default function Infrastructure() {
  const [servers, setServers] = useState<InfrastructureItem[]>([
    {
      id: '1',
      name: 'Primary Server Cluster',
      specs: '32 Core AMD EPYC, 256GB RAM, 12TB NVMe',
      location: 'US East',
      status: 'planned',
      details: 'High-performance compute cluster for primary workloads'
    },
    {
      id: '2',
      name: 'Backup Data Center',
      specs: '24 Core Intel Xeon, 128GB RAM, 24TB Storage',
      location: 'US West',
      status: 'planned',
      details: 'Redundant backup facility for disaster recovery'
    }
  ]);

  const dataCenterFeatures = [
    {
      title: "Redundant Power",
      description: "N+1 redundancy with backup generators and UPS systems",
      icon: <FiZap className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Advanced Cooling",
      description: "State-of-the-art cooling system with hot/cold aisle containment",
      icon: <FiCloud className="w-6 h-6 text-emerald-400" />
    },
    {
      title: "Security",
      description: "24/7 surveillance, biometric access, and on-site security",
      icon: <FiShield className="w-6 h-6 text-purple-400" />
    },
    {
      title: "Network",
      description: "Multi-homed network with redundant 100Gbps connections",
      icon: <FiServer className="w-6 h-6 text-yellow-400" />
    }
  ];

  const zones: ZoneInfo[] = [
    {
      id: 'data-hall',
      name: 'Data Hall',
      area: '10,000 sq ft',
      description: 'Main server hosting area with hot/cold aisle containment',
      color: 'rgba(59, 130, 246, 0.2)'
    },
    {
      id: 'power',
      name: 'Power Distribution',
      area: '2,000 sq ft',
      description: 'UPS systems, power conditioning, and backup generators',
      color: 'rgba(16, 185, 129, 0.2)'
    },
    {
      id: 'cooling',
      name: 'Cooling Infrastructure',
      area: '1,500 sq ft',
      description: 'Precision cooling units and heat exchange systems',
      color: 'rgba(245, 158, 11, 0.2)'
    },
    {
      id: 'noc',
      name: 'Network Operations Center',
      area: '500 sq ft',
      description: '24/7 monitoring and control center',
      color: 'rgba(139, 92, 246, 0.2)'
    },
    {
      id: 'security',
      name: 'Security Center',
      area: '300 sq ft',
      description: 'Access control and surveillance systems',
      color: 'rgba(239, 68, 68, 0.2)'
    },
    {
      id: 'loading',
      name: 'Loading & Staging',
      area: '800 sq ft',
      description: 'Equipment delivery and preparation area',
      color: 'rgba(75, 85, 99, 0.2)'
    }
  ];

  const [isMaximized, setIsMaximized] = useState(false);

  return (
    <div className="p-6 min-h-screen bg-gradient-to-b from-[#0a0a0a] to-zinc-900">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <h1 className="text-2xl font-bold mb-4 text-white">Infrastructure Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="p-6 rounded-lg border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 backdrop-blur-sm hover:border-zinc-700 transition-all duration-300">
          <h2 className="text-xl font-semibold mb-4 text-white">Data Center Stats</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-zinc-800/50 rounded border border-zinc-700">
              <p className="text-3xl font-bold text-blue-400">1</p>
              <p className="text-zinc-400">Locations</p>
            </div>
            <div className="text-center p-4 bg-zinc-800/50 rounded border border-zinc-700">
              <p className="text-3xl font-bold text-blue-400">99.9%</p>
              <p className="text-zinc-400">Planned Uptime</p>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/50">
          <h2 className="text-xl font-semibold mb-4 text-white">Network Capacity</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-zinc-800/50 rounded border border-zinc-700">
              <p className="text-3xl font-bold text-blue-400">100</p>
              <p className="text-zinc-400">Gbps Network</p>
            </div>
            <div className="text-center p-4 bg-zinc-800/50 rounded border border-zinc-700">
              <p className="text-3xl font-bold text-emerald-400">DDoS</p>
              <p className="text-zinc-400">Protected</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-zinc-800 bg-zinc-900/50">
        <h2 className="text-xl font-semibold p-6 border-b border-zinc-800 text-white">
          Server Infrastructure
        </h2>
        <div className="divide-y divide-zinc-800">
          {servers.map((server) => (
            <div key={server.id} className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-medium text-white">{server.name}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  server.status === 'active' 
                    ? 'bg-gradient-to-r from-emerald-900/50 to-emerald-800/30 text-emerald-400 border border-emerald-800' 
                    : server.status === 'planned' 
                    ? 'bg-gradient-to-r from-blue-900/50 to-blue-800/30 text-blue-400 border border-blue-800'
                    : 'bg-gradient-to-r from-yellow-900/50 to-yellow-800/30 text-yellow-400 border border-yellow-800'
                }`}>
                  {server.status.charAt(0).toUpperCase() + server.status.slice(1)}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-zinc-400">Specifications</p>
                  <p className="text-zinc-300">{server.specs}</p>
                </div>
                <div>
                  <p className="font-semibold text-zinc-400">Location</p>
                  <p className="text-zinc-300">{server.location}</p>
                </div>
                <div>
                  <p className="font-semibold text-zinc-400">Details</p>
                  <p className="text-zinc-300">{server.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-lg border border-zinc-800 bg-zinc-900/50">
        <div className="p-6 border-b border-zinc-800">
          <h2 className="text-2xl font-semibold text-white">Custom Data Center Plans</h2>
          <p className="mt-2 text-zinc-400">Our upcoming state-of-the-art facility designed for maximum reliability and performance</p>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {dataCenterFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="p-4 border border-zinc-800 rounded-lg bg-zinc-800/30 hover:bg-zinc-800/50 transition-all"
              >
                <div className="flex items-start space-x-4">
                  <span className="text-2xl">{feature.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                    <p className="text-zinc-400">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-6">
            <div className="border border-zinc-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Facility Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-zinc-400 font-medium mb-2">Power Capacity</h4>
                  <p className="text-zinc-300">• 10MW total capacity</p>
                  <p className="text-zinc-300">• 2N power distribution</p>
                  <p className="text-zinc-300">• Green energy options</p>
                </div>
                <div>
                  <h4 className="text-zinc-400 font-medium mb-2">Physical Security</h4>
                  <p className="text-zinc-300">• Multi-factor authentication</p>
                  <p className="text-zinc-300">• CCTV coverage</p>
                  <p className="text-zinc-300">• Mantrap entry system</p>
                </div>
                <div>
                  <h4 className="text-zinc-400 font-medium mb-2">Connectivity</h4>
                  <p className="text-zinc-300">• Multiple fiber providers</p>
                  <p className="text-zinc-300">• Direct cloud onramps</p>
                  <p className="text-zinc-300">• Low-latency routes</p>
                </div>
              </div>
            </div>

            <div className="border border-zinc-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Timeline</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full shadow-lg shadow-blue-500/20"></div>
                  <div className="ml-4">
                    <p className="text-white">Q1 2029 - Construction Start</p>
                    <p className="text-zinc-400">Breaking ground and initial construction phase</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full shadow-lg shadow-blue-500/20"></div>
                  <div className="ml-4">
                    <p className="text-white">Q3 2029 - Infrastructure Installation</p>
                    <p className="text-zinc-400">Power, cooling, and network infrastructure deployment</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full shadow-lg shadow-blue-500/20"></div>
                  <div className="ml-4">
                    <p className="text-white">Q2 2030 - Facility Launch</p>
                    <p className="text-zinc-400">Initial customer deployment and operations begin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-6">
        <div className="border border-zinc-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Advanced Floor Plan Design</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Floorplan SVG */}
            <div className={`lg:col-span-2 border border-zinc-800 rounded-lg p-8 bg-zinc-900/30 transition-all duration-300 ${isMaximized ? "fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-0" : ""}`}>
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-zinc-300 font-medium">Facility Layout</h4>
                <button
                  className="p-2 rounded-lg border border-zinc-700 hover:bg-zinc-800 transition-colors"
                  onClick={() => setIsMaximized(!isMaximized)}
                  aria-label={isMaximized ? "Minimize" : "Maximize"}
                >
                  {isMaximized ? (
                    <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <FiMaximize2 className="w-4 h-4 text-zinc-400" />
                  )}
                </button>
              </div>
              <div className={`aspect-[4/3] relative bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-zinc-700 rounded-lg p-8 shadow-xl overflow-hidden ${isMaximized ? "w-[90vw] h-[80vh] max-w-none max-h-none" : ""}`}>
                <svg
                  viewBox="0 0 1000 750"
                  className="w-full h-full"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* Background Grid */}
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(161, 161, 170, 0.08)" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="1000" height="750" fill="url(#grid)" />

                  {/* Outer Walls */}
                  <rect x="60" y="60" width="880" height="630" fill="none" stroke="#fff" strokeWidth="6" rx="24" />

                  {/* Data Hall */}
                  <rect x="120" y="120" width="520" height="510" fill="rgba(59,130,246,0.13)" stroke="#3b82f6" strokeWidth="4" rx="16" />
                  <text x="380" y="150" fill="#3b82f6" fontSize="28" fontWeight="bold" textAnchor="middle">Data Hall</text>

                  {/* Server Racks */}
                  {[...Array(5)].map((_, row) => (
                    <g key={row}>
                      {[...Array(8)].map((_, col) => (
                        <rect
                          key={col}
                          x={150 + col * 60}
                          y={180 + row * 65}
                          width="40"
                          height="45"
                          fill="#2563eb"
                          stroke="#1e40af"
                          strokeWidth="1"
                          rx="4"
                        />
                      ))}
                    </g>
                  ))}

                  {/* Power Distribution */}
                  <rect x="670" y="120" width="120" height="110" fill="rgba(16,185,129,0.18)" stroke="#10b981" strokeWidth="3" rx="10" />
                  <text x="730" y="180" fill="#10b981" fontSize="18" fontWeight="bold" textAnchor="middle">Power</text>

                  {/* Cooling Infrastructure */}
                  <rect x="820" y="120" width="90" height="110" fill="rgba(245,158,11,0.18)" stroke="#f59e0b" strokeWidth="3" rx="10" />
                  <text x="865" y="180" fill="#f59e0b" fontSize="16" fontWeight="bold" textAnchor="middle">Cooling</text>

                  {/* NOC */}
                  <rect x="670" y="260" width="120" height="80" fill="rgba(139,92,246,0.18)" stroke="#8b5cf6" strokeWidth="3" rx="10" />
                  <text x="730" y="305" fill="#8b5cf6" fontSize="16" fontWeight="bold" textAnchor="middle">NOC</text>

                  {/* Security Center */}
                  <rect x="820" y="260" width="90" height="80" fill="rgba(239,68,68,0.18)" stroke="#ef4444" strokeWidth="3" rx="10" />
                  <text x="865" y="305" fill="#ef4444" fontSize="16" fontWeight="bold" textAnchor="middle">Security</text>

                  {/* Loading & Staging */}
                  <rect x="670" y="370" width="240" height="110" fill="rgba(75,85,99,0.18)" stroke="#4b5563" strokeWidth="3" rx="10" />
                  <text x="790" y="430" fill="#4b5563" fontSize="16" fontWeight="bold" textAnchor="middle">Loading</text>

                  {/* Doors */}
                  <rect x="110" y="370" width="10" height="60" fill="#fff" stroke="#aaa" strokeWidth="2" rx="2" />
                  <rect x="950" y="420" width="10" height="60" fill="#fff" stroke="#aaa" strokeWidth="2" rx="2" />

                  {/* Scale Bar */}
                  <rect x="120" y="700" width="200" height="8" fill="#fff" />
                  <text x="220" y="730" fill="#fff" fontSize="14" textAnchor="middle">20m</text>
                </svg>
                {/* Close button in maximized mode */}
                {isMaximized && (
                  <button
                    className="absolute top-4 right-4 z-50 p-2 rounded-full bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 transition"
                    onClick={() => setIsMaximized(false)}
                    aria-label="Close"
                  >
                    <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
              {/* Legend moved below the SVG */}
              <div className="mt-6 bg-zinc-900/90 backdrop-blur-sm rounded-lg p-3 border border-zinc-700">
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {zones.map((zone) => (
                    <div key={zone.id} className="flex items-center space-x-2">
                      <div
                        className="w-3 h-3 rounded"
                        style={{ backgroundColor: zone.color.replace('0.2', '0.5') }}
                      />
                      <span className="text-zinc-300">{zone.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Zone Details (unchanged) */}
            <div className="space-y-6">
              <div className="border border-zinc-800 rounded-lg p-4 bg-zinc-900/30">
                <h4 className="text-zinc-300 font-medium mb-3 flex items-center">
                  Zone Details
                  <FiInfo className="w-4 h-4 ml-2 text-zinc-500" />
                </h4>
                <div className="space-y-4">
                  {zones.map((zone) => (
                    <div
                      key={zone.id}
                      className="p-3 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="text-white font-medium">{zone.name}</h5>
                        <span className="text-sm text-zinc-400">{zone.area}</span>
                      </div>
                      <p className="text-sm text-zinc-400">{zone.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-zinc-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Environmental Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-gradient-to-br from-zinc-900/30 to-zinc-800/30 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
              <h4 className="text-emerald-400 font-medium mb-2">Power Usage Effectiveness</h4>
              <p className="text-3xl font-bold text-white mb-2">1.1 PUE</p>
              <p className="text-zinc-400">Industry-leading efficiency rating</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-zinc-900/30 to-zinc-800/30 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
              <h4 className="text-emerald-400 font-medium mb-2">Renewable Energy</h4>
              <p className="text-3xl font-bold text-white mb-2">85%</p>
              <p className="text-zinc-400">Powered by renewable sources</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-zinc-900/30 to-zinc-800/30 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
              <h4 className="text-emerald-400 font-medium mb-2">Water Conservation</h4>
              <p className="text-3xl font-bold text-white mb-2">90%</p>
              <p className="text-zinc-400">Water recycling efficiency</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}