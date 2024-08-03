// console.log(estudanteReprovado(10, 10)); // Gera erro pela falta de inicialização

const estudanteReprovado = function (notaFinal, faltas) {
    if (notaFinal < 7 || faltas > 4) {
        return true;    
    } else {
        return false;
    }
}

console.log(typeof estudanteReprovado);

console.log(estudanteReprovado(10, 10));

console.log(estudanteReprovado(10, 0));