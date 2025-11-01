import { MediaProfessional, MediaIntroduction } from '@/types/media';
import { ASSETS } from './constants';

export const mediaIntroduction: MediaIntroduction[] = [
  {
    text: 'As palavras também revelam muito sobre quem somos e de onde viemos. Como explica a professora Jacyra Mota, o Atlas Linguístico do Brasil mostra que expressões como "neblina" e "orvalho", embora diferentes, podem significar a mesma coisa em certas regiões. Cada variação de vocabulário, cada termo usado de um jeito ou de outro, ajuda a desenhar o mapa vivo da fala brasileira — um retrato da diversidade que também se reflete dentro da própria Bahia.',
  },
  {
    text: 'Essas diferenças vão além da linguística: elas traduzem modos de ver e viver o mundo. No jeito de falar, nas gírias, no ritmo das palavras, o sotaque baiano não é apenas marca de identidade — é também uma ponte entre quem fala e quem escuta. No telejornalismo da Bahia, esse modo de falar funciona como uma ferramenta poderosa de aproximação.',
  },
];

export const journalists: MediaProfessional[] = [
  {
    name: 'Emerson Nunes',
    role: 'Editor-chefe do Jornal da Manhã - TV Bahia',
    quote: 'A linha editorial de um telejornal é muito guiada pelo cuidado com a língua',
    image: ASSETS.JORNAL.JORNAL1,
    content: {
      introduction: 'A linguagem é o elemento central do jornalismo, e ninguém melhor para refletir sobre isso do que Emerson Nunes, editor-chefe do Jornal da Manhã, da TV Bahia. Com quase duas décadas de experiência na imprensa, Nunes destaca o papel da palavra no telejornalismo e a importância de equilibrar correção gramatical com proximidade junto ao público.',
      paragraphs: [
        'A linha editorial de um telejornal é muito guiada pelo cuidado com a língua. O português deve estar correto, mas, ao mesmo tempo, ser claro e acessível. O desafio consiste em traduzir informações complexas para o cotidiano das pessoas, evitando jargões técnicos ou termos excessivamente formais que possam dificultar a compreensão.',
        'O uso de gírias e expressões regionais é outro aspecto abordado por Nunes. Embora a intenção seja evitar exageros, ele reconhece que, de forma natural, algumas expressões escapam durante a transmissão, contribuindo para aproximar o jornal do telespectador.',
        'O telejornalismo local está em um momento de aproximação real com o público. O uso de expressões populares, quando feito com cuidado, humaniza e cria vínculo. Em datas como carnaval e São João, é comum incluirmos referências ao jeito baiano de falar, seja nas falas, seja nas tarjas de apoio.',
        'A Bahia tem uma identidade própria. Expressões e formas de comunicação locais carregam cultura e história, e o desafio é equilibrá-las com a norma padrão. O informal e o coloquial são bem-vindos, desde que haja limite. O segredo é sempre o equilíbrio.',
      ],
    },
  },
  {
    name: 'Silvana Freire',
    role: 'Jornalista e Comunicadora',
    quote: 'Ser baiana é falar do nosso jeito, é resistir, é ter coragem de ocupar o espaço sem deixar o axé da gente pra trás',
    image: ASSETS.JORNAL.JORNAL2,
    bio: 'Jornalista e comunicadora baiana com mais de 20 anos de trajetória na imprensa. Passou por veículos importantes como a TV Bahia, onde apresentou telejornais como o Bahia Meio Dia e o Jornal da Manhã. Atuou como repórter na CNN Brasil, em São Paulo, e retornou à Bahia, onde comanda programas de rádio e projetos próprios de comunicação.',
    content: {
      introduction: 'A conversa com Silvana foi daquelas que fazem a gente sair admirando ainda mais o que é ser baiano. Jornalista com mais de duas décadas de carreira, ela é daquelas mulheres retadas que falam com o coração e deixam claro que o sotaque da Bahia não é detalhe: é identidade.',
      paragraphs: [
        'Silvana reconhece que o peso de ser mulher sempre esteve presente nas entrelinhas da profissão, mas foi o regionalismo — esse jeito baiano de falar e ser — que ganhou força quando ela trabalhou na CNN, em São Paulo. Sempre faziam festa quando eu entrava no ar. O pessoal dizia: A Bahia chegou!',
        'Sobre o sotaque, Silvana contou histórias divertidas. Disse que o seu "viu" — tão típico da Bahia — confundia os colegas paulistas, que achavam que ela estava vendo algo errado no ar. Eu só queria dizer beleza, tá certo. Viu é nosso, né, véi?',
        'Ela acredita que hoje o jornalismo valoriza mais o jeito natural de falar. Acabou aquela coisa da voz impostada. O povo quer ver a gente sendo a gente. Com orgulho, Silvana recorda o período na CNN, onde foi videorrepórter e fazia tudo sozinha: filmava, entrevistava e carregava equipamento.',
        'Ao fim da conversa, deixou um conselho que resume sua essência: Num deixem de ser quem vocês são. O espaço que pede pra você se diminuir não é seu, viu? Para ela, o jornalismo é paixão e escolha diária.',
      ],
    },
  },
  {
    name: 'Vanderson Nascimento',
    role: 'Apresentador do Bahia Meio Dia e Resenha das 7',
    quote: 'Deus me livre não ser baiano!',
    image: ASSETS.JORNAL.JORNAL3,
    bio: 'Figura carismática e um dos nomes mais queridos do jornalismo baiano contemporâneo. Nascido e criado em Cajazeiras — ou, como ele mesmo costuma dizer, Cajacity —, conquistou o público com seu jeito espontâneo. Mestre em Comunicação e Jornalismo, acumula mais de 20 anos de experiência na televisão.',
    videoUrl: 'lgvZ2aNf9zk',
    content: {
      introduction: 'Conhecido por bordões marcantes como "Deus me livre não ser baiano", "11:45" e "12x8", ele se tornou um símbolo da baianidade no telejornalismo, levando para as telas o sotaque, o humor e o calor humano típicos da Bahia.',
      paragraphs: [
        'Vanderson destacou que o sotaque baiano é, por si só, um patrimônio cultural do estado — algo que está presente no sangue, no jeito e na alma do povo. Cada expressão carrega um tempero próprio, marcado por história, alegria e leveza. O baiano não fala, o baiano se expressa.',
        'Segundo ele, neutralizar o sotaque pode facilitar a compreensão do público, mas também compromete a identidade do comunicador e reforça preconceitos ligados às diferentes formas de falar.',
        'O jornalismo baiano, especialmente na TV Bahia, tem rompido gradualmente com a formalidade tradicional dos telejornais, aproximando-se cada vez mais do modo de falar do povo. O sotaque e as expressões regionais não apenas ganharam espaço, mas se tornaram ferramentas estratégicas para tornar as notícias mais leves, acessíveis e com a identidade da Bahia.',
      ],
    },
  },
  {
    name: 'Luana Souza',
    role: 'Jornalista e Apresentadora',
    quote: 'O sotaque é a nossa marca de autenticidade',
    image: ASSETS.JORNAL.JORNAL1,
    bio: 'Natural de Cachoeira, no Recôncavo Baiano. Formada em Jornalismo pela UFRB, mestre em Cultura e Sociedade pela UFBA. Atua na Rede Bahia, onde já apresentou programas como Mosaico Baiano e Conversa Preta. Defensora da valorização das vozes negras e da linguagem regional.',
    content: {
      introduction: 'Com um timbre doce e firme, Luana Souza tem se destacado no cenário baiano por unir credibilidade e identidade em sua forma de comunicar. Para ela, o sotaque baiano é mais do que uma característica vocal — é uma expressão de pertencimento e afeto.',
      paragraphs: [
        'O nosso sotaque tem uma musicalidade que transmite acolhimento e proximidade. Ele carrega um jeito afetuoso de se comunicar, sem deixar de ser firme quando é necessário. Há um senso de verdade e de identidade muito forte.',
        'O jornalismo exige precisão, mas isso não significa apagar a identidade de quem comunica. Eu mantenho a estrutura formal da linguagem jornalística, mas sem forçar um padrão artificial de fala. É possível ter sotaque e credibilidade ao mesmo tempo.',
        'Apesar dos avanços, ainda existe um padrão hegemônico associado ao Sudeste, visto como neutro e correto. Isso é um resquício histórico da centralização cultural. Muitos profissionais do Nordeste ainda sentem a necessidade de suavizar ou esconder o sotaque para serem aceitos.',
        'O futuro do jornalismo baiano é de fortalecimento. A presença de profissionais nordestinos em redes nacionais tem crescido, e isso inspira quem está começando. Só falando a língua e o sotaque do povo é que a gente vai conseguir alcançar quem ainda está às margens.',
      ],
    },
  },
  {
    name: 'Mateus Borges',
    role: 'Jornalista e Repórter da Record TV Itapoan',
    quote: 'Quando a gente é verdadeiro, a mensagem chega',
    image: ASSETS.JORNAL.JORNAL2,
    content: {
      introduction: 'Natural da Bahia, construiu sua trajetória com base na autenticidade e no compromisso de representar sua cultura por meio da linguagem. Com passagens marcantes pelo jornalismo popular, Mateus se tornou uma das vozes mais reconhecidas do telejornalismo baiano atual.',
      paragraphs: [
        'Na Record, o público é mais popular, mais próximo, e espera uma linguagem leve, tranquila. Se a gente fala de um jeito muito formal ou rebuscado, perde o sentido da comunicação. O segredo está em falar como se fala na rua, sem precisar encenar um personagem.',
        'O mais importante é se fazer entender. É uma linha muito tênue, porque se você força demais pra parecer baiano, vira caricatura. Então prefiro ser natural. Falo como falo com meus amigos, com a minha família.',
        'Nunca recebi hate, nem comentários negativos. Às vezes, o pessoal pergunta o que é baba ou outras palavras daqui, mas é sempre com curiosidade, nunca com preconceito. As pessoas têm recebido a gente com muito carinho.',
        'A forma como a gente fala é parte da nossa memória. É cultura, é identidade. O objetivo da comunicação é ser entendido. Na maioria das vezes, é melhor falar como o povo fala, do jeito simples e direto.',
      ],
    },
  },
];

export const actors: MediaProfessional[] = [
  {
    name: 'Evaldo Macarrão',
    role: 'Ator',
    quote: 'Quando a gente não sabe para onde vai, é só olhar para trás e ver de onde a gente veio',
    image: ASSETS.JORNAL.JORNAL3,
    bio: 'Natural de Salvador, nasceu no bairro de Cosme de Farias. Formado em Pedagogia pela UCSal, construiu uma carreira marcada pela consciência social e pelo compromisso com a valorização da cultura baiana. Em 2024, ganhou destaque nacional ao interpretar Jupará na novela Renascer.',
    content: {
      introduction: 'Evaldo Maurício Silva — conhecido como Evaldo Macarrão — encontrou na arte uma forma de expressão e resistência. Foi no Centro de Referência Integral de Adolescentes (CRIA), no Pelourinho, que ele iniciou sua trajetória artística e política.',
      paragraphs: [
        'A importância é a constatação do que é, né? A gente conta nossa história na Bahia, em Salvador, a partir das revoltas, da independência, mas a gente também conta outras histórias em outros lugares. A gente chega em outros estados e vê corpos baianos trabalhando, reconstruindo esse lugar.',
        'Eu nunca tive pressão para mudar meu sotaque. Muito pelo contrário — às vezes pedem até que eu faça o sotaque baiano de Salvador. Às vezes eu até resisto um pouco, porque quero brincar com outros sotaques da Bahia, que é tão grande e diversa.',
        'Eu quero representar, mas também conectar e convocar. Quero me conectar com o público que ainda está à margem. Que essa novela possa entrar na casa dessas pessoas pedindo licença e convocando a sonharem.',
        'Eu tô aqui no Rio, mas tô sempre retornando pra minha casa, porque preciso me fortalecer, olhar pros meus e encontrar base. A Bahia é o mundo, e o mundo precisa ouvir a nossa voz.',
      ],
    },
  },
  {
    name: 'Jéssica Marques',
    role: 'Atriz',
    quote: 'Quando falamos na nossa língua materna, as intenções ganham mais vida',
    image: ASSETS.JORNAL.JORNAL1,
    bio: 'Conhecida por seu trabalho em novelas como Vale Tudo e séries como Justiça 2. Para ela, lidar com a linguagem é parte central do seu processo de interpretação — e o sotaque baiano, mesmo quando neutralizado, segue presente na essência de sua atuação.',
    content: {
      introduction: 'No universo do audiovisual brasileiro, o sotaque e as expressões regionais são muito mais do que simples detalhes de fala: são elementos que carregam identidade, história e autenticidade cultural.',
      paragraphs: [
        'Em todos os trabalhos que realizei no audiovisual, as histórias se passavam em cidades diferentes da minha, e por isso sempre busquei adaptar o sotaque o mais próximo possível da região retratada. Essa adaptação é um exercício de construção de personagem.',
        'Jéssica relembra de um episódio marcante: a palavra "presente", dita por baianos como "prÉsente", precisou ser repetida várias vezes até soar "neutra" o suficiente para o padrão do roteiro. Esse pequeno detalhe revela um fenômeno muito mais profundo: a tentativa de enquadrar o modo de falar baiano dentro de uma norma linguística que não o representa.',
        'Nossas expressões refletem quem somos, o lugar de onde viemos e tudo o que aprendemos com os nossos mais velhos. Quando o audiovisual dá espaço para isso, ele se torna mais verdadeiro e próximo do público.',
        'É bonito e enriquecedor ver personagens que realmente soam como pessoas reais, com suas expressões regionais e formas próprias de se comunicar. Ainda há caminho a percorrer, mas já é visível a valorização da autenticidade.',
      ],
    },
  },
  {
    name: 'Ciro Sales',
    role: 'Ator e Gestor Cultural',
    quote: 'A Bahia me ensina a ter ginga, a ter jogo de cintura, a ser adaptável',
    image: ASSETS.JORNAL.JORNAL2,
    bio: 'Natural de Salvador, com formação em teatro na Faculdade Social da Bahia e carreira consolidada no Rio de Janeiro. Conhecido por atuações em novelas como Segundo Sol (TV Globo) e por apresentar o Catfish Brasil (MTV).',
    content: {
      introduction: 'Ciro Sales oferece uma perspectiva rica e multifacetada sobre representação do sotaque e da identidade regional na televisão nacional.',
      paragraphs: [
        'O sotaque é um elemento de identidade dos mais importantes, dos mais facilmente reconhecíveis. A gente viveu um momento onde todo ator nordestino imaginava que precisava neutralizar seu sotaque. Graças a Deus, superamos essa fase.',
        'Eu nunca tive um sotaque muito marcado... Às vezes as pessoas falam: Nossa, o Ciro tem um sotaque meio neutro, né?, o que eu odeio... Por outro lado, eu já recebi o preconceito contrário: Nossa, você nem parece baiano, e isso é muito irritante, porque eu sou muito baiano.',
        'Em Segundo Sol, eu fui atrás de ouvir mais os meus amigos falando, de abrir um pouco mais a minha forma de falar e fazer o Du Love ter mais sotaque do que o Ciro. Foi um desafio construir o personagem sem cair em estereótipos.',
        'Ser baiano é grande parte da minha identidade. Eu sou um ator baiano. A Bahia me ensina a ter ginga, a ter jogo de cintura, a ser adaptável, a fazer as coisas em coletivo.',
      ],
    },
  },
  {
    name: 'Raissa Xavier',
    role: 'Atriz, Roteirista e Produtora Cultural',
    quote: 'Sotaque não se neutraliza. Ele se afirma',
    image: ASSETS.JORNAL.JORNAL3,
    bio: 'Natural de Salvador. Formada em Artes Cênicas pela UFBA. Ganhou destaque nacional ao fazer parte do elenco da novela Segundo Sol. Sua atuação chamou atenção pela naturalidade e pela presença marcante — uma artista que não apenas interpreta, mas representa o lugar de onde veio.',
    content: {
      introduction: 'Foi ao se mudar da Bahia para o Rio de Janeiro que Raissa passou a refletir ainda mais sobre o papel do sotaque na construção da identidade e sobre as barreiras enfrentadas por artistas nordestinos no eixo audiovisual.',
      paragraphs: [
        'Eu tive muito mais consciência quando me desloco de Salvador e vou para o Rio de Janeiro, e me deparo com a xenofobia. Quando eu estava falando com pessoas do Sudeste, principalmente quem tinha autoridade, eu neutralizava o meu sotaque. Fazia isso de forma inconsciente.',
        'Hoje eu sou 100% eu. E passei isso pra internet, com muito medo no início. Eu pincelei o meu sotaque, fiz mais ainda questão dele. Porque percebi que isso é muito importante pra mim. Esse orgulho da nossa cultura e do nosso jeito de falar é o que me mantém de pé.',
        'O protagonismo ainda estava nas mãos de pessoas do Sudeste fazendo personagens baianos. E o que mais escutei na minha vida é: Você é muito boa, mas não tem nome pra fazer personagem grande. Mas como eu vou ter nome se nunca me dão a oportunidade de começar?',
        'Não tem como eu não trazer o meu sotaque, a minha baianidade de algum jeito, mesmo quando é imposto pra mim a neutralização. A gente tá em todo lugar. O Brasil é isso: múltiplo, diverso e cheio de vozes que precisam ser ouvidas.',
      ],
    },
  },
];

export const influencers: MediaProfessional[] = [
  {
    name: 'Ivan Mesquita',
    role: 'Humorista, Ator e Criador de Conteúdo Digital',
    quote: 'O nosso sotaque também é Brasil, tá ligado?!',
    image: ASSETS.JORNAL.JORNAL1,
    bio: 'Mais conhecido como "Cêro" — gíria baiana que significa "parceiro". Natural de Itabuna, no sul da Bahia, começou sua trajetória produzindo vídeos sobre culinária e história, sempre com uma boa dose de humor. Durante a pandemia, decidiu investir de vez na criação de conteúdo.',
    content: {
      introduction: 'Ivan Mesquita é humorista, ator e criador de conteúdo digital. Seu trabalho ganhou força nas redes sociais por valorizar o sotaque, as expressões populares e o jeito baiano de se comunicar, elementos que se tornaram marcas registradas de sua identidade artística.',
      paragraphs: [
        'Durante a pandemia, Ivan decidiu investir de vez na criação de conteúdo, inspirando-se no modo de falar dos amigos e percebendo a oportunidade de unir entretenimento, informação e representatividade em suas produções.',
        'Ivan comentou sobre como enfrenta o preconceito linguístico em relação ao seu conteúdo e ressaltou que o humor se torna uma ferramenta poderosa de resistência e combate à discriminação.',
        'O criador encerrou a conversa em tom leve e divertido, revelando sua gíria baiana preferida e arrancando boas risadas. O momento resume bem o espírito irreverente, criativo e afetivo do artista.',
      ],
    },
  },
  {
    name: 'Lucas Pizane',
    role: 'Cantor, Compositor e Produtor Cultural',
    quote: 'O nosso sotaque também é Brasil, tá ligado?!',
    image: ASSETS.JORNAL.JORNAL2,
    bio: 'Natural da Ilha de Itaparica (BA). Integrou bandas locais como Os Ninfetos e cursou Produção Cultural. Em 2024, ganhou projeção nacional ao participar do Big Brother Brasil 24. Após o reality, passou a investir na carreira solo, consolidando-se como uma das novas vozes da música baiana contemporânea.',
    videoUrl: 'nTQ6nNxTs_U',
    content: {
      introduction: 'Conversar com Lucas Pizane é mergulhar em uma reflexão sobre linguagem, identidade e pertencimento. Para ele, o sotaque baiano é mais que uma característica vocal — é uma forma de expressar autenticidade.',
      paragraphs: [
        'A linguagem é comunicação. Através do sotaque você gera identificação, gera verdade. Basta eu pisar na Ilha por trinta minutos que minha língua nativa volta instantaneamente.',
        'Na rede social, é o meu mundo. Falo como se estivesse em uma chamada de vídeo com um amigo. É ali que posso ser 100% eu. As plataformas digitais têm papel fundamental na valorização do modo de falar do povo baiano.',
        'Foi uma edição muito marcada pelo regionalismo. Cada participante levava um pedaço do seu lugar. O sotaque despertava curiosidade, mas também admiração. Na música, tudo que eu crio tem um pouco da minha terra.',
        'O jeito que você fala faz parte de quem você é. Se adequar a algo que anula sua essência nunca é o melhor caminho. Ser autêntico é o que te diferencia e te leva a lugares verdadeiros.',
      ],
    },
  },
];
