console.log('----- Ex 01 -----\n');

const arrayForOf = ['a', 'b', 'c', 'd', 'e'];

for (const elementForOf of arrayForOf) {
    console.log(elementForOf);
}

console.log('\n----- Ex 02 -----\n');

function exibirIndiceEElemento(array) {
    for (let index = 0; index < array.length; index++) {
        console.log(`Array[${index}] = ${array[index]}`);        
    }
}

exibirIndiceEElemento(arrayForOf);

console.log('\n----- Ex 03 -----\n');

function somaElementos(arrayNumeros) {
    let soma = 0;
    for (const numero of arrayNumeros) {
        soma += numero;
    }

    return soma;
}

const numeros = [10, 54, 7, 13, 56];

console.log(`A soma dos elementos é ${somaElementos(numeros)}.`);

console.log('\n----- Ex 04 -----\n');

function retornarMaiorEMenor(arrayNumeros) {
    let menor = arrayNumeros[0]; 
    let maior = arrayNumeros[0];

    for (const numero of arrayNumeros) {
       if (menor > numero) 
        menor = numero;
       if (maior < numero)
        maior = numero;
    }

    return `O menor número é ${menor} e o maior número é ${maior}.`;
}

console.log(retornarMaiorEMenor(numeros));

console.log('\n----- Ex 05 -----\n');

const todosNumeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];

for (let index = 0; index < todosNumeros.length; index++) {
    if (todosNumeros[index] % 2 === 0)
        console.log(todosNumeros[index]);    
}

console.log('\n----- Ex 06 -----\n');

let soma = 0;

for (let index = 0; index < todosNumeros.length; index++) {
    soma += todosNumeros[index];
}

const media = soma/todosNumeros.length;

console.log(`A média é ${media}`);
