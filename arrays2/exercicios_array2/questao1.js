/* O método .find() é usado para encontrar o primeiro elemento em um array que satisfaça uma condição especificada em uma função de callback. Ele retorna o valor do primeiro elemento que atende à condição, ou undefined se nenhum elemento atender. */

// Números maiores que 10
// Dado o array abaixo, use .find() para encontrar o primeiro número maior que 10:

const numeros = [3, 7, 9, 12, 8, 20];

const resultado = numeros.find(function(elemento){
    return elemento > 10
})

console.log(resultado)