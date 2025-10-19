'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from '@/lib/gsap/split-text';


if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface OpacityRevealConfig {
  start?: string;
  end?: string;
  scrub?: number;
}


export const useOpacityReveal = (config?: OpacityRevealConfig) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const section = containerRef.current.closest('.section-stick');
    if (!section) return;

    const splitLetters = SplitText.create(containerRef.current);
    
    gsap.set(splitLetters.chars, { opacity: 0.2, y: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        start: config?.start || 'center center',
        end: config?.end || '+=1500',
        scrub: config?.scrub ?? 1, 
      }
    });

    tl
      .to(splitLetters.chars, {
        opacity: 1,
        duration: 1,
        ease: 'none',
        stagger: 1,
      })
      .to({}, { duration: 10 })
      .to(containerRef.current, {
        opacity: 0,
        scale: 1.2,
        duration: 50,
      });

    return () => {
      tl.kill();
      splitLetters.revert();
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, [config]);

  return containerRef;
};
