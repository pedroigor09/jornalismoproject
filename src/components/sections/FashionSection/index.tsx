'use client';

import { FashionExpert, Brand, FashionReference } from '@/types/fashion';
import { FashionSectionHeader } from './SectionHeader';
import { FashionExpertProfile } from './FashionExpertProfile';
import { FashionReferencesCarousel } from './FashionReferencesCarousel';
import { BrandShowcase } from './BrandShowcase';

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
      className="relative py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #1a0a2e 0%, #2d1b4e 30%, #3d1e5f 60%, #4a1b6f 100%)',
      }}
    >
      {/* Efeitos de iluminação */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Luz rosa */}
        <div
          className="absolute w-[800px] h-[800px] rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, transparent 70%)',
            top: '10%',
            left: '-10%',
          }}
        />
        
        {/* Luz roxa */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, transparent 70%)',
            top: '50%',
            right: '-5%',
          }}
        />

        {/* Luz laranja */}
        <div
          className="absolute w-[700px] h-[700px] rounded-full opacity-15 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(251, 146, 60, 0.3) 0%, transparent 70%)',
            bottom: '10%',
            left: '30%',
          }}
        />
      </div>

      {/* Padrão de pontos decorativos */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Conteúdo */}
      <div className="relative z-10">
        <FashionSectionHeader
          title={title}
          subtitle={subtitle}
          introduction={introduction}
        />

        <FashionExpertProfile expert={expert} />

        <FashionReferencesCarousel references={references} />

        <BrandShowcase brand={brand} />
      </div>
    </section>
  );
};
