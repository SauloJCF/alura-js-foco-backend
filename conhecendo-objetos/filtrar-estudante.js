const estudantes = require('./json/estudantes.json');

function filtraEstudanteSemPropriedadeNoEndereco(lista, propriedade) {
    return lista.filter(estudante => !estudante.endereco.hasOwnProperty(propriedade));
}

console.log(filtraEstudanteSemPropriedadeNoEndereco(estudantes, 'cep'));
