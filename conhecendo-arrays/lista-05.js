console.log('----- Ex 01 -----\n');

function transformarEmUmUnicoArray(...params) {
    return params.flat();
}

console.log(transformarEmUmUnicoArray([0, 2, 3], [7, 9], [11, 19]));

console.log('\n----- Ex 02 -----\n');

const valores = [1, 3, 5, 7, 9];

const soma = valores.reduce((acumulador, value) => acumulador += value, 0);

console.log(`A soma dos elementos do array é ${soma}.`);

console.log('\n----- Ex 03 -----\n');

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];

const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];

const setListaCores = new Set([...coresLista1, ...coresLista2]);

const listaCoresSemDuplicatas = [...setListaCores];

console.log(`Cores do array: ${listaCoresSemDuplicatas}.`);

console.log('\n----- Ex 04 -----\n');

function retornaNumerosPares(arrayNumeros) {
    return arrayNumeros.filter((numero) => numero % 2 === 0);
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(`Array original: ${array}.`);

console.log(`Números pares: ${retornaNumerosPares(array)}.`);

console.log('\n----- Ex 05 -----\n');

function retornaMultiplosTresMaioresCinco(arrayNumeros) {
    return arrayNumeros.filter(numero => (numero % 3 === 0 && numero > 5));
}

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(`Array original: ${array2}.`);

console.log(`Múltiplos de 3 maiores do que 5: ${retornaMultiplosTresMaioresCinco(array2)}.`);

console.log('\n----- Ex 06 -----\n');

function somaValores(arrayNumeros) {
    return arrayNumeros.reduce((acumulador, numero) => acumulador += numero, 0);
}

console.log(`Soma dos elementos: ${somaValores(array)}`);
console.log(`Soma dos elementos: ${somaValores(array2)}`);
