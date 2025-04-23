//Dado o array abaixo, use forEach para somar todos os valores e mostrar o total no final.

const valores = [5, 10, 15, 20];
let somaDosValores = 0

const v = valores.forEach(function(elemento){
    somaDosValores = somaDosValores + elemento
})
console.log(somaDosValores)