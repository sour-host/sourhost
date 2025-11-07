import { useState } from 'react';
import { motion } from 'framer-motion';

type ZoneType = 'server' | 'power' | 'cooling' | 'office' | 'security' | 'storage' | 'loading';

interface Zone {
  id: string;
  type: ZoneType;
  name: string;
  description: string;
  area: string;
  coordinates: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

const ZONES: Zone[] = [
  {
    id: 'server-a',
    type: 'server',
    name: 'Server Hall A',
    description: 'Primary server room with 250+ racks',
    area: '10,000 sq ft',
    coordinates: { x: 100, y: 100, width: 200, height: 300 }
  },
  {
    id: 'server-b',
    type: 'server',
    name: 'Server Hall B',
    description: 'Secondary server room with 250+ racks',
    area: '10,000 sq ft',
    coordinates: { x: 320, y: 100, width: 200, height: 300 }
  },
  {
    id: 'power-main',
    type: 'power',
    name: 'Main Power Room',
    description: 'Primary power distribution and UPS systems',
    area: '5,000 sq ft',
    coordinates: { x: 100, y: 420, width: 150, height: 100 }
  },
  {
    id: 'power-backup',
    type: 'power',
    name: 'Backup Power',
    description: 'Generator farm and fuel storage',
    area: '3,000 sq ft',
    coordinates: { x: 270, y: 420, width: 100, height: 100 }
  },
  {
    id: 'cooling-main',
    type: 'cooling',
    name: 'Cooling Plant',
    description: 'Primary cooling systems and chillers',
    area: '4,000 sq ft',
    coordinates: { x: 390, y: 420, width: 130, height: 100 }
  },
  {
    id: 'office-noc',
    type: 'office',
    name: 'NOC & Offices',
    description: '24/7 Network Operations Center and staff offices',
    area: '3,000 sq ft',
    coordinates: { x: 540, y: 100, width: 120, height: 150 }
  },
  {
    id: 'security-main',
    type: 'security',
    name: 'Security Center',
    description: 'Main security operations and monitoring',
    area: '1,000 sq ft',
    coordinates: { x: 540, y: 270, width: 120, height: 100 }
  },
  {
    id: 'loading-dock',
    type: 'loading',
    name: 'Loading Dock',
    description: 'Secure equipment delivery area',
    area: '2,000 sq ft',
    coordinates: { x: 540, y: 390, width: 120, height: 130 }
  }
];

const ZONE_COLORS: Record<ZoneType, { bg: string; border: string; text: string; fill: string }> = {
  server: {
    bg: 'bg-blue-950/70',
    border: 'border-blue-500',
    text: 'text-blue-300',
    fill: '#172554'
  },
  power: {
    bg: 'bg-amber-950/70',
    border: 'border-amber-500',
    text: 'text-amber-300',
    fill: '#78350f'
  },
  cooling: {
    bg: 'bg-cyan-950/70',
    border: 'border-cyan-500',
    text: 'text-cyan-300',
    fill: '#164e63'
  },
  office: {
    bg: 'bg-violet-950/70',
    border: 'border-violet-500',
    text: 'text-violet-300',
    fill: '#2e1065'
  },
  security: {
    bg: 'bg-rose-950/70',
    border: 'border-rose-500',
    text: 'text-rose-300',
    fill: '#881337'
  },
  storage: {
    bg: 'bg-emerald-950/70',
    border: 'border-emerald-500',
    text: 'text-emerald-300',
    fill: '#064e3b'
  },
  loading: {
    bg: 'bg-orange-950/70',
    border: 'border-orange-500',
    text: 'text-orange-300',
    fill: '#7c2d12'
  }
};

export default function FloorPlan() {
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null);

  return (
    <div className="relative">
      {/* SVG Floor Plan */}
      <div className="w-full aspect-[16/9] bg-zinc-900 rounded-lg overflow-hidden relative">
        <svg
          viewBox="0 0 800 600"
          className="w-full h-full"
          style={{ background: '#18181b' }}
        >
          {/* Grid Lines */}
          <pattern
            id="grid"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="#27272a"
              strokeWidth="0.5"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Zones */}
          {ZONES.map((zone) => (
            <g key={zone.id} onClick={() => setSelectedZone(zone)}>
              <motion.rect
                x={zone.coordinates.x}
                y={zone.coordinates.y}
                width={zone.coordinates.width}
                height={zone.coordinates.height}
                fill={ZONE_COLORS[zone.type].fill}
                className="cursor-pointer"
                stroke={selectedZone?.id === zone.id ? 
                  `var(--${ZONE_COLORS[zone.type].border}-500)` : 
                  `var(--${ZONE_COLORS[zone.type].border}-700)`}
                strokeWidth={selectedZone?.id === zone.id ? "3" : "1"}
                initial={false}
                animate={{
                  opacity: selectedZone?.id === zone.id ? 1 : 0.8,
                  scale: selectedZone?.id === zone.id ? 1.02 : 1
                }}
                whileHover={{ opacity: 1, scale: 1.01 }}
              />
              <text
                x={zone.coordinates.x + zone.coordinates.width / 2}
                y={zone.coordinates.y + zone.coordinates.height / 2}
                className={`${ZONE_COLORS[zone.type].text} text-sm font-medium`}
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {zone.name}
              </text>
            </g>
          ))}
        </svg>

        {/* Zone Details Overlay */}
        {selectedZone && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-4 left-4 right-4 p-4 bg-black/80 backdrop-blur rounded-lg border border-zinc-800"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {selectedZone.name}
                </h3>
                <p className="text-zinc-400">{selectedZone.description}</p>
                <p className="text-sm text-zinc-500 mt-1">Area: {selectedZone.area}</p>
              </div>
              <button
                onClick={() => setSelectedZone(null)}
                className="text-zinc-400 hover:text-white"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Legend */}
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(ZONE_COLORS).map(([type, colors]) => (
          <div
            key={type}
            className="flex items-center space-x-2 text-sm"
          >
            <div className={`w-4 h-4 rounded ${colors.bg} ${colors.border} border`} />
            <span className={`${colors.text} capitalize`}>{type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}