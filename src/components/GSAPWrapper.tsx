'use client';

import { useScrollSmoother } from '@/hooks/useScrollSmoother';
import { useLenisScroll } from '@/hooks/useLenisScroll';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Footer } from '@/components/ui/Footer';
import { ReactNode } from 'react';

interface GSAPWrapperProps {
  children: ReactNode;
}


export const GSAPWrapper = ({ children }: GSAPWrapperProps) => {
  useScrollSmoother();
  useLenisScroll();    

  return (
    <>
      {children}
      <ProgressBar />
      <Footer />
    </>
  );
};
