//O Math.min() é uma função do JavaScript que retorna o menor número entre os argumentos passados.
console.log(Math.min(1,2,3,4,5))

//O Math.max() é uma função do JavaScript que retorna o maior número entre os valores passados como argumento.
console.log(Math.max(1,2,10,4,5))

let arr = [1,2,10,4,5]
console.log(Math.max(...arr))

/*O Math.round() em JavaScript arredonda um número para o inteiro mais próximo.
Se a parte decimal for menor que 0.5, arredonda para baixo.
Se for 0.5 ou maior, arredonda para cima. */
console.log(Math.round(45.5))

//Math.floor() é uma função do JavaScript que arredonda um número para baixo para o inteiro mais próximo.
console.log(Math.floor(45.99999))

//Math.ceil() arredonda um número para cima para o inteiro mais próximo.
console.log(Math.ceil(45.0001))

/*O Math.pow(base, expoente) é uma função do JavaScript que retorna a potência de um número.
O resultado será 8, pois 2³ = 2 * 2 * 2 = 8.

Atualmente, é mais comum usar o operador ** (**), que faz a mesma coisa*/
console.log(Math.pow(2,3))
console.log(2**3)

//O Math.sqrt() é um método do objeto Math em JavaScript que retorna a raiz quadrada de um número.
console.log(Math.sqrt(49))

//O método Math.cbrt(x) retorna a raiz cúbica de um número x.
console.log(Math.cbrt(8))

/*O Math.random() é um método em JavaScript que retorna um número aleatório entre 0 (inclusive) e 1 (exclusive). Ou seja, ele gera um valor decimal entre 0 e, mas sem incluir 1. Cada vez que é chamado, ele retorna um número diferente. */
console.log(Math.random())