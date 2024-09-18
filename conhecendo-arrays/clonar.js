// let nota = 7;
// let novaNota = nota;

// nota = 10;

// console.log(nota); // 10
// console.log(novaNota); // 7

const notas = [7, 7, 8, 9];
// const novasNotas = notas;

// notas.push(10);

// console.log(notas); // [7, 7, 8, 9, 10]
// console.log(novasNotas); // [7, 7, 8, 9, 10]

const novasNotas = [...notas, 10];

console.log(notas);
console.log(novasNotas);
