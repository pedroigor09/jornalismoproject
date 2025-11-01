export interface MediaProfessional {
  name: string;
  role: string;
  quote: string;
  image: string;
  polaroids?: string[];
  bio?: string;
  videoUrl?: string;
  audioClips?: string[];
  content: {
    introduction: string;
    paragraphs: string[];
  };
}

export interface MediaIntroduction {
  text: string;
  author?: string;
}
