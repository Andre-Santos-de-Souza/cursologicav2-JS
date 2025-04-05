//Use instanceof para verificar se um objeto criado com new Pessoa() realmente é uma instância de Pessoa.
function Produto(nome,preco,quantidade){
    this.nome = nome
    this.preco = preco
    this.quantidade = quantidade
    this.totalEmEstoque = function(){
        return this.preco * this.quantidade
    }
}
const produto1 = new Produto("Sabão em barra", 10, 3)
console.log(`Produto: ${produto1.nome}`)
console.log(`Preço: ${produto1.preco}`)
console.log(`Quantidade: ${produto1.quantidade}`)
console.log(`Total em Estoque: ${produto1.totalEmEstoque()}`)
console.log(produto1 instanceof Produto)