'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/Carousel';
import { ASSETS } from '@/lib/constants';

const images = [
  { src: ASSETS.JORNAL.JORNAL1, alt: 'Reportagem 1' },
  { src: ASSETS.JORNAL.JORNAL2, alt: 'Reportagem 2' },
  { src: ASSETS.JORNAL.JORNAL3, alt: 'Reportagem 3' },
  { src: ASSETS.JORNAL.JORNAL4, alt: 'Reportagem 4' },
  { src: ASSETS.JORNAL.JORNAL5, alt: 'Reportagem 5' },
  { src: ASSETS.JORNAL.JORNAL6, alt: 'Reportagem 6' },
];

export function CarouselSection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-black to-[var(--bahia-blue)]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black text-white text-center mb-20"
        >
          GALERIA DE MOMENTOS
        </motion.h2>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden group"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
