import type { Artist } from '@/types/artist';
import { ASSETS } from './constants';

export const artistsData: Artist[] = [
  {
    name: 'James Martins',
    role: 'Poeta, Jornalista e Comunicador',
    quote: 'O Rio é o Brasil, São Paulo é o mundo e a Bahia é a Bahia',
    image: '/jamesmartins.jpg',
    content: {
      introduction: 'Por entre as ondas de sons, palavras e silêncios, o poeta, jornalista e comunicador James Martins faz da Bahia não apenas um tema, mas um modo de expressão.',
      paragraphs: [
        'Seja no rádio, na poesia ou nas conversas do cotidiano, o sotaque e o jeito baiano de falar atravessam sua criação com naturalidade e força, compondo uma identidade poética singular — feita de ritmo, crítica e encantamento.',
        'Para ele, a presença da Bahia em sua escrita é inevitável, mas nunca superficial. "Eu me esforço muito para que essa baianidade não apareça de maneira folclórica ou estereotipada", explica.',
        'Sua obra busca equilibrar o encanto e a crítica, mostrando que representar a Bahia também é "colocar o dedo nas feridas", revelando as contradições e precariedades que fazem parte de sua história e de sua gente.',
        'A musicalidade é outro traço marcante. James escreve com ouvido atento — o ritmo das palavras pulsa como quem compõe versos que poderiam virar canções. E às vezes viram mesmo.',
        'Não à toa, seus poemas já foram musicados por artistas como Saulo Fernandes, com quem criou a famosa canção inspirada em sua frase "O Rio é o Brasil, São Paulo é o mundo e a Bahia é a Bahia".',
        'A frase ganhou vida própria, virou música e símbolo, ecoando nos carnavais e nas ruas como uma celebração da identidade baiana contemporânea.',
        'Entre a palavra falada e a palavra escrita, James Martins constrói uma ponte viva entre tradição e contemporaneidade.',
        'E é exatamente assim, com sotaque, ritmo e verdade, que sua voz — falada ou escrita — segue ecoando, reafirmando que a Bahia não é apenas um lugar: é uma forma de dizer o mundo.',
      ],
    },
  },
  {
    name: 'Márcia Short',
    role: 'Cantora',
    quote: 'O sotaque e as expressões são a alma da Bahia',
    image: '/marciashort.jpg',
    polaroids: ['/marcia1.jpg', '/marcia2.avif', '/marcia3.jpg', '/marcia4.jpeg', '/marcia5.jpg'],
    content: {
      introduction: 'Conversar com Márcia Short é mergulhar na essência da cultura baiana. Cantora consagrada e uma das vozes mais marcantes do axé e da música afro-baiana, Márcia fala sobre arte, linguagem e identidade com a mesma força e naturalidade com que pisa no palco. Para ela, cada palavra, gíria ou expressão carrega o peso simbólico da história e do afeto do povo da Bahia.',
      paragraphs: [
        'Segundo a artista, a linguagem vai muito além de um aspecto comunicativo — é um espelho da identidade e da alegria do povo baiano.',
        'Márcia relembra que essa forma de expressão nasceu da vivência cotidiana, das ruas, dos blocos afros e dos ensaios populares.',
        'A artista destaca ainda que o público se conecta imediatamente quando reconhece uma expressão típica nas canções.',
        'A musicalidade da fala baiana vai muito além das palavras — ela atravessa também o jeito de fazer arte.',
        'Com a experiência de quem viveu diversas fases da música baiana, Márcia observa uma valorização crescente das expressões regionais.',
        'No entanto, ela defende que preservar essas formas de expressão é também um ato político.',
        'Entre reflexões e risadas, Márcia Short deixa claro que o que move sua arte é o mesmo que move o povo baiano: a verdade na expressão.',
      ],
      audioClips: [
        JSON.stringify({
          src: '/audiomarcia3.ogg',
          transcript: 'As gírias, as expressões, o sotaque, o jeito de falar e até o jeito de dançar… tudo faz parte da cultura do povo desse lugar.',
          speaker: 'Márcia Short',
          afterIntroduction: true
        }),
        JSON.stringify({
          src: '/audiomarcia2.ogg',
          transcript: 'As pessoas se identificam na hora. É um sentimento de pertencimento. É como se dissesse: "a gente tá falando a mesma língua". Isso cria uma comunicação verdadeira, de igual pra igual.',
          speaker: 'Márcia Short',
          afterParagraph: 2
        })
      ],
    },
  },
  {
    name: 'Aldri Anunciação',
    role: 'Comunicador, Dramaturgo e Escritor',
    quote: 'A oralidade vem como verniz, mas o que dá vida à narrativa são as ações culturais',
    image: '/aldrianunciacao.jpg',
    polaroids: ['/aldri1.jpg', '/aldri2.jpg', '/aldri3.jpg', '/aldri4.jpg', '/aldri5.jpg'],
    content: {
      introduction: 'O comunicador, dramaturgo e escritor Aldri Anunciação, autor de obras como Namíbia, Não! e Pretamorfose, explica como o dialeto aparece em sua literatura contemporânea.',
      paragraphs: [
        'Segundo ele, embora presente, o sotaque surge de forma sutil, integrando-se à narrativa e contribuindo para a construção estética das histórias.',
        'Na literatura, ele observa que muitos autores concentram-se mais em elementos culturais, visuais e comportamentais, e menos na prosódia do falar baiano.',
        'A experiência de Aldri na televisão, porém, revela outro desafio. Ao participar da novela Porto dos Milagres, ele precisou adaptar seu sotaque.',
        'Para ele, literatura e televisão lidam com a linguagem de maneiras diferentes: enquanto a literatura permite sutilezas, a televisão opta por simplificações.',
        'Além disso, Aldri compartilha sua abordagem ao atuar: começa pelo componente de classe, gênero e pelo conflito interno da personagem.',
        'Ele ressalta que o cinema e o teatro têm avançado nesse sentido, oferecendo espaços mais respeitosos e detalhados para a oralidade.',
        'Um ponto central na criação de Aldri é que, em suas obras, o sotaque nunca é a ferramenta principal.',
        'Assim, a oralidade baiana permanece viva e essencial em todas as formas de expressão artística.',
      ],
    },
  },
];
