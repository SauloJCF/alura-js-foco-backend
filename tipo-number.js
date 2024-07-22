const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = -2;
const notaQuartoBi = "5.2";

const somaIncorreta =
  notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi;

console.log("Soma incorreta: " + somaIncorreta);

const somaCorreta =
  notaPrimeiroBi +
  notaSegundoBi +
  notaTerceiroBi +
  Number.parseFloat(notaQuartoBi);

console.log("Soma correta: " + somaCorreta);

const media = somaCorreta / 4;

console.log("A média é " + media);

// NAN

console.log('');
console.log('NAN'); // NaN
console.log('');

console.log(5 * "a"); // NaN
console.log(5 * "5"); // 25

const numero = 10;
const nome = "Ana";

console.log(Number.isNaN(numero)); // false
console.log(Number.isNaN(nome)); // false - diferente
console.log(Number.isNaN(NaN)); // true


console.log(isNaN(numero)); // false
console.log(isNaN(nome)); // false - diferente
console.log(isNaN(NaN)); // true

// bases hexadecimal e octal

console.log('');
console.log('Bases hexadecimal e octal'); // NaN
console.log('');


let numHex = 0xa; // Representa o número 10 em hexadecimal
console.log(numHex);

let numOctal = 0o10; // Isso representa o número 8 em octal
console.log(numOctal);
