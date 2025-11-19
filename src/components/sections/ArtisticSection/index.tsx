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
      className="relative py-20 md:py-32 px-4 md:px-12 lg:px-24 overflow-hidden bg-white"
    >

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
