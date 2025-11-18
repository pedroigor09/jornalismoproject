'use client';

import { LiquifyTitle } from '@/components/ui/LiquifyTitle';
import { useFadeIn } from '@/hooks/useFadeIn';
import { MapaInterativo } from './MapaInterativo';

interface SobreProjetoProps {
  backgroundColor?: string;
}

export const SobreProjeto = ({ backgroundColor = 'bg-beige-50' }: SobreProjetoProps) => {
  const fadeInRef = useFadeIn(0.3);
  
  return (
    <section id="o-baiano-tem-o-molho" className={`relative py-32 px-6 ${backgroundColor} overflow-hidden`}>
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <LiquifyTitle className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              "O Baiano tem o molho!"
            </LiquifyTitle>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto mb-8" />
        </div>

        <div className="prose prose-lg md:prose-xl mx-auto">
          <div ref={fadeInRef} className="max-w-4xl mx-auto">
            <div className="text-base md:text-lg text-gray-700 leading-relaxed text-left space-y-4">
              <p>
                Tava no buzú outro dia, indo ali pro Comércio, quando um rapaz botou pra tocar alto no fone — <strong className="text-black">"O baiano tem o molho, o baiano tem o molho…"</strong>, do Kannalha. Na hora, a galera deu aquela risadinha cúmplice, começou a balançar o pé, a bater o dedo no banco, a comentar baixinho. Uma senhora do meu lado — daquelas que parecem conhecer toda a cidade só pelo olhar — soltou: <strong className="text-black">"Oxente, esse menino fala é a verdade!"</strong>. E eu só pensei: fala mesmo, minha senhora. Porque, se tem uma coisa que o baiano tem, é o tal do <strong className="text-black">molho</strong> — esse tempero imenso que aparece no jeito de andar, de sorrir, de resolver os problemas e, principalmente, no jeito de falar.
              </p>
              
              <p>
                Outro dia, ouvi de relance um <strong className="text-black">"colé de mermo"</strong> vindo do pai de uma amiga, e fiquei ali, viajando no tempo. <strong className="text-black">"Colé de mermo o quê?"</strong>, pensei. Rapaz, acho que esse daí é das antigas, viu? Tem tempo que não ouço o povo mais novo puxar essa expressão. Mas, ao mesmo tempo, senti um calor no peito — porque é isso que o baiano faz: ele inventa, reinventa, ressignifica e recicla até a própria língua. A gente tem um vocabulário inteiro que parece dançar enquanto sai da boca, uma fala que carrega história, geografia, humor e afeto tudo junto. Cê já parou pra pensar que o jeito que a gente fala diz muito sobre quem a gente é? Pois então. Nosso sotaque é ritmo, é melodia, é memória viva circulando pelas ruas.
              </p>
              
              <p>
                E foi desse encantamento pela fala — desse desejo de entender e valorizar a nossa própria voz — que nasceu o projeto Sotaque em Pauta. Uma celebração da nossa identidade através da palavra, da oralidade, das expressões que só quem vive a Bahia conhece. A ideia é simples e poderosa: mostrar que o sotaque baiano, esse jeito manso, cheio de balanço e malemolência, é muito mais do que uma forma de falar. É cultura. É identidade. É resistência. É pertencimento.
              </p>
              
              <p>
                Porque, <strong className="text-black">"pegue a visão"</strong>: nas novelas e nos filmes, o povo ainda tenta esconder o sotaque, né? Entra no ar querendo falar "neutro", como se isso existisse, como se o nosso jeito fosse "errado". <strong className="text-black">"Que nada!"</strong> Nosso jeito é verdade. É raiz. É o timbre da Bahia no mundo.
              </p>
              
              <p>
                Na música, então, é o contrário: quanto mais sotaque, mais força. É Ivete gritando alegria com aquela voz sorridente. É Luedji Luna poetizando a negritude em cada sílaba. É Caetano e Gil fazendo da fala melodia e manifesto. E agora é Kannalha cantando alto e bom som que o <strong className="text-black">"baiano tem o molho"</strong> — lembrando a todo mundo que a nossa voz não é defeito, é orgulho.
              </p>
              
              <p>
                Na literatura e na poesia, o sotaque também ganha corpo e alma. É Castro Alves declamando liberdade com o coração do Recôncavo; é Mário Prata e James Martins escrevendo com o balanço da fala popular; é Lívia Natália e Jarid Arraes transformando a palavra em abraço e em arma. A escrita baiana tem ritmo, tem gíria, tem cadência, tem riso. É texto que dança, que conversa, que provoca. Que não se dobra à regra quando a verdade é maior que a norma. Nosso português é inventivo, atrevido, cheio de rebolado e realidade.
              </p>
              
              <p>
                E na moda, o sotaque vira estampa, vira bandeira. Cada camisa com <strong className="text-black">"Oxente!", "Lá ele!", "Sua cara nem arde!"</strong> é um grito silencioso de identidade. O povo veste como quem diz: <strong className="text-black">"sou baiano — e me orgulho!"</strong>.
              </p>
              
              <p>
                No jornalismo, o sotaque vira ponte. Um repórter puxa um <strong className="text-black">"meu povo"</strong> no ar e parece que tá conversando na calçada com o público. É proximidade. É afeto. É comunicação que chega sem esforço porque parte de um lugar verdadeiro.
              </p>
              
              <p>
                E na internet, então, a gente reina sem nem pedir licença! É meme, é trend, é vídeo viral cheio de gíria baiana. O povo do Sudeste tenta acompanhar e se enrola bonito — mas tenta, porque o sotaque da Bahia virou estética, virou moda, virou marca registrada no feed.
              </p>
              
              <p>
                Nesta grande reportagem, você vai ver referências do telejornalismo local, da televisão e do cinema, da internet e da moda, partilhando diferentes perspectivas, histórias de vida e trajetórias profissionais que falam sobre sotaque, identidade e resistência baiana. Todos unidos por um elo comum — a baianidade na sua origem, na sua fala, no seu mundo.
              </p>
              
              <p>
                Esse projeto é isso: é ouvir, sentir e celebrar o que a gente tem de mais bonito — a fala, o jeito, o balanço, o molho. É abraçar a própria voz e dizer: <strong className="text-black">"isso aqui é meu, é nosso, é Bahia"</strong>.
              </p>
              
              <p>
                Porque aqui na Bahia, meu irmão, a gente não fala bonito. A gente fala do nosso jeito. E <strong className="text-black">"fala mermo"</strong>. E quer saber? Quem entende, entende — e quem não entende… <strong className="text-black">"chegue mais"</strong> pra aprender!
              </p>
            </div>
          </div>
        </div>

        {/* Mapa Interativo */}
        <div className="mt-16">
          <MapaInterativo />
        </div>
      </div>
    </section>
  );
};
