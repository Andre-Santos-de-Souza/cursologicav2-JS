//Crie uma função filtrarNumeros que aceite um array de números e um callback. O callback deve filtrar os números que são maiores que 10.

function filtrarNumeros(arr, callback){
    return callback(arr)
}

const arrayNumeros = [1,2,3,4,5,11,12,13]

const filtrar = filtrarNumeros(arrayNumeros, function(arr){
    return arr.filter(function(numeros){
        return numeros > 10
    })
})

console.log(filtrar)
