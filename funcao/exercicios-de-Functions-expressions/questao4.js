//Questão 4: Crie uma função de expressão que verifica se um número é par ou ímpar e retorna a string "Par" ou "Ímpar". Atribua essa função à variável isEvenOrOdd.

let isEvenOrOdd = function(n1){
    return n1%2===0 ? "Par": "Ímpar"
}
console.log(isEvenOrOdd(3))
console.log(isEvenOrOdd(10))