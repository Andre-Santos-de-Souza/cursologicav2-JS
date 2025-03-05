//Crie uma função de expressão chamada calculateRectangleArea que recebe dois parâmetros: length (comprimento) e width (largura). Dentro dessa função, crie uma função interna chamada area que calcula a área do retângulo e retorne esse valor.

let calculateRectangleArea = function(length, width){
    let calcularAreaRetangulo = function(l,w){
        return l * w
    }
    return calcularAreaRetangulo(length, width)
}
console.log(calculateRectangleArea(5, 10));