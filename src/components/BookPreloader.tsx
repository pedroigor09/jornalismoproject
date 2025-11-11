'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export function BookPreloader() {
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Mostra o preloader ao mudar de página
    setIsVisible(true);
    
    // Previne scroll enquanto o preloader está ativo
    document.body.style.overflow = 'hidden';
    document.body.classList.remove('preloader-loaded');

    // Remove o preloader após 3 segundos
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Libera o scroll quando o preloader desaparece
      document.body.classList.add('preloader-loaded');
      document.body.style.overflow = '';
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [pathname]); // Re-executa quando a rota muda

  if (!isVisible) {
    return null;
  }

  return (
    <>
      {/* Preloader em uma camada completamente separada */}
      <div className="preloader-overlay">
        {/* Background cinematográfico com múltiplas camadas */}
        <div className="cinematic-bg">
          <div className="gradient-layer-1"></div>
          <div className="gradient-layer-2"></div>
          <div className="gradient-layer-3"></div>
          <div className="particles-layer"></div>
          <div className="noise-layer"></div>
          <div className="vignette-layer"></div>
        </div>

        {/* Conteúdo do preloader */}
        <div className="content-container">
          <div className="book">
            <div className="book__pg-shadow"></div>
            <div className="book__pg"></div>
            <div className="book__pg book__pg--2"></div>
            <div className="book__pg book__pg--3"></div>
            <div className="book__pg book__pg--4"></div>
            <div className="book__pg book__pg--5"></div>
          </div>
          <div className="loading-text">
            <h2>
              <span className="desktop-text">Carregando Plataforma de Noticiário da Unijorge...</span>
              <span className="mobile-text">Carregando Baianidade...</span>
            </h2>
            <div className="loading-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .preloader-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 99999;
          animation: fadeOut 0.8s ease-out 2.2s forwards;
          overflow: hidden;
        }

        /* Background branco com degradê das cores da Bahia */
        .cinematic-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, 
            #ffffff 0%, 
            #fefefe 20%, 
            #fdfdfd 40%,
            #fcfcfc 60%,
            #fafafa 80%,
            #f8f8f8 100%
          );
        }

        .gradient-layer-1 {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at 20% 80%, 
            rgba(255, 215, 0, 0.08) 0%, 
            transparent 60%
          ),
          radial-gradient(
            circle at 80% 20%, 
            rgba(230, 57, 70, 0.06) 0%, 
            transparent 60%
          );
          animation: breatheGradient 8s ease-in-out infinite alternate;
        }

        .gradient-layer-2 {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse at 30% 30%, 
              rgba(255, 107, 53, 0.05) 0%, 
              transparent 70%
            ),
            radial-gradient(ellipse at 70% 70%, 
              rgba(156, 39, 176, 0.04) 0%, 
              transparent 70%
            );
          animation: pulseGlow 10s ease-in-out infinite alternate;
        }

        .gradient-layer-3 {
          position: absolute;
          inset: 0;
          background: 
            linear-gradient(45deg, 
              rgba(245, 230, 211, 0.15) 0%, 
              transparent 30%, 
              transparent 70%, 
              rgba(0, 191, 165, 0.08) 100%
            );
          animation: pulseGlow 12s ease-in-out infinite;
        }

        .particles-layer {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 15% 25%, rgba(255, 215, 0, 0.12) 1px, transparent 1px),
            radial-gradient(circle at 85% 75%, rgba(230, 57, 70, 0.08) 1px, transparent 1px),
            radial-gradient(circle at 45% 15%, rgba(255, 107, 53, 0.06) 1px, transparent 1px),
            radial-gradient(circle at 75% 45%, rgba(156, 39, 176, 0.04) 1px, transparent 1px);
          background-size: 120px 120px, 180px 180px, 150px 150px, 200px 200px;
          animation: floatParticles 25s linear infinite;
        }

        .noise-layer {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle, rgba(200,200,200,0.08) 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.2;
          animation: moveNoise 15s linear infinite;
        }

        .vignette-layer {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at center, 
            transparent 40%, 
            rgba(245, 230, 211, 0.1) 70%,
            rgba(245, 230, 211, 0.2) 100%
          );
        }

        /* Container do conteúdo */
        .content-container {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          gap: 2rem;
        }

        .loading-text {
          text-align: center;
          z-index: 2;
        }

        .loading-text h2 {
          color: #333;
          font-size: 1.2rem;
          margin-bottom: 1rem;
          font-weight: 700;
          text-shadow: 
            0 1px 3px rgba(0,0,0,0.1),
            0 0 15px rgba(255, 215, 0, 0.2);
          letter-spacing: 0.5px;
          background: linear-gradient(135deg, 
            var(--bahia-red) 0%, 
            var(--bahia-orange) 30%, 
            var(--bahia-yellow) 70%, 
            var(--bahia-purple) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: textGlow 3s ease-in-out infinite alternate;
        }

        .mobile-text {
          display: block;
        }

        .desktop-text {
          display: none;
        }

        .loading-dots {
          display: flex;
          gap: 8px;
          justify-content: center;
        }

        .loading-dots span {
          width: 10px;
          height: 10px;
          background: linear-gradient(135deg, var(--bahia-orange) 0%, var(--bahia-red) 100%);
          border-radius: 50%;
          box-shadow: 
            0 2px 8px rgba(255, 107, 53, 0.3),
            0 0 15px rgba(230, 57, 70, 0.2);
          animation: bounceDots 1.4s ease-in-out infinite both;
        }

        .loading-dots span:nth-child(1) {
          animation-delay: -0.32s;
        }

        .loading-dots span:nth-child(2) {
          animation-delay: -0.16s;
        }

        /* CSS do livro - isolado no preloader */
        .book,
        .book__pg-shadow,
        .book__pg {
          animation: cover 7s ease-in-out infinite;
        }
        
        .book {
          background: linear-gradient(135deg, var(--bahia-yellow) 0%, var(--bahia-orange) 100%);
          border-radius: 0.25em;
          box-shadow:
            0 0.5em 1em rgba(0,0,0,0.4),
            0 0 0 0.25em var(--bahia-red) inset,
            0 0 20px rgba(255, 215, 0, 0.2),
            0 0 40px rgba(255, 107, 53, 0.1);
          padding: 0.25em;
          perspective: 37.5em;
          position: relative;
          width: 10em;
          height: 7.5em;
          transform: translate3d(0,0,0);
          transform-style: preserve-3d;
          animation: floatBook 4s ease-in-out infinite, bookGlow 6s ease-in-out infinite alternate;
        }
        
        .book__pg-shadow,
        .book__pg {
          position: absolute;
          left: 0.25em;
          width: calc(50% - 0.25em);
        }
        
        .book__pg-shadow {
          animation-name: shadow;
          background-image: linear-gradient(-45deg,hsla(0,0%,0%,0) 50%,hsla(0,0%,0%,0.3) 50%);
          filter: blur(0.25em);
          top: calc(100% - 0.25em);
          height: 3.75em;
          transform: scaleY(0);
          transform-origin: 100% 0%;
        }
        
        .book__pg {
          animation-name: pg1;
          background: linear-gradient(135deg, #fefefe 0%, #f8f6f0 100%);
          background-image: linear-gradient(90deg, rgba(245, 230, 211, 0) 87.5%, rgba(245, 230, 211, 0.8));
          height: calc(100% - 0.5em);
          transform-origin: 100% 50%;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        
        .book__pg--2,
        .book__pg--3,
        .book__pg--4 {
          background-image:
            repeating-linear-gradient(hsl(223,10%,10%) 0 0.125em,hsla(223,10%,10%,0) 0.125em 0.5em),
            linear-gradient(90deg,hsla(223,10%,90%,0) 87.5%,hsl(223,10%,90%));
          background-repeat: no-repeat;
          background-position: center;
          background-size: 2.5em 4.125em, 100% 100%;
        }
        
        .book__pg--2 { animation-name: pg2; }
        .book__pg--3 { animation-name: pg3; }
        .book__pg--4 { animation-name: pg4; }
        .book__pg--5 { animation-name: pg5; }

        /* Animações cinematográficas */
        @keyframes fadeOut {
          to {
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
          }
        }

        @keyframes breatheGradient {
          0%, 100% { 
            opacity: 0.8;
            transform: scale(1);
          }
          50% { 
            opacity: 1;
            transform: scale(1.05);
          }
        }



        @keyframes pulseGlow {
          0%, 100% { 
            opacity: 0.4;
            transform: translateY(0) scale(1);
          }
          50% { 
            opacity: 0.8;
            transform: translateY(-10px) scale(1.02);
          }
        }

        @keyframes floatParticles {
          0% { transform: translateX(0) translateY(0) rotate(0deg); }
          25% { transform: translateX(-20px) translateY(-30px) rotate(90deg); }
          50% { transform: translateX(20px) translateY(-20px) rotate(180deg); }
          75% { transform: translateX(-30px) translateY(30px) rotate(270deg); }
          100% { transform: translateX(0) translateY(0) rotate(360deg); }
        }

        @keyframes moveNoise {
          0% { transform: translateX(0) translateY(0); }
          25% { transform: translateX(-15px) translateY(-25px); }
          50% { transform: translateX(25px) translateY(-15px); }
          75% { transform: translateX(-25px) translateY(15px); }
          100% { transform: translateX(0) translateY(0); }
        }

        @keyframes textGlow {
          0% { 
            text-shadow: 
              0 1px 3px rgba(0,0,0,0.1),
              0 0 10px rgba(255, 215, 0, 0.15);
            filter: brightness(1);
          }
          100% { 
            text-shadow: 
              0 1px 3px rgba(0,0,0,0.15),
              0 0 20px rgba(255, 215, 0, 0.25);
            filter: brightness(1.1);
          }
        }

        @keyframes bounceDots {
          0%, 80%, 100% {
            transform: scale(0);
            box-shadow: 0 0 5px rgba(255, 107, 53, 0.3);
          }
          40% {
            transform: scale(1);
            box-shadow: 0 0 15px rgba(255, 107, 53, 0.8);
          }
        }

        @keyframes floatBook {
          0%, 100% { 
            transform: translate3d(0, 0, 0) rotateY(-5deg) rotateX(2deg);
          }
          25% { 
            transform: translate3d(5px, -15px, 0) rotateY(2deg) rotateX(-1deg);
          }
          50% { 
            transform: translate3d(0, -20px, 0) rotateY(5deg) rotateX(1deg);
          }
          75% { 
            transform: translate3d(-5px, -15px, 0) rotateY(-2deg) rotateX(-1deg);
          }
        }

        @keyframes bookGlow {
          0% {
            box-shadow:
              0 0.5em 1em rgba(0,0,0,0.4),
              0 0 0 0.25em var(--bahia-red) inset,
              0 0 15px rgba(255, 215, 0, 0.15),
              0 0 30px rgba(255, 107, 53, 0.08);
          }
          100% {
            box-shadow:
              0 0.5em 1em rgba(0,0,0,0.4),
              0 0 0 0.25em var(--bahia-red) inset,
              0 0 25px rgba(255, 215, 0, 0.3),
              0 0 50px rgba(255, 107, 53, 0.2);
          }
        }

        /* Todas as animações do livro */
        @keyframes cover {
          from, 5%, 45%, 55%, 95%, to {
            animation-timing-function: ease-out;
            background-color: var(--primary-l, hsl(223, 90%, 65%));
          }
          10%, 40%, 60%, 90% {
            animation-timing-function: ease-in;
            background-color: var(--primary-d, hsl(223, 90%, 45%));
          }
        }

        @keyframes shadow {
          from, 10.01%, 20.01%, 30.01%, 40.01% {
            animation-timing-function: ease-in;
            transform: translate3d(0,0,1px) scaleY(0) rotateY(0);
          }
          5%, 15%, 25%, 35%, 45%, 55%, 65%, 75%, 85%, 95% {
            animation-timing-function: ease-out;
            transform: translate3d(0,0,1px) scaleY(0.2) rotateY(90deg);
          }
          10%, 20%, 30%, 40%, 50%, to {
            animation-timing-function: ease-out;
            transform: translate3d(0,0,1px) scaleY(0) rotateY(180deg);
          }
          50.01%, 60.01%, 70.01%, 80.01%, 90.01% {
            animation-timing-function: ease-in;
            transform: translate3d(0,0,1px) scaleY(0) rotateY(180deg);
          }
          60%, 70%, 80%, 90%, to {
            animation-timing-function: ease-out;
            transform: translate3d(0,0,1px) scaleY(0) rotateY(0);
          }
        }

        @keyframes pg1 {
          from, to {
            animation-timing-function: ease-in-out;
            background-color: var(--white, hsl(223, 10%, 100%));
            transform: translate3d(0,0,1px) rotateY(0.4deg);
          }
          10%, 15% {
            animation-timing-function: ease-out;
            background-color: var(--white, hsl(223, 10%, 100%));
            transform: translate3d(0,0,1px) rotateY(180deg);
          }
          20%, 80% {
            animation-timing-function: ease-in;
            background-color: var(--white-d, hsl(223, 10%, 45%));
            transform: translate3d(0,0,1px) rotateY(180deg);
          }
          85%, 90% {
            animation-timing-function: ease-in-out;
            background-color: var(--white, hsl(223, 10%, 100%));
            transform: translate3d(0,0,1px) rotateY(180deg);
          }
        }

        @keyframes pg2 {
          from, to {
            animation-timing-function: ease-in;
            background-color: var(--white-d, hsl(223, 10%, 45%));
            transform: translate3d(0,0,1px) rotateY(0.3deg);
          }
          5%, 10% {
            animation-timing-function: ease-in-out;
            background-color: var(--white, hsl(223, 10%, 100%));
            transform: translate3d(0,0,1px) rotateY(0.3deg);
          }
          20%, 25% {
            animation-timing-function: ease-out;
            background-color: var(--white, hsl(223, 10%, 100%));
            transform: translate3d(0,0,1px) rotateY(179.9deg);
          }
          30%, 70% {
            animation-timing-function: ease-in;
            background-color: var(--white-d, hsl(223, 10%, 45%));
            transform: translate3d(0,0,1px) rotateY(179.9deg);
          }
          75%, 80% {
            animation-timing-function: ease-in-out;
            background-color: var(--white, hsl(223, 10%, 100%));
            transform: translate3d(0,0,1px) rotateY(179.9deg);
          }
          90%, 95% {
            animation-timing-function: ease-out;
            background-color: var(--white, hsl(223, 10%, 100%));
            transform: translate3d(0,0,1px) rotateY(0.3deg);
          }
        }

        @keyframes pg3 {
          from, 10%, 90%, to {
            animation-timing-function: ease-in;
            background-color: var(--white-d, hsl(223, 10%, 45%));
            transform: translate3d(0,0,1px) rotateY(0.2deg);
          }
          15%, 20% {
            animation-timing-function: ease-in-out;
            background-color: var(--white, hsl(223, 10%, 100%));
            transform: translate3d(0,0,1px) rotateY(0.2deg);
          }
          30%, 35% {
            animation-timing-function: ease-out;
            background-color: var(--white, hsl(223, 10%, 100%));
            transform: translate3d(0,0,1px) rotateY(179.8deg);
          }
          40%, 60% {
            animation-timing-function: ease-in;
            background-color: var(--white-d, hsl(223, 10%, 45%));
            transform: translate3d(0,0,1px) rotateY(179.8deg);
          }
          65%, 70% {
            animation-timing-function: ease-in-out;
            background-color: var(--white, hsl(223, 10%, 100%));
            transform: translate3d(0,0,1px) rotateY(179.8deg);
          }
          80%, 85% {
            animation-timing-function: ease-out;
            background-color: var(--white, hsl(223, 10%, 100%));
            transform: translate3d(0,0,1px) rotateY(0.2deg);
          }
        }

        @keyframes pg4 {
          from, 20%, 80%, to {
            animation-timing-function: ease-in;
            background-color: var(--white-d, hsl(223, 10%, 45%));
            transform: translate3d(0,0,1px) rotateY(0.1deg);
          }
          25%, 30% {
            animation-timing-function: ease-in-out;
            background-color: var(--white, hsl(223, 10%, 100%));
            transform: translate3d(0,0,1px) rotateY(0.1deg);
          }
          40%, 45% {
            animation-timing-function: ease-out;
            background-color: var(--white, hsl(223, 10%, 100%));
            transform: translate3d(0,0,1px) rotateY(179.7deg);
          }
          50% {
            animation-timing-function: ease-in;
            background-color: var(--white-d, hsl(223, 10%, 45%));
            transform: translate3d(0,0,1px) rotateY(179.7deg);
          }
          55%, 60% {
            animation-timing-function: ease-in-out;
            background-color: var(--white, hsl(223, 10%, 100%));
            transform: translate3d(0,0,1px) rotateY(179.7deg);
          }
          70%, 75% {
            animation-timing-function: ease-out;
            background-color: var(--white, hsl(223, 10%, 100%));
            transform: translate3d(0,0,1px) rotateY(0.1deg);
          }
        }

        @keyframes pg5 {
          from, 30%, 70%, to {
            animation-timing-function: ease-in;
            background-color: var(--white-d, hsl(223, 10%, 45%));
            transform: translate3d(0,0,1px) rotateY(0);
          }
          35%, 40% {
            animation-timing-function: ease-in-out;
            background-color: var(--white, hsl(223, 10%, 100%));
            transform: translate3d(0,0,1px) rotateY(0deg);
          }
          50% {
            animation-timing-function: ease-in-out;
            background-color: var(--white, hsl(223, 10%, 100%));
            transform: translate3d(0,0,1px) rotateY(179.6deg);
          }
          60%, 65% {
            animation-timing-function: ease-out;
            background-color: var(--white, hsl(223, 10%, 100%));
            transform: translate3d(0,0,1px) rotateY(0);
          }
        }

        /* Responsividade aprimorada */
        @media (min-width: 769px) {
          .mobile-text {
            display: none;
          }
          
          .desktop-text {
            display: block;
          }
          
          .loading-text h2 {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .book {
            width: 7em;
            height: 5.25em;
          }
          
          .loading-text h2 {
            font-size: 1.1rem;
            padding: 0 1rem;
            text-align: center;
          }
          
          .gradient-layer-1,
          .gradient-layer-2,
          .gradient-layer-3 {
            opacity: 0.7;
          }
          
          .content-container {
            gap: 1.5rem;
            padding: 1rem;
          }
        }

        @media (max-width: 480px) {
          .book {
            width: 5em;
            height: 3.75em;
          }
          
          .loading-text h2 {
            font-size: 1rem;
            padding: 0 0.5rem;
          }
          
          .content-container {
            gap: 1rem;
          }
          
          .loading-dots span {
            width: 8px;
            height: 8px;
          }
        }
      `}</style>
    </>
  );
}