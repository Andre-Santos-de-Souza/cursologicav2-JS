//Crie uma função construtora chamada Pessoa que recebe nome e idade. Crie um objeto p1 com essa função.

function Pessoa(nome,idade){
    this.nome = nome
    this.idade = idade
}

const p1 = new Pessoa("André", 21)
console.log(p1)