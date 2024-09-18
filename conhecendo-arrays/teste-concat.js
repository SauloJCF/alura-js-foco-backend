const nomes = ['Pedro', 'Joaquim', 'Paulo', 'Mateus', 'João'];

let arrayFinal = nomes.concat(1);

arrayFinal[0] = 'Frierem';

console.log(nomes);

arrayFinal = arrayFinal.concat(1.3);

arrayFinal = arrayFinal.concat('Teste');
arrayFinal = arrayFinal.concat('String', 4);

arrayFinal = arrayFinal.concat(['SubArray1', 5], ['SubArray2', 6]);

arrayFinal = arrayFinal.concat([,]);

arrayFinal = arrayFinal.concat([10, [54, 78]]);

console.log(arrayFinal);