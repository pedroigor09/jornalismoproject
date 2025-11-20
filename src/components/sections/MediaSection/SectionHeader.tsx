'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { YouTubeEmbed } from '@/components/ui/YouTubeEmbed';
import { QuoteWithImage } from '@/components/ui/QuoteWithImage';
import { ClickableAudioImage } from '@/components/ui/ClickableAudioImage';
import { HighlightQuote } from '@/components/ui/HighlightQuote';
import { SectionTitleWithBackground } from '@/components/ui/SectionTitleWithBackground';
import { TimelineWithPolaroids } from '@/components/ui/TimelineWithPolaroids';
import { getAssetPath } from '@/lib/getAssetPath';
import { AudioPlayer } from '@/components/ui/AudioPlayer';

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
          <div className="space-y-8">
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
              
              // Verifica se é um marcador de áudio com imagem
              // Formato: [AUDIO_IMAGE:imagePath:audioPath:transcript:speaker]
              const audioImageMatch = paragraph.match(/^\[AUDIO_IMAGE:([^:]+):([^:]+):([^:]+):([^\]]+)\]$/);
              
              if (audioImageMatch) {
                return (
                  <div key={index} className="my-12">
                    <ClickableAudioImage
                      imageSrc={audioImageMatch[1]}
                      audioSrc={audioImageMatch[2]}
                      transcript={audioImageMatch[3]}
                      speaker={audioImageMatch[4]}
                      alt={audioImageMatch[4]}
                    />
                  </div>
                );
              }
              
              // Verifica se é um marcador de título com imagem de fundo
              // Formato: [TITLE_BG:imagePath:titleText]
              const titleBgMatch = paragraph.match(/^\[TITLE_BG:([^:]+):(.+)\]$/);
              
              if (titleBgMatch) {
                return (
                  <div key={index} className="my-16 -mx-6 md:-mx-12 lg:-mx-24">
                    <SectionTitleWithBackground
                      imageSrc={titleBgMatch[1]}
                      title={titleBgMatch[2]}
                      imageAlt="Pelourinho - Salvador, Bahia"
                    />
                  </div>
                );
              }
              
              // Verifica se é um marcador de timeline com polaroids
              // Formato: [TIMELINE_POLAROIDS]
              if (paragraph.trim() === '[TIMELINE_POLAROIDS]') {
                return (
                  <div key={index} className="my-16">
                    <TimelineWithPolaroids
                      events={[
                        {
                          period: '',
                          imageSrc: '/man1.jpg',
                          imageAlt: 'Manchete sobre sotaque baiano',
                          link: 'https://caras.com.br/tv/isadora-cruz-fala-sobre-preconceito-com-o-sotaque-nordestino-falaram-que-tinha-que-mudar.phtml'
                        },
                        {
                          period: '',
                          imageSrc: '/man2.jpg',
                          imageAlt: 'Manchete sobre preconceito linguístico',
                          link: 'https://g1.globo.com/ba/bahia/noticia/2025/07/21/preta-gil-quase-repetiu-de-ano-por-causa-de-preconceito-linguistico.ghtml'
                        },
                        {
                          period: '',
                          imageSrc: '/man3.jpg',
                          imageAlt: 'Manchete sobre sotaque nordestino',
                          link: 'https://g1.globo.com/pop-arte/noticia/2022/06/11/juliette-neutralizar-o-sotaque.ghtml'
                        }
                      ]}
                    />
                  </div>
                );
              }
              
              // Verifica se é um marcador de áudio simples
              // Formato: [AUDIO:audioPath:transcript:speaker]
              const audioMatch = paragraph.match(/^\[AUDIO:([^:]+):([^:]+):([^\]]+)\]$/);
              
              if (audioMatch) {
                return (
                  <div key={index} className="my-12">
                    <AudioPlayer
                      src={audioMatch[1]}
                      transcript={audioMatch[2]}
                      speaker={audioMatch[3]}
                    />
                  </div>
                );
              }
              
              // Verifica se é um marcador de GIF
              // Formato: [GIF:path]
              const gifMatch = paragraph.match(/^\[GIF:([^\]]+)\]$/);
              
              if (gifMatch) {
                return (
                  <div key={index} className="my-12 flex justify-center">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-orange-400 max-w-2xl w-full">
                      <img
                        src={getAssetPath(gifMatch[1])}
                        alt="GIF animado"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                );
              }
              
              // Verifica se é um marcador de título de seção
              // Formato: [SECTION_TITLE:titleText]
              const sectionTitleMatch = paragraph.match(/^\[SECTION_TITLE:(.+)\]$/);
              
              if (sectionTitleMatch) {
                return (
                  <div key={index} className="my-16">
                    <h3 className="text-4xl md:text-5xl font-black text-center bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent leading-tight px-6">
                      {sectionTitleMatch[1]}
                    </h3>
                    <div className="flex items-center justify-center gap-3 mt-6">
                      <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-orange-500 rounded-full" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse" />
                      <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-orange-500 rounded-full" />
                    </div>
                  </div>
                );
              }
              
              // Verifica se é uma citação formatada com aspas e " - Autor"
              const trimmed = paragraph.trim();
              const quotePattern = /^[""](.+?)[""]\.?\s*-\s*(.+?)\.?$/;
              const quoteMatch = trimmed.match(quotePattern);
              
              if (quoteMatch) {
                return (
                  <div key={index} className="my-12">
                    <HighlightQuote 
                      quote={quoteMatch[1].trim()}
                      author={quoteMatch[2].trim()}
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
