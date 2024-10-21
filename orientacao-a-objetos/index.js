import User from './User.js';
import Admin from './Admin.js';
import Docente from './Docente.js';

const novoUsuario = new User('Juliana', 'j@j.com', '2024-01-01');

console.log(novoUsuario.exibeInfos());

novoUsuario.nome = 'Marcia';

console.log(novoUsuario);

console.log(novoUsuario.nome);


