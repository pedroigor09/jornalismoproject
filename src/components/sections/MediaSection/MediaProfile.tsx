'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { MediaProfessional } from '@/types/media';
import FloatingPolaroidsProfile from '@/components/ui/FloatingPolaroidsProfile';

interface MediaProfileProps {
  professional: MediaProfessional;
  index: number;
}

gsap.registerPlugin(ScrollTrigger);

export const MediaProfile = ({ professional, index }: MediaProfileProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const isEven = index % 2 === 0;

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        },
        x: isEven ? -80 : 80,
        opacity: 0,
        scale: 0.92,
      });

      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          end: 'top 25%',
          scrub: 1,
        },
        x: isEven ? 60 : -60,
        opacity: 0,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isEven]);

  return (
    <div
      ref={containerRef}
      className={`max-w-7xl mx-auto mb-32 px-6 ${!isEven ? 'lg:flex-row-reverse' : ''}`}
    >
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
        {/* Imagem */}
        <div
          ref={imageRef}
          className={`relative ${!isEven ? 'lg:order-2' : ''}`}
        >
          {/* Polaroides flutuantes se existirem */}
          {professional.polaroids && professional.polaroids.length > 0 && (
            <FloatingPolaroidsProfile images={professional.polaroids} containerHeight="100%" />
          )}
          
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl z-0">
            <Image
              src={professional.image}
              alt={professional.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-2">
                {professional.name}
              </h3>
              <p className="text-cyan-300 text-lg font-light mb-4">{professional.role}</p>
              
              {professional.bio && (
                <p className="text-gray-300 text-sm leading-relaxed">
                  {professional.bio}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Conteúdo */}
        <div
          ref={contentRef}
          className={`space-y-6 ${!isEven ? 'lg:order-1' : ''}`}
        >
          {/* Quote destacada */}
          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-300/30 rounded-2xl p-6 md:p-8 relative">
            <span className="text-6xl text-cyan-400/30 absolute -top-2 -left-1 font-serif">"</span>
            <p className="text-lg md:text-xl text-cyan-100 italic font-light leading-relaxed relative z-10">
              {professional.quote}
            </p>
            <span className="text-6xl text-cyan-400/30 absolute -bottom-6 -right-1 font-serif">"</span>
          </div>

          {/* Introdução */}
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            {professional.content.introduction}
          </p>

          {/* Parágrafos */}
          <div className="space-y-5">
            {professional.content.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="text-gray-400 text-sm md:text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Vídeo se houver */}
          {professional.videoUrl && (
            <div className="mt-8">
              <div className="relative">
                {/* Badge de destaque */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-black px-6 py-2 rounded-full shadow-xl z-10 flex items-center gap-2">
                  <span className="text-xl">🎬</span>
                  <span>ASSISTA O VÍDEO</span>
                </div>
                
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black border-2 border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-500 hover:scale-[1.02]">
                  <iframe
                    src={`https://www.youtube.com/embed/${professional.videoUrl}`}
                    title={professional.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>

                {/* Efeito de brilho */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-20 blur-xl -z-10" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
