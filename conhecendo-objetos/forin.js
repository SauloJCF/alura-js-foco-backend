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

for (const chave in estudante) {
  const tipo = typeof estudante[chave];
  if (tipo !== "object" && tipo !== "function") {
    console.log(`A chave ${chave} tem o valor ${estudante[chave]}`);
  }
}
