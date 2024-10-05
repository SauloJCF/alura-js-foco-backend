function montaSaidaArquivo(listaPalavras) {
    let texto = '';
    listaPalavras.forEach((paragrafo, index) => {
        const palavrasRepetidas = formatarPalavrasRepetidas(paragrafo);
        if (palavrasRepetidas.length > 0) {
            texto += `Palavras repetidas no parágrafo ${index + 1}: ${palavrasRepetidas}\n`;
        }
    });
    return texto;
}

function formatarPalavrasRepetidas(paragrafo) {
    return filtrarRepeticoes(paragrafo).map(palavra => {
        return `${palavra} (${paragrafo[palavra]})`;
    }).join(', ');
}

function filtrarRepeticoes(paragrafo) {
    return Object.keys(paragrafo).filter(palavra => paragrafo[palavra] > 1);
}

export { montaSaidaArquivo };