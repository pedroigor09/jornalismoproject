'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registra o plugin imediatamente
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ReverseScrollConfig {
  yPercent?: number;
  start?: string | number;
  end?: string;
  scrub?: boolean;
  pin?: boolean;
}

const defaultConfig: ReverseScrollConfig = {
  yPercent: 30,
  start: 'top bottom',
  end: 'bottom top',
  scrub: true,
  pin: false,
};


export const useReverseScroll = (config?: ReverseScrollConfig) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const finalConfig = { ...defaultConfig, ...config };

    const animation = gsap.to(elementRef.current, {
      yPercent: finalConfig.yPercent,
      ease: 'none',
      scrollTrigger: {
        trigger: elementRef.current,
        start: finalConfig.start,
        end: finalConfig.end,
        scrub: finalConfig.scrub,
        pin: finalConfig.pin,
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === elementRef.current) {
          trigger.kill();
        }
      });
    };
  }, [config]);

  return elementRef;
};
