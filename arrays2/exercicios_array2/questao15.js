// Utilize indexOf para localizar a primeira ocorrência do número 5 no array [1, 2, 5, 3, 5, 4, 5]. Em seguida, crie um novo array com todos os números à direita da primeira ocorrência do número 5.

let array = [1, 2, 5, 3, 5, 4, 5]

let index = array.indexOf(5)
console.log(`O primeiro 5 se encontra no indice ${index}`)

let arrNovo = array.slice(index+1, array.length)
console.log(arrNovo)