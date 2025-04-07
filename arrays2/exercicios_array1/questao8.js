//Use some para verificar se há pelo menos um produto com estoque maior que 0.

const produtos = [
    { nome: "Notebook", estoque: 3 },
    { nome: "Mouse", estoque: 0 },
    { nome: "Teclado", estoque: 0 }
];

const estoqueueMaiorQueZero = produtos.some(function(elemento){
    return elemento.estoque > 0
})
console.log(estoqueueMaiorQueZero)