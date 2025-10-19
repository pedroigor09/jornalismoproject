'use client';

import { StickyText } from '@/components/ui/StickyText';

const phrases = [
  'OXENTE!',
  'MASSA DEMAIS, SÔ!',
  'VIU, VISSE?',
  'ARRETADO!',
  'BAIANIDADE É NOSSO DNA',
];

export function PhraseRevealSection() {
  return (
    <section className="bg-gradient-to-b from-black via-[var(--bahia-purple)] to-[var(--bahia-blue)]">
      <StickyText phrases={phrases} />
    </section>
  );
}
