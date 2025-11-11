'use client';

import { HorizontalScrollSection } from '@/components/sections/HorizontalScrollSection';
import { EstatsSection } from '@/components/sections/EstatsSection';
import { MapaInterativo } from '@/components/sections/MapaInterativo';
import { CarouselSection } from '@/components/sections/CarouselSection';
import { ReportagemGrid } from '@/components/sections/ReportagemGrid';
import { MarqueeSection } from '@/components/sections/MarqueeSection';
import { ColorStripe } from '@/components/ui/ColorStripe';
import { Navbar } from '@/components/ui/Navbar';
import { PageNavigation } from '@/components/ui/PageNavigation';
import { GSAPWrapper } from '@/components/GSAPWrapper';
import { ASSETS } from '@/lib/constants';

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

export default function NaCocoPage() {
  return (
    <GSAPWrapper>
      <Navbar />
      <ColorStripe />
      <main style={{ paddingTop: '70px' }}>
        <HorizontalScrollSection />

        <EstatsSection />

        <MapaInterativo />

        <CarouselSection />

        <ColorStripe />

        <ReportagemGrid reportagens={reportagensData} />

        <PageNavigation
          backHref="/naquela-pegada"
          nextLabel="INÍCIO"
          nextHref="/"
        />
      </main>
      
      <MarqueeSection />
    </GSAPWrapper>
  );
}
