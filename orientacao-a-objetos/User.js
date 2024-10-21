export default class User {
    #nome;
    #email;
    #nascimento;
    #role;
    #ativo;

    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.#ativo = ativo;
    }

    #montaObjUser() {
        return ({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo
        });
    }

    exibeInfos() {
        const objUser = this.#montaObjUser();
        return `${objUser.nome}, ${objUser.email}, ${objUser.nascimento}, ${objUser.role}, ${objUser.ativo}`;
    }
}

// const user = new User('Saulo', 's@s.com', '2024-01-01');

// console.log(user);

// console.log(user.exibeInfos());

// console.log(User.prototype.isPrototypeOf(user));

