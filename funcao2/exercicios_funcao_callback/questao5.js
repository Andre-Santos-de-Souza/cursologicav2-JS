// Crie uma função mapearArray que aceite um array de números e um callback. O callback deve ser chamado para cada número no array e multiplicar o número por 2.

function mapearArray(arr, callback){
    return callback(arr)
}

function multiplicarPorDois(arr){
    let mult = 0
    const arrMult = []

    for(let i=0;i<arr.length;i++){
        mult = arr[i]*2
        arrMult.push(mult)
    }
    return arrMult
}

const arr = [1,2,3,4,25]

console.log(mapearArray(arr, multiplicarPorDois))