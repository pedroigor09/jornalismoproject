'use client';

import type { ArtisticSectionProps } from '@/types/artist';
import { SectionHeader } from './SectionHeader';
import { ArtistProfile } from './ArtistProfile';

export const ArtisticSection = ({
  title,
  subtitle,
  introduction,
  artists,
}: ArtisticSectionProps) => {
  return (
    <section
      id="oxe-que-arte-e-essa"
      className="relative py-20 md:py-32 px-4 md:px-12 lg:px-24 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, rgba(0,0,0,0.98) 0%, rgba(20,20,25,1) 50%, rgba(0,0,0,0.98) 100%)',
      }}
    >
      {/* Efeito de Luz de Fundo */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,107,53,0.08) 0%, rgba(253,200,48,0.03) 50%, transparent 70%)',
          filter: 'blur(100px)',
          zIndex: 0,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header da Seção */}
        <SectionHeader
          title={title}
          subtitle={subtitle}
          introduction={introduction}
        />

        {/* Lista de Artistas */}
        <div className="space-y-24 md:space-y-32">
          {artists.map((artist, index) => (
            <ArtistProfile key={artist.name} artist={artist} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtisticSection;
