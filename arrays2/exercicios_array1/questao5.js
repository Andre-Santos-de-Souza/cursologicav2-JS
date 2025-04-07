//Dado um array de produtos, verifique se todos estão com a propriedade disponivel igual a true.

const produtos = [
    { nome: "Mouse", disponivel: true },
    { nome: "Teclado", disponivel: true },
    { nome: "Monitor", disponivel: false }
];

const listaProdutos = produtos.every(function(elemento){
    return elemento.disponivel === true
})
console.log(listaProdutos)