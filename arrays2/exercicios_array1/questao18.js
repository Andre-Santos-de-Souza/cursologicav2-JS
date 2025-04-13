//Use o map() para criar um novo array que contenha apenas os preços dos produtos.

const produtos = [
    { nome: "camisa", preco: 50 },
    { nome: "calça", preco: 80 },
    { nome: "sapato", preco: 120 }
];

const preco = produtos.map(function(elemento){
    return elemento.preco
})

console.log(preco)