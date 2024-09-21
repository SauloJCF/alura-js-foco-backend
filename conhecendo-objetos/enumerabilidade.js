const meuObjeto = {
    nome: 'saulo'
}

Object.defineProperty(meuObjeto, 'codigo', {
    value: 4,
    enumerable: false
});

for (const chave in meuObjeto) {
    console.log(chave);
    
}