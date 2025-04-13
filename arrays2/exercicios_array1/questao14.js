//Filtre do array abaixo apenas os nomes com mais de 5 letras.

const nomes = ["Ana", "Carlos", "João", "Beatriz", "Pedro", "Fernanda"];

const maisDeCincoLetras = nomes.filter(function(elemento){
    return elemento.length > 5
})

console.log(maisDeCincoLetras)