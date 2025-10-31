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
import { ColorStripe } from '@/components/ui/ColorStripe';
import { NavigationButtons } from '@/components/ui/NavigationButtons';
import { Navbar } from '@/components/ui/Navbar';
import { GSAPWrapper } from '@/components/GSAPWrapper';
import { ASSETS, SITE_CONTENT } from '@/lib/constants';
import { artistsData } from '@/lib/artistsData';

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
          introText={`Tava no buzú outro dia, indo ali pro Comércio, quando um rapaz botou pra tocar alto no fone — "O baiano tem o molho, o baiano tem o molho…", do Kannalha. A galera toda começou a balançar o pé, rir, comentar. Uma senhora até soltou: "Oxente, esse menino fala é a verdade!". E não é que fala mesmo? Porque se tem uma coisa que o baiano tem, é o tal do molho — esse tempero que aparece no jeito de andar, de sorrir e, principalmente, de falar.
Ouvi outra vez um "colé de mermo" vindo do pai de uma amiga e fiquei viajando… ''colé de mermo o quê?''. Rapaz, acho que esse daí é das antigas, viu? Faz tempo que não ouço ninguém mais pivetinho falando assim. Mas é isso: o baiano inventa arte até na língua. Cê já parou pra pensar que o jeito que a gente fala diz muito sobre quem a gente é? Pois é. Nosso sotaque é ritmo, é melodia, é história.
E foi desse encantamento com a fala que nasceu o projeto "Sotaque em Pauta" — uma celebração da nossa identidade através da palavra. A ideia é simples: mostrar que o sotaque baiano, esse jeitinho manso e malemolente, é muito mais que uma forma de falar — é cultura, afeto e resistência.
Porque, pegue a visão: nas novelas e nos filmes, o povo ainda tenta esconder o sotaque, né? Fica querendo falar "neutro", como se o nosso jeito fosse errado. Que nada!
Na música, então… é o contrário! É Ivete gritando alegria, é Luedji Luna poetizando a negritude, é Caetano e Gil transformando a fala em melodia. E agora é Kanalha cantando alto que o "baiano tem o molho" — e mostrando que a nossa voz é orgulho, não defeito.
Na literatura e na poesia, o sotaque também ganha corpo e alma. É Castro Alves declamando liberdade com o coração do Recôncavo; é Mário Prata e James Martins escrevendo com o balanço da fala popular; é Lívia Natália e Jarid Arraes fazendo da palavra uma arma e um abraço. A escrita baiana tem som, tem cadência, tem gíria, tem riso. É o texto que dança, que conversa, que não se dobra à norma — porque o nosso português é inventivo, cheio de rebolado e verdade.
Na moda, o sotaque também aparece: é cada camisa com "Oxente!", "Lá ele!", "Sua cara nem arde!" que a gente vê por aí — o povo usa como quem diz: "sou baiano, e daí?".
E no jornalismo, o sotaque é ponte: o repórter puxa um "meu povo" no ar e já conquista todo mundo, porque parece que tá ali, conversando na calçada.
E se duvidar, até na internet a gente dá show! É meme, é vídeo, é trend com gíria baiana bombando — o povo do Sudeste tenta acompanhar e acaba se enrolando todo, mas tá valendo: é o sotaque da Bahia dominando o feed!
Esse projeto é isso: é ouvir, sentir e celebrar o que a gente tem de mais bonito — a fala, o jeito, o balanço, o molho.
Porque aqui na Bahia, meu irmão, a gente não fala bonito.
A gente fala do nosso jeito. E fala mermo.
E quer saber? Quem entende, entende — e quem não entende… chegue mais pra aprender!`}
        />

        <ColorStripe />

        <ArtisticSection
          title="Oxe, Que arte é essa?"
          subtitle="Quando o sotaque vira poesia e o ritmo vira identidade"
          introduction="Entre versos, acordes e palcos, a Bahia respira cultura em cada palavra pronunciada. Aqui, o sotaque não é apenas forma — é conteúdo, é herança, é estética. É o poeta que transforma o falar em manifesto, a cantora que leva a oralidade dos blocos afros aos grandes palcos, o dramaturgo que equilibra prosódia e performance sem cair no estereótipo. Conheça as vozes que tornam a baianidade uma linguagem artística viva, complexa e inconfundível."
          artists={artistsData}
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
