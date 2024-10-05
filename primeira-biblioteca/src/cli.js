import fs from 'fs';
import trataErros from './erros/funcoesErro.js';
import { contaPalavras } from './index.js';

const argumentoCaminhoArquivo = 2;

const caminhoArquivo = process.argv[argumentoCaminhoArquivo];

fs.readFile(caminhoArquivo, 'utf-8', (erro, texto) => {
    try {
        if (erro) {
            throw erro;
        }
        contaPalavras(texto);
    } catch (erro) {
        console.log(trataErros(erro));
    }
});