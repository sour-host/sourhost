// app/layout.tsx
import type { Metadata } from 'next';
import { Oxanium } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';
import { Analytics } from "@vercel/analytics/next"

const oxanium = Oxanium({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SOUR.HOST - You Hit an Error',
  description: 'SOUR.HOST makes sure every one of our customers get what they want - High-Performance Minecraft Servers at an affordable price.',
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
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7185619060256226"
     crossorigin="anonymous"></script>
      </body>
    </html>
  );
}
