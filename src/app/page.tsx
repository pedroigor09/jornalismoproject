'use client';

import { HeroSection } from '@/components/sections/HeroSection';
import { SobreProjeto } from '@/components/sections/SobreProjeto';
import { QuemSomosSection } from '@/components/sections/QuemSomosSection';
import { ColorStripe } from '@/components/ui/ColorStripe';
import { Navbar } from '@/components/ui/Navbar';
import { PageNavigation } from '@/components/ui/PageNavigation';
import { GSAPWrapper } from '@/components/GSAPWrapper';
import { ASSETS, SITE_CONTENT } from '@/lib/constants';

export default function Home() {
  return (
    <GSAPWrapper>
      <Navbar />
      <ColorStripe />
      <main style={{ paddingTop: '70px' }}>
        <HeroSection
          title={[...SITE_CONTENT.HERO.TITLE]}
          descriptions={[SITE_CONTENT.HERO.SUBTITLE, SITE_CONTENT.HERO.DESCRIPTION]}
          imageUrl={ASSETS.BAHIA_HERO}
        />

        <SobreProjeto />

        <QuemSomosSection />

        <PageNavigation
          backHref="/"
          nextLabel="PEGUE A VISÃO"
          nextHref="/pegue-a-visao"
        />
      </main>
    </GSAPWrapper>
  );
}
