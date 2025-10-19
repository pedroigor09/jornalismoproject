'use client';

import { useReverseScroll } from '@/hooks/useReverseScroll';

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
    <section className="flex p-24 min-h-screen">
      <div className="flex flex-col xl:flex-row justify-between grow gap-24">
        <div ref={textRef} className="reverse-scroll">
          <h1 className="heading font-semibold leading-[0.8]">
            {title.map((line, index) => (
              <span key={index}>
                {line}
                {index < title.length - 1 && <br />}
              </span>
            ))}
          </h1>
          {descriptions.map((desc, index) => (
            <p key={index} className={`${index === 0 ? 'pt-8' : 'pt-2'} px-2`}>
              {desc}
            </p>
          ))}
        </div>
        <div className="grow flex xl:justify-end items-end">
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
