// app/page.tsx
import Hero from '@/components/Hero';
import PanelTabs from '@/components/PanelTabs';
import RamCalculator from '@/components/RamCalculator';
import Plans from '@/components/Plans';
import Modpacks from '@/components/Modpacks';
import Faq from '@/components/Faq';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sour Host - The right way to host your server',
  description: 'Sour Host makes sure every one of our customers get what they want - High-Performance, Unmetered Minecraft Servers at an affordable price.',
  keywords: 'sour, sour.host, sourhost, sour host, sour hosting, Minecraft hosting, Minecraft server hosting, best Minecraft server hosting, free Minecraft server hosting, cheap Minecraft hosting, lag-free Minecraft hosting, dedicated Minecraft server hosting, hosting para Minecraft, host de Minecraft',
};

export default function Home() {
  return (
    <>
      <Hero />
      <Plans />
      <PanelTabs />
      <Modpacks />
      <Faq />
    </>
  );
}
