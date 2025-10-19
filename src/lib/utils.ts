

type ClassValue = string | undefined | null | false;


export const cn = (...classes: ClassValue[]): string => {
  return classes.filter(Boolean).join(' ');
};


export const pxToRem = (px: number): string => {
  return `${px / 16}rem`;
};


export const createStaggerDelay = (index: number, baseDelay: number = 0.1): number => {
  return index * baseDelay;
};
