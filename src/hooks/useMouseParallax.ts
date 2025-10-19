'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface MouseParallaxOptions {
  strength?: number;
  smooth?: number;
}

export function useMouseParallax({ strength = 20, smooth = 0.1 }: MouseParallaxOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPercent = (clientX / innerWidth - 0.5) * 2;
      const yPercent = (clientY / innerHeight - 0.5) * 2;
      
      gsap.to(element, {
        x: xPercent * strength,
        y: yPercent * strength,
        duration: smooth,
        ease: 'power2.out'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [strength, smooth]);

  return ref;
}
