'use client';

import Image from 'next/image';

export function QuemSomosSection() {
  return (
    <section className="pt-0 pb-16 px-6 bg-beige-50">
      <div className="max-w-7xl mx-auto">
        {/* Título da seção */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-black mb-4">
            Quem somos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mb-6" />
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A equipe por trás deste projeto
          </p>
        </div>

        {/* Grid de cards 3D */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              name: 'Amanda Marinho', 
              image: '/amanda.jpg', 
              role: 'Ligada ao audiovisual, analisa como expressões regionais aparecem ou são apagadas em produtos midiáticos, especialmente nas redes sociais e na TV.',
              linkedin: 'https://www.linkedin.com/in/amanda-marinho-4182111b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
            },
            { 
              name: 'Deborah Freitas', 
              image: '/deborah.jpg', 
              role: 'A partir de viagens ao interior da Bahia, como cada comunidade possui jeitos próprios de falar, revelando identidade e pertencimento.',
              linkedin: 'https://www.linkedin.com/in/deborah-freitas-59575b240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
            },
            { 
              name: 'Ilary Almeida', 
              image: '/ilary.jpg', 
              role: 'Traz sua vivência com expressões baianas do dia a dia, observando como gírias locais despertam curiosidade ou estranhamento em pessoas de outras regiões.',
              linkedin: 'https://www.linkedin.com/in/ilary-almeida-44054217a?utm_source=share_via&utm_content=profile&utm_medium=member_ios'
            },
          ].map((person, index) => (
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-pointer"
              key={index}
              className="group relative"
              style={{
                perspective: '1000px',
                animation: `floatIn 1s ease-out ${index * 0.2}s both`
              }}
            >
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-black transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-y-5"
                   style={{
                     transformStyle: 'preserve-3d',
                     transform: 'rotateY(0deg)',
                   }}>
                {/* Foto */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay gradiente no hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/95 backdrop-blur-sm transform translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-black text-black mb-2">
                    {person.name}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {person.role}
                  </p>
                </div>

                {/* Detalhe decorativo */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80 group-hover:scale-150 transition-transform duration-500" />
              </div>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes floatIn {
          from {
            opacity: 0;
            transform: translateY(50px) rotateX(-15deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
        }
      `}</style>
    </section>
  );
}
