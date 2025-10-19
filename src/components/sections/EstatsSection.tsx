'use client';

import { motion } from 'framer-motion';
import { CountUpNumber } from '@/components/ui/CountUpNumber';
import { LiquifyTitle } from '@/components/ui/LiquifyTitle';

const stats = [
  { 
    number: 35000, 
    suffix: '+', 
    label: 'visitantes nos 3 dias de evento',
    bgColor: 'bg-[var(--bahia-yellow)]',
    textColor: 'text-black'
  },
  { 
    number: 160, 
    suffix: '+', 
    label: 'Expositores',
    bgColor: 'bg-white',
    textColor: 'text-[var(--bahia-red)]'
  },
  { 
    number: 100, 
    suffix: '', 
    label: 'horas de conteúdo',
    bgColor: 'bg-white',
    textColor: 'text-[var(--bahia-orange)]'
  },
  { 
    number: 12, 
    suffix: '', 
    label: 'Estados Presentes',
    bgColor: 'bg-[var(--bahia-blue)]',
    textColor: 'text-white'
  },
];

export function EstatsSection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video1.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <LiquifyTitle className="text-4xl md:text-6xl font-black text-white text-left mb-16 uppercase">
            A CONSTRUNORDESTE<br />2024 FOI GIGANTE!
          </LiquifyTitle>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-4xl">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${stat.bgColor} ${stat.textColor} p-12 flex flex-col justify-center`}
            >
              <div className="text-6xl md:text-8xl font-black mb-2">
                <CountUpNumber 
                  end={stat.number} 
                  suffix={stat.suffix}
                  duration={2.5}
                  className="inline-block"
                />
              </div>
              <p className="text-xl md:text-2xl font-bold leading-tight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
