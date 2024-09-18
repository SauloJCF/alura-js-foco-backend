const notas = [10, 8, 7, 5.5, 3];

console.log(notas.pop());

console.log(notas);

const media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length;

console.log(media.toFixed());