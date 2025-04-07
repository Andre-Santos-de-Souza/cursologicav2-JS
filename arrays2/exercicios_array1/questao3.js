//Verifique se todos os números em um array são pares usando every.
const numeros = [2, 4, 5, 8, 10];

const pares = numeros.every(function(elemento, index, array){
    return elemento % 2 === 0
})

console.log(pares)