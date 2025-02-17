/*
O método "every" em JavaScript é usado para verificar se todos os elementos de um array satisfazem uma determinada condição especificada por uma função de callback. Ele retorna um valor booleano:
true: se todos os elementos do array atenderem à condição.
false: se pelo menos um elemento não atender à condição.*/
// const arr = [1,5,10,"ola",true]
// let sohNumeros = arr.every(function(el){
//     return typeof el === "number";
// })
// console.log(sohNumeros)

/////////////////////////////////////////////////////////////

/*O método "some" em JavaScript é usado para verificar se pelo menos um elemento de um array satisfaz uma determinada condição especificada por uma função de callback. Ele retorna um valor booleano:
true: se pelo menos um elemento atender à condição.
false: se nenhum elemento atender à condição.
*/ 
// const arr = [1,5,10,"ola",true]
// let sohNumeros = arr.some(function(el){
//     return typeof el === "number";
// })
// console.log(sohNumeros)

////////////////////////////////////////////////////////////

const arr = [1,5,10,"ola",true];
let arr1 = arr.filter(function(el,i, _arr){  
   return typeof el === "number"
})
console.log(arr1)

arr.forEach(function(el,i,_arr){
    console.log(i, ": ", el)
})

/*O método .map() é usado para criar um novo array a partir de um array existente, aplicando uma função a cada elemento do array original. Ele não altera o array original, mas retorna um novo array com os resultados da função aplicada a cada elemento.*/ 
let arr2 = arr1.map(function (el,i,_arr){
    return el*el
})
console.log(arr2)