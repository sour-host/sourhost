import Hero from '@/components/Hero';
import PanelTabs from '@/components/PanelTabs';
import ChooseUs from '@/components/ChooseUs';
import Plans from '@/components/Plans';
import Modpacks from '@/components/Modpacks';
import Faq from '@/components/Faq';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ALLEXANDERBM - The right way to host your server',
  description: 'ALLEXANDERBM makes sure every one of our customers get what they want - High-Performance, Unmetered Servers at an affordable price.',
  keywords: 'ALLEXANDERBM, ALLEXANDERBM, ALLEXANDERBM, hosting, server hosting, best server hosting, free server hosting, cheap hosting, lag-free hosting, dedicated server hosting, hosting, host',
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
