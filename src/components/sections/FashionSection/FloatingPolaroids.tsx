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

const polaroids: Polaroid[] = [
  {
    image: '/paula4.JPG',
    rotation: -12,
    left: '5%',
    top: '10%',
    delay: 0,
    scale: 0.9,
  },
  {
    image: '/paula5.JPG',
    rotation: 8,
    left: '85%',
    top: '15%',
    delay: 0.5,
    scale: 1,
  },
  {
    image: '/paula6.JPG',
    rotation: -15,
    left: '10%',
    top: '60%',
    delay: 1,
    scale: 0.95,
  },
  {
    image: '/paula.JPG',
    rotation: 10,
    left: '80%',
    top: '65%',
    delay: 1.5,
    scale: 0.85,
  },
  {
    image: '/paula1.JPG',
    rotation: -8,
    left: '15%',
    top: '35%',
    delay: 2,
    scale: 0.8,
  },
  {
    image: '/paula2.JPG',
    rotation: 12,
    left: '82%',
    top: '40%',
    delay: 2.5,
    scale: 0.9,
  },
];

const FloatingPolaroids: React.FC = () => {
  const polaroidsRef = useRef<(HTMLDivElement | null)[]>([]);

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
        y: '+=20',
        rotation: `+=${Math.random() * 10 - 5}`,
        duration: 3 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: polaroids[index].delay,
      });

      // Animação de rotação sutil
      gsap.to(polaroid, {
        rotation: `+=${Math.random() * 15 - 7.5}`,
        duration: 5 + Math.random() * 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: polaroids[index].delay + 0.5,
      });
    });
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
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
          <div className="bg-white p-3 shadow-2xl rounded-sm" style={{ width: '180px' }}>
            {/* Photo */}
            <div className="relative aspect-square bg-gray-200 mb-3 overflow-hidden">
              <Image
                src={getAssetPath(polaroid.image)}
                alt={`Paula Polaroid ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
            
            {/* Polaroid bottom space */}
            <div className="h-12 flex items-center justify-center">
              <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            </div>
          </div>

          {/* Shadow */}
          <div className="absolute inset-0 bg-black/20 blur-xl -z-10 translate-y-4"></div>
        </div>
      ))}
    </div>
  );
};

export default FloatingPolaroids;
