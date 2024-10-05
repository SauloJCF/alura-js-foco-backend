const fs = require('fs');

const argumentoCaminhoArquivo = 2;

const caminhoArquivo = process.argv[argumentoCaminhoArquivo];

fs.readFile(caminhoArquivo, 'utf-8', (erro, texto) => {
    try {
        if (erro) {
            throw erro;
        }
        contaPalavras(texto);
    } catch (erro) {
        if (erro.code === 'ENOENT') {
            console.log('Arquivo de texto não encontrado!');
        } else {
            console.log('Um erro inexperado aconteceu durante o processamento do arquivo, tente novamente!\n ' + erro.message);
        }
    }
});

function contaPalavras(texto) {
    const paragrafos = extraiParagrafos(texto);
    const contagem = paragrafos.flatMap(paragrafo => {
        if (!paragrafo) return [];
        return verificaPalavrasRepetidas(paragrafo);
    });

    console.log(contagem);
}

function extraiParagrafos(texto) {
    return texto.toLowerCase().split('\n');
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

function limpaPalavras(palavra) {
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}
