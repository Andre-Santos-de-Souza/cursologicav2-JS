//Dado o array abaixo, use o método filter() para criar um novo array que contenha apenas os números maiores que 10.

const numeros = [3, 12, 8, 25, 7, 30];

const maiorQueDez = numeros.filter(function(elemento){
    return elemento > 10
})

console.log(maiorQueDez)