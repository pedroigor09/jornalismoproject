import { FashionExpert, Brand, FashionReference } from '@/types/fashion';
import { ASSETS } from './constants';

export const fashionExpert: FashionExpert = {
  name: 'Paula Magalhães',
  role: 'Estilosa, Jornalista, Editora e Colunista de Moda',
  quote: 'Vestir baianidade é ser você. Valorizar o que rola sentimento das suas vivências, da sua terra, da maneira que bem entender.',
  image: ASSETS.JORNAL.JORNAL1, // Substituir pela imagem real de Paula
  content: {
    introduction: 'Estilosa, jornalista, editora e colunista de moda, Paula Magalhães, uma das maiores referências fashion da Bahia, atua em Salvador com forte presença nos meios de comunicação e em projetos ligados ao universo fashion. Para ela, a moda é um reflexo do modo de ser do baiano e evidencia, nas tendências atuais, a força e a beleza da baianidade.',
    paragraphs: [
      'A moda reflete nosso jeito de ser. A leveza, a alegria, as cores e estampas traduzem o sentimento baiano — natural, despretensioso e cheio de expressão. Ser baiano não é seguir um padrão, é viver e se expressar com autenticidade. A baianidade aparece no feito à mão, nas cores vibrantes, nas referências ao mar e na criatividade dos nossos criadores.',
      'A Bahia é grande caldeirão cultural e todas essas referências podem inspirar tanto o vestir como as produções de moda de muitas maneiras, desde uma maneira mais óbvia, até uma bem criativa. As referências afro estão em muitos elementos presentes na moda, nas bijuterias maximalistas, nos turbantes, na estamparia, nas miçangas e até mesmo modelagens que valorizam o corpo.',
      'Muita gente vem fazendo um trabalho incrível na moda baiana. Moab traz uma alfaiataria desconstruída e contemporânea; o Ateliê Mão de Mãe une afeto e técnica, reinventando o crochê; Meninos Rei leva a estética afro-baiana para o mundo; Geferson Vila Nova traduz elegância com originalidade; Irá Salles reforça identidade e expressão; e marcas novas, como Areia, transformam o simples em sofisticado com propostas como a moda agênero.',
      'A moda é global. As referências vêm de todos os lugares e cada um expressa a sua maneira. Não existe estilo baiano, mas sim uma valorização das nossas raízes que podem ser traduzidas de muitas maneiras em um look. Meu propósito como jornalista de moda é revelar talentos da terra e fomentar o mercado de segunda mão na Bahia. Está nesse caminho há 18 anos é muito gratificante para mim. Me sinto realizada.',
    ],
  },
};

export const fashionReferences: FashionReference[] = [
  {
    name: 'Moab',
    description: 'Alfaiataria desconstruída e contemporânea',
    image: ASSETS.JORNAL.JORNAL1,
  },
  {
    name: 'Ateliê Mão de Mãe',
    description: 'Une afeto e técnica, reinventando o crochê',
    image: ASSETS.JORNAL.JORNAL2,
  },
  {
    name: 'Meninos Rei',
    description: 'Leva a estética afro-baiana para o mundo',
    image: ASSETS.JORNAL.JORNAL3,
  },
  {
    name: 'Geferson Vila Nova',
    description: 'Traduz elegância com originalidade',
    image: ASSETS.JORNAL.JORNAL1,
  },
  {
    name: 'Irá Salles',
    description: 'Reforça identidade e expressão',
    image: ASSETS.JORNAL.JORNAL2,
  },
  {
    name: 'Areia',
    description: 'Transforma o simples em sofisticado com moda agênero',
    image: ASSETS.JORNAL.JORNAL3,
  },
];

export const tamoJuntoParceiro: Brand = {
  name: 'Tamo Junto Parceiro',
  description: 'Fundada em 2016 por dois jovens empreendedores determinados a inovar, a marca surgiu na Feira da Cidade e, desde então, vem conquistando espaço com criatividade, autenticidade e o inconfundível espírito baiano. Com o propósito de espalhar a baianidade pelo mundo, a Tamo Junto Parceiro traduz em suas peças a força e a alegria da cultura local.',
  videoUrl: 'https://youtu.be/sDhT-3ImNOw',
  images: [
    '/baianonaonasce1.jpeg',
    '/baianonaonasce2.jpeg',
    '/baianonaonasce3.jpeg',
  ],
  quotes: [
    {
      text: 'Engraçado, quando a gente criou a marca, a gente achou que ia vender muito mais para turista do que para os baianos, mas não. A marca é literalmente baiana, feita para os baianos se expressarem.',
      author: 'Tatiane',
    },
    {
      text: 'Os gringos vêm aqui, acham curioso, pedem pra gente explicar o significado, dão risada e acabam levando como lembrança da Bahia. Mas o nosso público principal são, de fato, os baianos.',
      author: 'Tatiane',
    },
    {
      text: 'Não tem como chegar na nossa loja e não se sentir acolhido, não se sentir representado. As paredes são grafadas com nossas expressões, nossas gírias. Às vezes, o baiano chega lá e dá risada: Meu Deus, eu falo isso todo dia!',
      author: 'Tatiane',
    },
    {
      text: 'É comum ouvirmos: Essa camisa é muito minha cara!, ou Essa aqui é a cara da minha mãe, ela fala isso todo dia. Então, as pessoas se sentem vistas, representadas e acolhidas ali dentro.',
      author: 'Tatiane',
    },
    {
      text: 'Esse é o nosso maior sonho: espalhar a nossa baianidade para todo canto, mostrar um pouquinho do que é realmente ser baiano. Temos um lema: de Salvador para o mundo, vestindo baianidade. O que acontece na Bahia, queremos que se espalhe pelo mundo.',
      author: 'Tatiane',
    },
    {
      text: 'É trabalho de formiguinha mesmo. Aos poucos vamos abrindo novas frentes, expandindo, mas sem perder a essência que nos representa.',
      author: 'Tatiane',
    },
  ],
};
