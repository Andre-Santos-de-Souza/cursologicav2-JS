function processArray(input){
    const palavrasInvetidas = [];
    
    for (let i = 0; i < input.length; i++) {
        if (typeof input[i] === "string") {
            palavrasInvetidas.push(input[i].split("").reverse().join(""))
        }
    }      

    const soma = input.reduce(function(soma, atual){
        if(typeof atual === "number"){
            return soma+atual 
        }
        return soma
    },0)
    
    return obj = { 
        reversedStrings: palavrasInvetidas,
        sum: soma 
    }
}
const input = ["hello", 123, "world", 456];
console.log(processArray(input));