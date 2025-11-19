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
        <div ref={videoRef} className="mb-8">
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
          
          {/* Legenda do vídeo */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600 italic">
              Vídeo: Amanda Marinho, Deborah Freitas e Ilary Almeida
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
