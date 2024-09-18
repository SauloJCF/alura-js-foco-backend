const estudante = {
    nome: 'Jose da Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['33999999999', '33988888888']
};

estudante.endereco = {
    rua: 'Rua dos Loucos',
    numero: '0',
    complemento: 'Casa'
}

console.log(estudante);

console.log(estudante.endereco);

console.log(estudante.endereco.rua);
