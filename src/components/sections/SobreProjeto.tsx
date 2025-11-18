'use client';

import { LiquifyTitle } from '@/components/ui/LiquifyTitle';
import { useFadeIn } from '@/hooks/useFadeIn';

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
                Tava no buzú outro dia, indo ali pro Comércio, quando um rapaz botou pra tocar alto no fone — <strong className="text-black">"O baiano tem o molho, o baiano tem o molho…"</strong>, do Kannalha. Na hora, a galera deu aquela risadinha cúmplice, começou a balançar o pé, a bater o dedo no banco, a comentar baixinho. Uma senhora do meu lado — daquelas que parecem conhecer toda a cidade só pelo olhar — soltou: <strong className="text-black">"Oxente, esse menino fala é a verdade!"</strong>. E eu só pensei: fala mesmo, minha senhora. Porque, se tem uma coisa que o baiano tem, é o tal do <strong className="text-black">molho</strong> — esse tempero imenso que aparece no jeito de andar, de sorrir, de resolver os problemas e, principalmente, <strong className="text-black">no jeito de falar</strong>.
              </p>
              
              <p>
                Outro dia, ouvi de relance um <strong className="text-black">"colé de mermo"</strong> vindo do pai de uma amiga, e fiquei ali, viajando no tempo. "Colé de mermo o quê?", pensei. Rapaz, acho que esse daí é das antigas, viu? Tem tempo que não ouço o povo mais novo puxar essa expressão. Mas, ao mesmo tempo, senti um calor no peito — porque é isso que o baiano faz: <strong className="text-black">ele inventa, reinventa, ressignifica e recicla até a própria língua</strong>. A gente tem um vocabulário inteiro que parece dançar enquanto sai da boca, uma fala que carrega história, geografia, humor e afeto tudo junto. Cê já parou pra pensar que <strong className="text-black">o jeito que a gente fala diz muito sobre quem a gente é?</strong> Pois então. Nosso sotaque é ritmo, é melodia, é memória viva circulando pelas ruas.
              </p>
              
              <p>
                E foi desse encantamento pela fala — desse desejo de entender e valorizar a nossa própria voz — que nasceu o projeto <strong className="text-black">Sotaque em Pauta</strong>. Uma celebração da nossa identidade através da palavra, da oralidade, das expressões que só quem vive a Bahia conhece. A ideia é simples e poderosa: mostrar que o sotaque baiano, esse jeito manso, cheio de balanço e malemolência, é muito mais do que uma forma de falar. <strong className="text-black">É cultura. É identidade. É resistência. É pertencimento.</strong>
              </p>
              
              <p>
                Porque, pegue a visão: nas novelas e nos filmes, o povo ainda tenta esconder o sotaque, né? Entra no ar querendo falar <strong className="text-black">"neutro"</strong>, como se isso existisse, como se o nosso jeito fosse "errado". <strong className="text-black">Que nada!</strong> Nosso jeito é verdade. É raiz. É o timbre da Bahia no mundo.
              </p>
              
              <p>
                Na música, então, é o contrário: <strong className="text-black">quanto mais sotaque, mais força</strong>. É <strong className="text-black">Ivete</strong> gritando alegria com aquela voz sorridente. É <strong className="text-black">Luedji Luna</strong> poetizando a negritude em cada sílaba. É <strong className="text-black">Caetano e Gil</strong> fazendo da fala melodia e manifesto. E agora é <strong className="text-black">Kannalha</strong> cantando alto e bom som que o <strong className="text-black">"baiano tem o molho"</strong> — lembrando a todo mundo que a nossa voz não é defeito, é orgulho.
              </p>
              
              <p>
                Na literatura e na poesia, o sotaque também ganha corpo e alma. É <strong className="text-black">Castro Alves</strong> declamando liberdade com o coração do Recôncavo; é <strong className="text-black">Mário Prata</strong> e <strong className="text-black">James Martins</strong> escrevendo com o balanço da fala popular; é <strong className="text-black">Lívia Natália</strong> e <strong className="text-black">Jarid Arraes</strong> transformando a palavra em abraço e em arma. A escrita baiana tem ritmo, tem gíria, tem cadência, tem riso. <strong className="text-black">É texto que dança, que conversa, que provoca.</strong> Que não se dobra à regra quando a verdade é maior que a norma. Nosso português é inventivo, atrevido, cheio de rebolado e realidade.
              </p>
              
              <p>
                E na moda, o sotaque vira estampa, vira bandeira. Cada camisa com <strong className="text-black">"Oxente!", "Lá ele!", "Sua cara nem arde!"</strong> é um grito silencioso de identidade. O povo veste como quem diz: <strong className="text-black">"sou baiano — e me orgulho!"</strong>.
              </p>
              
              <p>
                No jornalismo, o sotaque vira ponte. Um repórter puxa um <strong className="text-black">"meu povo"</strong> no ar e parece que tá conversando na calçada com o público. É proximidade. É afeto. <strong className="text-black">É comunicação que chega sem esforço porque parte de um lugar verdadeiro.</strong>
              </p>
              
              <p>
                E na internet, então, a gente reina sem nem pedir licença! É meme, é trend, é vídeo viral cheio de gíria baiana. O povo do Sudeste tenta acompanhar e se enrola bonito — mas tenta, porque <strong className="text-black">o sotaque da Bahia virou estética, virou moda, virou marca registrada no feed</strong>.
              </p>
              
              <p>
                Nesta grande reportagem, você vai ver referências do <strong className="text-black">telejornalismo local, da televisão e do cinema, da internet e da moda</strong>, partilhando diferentes perspectivas, histórias de vida e trajetórias profissionais que falam sobre sotaque, identidade e resistência baiana. Todos unidos por um elo comum — <strong className="text-black">a baianidade na sua origem, na sua fala, no seu mundo</strong>.
              </p>
              
              <p>
                Esse projeto é isso: é ouvir, sentir e celebrar o que a gente tem de mais bonito — <strong className="text-black">a fala, o jeito, o balanço, o molho</strong>. É abraçar a própria voz e dizer: <strong className="text-black">"isso aqui é meu, é nosso, é Bahia"</strong>.
              </p>
              
              <p className="text-center">
                <strong className="text-black text-xl">Porque aqui na Bahia, meu irmão, a gente não fala bonito. A gente fala do nosso jeito. E fala mermo. E quer saber? Quem entende, entende — e quem não entende… chegue mais pra aprender!</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
