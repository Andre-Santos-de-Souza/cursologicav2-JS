//Adicione uma propriedade cidade ao construtor Pessoa usando o prototype (fora da função). Verifique se objetos já criados passam a ter acesso a essa propriedade.
function Pessoa(nome,idade){
    this.nome = nome
    this.idade = idade
    this.falar = function(){
        console.log(`Olá, meu nome é ${nome}.`)
    }
}

const p1 = new Pessoa("André", 21)
Pessoa.prototype.cidade = "Desconhecida"
p1.cidade = "Marabá - PA"
console.log(p1)