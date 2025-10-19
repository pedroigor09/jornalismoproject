'use client';

import { useState } from 'react';
import { Marquee } from '@/components/ui/Marquee';
import { X } from 'lucide-react';

export function MarqueeSection() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <section className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-[#00BFA5] via-[#00E5CC] to-[#00BFA5] py-2 border-t-2 border-black overflow-hidden shadow-xl">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-1 right-2 z-10 w-6 h-6 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center transition-all hover:scale-110"
        aria-label="Fechar barra de notícias"
      >
        <X className="w-4 h-4 text-black" />
      </button>
      
      <Marquee speed={20} className="text-black">
        <span className="text-lg md:text-2xl font-black inline-flex items-center gap-6">
          <span>NOTICIÁRIO DA UJ</span>
          <span className="text-[var(--bahia-red)]">●</span>
          <span>JORNALISMO UNIJORGE</span>
          <span className="text-[var(--bahia-red)]">●</span>
          <span>NOTICIÁRIO DA UJ</span>
          <span className="text-[var(--bahia-red)]">●</span>
          <span>JORNALISMO UNIJORGE</span>
          <span className="text-[var(--bahia-red)]">●</span>
        </span>
      </Marquee>
    </section>
  );
}
