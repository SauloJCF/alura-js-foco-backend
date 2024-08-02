console.log('Ex. 01');
console.log('---');

const saldo = 100;
const deposito = 20;
const saque = 30;
let operacao;

operacao = saldo + deposito;

console.log(`Novo saldo: R$ ${operacao.toFixed(2)}`);

operacao -= saque;

console.log(`Novo saldo: R$ ${operacao.toFixed(2)}`);

console.log('---');
console.log('Ex. 02');
console.log('---');

function parOuImpar(numero) {
    return numero % 2 === 0 ? 'Par' : 'Impar';
}

console.log(parOuImpar(5));
console.log(parOuImpar(4));

console.log('---');
console.log('Ex. 03');
console.log('---');

const usuarioLogado = true;
const usuarioAdministrador = true;

if (usuarioLogado && usuarioAdministrador) {
   console.log('Pode acessar a funcionalidade!'); 
} else {
    console.log('Não pode acessar a funcionalidade!');
}

console.log('---');
console.log('Ex. 04');
console.log('---');

const possuiSaldoSuficiente = true;
const pagouAntecipadamente = false;

if (possuiSaldoSuficiente || pagouAntecipadamente) {
    console.log('Pode levar o produto!');
} else {
    console.log('Não ode levar o produto!');    
}

console.log('---');
console.log('Ex. 05');
console.log('---');

const idadeMinima = 18;
const idadeUsuario = 15;

if (idadeMinima <= idadeUsuario) {
    console.log('Pode comprar ingresso.');
} else {
    console.log('Não pode comprar ingresso.');    
}