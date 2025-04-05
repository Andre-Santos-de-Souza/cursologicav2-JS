//Crie um objeto construtor chamado Carro que receba marca, modelo e ano. Adicione um método detalhes() que retorne uma string com essas informações.

function Carro(marca, modelo, ano){
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
    this.detalhes = function(){
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
    }
}
const car1 = new Carro("Toyota", "Corolla", 2020)
console.log(car1.detalhes())
