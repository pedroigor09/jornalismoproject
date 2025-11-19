'use client';

import { FashionSection } from '@/components/sections/FashionSection';
import { ColorStripe } from '@/components/ui/ColorStripe';
import { Navbar } from '@/components/ui/Navbar';
import { PageNavigation } from '@/components/ui/PageNavigation';
import { GSAPWrapper } from '@/components/GSAPWrapper';
import { YouTubeEmbed } from '@/components/ui/YouTubeEmbed';
import { QuoteWithImage } from '@/components/ui/QuoteWithImage';
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
          introduction={`A moda, quando atravessada pela linguagem e pela cultura, torna-se um território poderoso de afirmação identitária. Na Bahia, esse movimento ganha força singular: gírias, expressões e o sotaque passam a ocupar não apenas a oralidade, mas também superfícies visuais — camisas, bolsas, acessórios — transformando a baianidade em estética, grife e manifesto. Há algo profundamente simbólico no ato de vestir "Oxente", "Lá ele!", "Não aperte minha mente", como se cada palavra bordada ou estampada fosse também um pedaço da fala cotidiana transformado em registro cultural. O estilo se torna voz. O look vira discurso. A moda passa, então, a operar como linguagem que traduz orgulho, pertencimento e memória coletiva.

"A moda reflete nosso jeito de ser. A leveza, a alegria, as cores e estampas traduzem o sentimento baiano — natural, despretensioso e cheio de expressão. Ser baiano não é seguir um padrão, é viver e se expressar com autenticidade. A baianidade aparece no feito à mão, nas cores vibrantes, nas referências ao mar e na criatividade dos nossos criadores." - Paula Magalhães.

Nesse contexto, a jornalista e colunista de moda Paula Magalhães destaca que vestir baianidade é, antes de tudo, vestir autenticidade. Para ela, a moda baiana não segue padrões: reflete o jeito leve, espontâneo, criativo e expressivo de viver. Suas análises evidenciam que as tendências que surgem na Bahia não são meros adornos, mas manifestações de uma identidade profunda, marcada por cores vibrantes, estamparias exuberantes e elementos artesanais que remetem ao mar, à ancestralidade afro-baiana e às narrativas locais.

Paula reforça que as referências afro estão presentes em diversos detalhes: das bijuterias maximalistas aos turbantes, das miçangas às modelagens que celebram o corpo. Mais que decorar, esses elementos contam histórias, traduzem memórias e afirmam raízes. Por isso, ela defende que o papel do jornalismo de moda é justamente revelar talentos da terra e fortalecer um mercado que nasce e floresce em território baiano, mesmo dentro de uma indústria globalizada.

A valorização dessa identidade aparece também nos criadores que hoje representam a moda baiana para o Brasil e para o mundo. Moab, com sua alfaiataria desconstruída; o Ateliê Mão de Mãe, reinventando o crochê com afeto e técnica; Meninos Rei, que exalta a estética afro-baiana em cada peça; Geferson Vila Nova, com elegância original; Irá Salles, reforçando expressão e pertencimento; e marcas como Areia, que apostam em propostas agênero e sofisticadas. Essas produções mostram que a moda baiana não é apenas regional: ela é contemporânea, cosmopolita e, ao mesmo tempo, firme em suas referências culturais. É nessa mistura que surgem roupas que comunicam sem precisar de palavras — e, ainda assim, carregam o sotaque da Bahia.

Esse diálogo entre moda e linguagem ganha materialidade em espaços como a loja Tamo Junto Parceiro, no Rio Vermelho. Criada por jovens empreendedores baianos, a marca nasceu com o objetivo de espalhar a baianidade pelo mundo, mas encontrou no próprio público local sua maior força. As peças, sempre coloridas, cheias de personalidade e repletas de gírias, despertam nos baianos um sentimento de reconhecimento imediato. Segundo Tatiane, uma das criadoras, as estampas funcionam como espelhos culturais: quando alguém lê "oxe", "se plante" ou "não aperte minha mente", vê ali não apenas uma frase, mas um pedaço de sua vivência, de sua família, de seus amigos.

Curiosamente, turistas e estrangeiros também se encantam com essas expressões, ainda que muitas vezes as consumam como curiosidade cultural. Perguntam significados, riem, se surpreendem. Mas é o baiano quem veste com orgulho, não como souvenir, e sim como afirmação de quem é. Isso demonstra a potência da moda como ferramenta de voz regional: ela transforma o que antes poderia ser alvo de estranhamento ou preconceito linguístico em símbolo de força, humor e autoestima.

Ao estampar o sotaque nas roupas, designers e marcas enfrentam de modo silencioso, porém contundente, o preconceito linguístico que por muito tempo marginalizou expressões nordestinas — tratadas como "erradas", "carregadas" ou "não profissionais". A moda vira contra-ataque cultural. Em vez de esconder o jeito de falar, ela expõe; em vez de suavizar, ela acentua; em vez de padronizar, ela celebra a diferença. Assim, vestir baianidade é também um gesto político: uma maneira de dizer que a Bahia tem voz, tem estilo, tem identidade e deseja ser vista em sua própria singularidade.

Quando Tatiane reafirma que o sonho da marca é "vestir baianidade de Salvador para o mundo", ela sintetiza o movimento crescente de marcas e criadores que reconhecem na própria cultura uma matéria-prima estética poderosa. É "trabalho de formiguinha", como ela mesma diz, mas é também uma caminhada firme: expandir sem perder essência, modernizar sem apagar raízes, crescer sem abrir mão da musicalidade da fala baiana. Nesse alinhamento entre moda, linguagem e afeto, a Bahia transforma seu sotaque em estilo, sua história em estampa e seu jeito de ser em marca registrada — viva, colorida e impossível de ignorar.`}
          expert={fashionExpert}
          references={fashionReferences}
          brand={tamoJuntoParceiro}
          customComponents={[
            {
              component: <YouTubeEmbed videoId="j1kqpwgq1xw" title="Tamo Junto Parceiro - Vestindo Baianidade" />,
              position: 6,
            },
            {
              component: (
                <QuoteWithImage
                  quote="Esse é o nosso maior sonho: espalhar a nossa baianidade para todo canto, mostrar um pouquinho do que é realmente ser baiano. Temos um lema: de Salvador para o mundo, vestindo baianidade. O que acontece na Bahia, queremos que se espalhe pelo mundo."
                  author="Tatiane Magalhães"
                  imagePath="/tatiane.jpeg"
                  imageAlt="Tatiane - Tamo Junto Parceiro"
                />
              ),
              position: 7,
            },
          ]}
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
