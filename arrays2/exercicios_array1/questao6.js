/*O método "some" em JavaScript é usado para verificar se pelo menos um elemento de um array satisfaz uma determinada condição especificada por uma função de callback. Ele retorna um valor booleano:
true: se pelo menos um elemento atender à condição.
false: se nenhum elemento atender à condição.*/

//Dado o array const numeros = [4, 7, -2, 13, 0];, use o método some para verificar se existe algum número negativo no array.
const numeros = [4, 7, -2, 13, 0];

const numeroNegativo = numeros.some(function(elemento){
    return elemento < 0
});

console.log(numeroNegativo)