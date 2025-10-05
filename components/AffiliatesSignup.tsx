// components/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="pt-20 pb-20 mb-0 md:pt-30 max-w-xl mx-auto">
      <center>
        <div className="text-white">
            <h1 className="text-4xl font-bold">Ready to join?</h1>
            <p className="text-lg mt-1">Join our affiliate program and get rewarded for purchases made with your link! Its free and really easy to sign up!</p>
            <p className="text-xl font-semibold mb-2 mt-2">Benefits:</p>
            <p>- $25 Minimum Payout</p>
            <p>- Easy Dashboard for Tracking</p>
            <p className="mb-6">- Custom Links available</p>
            <Link href="/">
              <button className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-10 py-2 hover:-translate-y-0.5 transition-all duration-300">
                <div className="text-base sm:text-lg font-semibold">Apply Now</div>
              </button>
            </Link>
        </div>
      </center>
    </section>
  );
}