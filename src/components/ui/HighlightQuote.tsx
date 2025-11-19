'use client';

interface HighlightQuoteProps {
  quote: string;
  author: string;
}

export const HighlightQuote = ({ quote, author }: HighlightQuoteProps) => {
  return (
    <div className="my-10 max-w-4xl mx-auto">
      {/* Container principal */}
      <div className="relative bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-lg rounded-2xl p-8 border border-orange-500/20 shadow-2xl">
        {/* Efeito de brilho */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl opacity-20 blur-lg -z-10" />

        {/* Citação */}
        <blockquote className="relative">
          <div className="absolute -left-2 top-0 text-5xl text-orange-500/30 font-serif leading-none">
            "
          </div>
          <p className="text-lg md:text-xl text-gray-200 italic leading-relaxed pl-6 pr-4">
            {quote}
          </p>
          <div className="absolute -right-2 bottom-0 text-5xl text-orange-500/30 font-serif leading-none">
            "
          </div>
        </blockquote>
        
        {/* Autor */}
        {author && (
          <p className="text-right text-gray-400 text-sm mt-4">
            — {author}
          </p>
        )}
      </div>
    </div>
  );
};
