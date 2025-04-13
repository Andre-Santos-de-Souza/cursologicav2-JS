//Crie um novo array onde cada número seja multiplicado por 2 usando o método map().

const numeros = [1, 2, 3, 4, 5];

const multPorDois = numeros.map(function(elemento){
    return elemento * 2
})

console.log(multPorDois)