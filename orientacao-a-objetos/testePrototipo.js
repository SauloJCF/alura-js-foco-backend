let user = {
    perfil: 'estudante'
};

let estudante = {
    nome: 'juliana'
};

Object.setPrototypeOf(estudante, user);

console.log(estudante.nome); // 'juliana'
console.log(estudante.perfil); //'estudante'

user.ativo = true;

console.log(estudante.ativo);

// ------------

function User() {}
User.prototype.perfil = 'estudante'
let estudante2 = new User();

console.log(estudante2.perfil) //'estudante'
