'use client';

import Image from 'next/image';
import { getAssetPath } from '@/lib/getAssetPath';

interface QuoteWithImageProps {
  quote: string;
  author?: string;
  imagePath: string;
  imageAlt: string;
}

export const QuoteWithImage = ({ quote, author, imagePath, imageAlt }: QuoteWithImageProps) => {
  return (
    <div className="max-w-6xl mx-auto my-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Imagem */}
        <div>
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={getAssetPath(imagePath)}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>
          <p className="text-sm text-gray-400 mt-2 text-center">Reprodução/Redes Sociais</p>
        </div>

        {/* Citação */}
        <div className="relative bg-gradient-to-br from-pink-50 to-orange-50 backdrop-blur-lg rounded-2xl p-8 border border-pink-300/30 shadow-2xl">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-400 to-orange-400 rounded-2xl opacity-20 blur-lg -z-10" />
          
          <div className="mb-6">
            <blockquote className="relative">
              <div className="absolute -left-2 top-0 text-5xl text-pink-400/40 font-serif leading-none">"</div>
              <p className="text-lg md:text-xl text-gray-900 italic leading-relaxed pl-6 pr-4">
                {quote}
              </p>
              <div className="absolute -right-2 bottom-0 text-5xl text-pink-400/40 font-serif leading-none">"</div>
            </blockquote>
          </div>
          
          {author && (
            <div className="flex justify-end">
              <span className="text-orange-600 font-semibold text-sm">— {author}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
