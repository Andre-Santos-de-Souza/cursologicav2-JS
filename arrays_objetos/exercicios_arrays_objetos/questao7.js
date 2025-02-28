//Crie um array de objetos de produtos com as propriedades nome, preço e quantidade. Escreva uma função que calcula o valor total em estoque (preço * quantidade) de todos os produtos, utilizando um loop.

const produtos = [
    {nome: "Sabão", preco: 5.50, quantidade: 2},
    {nome: "Biscoito Recheado", preco: 3.0, quantidade: 3},
    {nome: "Suco de Laranja", preco: 8.00, quantidade: 4}
]

function valorTotalEstoque(...arr){
    let precos = []
    let quantidade = []
    let precoVezesQuantidade = []
    for (let i = 0; i < arr.length; i++) {
        precos.push(arr[i].preco)
        quantidade.push(arr[i].quantidade)
        precoVezesQuantidade.push(quantidade[i] * precos[i])
    }
    let total = 0
    for(tot of precoVezesQuantidade){
        total += tot
    }
    return `${total}`
}
console.log(valorTotalEstoque(...produtos))