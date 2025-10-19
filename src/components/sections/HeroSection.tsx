'use client';

import { useReverseScroll } from '@/hooks/useReverseScroll';
import { LiquifyTitle } from '@/components/ui/LiquifyTitle';

interface HeroSectionProps {
  title: string[];
  descriptions: string[];
  imageUrl: string;
  imageAlt?: string;
}


export const HeroSection = ({
  title,
  descriptions,
  imageUrl,
  imageAlt = 'Hero Image'
}: HeroSectionProps) => {
  const textRef = useReverseScroll();
  const imageRef = useReverseScroll();

  return (
    <section className="flex items-center p-24 min-h-screen">
      <div className="flex flex-col xl:flex-row justify-between items-center grow gap-24">
        <div ref={textRef} className="reverse-scroll flex-1">
          <LiquifyTitle as="h1" className="heading font-semibold leading-[0.8]">
            {title.map((line, index) => (
              <span key={index}>
                {line}
                {index < title.length - 1 && <br />}
              </span>
            ))}
          </LiquifyTitle>
          {descriptions.map((desc, index) => (
            <p key={index} className={`${index === 0 ? 'pt-8' : 'pt-2'} px-2`}>
              {desc}
            </p>
          ))}
        </div>
        <div className="flex-1 flex xl:justify-end items-center">
          <div ref={imageRef} className="reverse-scroll">
            <img
              className="w-full max-w-[760px]"
              src={imageUrl}
              alt={imageAlt}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
