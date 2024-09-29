const fs = require('fs');

const argumentoCaminhoArquivo = 2;

const caminhoArquivo = process.argv[argumentoCaminhoArquivo];

fs.readFile(caminhoArquivo, 'utf-8', (erro, texto) => {
    quebraEmParagrafos(texto);
});

function quebraEmParagrafos(texto) {
    const paragrafos = texto.toLowerCase().split('\n');
    const contagem = paragrafos.flatMap(paragrafo => {
        if (!paragrafo) return [];
        return verificaPalavrasRepetidas(paragrafo);
    });

    console.log(contagem);
}

function limpaPalavras(palavra) {
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

function verificaPalavrasRepetidas(texto) {
    const listaPalavras = texto.split(' ');
    const resultado = {};

    listaPalavras.forEach(palavra => {
        const palavraLimpa = limpaPalavras(palavra);
        if (palavraLimpa.length >= 3) { resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1; }
    });

    return resultado;

}
