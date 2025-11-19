'use client';

import { MediaProfessional } from '@/types/media';
import { MediaSectionHeader } from './SectionHeader';
import { MediaProfile } from './MediaProfile';
import { CategoryDivider } from './CategoryDivider';
import { ViralVideoShowcase } from './ViralVideoShowcase';

interface MediaSectionProps {
  title: string;
  subtitle: string;
  introductions: string[];
  journalists: MediaProfessional[];
  actors: MediaProfessional[];
  influencers: MediaProfessional[];
}

export const MediaSection = ({
  title,
  subtitle,
  introductions,
  journalists,
  actors,
  influencers,
}: MediaSectionProps) => {
  // Vídeos virais especiais
  const viralVideos = [
    {
      title: 'Vinicius e a "Pomba Suja"',
      videoId: 'Kfi2q3VDfoQ',
      description: 'O momento viral no BBB quando Vinicius usou a expressão baiana "pomba suja" e deixou o Brasil inteiro curioso!',
      type: 'short' as const,
    },
    {
      title: 'Vanderson: "Deus me livre não ser baiano!"',
      videoId: 'LtN_V7Y3JhQ',
      description: 'O bordão mais icônico do jornalismo baiano! Vanderson celebrando a baianidade com orgulho.',
      type: 'video' as const,
    },
    {
      title: 'Vanderson: "11h45"',
      videoId: 'RbfTs2LbtSc',
      description: 'Outro momento clássico de Vanderson que virou marca registrada da TV baiana.',
      type: 'short' as const,
    },
  ];

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

        {/* Jornalistas */}
        <CategoryDivider title="Telejornalismo" icon="📺" />
        <div className="space-y-16">
          {journalists.map((journalist, index) => (
            <MediaProfile
              key={journalist.name}
              professional={journalist}
              index={index}
            />
          ))}
        </div>

        {/* Vídeos Virais */}
        <ViralVideoShowcase videos={viralVideos} />

        {/* Atores */}
        <CategoryDivider title="Cinema & TV" icon="🎬" />
        <div className="space-y-16">
          {actors.map((actor, index) => (
            <MediaProfile
              key={actor.name}
              professional={actor}
              index={index + journalists.length}
            />
          ))}
        </div>

        {/* Influenciadores */}
        <CategoryDivider title="Redes Sociais & Streaming" icon="📱" />
        <div className="space-y-16">
          {influencers.map((influencer, index) => (
            <MediaProfile
              key={influencer.name}
              professional={influencer}
              index={index + journalists.length + actors.length}
            />
          ))}
        </div>

        {/* Mensagem final */}
        <div className="max-w-4xl mx-auto mt-32 px-6 text-center">
          <div className="bg-gradient-to-br from-orange-500/10 to-purple-500/10 backdrop-blur-sm border border-orange-400/20 rounded-3xl p-12">
            <h3 className="text-3xl md:text-4xl font-black text-transparent bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text mb-6">
              A Bahia está em todo lugar
            </h3>
            <p className="text-xl text-gray-900 leading-relaxed">
              Do telejornal ao streaming, do cinema às redes sociais, o sotaque baiano segue 
              conquistando espaço e representando a identidade de um povo que não abre mão de 
              sua essência. Cada voz, cada expressão, cada jeito de falar é uma celebração da 
              nossa cultura viva e plural.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
