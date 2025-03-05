//Crie uma função de expressão chamada powerSum que recebe dois números. Dentro dessa função, crie uma função interna chamada square que retorna o quadrado de um número. A função powerSum deve retornar a soma do quadrado de ambos os números recebidos.

let powerSum = function(n1,n2){
    let square = function(num){
        return num**2
    }
    return square(n1)+square(n2)
}

console.log(powerSum(3,4))