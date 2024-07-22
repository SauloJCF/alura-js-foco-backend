if (1 > 0) {
    // var variavelDoIF = 'Valor atribuido dentro do IF'; // pode ser acessado fora do escopo do if
    let variavelDoIF = 'Valor atribuido dentro do IF'; // não pode ser acessado fora do escopo do if
    console.log(variavelDoIF);
}

// variavelDoIF = 'Valor atribuido fora do IF'; //o javascript cria automaticamente uma variável utilizando a palavra reservada var

console.log(variavelDoIF);