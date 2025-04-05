//Adicione um método chamado falar ao construtor Pessoa que exiba no console: "Olá, meu nome é [nome]".

function Pessoa(nome,idade){
    this.nome = nome
    this.idade = idade
    this.falar = function(){
        console.log(`Olá, meu nome é ${nome}.`)
    }
}

const p1 = new Pessoa("André", 21)
p1.falar()