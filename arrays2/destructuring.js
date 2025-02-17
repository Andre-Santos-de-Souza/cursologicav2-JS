const arr = [1,2,3];

//O código abaixo utiliza a desestruturação de arrays em JavaScript. A desestruturação permite extrair valores de arrays e objetos de maneira mais concisa.
const [n1,,n2] = arr;
// const [n1,,n2] = arr;
// const [n1,...n2] = arr;
console.log(n1)
console.log(n2)