'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registra o plugin imediatamente
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface LiquifyScrollConfig {
  start?: string;
  end?: string;
  scrub?: boolean;
  initialScale?: number;
  finalScale?: number;
}


export const useLiquifyScroll = (config?: LiquifyScrollConfig) => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const liquidFilterRef = useRef<SVGFEDisplacementMapElement>(null);

  useEffect(() => {
    if (!textRef.current || !liquidFilterRef.current) return;

    gsap.set(textRef.current, { opacity: 0, y: 50 });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: config?.start || 'top bottom',
        end: config?.end || 'bottom 60%',
        scrub: config?.scrub ?? true,
      },
    });

    timeline
      .to(
        liquidFilterRef.current,
        {
          attr: { scale: config?.finalScale ?? 0 },
          ease: 'none',
        },
        0
      )
      .to(
        textRef.current,
        {
          opacity: 1,
          y: 0,
          ease: 'none',
        },
        0
      );

    return () => {
      timeline.kill();
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === textRef.current) {
          trigger.kill();
        }
      });
    };
  }, [config]);

  return { textRef, liquidFilterRef };
};
