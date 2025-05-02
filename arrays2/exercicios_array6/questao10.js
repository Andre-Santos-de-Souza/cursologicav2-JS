//Somar os valores de um carrinho de compras:
const carrinho = [
    { produto: "Mouse", preco: 100 },
    { produto: "Teclado", preco: 200 },
    { produto: "Monitor", preco: 1000 }
];
// Use reduce para calcular o valor total da compra.

const valorTotalCompra = carrinho.reduce(function(acumulador, valorAtual,i,array){
    acumulador += valorAtual.preco
    return acumulador
},0)

console.log(valorTotalCompra)