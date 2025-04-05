//Crie um construtor chamado ContaBancaria com titular, saldo. Adicione os métodos depositar(valor) e sacar(valor) que atualizam o saldo.


function ContaBancaria(titular, saldo){
    this.titular = titular
    this.saldo = saldo
    this.depositar = function(depositar){
        this.saldo = this.saldo + depositar
        return `Depositar: ${depositar}, Saldo da conta: ${this.saldo}`
    }
    this.sacar = function(sacar){
        this.saldo = this.saldo - sacar
        return `Sacar: ${sacar}, Saldo da Conta:  ${this.saldo}`
    }
}
const cb = new ContaBancaria("André Santos", 500)
console.log(`Titular: ${cb.titular}`)
console.log(`Saldo da conta: ${cb.saldo}`)
console.log(cb.depositar(100))
console.log(cb.sacar(50))