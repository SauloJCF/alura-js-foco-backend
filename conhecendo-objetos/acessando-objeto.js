const estudante = {
    nome: 'Jose da Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript'
}

console.log(estudante);

function retornaInfoEstudante(objEstudante, infoEstudante) {
    return objEstudante[infoEstudante];
}

console.log(retornaInfoEstudante(estudante, 'nome'));

console.log(retornaInfoEstudante(estudante, 'cpf'));

console.log(estudante.peso);

console.log(estudante['peso']);

console.log(estudante[0]); // also undefined
