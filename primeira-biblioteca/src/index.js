const fs = require('fs');

const argumentoCaminhoArquivo = 2;

const caminhoArquivo = process.argv[argumentoCaminhoArquivo];

fs.readFile(caminhoArquivo, 'utf-8', (erro, texto) => {
    console.log(texto);
    
});

console.log(caminhoArquivo);

// console.log(process.argv);
