const meuSymbol = Symbol();

const meuSymbolComDescricao = Symbol('descricao_do_symbol');

const outroSymbol = Symbol();

console.log(meuSymbol == outroSymbol);

const obj = {
    [meuSymbol]: 'valor_do_symbol'
}

console.log(obj[meuSymbol]);