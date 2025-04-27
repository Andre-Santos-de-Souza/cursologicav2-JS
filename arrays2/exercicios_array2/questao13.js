// Crie uma lista let animals = ['cat', 'dog', 'elephant', 'tiger']. Verifique se o item 'elephant' está na lista. Se estiver, substitua o valor do índice encontrado por 'giraffe'.

let animals = ['cat', 'dog', 'elephant', 'tiger']

let index = animals.indexOf('elephant')

animals[index] = "giraffe"

console.log(animals)