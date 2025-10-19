'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface StickyTextProps {
  phrases: string[];
  className?: string;
}

export function StickyText({ phrases, className = '' }: StickyTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={ref} className={`relative ${className}`} style={{ height: `${phrases.length * 100}vh` }}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {phrases.map((phrase, index) => {
          const start = index / phrases.length;
          const end = (index + 1) / phrases.length;
          
          const opacity = useTransform(
            scrollYProgress,
            [start, start + 0.1, end - 0.1, end],
            [0, 1, 1, 0]
          );
          
          const scale = useTransform(
            scrollYProgress,
            [start, start + 0.1, end - 0.1, end],
            [0.8, 1, 1, 0.8]
          );

          return (
            <motion.div
              key={index}
              style={{ opacity, scale }}
              className="absolute inset-0 flex items-center justify-center text-center px-6"
            >
              <h2 className="text-5xl md:text-8xl font-black text-white">
                {phrase}
              </h2>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
