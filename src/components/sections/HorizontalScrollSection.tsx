'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ASSETS } from '@/lib/constants';
import { LiquifyTitle } from '@/components/ui/LiquifyTitle';

gsap.registerPlugin(ScrollTrigger);

const panels = [
  {
    type: 'split',
    title: 'A voz que nos define',
    subtitle: 'Sotaque Baiano',
    description: 'O sotaque baiano carrega em cada sílaba a história de um povo. Não é apenas jeito de falar, é identidade que pulsa.',
    image: ASSETS.JORNAL.JORNAL1,
    bgColor: 'from-[var(--bahia-yellow)] to-[var(--bahia-orange)]'
  },
  {
    type: 'full',
    title: 'OXENTE!',
    description: 'A expressão mais versátil do vocabulário baiano. Surpresa, admiração, questionamento - tudo em uma palavra.',
    image: ASSETS.JORNAL.JORNAL2,
    bgColor: 'from-[var(--bahia-red)] to-[var(--bahia-pink)]'
  },
  {
    type: 'mega',
    text: 'BAIANIDADE',
    image: ASSETS.JORNAL.JORNAL3,
    bgColor: 'from-[var(--bahia-blue)] to-[var(--bahia-purple)]'
  },
  {
    type: 'split',
    title: 'Gírias que viram cultura',
    subtitle: 'Massa, Sô!',
    description: 'Cada gíria baiana conta uma história. São expressões que atravessam gerações, mantendo viva nossa essência.',
    image: ASSETS.JORNAL.JORNAL4,
    bgColor: 'from-[var(--bahia-orange)] to-[var(--bahia-yellow)]'
  },
  {
    type: 'full',
    title: 'VIU, VISSE?',
    description: 'O jeito baiano de confirmar, de criar conexão. Uma pergunta que não espera resposta, mas sim cumplicidade.',
    image: ASSETS.JORNAL.JORNAL5,
    bgColor: 'from-[var(--bahia-purple)] to-[var(--bahia-blue)]'
  },
];

export function HorizontalScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const panelsContainer = panelsRef.current;

    if (!section || !panelsContainer) return;

    const panels = gsap.utils.toArray('.horizontal-panel');
    const totalWidth = panelsContainer.scrollWidth - window.innerWidth;

    const scrollTween = gsap.to(panelsContainer, {
      x: -totalWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${totalWidth}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      }
    });

    panels.forEach((panel: any) => {
      const image = panel.querySelector('.parallax-image');
      if (image) {
        gsap.to(image, {
          scale: 1.2,
          ease: 'none',
          scrollTrigger: {
            trigger: panel,
            containerAnimation: scrollTween,
            start: 'left right',
            end: 'right left',
            scrub: 1,
          }
        });
      }

      const content = panel.querySelector('.panel-content');
      if (content) {
        gsap.fromTo(content,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: panel,
              containerAnimation: scrollTween,
              start: 'left center',
              end: 'center center',
              scrub: 1,
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-black">
      <div ref={panelsRef} className="flex h-full">
        {panels.map((panel, index) => (
          <div
            key={index}
            className="horizontal-panel relative flex-shrink-0 w-screen h-full"
          >
            {panel.type === 'split' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                <div className={`relative overflow-hidden bg-gradient-to-br ${panel.bgColor}`}>
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src={panel.image}
                      alt={panel.title}
                      fill
                      className="object-cover parallax-image opacity-40"
                    />
                  </div>
                  <div className="relative z-10 flex flex-col justify-center h-full p-12 lg:p-20">
                    <div className="panel-content">
                      <p className="text-sm font-black uppercase tracking-wider text-white/80 mb-4">
                        {panel.subtitle}
                      </p>
                      <LiquifyTitle className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight">
                        {panel.title}
                      </LiquifyTitle>
                      <p className="text-xl lg:text-2xl text-white/90 font-medium leading-relaxed max-w-xl">
                        {panel.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden">
                  <Image
                    src={panel.image}
                    alt={panel.title}
                    fill
                    className="object-cover parallax-image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </div>
            )}

            {panel.type === 'full' && (
              <div className="relative w-full h-full">
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={panel.image}
                    alt={panel.title}
                    fill
                    className="object-cover parallax-image"
                  />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${panel.bgColor} opacity-70`} />
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="panel-content text-center max-w-4xl">
                    <LiquifyTitle className="text-7xl lg:text-9xl font-black text-white mb-8 leading-none">
                      {panel.title}
                    </LiquifyTitle>
                    <p className="text-2xl lg:text-3xl text-white font-semibold leading-relaxed">
                      {panel.description}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {panel.type === 'mega' && (
              <div className="relative w-full h-full">
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={panel.image}
                    alt={panel.text}
                    fill
                    className="object-cover parallax-image"
                  />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${panel.bgColor} opacity-60`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="panel-content">
                    <LiquifyTitle className="text-[12rem] lg:text-[20rem] font-black text-white leading-none tracking-tighter">
                      {panel.text}
                    </LiquifyTitle>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 text-white mix-blend-difference">
        <div className="flex items-center gap-4">
          <span className="text-xs uppercase tracking-wider font-bold">Arraste</span>
          <div className="w-32 h-0.5 bg-white/30 rounded-full overflow-hidden">
            <div className="h-full bg-white scroll-progress-bar" />
          </div>
        </div>
      </div>
    </section>
  );
}
