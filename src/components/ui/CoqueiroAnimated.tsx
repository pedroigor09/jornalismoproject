'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface CoqueiroAnimatedProps {
  side?: 'left' | 'right';
  size?: 'sm' | 'md' | 'lg';
  isBackground?: boolean;
  delay?: number;
  className?: string;
}

export const CoqueiroAnimated = ({ 
  side = 'left', 
  size = 'md', 
  isBackground = false,
  delay = 0,
  className = ''
}: CoqueiroAnimatedProps) => {
  const coqueiroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!coqueiroRef.current) return;

    const element = coqueiroRef.current;

    // Timeline para animações mais fluidas
    const tl = gsap.timeline({ delay });

    // Animação de rotação mais orgânica
    const rotationAmount = isBackground 
      ? gsap.utils.random(-12, 12)
      : (side === 'left' ? gsap.utils.random(3, 8) : gsap.utils.random(-8, -3));

    tl.to(element, {
      rotation: rotationAmount,
      transformOrigin: 'center bottom',
      duration: gsap.utils.random(2.5, 4.5),
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1
    });

    // Movimento vertical mais fluido
    tl.to(element, {
      y: isBackground ? gsap.utils.random(-8, -3) : gsap.utils.random(-5, -2),
      duration: gsap.utils.random(2, 4),
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1
    }, 0);

    // Movimento horizontal sutil
    tl.to(element, {
      x: gsap.utils.random(-3, 3),
      duration: gsap.utils.random(3, 6),
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1
    }, 0.2);

    // Respiração sutil (escala)
    if (!isBackground) {
      tl.to(element, {
        scale: gsap.utils.random(0.98, 1.02),
        duration: gsap.utils.random(3, 5),
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      }, 0.5);
    }

    return () => {
      tl.kill();
    };
  }, [side, isBackground, delay]);

  const getSizeClass = () => {
    if (isBackground) {
      switch (size) {
        case 'sm': return 'text-lg md:text-xl';
        case 'md': return 'text-2xl md:text-3xl';
        case 'lg': return 'text-3xl md:text-4xl';
        default: return 'text-2xl md:text-3xl';
      }
    }
    
    switch (size) {
      case 'sm': return 'text-2xl';
      case 'md': return 'text-4xl';
      case 'lg': return 'text-5xl md:text-6xl';
      default: return 'text-4xl';
    }
  };

  const opacityClass = isBackground ? 'opacity-15' : 'opacity-100';
  const marginClass = isBackground ? '' : 'mx-2';

  return (
    <div 
      ref={coqueiroRef}
      className={`coqueiro-simple ${getSizeClass()} ${opacityClass} ${marginClass} inline-block select-none ${className}`}
      style={{
        filter: isBackground 
          ? 'drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.1)) blur(0.5px)' 
          : 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2))',
        transformOrigin: 'center bottom'
      }}
    >
      🌴
    </div>
  );
};