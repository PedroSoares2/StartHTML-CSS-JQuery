$("#generateText").click(function () {
    var frase = '';

    for (let i = 0; i < 5; i++) {
        frase += palavras[Math.floor(Math.random() * palavras.length)];
        frase += ' ';
    }

    alert(frase);
});

$("#imageLink").css("color", "#4db6ac");

$("#imageLink").hover(function () {
    $(this).css("color", "blue");
}, function () {
    $(this).css("color", "#4db6ac");
});

let palavras = ["abacaxi", "banana", "cachorro", "dinossauro", "elefante", "futebol", "girassol",
    "hipopótamo", "igreja", "jogador", "ketchup", "leão", "macaco", "nuvem", "oceano", "pipoca",
    "quadro", "rosa", "sapo", "tartaruga", "urso", "violão", "xadrez", "yoga", "zebra", "avião",
    "barco", "cavalo", "dado", "estrela", "flor", "gato", "hotel", "ilha", "jardim", "kilo", "lápis",
    "música", "noite", "ovo", "porta", "quente", "rio", "sol", "tigre", "uva", "vaca", "xadrez", "youtuber",
    "zoológico", "abajur", "bicicleta", "caneta", "desenho", "escola", "festa", "golfinho", "história", "imã",
    "janela", "kiwi", "livro", "montanha", "navio", "orquídea", "papagaio", "quiosque", "rato", "saudade",
    "telescópio", "universo", "vento", "xadrez", "yeti", "ziguezague", "abelha", "baleia", "casa", "dente",
    "estrela", "floresta", "guitarra", "horizonte", "internet", "jogo", "ketchup", "lago", "montanha", "nuvem",
    "oceano", "piano", "quarto", "roda", "sombra", "tigre", "uva", "vento", "xadrez", "yoga", "zoológico", "anel",
    "bola", "carro", "dado", "elefante", "fogo", "gelo", "hospital", "ilha", "jardim", "kiwi", "luz", "mar", "noite",
    "ouro", "pássaro", "quadro", "relogio", "sorvete", "trem", "urso", "vida", "xadrez", "yeti", "zebra", "avião",
    "bicicleta", "caneta", "diamante", "escola", "fada", "girafa", "helicóptero", "igreja", "janela", "kiwi",
    "livro", "mar", "noite", "ovo", "pipa", "quintal", "rio", "sol", "tigre", "uva", "vento", "xadrez", "yoga",
    "zoológico", "abacate", "bicicleta", "cavalo", "dente", "estrela", "festa", "golfinho", "horizonte", "igreja",
    "jardim", "kiwi", "livro", "montanha", "navio", "oceano", "pipoca", "quiosque", "rosa", "sapo", "tartaruga",
    "urso", "violão", "xadrez", "yoga", "zebra", "avião", "bicicleta", "carro", "diamante", "elefante", "futebol",
    "girassol", "hipopótamo", "igreja", "janela", "kiwi", "livro", "mar", "noite"];