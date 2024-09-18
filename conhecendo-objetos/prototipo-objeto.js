const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
}

const objPersonagem2 = Object.create(objPersonagem)
objPersonagem2.nome = "Saruman"

console.log(objPersonagem.nome) //Gandalf
console.log(objPersonagem2.nome) //Saruman