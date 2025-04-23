//Dado o array de nomes abaixo, use forEach para imprimir no console: Olá, [nome]! para cada nome.

const nomes = ['Ana', 'Carlos', 'Beatriz', 'Daniel'];

const nome = nomes.forEach(function(elemento, i, array){
    console.log(`Olá, ${elemento}! para cada nome.`)
})