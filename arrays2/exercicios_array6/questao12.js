// Use reduce para contar quantos produtos existem por marca.
const produtos = [
    { nome: "Celular", marca: "Apple" },
    { nome: "Notebook", marca: "Dell" },
    { nome: "Tablet", marca: "Apple" },
    { nome: "Monitor", marca: "Dell" },
    { nome: "Fone", marca: "Samsung" }
];

const quantosProdutos = produtos.reduce(function(acumulador, valorAtual,i ,array){
    let contador = 0
    if(!acumulador[valorAtual.marca]){
        acumulador[valorAtual.marca] = 0
    }
    acumulador[valorAtual.marca]++
    return acumulador
}, {})

console.log(quantosProdutos)