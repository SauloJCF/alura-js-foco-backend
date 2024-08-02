const nota = 9;
const faltas = 5;

if (nota < 7 || faltas > 4) {
    console.log('Reprovado.');
} else {
    console.log('Aprovado');
}

if (nota >= 7 && faltas <= 4) {
    console.log('Aprovado.');
} else {
    console.log('Reprovado.');
}