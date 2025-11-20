'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { getAssetPath } from '@/lib/getAssetPath';

interface HeroSectionProps {
  title: string[];
  descriptions: string[];
  imageUrl?: string;
  imageAlt?: string;
}

export const HeroSection = ({
  title,
  descriptions,
}: HeroSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Animação da imagem
      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 1.5,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-[#FF5722]"
    >
      {/* Imagem principal que cobre toda a tela */}
      <div ref={imageRef} className="relative w-full h-screen">
        <Image
          src={getAssetPath('/sotaquehome.png')}
          alt="Sotaque em Pauta - A identidade e resistência no falar baiano"
          fill
          priority
          className="object-contain md:object-cover"
          style={{
            filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))',
          }}
        />
      </div>
    </section>
  );
};
