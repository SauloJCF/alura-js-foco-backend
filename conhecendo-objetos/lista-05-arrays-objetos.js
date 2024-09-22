console.log('\nEx. 01 .................\n');

const biblioteca = [
    { id: 1, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", anoPublicacao: 1954 },
    { id: 2, titulo: "Dom Quixote", autor: "Miguel de Cervantes", anoPublicacao: 1605 },
    { id: 3, titulo: "1984", autor: "George Orwell", anoPublicacao: 1949 }
];

function encontrarLivroPorId(id) {
    const livroEncontrado = biblioteca.find(livro => livro.id === id);

    return livroEncontrado ? livroEncontrado : null;
}

console.log('Livro com id Existente (2):');
console.log(encontrarLivroPorId(2));

console.log('Livro com id Inexistente (5):');
console.log(encontrarLivroPorId(5));

console.log('\nEx. 02 .................\n');

const catalogoFilmes = [
    { id: 1, titulo: "Matrix", diretor: "Lana Wachowski", anoLancamento: 1999 },
    { id: 2, titulo: "Jurassic Park", diretor: "Steven Spielberg", anoLancamento: 1993 },
    { id: 3, titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010 }
];

function filtrarFilmesPorAno(ano) {
    return catalogoFilmes.filter(filme => filme.anoLancamento === ano);
}

console.log('Filmes de 2010:');
console.log(filtrarFilmesPorAno(2010));

console.log('Filmes de 2015:');
console.log(filtrarFilmesPorAno(2015));

console.log('\nEx. 03 .................\n');

const listaProdutos = [
    { id: 1, nome: "Camiseta", preco: 25.99 },
    { id: 2, nome: "Calça Jeans", preco: 49.99 },
    { id: 3, nome: "Tênis", preco: 79.99 },
    { id: 4, nome: "Boné", preco: 15.99 }
];

function filtrarOrdenarProdutosPorPreco(maxPreco) {
    const produtosMaxPreco = listaProdutos.filter(produto => produto.preco <= maxPreco);

    return produtosMaxPreco.sort((a, b) => a.preco - b.preco);
}

console.log('Produtos com preço menor ou igual a 49,99');

console.log(filtrarOrdenarProdutosPorPreco(49.99));

console.log('Produtos com preço menor ou igual a 49,98');

console.log(filtrarOrdenarProdutosPorPreco(49.98));

console.log('\nEx. 04 .................\n');

const animais = [
    { id: 1, nome: "Leão", especie: "Felino", idade: 5 },
    { id: 2, nome: "Elefante", especie: "Mamífero", idade: 10 },
    { id: 3, nome: "Pinguim", especie: "Ave", idade: 3 }
];

function comparaIdadeCrescente(a, b) { return a.idade - b.idade };

function comparaIdadeDecrescente(a, b) { return b.idade - a.idade };

function comparaNomeCrescente(a, b) {
    if (a.nome > b.nome) return 1;
    if (a.nome < b.nome) return -1;
    return 0;
};

function comparaNomeDecrescente(a, b) {
    if (a.nome > b.nome) return -1;
    if (a.nome < b.nome) return 1;
    return 0;
};

function ordenaAnimais(metodoOrdenacao) {
    return animais.sort(metodoOrdenacao);
}

console.log('Ordena por idade crescente:');
console.log(ordenaAnimais(comparaIdadeCrescente));

console.log('Ordena por idade decrescente:');
console.log(ordenaAnimais(comparaIdadeDecrescente));

console.log('Ordena por nome crescente:');
console.log(ordenaAnimais(comparaNomeCrescente));

console.log('Ordena por nome decrescente:');
console.log(ordenaAnimais(comparaNomeDecrescente));


console.log('\nEx. 05 .................\n');

const departamentos = [
    {
        id: 1,
        nome: "Vendas",
        funcionarios: [
            { id: 101, nome: "Ana", cargo: "Vendedor" },
            { id: 102, nome: "Carlos", cargo: "Gerente de vendas" }
        ]
    },
    {
        id: 2,
        nome: "TI",
        funcionarios: [
            { id: 201, nome: "Maria", cargo: "Desenvolvedor" },
            { id: 202, nome: "João", cargo: "Analista de sistemas" }
        ]
    }
];

function encontrarFuncionarioPorId(id) {
    let funcionario = null;

    departamentos.forEach(departamento => {
        if (departamento.funcionarios.some(funcionario => funcionario.id === id))
            funcionario = departamento.funcionarios.find(funcionario => funcionario.id === id);
    });

    return funcionario ? funcionario : 'Funcionário não foi encontrado!';
}

console.log('Funcionário Id 102:');
console.log(encontrarFuncionarioPorId(102));

console.log('Funcionário Id 105:');
console.log(encontrarFuncionarioPorId(105));
