'use client';

import { LiquifyTitle } from '@/components/ui/LiquifyTitle';

interface SobreProjetoProps {
  backgroundColor?: string;
}

export const SobreProjeto = ({ backgroundColor = 'bg-beige-50' }: SobreProjetoProps) => {
  return (
    <section className={`py-32 px-6 ${backgroundColor}`}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <LiquifyTitle className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
            O Projeto
          </LiquifyTitle>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto mb-8" />
        </div>

        <div className="prose prose-lg md:prose-xl mx-auto">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 text-center">
            Este projeto nasceu do desejo de <strong className="text-orange-600">celebrar e documentar</strong> a
            riqueza da identidade cultural baiana através de sua forma mais genuína de expressão:{' '}
            <strong className="text-red-600">a linguagem</strong>.
          </p>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 text-center">
            Mais do que um trabalho acadêmico, é uma jornada pelas gírias, sotaques e expressões que
            fazem da Bahia um território único de pertencimento e identidade.
          </p>

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
