const numeros = [43, 50, 65, 12]

function operacaoNumerica(acum, atual) {
    return acum + atual;
}
 
//const soma = numeros.reduce((acum, atual) => atual + acum, 0)

const soma = numeros.reduce(operacaoNumerica, 0);

console.log(soma) //170
