'use client';

import { VideoHTMLAttributes } from 'react';

interface VideoPlayerProps extends VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  className?: string;
  fallbackText?: string;
}


export const VideoPlayer = ({
  src,
  className = '',
  fallbackText = 'Seu navegador não suporta o elemento de vídeo.',
  muted = true,
  autoPlay = true,
  loop = true,
  playsInline = true,
  ...props
}: VideoPlayerProps) => {
  return (
    <video
      className={className}
      src={src}
      muted={muted}
      autoPlay={autoPlay}
      loop={loop}
      playsInline={playsInline}
      {...props}
    >
      {fallbackText}
    </video>
  );
};
