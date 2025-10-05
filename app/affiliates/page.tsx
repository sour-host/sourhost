// app/page.tsx
import AffiliatesHero from '@/components/AffiliatesHero';
import AffiliatesSignup from '@/components/AffiliatesSignup';
import Partners from '@/components/Partners';
import Plans from '@/components/Plans';
import Modpacks from '@/components/Modpacks';
import Faq from '@/components/Faq';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VoxelServers - Affiliates & Partners',
  description: 'VoxelServers wants to ensure every one of our customers get what they want - High-Performance Hardware at an affordable price.',
  keywords: 'Minecraft hosting, Minecraft server hosting, best Minecraft server hosting, free Minecraft server hosting, cheap Minecraft hosting, lag-free Minecraft hosting, dedicated Minecraft server hosting, hosting para Minecraft, host de Minecraft',
};
export default function Home() {
  return (
    <>
      <AffiliatesHero />
      <Partners />
    </>
  );
}