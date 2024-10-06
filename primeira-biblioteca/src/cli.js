import fs from 'fs';
import path from 'path';
import trataErros from './erros/funcoesErro.js';
import { contaPalavras } from './index.js';
import { montaSaidaArquivo } from './helper.js';
import { Command } from 'commander';

const program = new Command();

program
    .version('0.0.1')
    .option('-t, --texto <string>', 'caminho do texto a ser processado')
    .option('-d, --destino <string>', 'caminho da pasta onde salvar o arquivo de resultados')
    .action((options) => {
        const { texto, destino } = options;

        if (!texto || !destino) {
            console.error('erro: favor inserir caminho de origem e destino');
            program.help();
            return;
        }

        const caminhoArquivo = path.resolve(texto);
        const caminhoDestino = path.resolve(destino);

        processaArquivo(caminhoArquivo, caminhoDestino);
    });

program.parse();

function processaArquivo(caminhoArquivo, caminhoDestino) {
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
}

async function criaESalvaArquivo(listaPalavras, caminhoDestino) {
    const novoArquivo = caminhoDestino + '/resultado.txt';
    const textoPalavras = montaSaidaArquivo(listaPalavras);
    try {
        await fs.promises.writeFile(novoArquivo, textoPalavras);
        console.log('Arquivo criado com sucesso!');

    } catch (error) {
        throw error;
    }
}