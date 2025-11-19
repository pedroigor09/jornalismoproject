'use client';

import { FashionExpert, Brand, FashionReference } from '@/types/fashion';
import { FashionSectionHeader } from './SectionHeader';
import { FashionExpertProfile } from './FashionExpertProfile';
import { FashionReferencesCarousel } from './FashionReferencesCarousel';
import { BrandShowcase } from './BrandShowcase';
import PaulaCarousel from './PaulaCarousel';
import FloatingPolaroids from './FloatingPolaroids';

interface FashionSectionProps {
  title: string;
  subtitle: string;
  introduction: string;
  expert: FashionExpert;
  references: FashionReference[];
  brand: Brand;
}

export const FashionSection = ({
  title,
  subtitle,
  introduction,
  expert,
  references,
  brand,
}: FashionSectionProps) => {
  return (
    <section
      id="baiano-nao-nasce-estreia"
      className="relative py-32 overflow-hidden bg-white"
    >
      {/* Conteúdo */}
      <div className="relative z-10">
        <FashionSectionHeader
          title={title}
          subtitle={subtitle}
          introduction={introduction}
        />

        <FashionExpertProfile expert={expert} />

        {/* Carrossel de fotos de Paula com polaroides flutuantes */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-4 text-black">
            Referências da Moda Baiana
          </h3>
          <p className="text-xl text-center text-gray-700 mb-16 max-w-3xl mx-auto">
            Conheça os criadores que estão moldando a identidade fashion da Bahia
          </p>

          <div className="relative mb-12">
            <FloatingPolaroids />
            <PaulaCarousel />
          </div>
        </div>

        <BrandShowcase brand={brand} />
      </div>
    </section>
  );
};
