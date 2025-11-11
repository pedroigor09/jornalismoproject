'use client';

import { useEffect, useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

export const NavigationButtons = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showGoToBottom, setShowGoToBottom] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Garante que só renderiza após hydration
    setIsClient(true);
    
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      
      // Mostra botão de voltar ao topo após 300px
      setShowBackToTop(scrollTop > 300);
      
      // Esconde botão de ir ao final quando já está no final
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 100;
      setShowGoToBottom(!isAtBottom);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Chama uma vez no início

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ 
      top: document.documentElement.scrollHeight, 
      behavior: 'smooth' 
    });
  };

  // Não renderiza nada no servidor
  if (!isClient) {
    return null;
  }

  return (
    <>
      {/* Botão: Voltar ao Topo - Direita */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-[100] bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
          aria-label="Voltar ao topo"
        >
          <ChevronUp className="w-6 h-6 group-hover:animate-bounce" />
        </button>
      )}

      {/* Botão: Ir ao Final - Esquerda */}
      {showGoToBottom && (
        <button
          onClick={scrollToBottom}
          className="fixed bottom-6 left-6 z-[100] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
          aria-label="Ir ao final da página"
        >
          <ChevronDown className="w-6 h-6 group-hover:animate-bounce" />
        </button>
      )}
    </>
  );
};
