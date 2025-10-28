'use client';

import { useState } from 'react';
import { Marquee } from '@/components/ui/Marquee';
import { X } from 'lucide-react';

export function MarqueeSection() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <section className="fixed bottom-0 left-0 right-0 z-50 bg-white py-2 border-t-2 border-black overflow-hidden shadow-xl">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-1 right-2 z-10 w-6 h-6 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center transition-all hover:scale-110"
        aria-label="Fechar barra de notícias"
      >
        <X className="w-4 h-4 text-black" />
      </button>
      
      <Marquee speed={20} className="text-black">
        <div className="text-lg md:text-2xl font-black inline-flex items-center font-['Poppins']">
          <span className="px-3">OXE</span>
          <span className="text-[var(--bahia-red)] px-3">●</span>
          <span className="px-3">OXENTE</span>
          <span className="text-[var(--bahia-red)] px-3">●</span>
          <span className="px-3">LÁ ELE</span>
          <span className="text-[var(--bahia-red)] px-3">●</span>
          <span className="px-3">PEGUE A VISÃO</span>
          <span className="text-[var(--bahia-red)] px-3">●</span>
          <span className="px-3">SE PLANTE</span>
          <span className="text-[var(--bahia-red)] px-3">●</span>
        </div>
      </Marquee>
    </section>
  );
}
