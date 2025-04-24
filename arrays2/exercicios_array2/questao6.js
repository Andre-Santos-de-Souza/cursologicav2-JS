/*O método .findIndex() é usado para encontrar o índice do primeiro elemento em um array que satisfaça uma condição especificada em uma função de callback. Ele retorna o índice do elemento se a condição for atendida, ou -1 se nenhum elemento atender à condição. */

// Encontre o índice do primeiro número par em um array

let numbers = [5, 9, 12, 7, 8];

const resultado = numbers.findIndex(el => el % 2 === 0)
console.log(resultado)