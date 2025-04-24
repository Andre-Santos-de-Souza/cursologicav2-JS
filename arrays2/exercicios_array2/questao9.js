// Escreva um código que encontre o índice do primeiro número maior que 40. Caso não encontre, deve retornar -1.

let numbers = [10, 25, 30, 0, 80];

const resultado = numbers.findIndex(function(elemento){
    return elemento > 40
})

console.log(resultado)