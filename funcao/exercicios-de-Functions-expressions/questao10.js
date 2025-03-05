//Crie uma função de expressão chamada calculateDiscount que recebe o preço de um produto e o desconto em porcentagem. Dentro dessa função, crie uma função interna chamada calculateFinalPrice que aplica o desconto ao preço do produto e retorna o valor final. A função externa deve retornar o preço final com o desconto aplicado.

let calculateDiscount = function(preco,desconto){
    let calculateFinalPrice = function(p,d){
        return p-((p*d)/100);
    }
    return calculateFinalPrice(preco,desconto)
}
console.log(calculateDiscount(100, 20)); 
console.log(calculateDiscount(200, 15));
console.log(calculateDiscount(50, 10));  
console.log(calculateDiscount(500, 30)); 
console.log(calculateDiscount(1200, 25));