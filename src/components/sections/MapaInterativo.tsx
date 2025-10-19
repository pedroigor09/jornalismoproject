'use client';

import { useEffect, useRef, useState } from 'react';
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';
import { GOOGLE_MAPS_API_KEY } from '@/lib/constants';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Regiao {
  id: string;
  nome: string;
  position: { lat: number; lng: number };
  girias: string[];
  sotaque: string;
  audioUrl?: string;
  cor: string;
}

const regioesBahia: Regiao[] = [
  {
    id: 'salvador',
    nome: 'Salvador',
    position: { lat: -12.9714, lng: -38.5014 },
    girias: ['Oxente', 'Sô', 'Vixe', 'Arretado'],
    sotaque: 'Sotaque soteropolitano - alongado e musical',
    cor: '#FFD700',
  },
  {
    id: 'reconcavo',
    nome: 'Recôncavo',
    position: { lat: -12.6667, lng: -38.9667 },
    girias: ['Uai', 'Trem', 'Cabra', 'Massa'],
    sotaque: 'Sotaque do Recôncavo - forte influência africana',
    cor: '#E63946',
  },
  {
    id: 'feira',
    nome: 'Feira de Santana',
    position: { lat: -12.2664, lng: -38.9663 },
    girias: ['Êita', 'Rapaz', 'Véi', 'Bichão'],
    sotaque: 'Sotaque feirense - rápido e expressivo',
    cor: '#FF6B35',
  },
  {
    id: 'sul',
    nome: 'Sul da Bahia',
    position: { lat: -14.7870, lng: -39.0361 },
    girias: ['Ô meu rei', 'Cacete', 'Peste', 'Mermão'],
    sotaque: 'Sotaque do sul - mais suave e cantado',
    cor: '#00BFA5',
  },
  {
    id: 'oeste',
    nome: 'Oeste da Bahia',
    position: { lat: -12.1486, lng: -44.9961 },
    girias: ['Trem bão', 'Uai sô', 'Que di', 'Pôxe'],
    sotaque: 'Sotaque do oeste - influência mineira',
    cor: '#9C27B0',
  },
];

export const MapaInterativo = () => {
  const [selectedRegiao, setSelectedRegiao] = useState<Regiao | null>(null);
  const [hoveredRegiao, setHoveredRegiao] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
            Mapa da Baianidade
          </h2>
          <p className="text-xl text-gray-600">
            Explore as gírias e sotaques de cada região da Bahia
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Mapa */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-2xl h-[500px]">
            <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
              <Map
                defaultCenter={{ lat: -12.5, lng: -41.5 }}
                defaultZoom={6.5}
                gestureHandling="greedy"
                disableDefaultUI={false}
                mapId="bahia-map"
              >
                {regioesBahia.map((regiao) => (
                  <AdvancedMarker
                    key={regiao.id}
                    position={regiao.position}
                    onClick={() => setSelectedRegiao(regiao)}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                        hoveredRegiao === regiao.id || selectedRegiao?.id === regiao.id
                          ? 'scale-125 shadow-2xl'
                          : 'scale-100 shadow-lg'
                      }`}
                      style={{ backgroundColor: regiao.cor }}
                      onMouseEnter={() => setHoveredRegiao(regiao.id)}
                      onMouseLeave={() => setHoveredRegiao(null)}
                    >
                      <span className="text-white font-bold text-xl">📍</span>
                    </div>
                  </AdvancedMarker>
                ))}
              </Map>
            </APIProvider>
          </div>

          {/* Info Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col">
            {selectedRegiao ? (
              <div className="flex-1">
                <div
                  className="w-16 h-16 rounded-full mb-4 flex items-center justify-center text-3xl"
                  style={{ backgroundColor: selectedRegiao.cor }}
                >
                  📍
                </div>
                <h3 className="text-3xl font-bold mb-4" style={{ color: selectedRegiao.cor }}>
                  {selectedRegiao.nome}
                </h3>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 mb-2 uppercase">Sotaque</h4>
                  <p className="text-gray-700">{selectedRegiao.sotaque}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase">Gírias Típicas</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedRegiao.girias.map((giria, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-full text-sm font-semibold text-white"
                        style={{ backgroundColor: selectedRegiao.cor }}
                      >
                        {giria}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedRegiao.audioUrl && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-2 uppercase">Ouça o Sotaque</h4>
                    <audio controls className="w-full">
                      <source src={selectedRegiao.audioUrl} type="audio/mpeg" />
                    </audio>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex-1 flex items-center justify-center text-center">
                <div>
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="text-gray-500 text-lg">
                    Clique em um marcador no mapa para explorar as gírias e sotaques da região
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Lista de regiões (mobile) */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4 lg:hidden">
          {regioesBahia.map((regiao) => (
            <button
              key={regiao.id}
              onClick={() => setSelectedRegiao(regiao)}
              className={`p-4 rounded-xl font-semibold transition-all ${
                selectedRegiao?.id === regiao.id
                  ? 'scale-105 shadow-xl text-white'
                  : 'bg-white shadow-md text-gray-700 hover:shadow-lg'
              }`}
              style={{
                backgroundColor: selectedRegiao?.id === regiao.id ? regiao.cor : undefined,
              }}
            >
              {regiao.nome}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
