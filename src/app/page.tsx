'use client';

import { HeroSection } from '@/components/sections/HeroSection';
import { SobreProjeto } from '@/components/sections/SobreProjeto';
import { QuemSomosSection } from '@/components/sections/QuemSomosSection';
import { ColorStripe } from '@/components/ui/ColorStripe';
import { Navbar } from '@/components/ui/Navbar';
import { PageNavigation } from '@/components/ui/PageNavigation';
import { GSAPWrapper } from '@/components/GSAPWrapper';
import { ASSETS, SITE_CONTENT } from '@/lib/constants';
import { getAssetPath } from '@/lib/getAssetPath';

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

        {/* Vídeo Mosaico */}
        <section className="py-16 px-6 bg-beige-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-8 text-center">
              Mosaico Baianês
            </h2>
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <video
                className="w-full h-full object-cover"
                controls
                autoPlay
                loop
                playsInline
              >
                <source src={getAssetPath('/Vídeo-Mosaico.mp4')} type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
            <p className="text-sm text-gray-500 text-center italic mt-4">
              Vídeo: Amanda Marinho, Deborah Freitas e Ilary Almeida
            </p>
          </div>
        </section>

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
