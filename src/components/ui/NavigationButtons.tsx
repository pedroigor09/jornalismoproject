'use client';

import { useEffect, useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

export const NavigationButtons = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [totalSections, setTotalSections] = useState(0);

  useEffect(() => {
    // Detecta todas as seções principais
    const sections = document.querySelectorAll('section');
    setTotalSections(sections.length);

    const handleScroll = () => {
      // Mostra botão de voltar ao topo após 300px
      setShowBackToTop(window.scrollY > 300);

      // Detecta seção atual
      let current = 0;
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          current = index;
        }
      });
      setCurrentSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Chama uma vez no início

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToNextSection = () => {
    const sections = document.querySelectorAll('section');
    const nextSection = sections[currentSection + 1];
    
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Botão: Voltar ao Topo */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-[100] bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
          aria-label="Voltar ao topo"
        >
          <ChevronUp className="w-6 h-6 group-hover:animate-bounce" />
        </button>
      )}

      {/* Botão: Próxima Seção */}
      {currentSection < totalSections - 1 && (
        <button
          onClick={scrollToNextSection}
          className="fixed bottom-24 left-6 z-[100] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
          aria-label="Próxima seção"
        >
          <ChevronDown className="w-6 h-6 group-hover:animate-bounce" />
        </button>
      )}
    </>
  );
};
