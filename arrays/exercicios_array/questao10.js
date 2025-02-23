//Crie um array produtos com objetos representando itens de um mercado:
// let produtos = [
//     { nome: "Arroz", preco: 10 },
//     { nome: "Feijão", preco: 7 },
//     { nome: "Macarrão", preco: 5 }
// ];
// Encontre o produto com preço maior que 6 e exiba-o no console.

let produtos = [
    { nome: "Arroz", preco: 10 },
    { nome: "Feijão", preco: 7 },
    { nome: "Macarrão", preco: 5 }
];
let maiorQueSeis = 0

for(let i = 0; i<= produtos.length-1;i++){
    
    if(produtos[i].preco > 6){
        console.log(produtos[i].preco)
    }
}