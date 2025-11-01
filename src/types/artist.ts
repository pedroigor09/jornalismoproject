export interface Artist {
  name: string;
  role: string;
  quote: string;
  image: string;
  polaroids?: string[];
  content: {
    introduction: string;
    paragraphs: string[];
    audioClips?: string[];
    videoSuggestions?: string[];
    images?: string[];
  };
}

export interface ArtisticSectionProps {
  title: string;
  subtitle: string;
  introduction: string;
  artists: Artist[];
}
