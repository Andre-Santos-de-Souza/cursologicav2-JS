// Crie um código que encontre o índice do primeiro item que começa com a letra "m". Caso não encontre, deve retornar -1.

let fruits = ["maçã", "banana", "morango", "laranja"];

console.log(fruits.findIndex(function(el){
    return el[0] === 'm'
}))