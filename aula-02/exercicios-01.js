console.log('EX01');
console.log('');

const numero = 1;
const texto = 'Ola mundo';
const feliz = false;

console.log(typeof(numero));
console.log(typeof(texto));
console.log(typeof(feliz));

console.log('');
console.log('EX02');
console.log('');

const nome = 'Saulo';
const sobrenome = 'Figueiredo';
const nomeCompletoConcatenado = nome + ' ' + sobrenome;
const nomeCompletoTemplateString = `${nome} ${sobrenome}`;

console.log(nomeCompletoConcatenado);
console.log(nomeCompletoTemplateString);

console.log('');
console.log('EX03');
console.log('');

const polegadas = 24;
const objeto = 'monitor';
const frasePolegadasObjeto = `O ${objeto} tem ${polegadas} polegadas.`;

console.log(frasePolegadasObjeto);

console.log('');
console.log('EX04');
console.log('');

let testeTipagemDinamica = 5;

console.log(testeTipagemDinamica);

testeTipagemDinamica = 'Teste';

console.log(testeTipagemDinamica);

console.log('');
console.log('EX05');
console.log('');

var testeEscopoVarForaBloco = 'Var Fora Bloco';

if (0 == 0) {
    var testeEscopoVarDentroBloco = 'Var Dentro Bloco';  
    console.log(testeEscopoVarForaBloco);
    console.log(testeEscopoVarDentroBloco);
}

console.log(testeEscopoVarForaBloco);
console.log(testeEscopoVarDentroBloco);

let testeEscopoLetForaBloco = 'Let Fora Bloco';

if (0 == 0) {
    let testeEscopoLetDentroBloco = 'Let Dentro Bloco';  
    console.log(testeEscopoLetForaBloco);
    console.log(testeEscopoLetDentroBloco);
}

console.log(testeEscopoLetForaBloco);
// console.log(testeEscopoLetDentroBloco); // não existe fora do escopo

console.log('');
console.log('EX06');
console.log('');

const estaChovendo = true;

if (estaChovendo) {
    console.log('Você precisa levar um guarda-chuva!');
} else {
    console.log('Até mais tarde!');
}
