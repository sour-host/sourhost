// app/layout.tsx
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Your Site Name',
  description: 'Your site description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-gray-50`}>
        <Header />
        <main className="max-w-7xl mx-auto min-h-[calc(100vh-140px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}