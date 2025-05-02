// Use reduce para calcular a média dos números do array.
const notas = [8, 7, 10, 5];

const media =  notas.reduce(function(acumulador, valorAtual,i,arr){
    return acumulador + valorAtual
},0) / notas.length

console.log(media)