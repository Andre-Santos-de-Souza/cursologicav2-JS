function sum(){
    const numbers = Array.from(arguments)
    // const numbers = [...arguments]
    return numbers.reduce(function(acumulador, atual){
        return acumulador+atual
    },0)
}
function avarege(){
    return sum(...arguments) / arguments.length
}

console.log(sum(1,2,3,4,5))
console.log(avarege(1,2,3,4,5))