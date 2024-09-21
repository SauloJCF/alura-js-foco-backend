const objetoOriginal = { chave: 'valor' };
const copiaReferencia = objetoOriginal;

copiaReferencia.chave = 'novoValor';
console.log(copiaReferencia.chave); // Saída: novoValor
console.log(objetoOriginal.chave); // Saída: novoValor

console.log();

const objetoOriginal2 = { chave: 'valor' };
const copiaProfunda2 = JSON.parse(JSON.stringify(objetoOriginal2));

copiaProfunda2.chave = 'novoValor';
console.log(copiaProfunda2.chave); // Saída: valor
console.log(objetoOriginal2.chave); // Saída: valor
