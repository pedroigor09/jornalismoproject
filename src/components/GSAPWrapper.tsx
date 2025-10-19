'use client';

import { useScrollSmoother } from '@/hooks/useScrollSmoother';
import { useLenisScroll } from '@/hooks/useLenisScroll';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Footer } from '@/components/ui/Footer';
import { ReactNode } from 'react';

interface GSAPWrapperProps {
  children: ReactNode;
}

/**
 * Wrapper que inicializa o GSAP e Lenis Smooth Scroll
 * Deve envolver toda a aplicação
 */
export const GSAPWrapper = ({ children }: GSAPWrapperProps) => {
  useScrollSmoother(); // Inicializa GSAP plugins
  useLenisScroll();     // Inicializa smooth scroll

  return (
    <>
      {children}
      <ProgressBar />
      <Footer />
    </>
  );
};
