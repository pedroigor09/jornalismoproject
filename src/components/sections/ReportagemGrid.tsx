'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Reportagem {
  id: string;
  titulo: string;
  descricao: string;
  tipo: 'video' | 'audio' | 'fotos';
  imagemCapa: string;
  data: string;
}

interface ReportagemGridProps {
  reportagens: Reportagem[];
}


export const ReportagemGrid = ({ reportagens }: ReportagemGridProps) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll('.reportagem-card');

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === gridRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  const getTipoIcon = (tipo: string) => {
    switch (tipo) {
      case 'video':
        return '🎥';
      case 'audio':
        return '🎙️';
      case 'fotos':
        return '📸';
      default:
        return '📰';
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">
          Reportagens
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16">
          Conheça as histórias que contam a Bahia
        </p>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reportagens.map((rep) => (
            <div
              key={rep.id}
              className="reportagem-card group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105">
                {/* Imagem de capa */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={rep.imagemCapa}
                    alt={rep.titulo}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay com ícone do tipo */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center text-2xl">
                    {getTipoIcon(rep.tipo)}
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Conteúdo */}
                <div className="p-6 bg-white">
                  <p className="text-sm text-gray-500 mb-2">{rep.data}</p>
                  <h3 className="text-2xl font-bold mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {rep.titulo}
                  </h3>
                  <p className="text-gray-600 line-clamp-3 mb-4">
                    {rep.descricao}
                  </p>
                  <button className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                    Ler mais
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
