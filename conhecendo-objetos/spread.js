const estudante = {
    nome: "Jose da Silva",
    idade: 32,
    cpf: "12312312312",
    turma: "JavaScript",
    bolsista: true,
    telefones: ["33999999999", "33988888888"],
    enderecos: [
      {
        rua: "Rua dos Loucos",
        numero: "0",
        complemento: "Casa",
      },
      {
        rua: "Rua Carlos Moura",
        numero: "3",
        complemento: "AP 302",
      },
    ],
  };

  function exibirTelefone(telefone1, telefone2) {
    console.log(`Ligar para o telefone ${telefone1}`);
    console.log(`Ligar para o telefone ${telefone2}`);
  }

  exibirTelefone(estudante.telefones[0], estudante.telefones[0]);
  exibirTelefone(...estudante.telefones);

  const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0]
  };

  console.log(dadosEnvio);
  