/*O método "every" em JavaScript é usado para verificar se todos os elementos de um array satisfazem uma determinada condição especificada por uma função de callback. Ele retorna um valor booleano:
true: se todos os elementos do array atenderem à condição.
false: se pelo menos um elemento não atender à condição.*/

//Dado um array de idades, verifique se todos os elementos são maiores ou iguais a 18 usando o método every.

const idades = [22, 35, 18, 40, 29];
const maiorIdade =  idades.every(function(elemento){
    return elemento >= 18
})
console.log(maiorIdade)