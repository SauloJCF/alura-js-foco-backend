const estudante = {
    nome: 'Ryuen',
    idade: 16,
    cpf: '12345678900',
    turma: 'C Class'
}

console.log(estudante);

estudante.pontos = 5000000;

console.log(estudante);

estudante.pontos = 0;

console.log(estudante);

const estudante2 = {...estudante, rank: 'A'};

console.log(estudante2);


