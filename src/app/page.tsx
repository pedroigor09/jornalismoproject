'use client';

import { HeroSection } from '@/components/sections/HeroSection';
import { OpacityRevealSection } from '@/components/sections/OpacityRevealSection';
import { LiquifySection } from '@/components/sections/LiquifySection';
import { GSAPWrapper } from '@/components/GSAPWrapper';
import { ASSETS } from '@/lib/constants';

export default function Home() {
  return (
    <GSAPWrapper>
      <main>
        <HeroSection
          title={['jornalismo', 'unijorge']}
          descriptions={[
            'Histórias que transformam. Verdades que inspiram.',
            'Conheça o trabalho dos futuros comunicadores da Bahia'
          ]}
          imageUrl="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80"
          imageAlt="Jornalismo UniJorge"
        />

        <OpacityRevealSection
          text="Mais do que informar, queremos conectar pessoas através de histórias reais e impactantes"
        />

        <LiquifySection
          videoUrl="https://assets.codepen.io/204808/alice-in-wonderland-vid.mov"
          overlayText="Contando histórias que importam"
        />
      </main>
    </GSAPWrapper>
  );
}
