'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { getAssetPath } from '@/lib/getAssetPath';

interface ClickableAudioImageProps {
  imageSrc: string;
  audioSrc: string;
  transcript: string;
  speaker?: string;
  alt: string;
}

export const ClickableAudioImage = ({
  imageSrc,
  audioSrc,
  transcript,
  speaker,
  alt,
}: ClickableAudioImageProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showTranscript, setShowTranscript] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const time = parseFloat(e.target.value);
    audio.currentTime = time;
    setCurrentTime(time);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="my-10 max-w-4xl mx-auto">
      <div className="relative w-full group overflow-hidden rounded-2xl shadow-2xl">
        {/* Imagem */}
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={getAssetPath(imageSrc)}
            alt={alt}
            fill
            className="object-cover"
          />
          
          {/* Overlay escuro */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60" />
          
          {/* Controles de áudio centralizados */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={togglePlay}
              className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-2xl hover:scale-110 transition-all duration-300"
              aria-label={isPlaying ? 'Pausar' : 'Reproduzir'}
            >
              {isPlaying ? (
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 4a2 2 0 012-2h2a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V4zm8 0a2 2 0 012-2h2a2 2 0 012 2v12a2 2 0 01-2 2h-2a2 2 0 01-2-2V4z" />
                </svg>
              ) : (
                <svg
                  className="w-10 h-10 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              )}
            </button>
          </div>

          {/* Barra de progresso e controles na parte inferior */}
          {isPlaying && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-white text-sm font-medium">
                  {formatTime(currentTime)}
                </span>
                <div className="flex-1 relative">
                  <input
                    type="range"
                    min="0"
                    max={duration || 0}
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full h-2 bg-gray-700/50 rounded-full appearance-none cursor-pointer audio-slider"
                    style={{
                      background: `linear-gradient(to right, rgb(249, 115, 22) 0%, rgb(249, 115, 22) ${progress}%, rgba(55, 65, 81, 0.5) ${progress}%, rgba(55, 65, 81, 0.5) 100%)`,
                    }}
                  />
                </div>
                <span className="text-white text-sm font-medium">
                  {formatTime(duration)}
                </span>
              </div>
              
              {speaker && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-orange-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                    </svg>
                    <span className="text-white text-sm font-medium">{speaker}</span>
                  </div>
                  
                  <button
                    onClick={() => setShowTranscript(!showTranscript)}
                    className="text-orange-400 text-xs hover:text-orange-300 transition-colors duration-300 uppercase tracking-wider font-bold"
                  >
                    {showTranscript ? 'Ocultar' : 'Ver'} transcrição
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Badge inicial quando não está tocando */}
          {!isPlaying && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500/90 to-red-500/90 backdrop-blur-sm border border-white/20 rounded-full shadow-xl">
              <svg
                className="w-5 h-5 text-white animate-pulse"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
              </svg>
              <span className="text-white text-sm font-bold uppercase tracking-wider">
                Clique para ouvir
              </span>
              {speaker && (
                <span className="text-white/80 text-sm">— {speaker}</span>
              )}
            </div>
          )}
        </div>

        {/* Brilho decorativo */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl opacity-20 blur-lg -z-10" />
      </div>

      {/* Legenda */}
      <p className="text-sm text-gray-400 mt-2 text-center">Reprodução/Redes Sociais</p>

      {/* Transcrição abaixo da imagem */}
      {showTranscript && (
        <div className="mt-6 bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-lg rounded-2xl p-6 border border-orange-500/20 shadow-xl">
          <blockquote className="relative">
            <div className="absolute -left-2 top-0 text-4xl text-orange-500/30 font-serif leading-none">
              "
            </div>
            <p className="text-base md:text-lg text-gray-200 italic leading-relaxed pl-6 pr-4">
              {transcript}
            </p>
            <div className="absolute -right-2 bottom-0 text-4xl text-orange-500/30 font-serif leading-none">
              "
            </div>
          </blockquote>
        </div>
      )}

      {/* Áudio element */}
      <audio ref={audioRef} src={getAssetPath(audioSrc)} preload="metadata" />

      <style jsx>{`
        .audio-slider::-webkit-slider-thumb {
          appearance: none;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgb(249, 115, 22), rgb(239, 68, 68));
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(249, 115, 22, 0.5);
          transition: all 0.2s ease;
        }

        .audio-slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 4px 12px rgba(249, 115, 22, 0.8);
        }

        .audio-slider::-moz-range-thumb {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgb(249, 115, 22), rgb(239, 68, 68));
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 8px rgba(249, 115, 22, 0.5);
          transition: all 0.2s ease;
        }

        .audio-slider::-moz-range-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 4px 12px rgba(249, 115, 22, 0.8);
        }
      `}</style>
    </div>
  );
};
