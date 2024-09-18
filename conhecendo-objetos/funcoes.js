const estudante = {
    nome: 'Jose da Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['33999999999', '33988888888'],
    media: 7.5,
    estaAprovado: function (mediaBase) {
        // return media >= mediaBase; // media is not defined
        return this.media >= mediaBase;
    },
    // estaAprovado: mediaBase => this.media > mediaBase // não suporta o usuo do this
};

console.log(estudante.estaAprovado(6));
