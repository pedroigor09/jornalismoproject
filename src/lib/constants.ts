
export const ASSETS = {
  ALICE_CURTAIN: 'https://assets.codepen.io/204808/alice-curtain.jpg',
  ALICE_VIDEO: 'https://assets.codepen.io/204808/alice-in-wonderland-vid.mov',
} as const;


export const ANIMATION_DEFAULTS = {
  DURATION: 1,
  EASE: 'none',
  STAGGER: 0.1,
} as const;


export const SCROLL_TRIGGER_DEFAULTS = {
  START: 'top center',
  END: 'bottom center',
  SCRUB: true,
} as const;


export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;


export const Z_INDEX = {
  BASE: 0,
  CONTENT: 10,
  OVERLAY: 20,
  MODAL: 30,
  PROGRESS_BAR: 50,
  FOOTER: 50,
} as const;
