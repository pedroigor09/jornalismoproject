'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ViralVideo {
  title: string;
  videoId: string;
  description: string;
  type: 'short' | 'video';
}

interface ViralVideoShowcaseProps {
  videos: ViralVideo[];
}

gsap.registerPlugin(ScrollTrigger);

export const ViralVideoShowcase = ({ videos }: ViralVideoShowcaseProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1,
        },
        opacity: 0,
        y: 50,
      });

      const videoCards = containerRef.current?.querySelectorAll('.viral-video-card');
      if (videoCards) {
        gsap.from(videoCards, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            end: 'top 25%',
            scrub: 1,
          },
          opacity: 0,
          y: 60,
          stagger: 0.15,
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="max-w-7xl mx-auto mb-32 px-6">
      <h3
        ref={titleRef}
        className="text-4xl md:text-5xl font-black text-center mb-16 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent"
      >
        🔥 Momentos Virais
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <div
            key={index}
            className="viral-video-card group"
          >
            <div className="relative bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-6 hover:border-cyan-400/60 hover:scale-105 transition-all duration-500">
              {/* Badge de tipo */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-black px-4 py-2 rounded-full shadow-lg">
                {video.type === 'short' ? '📱 SHORT' : '🎬 VÍDEO'}
              </div>

              {/* Vídeo embed */}
              <div className={`relative ${video.type === 'short' ? 'aspect-[9/16] max-w-[280px] mx-auto' : 'aspect-video'} rounded-xl overflow-hidden shadow-xl mb-4 bg-black`}>
                <iframe
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>

              {/* Título */}
              <h4 className="text-xl font-black text-cyan-100 mb-2 group-hover:text-cyan-300 transition-colors">
                {video.title}
              </h4>

              {/* Descrição */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {video.description}
              </p>

              {/* Ícone decorativo */}
              <div className="absolute -bottom-2 -left-2 text-6xl opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                🎥
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Linha decorativa */}
      <div className="mt-16 flex items-center justify-center gap-4">
        <div className="h-px w-32 bg-gradient-to-r from-transparent to-cyan-400/50" />
        <div className="flex gap-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-cyan-400/60 animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </div>
        <div className="h-px w-32 bg-gradient-to-l from-transparent to-cyan-400/50" />
      </div>
    </div>
  );
};
