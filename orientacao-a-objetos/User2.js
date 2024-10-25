export default class User2 {
    #nome;
    #sobrenome;
    #email;
    #nascimento;
    #role;
    #ativo;

    constructor(nome,sobrenome, email, nascimento, role, ativo = true) {
        this.#nome = nome;
        this.#sobrenome = sobrenome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.#ativo = ativo;
    }

    get nome() {
        return this.#nome + ' ' + this.#sobrenome;
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

    set nome(novoNome) {
        if (novoNome === '') {
          throw new Error('formato inválido');
        }
        let [nome, ...sobrenome] = novoNome.split(" ");
        sobrenome = sobrenome.join(' ');
        this.#nome = nome;
        this.#sobrenome = sobrenome;
      }
    
    exibeInfos() {
        return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`;
    }
}

const novoUser = new User2('Juliana', 'Souza', 'j@j.com', '2021-01-01')
console.log(novoUser.nome) //'Juliana'
novoUser.nome = 'Juliana Silva Souza'
console.log(novoUser.nome) //'Juliana'