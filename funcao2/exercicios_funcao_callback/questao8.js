//Crie uma função ordenarArray que aceite um array de strings e um callback. O callback deve ordenar as strings de forma crescente.

function ordenarArray(arr, callback){
    return callback(arr)
}

function ordenar(arr){
    return arr.sort()
}
let frutas = ["laranja", "banana", "uva", "maçã"]
console.log(ordenarArray(frutas,ordenar))