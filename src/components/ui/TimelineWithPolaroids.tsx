'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getAssetPath } from '@/lib/getAssetPath';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface TimelineEventWithImage {
  period: string;
  imageSrc: string;
  imageAlt: string;
  link?: string;
}

interface TimelineWithPolaroidsProps {
  events: TimelineEventWithImage[];
}

export const TimelineWithPolaroids = ({ events }: TimelineWithPolaroidsProps) => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const polaroidsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!timelineRef.current || !lineRef.current) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: timelineRef.current,
        start: 'top 70%',
        end: 'bottom 60%',
        scrub: 1,
      },
    });

    // Anima a linha crescendo
    timeline.fromTo(
      lineRef.current,
      { strokeDashoffset: 2000 },
      { strokeDashoffset: 0, duration: 1, ease: 'power2.out' }
    );

    // Anima os polaroids aparecendo em sequência
    polaroidsRef.current.forEach((polaroid, index) => {
      if (polaroid) {
        timeline.fromTo(
          polaroid,
          { scale: 0, opacity: 0, rotation: -10 },
          { 
            scale: 1, 
            opacity: 1, 
            rotation: index % 2 === 0 ? 5 : -5,
            duration: 0.4,
            ease: 'back.out(1.7)',
          },
          index * 0.2
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [events]);

  return (
    <div ref={timelineRef} className="my-16 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-20 text-gray-900">
          Linha do Tempo: O Sotaque Baiano na Mídia
        </h3>
        
        {/* Timeline Vertical para Mobile */}
        <div className="md:hidden space-y-12">
          {events.map((event, index) => (
            <div key={index} className="flex flex-col items-center">
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="polaroid-container mb-4 cursor-pointer block"
                style={{
                  transform: index % 2 === 0 ? 'rotate(3deg)' : 'rotate(-3deg)',
                }}
              >
                <div
                  ref={(el) => {
                    polaroidsRef.current[index] = el;
                  }}
                  className="bg-white p-3 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                >
                  <div className="relative w-48 h-48 bg-gray-200">
                    <Image
                      src={getAssetPath(event.imageSrc)}
                      alt={event.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </a>
              
              {index < events.length - 1 && (
                <div className="w-0.5 h-12 bg-gradient-to-b from-orange-500 to-orange-300" />
              )}
            </div>
          ))}
        </div>

        {/* Desktop: Horizontal Timeline com polaroids */}
        <div className="hidden md:block relative" style={{ minHeight: '400px' }}>
          {/* SVG com linha curva */}
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            style={{ overflow: 'visible' }}
          >
            <defs>
              <linearGradient id="polaroidLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="50%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#eab308" />
              </linearGradient>
            </defs>
            {/* Linha de fundo */}
            <path
              d="M 200,200 Q 500,150 800,220 T 1400,180"
              stroke="rgba(249, 115, 22, 0.2)"
              strokeWidth="3"
              fill="none"
            />
            {/* Linha animada */}
            <path
              ref={lineRef}
              d="M 200,200 Q 500,150 800,220 T 1400,180"
              stroke="url(#polaroidLineGradient)"
              strokeWidth="3"
              fill="none"
              strokeDasharray="2000"
              strokeDashoffset="2000"
            />
          </svg>

          {/* Container dos polaroids */}
          <div className="relative grid grid-cols-3 gap-8 max-w-5xl mx-auto">
            {events.map((event, index) => {
              // Posições Y para alinhar com a curva - apenas 3 pontos
              const yPositions = [140, 90, 120];
              const rotations = [5, -4, 3];
              
              return (
                <div
                  key={index}
                  className="flex flex-col items-center"
                  style={{ paddingTop: `${yPositions[index]}px` }}
                >
                  {/* Polaroid */}
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="polaroid-container mb-6 cursor-pointer block"
                    style={{
                      transform: `rotate(${rotations[index]}deg)`,
                    }}
                  >
                    <div
                      ref={(el) => {
                        polaroidsRef.current[index] = el;
                      }}
                      className="bg-white p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 hover:z-20 relative"
                    >
                      <div className="relative w-48 h-48 bg-gray-200">
                        <Image
                          src={getAssetPath(event.imageSrc)}
                          alt={event.imageAlt}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      {/* Tape effect */}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-6 bg-yellow-100/60 rotate-1 shadow-sm" 
                           style={{ 
                             clipPath: 'polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)',
                           }} 
                      />
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .polaroid-container {
          transition: transform 0.3s ease;
        }
        
        .polaroid-container:hover {
          transform: rotate(0deg) !important;
        }
      `}</style>
    </div>
  );
};
