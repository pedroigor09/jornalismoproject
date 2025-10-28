'use client';

import { useReverseScroll } from '@/hooks/useReverseScroll';
import { LiquifyTitle } from '@/components/ui/LiquifyTitle';
import { ASSETS } from '@/lib/constants';

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
    <section className="flex items-start pt-16 md:pt-32 pb-12 md:pb-24 px-4 md:px-12 lg:px-24 min-h-screen">
      <div className="flex flex-col xl:flex-row justify-between items-start grow gap-8 md:gap-16 lg:gap-24">
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
            <p key={index} className={`${index === 0 ? 'pt-4 md:pt-8 text-lg md:text-xl lg:text-2xl' : 'pt-2 md:pt-4 text-base md:text-lg lg:text-xl'} px-2 font-semibold`}>
              {desc}
            </p>
          ))}
        </div>
        <div className="flex-1 flex xl:justify-end items-start mt-8 xl:mt-0">
          <div ref={imageRef} className="reverse-scroll">
            <img
              className="w-full max-w-[400px] md:max-w-[600px] lg:max-w-[760px]"
              src={ASSETS.LOGO}
              alt="Logo UniJorge"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
