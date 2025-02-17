const arr = [1,2,3]
const arr2 = [4,5,6]

function sum(){
    console.log(arguments)
    console.log(arguments.length)
}
sum(1,2,3)
sum(arr)
sum([1,2,3])
/*
Os três pontos (...) em sum(...arr) se referem ao operador de espalhamento (spread operator) no JavaScript. Esse operador é usado para "espalhar" os elementos de um array ou objeto, ou seja, ele pega os elementos de um array e os passa como argumentos individuais para uma função.
*/
sum(...[1,2,3])
sum(...arr)

arr.push(...arr2)
console.log(arr)