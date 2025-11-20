'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export function VLibras() {
  useEffect(() => {
    // Garante que o widget seja inicializado após o script carregar
    const initVLibras = () => {
      if (window && (window as any).VLibras) {
        new (window as any).VLibras.Widget('https://vlibras.gov.br/app');
      }
    };

    // Tenta inicializar após um pequeno delay
    const timer = setTimeout(initVLibras, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Script
        src="https://vlibras.gov.br/app/vlibras-plugin.js"
        strategy="afterInteractive"
        onLoad={() => {
          if ((window as any).VLibras) {
            new (window as any).VLibras.Widget('https://vlibras.gov.br/app');
          }
        }}
      />
      <div 
        {...({ 'vw': 'true' } as any)}
        className="enabled"
      >
        <div {...({ 'vw-access-button': 'true' } as any)} className="active"></div>
        <div {...({ 'vw-plugin-wrapper': 'true' } as any)}>
          <div className="vw-plugin-top-wrapper"></div>
        </div>
      </div>
    </>
  );
}
