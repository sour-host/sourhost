// app/layout.tsx
import type { Metadata } from 'next';
import { Oxanium } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';
import { Analytics } from "@vercel/analytics/next"

const oxanium = Oxanium({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ALLEXANDERBM - Your Ultimate Solution',
  description: 'ALLEXANDERBM makes sure every one of our customers get what they want - High-Performance Servers at an affordable price.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${oxanium.className} bg-gray-50`}>
        <Header />
        <main className="max-w-7xl mx-auto min-h-[calc(100vh-140px)]">
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
