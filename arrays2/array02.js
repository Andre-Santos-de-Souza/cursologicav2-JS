let arr = [4,5,10,20,35,4,5]
console.log(arr.indexOf(5))
console.log(arr.indexOf(55))// -1 é igual a false
console.log(arr.lastIndexOf(5))
console.log(arr.lastIndexOf(54))// -1 é igual a false
console.log(arr.includes(5))
console.log(arr.includes(55))

/* O método .find() é usado para encontrar o primeiro elemento em um array que satisfaça uma condição especificada em uma função de callback. Ele retorna o valor do primeiro elemento que atende à condição, ou undefined se nenhum elemento atender. */
console.log(arr.find(function(el){
    return el > 10
}))

/*O método .findIndex() é usado para encontrar o índice do primeiro elemento em um array que satisfaça uma condição especificada em uma função de callback. Ele retorna o índice do elemento se a condição for atendida, ou -1 se nenhum elemento atender à condição. */
console.log(arr.findIndex(function(el){
    return el > 10
}))