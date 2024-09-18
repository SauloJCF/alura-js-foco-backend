console.log('----- Ex 01 -----\n');

const arrayEx1 = [10, 5.7, 8.6, 9.6, 10.0];

arrayEx1.forEach((value, index) => console.log(`Array[${index}] =  ${value}`));

console.log('\n----- Ex 02 -----\n');

function excutarOperacaoNoArray(array, method) {
    array.forEach(method);
}

function imprimirValor(value) {
    console.log(value);
}

const arrayEx2 = ['Sérgio', 'Warley', 'Jones', 'Marcus'];

excutarOperacaoNoArray(arrayEx2, imprimirValor);

console.log('\n----- Ex 03 -----\n');

const arrayEx3 = [32, 16, 45, 54, 20];

function retornaPosicaoItemArray(array, item) {
    return array.indexOf(item);
}

console.log(retornaPosicaoItemArray(arrayEx3, 0));

console.log(retornaPosicaoItemArray(arrayEx3, 20));

console.log('\n----- Ex 04 -----\n');

const nomesTurmaA = [
    'João Silva',
    'Maria Santos',
    'Pedro Almeida'
];

const nomesTurmaB = [
    'Carlos Oliveira',
    'Ana Souza',
    'Lucas Fernandes'
];

const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB);

function buscarAluno(nomeAluno) {
    return todasAsTurmas.find((aluno) => aluno === nomeAluno) === undefined ? 'Aluno não encontrado' : todasAsTurmas.find((aluno) => aluno === nomeAluno);
}

console.log(buscarAluno('Ana Souza'));

console.log(buscarAluno('Bernadete'));

console.log('\n----- Ex 05 -----\n');

const numeros = [6, 9, 12, 15, 18, 21];

numeros.forEach(numero => console.log(numero * 3));

function encontrarIndice(array, valor) {
    return array.findIndex(elemento => elemento === valor);
}

console.log('Posição dos elementos: ');


console.log(`18: ${encontrarIndice(numeros, 18)}`);

console.log(`8: ${encontrarIndice(numeros, 8)}`);