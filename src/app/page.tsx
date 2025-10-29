'use client';

import { HeroSection } from '@/components/sections/HeroSection';
import { OpacityRevealSection } from '@/components/sections/OpacityRevealSection';
import { SobreProjeto } from '@/components/sections/SobreProjeto';
import { MapaInterativo } from '@/components/sections/MapaInterativo';
import { MarqueeSection } from '@/components/sections/MarqueeSection';
import { EstatsSection } from '@/components/sections/EstatsSection';
import { HorizontalScrollSection } from '@/components/sections/HorizontalScrollSection';
import { CarouselSection } from '@/components/sections/CarouselSection';
import { ReportagemGrid } from '@/components/sections/ReportagemGrid';
import { LiquifySection } from '@/components/sections/LiquifySection';
import { ColorStripe } from '@/components/ui/ColorStripe';
import { NavigationButtons } from '@/components/ui/NavigationButtons';
import { Navbar } from '@/components/ui/Navbar';
import { GSAPWrapper } from '@/components/GSAPWrapper';
import { ASSETS, SITE_CONTENT } from '@/lib/constants';

const reportagensData = [
  {
    id: '1',
    titulo: 'Oxente! As gírias que definem a Bahia',
    descricao: 'Uma exploração profunda sobre as expressões mais marcantes do vocabulário baiano e suas origens',
    tipo: 'video' as const,
    imagemCapa: ASSETS.JORNAL.JORNAL1,
    data: '15 de Outubro, 2025',
  },
  {
    id: '2',
    titulo: 'Sotaque Baiano: Uma identidade sonora',
    descricao: 'Áudios e entrevistas revelam a musicalidade única do falar baiano em diferentes regiões',
    tipo: 'audio' as const,
    imagemCapa: ASSETS.JORNAL.JORNAL2,
    data: '12 de Outubro, 2025',
  },
  {
    id: '3',
    titulo: 'Festas Populares e a Cultura Baiana',
    descricao: 'Imagens que capturam a essência das celebrações e tradições que mantêm viva nossa identidade',
    tipo: 'fotos' as const,
    imagemCapa: ASSETS.JORNAL.JORNAL3,
    data: '08 de Outubro, 2025',
  },
];

export default function Home() {
  return (
    <GSAPWrapper>
      <Navbar />
      <ColorStripe />
      <NavigationButtons />
      <main style={{ paddingTop: '100px' }}>
        <HeroSection
          title={[...SITE_CONTENT.HERO.TITLE]}
          descriptions={[SITE_CONTENT.HERO.SUBTITLE, SITE_CONTENT.HERO.DESCRIPTION]}
          imageUrl={ASSETS.BAHIA_HERO}
        />

        <OpacityRevealSection 
          text="Uma identidade que pulsa em cada oxente, em cada sô, em cada jeito baiano de ser"
        />

        <SobreProjeto />

        <ColorStripe />

        <HorizontalScrollSection />

        <EstatsSection />

        <MapaInterativo />

        <CarouselSection />

        <ColorStripe />

        <ReportagemGrid reportagens={reportagensData} />

        <LiquifySection
          videoUrl={ASSETS.PLACEHOLDER_VIDEO}
          overlayText="Sô da Bahia, ê!"
        />
      </main>
      
      <MarqueeSection />
    </GSAPWrapper>
  );
}
