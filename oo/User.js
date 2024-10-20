class User {
    constructor(nome, email, nascimento, role, ativo = true) {
        this.nome = nome;
        this.email = email;
        this.nascimento = nascimento;
        this.role = role || 'estudante';
        this.ativo = ativo;
    }

    exibeInfos() {
        return `${this.nome}, ${this.email}`;
    }
}

const user = new User('Saulo', 's@s.com', '2024-01-01');

console.log(user);

console.log(user.exibeInfos());

console.log(User.prototype.isPrototypeOf(user));

