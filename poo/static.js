//ES5
function Animal(){}

Animal.prototype.whoAmI = function(){
    return this
}

Animal.categoria = "ser vivo"

const dog = new Animal()

//ES6
class Cachorro{
    constructor(nome){
        this.nome = nome
        console.log(this)
        //para utilizar o método static dentro do construtor, tem que usar o nome da classe ao invés de usar o this, pq o this é o próprio objeto e o método static faz parte da classe, mas não faz parte da instância do objeto.
        //Um método static (ou método estático) é um método que pertence à classe, e não às instâncias dela.
        //Você chama ele pela própria classe, e não por um objeto criado com new.
        Cachorro.beber()
    }
    /*Quando usar static?
    Use static quando o método:
    °Não depende de dados da instância (this)
    °Serve para utilidade geral da classe
    °Pode ser usado como uma função auxiliar relacionada à classe */
    static comer(){
        console.log(this)//Cachorro
        console.log("comendo")
        //método static pode chamar método static
        this.beber()
    }
    static beber(){
        console.log("bebendo")
    }
}

let cachorro = new Cachorro("andre")
console.log(Cachorro.comer())