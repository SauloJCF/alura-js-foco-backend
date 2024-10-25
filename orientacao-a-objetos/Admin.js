import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }

    exibeInfos() {
        const infos = super.exibeInfos();

        return `Admin: ${infos}`;
    }
}

// const admin = new Admin('Rodrigo', 'r@r.com', '2024-01-01');

// console.log(admin);

// console.log(admin.exibeInfos());
