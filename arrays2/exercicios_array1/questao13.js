//Dado o array de objetos, filtre apenas os produtos que estão disponíveis (disponivel: true).

const produtos = [
    { nome: "Mouse", disponivel: true },
    { nome: "Teclado", disponivel: false },
    { nome: "Monitor", disponivel: true },
    { nome: "Headset", disponivel: false }
]

const produtosDisponiveis = produtos.filter(function(elemento){
    return elemento.disponivel === true
})

console.log(produtosDisponiveis)