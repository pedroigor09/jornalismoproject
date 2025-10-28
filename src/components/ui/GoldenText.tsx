'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface GoldenTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  glitchIntensity?: 'low' | 'medium' | 'high';
}

export const GoldenText = ({ 
  children, 
  className = '',
  delay = 0,
  glitchIntensity = 'medium'
}: GoldenTextProps) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const element = textRef.current;
    
    // Aplicar efeito cinematográfico metálico imediatamente
    gsap.set(element, {
      filter: 'contrast(1.3) brightness(1.2) drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
    });

    // Efeito de hover cinematográfico
    const hoverTl = gsap.timeline({ paused: true });
    hoverTl.to(element, {
      filter: 'contrast(1.5) brightness(1.4) drop-shadow(0 3px 8px rgba(255,255,255,0.4)) drop-shadow(0 0 15px rgba(200,200,200,0.3))',
      scale: 1.03,
      duration: 0.4,
      ease: "power2.out"
    });

    const handleMouseEnter = () => hoverTl.play();
    const handleMouseLeave = () => hoverTl.reverse();

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [delay, glitchIntensity]);

  const getGlitchClass = () => {
    switch (glitchIntensity) {
      case 'low': return 'glitch-low';
      case 'medium': return 'glitch-medium';
      case 'high': return 'glitch-high';
      default: return 'glitch-medium';
    }
  };

  return (
    <>
      <span 
        ref={textRef}
        className={`neon-golden-text ${getGlitchClass()} ${className}`}
        data-text={typeof children === 'string' ? children : ''}
      >
        {children}
      </span>
      
      <style jsx>{`
        .neon-golden-text {
          position: relative;
          display: inline-block;
          font-weight: 900;
          background: linear-gradient(145deg, 
            #000000 0%, 
            #333333 20%, 
            #ffffff 40%, 
            #f0f0f0 60%, 
            #666666 80%, 
            #000000 100%);
          background-size: 200% 200%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 
            0 0 2px rgba(255, 255, 255, 0.2),
            0 0 4px rgba(200, 200, 200, 0.15),
            0 1px 2px rgba(0, 0, 0, 0.4);
          cursor: pointer;
          transition: all 0.5s ease;
          filter: contrast(1.3) brightness(1.2) drop-shadow(0 2px 4px rgba(0,0,0,0.3));
          letter-spacing: 0.8px;
          font-family: 'Arial Black', Arial, sans-serif;
        }

        .neon-golden-text::before,
        .neon-golden-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          pointer-events: none;
        }

        /* Efeito de glitch cinematográfico preto e branco - SUAVIZADO */
        .glitch-medium::before {
          animation: glitch-1 6s infinite ease-in-out;
          background: linear-gradient(145deg, #e0e0e0 0%, #b8b8b8 50%, #707070 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          z-index: -1;
        }

        .glitch-medium::after {
          animation: glitch-2 6s infinite ease-in-out;
          background: linear-gradient(145deg, #1a1a1a 0%, #404040 50%, #606060 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          z-index: -2;
        }

        .glitch-high::before {
          animation: glitch-1 5s infinite ease-in-out;
          background: linear-gradient(145deg, #d8d8d8 0%, #b0b0b0 50%, #808080 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          z-index: -1;
        }

        .glitch-high::after {
          animation: glitch-2 5s infinite ease-in-out;
          background: linear-gradient(145deg, #0f0f0f 0%, #2f2f2f 50%, #555555 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          z-index: -2;
        }

        .glitch-low::before {
          animation: glitch-1 8s infinite ease-in-out;
          background: linear-gradient(145deg, #f0f0f0 0%, #c8c8c8 50%, #909090 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          z-index: -1;
        }

        .glitch-low::after {
          animation: glitch-2 8s infinite ease-in-out;
          background: linear-gradient(145deg, #0a0a0a 0%, #383838 50%, #585858 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          z-index: -2;
        }

        /* Animações de glitch - mais suaves e fluidas */
        @keyframes glitch-1 {
          0%, 12%, 18%, 35%, 42%, 88%, 95%, 100% {
            opacity: 0;
            transform: translateX(0);
          }
          15%, 38% {
            opacity: 0.4;
            transform: translateX(-0.5px);
          }
          90% {
            opacity: 0.3;
            transform: translateX(-0.3px);
          }
        }

        @keyframes glitch-2 {
          0%, 15%, 22%, 38%, 45%, 85%, 92%, 100% {
            opacity: 0;
            transform: translateX(0);
          }
          18%, 40% {
            opacity: 0.35;
            transform: translateX(0.5px);
          }
          87% {
            opacity: 0.25;
            transform: translateX(0.3px);
          }
        }

        /* Animação de gradient cinematográfico */
        .neon-golden-text {
          animation: metallicShine 6s ease-in-out infinite;
        }

        @keyframes metallicShine {
          0% {
            background-position: 0% 50%;
            text-shadow: 
              0 0 2px rgba(255, 255, 255, 0.2),
              0 0 4px rgba(200, 200, 200, 0.15),
              0 1px 2px rgba(0, 0, 0, 0.4);
          }
          50% {
            background-position: 100% 50%;
            text-shadow: 
              0 0 3px rgba(255, 255, 255, 0.25),
              0 0 6px rgba(200, 200, 200, 0.2),
              0 1px 3px rgba(0, 0, 0, 0.5),
              0 0 8px rgba(255, 255, 255, 0.1);
          }
          100% {
            background-position: 0% 50%;
            text-shadow: 
              0 0 2px rgba(255, 255, 255, 0.2),
              0 0 4px rgba(200, 200, 200, 0.15),
              0 1px 2px rgba(0, 0, 0, 0.4);
          }
        }

        /* Responsividade */
        @media (max-width: 768px) {
          .neon-golden-text {
            font-size: 0.9em;
          }
          
          .glitch-medium::before,
          .glitch-medium::after {
            animation-duration: 3s;
          }
        }
      `}</style>
    </>
  );
};