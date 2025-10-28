'use client';

import { useState, useEffect } from 'react';
import { CoqueiroAnimated } from './CoqueiroAnimated';

interface CoqueiroBackgroundProps {
  count?: number;
}

export const CoqueiroBackground = ({ count = 8 }: CoqueiroBackgroundProps) => {
  const [coqueiros, setCoqueiros] = useState<Array<{
    id: number;
    top: number;
    left: number;
    size: 'sm' | 'md' | 'lg';
    delay: number;
    side: 'left' | 'right';
  }>>([]);

  useEffect(() => {
    // Gerar posições fixas apenas no cliente para evitar problemas de hidratação
    const newCoqueiros = Array.from({ length: count }, (_, index) => ({
      id: index,
      top: Math.random() * 80 + 10, // 10% a 90% da altura
      left: Math.random() * 90 + 5,  // 5% a 95% da largura
      size: ['sm', 'md', 'lg'][Math.floor(Math.random() * 3)] as 'sm' | 'md' | 'lg',
      delay: Math.random() * 3, // Delay aleatório de 0 a 3 segundos
      side: Math.random() > 0.5 ? 'left' : 'right' as 'left' | 'right'
    }));
    setCoqueiros(newCoqueiros);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {coqueiros.map((coqueiro) => (
        <div
          key={coqueiro.id}
          className="absolute"
          style={{
            top: `${coqueiro.top}%`,
            left: `${coqueiro.left}%`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <CoqueiroAnimated
            size={coqueiro.size}
            isBackground={true}
            delay={coqueiro.delay}
            side={coqueiro.side}
          />
        </div>
      ))}
    </div>
  );
};