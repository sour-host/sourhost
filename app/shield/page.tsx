// app/sourshield/page.tsx

import { Metadata } from 'next';
import { ShieldCheck, Zap, Server, ShieldAlert, Network, LayoutDashboard } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SourShield – Minecraft DDoS Protection | SOUR.HOST',
  description:
    'SourShield is SOUR.HOST’s exclusive DDoS mitigation layer built specifically to defend Minecraft servers against Layer 4 and Layer 7 attacks.',
};

export default function SourShieldPage() {
  return (
    <main className="relative z-10 min-h-screen bg-transparent text-white font-sans">
      {/* Hero Section */}
      <section className="text-center px-6 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="relative z-10 text-4xl md:text-6xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#00b72f] to-green-400">
            Introducing SourShield
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6 pt-2">
            Enterprise-grade DDoS protection tailored <span className="text-green-400 font-semibold">exclusively</span> for Minecraft.
          </p>
          <p className="text-sm text-gray-500">Included free with all Minecraft plans hosted on SOUR.HOST</p>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16 px-6 bg-transparent border-y border-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: ShieldCheck,
              title: 'Layer 4 + Layer 7 Protection',
              desc: 'Mitigates both network-level and application-level Minecraft attacks.',
            },
            {
              icon: Zap,
              title: 'Real-Time Mitigation',
              desc: 'Active filtering and pattern detection with zero-day signature defense.',
            },
            {
              icon: Server,
              title: 'No Added Cost',
              desc: 'Every Minecraft server comes with SourShield, no upgrades required.',
            },
            {
              icon: ShieldAlert,
              title: 'Bot & Join-Flood Defense',
              desc: 'Blocks fake player joins, ping attacks, and protocol abuse.',
            },
            {
              icon: Network,
              title: 'BGP & Proxy-Aware Routing',
              desc: 'Smart routing with geo-based enforcement and upstream filtering.',
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-gradient-to-br from-[#0c0c0e] to-[#121418] border border-[#1c1f23] p-6 rounded-xl shadow-md hover:shadow-green-700/20 transition"
            >
              <Icon className="w-10 h-10 mx-auto text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SourShield Management Panel Section */}
      <section className="py-24 px-6 bg-transparent border-t border-gray-800">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <img
              src="/Screenshot 2025-10-17 180221.png"
              alt="DDoS Analytics Panel"
              className="rounded-xl shadow-xl border border-[#1f1f1f] object-cover w-full h-auto"
            />
          </div>
          <div className="flex-1 text-left">
            <div className="inline-flex items-center gap-2 text-green-400 font-semibold mb-2">
              <LayoutDashboard className="w-5 h-5" />
              Direct Panel Control
            </div>
            <h2 className="text-3xl font-bold mb-4">
              DDoS Analytics. Your Way.
            </h2>
            <p className="text-gray-400 mb-4">
              Every Minecraft server hosted with SOUR.HOST comes with a built-in <span className="text-green-400 font-medium">SourShield Dashboard</span> — giving you real-time insight into live threats, filtered attacks, and network-level stats.
            </p>
            <p className="text-gray-500 text-sm">
              No more guessing. Just clean graphs, alerts, and mitigation logs – all from your hosting panel.
            </p>
          </div>
        </div>
      </section>

      {/* Why Exclusive Section */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Why don’t we sell SourShield?
        </h2>
        <p className="text-gray-400 text-lg mb-6">
          SourShield is a custom-built security solution integrated directly into our Minecraft infrastructure.
          It’s not a third-party product. It’s engineered specifically for <span className="text-green-400 font-semibold">SOUR.HOST’s environment</span>,
          meaning it can’t be deployed on external systems or sold separately.
        </p>
        <p className="text-sm text-gray-500">
          If you want access to SourShield — simply host with us.
        </p>
      </section>
    </main>
  );
}
