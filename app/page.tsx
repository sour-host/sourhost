import Hero from '@/components/Hero';
import PanelTabs from '@/components/PanelTabs';
import ChooseUs from '@/components/ChooseUs';
import Plans from '@/components/Plans';
import Modpacks from '@/components/Modpacks';
import Faq from '@/components/Faq';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aeplo Host - The right way to host your server',
  description: 'Aeplo Host makes sure every one of our customers get what they want - High-Performance, Unmetered Minecraft Servers at an affordable price.',
  keywords: 'Aeplo, Aeplo.com, Aeplohost, Aeplo host, Aeplo hosting, Minecraft hosting, Minecraft server hosting, best Minecraft server hosting, free Minecraft server hosting, cheap Minecraft hosting, lag-free Minecraft hosting, dedicated Minecraft server hosting, hosting para Minecraft, host de Minecraft',
};

export default function Home() {
  return (
    <>
      <Hero />
      <Plans />
      <ChooseUs />
      <PanelTabs />
      <Modpacks />
      <Faq />
    </>
  );
}
