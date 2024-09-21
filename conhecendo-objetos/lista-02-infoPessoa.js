// Ex 01 e 02
const pessoa = {
  nome: "Saulo",
  idade: 24,
  solteiro: true,
  hobbies: ["Formula 1", "Animes", "Jogos"],
  endereco: {
    rua: "Rua 01",
    cidade: "Virginópolis",
    estado: "Minas Gerais",
  },
};

function mostrarInfoPessoa(objPessoa) {
  console.log(
    `Nome: ${
      objPessoa.nome
    } (${typeof objPessoa.nome}) \nIdade: ${typeof objPessoa.idade} (${
      objPessoa.idade
    }); \nSolteiro: ${
      objPessoa.solteiro
    }; (${typeof objPessoa.solteiro}); \nHobbies: ${objPessoa.hobbies.join(
      ", "
    )} (${typeof objPessoa.hobbies}) \nEndereço (${typeof objPessoa.endereco}): \nRua: ${
      objPessoa.endereco.rua
    } (${typeof objPessoa.endereco.rua}) \nCidade: ${
      objPessoa.endereco.cidade
    } (${typeof objPessoa.endereco.cidade}) \nEstado: ${
      objPessoa.endereco.estado
    } (${typeof objPessoa.endereco.estado})`
  );
}

mostrarInfoPessoa(pessoa);

// Ex 03

const pessoas = [
  {
    nome: "Pedro",
    idade: 35,
    cidade: "Açucena",
  },
  {
    nome: "João",
    idade: 27,
    cidade: "João Molevade",
  },
  {
    nome: "Marcos",
    idade: 14,
    cidade: "Açucena",
  },
];

function mostrarListaPessoas(listaPessoas) {
  listaPessoas.forEach((pessoa) => {
    console.log(
      `-------\nNome: ${pessoa.nome} \nIdade: ${pessoa.idade} \nCidade: ${pessoa.cidade}`
    );
  });
}

pessoas.push({
  nome: "Matheus",
  idade: 37,
  cidade: "Guanhães",
});

mostrarListaPessoas(pessoas);

function filtrarPorCidade(listaPessoas, cidade) {
  return listaPessoas.filter((pessoa) => pessoa.cidade === cidade);
}

console.log("---------------------------\n Pessoas de Açucena");

mostrarListaPessoas(filtrarPorCidade(pessoas, "Açucena"));

// Ex 04

console.log("---------------------------");

const calculadora = {
  soma: (n1, n2) => n1 + n2,
  subtracao: (n1, n2) => n1 - n2,
  multiplicacao: (n1, n2) => n1 * n2,
  divisao: (n1, n2) => {
    if (n2 === 0) throw new Error("Impossível realizar divisão por zero!");

    return n1 / n2;
  },
  calcularMedia: (arrayValores) => {
    return (
      arrayValores.reduce((soma, atual) => (soma + atual), 0) /
      arrayValores.length
    );
  },
};

console.log(`Soma: ${calculadora.soma(5, 6)}`);
console.log(`Subtração: ${calculadora.subtracao(5, 6)}`);
console.log(`Multiplicação: ${calculadora.multiplicacao(5, 6)}`);
console.log(`Divisão: ${calculadora.divisao(5, 6)}`);

try {
  console.log(calculadora.divisao(5, 0));
} catch (e) {
  console.log(e.message);
}

console.log(`Média: ${calculadora.calcularMedia([5, 6, 7, 8])}`);

// Ex. 05
console.log("---------------------------");

const contaBancaria = {
  titular: 'Saulo',
  saldo: 200.32,
  depositar: function (valorDeposito) {
    this.saldo += valorDeposito;
  },
  sacar: function (valorSaque) {
    if (valorSaque > this.saldo) {
      throw new Error("Saldo insuficiente!");
    }

    this.saldo -= valorSaque;
  }
};

const cliente = {
  nome: 'Saulo Figueiredo',
  conta: contaBancaria
};

function mostrarSaldo(cliente) {
  console.log(`Cliente: ${cliente.nome}\nSaldo: ${cliente.conta.saldo.toFixed(2)}`);
}

mostrarSaldo(cliente);

contaBancaria.sacar(30);

mostrarSaldo(cliente);

contaBancaria.depositar(70);

mostrarSaldo(cliente);

try {
  contaBancaria.sacar(300);
} catch (e) {
  console.log(e.message);  
}

mostrarSaldo(cliente);
