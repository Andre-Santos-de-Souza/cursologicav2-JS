//Dado o array de palavras, use forEach para contar quantas palavras têm mais de 5 letras. Exiba o resultado no final.

const palavras = ['carro', 'bicicleta', 'avião', 'ônibus', 'metrô'];
let contador = 0

const p = palavras.forEach(function(elemento,i,array){
    if(elemento.length > 5){
        contador++
    }
})
console.log(contador)