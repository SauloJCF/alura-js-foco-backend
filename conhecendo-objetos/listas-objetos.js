const estudante = {
    nome: 'Jose da Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['33999999999', '33988888888'],
    enderecos: [
        {
            rua: 'Rua dos Loucos',
            numero: '0',
            complemento: 'Casa'
        }
    ]
};

estudante.enderecos.push({
    rua: 'Rua A',
    numero: 'B',
    complemento: ''
})

console.log(estudante);

console.log(estudante.enderecos[1]);

const enderecosComComplemento = estudante.enderecos.filter(endereco => endereco.complemento);

console.log(enderecosComComplemento);

