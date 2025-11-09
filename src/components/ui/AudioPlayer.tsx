'use client';

import { useEffect, useRef, useState } from 'react';
import { getAssetPath } from '@/lib/getAssetPath';

interface AudioPlayerProps {
  src: string;
  transcript: string;
  speaker?: string;
}

export const AudioPlayer = ({ src, transcript, speaker }: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

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
      {/* Badge "Áudio" */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full">
          <svg
            className="w-4 h-4 text-orange-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
          </svg>
          <span className="text-orange-400 text-sm font-bold uppercase tracking-wider">
            Áudio
          </span>
        </div>
        {speaker && (
          <span className="text-gray-400 text-sm italic">— {speaker}</span>
        )}
      </div>

      {/* Container principal */}
      <div className="relative bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-lg rounded-2xl p-8 border border-orange-500/20 shadow-2xl">
        {/* Efeito de brilho */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl opacity-20 blur-lg -z-10" />

        {/* Transcrição */}
        <div className="mb-6">
          <blockquote className="relative">
            <div className="absolute -left-2 top-0 text-5xl text-orange-500/30 font-serif leading-none">
              "
            </div>
            <p className="text-lg md:text-xl text-gray-200 italic leading-relaxed pl-6 pr-4">
              {transcript}
            </p>
            <div className="absolute -right-2 bottom-0 text-5xl text-orange-500/30 font-serif leading-none">
              "
            </div>
          </blockquote>
        </div>

        {/* Player de áudio */}
        <div className="flex items-center gap-4">
          {/* Botão Play/Pause */}
          <button
            onClick={togglePlay}
            className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
            aria-label={isPlaying ? 'Pausar' : 'Reproduzir'}
          >
            {isPlaying ? (
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M5 4a2 2 0 012-2h2a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V4zm8 0a2 2 0 012-2h2a2 2 0 012 2v12a2 2 0 01-2 2h-2a2 2 0 01-2-2V4z" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            )}
          </button>

          {/* Barra de progresso e tempo */}
          <div className="flex-1 flex flex-col gap-2">
            <div className="relative">
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer audio-slider"
                style={{
                  background: `linear-gradient(to right, rgb(249, 115, 22) 0%, rgb(249, 115, 22) ${progress}%, rgb(55, 65, 81) ${progress}%, rgb(55, 65, 81) 100%)`,
                }}
              />
            </div>
            <div className="flex justify-between items-center text-sm text-gray-400">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>

        {/* Visualização de onda (decorativo) */}
        <div className="mt-6 flex items-center justify-center gap-1 h-12 opacity-30">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="w-1 bg-gradient-to-t from-orange-500 to-red-500 rounded-full transition-all duration-300"
              style={{
                height: `${isPlaying ? Math.random() * 100 : 20}%`,
                animation: isPlaying ? `wave ${0.5 + Math.random() * 0.5}s ease-in-out infinite alternate` : 'none',
                animationDelay: `${i * 0.05}s`,
              }}
            />
          ))}
        </div>

        {/* Áudio element */}
        <audio ref={audioRef} src={getAssetPath(src)} preload="metadata" />
      </div>

      <style jsx>{`
        .audio-slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
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
          width: 16px;
          height: 16px;
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

        @keyframes wave {
          from {
            height: 20%;
          }
          to {
            height: 100%;
          }
        }
      `}</style>
    </div>
  );
};
