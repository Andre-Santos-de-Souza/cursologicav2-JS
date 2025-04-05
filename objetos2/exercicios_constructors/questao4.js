//Modifique o construtor Carro para incluir uma propriedade ligado (false por padrão) e métodos ligar() e desligar() que atualizem essa propriedade.

function Carro(marca, modelo, ano, ligado){
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
    this.ligado = ligado
    this.detalhes = function(){
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
    }
    this.ligar = function(){
        this.ligado = true
        return `O carro está agora ligado: ${this.ligado}`
    }
    this.desligar = function(){
        this.ligado = false
        return `O carro está agora desligado: ${this.ligado}`
    }
}
const car1 = new Carro("Toyota", "Corolla", 2020, false)
console.log(car1.detalhes())
console.log(car1.ligar())
console.log(car1.desligar())