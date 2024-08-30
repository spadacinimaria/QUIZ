const questions = [
    {
        question: "Qual é a capital do Brasil?",
        options: ["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"],
        answer: "Brasília"
    },
    {
        question: "Qual é o maior planeta do sistema solar?",
        options: ["Terra", "Marte", "Júpiter", "Saturno"],
        answer: "Júpiter"
    },
    {
        question: "Quem escreveu 'Dom Casmurro'?",
        options: ["Machado de Assis", "José de Alencar", "Jorge Amado", "Guimarães Rosa"],
        answer: "Machado de Assis"
    },
    {
        question: "Qual é o elemento químico com o símbolo 'O'?",
        options: ["Ouro", "Oxigênio", "Osmio", "Óxido"],
        answer: "Oxigênio"
    },
    {
        question: "Em que ano a primeira guerra mundial começou?",
        options: ["1912", "1914", "1916", "1918"],
        answer: "1914"
    },
    {
        question: "Qual é o maior oceano do mundo?",
        options: ["Atlântico", "Índico", "Ártico", "Pacífico"],
        answer: "Pacífico"
    },
    {
        question: "Quem pintou a Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "Qual é a fórmula química da água?",
        options: ["H2O", "CO2", "O2", "H2SO4"],
        answer: "H2O"
    },
    {
        question: "Qual é a capital da França?",
        options: ["Paris", "Londres", "Berlim", "Madri"],
        answer: "Paris"
    },
    {
        question: "Qual é o menor país do mundo em termos de área?",
        options: ["Mônaco", "San Marino", "Vaticano", "Liechtenstein"],
        answer: "Vaticano"
    },
    {
        question: "Quem foi o primeiro presidente dos Estados Unidos?",
        options: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"],
        answer: "George Washington"
    },
    {
        question: "Qual é o planeta mais próximo do Sol?",
        options: ["Vênus", "Terra", "Mercúrio", "Marte"],
        answer: "Mercúrio"
    },
    {
        question: "Qual é o maior deserto do mundo?",
        options: ["Saara", "Gobi", "Antártida", "Kalahari"],
        answer: "Antártida"
    },
    {
        question: "Qual é o maior animal terrestre?",
        options: ["Elefante", "Girafa", "Rinoceronte", "Hipopótamo"],
        answer: "Elefante"
    },
    {
        question: "Qual é o nome da famosa obra de William Shakespeare que conta a história de um príncipe dinamarquês?",
        options: ["Romeu e Julieta", "Macbeth", "Otelo", "Hamlet"],
        answer: "Hamlet"
    },
    {
        question: "Quem inventou a lâmpada elétrica?",
        options: ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Michael Faraday"],
        answer: "Thomas Edison"
    },
    {
        question: "Qual é a capital da Itália?",
        options: ["Roma", "Milão", "Veneza", "Florença"],
        answer: "Roma"
    },
    {
        question: "Qual é o maior continente em termos de área?",
        options: ["África", "Ásia", "América do Norte", "Europa"],
        answer: "Ásia"
    },
    {
        question: "Qual é o nome do primeiro satélite artificial enviado ao espaço?",
        options: ["Apollo", "Sputnik", "Voyager", "Hubble"],
        answer: "Sputnik"
    },
    {
        question: "Qual é a fórmula química do sal de cozinha?",
        options: ["NaCl", "KCl", "CaCl2", "MgCl2"],
        answer: "NaCl"
    },
    {
        question: "Quem foi o famoso explorador que descobriu a América em 1492?",
        options: ["Ferdinand Magellan", "Cristóvão Colombo", "Vasco da Gama", "Hernán Cortés"],
        answer: "Cristóvão Colombo"
    },
    {
        question: "Qual é a língua oficial do Japão?",
        options: ["Chinês", "Japonês", "Coreano", "Vietnamita"],
        answer: "Japonês"
    },
    {
        question: "Qual é o nome do sistema de escrita usado na língua árabe?",
        options: ["Alfabeto latino", "Cirílico", "Hieróglifos", "Alfabeto árabe"],
        answer: "Alfabeto árabe"
    },
    {
        question: "Qual é a montanha mais alta do mundo?",
        options: ["K2", "Kangchenjunga", "Everest", "Makalu"],
        answer: "Everest"
    },
    {
        question: "Qual é a principal fonte de energia do Sol?",
        options: ["Fissão nuclear", "Combustão química", "Fusão nuclear", "Reação de divisão"],
        answer: "Fusão nuclear"
    },
    {
        question: "Quem foi o cientista que desenvolveu a teoria da relatividade?",
        options: ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Galileu Galilei"],
        answer: "Albert Einstein"
    },
    {
        question: "Qual é o nome do principal personagem da série de livros 'Harry Potter'?",
        options: ["Harry Potter", "Ron Weasley", "Hermione Granger", "Albus Dumbledore"],
        answer: "Harry Potter"
    },
    {
        question: "Qual é a moeda oficial do Japão?",
        options: ["Dólar", "Euro", "Yen", "Won"],
        answer: "Yen"
    },
    {
        question: "Qual é o maior rio do mundo em volume de água?",
        options: ["Nilo", "Amazonas", "Yangtze", "Mississippi"],
        answer: "Amazonas"
    },
    {
        question: "Qual é o nome da famosa torre inclinada localizada na Itália?",
        options: ["Torre de Pisa", "Torre de Londres", "Torre Eiffel", "Torre de Belém"],
        answer: "Torre de Pisa"
    },
    {
        question: "Quem foi o compositor da Nona Sinfonia?",
        options: ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Johann Sebastian Bach", "Frédéric Chopin"],
        answer: "Ludwig van Beethoven"
    },
    {
        question: "Qual é a capital da Austrália?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        answer: "Canberra"
    },
    {
        question: "Qual é a fórmula química da glicose?",
        options: ["C6H12O6", "C5H10O5", "C6H12O5", "C6H14O6"],
        answer: "C6H12O6"
    },
    {
        question: "Qual é o nome da maior lua de Saturno?",
        options: ["Titã", "Ío", "Europa", "Ganimedes"],
        answer: "Titã"
    },
    {
        question: "Quem foi o líder do movimento dos direitos civis nos Estados Unidos na década de 1960?",
        options: ["Malcolm X", "Martin Luther King Jr.", "Rosa Parks", "Nelson Mandela"],
        answer: "Martin Luther King Jr."
    },
    {
        question: "Qual é o maior lago do mundo em termos de área?",
        options: ["Lago Baikal", "Lago Superior", "Lago Vitória", "Lago Cáspio"],
        answer: "Lago Cáspio"
    },
    {
        question: "Qual é o nome do famoso vulcão localizado na Itália que entrou em erupção em 79 d.C. e destruiu Pompeia?",
        options: ["Vesúvio", "Etna", "Stromboli", "Vulcano"],
        answer: "Vesúvio"
    }
];