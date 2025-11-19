'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { Brand } from '@/types/fashion';
import { getAssetPath } from '@/lib/getAssetPath';

// Componente de showcase de marca com carrossel
interface BrandShowcaseProps {
  brand: Brand;
}

gsap.registerPlugin(ScrollTrigger);

export const BrandShowcase = ({ brand }: BrandShowcaseProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Extrair ID do YouTube
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = brand.videoUrl ? getYouTubeId(brand.videoUrl) : null;

  // Auto-play do carrossel
  useEffect(() => {
    if (!isAutoPlaying || brand.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % brand.images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, brand.images.length]);

  // Navegação do carrossel
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % brand.images.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + brand.images.length) % brand.images.length);
  };

  useEffect(() => {
    if (!containerRef.current) return;

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
        y: 50,
        scale: 0.95,
      });

      // Animação da descrição
      gsap.from(descriptionRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          end: 'top 25%',
          scrub: 1,
        },
        opacity: 0,
        y: 30,
      });

      // Animação do vídeo
      if (videoRef.current) {
        gsap.from(videoRef.current, {
          scrollTrigger: {
            trigger: videoRef.current,
            start: 'top 85%',
            end: 'top 35%',
            scrub: 1,
          },
          scale: 0.8,
          opacity: 0,
          borderRadius: '50%',
        });
      }

      // Animação do carrossel
      if (carouselRef.current) {
        gsap.from(carouselRef.current, {
          scrollTrigger: {
            trigger: carouselRef.current,
            start: 'top 85%',
            end: 'top 35%',
            scrub: 1,
          },
          y: 60,
          opacity: 0,
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="max-w-7xl mx-auto mb-32 px-6">
      {/* Vídeo */}
      {videoId && (
        <div ref={videoRef} className="mb-20">
          {/* Detalhe decorativo antes do vídeo */}
          <div className="mb-8 flex items-center justify-center gap-4">
            <div className="w-20 h-0.5 bg-gradient-to-r from-orange-500 to-transparent rounded-full" />
            <span className="text-orange-600 text-sm font-bold uppercase tracking-wider">
              Assista ao vídeo
            </span>
            <div className="w-20 h-0.5 bg-gradient-to-l from-orange-500 to-transparent rounded-full" />
          </div>
          
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title={brand.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      )}

      {/* Quotes em cards */}
      <div className="space-y-8 mb-20">
        {brand.quotes.map((quote, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-orange-500/10 to-pink-500/10 backdrop-blur-sm border border-orange-300/20 rounded-2xl p-8 hover:border-orange-300/40 transition-all duration-500"
          >
            <p className="text-lg md:text-xl text-gray-900 italic leading-relaxed mb-4">
              "{quote.text}"
            </p>
            <p className="text-orange-400 font-semibold text-right">— {quote.author}</p>
          </div>
        ))}
      </div>

      {/* Carrossel Cinematográfico */}
      <div ref={carouselRef} className="space-y-6">
        <h4 className="text-4xl font-black text-center bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent mb-12">
          Peças da Coleção
        </h4>
        
        {/* Carrossel principal */}
        <div className="relative">
          {/* Container de imagens */}
          <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-500/20 to-pink-500/20">
            {brand.images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentSlide
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-95 pointer-events-none'
                }`}
              >
                <Image
                  src={getAssetPath(image)}
                  alt={`${brand.name} - Peça ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
                
                {/* Número da imagem */}
                <div className="absolute top-8 right-8 bg-black/60 backdrop-blur-sm px-6 py-3 rounded-full border border-orange-400/50">
                  <span className="text-orange-300 font-black text-lg">
                    {index + 1} / {brand.images.length}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Botões de navegação */}
          {brand.images.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/70 backdrop-blur-sm border-2 border-orange-400/50 flex items-center justify-center text-orange-300 hover:bg-orange-500/20 hover:border-orange-400 hover:scale-110 transition-all duration-300 group z-10"
                aria-label="Anterior"
              >
                <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/70 backdrop-blur-sm border-2 border-orange-400/50 flex items-center justify-center text-orange-300 hover:bg-orange-500/20 hover:border-orange-400 hover:scale-110 transition-all duration-300 group z-10"
                aria-label="Próximo"
              >
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Indicadores de slides */}
          {brand.images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
              {brand.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-500 rounded-full ${
                    index === currentSlide
                      ? 'w-12 h-3 bg-gradient-to-r from-orange-400 to-pink-400'
                      : 'w-3 h-3 bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Thumbnails */}
        {brand.images.length > 1 && (
          <div className="grid grid-cols-3 gap-4 mt-8">
            {brand.images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative aspect-[4/3] rounded-xl overflow-hidden transition-all duration-500 ${
                  index === currentSlide
                    ? 'ring-4 ring-orange-400 scale-105 shadow-2xl'
                    : 'ring-2 ring-white/20 hover:ring-orange-300/50 hover:scale-102'
                }`}
              >
                <Image
                  src={getAssetPath(image)}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
                
                {/* Overlay quando não ativo */}
                {index !== currentSlide && (
                  <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-all duration-300" />
                )}
                
                {/* Badge de ativo */}
                {index === currentSlide && (
                  <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-black px-3 py-1 rounded-full">
                    ATUAL
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Padrão decorativo */}
      <div className="mt-16 flex justify-center gap-2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 animate-pulse"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  );
};
