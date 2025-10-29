'use client';

import styles from './Footer.module.css';

interface FooterProps {
  authorName?: string;
  authorUrl?: string;
}

export const Footer = ({ 
  authorName = 'Jornalismo UniJorge',
  authorUrl = '#'
}: FooterProps) => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Expediente */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            Expediente
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Equipe */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Equipe</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Ana Carolina Santos</li>
                <li>Bruno Oliveira Lima</li>
                <li>Camila Rodrigues Silva</li>
                <li>Daniel Costa Ferreira</li>
                <li>Eduarda Almeida Souza</li>
              </ul>
            </div>

            {/* Professor Orientador */}
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-orange-400">Professor Orientador</h3>
              <p className="text-gray-300 font-semibold">Prof. Dr. Roberto Mendes</p>
              <p className="text-gray-400 text-sm mt-2">Centro Universitário Jorge Amado</p>
            </div>

            {/* TCC */}
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold mb-4 text-red-400">Trabalho de Conclusão</h3>
              <p className="text-gray-300">Bacharelado em Jornalismo</p>
              <p className="text-gray-400 text-sm mt-2">UniJorge - 2024.2</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent mb-8" />

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p className="mb-2">
            <strong className="text-yellow-400">Sotaque em Pauta:</strong> identidade e resistência no falar baiano
          </p>
          <p>© 2024 Centro Universitário Jorge Amado. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
