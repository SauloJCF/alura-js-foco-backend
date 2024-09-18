function dividir(dividendo, divisor) {
    if (divisor !== 0) {
        return dividendo / divisor;
    } else {
        return 'Não é permitido dividir por zero.';
    }
}

function soma(v1, v2) {
    v1 + v2;
}

const dividendo = 10;
const divisor = 2;

let resultado = dividir(dividendo, divisor);

console.log(resultado);

resultado = dividir(divisor, dividendo);

console.log(resultado);

resultado = soma(6, 7);

console.log(`O resultado da soma é ${resultado}!`);

console.log(dividir(4, 0));