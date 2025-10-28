// Helper para adicionar basePath às imagens
// Detecta se estamos em build/export ou se já estamos em produção
const isDevelopment = process.env.NODE_ENV === 'development';
const basePath = isDevelopment ? '' : '/jornalismoproject';

const getAssetPath = (path: string) => {
  // Se for URL externa, retorna como está
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  // Adiciona basePath para imagens locais
  return `${basePath}${path}`;
};

export const ASSETS = {
  LOGO: getAssetPath('/unijorgelogo.png'),
  BAHIA_HERO: 'https://images.unsplash.com/photo-1516834474-e367f1a3b5eb?w=1200&q=80',
  PELOURINHO: 'https://images.unsplash.com/photo-1587394889099-5b47a4be5ace?w=1200&q=80',
  SALVADOR: getAssetPath('/salvador.jpg'),
  PLACEHOLDER_VIDEO: 'https://assets.codepen.io/204808/alice-in-wonderland-vid.mov',
  JORNAL: {
    JORNAL1: getAssetPath('/jornal1.jpg'),
    JORNAL2: getAssetPath('/jornal2.jpg'),
    JORNAL3: getAssetPath('/jornal3.jpg'),
    JORNAL4: getAssetPath('/jornal4.jpg'),
    JORNAL5: getAssetPath('/jornal5.jpg'),
    JORNAL6: getAssetPath('/jornal6.jpg'),
  },
} as const;

export const GOOGLE_MAPS_API_KEY = 'AIzaSyCXlnYAEgr2kdEgSfE3nf2TpOUK90Aa4Xk';

export const COLORS = {
  PRIMARY: {
    YELLOW: '#FFD700',
    RED: '#E63946',
    ORANGE: '#FF6B35',
    BLUE: '#1E88E5',
  },
  SECONDARY: {
    BEIGE: '#F5E6D3',
    WHITE: '#FFFFFF',
    GRAY_LIGHT: '#F0F0F0',
  },
  ACCENT: {
    GREEN: '#00BFA5',
    PINK: '#E91E63',
    PURPLE: '#9C27B0',
  },
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

export const SITE_CONTENT = {
  HERO: {
    TITLE: ['baianidade', 'em cada palavra'],
    SUBTITLE: 'Uma jornada pela identidade, cultura e sotaque que nos define',
    DESCRIPTION: 'Explorando as gírias, o sotaque e a essência cultural da Bahia',
  },
  ABOUT: {
    TITLE: 'Mais do que um sotaque',
    TEXT: 'Uma identidade que pulsa em cada oxente, em cada sô, em cada jeito baiano de ser',
  },
} as const;
