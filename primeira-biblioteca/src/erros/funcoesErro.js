export default function trataErros(erro) {
    if (erro.code === 'ENOENT') {
        throw new Error('Arquivo de texto não encontrado!');
    } else {
        return 'Um erro inexperado aconteceu durante o processamento do arquivo, tente novamente!\n' + erro.message;
    }
}
