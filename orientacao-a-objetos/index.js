import User from './User.js';
import Admin from './Admin.js';
import Docente from './Docente.js';

const novoUsuario = new User('Juliana', 'j@j.com', '2024-01-01');
const admin = new Admin('Rodrigo', 'r@r.com', '2024-01-01');
const docente = new Docente('Carlos', 'c@c.com', '2024-01-01');

console.log(novoUsuario.exibeInfos('estudante'));
console.log(admin.exibeInfos('admin'));
console.log(docente.exibeInfos('docente'));

console.log(User.exibeInfosGenericas('Cláudio', 'd@d.com'));



// console.log(novoUsuario.exibeInfos());

// novoUsuario.nome = 'Julia';

// console.log(novoUsuario.exibeInfos());

// novoUsuario.nome = '';

// console.log(novoUsuario.exibeInfos());



// console.log(admin);

// console.log(admin.nome);


//console.log(admin.exibeInfos());

