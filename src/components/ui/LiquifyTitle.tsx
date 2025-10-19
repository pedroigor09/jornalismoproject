'use client';

import { useId } from 'react';
import { useLiquifyScroll } from '@/hooks/useLiquifyScroll';

interface LiquifyTitleProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  initialScale?: number;
  finalScale?: number;
}

export function LiquifyTitle({ 
  children, 
  className = '', 
  as: Tag = 'h2',
  initialScale = 30,
  finalScale = 0
}: LiquifyTitleProps) {
  const uniqueId = useId();
  const filterId = `liquid-filter-${uniqueId}`;
  const { textRef, liquidFilterRef } = useLiquifyScroll({
    initialScale,
    finalScale
  });

  return (
    <>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id={filterId}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.02"
              numOctaves="1"
              result="warp"
            />
            <feDisplacementMap
              ref={liquidFilterRef}
              in="SourceGraphic"
              in2="warp"
              scale={initialScale}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
      <Tag
        ref={textRef}
        className={className}
        style={{ filter: `url(#${filterId})` }}
      >
        {children}
      </Tag>
    </>
  );
}
