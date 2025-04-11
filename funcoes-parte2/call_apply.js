// var name = "André"
// let name2 = "André 2"

function teste(str,n){
    console.log(this.name)
    // console.log(this.name2)
    console.log(str , n)
}
// O método call invoca uma função imediatamente, permitindo que você defina o this e passe os argumentos um a um.
teste.call({name:"Maria"}, "String", 20)
//Muito parecido com o call, também invoca a função imediatamente, mas os argumentos são passados como um array.
teste.apply({name:"João"}, ["da Silva", 28])
teste.call({name:"João"}, ...["da Silva", 28])

//Diferente dos outros, não executa a função imediatamente. Ele retorna uma nova função com o this vinculado ao valor passado.
const teste2 = teste.bind({name:"Joana"})
teste2("Joaquina", 30)

teste("Manuel", 40)


document.addEventListener("click", teste2)