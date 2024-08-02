console.log('Ex. 01');
console.log('---');

const frase = 'Hello world!';

console.log(frase.length);
console.log(frase.toUpperCase());

console.log('---');
console.log('Ex. 02');
console.log('---');

let varUndefined;
const varNula = null;

console.log(`"${varUndefined}": "${typeof varUndefined}"`);
console.log(`"${varNula}": "${typeof varNula}"`);

console.log('---');
console.log('Ex. 03');
console.log('---');

const numero = 4.5;
const texto = '4.5'
const boleano = true;

console.log(`${numero}: "${typeof numero}", "${texto}": "${typeof texto}", "${boleano}": "${typeof boleano}"`);

console.log('---');
console.log('Ex. 04');
console.log('---');

console.log(`"${String(numero)}": "${typeof String(numero)}", ${Number(texto)}: "${typeof Number(texto)}"`);

console.log('---');
console.log('Ex. 05');
console.log('---');

const meuTexto = 'Hello world!';

console.log(meuTexto.toLowerCase());
console.log(meuTexto.toUpperCase());
console.log(meuTexto.slice(0, 5));
console.log(meuTexto.length);
console.log(meuTexto.charAt(4));
console.log(meuTexto.split(' ')[0]);
console.log(meuTexto.includes('Hello'));
console.log(meuTexto.repeat(2));
console.log(meuTexto.padEnd(20,'0'));
console.log(meuTexto.padStart(20,'0'));
console.log(meuTexto.indexOf('world'));
console.log(meuTexto.replace('world', 'Bread'));
console.log(meuTexto.substring(6));