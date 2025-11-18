'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface CategoryDividerProps {
  title: string;
  icon?: string;
}

gsap.registerPlugin(ScrollTrigger);

export const CategoryDivider = ({ title, icon = '📺' }: CategoryDividerProps) => {
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dividerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(dividerRef.current, {
        scrollTrigger: {
          trigger: dividerRef.current,
          start: 'top 85%',
          end: 'top 35%',
          scrub: 1,
        },
        scale: 0.9,
        opacity: 0,
      });
    }, dividerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={dividerRef} className="max-w-4xl mx-auto my-20 px-6">
      <div className="relative">
        {/* Linha decorativa */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent transform -translate-y-1/2" />
        
        {/* Título central */}
        <div className="relative flex items-center justify-center gap-4">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 px-8 py-4 rounded-full border border-orange-400/30 shadow-xl">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{icon}</span>
              <h3 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                {title}
              </h3>
            </div>
          </div>
        </div>

        {/* Pontos decorativos */}
        <div className="flex justify-center gap-2 mt-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-yellow-400/60 animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
