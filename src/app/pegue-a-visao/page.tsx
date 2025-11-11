'use client';

import { VideoRevealSection } from '@/components/sections/VideoRevealSection';
import { ColorStripe } from '@/components/ui/ColorStripe';
import { Navbar } from '@/components/ui/Navbar';
import { PageNavigation } from '@/components/ui/PageNavigation';
import { GSAPWrapper } from '@/components/GSAPWrapper';

export default function PegueAVisaoPage() {
  return (
    <GSAPWrapper>
      <Navbar />
      <ColorStripe />
      <main style={{ paddingTop: '70px' }}>
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

        <PageNavigation
          backHref="/"
          nextLabel="OXE, QUE ARTE É ESSA?"
          nextHref="/oxe-que-arte"
        />
      </main>
    </GSAPWrapper>
  );
}
