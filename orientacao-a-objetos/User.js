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

    get nome() {
        return this.#nome;
    }

    get email() {
        return this.#email;
    }

    get nascimento() {
        return this.#nascimento;
    }

    get role() {
        return this.#role;
    }

    get ativo() {
        return this.#ativo;
    }

    set nome(value) {
        if (value === '')
            throw new Error('Nome inválido!');
        this.#nome = value;
    }

    exibeInfos() {
       const tipos =  {
        estudante:`estudante: ${this.nome}`,
        admin: `admin: ${this.nome}`,
        docente: `docente: ${this.nome}`
       };

       return tipos[arguments[0]]
    }

    static exibeInfosGenericas(nome, email) {
        return `${nome}, ${email}`;
    }
}

// const user = new User('Saulo', 's@s.com', '2024-01-01');

// console.log(user);

// console.log(user.exibeInfos());

// console.log(User.prototype.isPrototypeOf(user));

