function checkArrayProperties(numbers){
    const todosNumerosPositivos = numbers.every(function(el){
        if(el > 0){
            return el
        }
    })

    const umNumeroMaiorQuedez = numbers.some(function(el){
        if(el > 10){
            return el
        }
    })
    return obj = {
        allPositive: todosNumerosPositivos,
        hasLargeNumber: umNumeroMaiorQuedez
    }
}

const numbers = [2, 5, 8, 1, -4, 10];
console.log(checkArrayProperties(numbers));