//Crie uma arrow function chamada ultimoElemento que recebe um array e retorna o último elemento.

const ultimoElemento = (...arr) => {
    let tamanhoArray = arr.length
    return arr.slice(tamanhoArray-1)
}

const array = [1,2,3,"A",0]
console.log(ultimoElemento(...array))