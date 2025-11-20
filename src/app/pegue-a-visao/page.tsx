'use client';

import { VideoRevealSection } from '@/components/sections/VideoRevealSection';
import { ColorStripe } from '@/components/ui/ColorStripe';
import { Navbar } from '@/components/ui/Navbar';
import { PageNavigation } from '@/components/ui/PageNavigation';
import { GSAPWrapper } from '@/components/GSAPWrapper';
import { Timeline } from '@/components/ui/Timeline';

export default function PegueAVisaoPage() {
  return (
    <GSAPWrapper>
      <Navbar />
      <ColorStripe />
      <main style={{ paddingTop: '70px' }}>
        <VideoRevealSection
          videoUrl="https://youtu.be/9WhiZSi5XB0"
          title="Pegue a visão: Heranças Linguísticas dos falares brasileiros"
          carouselImages={[
            '/alib1.jpeg',
            '/alib2.jpeg',
          ]}
          carouselCaption="Foto: Amanda Marinho, Deborah Freitas e Ilary Almeida"
          carouselImageCaptions={[
            'Foto: Amanda Marinho, Deborah Freitas, Ilary Almeida e Profª Jacyra Mota',
            'Fotos do Atlas Linguístico do Brasil (ALiB)'
          ]}
          carouselImageCaptionLinks={[
            '',
            ''
          ]}
          carouselPosition={3}
          customComponent={
            <Timeline 
              events={[
                {
                  period: '1500–1600',
                  title: 'Presença Tupinambá no Recôncavo',
                  description: 'A base da língua geral indígena, com vocabulário, fonética e entonação que marcaram profundamente a fala cotidiana da região.'
                },
                {
                  period: 'Século XVII',
                  title: 'Expansão do porto de Salvador',
                  description: 'Salvador se torna ponto estratégico do Atlântico, intensificando a circulação de povos africanos de diferentes etnias e línguas.'
                },
                {
                  period: 'Século XVIII',
                  title: 'Convívio linguístico intensificado',
                  description: 'Iorubás, jejes, hauçás, angolas e quicongos entram em contato com colonos portugueses, indígenas e crioulos. Surge uma fala marcada pelo multilinguismo cotidiano.'
                },
                {
                  period: 'Início do século XIX',
                  title: 'Formação de redes urbanas negras',
                  description: 'Igrejas, irmandades, mercados e organizações negras urbanas consolidam expressões, ritmos e estruturas de fala.'
                },
                {
                  period: '1823',
                  title: 'Independência da Bahia',
                  description: 'Mais que evento político, o período marca a afirmação de uma identidade baiana em que língua, cultura e resistência se entrelaçam.'
                },
                {
                  period: 'Pós-Independência',
                  title: 'A fala baiana se afirma como identidade',
                  description: 'Processo lento, mas contínuo: a fala passa a carregar símbolos culturais, musicais e religiosos que permanecem no presente.'
                }
              ]}
            />
          }
          customComponentPosition={1}
          introText={`A Bahia é, sem dúvida, um território onde cada palavra carrega história. Um lugar em que a língua não é apenas instrumento de comunicação, mas um documento vivo de quem resistiu, lutou, negociou e reinventou o próprio modo de existir. Basta atravessar a cidade para perceber: no Subúrbio, o "bora" embala o cotidiano; no Pelourinho, o "véi" ecoa entre ladeiras, turistas e tambores; e o clássico "oxente" — esse patrimônio afetivo — denuncia de longe que um baiano chegou. Mas esse modo de falar não nasceu do acaso: é fruto de séculos de encontros, rupturas, diálogos e permanências culturais que compõem o que hoje chamamos de baianidade.

A formação linguística baiana começa muito antes de 1823, ano da Independência da Bahia — episódio que consolidou o estado como símbolo de resistência no Brasil. Desde o período colonial, Salvador já funcionava como um dos maiores portos do Atlântico, recebendo povos africanos de diferentes etnias, como iorubás, jejes, hauçás, quicongos e angolas; além de populações indígenas, principalmente tupinambás, que habitavam o Recôncavo muito antes da chegada dos portugueses. A convivência multidirecional entre esses grupos — forçada, negociada ou espontânea — moldou não só costumes, práticas religiosas e ritmos musicais, mas também a própria estrutura do português que se fala aqui. O idioma ganhou sabores, sons, entonações e ritmos novos, criando uma fala que carrega, ao mesmo tempo, histórias de perda, resistência e criação.

Na época da Independência, negros, indígenas, mulheres, escravizados, libertos e trabalhadores pobres protagonizaram lutas decisivas contra as forças portuguesas. Essa frente plural deixou marcas profundas: costumes preservados, práticas comunitárias fortalecidas, cantos transmitidos de geração em geração, palavras e modos de nomear o mundo que atravessaram séculos. Expressões como "oxente", "massa", "tô ligado", "pivete", "migué", "arrudeia", "mermo", "oxem" e tantas outras derivam desse caldeirão cultural que transformou a Bahia em um território onde a língua é tão mestiça quanto sua gente. Falar baiano é, portanto, um ato que carrega, no ritmo das sílabas, a herança de quem resistiu tanto pelo corpo quanto pela voz — e que segue resistindo, todos os dias, pela oralidade.

Essa riqueza linguística vem sendo estudada com dedicação por pesquisadores como a professora e linguista Jacyra Mota, referência nacional em variação linguística e integrante do Atlas Linguístico do Brasil (ALiB) — um projeto monumental que investiga, cidade por cidade, como o português se espalhou, se adaptou e se transformou ao longo do país. Para Jacyra, "o sotaque baiano é um retrato vivo da história e da pluralidade do estado". E o ALiB confirma algo que o ouvido do baiano já sabe sem precisar de pesquisa: nossa fala é ritmada, alongada e cheia de musicalidade, como se cada palavra tivesse vontade própria e pedisse passagem com calma, cadência e intenção.

Uma das características mais marcantes está na abertura e na extensão das vogais — traço herdado da forte influência africana e das línguas indígenas, em que o som vocal costuma ser mais amplo, mais arejado. É essa qualidade que faz o famoso "venha cá" soar quase como um canto, mais demorado, mais doce e com mais balanço. Em contraste, nas regiões Sul e Sudeste, as vogais tendem a ser curtas e fechadas, produzindo uma fala mais "seca", direta e acelerada — diferença que qualquer baiano reconhece de imediato ao atravessar fronteiras e estranhar a velocidade com que as palavras parecem se esbarrar umas nas outras.

Outro aspecto curioso é a palatalização — fenômeno que transforma consoantes como "t", "d", "n" e "l" em sons mais suaves. É por isso que o baiano diz "tchia" (tia), "djia" (dia) e prolonga o "menina" com uma leveza quase líquida. Essa suavidade não é preguiça, como já se tentou estigmatizar, mas sim herança fonética complexa, atravessada por séculos de contato entre povos de matrizes linguísticas diversas. É uma marca que revela não lentidão, mas sensibilidade sonora e identidade coletiva.

Há também singularidades na construção de frases. A preferência pelo "venha" no lugar de "vem", por exemplo — "venha cá", "venha ver isso", "venha comigo" — soa formal para quem é de fora, mas aqui é pura espontaneidade, quase coloquial. Jacyra explica que esse uso tem relação com normas antigas do português europeu trazidas no período colonial e reelaboradas pelo jeito baiano de falar. O resultado é uma língua que equilibra tradição e reinvenção, sem perder a ternura do convite implícito em cada "venha".

E não se trata apenas de sons: a língua na Bahia é profundamente afetiva. Carrega cheiros, ritmos, humor, memórias. Não é coincidência que muitas expressões nasçam do corpo ou do gesto, como "arrudeia", "ajeite aí", "se avexe não", "me dê cá", "desembucha". O falar baiano é cuidadoso mesmo quando é direto; é bem-humorado mesmo quando é sério; é dançante mesmo quando denuncia injustiças. Dá para dizer que, por aqui, as palavras têm movimento — elas caminham, rebolam, descansam, se espreguiçam e, às vezes, até sorriem.

E, nesse contexto tão vasto e vivo, compreender o falar baiano é, de certo modo, compreender a própria Bahia: um lugar onde a palavra parece dançar, a fala tem ritmo e o sotaque se afirma como marca de identidade e resistência. Talvez seja por isso que tantos visitantes guardam lembranças afetivas da Bahia através das expressões que ouviram — porque o sotaque daqui não se limita à fala: ele abraça, acolhe, provoca riso, guarda histórias. Um Brasil inteiro cabe nesse modo de falar — um Brasil que começou, afinal, pela Bahia, e que continua ecoando nela em cada "oxente", cada "véi", cada "bora", cada "chegue mais".`}
        />

        <PageNavigation
          backHref="/"
          nextLabel="OXE, QUE ARTE É ESSA?"
          nextHref="/oxe-que-arte"
        />
      </main>
    </GSAPWrapper>
  );
}
