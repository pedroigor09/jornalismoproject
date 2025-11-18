'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getAssetPath } from '@/lib/getAssetPath';

gsap.registerPlugin(ScrollTrigger);

interface FloatingPolaroidsProps {
  images: string[];
  alignRight?: boolean;
}

export const FloatingPolaroids = ({ images, alignRight = true }: FloatingPolaroidsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const polaroidRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (polaroidRefs.current.length === 0) return;

    const ctx = gsap.context(() => {
      polaroidRefs.current.forEach((polaroid, index) => {
        if (!polaroid) return;

        // Animação inicial de entrada
        gsap.from(polaroid, {
          scrollTrigger: {
            trigger: polaroid,
            start: 'top 85%',
            end: 'bottom 15%',
          },
          opacity: 0,
          y: 60,
          rotation: index % 2 === 0 ? -15 : 15,
          scale: 0.8,
          duration: 0.8,
          delay: index * 0.15,
          ease: 'back.out(1.7)',
        });

        // Animação contínua de flutuação
        gsap.to(polaroid, {
          y: `${index % 2 === 0 ? '-=' : '+='}15`,
          rotation: index % 2 === 0 ? '+=3' : '-=3',
          duration: 2.5 + index * 0.5,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        });

        // Efeito de hover
        const handleMouseEnter = () => {
          gsap.to(polaroid, {
            scale: 1.1,
            rotation: 0,
            zIndex: 50,
            duration: 0.3,
            ease: 'power2.out',
          });
        };

        const handleMouseLeave = () => {
          gsap.to(polaroid, {
            scale: 1,
            rotation: index % 2 === 0 ? -6 : 6,
            zIndex: 10 + index,
            duration: 0.3,
            ease: 'power2.out',
          });
        };

        polaroid.addEventListener('mouseenter', handleMouseEnter);
        polaroid.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          polaroid.removeEventListener('mouseenter', handleMouseEnter);
          polaroid.removeEventListener('mouseleave', handleMouseLeave);
        };
      });
    });

    return () => ctx.revert();
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <>
      {images.map((image, index) => (
        <div
          key={index}
          ref={(el) => {
            polaroidRefs.current[index] = el;
          }}
          className="absolute cursor-pointer transition-shadow hover:shadow-2xl pointer-events-auto"
          style={{
            width: '150px',
            height: '170px',
            top: `${30 + index * 100}px`,
            ...(alignRight 
              ? { right: `-${120 + index * 20}px` }
              : { left: `-${120 + index * 20}px` }
            ),
            zIndex: 10 + index,
            transform: `rotate(${index % 2 === 0 ? -10 : 10}deg)`,
          }}
        >
          {/* Moldura estilo Polaroid */}
          <div className="w-full h-full bg-white rounded-lg shadow-xl overflow-hidden p-2.5">
            <div className="relative w-full h-[120px] bg-gray-200 rounded overflow-hidden">
              <Image
                src={getAssetPath(image)}
                alt={`Polaroid ${index + 1}`}
                fill
                className="object-cover"
                quality={100}
                sizes="150px"
              />
            </div>
            {/* Espaço inferior da polaroid */}
            <div className="h-[40px] bg-white" />
          </div>

          {/* Sombra extra para profundidade */}
          <div className="absolute inset-0 -z-10 bg-black/20 blur-md transform translate-y-2" />
        </div>
      ))}
    </>
  );
};
