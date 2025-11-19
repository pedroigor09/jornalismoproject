'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { HighlightQuote } from '@/components/ui/HighlightQuote';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  introduction: string;
  customComponent?: React.ReactNode;
  customComponentPosition?: number;
}

export const SectionHeader = ({ title, subtitle, introduction, customComponent, customComponentPosition }: SectionHeaderProps) => {
  const titleRef = useScrollReveal(0.8);
  const subtitleRef = useScrollReveal(0.75);
  const introRef = useScrollReveal(0.7);

  const processContent = (text: string) => {
    const paragraphs = text.split('\n\n');
    const result: React.ReactNode[] = [];

    paragraphs.forEach((paragraph, index) => {
      const trimmed = paragraph.trim();
      
      // Detecta placeholder de vídeo
      if (trimmed.startsWith('[VÍDEO:')) {
        const videoText = trimmed.replace(/^\[VÍDEO:\s*/, '').replace(/\]$/, '');
        result.push(
          <div key={index} className="my-10 max-w-4xl mx-auto">
            <div className="relative aspect-video w-full rounded-2xl bg-gradient-to-br from-gray-900 to-black border-2 border-dashed border-orange-500/40 flex items-center justify-center overflow-hidden group hover:border-orange-500/70 transition-all duration-300">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 20px)',
                  color: 'rgb(249, 115, 22)'
                }} />
              </div>
              
              {/* Content */}
              <div className="relative z-10 text-center p-8">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                  </svg>
                </div>
                <p className="text-orange-500 font-bold text-lg mb-2">VÍDEO PENDENTE</p>
                <p className="text-gray-400 text-sm">{videoText}</p>
              </div>
            </div>
          </div>
        );
        return;
      }
      
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
      
      // Adiciona hyperlinks em menções a "Jacyra Mota"
      const processedParagraph = paragraph.split(/(Jacyra Mota)/g).map((part, i) => {
        if (part === 'Jacyra Mota') {
          return (
            <a
              key={i}
              href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do;jsessionid=934630E3234099B9605967CB9057BC59.buscatextual_0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:text-orange-700 underline decoration-orange-500/50 hover:decoration-orange-700 transition-colors duration-300"
            >
              {part}
            </a>
          );
        }
        return part;
      });

      // Processa texto entre ** para destaque especial (frase de Pizane)
      const finalProcessed = processedParagraph.flatMap((part, i) => {
        if (typeof part === 'string') {
          const parts = part.split(/(\*\*[^*]+\*\*)/g);
          return parts.map((subPart, j) => {
            if (subPart.startsWith('**') && subPart.endsWith('**')) {
              const text = subPart.slice(2, -2);
              return (
                <span
                  key={`${i}-${j}`}
                  className="block mt-6 text-xl md:text-2xl lg:text-3xl text-orange-600 font-black italic leading-tight text-justify"
                >
                  {text}
                </span>
              );
            }
            return subPart;
          });
        }
        return part;
      });
      
      // Parágrafo normal
      result.push(
        <p
          key={index}
          className="text-base md:text-lg lg:text-xl text-gray-900 leading-relaxed font-light text-justify"
        >
          {finalProcessed}
        </p>
      );
      
      // Insere componente customizado DEPOIS do parágrafo especificado
      if (customComponentPosition === index && customComponent) {
        result.push(
          <div key={`custom-${index}`}>
            {customComponent}
          </div>
        );
      }
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
