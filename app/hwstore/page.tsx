'use client'
import { motion } from 'framer-motion';
//import { FiServer, FiCloud, FiShield, FiZap, FiMaximize2, FiInfo } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import Image from 'next/image';




export default function HardwareStore() {
  return (
    <>
      <div className="p-6 min-h-screen">
        <h1 className="text-2xl font-bold mb-4 text-white">Hardware Overview</h1>
        
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded-lg border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 backdrop-blur-sm hover:border-zinc-700 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-4 text-white">Hardware Store Stats</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-zinc-800/50 rounded border border-zinc-700">
                <p className="text-3xl font-bold text-blue-400">1</p>
                <p className="text-zinc-400">Dedicated Machine</p>
              </div>
              <div className="text-center p-4 bg-zinc-800/50 rounded border border-zinc-700">
                <p className="text-3xl font-bold text-emerald-400">0</p>
                <p className="text-zinc-400">For Sale</p>
              </div>
            </div>
          </div>

        <div className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/50">
          <h2 className="text-xl font-semibold mb-4 text-white">Customer Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-zinc-800/50 rounded border border-zinc-700">
              <p className="text-3xl font-bold text-blue-400">0</p>
              <p className="text-zinc-400">Machines Sold</p>
            </div>
            <div className="text-center p-4 bg-zinc-800/50 rounded border border-zinc-700">
              <p className="text-3xl font-bold text-emerald-400">0</p>
              <p className="text-zinc-400">Hardware Clients</p>
            </div>
          </div>
        </div>
      </div>


      <div className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/50">
        <h2 className="text-xl font-semibold mb-4 text-white">General Stock</h2>
        <div className="text-center p-4 rounded border">
          <p className="text-3xl font-bold text-blue-400">No Current Stock</p>
        </div>
      </div>



      </div>

        
      
      
    </>
  )
}
