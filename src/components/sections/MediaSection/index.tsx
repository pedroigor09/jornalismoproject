'use client';

import { MediaProfessional } from '@/types/media';
import { MediaSectionHeader } from './SectionHeader';
import { MediaProfile } from './MediaProfile';
import { CategoryDivider } from './CategoryDivider';

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
  return (
    <section
      id="naquela-pegada"
      className="relative py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #0a1628 0%, #0f2540 30%, #1a3a5c 60%, #1e4a6f 100%)',
      }}
    >
      {/* Efeitos de iluminação */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Luz cyan */}
        <div
          className="absolute w-[900px] h-[900px] rounded-full opacity-15 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(34, 211, 238, 0.4) 0%, transparent 70%)',
            top: '5%',
            right: '-10%',
          }}
        />
        
        {/* Luz azul */}
        <div
          className="absolute w-[700px] h-[700px] rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
            top: '40%',
            left: '-8%',
          }}
        />

        {/* Luz indigo */}
        <div
          className="absolute w-[800px] h-[800px] rounded-full opacity-15 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)',
            bottom: '10%',
            right: '20%',
          }}
        />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

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
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-400/20 rounded-3xl p-12">
            <h3 className="text-3xl md:text-4xl font-black text-transparent bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text mb-6">
              A Bahia está em todo lugar
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
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
