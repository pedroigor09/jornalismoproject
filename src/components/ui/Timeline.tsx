'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface TimelineEvent {
  period: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export const Timeline = ({ events }: TimelineProps) => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);

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

    // Anima a linha crescendo usando strokeDashoffset
    timeline.fromTo(
      lineRef.current,
      { strokeDashoffset: 2000 },
      { strokeDashoffset: 0, duration: 1, ease: 'power2.out' }
    );

    // Anima os pontos e textos aparecendo em sequência
    dotsRef.current.forEach((dot, index) => {
      if (dot) {
        const parent = dot.parentElement;
        
        timeline.fromTo(
          dot,
          { scale: 0, opacity: 0 },
          { 
            scale: 1, 
            opacity: 1, 
            duration: 0.3,
            ease: 'back.out(1.7)',
          },
          index * 0.15
        );

        // Anima o texto junto
        if (parent) {
          const textContainer = parent.querySelector('.text-container');
          if (textContainer) {
            timeline.fromTo(
              textContainer,
              { opacity: 0, y: 20 },
              { 
                opacity: 1, 
                y: 0, 
                duration: 0.4,
                ease: 'power2.out',
              },
              index * 0.15 + 0.1
            );
          }
        }
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
          Linha do Tempo da Formação Linguística Baiana
        </h3>
        
        {/* Timeline Vertical para Mobile e Horizontal para Desktop */}
        <div className="relative">
          {/* Mobile: Vertical Timeline */}
          <div className="md:hidden space-y-8">
            {events.map((event, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div
                    ref={(el) => {
                      dotsRef.current[index] = el;
                    }}
                    className="w-4 h-4 rounded-full bg-gradient-to-br from-orange-500 to-red-500 shadow-lg relative flex-shrink-0"
                    style={{
                      boxShadow: '0 0 20px rgba(255, 107, 53, 0.6)',
                    }}
                  >
                    <div className="absolute inset-0 rounded-full bg-orange-500 opacity-30 animate-ping" />
                  </div>
                  {index < events.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-orange-500 to-orange-300 mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="text-sm font-bold text-orange-600 mb-2">
                    {event.period}
                  </div>
                  <div className="text-base font-semibold text-gray-900 mb-2">
                    {event.title}
                  </div>
                  <div className="text-sm text-gray-700 leading-relaxed">
                    {event.description}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Horizontal Timeline com linha curva */}
          <div className="hidden md:block relative" style={{ minHeight: '500px' }}>
            {/* SVG com linha curva conectando os pontos */}
            <svg
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              style={{ overflow: 'visible' }}
            >
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="50%" stopColor="#ef4444" />
                  <stop offset="100%" stopColor="#eab308" />
                </linearGradient>
              </defs>
              {/* Linha de fundo (opaca) */}
              <path
                d="M 50,80 Q 200,40 350,120 T 650,120 T 950,100 T 1250,140 T 1550,80"
                stroke="rgba(249, 115, 22, 0.2)"
                strokeWidth="2"
                fill="none"
              />
              {/* Linha animada */}
              <path
                ref={lineRef}
                d="M 50,80 Q 200,40 350,120 T 650,120 T 950,100 T 1250,140 T 1550,80"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="2000"
                strokeDashoffset="2000"
              />
            </svg>

            {/* Container dos eventos */}
            <div className="relative grid grid-cols-6 gap-4">
              {events.map((event, index) => {
                // Posições Y para alinhar com a curva SVG
                const yPositions = [80, 40, 120, 120, 100, 140];
                
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center"
                    style={{ paddingTop: `${yPositions[index]}px` }}
                  >
                    {/* Ponto */}
                    <div
                      ref={(el) => {
                        dotsRef.current[index] = el;
                      }}
                      className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-500 to-red-500 shadow-lg relative z-10 mb-6"
                      style={{
                        boxShadow: '0 0 20px rgba(255, 107, 53, 0.6)',
                      }}
                    >
                      <div className="absolute inset-0 rounded-full bg-orange-500 opacity-30 animate-ping" />
                    </div>

                    {/* Informações */}
                    <div className="text-center px-2 text-container">
                      <div className="text-xs font-bold text-orange-600 mb-3">
                        {event.period}
                      </div>
                      <div className="text-sm font-semibold text-gray-900 mb-3 leading-tight">
                        {event.title}
                      </div>
                      <div className="text-xs text-gray-700 leading-relaxed">
                        {event.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
