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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Produção, edição e direção */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Produção, edição e direção</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Amanda Lima Marinho</li>
                <li>Deborah Silva dos Santos Freitas</li>
                <li>Ilary Senhorinha de Almeida Santos</li>
              </ul>
            </div>

            {/* Identidade Visual e Desenvolvimento */}
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-orange-400">Identidade Visual</h3>
              <p className="text-gray-300 mb-6">Alana Beatriz Santos Lima</p>
              
              <h3 className="text-xl font-bold mb-4 text-orange-400">Desenvolvimento web</h3>
              <p className="text-gray-300">Pedro Igor Campos Costa</p>
            </div>

            {/* Orientação */}
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold mb-4 text-red-400">Professora Orientadora</h3>
              <p className="text-gray-300 font-semibold mb-6">Mariana Menezes Alcântara</p>
              
              <h3 className="text-xl font-bold mb-4 text-red-400">Professores co-orientadores</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Leonardo Assunção Bião Almeida</li>
                <li>Ceci Alves dos Santos</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent mb-8" />

        {/* TCC Info */}
        <div className="text-center mb-8">
          <p className="text-gray-300 font-semibold mb-2">Projeto Experimental</p>
          <p className="text-gray-400 text-sm">
            Trabalho de Conclusão de Curso de Bacharelado em Jornalismo<br />
            Centro Universitário Jorge Amado (UNIJORGE) - 2025.2
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p className="mb-2">
            <strong className="text-yellow-400">Sotaque em Pauta:</strong> identidade e resistência no falar baiano
          </p>
          <p>© 2025 Centro Universitário Jorge Amado. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
