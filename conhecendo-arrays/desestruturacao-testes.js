const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

console.log([numerosImpares, numerosPares]); // [ [ 1, 3, 5 ], [ 2, 4, 6 ] ]

console.log([...numerosImpares, ...numerosPares]); // [ 1, 3, 5, 2, 4, 6 ]

const [num1, num2] = [1, 2, 3, 4, 5];

console.log(num1, num2); // 1 2

const [n1, n2, ...resto] = [1, 2, 3, 4, 5];

console.log(n1, n2, resto); // 1 2 [ 3, 4, 5 ]

const [valorPadrao = 'Ju'] = []; 

console.log(valorPadrao); // Ju

const pessoa = {
    nome: 'Saulo',
    idade: 24
}

const pessoaComTelefone = {
    ...pessoa,
    telefone: 123456789
}

console.log(pessoa, pessoaComTelefone); // { nome: 'Saulo', idade: 24 } { nome: 'Saulo', idade: 24, telefone: 123456789 }

const { nome, idade, telefone } = pessoaComTelefone;

console.log(nome, idade, telefone); // Saulo 24 123456789

function imprimeDados({nome, idade, telefone}) {
    console.log(nome, idade, telefone); 
}

imprimeDados(pessoaComTelefone); // Saulo 24 123456789
