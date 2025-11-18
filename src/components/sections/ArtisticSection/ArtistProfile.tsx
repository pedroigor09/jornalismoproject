'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import type { Artist } from '@/types/artist';
import Image from 'next/image';
import { getAssetPath } from '@/lib/getAssetPath';
import { AudioPlayer } from '@/components/ui/AudioPlayer';

interface ArtistProfileProps {
  artist: Artist;
  index: number;
}

export const ArtistProfile = ({ artist, index }: ArtistProfileProps) => {
  const containerRef = useScrollReveal(0.75);
  const isEven = index % 2 === 0;

  return (
    <article
      ref={containerRef as any}
      className="relative mb-24 md:mb-32"
    >
      {/* Grid Layout - Imagem e Quote */}
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12 ${isEven ? '' : 'lg:grid-flow-dense'}`}>
        {/* Imagem do Artista */}
        <div className={`relative ${isEven ? '' : 'lg:col-start-2'}`}>
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl z-0">
            <Image
              src={getAssetPath(artist.image)}
              alt={artist.name}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              style={{ objectPosition: '30% center' }}
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Nome e Papel do Artista */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {artist.name}
              </h3>
              <p className="text-orange-400 text-lg md:text-xl font-light">
                {artist.role}
              </p>
            </div>
          </div>
        </div>

        {/* Quote em Destaque */}
        <div className={`${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
          <div className="relative">
            {/* Aspas decorativas */}
            <div className="absolute -top-6 -left-4 text-8xl text-orange-500/20 font-serif leading-none">
              "
            </div>
            <blockquote className="relative z-10 text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight italic pl-8">
              {artist.quote}
            </blockquote>
            <div className="absolute -bottom-6 -right-4 text-8xl text-orange-500/20 font-serif leading-none">
              "
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo Textual */}
      <div className="max-w-4xl mx-auto">
        {/* Introdução */}
        <div className="mb-8">
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light italic">
            {artist.content.introduction}
          </p>
        </div>

        {/* Áudio após introdução */}
        {artist.content.audioClips && artist.content.audioClips.length > 0 && (() => {
          const audioAfterIntro = artist.content.audioClips
            .map(clip => {
              try {
                return JSON.parse(clip);
              } catch {
                return null;
              }
            })
            .filter(clip => clip && clip.afterIntroduction);

          return audioAfterIntro.map((audio, audioIdx) => (
            <AudioPlayer
              key={audioIdx}
              src={audio.src}
              transcript={audio.transcript}
              speaker={audio.speaker}
            />
          ));
        })()}

        {/* Barra Decorativa */}
        <div className="flex items-center gap-4 my-10">
          <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
          <div className="w-2 h-2 rounded-full bg-orange-500" />
          <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
        </div>

        {/* Parágrafos com áudios intercalados */}
        <div className="space-y-6">
          {artist.content.paragraphs.map((paragraph, idx) => {
            // Parse dos áudios para encontrar qual deve aparecer após este parágrafo
            const audioClips = artist.content.audioClips || [];
            const audioAfterThis = audioClips
              .map(clip => {
                try {
                  return JSON.parse(clip);
                } catch {
                  return null;
                }
              })
              .filter(clip => clip && clip.afterParagraph === idx);

            return (
              <div key={idx}>
                <p
                  className="text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed"
                  style={{
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  {paragraph}
                </p>
                
                {/* Renderiza áudio se houver um após este parágrafo */}
                {audioAfterThis.map((audio, audioIdx) => (
                  <AudioPlayer
                    key={audioIdx}
                    src={audio.src}
                    transcript={audio.transcript}
                    speaker={audio.speaker}
                  />
                ))}
              </div>
            );
          })}
        </div>

        {/* Imagens Adicionais */}
        {artist.content.images && artist.content.images.length > 0 && (
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
            {artist.content.images.map((img, idx) => (
              <div key={idx} className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src={img}
                  alt={`${artist.name} - ${idx + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};
