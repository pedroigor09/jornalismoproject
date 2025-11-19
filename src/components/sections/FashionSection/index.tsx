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
  customComponents?: Array<{
    component: React.ReactNode;
    position: number;
  }>;
}

export const FashionSection = ({
  title,
  subtitle,
  introduction,
  expert,
  references,
  brand,
  customComponents,
}: FashionSectionProps) => {
  // Combina componentes antigos e novos
  const allCustomComponents = [
    ...(customComponents || []),
    {
      component: (
        <div className="relative mb-12">
          <FloatingPolaroids />
          <PaulaCarousel />
        </div>
      ),
      position: 3,
    },
  ];

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
          customComponents={allCustomComponents}
        />

        <BrandShowcase brand={brand} />
      </div>
    </section>
  );
};
