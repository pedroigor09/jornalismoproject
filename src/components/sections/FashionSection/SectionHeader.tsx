'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  introduction: string;
  customComponent?: React.ReactNode;
  customComponentPosition?: number;
  customComponents?: Array<{
    component: React.ReactNode;
    position: number;
  }>;
}

gsap.registerPlugin(ScrollTrigger);

export const FashionSectionHeader = ({ 
  title, 
  subtitle, 
  introduction,
  customComponent,
  customComponentPosition,
  customComponents
}: SectionHeaderProps) => {
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

  const processContent = (text: string) => {
    const paragraphs = text.split('\n\n');
    const result: React.ReactNode[] = [];

    paragraphs.forEach((paragraph, index) => {
      const trimmed = paragraph.trim();
      
      // Detecta citações que começam com aspas e contêm " - "
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
            <div key={index} className="my-10 max-w-4xl mx-auto">
              <div className="relative bg-gradient-to-br from-pink-50 to-orange-50 backdrop-blur-lg rounded-2xl p-8 border border-pink-300/30 shadow-2xl">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-400 to-orange-400 rounded-2xl opacity-20 blur-lg -z-10" />
                
                <div className="mb-6">
                  <blockquote className="relative">
                    <div className="absolute -left-2 top-0 text-5xl text-pink-400/40 font-serif leading-none">"</div>
                    <p className="text-lg md:text-xl text-gray-900 italic leading-relaxed pl-6 pr-4">
                      {quote}
                    </p>
                    <div className="absolute -right-2 bottom-0 text-5xl text-pink-400/40 font-serif leading-none">"</div>
                  </blockquote>
                </div>
                
                <div className="flex justify-end">
                  <span className="text-orange-600 font-semibold text-sm">— {author}</span>
                </div>
              </div>
            </div>
          );
          return;
        }
      }
      
      // Parágrafo normal
      result.push(
        <p
          key={index}
          className="intro-paragraph text-base md:text-lg lg:text-xl text-gray-900 leading-relaxed font-light text-justify"
        >
          {paragraph}
        </p>
      );
      
      // Insere o componente customizado após o parágrafo especificado (modo antigo)
      if (customComponent && customComponentPosition === index + 1) {
        result.push(
          <div key={`custom-${index}`} className="my-16">
            {customComponent}
          </div>
        );
      }
      
      // Insere múltiplos componentes customizados (modo novo)
      if (customComponents) {
        customComponents.forEach((item, itemIndex) => {
          if (item.position === index + 1) {
            result.push(
              <div key={`custom-multi-${index}-${itemIndex}`} className="my-16">
                {item.component}
              </div>
            );
          }
        });
      }
    });

    return result;
  };

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
            {processContent(introduction)}
          </div>
        </div>
      </div>
    </div>
  );
};
