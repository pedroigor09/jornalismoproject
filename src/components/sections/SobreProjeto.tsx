'use client';

import { LiquifyTitle } from '@/components/ui/LiquifyTitle';
import { CoqueiroAnimated, CoqueiroBackground } from '@/components/ui';
import { useFadeIn } from '@/hooks/useFadeIn';

interface SobreProjetoProps {
  backgroundColor?: string;
}

export const SobreProjeto = ({ backgroundColor = 'bg-beige-50' }: SobreProjetoProps) => {
  const fadeInRef = useFadeIn(0.3);
  
  return (
    <section id="o-baiano-tem-o-molho" className={`relative py-32 px-6 ${backgroundColor} overflow-hidden`}>
      {/* Coqueiros de background */}
      <CoqueiroBackground count={12} />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <CoqueiroAnimated side="left" size="lg" />
            <LiquifyTitle className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              O Baiano tem o molho!
            </LiquifyTitle>
            <CoqueiroAnimated side="right" size="lg" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto mb-8" />
        </div>

        <div className="prose prose-lg md:prose-xl mx-auto">
          <div ref={fadeInRef} className="max-w-4xl mx-auto">
            <div className="text-base md:text-lg text-gray-700 leading-relaxed text-left space-y-4">
              <p>
                Ouvi outra vez um <strong className="text-black">"colé de mermo"</strong> vindo do pai de uma amiga e fiquei viajando… ''colé de mermo o quê?'' Será que ele pegou ar com alguma coisa? Rapaz, acho que esse daí é das antigas, viu?! Faz tempo que não ouço ninguém mais pivetinho falando assim… e outra, <strong className="text-black">baiano inventa é arte véi</strong>. Cê já parou pra pensar que o jeito que a gente fala diz muito sobre quem a gente é? Pois é... outro dia mesmo eu tava no buzú, indo no Comércio, quando uma senhora virou pra mim e soltou um <strong className="text-black">"Oxente, menino, esse sol tá pegando fogo, viu?"</strong>.
              </p>
              
              <p>
                Aí eu ri e pensei: <strong className="text-black">rapaz, até pra reclamar a gente tem estilo!</strong>
              </p>
              
              <p>
                E foi daí que veio o projeto <strong className="text-black text-lg">"Sotaque em Pauta: identidade e resistência no falar baiano"</strong>. A ideia é mostrar que o nosso sotaque, esse <strong className="text-black">jeitinho manso e malemolente</strong>, é mais do que fala: é identidade, é cultura, é resistência.
              </p>
              
              <p>
                Porque, pegue a visão, nas novelas e nos filmes, o povo às vezes tenta esconder o sotaque, né? Fica querendo falar <strong className="text-black">"neutro"</strong>, como se o nosso jeito fosse errado. <strong className="text-black">Que nada!</strong>
              </p>
              
              <p>
                Na música, então... ah, meu parceiro, aí é o contrário! É <strong className="text-black">Ivete gritando alegria</strong>, é <strong className="text-black">Luedji Luna poetizando a negritude</strong>, é <strong className="text-black">Caetano e Gil</strong> mostrando que o sotaque baiano é melodia pura.
              </p>
              
              <p>
                E a moda? <strong className="text-black">Oxe!</strong> A moda fala também, viu? É cada camisa com <strong className="text-black">"Oxente!", "Lá ele!", "Sua cara nem arde!"</strong> que a gente vê por aí... o povo usa como quem diz: <strong className="text-black">"sou baiano, e daí?"</strong>.
              </p>
              
              <p>
                Até no jornalismo, a fala vira uma ponte, o repórter puxa um <strong className="text-black">"meu povo"</strong> no ar e já conquista todo mundo, porque parece que tá ali, conversando na calçada.
              </p>
              
              <p>
                Esse projeto é isso: é <strong className="text-black">ouvir, sentir e celebrar</strong> o que a gente tem de mais bonito: <strong className="text-black">a fala, o jeito, o balanço</strong>.
              </p>
              
              <p className="text-center">
                <strong className="text-black text-xl">Porque aqui na Bahia, meu irmão, a gente não fala bonito. A gente fala do nosso jeito, e fala mermo!</strong>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🎤</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Entrevistas</h3>
              <p className="text-gray-600">
                Vozes autênticas que contam suas histórias
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🗺️</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Mapeamento</h3>
              <p className="text-gray-600">
                Regiões, sotaques e expressões locais
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Multimídia</h3>
              <p className="text-gray-600">
                Textos, vídeos, áudios e interatividade
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
