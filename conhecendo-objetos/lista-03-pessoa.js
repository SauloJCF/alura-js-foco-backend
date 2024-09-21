console.log('Ex. 01');

const pessoa = {
    nome: 'Frieren',
    notas: [9, 8.9, 10, 9.3],

    calcularMedia: function () {
        return this.notas.reduce((total, nota) => total + nota, 0) / this.notas.length;
    },

    classificarDesempenho: function () {
        const media = this.calcularMedia();

        if (media >= 9) {
            return 'Desempenho excelente!';
        } else if (media >= 7.5) {
            return 'Bom desempenho!';
        } else if (media >= 6) {
            return 'Desempenho regular!';
        } else {
            return 'Desempenho insuficiente!';
        }
    }
};

console.log(`O(a) aluno(a) ${pessoa.nome} tem média ${pessoa.calcularMedia().toFixed(2)}.`);

console.log(`O(a) aluno(a) ${pessoa.nome} tem classificação: ${pessoa.classificarDesempenho()}`);

console.log('Ex. 02');

const carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    ano: 1999,
    cor: 'Prata',
};

console.log('Dados carro:');


for (const chave in carro) {
    console.log(`${chave}: ${carro[chave]}`);
}

carro.tabela = 8000;
carro.valorMultas = 0;
carro.documentoPago = true;
carro.acessorios = 'escada';

console.log('Dados carro (atualizado):');

for (const chave in carro) {
    console.log(`${chave}: ${carro[chave]}`);
}

console.log('Ex. 03 ---------------');

carro.ligado = false;

carro.ligar = function () {
    if (this.ligado) {
        console.log('O carro já está ligado!');
    } else {
        this.ligado = true;
        console.log('O carro foi ligado!');
    }
}

carro.desligar = function () {
    if (this.ligado) {
        this.ligado = false;
        console.log('O carro foi desligado!');
    } else {
        console.log('O carro já está desligado!');
    }
}

carro.obterDetalhes = function () {
    return `Marca: ${this.marca}, 
    Modelo: ${this.modelo}
    Ano: ${this.ano}
    Cor: ${this.cor}
    O carro está ${this.ligado ? 'ligado' : 'desligado'}.`
}

console.log(carro.obterDetalhes());

carro.ligar();
carro.ligar();

console.log(carro.obterDetalhes());

carro.desligar();
carro.desligar();

console.log(carro.obterDetalhes());

console.log('Ex. 04 --------------------');

Object.defineProperty(carro, 'placa', {
    value: 'JGK-1898',
    enumerable: false
});

console.log('Propriedades enumeráveis carro:');


for (let chave in carro) {
    console.log(chave);
}

console.log(Object.keys(carro)); // também retorna apenas propriedades enumeráveis

console.log(`Placa: ${carro.placa}`);

console.log('Ex. 05 --------------------');

const carroNovo = {
    marca: 'Pegout',
    modelo: '207',
    Ano: 2017,
    cor: 'prata'
};

const carroComNovosDetalhes = { ...carro, ...carroNovo };

console.log(carroComNovosDetalhes);

carroComNovosDetalhes.acessorios = 'problemas técnicos';

console.log(carro);

console.log(carroComNovosDetalhes);