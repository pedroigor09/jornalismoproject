'use client';

import { ArtisticSection } from '@/components/sections/ArtisticSection';
import { ColorStripe } from '@/components/ui/ColorStripe';
import { Navbar } from '@/components/ui/Navbar';
import { PageNavigation } from '@/components/ui/PageNavigation';
import { GSAPWrapper } from '@/components/GSAPWrapper';
import { artistsData } from '@/lib/artistsData';

export default function OxeQueArtePage() {
  return (
    <GSAPWrapper>
      <Navbar />
      <ColorStripe />
      <main style={{ paddingTop: '70px' }}>
        <ArtisticSection
          title="Oxe, Que arte é essa?"
          subtitle="Quando o sotaque vira poesia e o ritmo vira identidade"
          introduction="Entre versos, acordes e palcos, a Bahia respira cultura em cada palavra pronunciada. Aqui, o sotaque não é apenas forma — é conteúdo, é herança, é estética. É o poeta que transforma o falar em manifesto, a cantora que leva a oralidade dos blocos afros aos grandes palcos, o dramaturgo que equilibra prosódia e performance sem cair no estereótipo. Conheça as vozes que tornam a baianidade uma linguagem artística viva, complexa e inconfundível."
          artists={artistsData}
        />

        <PageNavigation
          backHref="/pegue-a-visao"
          nextLabel="BAIANO NÃO NASCE, ESTREIA!"
          nextHref="/baiano-nao-nasce-estreia"
        />
      </main>
    </GSAPWrapper>
  );
}
