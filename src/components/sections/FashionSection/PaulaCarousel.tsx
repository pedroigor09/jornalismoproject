'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { getAssetPath } from '@/lib/getAssetPath';

const paulaPhotos = [
  '/paula8.JPG',
  '/paula9.JPG',
  '/paula1.JPG',
  '/paula2.JPG',
  '/paula3.JPG',
  '/paula4.JPG',
];

const PaulaCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) {
      const timer = setTimeout(() => {
        setIsAutoPlaying(true);
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [isAutoPlaying]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % paulaPhotos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % paulaPhotos.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + paulaPhotos.length) % paulaPhotos.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto my-16 px-4 z-10">
      {/* Carrossel Principal */}
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-pink-900/20 to-purple-900/20 backdrop-blur-sm border border-pink-400/20 shadow-2xl">
        {paulaPhotos.map((photo, index) => (
          <div
            key={photo}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={getAssetPath(photo)}
              alt={`Paula Magalhães ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

        {/* Badge contador */}
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-pink-400/30">
          <span className="text-white font-semibold text-sm">
            {currentSlide + 1} / {paulaPhotos.length}
          </span>
        </div>

        {/* Botões de navegação */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/70 hover:scale-110 transition-all duration-300 border border-pink-400/30"
          aria-label="Anterior"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/70 hover:scale-110 transition-all duration-300 border border-pink-400/30"
          aria-label="Próximo"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Indicadores de progresso */}
      <div className="flex justify-center items-center gap-2 mt-6">
        {paulaPhotos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 h-2 rounded-full ${
              index === currentSlide
                ? 'w-12 bg-gradient-to-r from-pink-500 to-purple-500'
                : 'w-3 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Miniaturas */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mt-8">
        {paulaPhotos.map((photo, index) => (
          <button
            key={photo}
            onClick={() => goToSlide(index)}
            className={`relative aspect-[4/3] rounded-lg overflow-hidden transition-all duration-300 ${
              index === currentSlide
                ? 'ring-4 ring-pink-400 scale-105'
                : 'ring-1 ring-white/20 hover:ring-2 hover:ring-pink-300 hover:scale-105'
            }`}
          >
            <Image
              src={getAssetPath(photo)}
              alt={`Miniatura ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaulaCarousel;
