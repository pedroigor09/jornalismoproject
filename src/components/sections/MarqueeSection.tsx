'use client';

import { useState } from 'react';
import { Marquee } from '@/components/ui/Marquee';
import { X } from 'lucide-react';

export function MarqueeSection() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <section className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--bahia-yellow)] py-4 border-t-4 border-black overflow-hidden shadow-2xl">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 z-10 w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center transition-all hover:scale-110"
        aria-label="Fechar barra de inscrições"
      >
        <X className="w-5 h-5 text-black" />
      </button>
      
      <Marquee speed={20} className="text-black">
        <span className="text-2xl md:text-4xl font-black inline-flex items-center gap-8">
          <span>INSCREVA-SE</span>
          <span className="text-[var(--bahia-red)]">●</span>
          <span>INSCRIÇÕES AQUI</span>
          <span className="text-[var(--bahia-red)]">●</span>
          <span>INSCREVA-SE</span>
          <span className="text-[var(--bahia-red)]">●</span>
          <span>INSCRIÇÕES AQUI</span>
          <span className="text-[var(--bahia-red)]">●</span>
        </span>
      </Marquee>
    </section>
  );
}
