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

  const chavesObjetos = Object.keys(estudante);

  console.log(chavesObjetos);
  
  if (!chavesObjetos.includes('enderecos')) {
    console.error('É necessário ter um endereço cadastrado!');
  }

  console.log(Object.values(estudante));
  
  console.log(Object.entries(estudante));
  