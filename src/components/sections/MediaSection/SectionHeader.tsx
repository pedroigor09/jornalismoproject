'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { YouTubeEmbed } from '@/components/ui/YouTubeEmbed';
import { QuoteWithImage } from '@/components/ui/QuoteWithImage';

interface MediaSectionHeaderProps {
  title: string;
  subtitle: string;
  introductions: string[];
}

gsap.registerPlugin(ScrollTrigger);

export const MediaSectionHeader = ({ title, subtitle, introductions }: MediaSectionHeaderProps) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!headerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1,
        },
        opacity: 0,
        y: 60,
        scale: 0.95,
      });

      gsap.from(subtitleRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 75%',
          end: 'top 25%',
          scrub: 1,
        },
        opacity: 0,
        y: 40,
      });

      const intros = headerRef.current?.querySelectorAll('.intro-paragraph');
      if (intros) {
        gsap.from(intros, {
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 70%',
            end: 'top 20%',
            scrub: 1,
          },
          opacity: 0,
          y: 30,
          stagger: 0.1,
        });
      }
    }, headerRef);

    return () => ctx.revert();
  }, []);

  // Processa o texto para separar parágrafos e identificar vídeos
  const allParagraphs = introductions[0]?.split('\n\n') || [];

  return (
    <div ref={headerRef} className="max-w-6xl mx-auto mb-24 px-6">
      <div className="text-center mb-12">
        <h2
          ref={titleRef}
          className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-orange-400 via-yellow-400 to-blue-400 bg-clip-text text-transparent leading-tight"
        >
          {title}
        </h2>
        
        <p
          ref={subtitleRef}
          className="text-2xl md:text-3xl font-light text-orange-600 mb-8 italic"
        >
          {subtitle}
        </p>

        {/* Linha Decorativa */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-orange-500 rounded-full" />
          <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse" />
          <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-orange-500 rounded-full" />
        </div>
      </div>
      
      {/* Texto Introdutório */}
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Detalhe decorativo */}
          <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-indigo-500 rounded-full opacity-70" />
          
          <div className="space-y-8 pl-8">
            {allParagraphs.map((paragraph, index) => {
              // Verifica se é um marcador de vídeo
              const videoMatch = paragraph.match(/^\[VIDEO:([^\]]+)\]$/);
              
              if (videoMatch) {
                return (
                  <div key={index} className="my-12">
                    <YouTubeEmbed 
                      videoId={videoMatch[1]} 
                      credit="Vídeo: Amanda Marinho, Deborah Freitas e Ilary Almeida"
                    />
                  </div>
                );
              }
              
              // Verifica se é um marcador de citação com imagem
              const quoteImageMatch = paragraph.match(/^\[QUOTE_IMAGE:([^:]+):(.+)\]$/);
              
              if (quoteImageMatch) {
                return (
                  <div key={index} className="my-12">
                    <QuoteWithImage 
                      imagePath={quoteImageMatch[1]}
                      imageAlt="Silvana Freire"
                      quote={quoteImageMatch[2]}
                    />
                  </div>
                );
              }
              
              return (
                <p
                  key={index}
                  className="intro-paragraph text-base md:text-lg lg:text-xl text-gray-900 leading-relaxed font-light text-justify"
                >
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
