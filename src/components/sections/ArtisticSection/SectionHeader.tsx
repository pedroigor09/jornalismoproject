'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  introduction: string;
}

export const SectionHeader = ({ title, subtitle, introduction }: SectionHeaderProps) => {
  const titleRef = useScrollReveal(0.8);
  const subtitleRef = useScrollReveal(0.75);
  const introRef = useScrollReveal(0.7);

  return (
    <header className="text-center mb-20 md:mb-32">
      {/* Título Principal */}
      <h2
        ref={titleRef as any}
        className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6"
        style={{
          textShadow: '0 4px 30px rgba(255, 107, 53, 0.6)',
        }}
      >
        {title}
      </h2>

      {/* Subtítulo */}
      <p
        ref={subtitleRef as any}
        className="text-xl md:text-2xl lg:text-3xl text-orange-400 font-light mb-8 italic"
      >
        {subtitle}
      </p>

      {/* Linha Decorativa */}
      <div className="flex items-center justify-center gap-4 mb-12">
        <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-orange-500 rounded-full" />
        <div className="w-3 h-3 rounded-full bg-orange-500 animate-pulse" />
        <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-orange-500 rounded-full" />
      </div>

      {/* Texto de Introdução */}
      <div
        ref={introRef as any}
        className="max-w-4xl mx-auto"
      >
        <div className="relative">
          {/* Detalhe decorativo */}
          <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-orange-500 via-yellow-500 to-red-500 rounded-full opacity-70" />
          
          <div className="space-y-8 pl-8">
            {introduction.split('\n\n').map((paragraph, index) => (
              <p
                key={index}
                className="text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed font-light text-justify"
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
    </header>
  );
};
