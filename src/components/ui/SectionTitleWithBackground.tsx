'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getAssetPath } from '@/lib/getAssetPath';

interface SectionTitleWithBackgroundProps {
  title: string;
  imageSrc: string;
  imageAlt?: string;
}

gsap.registerPlugin(ScrollTrigger);

export const SectionTitleWithBackground = ({
  title,
  imageSrc,
  imageAlt = 'Imagem de fundo',
}: SectionTitleWithBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!containerRef.current || !titleRef.current) return;

    const ctx = gsap.context(() => {
      // Animação de parallax na imagem
      gsap.to(containerRef.current?.querySelector('.parallax-image'), {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
        y: 100,
        scale: 1.1,
      });

      // Animação do título
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1,
        },
        opacity: 0,
        y: 50,
        scale: 0.9,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden my-16 rounded-3xl shadow-2xl">
      {/* Imagem de fundo com parallax */}
      <div className="parallax-image absolute inset-0 w-full h-full">
        <Image
          src={getAssetPath(imageSrc)}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay gradiente com cores baianas */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-orange-900/60 to-yellow-900/70 backdrop-blur-[2px]" />
      
      {/* Overlay adicional para mais profundidade */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

      {/* Efeitos decorativos */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Linhas decorativas */}
        <div className="absolute top-10 left-10 w-20 h-20 border-t-4 border-l-4 border-yellow-400/60 rounded-tl-3xl" />
        <div className="absolute bottom-10 right-10 w-20 h-20 border-b-4 border-r-4 border-orange-400/60 rounded-br-3xl" />
        
        {/* Círculos decorativos */}
        <div className="absolute top-1/4 right-20 w-3 h-3 rounded-full bg-yellow-400/40 animate-pulse" />
        <div className="absolute bottom-1/3 left-24 w-4 h-4 rounded-full bg-orange-400/40 animate-pulse delay-75" />
        <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-blue-400/40 animate-pulse delay-150" />
      </div>

      {/* Título */}
      <div className="relative h-full flex items-center justify-center px-6 md:px-12">
        <h2
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-center leading-tight max-w-5xl"
        >
          <span className="block bg-gradient-to-r from-yellow-200 via-orange-300 to-yellow-200 bg-clip-text text-transparent drop-shadow-2xl">
            {title}
          </span>
          
          {/* Linha decorativa abaixo do título */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-orange-500 rounded-full shadow-lg" />
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 animate-pulse shadow-xl" />
            <div className="w-16 h-1 bg-gradient-to-l from-transparent via-orange-500 to-yellow-400 rounded-full shadow-lg" />
          </div>
        </h2>
      </div>

      {/* Vinheta nas bordas */}
      <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] pointer-events-none rounded-3xl" />
    </div>
  );
};
