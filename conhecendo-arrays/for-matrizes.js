const notas = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];

let somaDasNotas = 0;
let quantElementos = 0;

for (let i = 0; i < notas.length; i++) {
    for (let j = 0; j < notas[i].length; j++) {
        quantElementos++;
        somaDasNotas += notas[i][j];
    }
}

const media = somaDasNotas / quantElementos;

console.log(`A média é ${media.toFixed(2)}`);


