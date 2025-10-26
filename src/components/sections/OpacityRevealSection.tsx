'use client';

import Image from 'next/image';
import { useOpacityReveal } from '@/hooks/useOpacityReveal';

interface OpacityRevealSectionProps {
  text: string;
  backgroundImage?: string;
  textColor?: string;
}


export const OpacityRevealSection = ({
  text,
  backgroundImage = '/salvador.jpg',
  textColor = 'text-white'
}: OpacityRevealSectionProps) => {
  const textRef = useOpacityReveal();

  return (
    <section className="section-stick relative min-h-screen flex justify-center items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Salvador, Bahia"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
      
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--bahia-purple)]/20 via-transparent to-[var(--bahia-orange)]/20" />

      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)'
      }} />

      <p
        ref={textRef}
        className={`opacity-reveal text-7xl text-center w-3/5 font-medium relative z-10 ${textColor} drop-shadow-2xl`}
      >
        {text}
      </p>
    </section>
  );
};
