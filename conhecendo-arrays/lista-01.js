console.log('---- Ex 01 ----');

const arrayEsparso = [,,,,,,,,];

console.log(arrayEsparso);
console.log(arrayEsparso.length);

arrayEsparso[1] = 10;
arrayEsparso[3] = 8;
arrayEsparso[7] = 3;

console.log(arrayEsparso);
console.log(arrayEsparso.length);

console.log('---- Ex 02 ----');

const arrayTesteAtribuicao = ['Podrão', 'Porção', 'Frango Frito', 'Peixe', 'Pizza'];

console.log('Antes: [' + arrayTesteAtribuicao + ']');

arrayTesteAtribuicao[0] = 'Hamburger';

console.log('Depois: [' + arrayTesteAtribuicao + ']');

console.log('---- Ex 03 ----');

const meuArray = [];

meuArray.push(5, 6, 8);

console.log(meuArray);

meuArray[0] = meuArray[0] * 2;

console.log(meuArray);

console.log('---- Ex 04 ----');

const tambemEhMeuArray = [];

tambemEhMeuArray.push(...meuArray); //spread sintax

console.log(tambemEhMeuArray);

console.log('---- Ex 05 ----');

const clinica = [];

clinica.push('Gato');
clinica.push('Cachorro');
clinica.push('hamster');

console.log(clinica);

clinica.pop();
clinica.pop();
clinica.pop();

console.log(clinica);