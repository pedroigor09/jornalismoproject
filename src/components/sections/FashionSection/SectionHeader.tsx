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

      // Animação da introdução
      gsap.from(introRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 70%',
          end: 'top 20%',
          scrub: 1,
        },
        opacity: 0,
        y: 40,
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={headerRef} className="max-w-5xl mx-auto mb-24 px-6 text-center">
      <h2
        ref={titleRef}
        className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent leading-tight"
      >
        {title}
      </h2>
      
      <p
        ref={subtitleRef}
        className="text-2xl md:text-3xl font-light text-pink-300 mb-8 italic"
      >
        {subtitle}
      </p>
      
      <p
        ref={introRef}
        className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
      >
        {introduction}
      </p>
    </div>
  );
};
