function sum(){
    const numbers = []
    // for(let i = 0; i < arguments.length;i++){
    //     numbers.push(arguments[i])
    // }
    // console.log(numbers)

    Array.prototype.forEach.call(arguments, function(argument){
        numbers.push(argument)
    })
    return numbers.reduce(function(acumulador, atual){
        return acumulador+atual
    },0)
}
console.log(sum(1,2,3,4,5))

function avarege(){
    const soma = sum.apply(null, arguments)

    return soma / arguments.length
}
console.log(avarege(1,2,3,4,5))

/*
O método call() chama a função diretamente, permitindo que você passe os argumentos como uma lista separada por vírgulas.
*/
// sum.call(null, 1,2,3,4,5)

/*
O método apply() é semelhante ao call(), mas os argumentos são passados como um único array ou objeto semelhante a um array.
*/
// sum.apply(null, [1,2,3,4,5])