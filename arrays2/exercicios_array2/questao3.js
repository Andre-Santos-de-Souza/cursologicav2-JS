// Produto em estoque
// Dado um array de produtos, encontre o primeiro produto que esteja em estoque (emEstoque: true):

const produtos = [
    { nome: "Teclado", emEstoque: false },
    { nome: "Mouse", emEstoque: false },
    { nome: "Monitor", emEstoque: true },
];

const resultado = produtos.find(function(elemento){
    return elemento.emEstoque === true
})

console.log(resultado)