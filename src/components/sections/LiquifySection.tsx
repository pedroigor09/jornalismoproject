'use client';

import { useLiquifyScroll } from '@/hooks/useLiquifyScroll';
import { VideoPlayer } from '@/components/ui/VideoPlayer';

interface LiquifySectionProps {
  videoUrl: string;
  overlayText: string;
  backgroundColor?: string;
}

export const LiquifySection = ({
  videoUrl,
  overlayText,
  backgroundColor = 'bg-white'
}: LiquifySectionProps) => {
  const { textRef, liquidFilterRef } = useLiquifyScroll();

  return (
    <section className={`relative min-h-screen ${backgroundColor} mt-[-1px]`}>
      <VideoPlayer
        src={videoUrl}
        className="w-screen h-screen object-cover"
      />
      <h1
        ref={textRef}
        style={{ filter: "url('#liquify')" }}
        className="liquify-scroll absolute text-center top-1/2 translate-y-[-50%] w-full text-8xl font-semibold px-60"
      >
        {overlayText}
      </h1>
      <svg className="hidden">
        <filter id="liquify">
          <feTurbulence
            baseFrequency="0.015"
            numOctaves={3}
            result="warp"
            type="fractalNoise"
          />
          <feDisplacementMap
            ref={liquidFilterRef}
            id="liquid"
            in="SourceGraphic"
            in2="warp"
            scale={100}
            xChannelSelector="R"
            yChannelSelector="B"
          />
        </filter>
      </svg>
    </section>
  );
};
