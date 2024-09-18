const notas = [7, 7, 8, 9];

function adicionaElementoDezEImprimeArrays(array) {
    array.push(10);
    console.log(array);
    console.log(notas);    
}

adicionaElementoDezEImprimeArrays([...notas]);
adicionaElementoDezEImprimeArrays(notas);