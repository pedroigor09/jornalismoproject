'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { ASSETS } from '@/lib/constants';

const noticias = [
  {
    titulo: 'OXENTE! Salvador lidera ranking de felicidade no Brasil',
    categoria: 'CULTURA',
    descricao: 'Pesquisa revela que o jeito baiano de viver e as expressões únicas da região são fatores determinantes para o bem-estar da população.',
    image: ASSETS.JORNAL.JORNAL1,
    color: 'from-[var(--bahia-yellow)] to-[var(--bahia-orange)]',
    link: '#noticia-oxente'
  },
  {
    titulo: 'MASSA DEMAIS! Bahia é reconhecida pela UNESCO',
    categoria: 'PATRIMÔNIO',
    descricao: 'O sotaque baiano e suas gírias tradicionais são agora considerados patrimônio cultural imaterial da humanidade.',
    image: ASSETS.JORNAL.JORNAL2,
    color: 'from-[var(--bahia-red)] to-[var(--bahia-pink)]',
    link: '#noticia-massa'
  },
  {
    titulo: 'VIU, VISSE? Linguistas estudam o falar baiano',
    categoria: 'PESQUISA',
    descricao: 'Universidades nacionais e internacionais se unem para documentar e preservar as particularidades do vocabulário baiano.',
    image: ASSETS.JORNAL.JORNAL3,
    color: 'from-[var(--bahia-blue)] to-[var(--bahia-purple)]',
    link: '#noticia-visse'
  },
  {
    titulo: 'ARRETADO! Festival celebra a baianidade em Salvador',
    categoria: 'EVENTOS',
    descricao: 'Maior evento cultural do Nordeste reúne artistas, músicos e pesquisadores para celebrar a identidade baiana.',
    image: ASSETS.JORNAL.JORNAL4,
    color: 'from-[var(--bahia-orange)] to-[var(--bahia-yellow)]',
    link: '#noticia-arretado'
  },
  {
    titulo: 'Baianidade: DNA cultural ganha destaque mundial',
    categoria: 'DESTAQUE',
    descricao: 'Documentário internacional mostra como as expressões e o jeito de ser baiano influenciam a cultura global.',
    image: ASSETS.JORNAL.JORNAL5,
    color: 'from-[var(--bahia-purple)] to-[var(--bahia-blue)]',
    link: '#noticia-dna'
  },
];

export function PhraseRevealSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={ref} className="relative bg-black" style={{ height: `${noticias.length * 100}vh` }}>
      {noticias.map((noticia, index) => {
        const start = index / noticias.length;
        const end = (index + 1) / noticias.length;
        
        const opacity = useTransform(
          scrollYProgress,
          [start, start + 0.15, end - 0.15, end],
          [0, 1, 1, 0]
        );
        
        const scale = useTransform(
          scrollYProgress,
          [start, start + 0.15, end - 0.15, end],
          [0.9, 1, 1, 1.05]
        );

        const imageScale = useTransform(
          scrollYProgress,
          [start, end],
          [1, 1.2]
        );

        const imageRotate = useTransform(
          scrollYProgress,
          [start, end],
          [0, -3]
        );

        return (
          <div key={index} className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
            <motion.div
              style={{ opacity: 0.3 }}
              className={`absolute inset-0 bg-gradient-to-br ${noticia.color}`}
            />

            <motion.div
              style={{ scale, opacity }}
              className="relative z-10 w-full max-w-7xl mx-auto px-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                
                <motion.div
                  className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    style={{ scale: imageScale, rotate: imageRotate }}
                    className="w-full h-full"
                  >
                    <Image
                      src={noticia.image}
                      alt={noticia.titulo}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </motion.div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  <div className="absolute top-6 left-6">
                    <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-black uppercase tracking-wider">
                      {noticia.categoria}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                      <p className="text-white text-sm font-semibold">📰 Reportagem Completa</p>
                    </div>
                  </div>
                </motion.div>

                <div className="text-white space-y-6">
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  >
                    <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-4 uppercase tracking-wider">
                      {noticia.categoria}
                    </span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
                      {noticia.titulo}
                    </h2>
                  </motion.div>

                  <motion.p
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xl md:text-2xl font-medium leading-relaxed text-white/90"
                  >
                    {noticia.descricao}
                  </motion.p>

                  <motion.a
                    href={noticia.link}
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-black text-lg hover:bg-[var(--bahia-yellow)] transition-all duration-300 shadow-xl group"
                  >
                    VER MAIS
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </motion.a>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex items-center gap-4 text-sm text-white/60 font-semibold"
                  >
                    <span>📅 Publicado em {new Date().toLocaleDateString('pt-BR')}</span>
                    <span>•</span>
                    <span>👁️ Leitura: 5 min</span>
                  </motion.div>
                </div>

              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
