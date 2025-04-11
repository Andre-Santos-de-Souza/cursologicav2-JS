/*Em JavaScript, o termo chain (ou encadeamento) se refere à prática de chamar vários métodos um após o outro, diretamente na mesma linha, usando o resultado de um método como entrada para o próximo. Isso é muito comum em bibliotecas como jQuery e também em operações com arrays e objetos.

Como funciona?
Quando um método retorna um objeto, podemos imediatamente chamar outro método desse objeto. Isso cria uma cadeia de chamadas — ou seja, um method chaining. */

const calc = {
    value: 0,
    soma(n){
        this.value += n
        return this
    },
    subtrai(n){
        this.value -= n
        return this
    },
    log(){
        console.log(this.value)
        return this
    }
}

calc.soma(5).soma(2).subtrai(3).soma(2).log().soma(4).log()
console.log(calc.value)