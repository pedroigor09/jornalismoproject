'use client';

import { motion } from 'framer-motion';
import { CountUpNumber } from '@/components/ui/CountUpNumber';

const stats = [
  { number: 35000, suffix: '+', label: 'visitantes nos 3 dias de evento' },
  { number: 160, suffix: '+', label: 'Expositores' },
  { number: 100, suffix: '', label: 'horas de conteúdo' },
  { number: 12, suffix: '', label: 'Estados Presentes' },
];

export function EstatsSection() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-br from-[var(--bahia-blue)] via-[var(--bahia-red)] to-[var(--bahia-orange)]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black text-white text-center mb-20"
        >
          A CONSTRUNORDESTE 2024 FOI GIGANTE!
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 text-center"
            >
              <div className="text-6xl md:text-8xl font-black text-[var(--bahia-yellow)] mb-4">
                <CountUpNumber 
                  end={stat.number} 
                  suffix={stat.suffix}
                  duration={2.5}
                />
              </div>
              <p className="text-xl md:text-2xl text-white font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[var(--bahia-yellow)] blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-[var(--bahia-orange)] blur-[120px]" />
      </motion.div>
    </section>
  );
}
