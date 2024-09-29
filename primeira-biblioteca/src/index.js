const fs = require('fs');

const argumentoCaminhoArquivo = 2;

const caminhoArquivo = process.argv[argumentoCaminhoArquivo];

fs.readFile(caminhoArquivo, 'utf-8', (erro, texto) => {
    quebraEmParagrafos(texto);
});

function quebraEmParagrafos(texto) {
    const paragrafos = texto.toLowerCase().split('\n');
    const contagem = paragrafos.map(paragrafo => verificaPalavrasRepetidas(paragrafo));

    console.log(contagem);
}

function verificaPalavrasRepetidas(texto) {
    const listaPalavras = texto.split(' ');
    const resultado = {};

    listaPalavras.forEach(palavra => {
        resultado[palavra] = (resultado[palavra] || 0) + 1;
    });

    return resultado;
    
}
