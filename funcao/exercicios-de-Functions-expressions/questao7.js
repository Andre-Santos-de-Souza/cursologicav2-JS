//Crie uma função de expressão chamada outerFunction que recebe dois números. Dentro dessa função, crie uma função interna chamada multiplyByTwo que multiplica um número por 2. A função outerFunction deve retornar o resultado da multiplicação de ambos os números fornecidos, usando a função interna.

let outerFunction = function(a,b){
    let multiplyByTwo = function(n){
        return n*2
    }
    return multiplyByTwo(a) * multiplyByTwo(b)
}
console.log(outerFunction(3,4))
console.log(outerFunction(5, 6));
console.log(outerFunction(2, 7)); 
console.log(outerFunction(8, 9)); 