console.log('----- Ex 01 -----\n');

function concatenarArrays(array1, array2) {
    return array1.concat(array2);
}

const equipesF1Antigas = ['Ferrari', 'Maclarem', 'Willians', 'Sauber', 'Aston Martin'];

const equipesF1Novas = ['Red Bull', 'Alpine', 'Toro Rosso', 'Mercedes', 'Haas'];

const todasEquipesF1 = concatenarArrays(equipesF1Antigas, equipesF1Novas);

console.log(todasEquipesF1);

console.log('----- Ex 02 -----\n');

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const parteNumeros = numeros.slice(3, 8);

console.log(parteNumeros);

console.log('----- Ex 03 -----\n');

const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];

frutas.splice(2, 2, 'Kiwi', 'Pêssego');

console.log(frutas);

console.log('----- Ex 04 -----\n');

const menuPrincipal = ['Macarrão Funcional', 'Strogonoff Light', 'Parmegiana', 'Feijoada Fitness'];
const menuDeSobremesas = ['Sorvete', 'Pudim', 'Pave'];

const menuCompleto = menuPrincipal.concat(menuDeSobremesas);

console.log(menuCompleto);

console.log('----- Ex 05 -----\n');

const matriz = [];

let valor = 1;

for (let linha = 0; linha < 3; linha++) {
    const arrayLinha = [];
    for (let coluna = 0; coluna < 3; coluna++) {
        arrayLinha.push(valor);
        valor++;
    }
    matriz.push(arrayLinha);
}

console.table(matriz);

console.log('----- Ex 06 -----\n');

console.log(matriz[1][2]);

console.log('----- Ex 07 -----\n');

matriz[2][1] = 15;

console.table(matriz);