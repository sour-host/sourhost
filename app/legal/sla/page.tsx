// app/page.tsx
import Terms from '@/components/Terms';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sour Host - Service Level Agreement',
  description: 'Sour Host provides reliable and affordable Minecraft, Virtual & Dedicated Servers to customers around the globe.',
  keywords: 'sourhost, host, hosting, game, game hosting, game servers, servers, server, minecraft, minecraft java, minecraft bedrock, minecraft server, mc, mc java, mc bedrock, mc server, gta roleplay, gta 5 roleplay, gta v roleplay, gta roleplaying, gta 5 roleplaying, gta v roleplaying, fivem, fivem roleplay, fivem roleplaying, gta roleplay server, gta 5 roleplay server, gta v roleplay server, gta roleplaying server, gta 5 roleplaying server, gta v roleplaying server, fivem server, fivem roleplay server, fivem roleplaying server, gta host, among us, among us host, among us server, among us hosting, rust, rust server, rust servers, rust host, rust hosting, terraria, terraria server, terraria servers, terraria host, terraria hosting, ark survival evolved, ark survival evolved server, ark survival evolved servers, ark survival evolved host, ark survival evolved hosting, arma, arma server, arma servers, arma host, arma hosting, unturned, unturned server, unturned servers, unturned host, unturned hosting, valheim, valheim server, vaheim servers, valheim host, valheim hosting, dayz, dayz server, dayz servers, dayz host, dayz hosting',
};

export default function Home() {
  return (
    <>
      <Sla />
    </>
  );
}
