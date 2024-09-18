const arrayNums = [1, 2, 3, 4, 5];

// arrayNums.forEach(num => {
//     num = num * 2;
// }); // não funciona pois o foreach não modifica valores do array atual

function multiplicarPorDez(num) {
    return num * 10;
}

function multiplicarPeloIndex(num, index) {
    return num * index;
}

const arrayMultiplicadoPorDez = arrayNums.map(multiplicarPorDez);

console.log(arrayMultiplicadoPorDez);

console.log(arrayNums.map(multiplicarPeloIndex));
