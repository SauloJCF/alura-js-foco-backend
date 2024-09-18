const livro = {
    titulo: '',
    autor: '',
    anoPublicacao: 0,
    genero: '',
    avaliacao: null
}

livro.titulo = 'Vinte Mil Léguas Submarinas';
livro.genero = 'Ficção Científica';
livro.anoPublicacao = 1869;
livro.autor = 'Julio Verne';

console.log('Ex. 01\n');


console.log(livro);

console.log('\nEx. 02\n');

const anoAtual = new Date().getFullYear();

livro.idadePublicacao = anoAtual - livro.anoPublicacao;

livro.mostrarDetalhes = `O livro "${livro.titulo}" foi escrito por ${livro.autor} em ${livro.anoPublicacao}, ou seja, tem ${livro.idadePublicacao} anos. Seu gênero é ${livro.genero}.`;

console.log(livro.mostrarDetalhes);

console.log('\nEx. 03\n');

const propriedadesObjLivro = ['titulo', 'autor', 'genero', 'anoPublicacao', 'idadePublicacao'];

propriedadesObjLivro.forEach(prop => console.log(`'${prop}': '${livro[prop]}'`));

console.log('\nEx. 04\n');

livro.avaliacao = 11;
const avaliacaoLivro = 10;

if (livro.avaliacao === null) {
    livro.avaliacao = avaliacaoLivro;
} else {
    console.log('O livro já possui avaliação.');
}

console.log(`Avaliação do livro: ${livro.avaliacao.toFixed(2)}.`);

console.log('\nEx. 05\n');

livro.genero = 'Aventura';

console.log(`Gênero do livro: "${livro.genero}".`);

console.log('\nEx. 06\n');

delete livro.avaliacao;

console.log(livro);
