// Use reduce para somar apenas os números pares.
const numeros = [1, 2, 3, 4, 5, 6, 4, 4,8,5];

const pares = numeros.reduce(function(acumulador, valorAtual,i,arr){
    if(valorAtual % 2 === 0){
        acumulador += valorAtual
    }
    return acumulador
},0)
console.log(pares)