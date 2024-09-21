console.log('Ex. 01 e 02 ----------------');

const dados = require('./json/dados.json');

console.log(dados);

console.log(dados.produtos);

console.log(dados.usuarios);

console.log('Ex. 03 ----------------');

const produto = {
    id: 2,
    nome: 'T-Shirt Insider',
    preco: 80.0
};

const stringProduto = JSON.stringify(produto);

console.log(stringProduto);

console.log('Ex. 04 ----------------');

const animais = require('./json/animais.json');

const objAnimais = JSON.parse(JSON.stringify(animais));

console.log(typeof objAnimais);


objAnimais.animais.push({
    id: 4,
    nome: 'Gato',
    tipo: 'Mamífero',
    habitat: 'Apartamentos, Casas'
});

objAnimais.animais[2].habitat = 'vários';

objAnimais.animais.splice(1,1);

const stringAnimais = JSON.stringify(objAnimais, null, 2);

console.log(objAnimais);

console.log(stringAnimais);

console.log('Ex. 05 ----------------');

const pessoaOriginal = {
    id: 1,
    nome: "Alice",
    idade: 30
}

function clonarObjeto(objOriginal) {
    return JSON.parse(JSON.stringify(objOriginal));
}

const copiaPessoa = clonarObjeto(pessoaOriginal);

copiaPessoa.nome = 'Dolores';

console.log(pessoaOriginal);
console.log(copiaPessoa);

