// Transformar um array de strings em um objeto com o número de caracteres de cada palavra:
const palavras = ["apple", "banana", "grape"];
// Resultado esperado: { apple: 5, banana: 6, grape: 5 }

const caractere = palavras.reduce(function(acumulador,valorAtual,i,arr){
    acumulador[valorAtual] = valorAtual.length
    return acumulador
},{})

console.log(caractere)