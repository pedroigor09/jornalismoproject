'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxTextProps {
  children: string;
  speed?: number;
  className?: string;
}

export function ParallaxText({ children, speed = 0.5, className = '' }: ParallaxTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div style={{ y }} className={className}>
        {children}
      </motion.div>
    </div>
  );
}
