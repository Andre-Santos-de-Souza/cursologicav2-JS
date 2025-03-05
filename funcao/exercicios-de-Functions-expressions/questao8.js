//Crie uma função de expressão chamada findMaxValue que recebe dois números. Dentro dela, crie uma função interna chamada isGreaterThan que recebe dois números e retorna true se o primeiro número for maior que o segundo, ou false caso contrário. A função externa deve retornar true ou false dependendo se o primeiro número é maior que o segundo.

let findMaxValue = function(n1,n2){
    let isGreaterThan = function(a,b){
        if(a > b){
            return true
        }else if(a === b){
            return `São iguais`
        }else{
            return false
        }
    }
    return isGreaterThan(n1,n2)
}

console.log(findMaxValue(1,2))
console.log(findMaxValue(2,1))
console.log(findMaxValue(2,2))