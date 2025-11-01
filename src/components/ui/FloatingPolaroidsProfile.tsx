'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { getAssetPath } from '@/lib/getAssetPath';

interface Polaroid {
  image: string;
  rotation: number;
  left: string;
  top: string;
  delay: number;
  scale: number;
}

interface FloatingPolaroidsProfileProps {
  images: string[];
  containerHeight?: string;
}

const FloatingPolaroidsProfile: React.FC<FloatingPolaroidsProfileProps> = ({ 
  images, 
  containerHeight = '600px' 
}) => {
  const polaroidsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Configurações de posicionamento para até 5 polaroides
  const positions = [
    { rotation: -12, left: '5%', top: '10%', scale: 0.85 },
    { rotation: 8, left: '85%', top: '15%', scale: 0.9 },
    { rotation: -15, left: '10%', top: '60%', scale: 0.95 },
    { rotation: 10, left: '82%', top: '65%', scale: 0.8 },
    { rotation: -8, left: '15%', top: '35%', scale: 0.88 },
  ];

  const polaroids: Polaroid[] = images.slice(0, 5).map((image, index) => ({
    image,
    rotation: positions[index].rotation,
    left: positions[index].left,
    top: positions[index].top,
    delay: index * 0.3,
    scale: positions[index].scale,
  }));

  useEffect(() => {
    polaroidsRef.current.forEach((polaroid, index) => {
      if (!polaroid) return;

      // Animação de entrada
      gsap.from(polaroid, {
        opacity: 0,
        scale: 0,
        rotation: polaroids[index].rotation + 180,
        duration: 1.2,
        delay: polaroids[index].delay,
        ease: 'elastic.out(1, 0.5)',
      });

      // Animação de flutuação contínua
      gsap.to(polaroid, {
        y: '+=15',
        rotation: `+=${Math.random() * 8 - 4}`,
        duration: 2.5 + Math.random() * 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: polaroids[index].delay,
      });

      // Animação de rotação sutil
      gsap.to(polaroid, {
        rotation: `+=${Math.random() * 12 - 6}`,
        duration: 4 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: polaroids[index].delay + 0.3,
      });
    });
  }, [polaroids]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10" style={{ height: containerHeight }}>
      {polaroids.map((polaroid, index) => (
        <div
          key={index}
          ref={(el) => {
            polaroidsRef.current[index] = el;
          }}
          className="absolute"
          style={{
            left: polaroid.left,
            top: polaroid.top,
            transform: `rotate(${polaroid.rotation}deg) scale(${polaroid.scale})`,
          }}
        >
          {/* Polaroid Frame */}
          <div className="bg-white p-2.5 shadow-2xl rounded-sm" style={{ width: '140px' }}>
            {/* Photo */}
            <div className="relative aspect-square bg-gray-200 mb-2.5 overflow-hidden">
              <Image
                src={getAssetPath(polaroid.image)}
                alt={`Polaroid ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
            
            {/* Polaroid bottom space */}
            <div className="h-8 flex items-center justify-center">
              <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            </div>
          </div>

          {/* Shadow */}
          <div className="absolute inset-0 bg-black/20 blur-xl -z-10 translate-y-3"></div>
        </div>
      ))}
    </div>
  );
};

export default FloatingPolaroidsProfile;
