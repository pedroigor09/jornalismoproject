'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { Brand } from '@/types/fashion';

interface BrandShowcaseProps {
  brand: Brand;
}

gsap.registerPlugin(ScrollTrigger);

export const BrandShowcase = ({ brand }: BrandShowcaseProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const [currentImageSet, setCurrentImageSet] = useState(0);

  // Extrair ID do YouTube
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = brand.videoUrl ? getYouTubeId(brand.videoUrl) : null;

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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="max-w-7xl mx-auto mb-32 px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <h3
          ref={titleRef}
          className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400 bg-clip-text text-transparent"
        >
          {brand.name}
        </h3>
        <p
          ref={descriptionRef}
          className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
        >
          {brand.description}
        </p>
      </div>

      {/* Vídeo */}
      {videoId && (
        <div ref={videoRef} className="mb-20">
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
            <p className="text-lg md:text-xl text-gray-200 italic leading-relaxed mb-4">
              "{quote.text}"
            </p>
            <p className="text-orange-400 font-semibold text-right">— {quote.author}</p>
          </div>
        ))}
      </div>

      {/* Carrossel de imagens */}
      <div className="space-y-6">
        <h4 className="text-3xl font-black text-center text-pink-300 mb-8">
          Peças da Coleção
        </h4>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {brand.images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <Image
                src={image}
                alt={`${brand.name} - Peça ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
              />
              
              {/* Overlay com efeito hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
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
