//Crie um array de objetos de filmes, com as propriedades titulo, ano e genero. Escreva uma função que retorna todos os filmes de um determinado gênero, utilizando um loop for.

const filme = [
    {titulo: "O Poderoso Chefão", ano: 1972, genero: "Crime"},
    {titulo: "A Origem", ano: 2010, genero: "Ficção Científica"},
    {titulo: "O Rei Leão", ano: 1994, genero: "Animação"},
    {titulo: "Toy Story ", ano: 1995, genero: "Animação"}
]

function filmeDeterminadoGenero(genero, ...arr){
    let nomeDoFilme = []
    for(let i =0;i < arr.length;i++){
        if(arr[i].genero === genero){
            nomeDoFilme.push(arr[i].titulo)
        }
    }
    
    return nomeDoFilme.join(", ")
}
console.log(filmeDeterminadoGenero("Animação",...filme))