// Number
console.log(Number('1'));
console.log(Number('alura'));
console.log(Number(undefined));
console.log(Number(null));

// Number.parseInt e Number.parseFloat
console.log(Number.parseInt('4'));
console.log(Number.parseInt('4.5'));
console.log(Number.parseInt('4.5abc'));

console.log(Number.parseFloat('4'));
console.log(Number.parseFloat('4.5'));
console.log(Number.parseFloat('4.5abc'));

// Operador unário
console.log(+'45');
console.log(+true);
console.log(typeof +'45');
console.log(typeof +true);

// String()
console.log(String(2));
console.log(typeof String(2));
console.log(String(undefined));
console.log(typeof String(undefined));
console.log(String(true));
console.log(typeof String(true));

// includes

let texto = 'estudando JavaScript';
console.log('estudando JavaScript'.includes('Java'));
console.log(texto.includes('Java'));

// toUpperCase
console.log('teste maiúsculo'.toUpperCase());


// toLowerCase
console.log('TESTE MINÚSCULO'.toLowerCase());