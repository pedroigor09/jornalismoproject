'use client';

import { useOpacityReveal } from '@/hooks/useOpacityReveal';

interface OpacityRevealSectionProps {
  text: string;
  backgroundColor?: string;
  textColor?: string;
}


export const OpacityRevealSection = ({
  text,
  backgroundColor = 'bg-black',
  textColor = 'text-white'
}: OpacityRevealSectionProps) => {
  const textRef = useOpacityReveal();

  return (
    <section className={`section-stick min-h-screen ${backgroundColor} flex justify-center items-center ${textColor}`}>
      <p
        ref={textRef}
        className="opacity-reveal text-7xl text-center w-3/5 font-medium"
      >
        {text}
      </p>
    </section>
  );
};
