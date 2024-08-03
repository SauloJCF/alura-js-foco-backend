// parâmetros/argumentos
// retorno
// console.log(exibeInfosEstudante('Caroline', 10)); //funciona normalmente devido ao hoisting do JS

function exibeInfosEstudante(nome, nota) {
  return `o nome é ${nome} e a nota é ${nota}`;
}

console.log(exibeInfosEstudante('Caroline', 10));
console.log(exibeInfosEstudante('Ana', 7));