//Verifique se todos os nomes em um array começam com letra maiúscula.

const nomes = ["Ana", "carlos", "Beatriz", "Daniel"];

const letraMaiuscula = nomes.every(function(elemento){
    return elemento[0] === elemento[0].toLocaleUpperCase()
})

console.log(letraMaiuscula)
