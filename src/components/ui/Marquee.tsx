'use client';

import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  pauseOnHover?: boolean;
}

export function Marquee({ 
  children, 
  speed = 30,
  className,
  pauseOnHover = true 
}: MarqueeProps) {
  return (
    <div className={cn("overflow-hidden whitespace-nowrap", className)}>
      <div 
        className={cn(
          "inline-flex animate-marquee",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          animationDuration: `${speed}s`
        }}
      >
        {/* Múltiplas repetições para garantir continuidade */}
        <span className="inline-flex shrink-0">{children}</span>
        <span className="inline-flex shrink-0">{children}</span>
        <span className="inline-flex shrink-0">{children}</span>
        <span className="inline-flex shrink-0">{children}</span>
      </div>
    </div>
  );
}
