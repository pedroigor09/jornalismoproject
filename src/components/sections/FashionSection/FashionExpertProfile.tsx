'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { FashionExpert } from '@/types/fashion';
import { getAssetPath } from '@/lib/getAssetPath';

interface FashionExpertProfileProps {
  expert: FashionExpert;
}

gsap.registerPlugin(ScrollTrigger);

export const FashionExpertProfile = ({ expert }: FashionExpertProfileProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Animação da imagem com parallax
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        },
        y: 100,
        opacity: 0,
        scale: 0.9,
      });

      // Animação do conteúdo
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          end: 'top 25%',
          scrub: 1,
        },
        x: 50,
        opacity: 0,
      });

      // Animação da quote destacada
      gsap.from(quoteRef.current, {
        scrollTrigger: {
          trigger: quoteRef.current,
          start: 'top 85%',
          end: 'top 35%',
          scrub: 1,
        },
        scale: 0.95,
        opacity: 0,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="max-w-7xl mx-auto mb-32 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Imagem */}
        <div ref={imageRef} className="relative">
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={getAssetPath(expert.image)}
              alt={expert.name}
              fill
              className="object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Nome e cargo sobre a imagem */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-3xl font-black text-white mb-2">{expert.name}</h3>
              <p className="text-pink-300 text-lg font-light">{expert.role}</p>
            </div>
          </div>
        </div>

        {/* Conteúdo */}
        <div ref={contentRef} className="space-y-8">
          {/* Quote destacada */}
          <div
            ref={quoteRef}
            className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-pink-300/30 rounded-2xl p-8 relative"
          >
            <span className="text-7xl text-pink-400/30 absolute -top-4 -left-2 font-serif">"</span>
            <p className="text-xl md:text-2xl text-pink-100 italic font-light leading-relaxed relative z-10">
              {expert.quote}
            </p>
            <span className="text-7xl text-pink-400/30 absolute -bottom-8 -right-2 font-serif">"</span>
          </div>

          {/* Introdução */}
          <p className="text-gray-300 text-lg leading-relaxed">
            {expert.content.introduction}
          </p>

          {/* Parágrafos */}
          <div className="space-y-6">
            {expert.content.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-400 text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
