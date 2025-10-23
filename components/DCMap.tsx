// components/WorldMapSection.tsx
'use client';
import { useState } from 'react';
import { FaServer, FaChevronRight } from 'react-icons/fa';
import '@fontsource/manrope';
import '@fontsource/manrope/500.css';
import '@fontsource/manrope/600.css';
import Link from 'next/link';

export default function WorldMapSection() {
  const [activeLocation, setActiveLocation] = useState<number | null>(null);

  // Data centers with precise coordinates matching the world.svg image
  const dataCenters = [
    {
      id: 1,
      name: 'Dallas, TX',
      position: { left: '22%', top: '36%' },
    },
//    {
//      id: 2,
//      name: 'Ashburn, VA (Soon)',
//      position: { left: '26%', top: '29%' },
//    },
  ];

  return (
    <section className="bg-[#04061b] py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-5xl">
            Get Connection <span className="text-[#00b72f]">Everywhere</span>
          </h2>
          <p className="mt-3 max-w-4xl mx-auto text-xl text-white">
            Our datacenters are perfectly placed to give customers in the United States the least ping possible.
          </p>
        </div>

        <div className="relative p-4 rounded-xl">
          {/* World Map Image Container */}
          <div className="relative w-full h-auto">
            {/* Embedded SVG Image */}
            <img 
              src="/world.svg" 
              alt="World Map" 
              className="w-full h-auto"
            />
            
            {/* Interactive Markers */}
            {dataCenters.map((center) => (
              <button
                key={center.id}
                className={`absolute w-4 h-4 rounded-full transform -translate-x-1/2 -translate-y-1/2 
                  transition-all duration-200 z-10 focus:outline-none
                  ${activeLocation === center.id ? 'w-4 h-4 bg-[#00b72f] ring-4 ring-green-200' : 'bg-[#00b72f] hover:w-5 hover:h-5'}`}
                style={{ left: center.position.left, top: center.position.top }}
                onClick={() => setActiveLocation(center.id === activeLocation ? null : center.id)}
                aria-label={`View ${center.name} details`}
              >
                {activeLocation === center.id && (
                  <span className="absolute left-4 top-4 bg-[#00b72f] text-white text-xs font-bold px-2 py-1 rounded shadow-md whitespace-nowrap">
                    {center.name}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
