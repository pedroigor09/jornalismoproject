'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface MediaSectionHeaderProps {
  title: string;
  subtitle: string;
  introductions: string[];
}

gsap.registerPlugin(ScrollTrigger);

export const MediaSectionHeader = ({ title, subtitle, introductions }: MediaSectionHeaderProps) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!headerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1,
        },
        opacity: 0,
        y: 60,
        scale: 0.95,
      });

      gsap.from(subtitleRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 75%',
          end: 'top 25%',
          scrub: 1,
        },
        opacity: 0,
        y: 40,
      });

      const intros = headerRef.current?.querySelectorAll('.intro-paragraph');
      if (intros) {
        gsap.from(intros, {
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 70%',
            end: 'top 20%',
            scrub: 1,
          },
          opacity: 0,
          y: 30,
          stagger: 0.1,
        });
      }
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={headerRef} className="max-w-6xl mx-auto mb-24 px-6 text-center">
      <h2
        ref={titleRef}
        className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent leading-tight"
      >
        {title}
      </h2>
      
      <p
        ref={subtitleRef}
        className="text-2xl md:text-3xl font-light text-cyan-300 mb-12 italic"
      >
        {subtitle}
      </p>
      
      <div className="space-y-6 max-w-5xl mx-auto">
        {introductions.map((text, index) => (
          <p
            key={index}
            className="intro-paragraph text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};
