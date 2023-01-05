const questions = [
    {
        id: 1,
        title: 'O que é DOM?',
        answer: '<h1><span style="font-size: 30px; color: rgb(67, 67, 67);">O que é DOM?</span></h1><p><span style="font-size: 18px;"><br></span></p><p><span style="font-size: 18px; color: rgb(102, 102, 102);">Dom significa Document Object Model. Ela se refere a interface de programação que os navegadores utilizam para representar uma página Web.</span></p><p><span style="font-size: 18px; color: rgb(102, 102, 102);"><br></span></p><p><span style="font-size: 18px; color: rgb(102, 102, 102);">Ele oferece um modelo de representação e interação no HTML&nbsp;ou XML. Esse modelo se estrutura em formato de árvore, com vários galhos que indicam diferentes elementos da página. Quando esse modelo é alterado através da linguagem de script, se altera a página da web — seja sua estrutura, estilo ou elementos.</span></p><p><span style="font-size: 18px; color: rgb(102, 102, 102);"><br></span></p><p><span style="font-size: 18px; color: rgb(102, 102, 102);">Desse modo, o DOM possibilita a manipulação e modificação de elementos de um documento web ao conectar as linguagens de programação à página. No caso ele não se limita a uma linguagem de programação, porém, a mais utilizada é o JavaScript.</span></p><p><span style="font-size: 18px; color: rgb(102, 102, 102);"><br></span></p><p><span style="font-size: 18px; color: rgb(102, 102, 102);">Como toda página na web é um documento, os navegadores precisam fazer a leitura e a interpretação desses documentos para refletir seus conteúdos na tela do seu dispositivo em um formato padrão. O DOM é a interface que representa a forma ou estrutura com que o documento será lido e exibido por todos os navegadores das redes.</span></p><p><span style="font-size: 18px; color: rgb(102, 102, 102);"><br></span></p><p><span style="font-size: 18px; color: rgb(102, 102, 102);">É assim que o DOM define um padrão na internet. Essa interface permite que programas e scripts de sites sejam acessados de forma dinâmica para fazer adições, remoções ou atualizações do conteúdo, estrutura e estilo de um documento.</span></p><p><span style="font-size: 18px; color: rgb(102, 102, 102);"><br></span></p><p><span style="font-size: 18px; color: rgb(102, 102, 102);">O DOM define a estrutura lógica dos documentos em forma de árvore, a qual guia o navegador na representação e manipulação dos componentes da página. Assim sendo, abaixo indicamos como a “árvore DOM” é normalmente estruturada:</span></p><p><img src="https://lh5.googleusercontent.com/SQ3qz32VvBhTPFTeGtWOzPVhcv-mfB7C8mj6k4C1IVOttNGWf71T9s8Pq9QY4F_AlMbEKMwgnMGh5XEQf2v8-UU-G6xZc984pnSwfJvKF-CxSEOsBafgKCkkg6tCWgH6Ni9bb_N8" alt="Tree Dom"></p><p><span style="font-size: 18px;"><br></span></p><h1><span style="font-size: 30px; color: rgb(67, 67, 67);">Qual a Relação Entre DOM e JavaScript?</span></h1><p><span style="font-size: 18px;"><br></span></p><p><span style="font-size: 18px; color: rgb(102, 102, 102);">Vale começar pelo fato de que o JavaScript é uma linguagem de programação, ou seja, ela é utilizada para criar o script do site. Já o DOM, como vimos, é um modelo de representação por objetos. Isto é, ele define a estrutura em que o documento construído através do JavaScript será lido pelo navegador.&nbsp; </span></p><p><span style="font-size: 18px; color: rgb(102, 102, 102);"><br></span></p><p><span style="font-size: 18px; color: rgb(102, 102, 102);">Sem o DOM, a linguagem de programação — que vale lembrar, pode ser qualquer uma, não apenas JavaScript — não teria um modelo para representar seus objetos. Afinal, ela não teria uma noção da página web e de seus componentes. Assim, enquanto o DOM representa e estrutura e os componentes da página, o JavaScript acessa e manipula esses conteúdos.</span></p><p><span style="color: rgb(67, 67, 67); font-size: 18px;"><br></span></p><h1><span style="color: rgb(67, 67, 67); font-size: 30px;">Quais os Usos e Vantagens do DOM</span></h1><p><span style="font-size: 18px; color: rgb(102, 102, 102);"><br></span></p><p><span style="font-size: 18px; color: rgb(102, 102, 102);">Uma das principais vantagens do DOM é possibilitar a criação de aplicações que alteram os dados de um site sem que seja necessário fazer uma atualização desta página.</span></p><p><span style="font-size: 18px; color: rgb(102, 102, 102);"><br></span></p><p><span style="font-size: 18px; color: rgb(102, 102, 102);">Ainda é utilizado para criação de interfaces de usuário avançadas. Assim, o DOM também permite a construção de páginas que podem ser customizadas pelo próprio usuário.&nbsp; </span></p><p><span style="font-size: 18px; color: rgb(102, 102, 102);"><br></span></p><p><span style="font-size: 18px; color: rgb(102, 102, 102);">Com o modelo de documento por objeto, é possível modificar conteúdos e elementos de páginas, além de navegar por sua estrutura. Desse modo, qualquer componente de um documento HTML ou XML pode ser acessado e modificado através do DOM. </span></p><p><span style="font-size: 18px; color: rgb(102, 102, 102);"><br></span></p><p><span style="font-size: 18px; color: rgb(102, 102, 102);">E é mais fácil trabalhar com ele do que diretamente com os códigos HTML, por exemplo. O DOM oferece a funcionalidade de mover os itens de uma página de forma simples e rápida, como se estivesse “arrastando” eles, por isso facilita os processos de desenvolvimento dos programadores. Além de facilitar, ele também expande o universo de possibilidades inovadoras dos desenvolvedores web, que podem criar até mesmo efeitos&nbsp;CSS&nbsp;sem precisar recarregar a página. Como o DOM pode ser manipulado de diversas formas, seus usos são extensos e suas vantagens significativas. Basta usar e abusar da criatividade!</span></p><h1><span style="font-size: 18px; color: rgb(102, 102, 102);"><br></span></h1><h1><span style="color: rgb(67, 67, 67); font-size: 30px;">Como Usar o DOM</span></h1><p><span style="font-size: 18px; color: rgb(102, 102, 102);"><br></span></p><p><span style="font-size: 18px; color: rgb(102, 102, 102);">Não há necessidade de instalar um programa, ou realizar tarefas complexas para usar o DOM. </span></p><p><span style="font-size: 18px; color: rgb(102, 102, 102);"><br></span></p><p><span style="font-size: 18px; color: rgb(102, 102, 102);">Do lado dos navegadores, ele já vem incluído. E do lado do documento, ele é acessado diretamente através dos scripts (por exemplo, direto no JavaScript). Ou seja, quando você cria um script, já pode começar a usar a&nbsp;API&nbsp;DOM. Assim vai poder manipular o próprio documento e seus componentes, que serão refletidos como elementos da página web. </span></p><p><span style="font-size: 18px; color: rgb(102, 102, 102);"><br></span></p><p><span style="font-size: 18px; color: rgb(102, 102, 102);">Quando precisar atualizar algum componente da página, pode fazer utilizando o DOM. Assim, você não terá a necessidade de trabalhar direto com os códigos HTML ou CSS, pois o modelo de documento por objetos armazena a interpretação deste código no formato de árvore. O desenvolvedor, portanto, pode movimentar e manipular os elementos de forma simples pelo documento, sem nem mesmo precisar atualizar ou recarregar a página.</span></p><h1><span style="font-size: 18px; color: rgb(102, 102, 102);"><br></span></h1><h1><span style="font-size: 30px;"><strong style="color: rgb(67, 67, 67);">Tipos de Dados Fundamentais</strong></span></h1><p><span style="font-size: 18px; color: rgb(102, 102, 102);"><br></span></p><p><span style="font-size: 18px; color: rgb(102, 102, 102);">Como já vimos, toda página da web pode ser representada em estrutura de árvore. O topo dessa árvore é estruturado pelo modelo de documento por objetos e terá o documento e elemento raiz HTML.</span></p><p><span style="font-size: 18px; color: rgb(102, 102, 102);"><br></span></p><p><span style="font-size: 18px; color: rgb(102, 102, 102);"> A partir dele, se ramificam os “elementos-filhos”, como&nbsp;Head&nbsp;e&nbsp;Body. Estes, por sua vez, também podem ter elementos-filhos, e todos os elementos podem possuir atributos. </span></p><p><span style="font-size: 18px; color: rgb(102, 102, 102);"><br></span></p><p><span style="font-size: 18px; color: rgb(102, 102, 102);">Agora vamos conferir alguns dos dados e objetos fundamentais do modelo de documento por objetos: </span></p><p><span style="font-size: 18px; color: rgb(102, 102, 102);"><br></span></p><ul><li style="margin-left: 40px;"><span style="color: rgb(102, 102, 102); font-size: 18px;"><strong style="color: rgb(67, 67, 67);">Document</strong><span style="font-size: 18px;">:&nbsp;é o objeto raiz, representa o próprio documento HTML.</span></span></li><li style="margin-left: 40px;"><span style="color: rgb(102, 102, 102); font-size: 18px;"><strong style="color: rgb(67, 67, 67);">Node</strong><span style="font-size: 18px;">:&nbsp;é um nó, e representa uma nomenclatura mesmo:&nbsp; todo objeto em um documento é algum tipo de nó.</span></span></li><li style="margin-left: 40px;"><span style="color: rgb(102, 102, 102); font-size: 18px;"><strong style=""><strong style="color: rgb(67, 67, 67);">Element</strong><span style="font-size: 18px;">:</span></strong><span style="font-size: 18px;">&nbsp;o nó do tipo elemento representa as&nbsp;tags&nbsp;do documento HTML, isto é, o objeto de elemento pode ter “nós-filhos”, como de texto e de atributos.</span></span></li><li style="margin-left: 40px;"><span style="color: rgb(102, 102, 102); font-size: 18px;"><strong style=""><strong style="color: rgb(67, 67, 67);">Attribute</strong><span style="font-size: 18px;">:</span></strong><span style="font-size: 18px;">&nbsp;este tipo de objeto representa um atributo contido num elemento HTML.</span></span></li><li style="margin-left: 40px;"><span style="color: rgb(102, 102, 102); font-size: 18px;"><strong style=""><strong style="color: rgb(67, 67, 67);">Text</strong><span style="font-size: 18px;">:</span></strong><span style="font-size: 18px;">&nbsp;é o texto, ele fica localizado entre os elementos e representa o conteúdo das&nbsp;tags, ou elementos. Por exemplo:&nbsp;&nbsp; &nbsp; aqui está um texto.</span></span></li><dois style="font-size: 18px; color: rgb(102, 102, 102);"><p><br></p><span style="font-size: 18px; color: rgb(102, 102, 102);">Todos estes dados da árvore DOM podem ser adicionados, removidos ou alterados pelo JavaScript. O DOM conta com diversos métodos que podem ser utilizados para fazer a ligação entre esses objetos. </span><p style="font-size: 18px;"><br></p><span style="font-size: 18px; color: rgb(102, 102, 102);">Dois exemplos de métodos são o&nbsp; createElement() , que cria um novo elemento HTML, e o&nbsp;setAttribute() , utilizado para configurar novos atributos para os elementos HTML.</span></dois></ul><h1><span style="font-size: 30px; color: rgb(102, 102, 102);"><br></span></h1><h1><span style="font-size: 24px;"><strong style="color: rgb(67, 67, 67); font-size: 30px;">Conclusão</strong></span></h1><p><span style="font-size: 18px; color: rgb(102, 102, 102);"><br></span></p><p><span style="font-size: 18px; color: rgb(102, 102, 102);"> O DOM cumpre o objetivo de padronizar a representação de um documento em uma página web. Ele faz isso oferecendo uma estrutura em árvore, que organiza os elementos. A forma com que faz essa representação de páginas permite que o documento, seu estilo e conteúdo, sejam facilmente manipulados pelas linguagens de programação.&nbsp;</span></p><p><span style="font-size: 18px; color: rgb(102, 102, 102);"><br></span></p><p><span style="font-size: 18px; color: rgb(102, 102, 102);"> Os principais usos dessa interface de programação estão na criação de páginas inteligentes e de aplicações dinâmicas. E suas vantagens estão em não precisar atualizar e recarregar a página da web inteira para fazer alguma modificação em seu conteúdo ou estilo. </span></p><p><span style="font-size: 18px; color: rgb(102, 102, 102);"><br></span></p><p><span style="font-size: 18px; color: rgb(102, 102, 102);">Apesar de ser um tópico complexo, você não precisa entender todos os detalhes do processo de funcionamento do DOM para poder utilizá-lo e aproveitar seus benefícios. Lembrando que modelo independe da linguagem de programação utilizada. Escolha a sua e aproveite as possibilidades de inovação que o Modelo de Documento por Objetos oferece!</span></p><p><span style="font-size: 18px;"><br></span></p><p><a href="https://www.hostinger.com.br/tutoriais/dom-o-que-e" style="font-size: 18px;">Material utilizado...</a></p>',
        resume: "Dom significa Document Object Model. Ela se refere a interface de programação que os navegadores utilizam para representar uma página Web.",
        type: 'front-end',
        languages: [
            {
                image: 'https://logospng.org/download/html-5/logo-html-5-256.png',
                language: 'HTML'
            }
        ],
        imageUrl: 'https://www.dz-techs.com/wp-content/uploads/2020/01/dom-MCHCSFfs-DzTechs.jpg.webp',
        timeToRead: 20,
        createdAt: 'Jan 2, 2023'
    },
    {
        id: 2,
        title: 'Quais as diferenças do HTML5 pro HTML4?',
        answer: `<h1><span style="color: rgb(67, 67, 67);">O que é HTML?</span></h1><p><br></p>
        <p><span style="color: rgb(102, 102, 102); font-size: 18px;">HTML significa&nbsp;<strong style="">HyperText Markup Language</strong>. Compõe os blocos de construção da web, e é umas das linguagens mais conhecidas. Vale lembrar que HTML é uma linguagem de marcação, ou seja, ela não se encaixa no termo "linguagem de programação", pois, ela não tem a estrutura e os paradigmas de uma.</span></p><p><span style="font-size: 18px;"><br></span></p><h1><span style="color: rgb(67, 67, 67);">O que é HTML5?</span><br></h1><p><br></p><p><span style="color: rgb(102, 102, 102); font-size: 18px;">HTML5 não é um sistema separado, mas sim a versão mais recente da tecnologia HTML. Seu predecessor, o HTML4, teve sua primeira e última atualização em dezembro de 1999. Na verdade, o HTML5 não é muito novo, tendo sido lançado há vários anos, em 2014.</span></p><p><span style="color: rgb(102, 102, 102); font-size: 18px;"><br></span></p><p><span style="color: rgb(102, 102, 102); font-size: 18px;">Ao contrário das versões antigas do HTML, que permitiam criar principalmente sites estáticos que precisavam ser apimentados com CSS e JavaScript, o HTML5 é muito mais dinâmico e inclui elementos multimídia. Ele suporta nativamente vídeo e áudio, e você pode até mesmo fazer jogos ou animações com ele.</span></p><p><span style="color: rgb(102, 102, 102); font-size: 18px;"><br></span></p><p><span style="color: rgb(102, 102, 102); font-size: 18px;">Em outras palavras, o HTML5 é totalmente capaz de fazer coisas que você precisava fazer anteriormente usando ferramentas antigas como JavaScript, Flash, ou Silverlight. Isto significa que seu site é mais seguro e menos aberto a explorações de atacantes que tentam entrar.</span></p><p><span style="color: rgb(102, 102, 102); font-size: 18px;"><br></span></p><p><span style="color: rgb(102, 102, 102); font-size: 18px;">E embora CSS e JavaScript ainda sejam definitivamente necessários para criar um website completo, você não precisa mais confiar neles para fazer qualquer coisa dinâmica.</span></p><p><br></p><h1><span style="color: rgb(67, 67, 67);">HTML vs HTML5: Refletindo as diferenças:</span></h1><p><br></p><p><span style="color: rgb(102, 102, 102); font-size: 18px;">Quando a maioria das pessoas fala em “HTML”, elas se referem à tecnologia como um todo, incluindo sua última versão: HTML5. Embora seja muito diferente em muitos aspectos, o HTML5 é realmente apenas uma atualização polida para o padrão antigo.</span></p><p><span style="color: rgb(102, 102, 102); font-size: 18px;"><br></span></p><p><span style="color: rgb(102, 102, 102); font-size: 18px;"><span style="font-size: 18px;">Enquanto HTML e HTML5 fazem parte do mesmo sistema, a grande atualização trouxe várias melhorias à antiga linguagem de codificação, tornando-a ainda mais eficiente. Aqui estão apenas alguns exemplos do que foi adiciona</span></span><span style="font-size: 18px;"><span style="color: rgb(102, 102, 102);">d</span><span style="font-size: 18px; color: rgb(102, 102, 102);">o:</span></span></p><p><span style="font-size: 18px;"><span style="font-size: 18px; color: rgb(102, 102, 102);"><br></span></span></p><ul><li style="margin-left: 40px;"><span style="font-size: 18px;"><span style="font-size: 18px; color: rgb(102, 102, 102);">Compatibilidade</span></span></li><li style="margin-left: 40px;"><span style="font-size: 18px;"><span style="font-size: 18px; color: rgb(102, 102, 102);">Suporte Multimídia</span></span></li><li style="margin-left: 40px;"><span style="font-size: 18px;"><span style="font-size: 18px; color: rgb(102, 102, 102);">SGML</span></span></li><li style="margin-left: 40px;"><span style="color: rgb(102, 102, 102); font-size: 18px;">Melhor desempenho e suporte para celulares</span></li><li style="margin-left: 40px;"><span style="color: rgb(102, 102, 102); font-size: 18px;">Melhores controles de formulário</span></li><li style="margin-left: 40px;"><span style="color: rgb(102, 102, 102); font-size: 18px;">Armazenamento Web</span></li></ul><p><br></p><h1><span style="color: rgb(67, 67, 67);">Qual é o melhor: HTML ou HTML5?</span></h1><h1><br></h1><p><span style="color: rgb(102, 102, 102); font-size: 18px;">Como listado acima, o HTML5 melhora vários aspectos do HTML4 que eram obsoletos e difíceis de serem trabalhados. Além disso, HTML5 pode fazer muitas coisas nativamente, enquanto HTML4 se baseia inteiramente em sistemas obsoletos há muito tempo como Silverlight,&nbsp;Java&nbsp;Web Start e Flash.</span></p><p><span style="color: rgb(102, 102, 102); font-size: 18px;"><br></span></p><p><span style="color: rgb(102, 102, 102); font-size: 18px;">Embora o HTML5 nem sempre seja exibido corretamente em navegadores e sistemas operacionais super antigos (como o Internet Explorer ou versões antigas de telefones celulares), estas plataformas estão extremamente desatualizadas e raramente são mais utilizadas. Não há mais boas razões para usar versões desatualizadas do HTML em relação aos padrões modernos.</span></p><p><span style="color: rgb(102, 102, 102); font-size: 18px;"><br></span></p><p><span style="color: rgb(102, 102, 102); font-size: 18px;">Infelizmente, há muitas informações na Internet e em livros sobre versões antigas do HTML. Sempre que você procurar um guia ou aprender com um curso ou livro, certifique-se de que ele esteja falando sobre HTML5 e foi lançado ou atualizado após 2014. Não há utilidade em aprender padrões ultrapassados de 1999.</span></p><p><span style="color: rgb(67, 67, 67); font-size: 18px;"><br></span></p><h1><span style="color: rgb(67, 67, 67);">Conclusão.</span></h1><p><br></p><p>HTML e HTML5 são apenas duas partes da mesma tecnologia, embora signifiquem coisas ligeiramente diferentes. HTML refere-se à linguagem markup como um todo, muitas vezes à versão mais recente, enquanto HTML5 é a última atualização da mesma.</p><p><br></p><p>Se você está procurando aprender HTML, é importante usar a última edição: HTML5. É melhor em todos os sentidos, e mesmo que isso signifique ter que converter muito código antigo manualmente, definitivamente vale a pena o esforço.</p><p><br></p><p>O HTML5 já tem vários anos e, como padrão de vida da linguagem como um todo, ele só continuará a ser atualizado para trabalhar com a web moderna.</p><p><br></p><p><a href="https://kinsta.com/pt/blog/html-vs-html5/#:~:text=Ao%20contr%C3%A1rio%20das%20vers%C3%B5es%20antigas,jogos%20ou%20anima%C3%A7%C3%B5es%20com%20ele.">Material utilizado...</a></p>`,
        resume: "HTML significa HyperText Markup Language. Compõe os blocos de construção da web, e é umas das linguagens mais conhecidas. Vale lembrar que HTML é uma linguagem de marcação",
        type: 'front-end',
        languages: [
            {
                image: 'https://logospng.org/download/html-5/logo-html-5-256.png',
                language: 'HTML'
            }
        ],
        imageUrl: 'https://ayltoninacio.com.br/img/p/90w1500.jpg',
        timeToRead: 10,
        createdAt: 'Jan 5, 2023'
    },
    {
        id: 3,
        title: 'Quantas tags de title existem?',
        answer: 'Resposta aqui - pode ser um html',
        resume: "Um resumo legal aqui!",
        type: 'front-end',
        languages: [
            {
                image: 'https://logospng.org/download/html-5/logo-html-5-256.png',
                language: 'HTML'
            },
            {
                image: 'https://logospng.org/download/css-3/logo-css-3-256.png',
                language: 'CSS'
            }
        ],
        imageUrl: 'http://image.com',
        timeToRead: 5,
        createdAt: 'Jan 2, 2023'
    },
    {
        id: 4,
        title: 'Qual a diferença de div para um spam?',
        answer: 'Resposta aqui - pode ser um html',
        resume: "Um resumo legal aqui!",
        type: 'front-end',
        languages: [
            {
                image: 'https://logospng.org/download/html-5/logo-html-5-256.png',
                language: 'HTML'
            },
            {
                image: 'https://logospng.org/download/css-3/logo-css-3-256.png',
                language: 'CSS'
            }
        ],
        imageUrl: 'http://image.com',
        timeToRead: 15,
        createdAt: 'Jan 2, 2023'
    },
    {
        id: 5,
        title: 'Cite algumas técnicas de SEO.',
        answer: 'Resposta aqui - pode ser um html',
        resume: "Um resumo legal aqui!",
        type: 'front-end',
        languages: [
            {
                image: 'https://logospng.org/download/html-5/logo-html-5-256.png',
                language: 'HTML'
            },
            {
                image: 'https://logospng.org/download/css-3/logo-css-3-256.png',
                language: 'CSS'
            }
        ],
        imageUrl: 'http://image.com',
        timeToRead: 10,
        createdAt: 'Jan 2, 2023'
    },
    {
        id: 6,
        title: 'Cite técnicas pra deixar um site mais performático.',
        answer: 'Resposta aqui - pode ser um html',
        resume: "Um resumo legal aqui!",
        type: 'front-end',
        languages: [
            {
                image: 'https://logospng.org/download/html-5/logo-html-5-256.png',
                language: 'HTML'
            },
            {
                image: 'https://logospng.org/download/css-3/logo-css-3-256.png',
                language: 'CSS'
            }
        ],
        imageUrl: 'http://image.com',
        timeToRead: 7,
        createdAt: 'Jan 2, 2023'
    },
    {
        id: 7,
        title: 'Cite algumas técnicas de acessibilidade.',
        answer: 'Resposta aqui - pode ser um html',
        resume: "Um resumo legal aqui!",
        type: 'front-end',
        languages: [
            {
                image: 'https://logospng.org/download/html-5/logo-html-5-256.png',
                language: 'HTML'
            },
            {
                image: 'https://logospng.org/download/css-3/logo-css-3-256.png',
                language: 'CSS'
            }
        ],
        imageUrl: 'http://image.com',
        timeToRead: 8,
        createdAt: 'Jan 2, 2023'
    },
];

export interface IQuestionsType {
    id: number;
    title: string;
    answer: string;
    resume: string;
    type: string;
    languages: {
        image: string;
        language: string;
    }[];
    imageUrl: string;
    timeToRead: number;
    createdAt: string;
};

export interface IQueryParams {
    filter?: {},
    limit?: number,
    take?: number,
    skip?: number,
    order?: 'ASC' | 'DESC',
}

export interface IQuestionsArray extends Array<IQuestionsType> { }

export async function QuestionsRequest(queryParams: IQueryParams) {
    const { filter, limit, take, skip } = queryParams;
    let questionsResponse = questions;

    if (take) {
        questionsResponse = questions.slice(0, take);
    }

    return questionsResponse;
}

export async function GetQuestionById(id: number) {
    const question = questions.find(e => e.id === id);
    return question;
}