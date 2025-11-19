'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { HighlightQuote } from '@/components/ui/HighlightQuote';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  introduction: string;
}

export const SectionHeader = ({ title, subtitle, introduction }: SectionHeaderProps) => {
  const titleRef = useScrollReveal(0.8);
  const subtitleRef = useScrollReveal(0.75);
  const introRef = useScrollReveal(0.7);

  const processContent = (text: string) => {
    const paragraphs = text.split('\n\n');
    const result: React.ReactNode[] = [];

    paragraphs.forEach((paragraph, index) => {
      const trimmed = paragraph.trim();
      
      // Detecta especificamente a citação de James Martins
      if (trimmed.includes('Eu me esforço muito para que essa baianidade') && trimmed.includes('James Martins')) {
        result.push(
          <HighlightQuote 
            key={index} 
            quote="Eu me esforço muito para que essa baianidade não apareça de maneira folclórica ou estereotipada" 
            author="James Martins" 
          />
        );
        return;
      }
      
      // Detecta citações genéricas que começam com aspas e contêm " - "
      const startsWithQuote = trimmed.startsWith('"') || trimmed.startsWith('"') || trimmed.startsWith('"');
      const hasDashSeparator = trimmed.includes(' - ');
      
      if (startsWithQuote && hasDashSeparator) {
        const dashIndex = trimmed.lastIndexOf(' - ');
        if (dashIndex > 0) {
          const quotePart = trimmed.substring(0, dashIndex);
          const authorPart = trimmed.substring(dashIndex + 3);
          
          const quote = quotePart.replace(/^[""]/, '').replace(/[""]\.*$/, '').trim();
          const author = authorPart.replace(/\.$/, '').trim();
          
          result.push(
            <HighlightQuote key={index} quote={quote} author={author} />
          );
          return;
        }
      }
      
      // Parágrafo normal
      result.push(
        <p
          key={index}
          className="text-base md:text-lg lg:text-xl text-gray-900 leading-relaxed font-light text-justify"
        >
          {paragraph}
        </p>
      );
    });

    return result;
  };

  return (
    <header className="text-center mb-20 md:mb-32">
      {/* Título Principal */}
      <h2
        ref={titleRef as any}
        className="text-4xl md:text-5xl lg:text-7xl font-black text-black mb-6"
      >
        {title}
      </h2>

      {/* Subtítulo */}
      <p
        ref={subtitleRef as any}
        className="text-xl md:text-2xl lg:text-3xl text-orange-600 font-light mb-8 italic"
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
          <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-orange-500 via-yellow-500 to-blue-500 rounded-full opacity-70" />
          
          <div className="space-y-8 pl-8">
            {processContent(introduction)}
          </div>
        </div>
      </div>
    </header>
  );
};
