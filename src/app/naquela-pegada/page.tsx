'use client';

import { MediaSection } from '@/components/sections/MediaSection';
import { ColorStripe } from '@/components/ui/ColorStripe';
import { Navbar } from '@/components/ui/Navbar';
import { PageNavigation } from '@/components/ui/PageNavigation';
import { GSAPWrapper } from '@/components/GSAPWrapper';
import { mediaIntroduction, journalists, actors, influencers } from '@/lib/mediaData';

export default function NaquelaPegadaPage() {
  return (
    <GSAPWrapper>
      <Navbar />
      <ColorStripe />
      <main style={{ paddingTop: '70px' }}>
        <MediaSection
          title="Naquela pegada!"
          subtitle="A identidade e a fala baiana do telejornal ao streaming"
          introductions={mediaIntroduction.map(intro => intro.text)}
          journalists={journalists}
          actors={actors}
          influencers={influencers}
        />

        <PageNavigation
          backHref="/baiano-nao-nasce-estreia"
          nextLabel="NA COCO"
          nextHref="/na-coco"
        />
      </main>
    </GSAPWrapper>
  );
}
