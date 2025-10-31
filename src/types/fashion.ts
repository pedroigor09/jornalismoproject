export interface FashionExpert {
  name: string;
  role: string;
  quote: string;
  image: string;
  content: {
    introduction: string;
    paragraphs: string[];
  };
}

export interface Brand {
  name: string;
  description: string;
  videoUrl?: string;
  images: string[];
  quotes: {
    text: string;
    author: string;
  }[];
}

export interface FashionReference {
  name: string;
  description: string;
  image: string;
}
