'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ImageCarousel } from '@/components/ui/ImageCarousel';

gsap.registerPlugin(ScrollTrigger);

interface VideoRevealSectionProps {
  videoUrl: string;
  title?: string;
  subtitle?: string;
  introText?: string;
  carouselImages?: string[];
  carouselCaption?: string;
  carouselPosition?: number; // Índice do parágrafo após o qual inserir o carrossel
}

export const VideoRevealSection = ({ 
  videoUrl, 
  title = "Descubra a Bahia",
  subtitle = "Uma jornada visual pela nossa cultura",
  introText,
  carouselImages = [],
  carouselCaption,
  carouselPosition
}: VideoRevealSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const videoContainer = videoContainerRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const textContainer = textContainerRef.current;

    if (!section || !videoContainer || !title || !subtitle) return;

    // Animação do título - fade in e slide up
    gsap.fromTo(
      title,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          end: 'top 50%',
          scrub: 1,
        },
      }
    );

    // Animação do subtítulo - fade in e slide up (com delay)
    gsap.fromTo(
      subtitle,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 65%',
          end: 'top 45%',
          scrub: 1,
        },
      }
    );

    // Animação do texto introdutório - fade in com stagger nos parágrafos
    if (textContainer) {
      const paragraphs = textContainer.querySelectorAll('p');
      gsap.fromTo(
        paragraphs,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: textContainer,
            start: 'top 75%',
            end: 'top 40%',
            scrub: 1,
          },
        }
      );
    }

    // Animação do container do vídeo - começa pequeno e cresce
    gsap.fromTo(
      videoContainer,
      {
        scale: 0.7,
        opacity: 0,
        borderRadius: '50%',
      },
      {
        scale: 1,
        opacity: 1,
        borderRadius: '24px',
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: videoContainer,
          start: 'top 70%',
          end: 'top 30%',
          scrub: 1,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Extrai o ID do vídeo do YouTube
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getYouTubeId(videoUrl);
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=0&mute=0&controls=1&rel=0&modestbranding=1` : '';

  // Divide o texto em parágrafos
  const paragraphs = introText ? introText.split('\n').filter(p => p.trim() !== '') : [];

  // Função para processar links no texto
  const processTextWithLinks = (text: string) => {
    // Procura por padrões como "ALiB" ou "Atlas Linguístico do Brasil" e adiciona link
    const alibPattern = /(Atlas Linguístico do Brasil|ALiB)/gi;
    const parts = text.split(alibPattern);
    
    return parts.map((part, index) => {
      if (part.match(alibPattern)) {
        return (
          <a
            key={index}
            href="https://alib.ufba.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-300 underline decoration-orange-400/50 hover:decoration-orange-300 transition-colors"
          >
            {part}
          </a>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <section
      id="pegue-a-visao"
      ref={sectionRef}
      className="relative py-20 md:py-32 px-4 md:px-12 lg:px-24 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(30,31,37,1) 50%, rgba(0,0,0,0.95) 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Título e Subtítulo */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            style={{
              textShadow: '0 4px 20px rgba(255, 107, 53, 0.5)',
            }}
          >
            {title}
          </h2>
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light"
          >
            {subtitle}
          </p>
        </div>

        {/* Texto Introdutório Cinematográfico */}
        {introText && paragraphs.length > 0 && (
          <div 
            ref={textContainerRef}
            className="max-w-4xl mx-auto mb-16 md:mb-20"
          >
            <div className="relative">
              {/* Detalhe decorativo */}
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-orange-500 via-yellow-500 to-red-500 rounded-full opacity-70" />
              
              <div className="space-y-6 pl-8">
                {paragraphs.map((paragraph, index) => (
                  <div key={index}>
                    <p
                      className="text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed font-light"
                      style={{
                        textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
                      }}
                    >
                      {processTextWithLinks(paragraph)}
                    </p>
                    
                    {/* Insere o carrossel após o parágrafo especificado */}
                    {carouselPosition === index && carouselImages.length > 0 && (
                      <ImageCarousel 
                        images={carouselImages}
                        caption={carouselCaption}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Detalhe decorativo inferior */}
              <div className="mt-8 flex items-center gap-4 pl-8">
                <div className="w-20 h-0.5 bg-gradient-to-r from-orange-500 to-transparent rounded-full" />
                <span className="text-orange-400 text-sm font-bold uppercase tracking-wider">
                  Assista ao vídeo
                </span>
                <div className="w-20 h-0.5 bg-gradient-to-l from-orange-500 to-transparent rounded-full" />
              </div>
            </div>
          </div>
        )}

        {/* Container do Vídeo */}
        <div
          ref={videoContainerRef}
          className="relative w-full max-w-5xl mx-auto"
          style={{
            aspectRatio: '16/9',
            boxShadow: '0 20px 60px rgba(255, 107, 53, 0.4), 0 0 100px rgba(253, 200, 48, 0.2)',
          }}
        >
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full rounded-3xl"
              style={{
                border: '4px solid rgba(255, 107, 53, 0.3)',
              }}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 rounded-3xl">
              <p className="text-white text-xl">Vídeo indisponível</p>
            </div>
          )}
        </div>

        {/* Efeito de luz ambiente */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(255,107,53,0.15) 0%, rgba(253,200,48,0.05) 50%, transparent 70%)',
            filter: 'blur(80px)',
            zIndex: 0,
          }}
        />
      </div>
    </section>
  );
};

export default VideoRevealSection;
