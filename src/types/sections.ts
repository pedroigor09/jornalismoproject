
export interface SectionProps {
  backgroundColor?: string;
  className?: string;
}

export interface ScrollConfig {
  start?: string | number;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
}

export interface AnimationConfig {
  duration?: number;
  ease?: string;
  delay?: number;
}
