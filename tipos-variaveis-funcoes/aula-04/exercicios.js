console.log('Ex. 01');
console.log('---');

function saudar(nome) {
    return `Saudações, rei ${nome}, bem vindo(a) a nossa humilde nação!`;
}

console.log(saudar('Vicerys'));

console.log('---');
console.log('Ex. 02');
console.log('---');

function maiorDeIdade(idade) {
    return idade >= 18;
}

console.log(maiorDeIdade(17));
console.log(maiorDeIdade(18));
console.log(maiorDeIdade(19));

console.log('---');
console.log('Ex. 03');
console.log('---');

function ehPalindrono(palavra) {
    const reverse = (palavra) => palavra.split('').reverse().join('');
    return palavra === reverse(palavra);
}

console.log(ehPalindrono('papel'));
console.log(ehPalindrono('ovo'));

console.log('---');
console.log('Ex. 04');
console.log('---');

function maiorNumero(a, b, c) {
    if (a > b && a > c)
        return a;
    else if (b > a && b > c) 
        return b;
    else
        return c;
}

console.log(maiorNumero(1, 2, 3));
console.log(maiorNumero(1, 3, 2));
console.log(maiorNumero(3, 2, 1));
console.log(maiorNumero(3, 3, 3));

console.log('---');
console.log('Ex. 05');
console.log('---');

const calculaPotencia = (base, expoente) => Math.pow(base, expoente);

console.log(calculaPotencia(5, 0));
console.log(calculaPotencia(5, 1));
console.log(calculaPotencia(5, 2));
console.log(calculaPotencia(5, 3));
console.log(calculaPotencia(5, 4));
console.log(calculaPotencia(5, 5));