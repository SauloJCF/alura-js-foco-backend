import fs from 'fs';
import trataErros from './erros/funcoesErro.js';
import { contaPalavras } from './index.js';

const argumentoCaminhoArquivo = 2;
const argumentoCaminhoArquivoDestino = 3;

const caminhoArquivo = process.argv[argumentoCaminhoArquivo];
const caminhoDestino = process.argv[argumentoCaminhoArquivoDestino];

fs.readFile(caminhoArquivo, 'utf-8', (erro, texto) => {
    try {
        if (erro) {
            throw erro;
        }
        const resultado = contaPalavras(texto);
        criaESalvaArquivo(resultado, caminhoDestino);
    } catch (erro) {
        console.log(trataErros(erro));
    }
});

// async function criaESalvaArquivo(listaPalavras, caminhoDestino) {
//     const novoArquivo = caminhoDestino + '/resultado.txt';
//     const textoPalavras = JSON.stringify(listaPalavras, null, 2);
//     try {
//         await fs.promises.writeFile(novoArquivo, textoPalavras);
//         console.log('Arquivo criado com sucesso!');

//     } catch (error) {
//         throw error;
//     }
// }

function criaESalvaArquivo(listaPalavras, caminhoDestino) {
    const novoArquivo = caminhoDestino + '/resultado.txt';
    const textoPalavras = JSON.stringify(listaPalavras, null, 2);

    fs.promises.writeFile(novoArquivo, textoPalavras)
        .then(() => {
            console.log('Arquivo criado com sucesso!');
        })
        .catch((erro) => {
            throw erro;
        })
        .finally(() => {
            console.log('Processo finalizado!');
        });

}