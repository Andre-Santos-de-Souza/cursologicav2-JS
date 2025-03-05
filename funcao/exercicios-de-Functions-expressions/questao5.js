//Questão 5: Crie uma função que recebe uma lista de números e retorna a soma de todos os números usando uma função de expressão. Atribua a função a uma variável chamada sumArray.

let sumArray = function(...arr){
   let soma = 0
   for(let i = 0; i < arr.length;i++){
        soma += arr[i]
   }
   return soma
}
const array = [1,2,3,4,5]
console.log(sumArray(...array))