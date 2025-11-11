'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Desabilita restauração automática de scroll
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Função para forçar scroll ao topo
    const forceScrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Força scroll imediatamente
    forceScrollToTop();

    // Força após cada frame por 500ms para garantir
    let frameCount = 0;
    const maxFrames = 30; // ~500ms a 60fps
    
    const forceScroll = () => {
      forceScrollToTop();
      frameCount++;
      if (frameCount < maxFrames) {
        requestAnimationFrame(forceScroll);
      }
    };
    
    requestAnimationFrame(forceScroll);

    // Também força em intervalos fixos
    const intervals = [0, 50, 100, 200, 300, 500];
    const timers = intervals.map(delay => 
      setTimeout(forceScrollToTop, delay)
    );

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [pathname]); // Executa toda vez que a rota mudar

  return null;
}
