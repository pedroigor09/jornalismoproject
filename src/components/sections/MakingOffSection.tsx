'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface MakingOffImage {
  src: string;
  caption: string;
  category: 'bastidores' | 'entrevistas' | 'equipe' | 'producao';
}

const makingOffData: MakingOffImage[] = [
  {
    src: '/bastidor1.jpg',
    caption: 'Preparação das entrevistas',
    category: 'bastidores'
  },
  {
    src: '/bastidor2.jpg',
    caption: 'Momentos de gravação',
    category: 'bastidores'
  },
];

const cinematicImages = [
  '/Emerson Nunes.jpg',
  '/Entrevista com Ciro Sales.jpg',
  '/Entrevista com Ivan Mesquista.jpg',
  '/Equipe em reunião.jpg',
  '/James Martins.jpg',
  '/Porfª Jacyra Mota.jpg',
  '/Primeira pré-banca.jpg',
  '/Profª Jacyra Mota.jpg',
  '/Silvana Freire.jpg',
];

export function MakingOffSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Animação do hero
    if (heroRef.current) {
      const title = heroRef.current.querySelector('.hero-title');
      const subtitle = heroRef.current.querySelector('.hero-subtitle');
      const overlay = heroRef.current.querySelector('.hero-overlay');

      gsap.fromTo(
        overlay,
        { opacity: 0.8 },
        {
          opacity: 0.3,
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          }
        }
      );

      gsap.fromTo(
        [title, subtitle],
        { y: 0 },
        {
          y: -100,
          opacity: 0,
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          }
        }
      );
    }

    // Animação da galeria
    if (galleryRef.current) {
      const images = galleryRef.current.querySelectorAll('.gallery-item');
      
      images.forEach((image) => {
        gsap.fromTo(
          image,
          {
            opacity: 0,
            y: 100,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: image,
              start: 'top bottom-=100',
              end: 'top center',
              toggleActions: 'play none none reverse',
            }
          }
        );
      });
    }

    // Carrossel automático
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % cinematicImages.length);
    }, 4000);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      clearInterval(interval);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cinematicImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cinematicImages.length) % cinematicImages.length);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden bg-white"
      >
        {/* Background com parallax */}
        <div className="absolute inset-0">
          <Image
            src="/making-off/hero-bg.jpg"
            alt="Making Off Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="hero-overlay absolute inset-0 bg-white/60" />
        </div>

        {/* Conteúdo */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className="hero-title mb-8">
            <h1 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 mb-4 leading-tight">
              MAKING OFF
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto" />
          </div>
          
          <p className="hero-subtitle text-2xl md:text-4xl text-black font-semibold leading-relaxed max-w-4xl mx-auto">
            Por trás das câmeras: a jornada que deu vida ao{' '}
            <span className="font-black">
              Sotaque em Pauta
            </span>
          </p>
        </div>
      </section>

      {/* Cinematic Carousel */}
      <section ref={carouselRef} className="py-16 px-6 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          {/* Carousel Container */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl bg-white">
            {/* Images */}
            <div className="relative w-full h-full">
              {cinematicImages.map((img, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentSlide
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-110'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Making off ${index + 1}`}
                    fill
                    className="object-contain"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 rounded-full flex items-center justify-center transition-all duration-300 group shadow-lg"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6 text-white transform group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 rounded-full flex items-center justify-center transition-all duration-300 group shadow-lg"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6 text-white transform group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {cinematicImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide
                      ? 'w-12 h-2 bg-white'
                      : 'w-2 h-2 bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Film strip decoration */}
          <div className="mt-8 flex justify-center gap-2">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-3 h-8 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-sm opacity-50" />
            ))}
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-black text-black leading-tight">
              Uma história de{' '}
              <span className="underline decoration-4 decoration-orange-500">
                dedicação
              </span>
              ,{' '}
              <span className="underline decoration-4 decoration-yellow-500">
                esforço
              </span>{' '}
              e muito{' '}
              <span className="underline decoration-4 decoration-red-500">
                amor
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
              Meses de planejamento, dezenas de entrevistas, centenas de horas de gravação. 
              Este projeto é o resultado do trabalho incansável de uma equipe apaixonada por 
              contar as histórias que fazem da Bahia o que ela é. Cada sotaque, cada expressão, cada sorriso 
              registrado aqui carrega um pedaço dessa jornada extraordinária.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section ref={galleryRef} className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-black mb-4 text-center">
            Bastidores
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Os momentos que construíram cada frame, cada palavra, cada emoção
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {makingOffData.map((item, index) => (
              <div
                key={index}
                className="gallery-item group relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-200 border-2 border-black"
              >
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-black text-white text-xs font-bold uppercase rounded-full mb-3">
                      {item.category}
                    </span>
                    <p className="text-black text-lg font-semibold">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
