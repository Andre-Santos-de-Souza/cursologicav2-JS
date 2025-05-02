// Use reduce para encontrar o maior número.
const numeros = [3, 9, 2, 7, 12];

const maior = numeros.reduce(function(acumulador,valoAtual,i,array){
    acumulador=valoAtual
    return Math.max(acumulador)
},[])

console.log(maior)