// Use reduce para transformar esse array em uma string: "Olá mundo em JavaScript".
const palavras = ["Olá", "mundo", "em", "JavaScript"];

const str = palavras.reduce(function(acumulador, valorAtual,i,arr){
    return `${acumulador} ${valorAtual}`
})

console.log(str)