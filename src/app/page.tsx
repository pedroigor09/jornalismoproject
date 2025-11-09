'use client';

import { HeroSection } from '@/components/sections/HeroSection';
import { OpacityRevealSection } from '@/components/sections/OpacityRevealSection';
import { SobreProjeto } from '@/components/sections/SobreProjeto';
import { MapaInterativo } from '@/components/sections/MapaInterativo';
import { MarqueeSection } from '@/components/sections/MarqueeSection';
import { EstatsSection } from '@/components/sections/EstatsSection';
import { HorizontalScrollSection } from '@/components/sections/HorizontalScrollSection';
import { CarouselSection } from '@/components/sections/CarouselSection';
import { ReportagemGrid } from '@/components/sections/ReportagemGrid';
import { LiquifySection } from '@/components/sections/LiquifySection';
import { VideoRevealSection } from '@/components/sections/VideoRevealSection';
import { ArtisticSection } from '@/components/sections/ArtisticSection';
import { FashionSection } from '@/components/sections/FashionSection';
import { MediaSection } from '@/components/sections/MediaSection';
import { ColorStripe } from '@/components/ui/ColorStripe';
import { NavigationButtons } from '@/components/ui/NavigationButtons';
import { Navbar } from '@/components/ui/Navbar';
import { GSAPWrapper } from '@/components/GSAPWrapper';
import { ASSETS, SITE_CONTENT } from '@/lib/constants';
import { artistsData } from '@/lib/artistsData';
import { fashionExpert, fashionReferences, tamoJuntoParceiro } from '@/lib/fashionData';
import { mediaIntroduction, journalists, actors, influencers } from '@/lib/mediaData';

const reportagensData = [
  {
    id: '1',
    titulo: 'Oxente! As gírias que definem a Bahia',
    descricao: 'Uma exploração profunda sobre as expressões mais marcantes do vocabulário baiano e suas origens',
    tipo: 'video' as const,
    imagemCapa: ASSETS.JORNAL.JORNAL1,
    data: '15 de Outubro, 2025',
  },
  {
    id: '2',
    titulo: 'Sotaque Baiano: Uma identidade sonora',
    descricao: 'Áudios e entrevistas revelam a musicalidade única do falar baiano em diferentes regiões',
    tipo: 'audio' as const,
    imagemCapa: ASSETS.JORNAL.JORNAL2,
    data: '12 de Outubro, 2025',
  },
  {
    id: '3',
    titulo: 'Festas Populares e a Cultura Baiana',
    descricao: 'Imagens que capturam a essência das celebrações e tradições que mantêm viva nossa identidade',
    tipo: 'fotos' as const,
    imagemCapa: ASSETS.JORNAL.JORNAL3,
    data: '08 de Outubro, 2025',
  },
];

export default function Home() {
  return (
    <GSAPWrapper>
      <Navbar />
      <ColorStripe />
      <NavigationButtons />
      <main style={{ paddingTop: '70px' }}>
        <HeroSection
          title={[...SITE_CONTENT.HERO.TITLE]}
          descriptions={[SITE_CONTENT.HERO.SUBTITLE, SITE_CONTENT.HERO.DESCRIPTION]}
          imageUrl={ASSETS.BAHIA_HERO}
        />

        <SobreProjeto />

        <VideoRevealSection
          videoUrl="https://youtu.be/NXFucD6nMn0"
          title="Heranças Linguísticas dos falares brasileiros"
          subtitle="Conheça o projeto que mapeia a diversidade linguística brasileira"
          introText={`A Bahia é, sem dúvida, um território de expressões únicas. Cada canto carrega suas próprias marcas linguísticas: no Subúrbio, o "bora" faz parte da rotina; no Pelourinho, o "véi" é quase um símbolo local; e o clássico "oxente" entrega, de longe, a presença de um baiano. Esse modo de falar não nasceu por acaso — é fruto de séculos de encontros, trocas e resistências.

Desde o período da Independência da Bahia, em 1823, o povo baiano já se destacava pela diversidade. Negros, indígenas, mulheres e libertos lutaram lado a lado por liberdade e deixaram como legado não só uma história de coragem, mas também uma riqueza linguística que ecoa até hoje. Expressões como "oxente", "massa" e "tô ligado" são reflexos dessa mistura cultural que moldou um jeito único de se comunicar.

Essa identidade linguística vem sendo estudada há décadas por pesquisadores como a professora e linguista Jacyra Mota, que integra o Atlas Linguístico do Brasil (ALiB) — um projeto que mapeia como o português é falado de norte a sul do país. Em conversa com nossa equipe, Jacyra contou que o sotaque baiano é um retrato vivo da história e da pluralidade do estado.

Segundo ela, o ALiB confirmou que a fala baiana tem características muito próprias, principalmente na abertura e na extensão das vogais, o que dá à fala aquele som "cantado" tão conhecido. É por isso que o "venha cá" do baiano soa mais demorado, mais cheio de ritmo. Já nas regiões Sul e Sudeste, as vogais tendem a ser mais curtas e fechadas — o que faz o sotaque soar mais "rápido" e "seco".

Outro traço marcante está na palatalização de consoantes como "t", "d", "n" e "l" — o que faz o baiano dizer tia, dia e menina com um som mais suave, diferente do que se ouve em outras regiões. Essa musicalidade natural da fala acaba sendo uma das maiores marcas do sotaque de Salvador.

Mas as curiosidades não param por aí. No modo de construir frases, há um detalhe que chama atenção: os baianos costumam usar o "venha" em vez de "vem" no imperativo. "Venha cá!", "venha ver isso!", "venha comigo!". Para quem é de fora, pode soar formal ou até autoritário, mas aqui é pura naturalidade. Essa escolha, explica Jacyra, tem relação direta com a formação histórica e cultural da Bahia — influenciada por povos africanos, indígenas e europeus que contribuíram para moldar o português falado no estado.

A verdade é que a língua na Bahia é viva, pulsante e cheia de memória. É canto, é afeto, é resistência. E como lembra Jacyra Mota, entender o falar baiano é entender a própria Bahia: um lugar onde as palavras dançam, a fala tem ritmo e o sotaque é, antes de tudo, um símbolo de identidade.`}
        />

        <ColorStripe />

        <ArtisticSection
          title="Oxe, Que arte é essa?"
          subtitle="Quando o sotaque vira poesia e o ritmo vira identidade"
          introduction="Entre versos, acordes e palcos, a Bahia respira cultura em cada palavra pronunciada. Aqui, o sotaque não é apenas forma — é conteúdo, é herança, é estética. É o poeta que transforma o falar em manifesto, a cantora que leva a oralidade dos blocos afros aos grandes palcos, o dramaturgo que equilibra prosódia e performance sem cair no estereótipo. Conheça as vozes que tornam a baianidade uma linguagem artística viva, complexa e inconfundível."
          artists={artistsData}
        />

        <ColorStripe />

        <FashionSection
          title="Baiano não nasce, estreia!"
          subtitle="Expressões do cotidiano que viram slogans e estampas"
          introduction="Há algo fascinante em ver o jeito baiano de ser, se transformar em moda. As expressões populares que ecoam nas ruas agora estampam camisas, bolsas e acessórios — 'Lá ele!', 'Não aperte minha mente', 'Oxente!' — ganhando status de arte e identidade. O sotaque vira estilo, e a baianidade se consolida como grife. Mais que estética, é orgulho: uma forma de afirmar pertencimento e celebrar cultura. Cada frase, cor vibrante e estampa marcante carrega um pedaço da história e da irreverência da Bahia: leve, criativa e cheia de atitude."
          expert={fashionExpert}
          references={fashionReferences}
          brand={tamoJuntoParceiro}
        />

        <ColorStripe />

        <MediaSection
          title="Naquela pegada!"
          subtitle="A identidade e a fala baiana do telejornal ao streaming"
          introductions={mediaIntroduction.map(intro => intro.text)}
          journalists={journalists}
          actors={actors}
          influencers={influencers}
        />

        <ColorStripe />

        <HorizontalScrollSection />

        <EstatsSection />

        <MapaInterativo />

        <CarouselSection />

        <ColorStripe />

        <ReportagemGrid reportagens={reportagensData} />
      </main>
      
      <MarqueeSection />
    </GSAPWrapper>
  );
}
