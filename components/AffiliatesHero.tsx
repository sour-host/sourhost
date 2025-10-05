// components/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="pt-20 pb-20 mb-0 md:pt-60">
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0 bg-[url('/minecraftbg2.png')] bg-center bg-cover h-110 [mask-image:linear-gradient(to_bottom,#101828,transparent_99%)]" />
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="md:col-span-2 space-y-4 justify-center text-center items-center w-full max-w-4xl">
            <h1 className="justify-center text-center items-center text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white spacing-extratight">
               Get rewards for <span className="text-blue-500">advertising</span> us!
            </h1>
            <p className="max-w-3xl mx-auto justify-center text-center items-center text-xs lg:text-xl mb-5 font-md text-white spacing-extratight">
                  Partner with us so you can enjoy benefits and free advertisement via Discord.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}