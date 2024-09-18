const valor = 50;
const texto = valor < 50 ? 'valor insuficiente' : 'valor suficiente';

console.log(texto);

const matriculaAtiva = true;

function verificaMatriculaAtiva() {
    return matriculaAtiva ? 'Matrícula ativa no sistema.' : 'Matrícula inativa no sistema.';
}

console.log(verificaMatriculaAtiva());

console.assert(verificaMatriculaAtiva() === 'Matrícula ativa no sistema.');

let idadeEstudante = 16;
let precisaDeAutorizacao;

precisaDeAutorizacao = idadeEstudante < 18;

console.log(precisaDeAutorizacao);