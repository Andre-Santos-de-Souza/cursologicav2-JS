//Crie uma função multiplicar que aceite dois números e um callback. O callback deve ser chamado com o resultado da multiplicação dos dois números. 

function multiplicar(n1,n2, callback){
    return callback(n1,n2)
}

const resultado = multiplicar(3,2,function(n1,n2){
    return n1*n2
})

console.log(resultado)