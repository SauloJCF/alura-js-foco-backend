const objetoOriginal = {a: 1, b: 2};
const objetoParaCopiar = {b: 3, c: 4};

const objetoFusionado = Object.assign({}, objetoOriginal, objetoParaCopiar);

console.log(objetoFusionado);
