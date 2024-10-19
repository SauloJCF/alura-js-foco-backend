function User(nome, email) {
    this.nome = nome
    this.email = email

    this.exibirInfos = function () {
        return `${this.nome}, ${this.email}`
    }
};

function Admin(role) {
    User.call(this, 'Carla', 'c@c.com')
    this.role = role || 'estudante'
};

Admin.prototype = Object.create(User.prototype)
const carla = new Admin('admin')
console.log(carla.exibirInfos());
console.log(carla.role);

const user = {
    init: function (nome, email) {
        this.nome = nome
        this.email = email
    },
    exibirInfos: function (user) {
        return `${user.nome}, ${user.email}`
    }
};

const juliana = Object.create(user);
console.log(juliana.exibirInfos({ nome: 'Juliana', email: 'j@j.com' }));

console.log(user.isPrototypeOf(juliana));

console.log(juliana.nome, juliana.email);//undefined


juliana.init('Juliana', 'j@j.com')
console.log(juliana.nome, juliana.email);