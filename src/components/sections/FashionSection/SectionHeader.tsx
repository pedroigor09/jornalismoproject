'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface FashionSectionHeaderProps {
  title: string;
  subtitle: string;
  introduction: string;
}

gsap.registerPlugin(ScrollTrigger);

export const FashionSectionHeader = ({ title, subtitle, introduction }: FashionSectionHeaderProps) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!headerRef.current) return;

    const ctx = gsap.context(() => {
      // Animação do título
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1,
        },
        opacity: 0,
        y: 50,
        scale: 0.95,
      });

      // Animação do subtítulo
      gsap.from(subtitleRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 75%',
          end: 'top 25%',
          scrub: 1,
        },
        opacity: 0,
        y: 30,
      });

      // Animação dos parágrafos
      const paragraphs = headerRef.current?.querySelectorAll('.intro-paragraph');
      if (paragraphs) {
        gsap.from(paragraphs, {
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 70%',
            end: 'top 20%',
            scrub: 1,
          },
          opacity: 0,
          y: 40,
          stagger: 0.1,
        });
      }
    }, headerRef);

    return () => ctx.revert();
  }, []);

  const paragraphs = introduction.split('\n\n');

  return (
    <div ref={headerRef} className="max-w-5xl mx-auto mb-24 px-6">
      <div className="text-center mb-12">
        <h2
          ref={titleRef}
          className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-orange-400 via-yellow-400 to-purple-400 bg-clip-text text-transparent leading-tight"
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
          {/* Detalhe decorativo */}
          <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500 rounded-full opacity-70" />
          
          <div className="space-y-8 pl-8">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="intro-paragraph text-base md:text-lg lg:text-xl text-gray-900 leading-relaxed font-light text-justify"
                style={{
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
