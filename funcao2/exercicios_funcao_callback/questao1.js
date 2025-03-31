//Crie uma função soma que aceite dois números e um callback. O callback deve ser chamado com o resultado da soma dos dois números.

function soma(n1,n2, callback){
    return callback(n1,n2)
}

const resultado = soma(2,3,function(n1,n2){
    return n1+n2
})

console.log(resultado)