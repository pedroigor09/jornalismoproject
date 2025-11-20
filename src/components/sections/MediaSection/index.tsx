'use client';

import { MediaSectionHeader } from './SectionHeader';

interface MediaSectionProps {
  title: string;
  subtitle: string;
  introductions: string[];
}

export const MediaSection = ({
  title,
  subtitle,
  introductions,
}: MediaSectionProps) => {
  return (
    <section
      id="naquela-pegada"
      className="relative py-32 overflow-hidden bg-white"
    >
      {/* Conteúdo */}
      <div className="relative z-10">
        <MediaSectionHeader
          title={title}
          subtitle={subtitle}
          introductions={introductions}
        />
      </div>
    </section>
  );
};
