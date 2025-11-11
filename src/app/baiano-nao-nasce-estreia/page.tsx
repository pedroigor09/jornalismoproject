'use client';

import { FashionSection } from '@/components/sections/FashionSection';
import { ColorStripe } from '@/components/ui/ColorStripe';
import { Navbar } from '@/components/ui/Navbar';
import { PageNavigation } from '@/components/ui/PageNavigation';
import { GSAPWrapper } from '@/components/GSAPWrapper';
import { fashionExpert, fashionReferences, tamoJuntoParceiro } from '@/lib/fashionData';

export default function BaianoNaoNasceEstreiaPage() {
  return (
    <GSAPWrapper>
      <Navbar />
      <ColorStripe />
      <main style={{ paddingTop: '70px' }}>
        <FashionSection
          title="Baiano não nasce, estreia!"
          subtitle="Expressões do cotidiano que viram slogans e estampas"
          introduction="Há algo fascinante em ver o jeito baiano de ser, se transformar em moda. As expressões populares que ecoam nas ruas agora estampam camisas, bolsas e acessórios — 'Lá ele!', 'Não aperte minha mente', 'Oxente!' — ganhando status de arte e identidade. O sotaque vira estilo, e a baianidade se consolida como grife. Mais que estética, é orgulho: uma forma de afirmar pertencimento e celebrar cultura. Cada frase, cor vibrante e estampa marcante carrega um pedaço da história e da irreverência da Bahia: leve, criativa e cheia de atitude."
          expert={fashionExpert}
          references={fashionReferences}
          brand={tamoJuntoParceiro}
        />

        <PageNavigation
          backHref="/oxe-que-arte"
          nextLabel="NAQUELA PEGADA!"
          nextHref="/naquela-pegada"
        />
      </main>
    </GSAPWrapper>
  );
}
