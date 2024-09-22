const estudantes = require('./json/estudantes.json');

function buscaInformacao(lista, chave, valor) {
    // return lista.find(item => item[chave] === valor);
    return lista.find(item => item[chave].includes(valor))
}

const buscaEstudantePeloNome = buscaInformacao(estudantes, 'nome', 'Oralle');

console.log(buscaEstudantePeloNome);

const buscaEstudantePeloTelefone = buscaInformacao(estudantes, 'telefone', '1918820860');

console.log(buscaEstudantePeloTelefone);

