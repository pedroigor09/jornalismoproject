'use client';

import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'framer-motion';

interface CountUpNumberProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  decimals?: number;
}

export function CountUpNumber({
  end,
  duration = 2.5,
  suffix = '',
  prefix = '',
  className = '',
  decimals = 0,
}: CountUpNumberProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (isInView) {
      setStartCount(true);
    }
  }, [isInView]);

  return (
    <div ref={ref} className={className}>
      {startCount && (
        <CountUp
          start={0}
          end={end}
          duration={duration}
          suffix={suffix}
          prefix={prefix}
          decimals={decimals}
          separator="."
          useEasing
          easingFn={(t, b, c, d) => {
            return c * ((t = t / d - 1) * t * t + 1) + b;
          }}
        />
      )}
    </div>
  );
}
