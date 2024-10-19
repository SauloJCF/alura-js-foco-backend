function User(nome, email) {
    this.nome = nome;
    this.email = email;

    this.exibirInfos = function () {
        return `${this.nome}, ${this.email}`;
    }
}

const user = new User('Saulo', 's@jcf@gmail.com');

console.log(user.exibirInfos());
