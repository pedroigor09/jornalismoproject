'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { FashionReference } from '@/types/fashion';

interface FashionReferencesCarouselProps {
  references: FashionReference[];
}

gsap.registerPlugin(ScrollTrigger);

export const FashionReferencesCarousel = ({ references }: FashionReferencesCarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !carouselRef.current) return;

    const ctx = gsap.context(() => {
      // Animação do título
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1,
        },
        opacity: 0,
        y: 30,
      });

      // Animação dos cards com stagger
      const cards = carouselRef.current?.querySelectorAll('.fashion-card');
      if (cards) {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: carouselRef.current,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1,
          },
          opacity: 0,
          y: 60,
          scale: 0.95,
          stagger: 0.1,
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="max-w-7xl mx-auto mb-24 px-6">
      <h3
        ref={titleRef}
        className="text-4xl md:text-5xl font-black text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
      >
        Referências da Moda Baiana
      </h3>

      <div
        ref={carouselRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {references.map((reference, index) => (
          <div
            key={index}
            className="fashion-card group relative aspect-square rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
          >
            {/* Imagem */}
            <Image
              src={reference.image}
              alt={reference.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

            {/* Conteúdo */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h4 className="text-2xl font-black text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                {reference.name}
              </h4>
              <p className="text-pink-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                {reference.description}
              </p>
            </div>

            {/* Borda animada */}
            <div className="absolute inset-0 border-2 border-pink-400/0 group-hover:border-pink-400/50 rounded-2xl transition-all duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
};
