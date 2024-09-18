const alunos = ['Ana', 'Clara', 'Maria', 'Maria', 'João', 'João', 'João'];

const setAlunosSemRepeticao = new Set(alunos);

const alunosSemRepeticao = [...setAlunosSemRepeticao];

// const alunosSemRepeticao = [...new Set(alunos)]; // também funciona

console.log(setAlunosSemRepeticao);
console.log(alunosSemRepeticao);

