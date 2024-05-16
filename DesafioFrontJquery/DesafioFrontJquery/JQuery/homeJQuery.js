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
    "hipop�tamo", "igreja", "jogador", "ketchup", "le�o", "macaco", "nuvem", "oceano", "pipoca",
    "quadro", "rosa", "sapo", "tartaruga", "urso", "viol�o", "xadrez", "yoga", "zebra", "avi�o",
    "barco", "cavalo", "dado", "estrela", "flor", "gato", "hotel", "ilha", "jardim", "kilo", "l�pis",
    "m�sica", "noite", "ovo", "porta", "quente", "rio", "sol", "tigre", "uva", "vaca", "xadrez", "youtuber",
    "zool�gico", "abajur", "bicicleta", "caneta", "desenho", "escola", "festa", "golfinho", "hist�ria", "im�",
    "janela", "kiwi", "livro", "montanha", "navio", "orqu�dea", "papagaio", "quiosque", "rato", "saudade",
    "telesc�pio", "universo", "vento", "xadrez", "yeti", "ziguezague", "abelha", "baleia", "casa", "dente",
    "estrela", "floresta", "guitarra", "horizonte", "internet", "jogo", "ketchup", "lago", "montanha", "nuvem",
    "oceano", "piano", "quarto", "roda", "sombra", "tigre", "uva", "vento", "xadrez", "yoga", "zool�gico", "anel",
    "bola", "carro", "dado", "elefante", "fogo", "gelo", "hospital", "ilha", "jardim", "kiwi", "luz", "mar", "noite",
    "ouro", "p�ssaro", "quadro", "relogio", "sorvete", "trem", "urso", "vida", "xadrez", "yeti", "zebra", "avi�o",
    "bicicleta", "caneta", "diamante", "escola", "fada", "girafa", "helic�ptero", "igreja", "janela", "kiwi",
    "livro", "mar", "noite", "ovo", "pipa", "quintal", "rio", "sol", "tigre", "uva", "vento", "xadrez", "yoga",
    "zool�gico", "abacate", "bicicleta", "cavalo", "dente", "estrela", "festa", "golfinho", "horizonte", "igreja",
    "jardim", "kiwi", "livro", "montanha", "navio", "oceano", "pipoca", "quiosque", "rosa", "sapo", "tartaruga",
    "urso", "viol�o", "xadrez", "yoga", "zebra", "avi�o", "bicicleta", "carro", "diamante", "elefante", "futebol",
    "girassol", "hipop�tamo", "igreja", "janela", "kiwi", "livro", "mar", "noite"];