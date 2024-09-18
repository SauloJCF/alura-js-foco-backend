const estudanteReprovado = (notaFinal, faltas) => {
    if (notaFinal < 7 || faltas > 4) {
        return true;    
    } else {
        return false;
    }
}

console.log(typeof estudanteReprovado);

console.log(estudanteReprovado(10, 10));

console.log(estudanteReprovado(10, 0));

const cumprimentar = (nome) => `Olá, ${nome}!`;

console.log(cumprimentar('Jairo'));

const esquivar = () => console.log('Esquivando como no Elden Ring!');

esquivar();