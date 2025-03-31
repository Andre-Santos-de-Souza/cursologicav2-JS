//Crie uma função calcularDesconto que aceite um preço original e um callback. O callback deve calcular e retornar o preço com desconto de 20%.

function calcularDesconto(preco,callback){
    return callback(preco)
}

const resultado = calcularDesconto(40,function(preco){
    let desconto = (40*20)/100
    return preco - desconto
})

console.log(resultado)