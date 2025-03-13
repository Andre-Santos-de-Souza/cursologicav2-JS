//Crie uma arrow function chamada ehPar que recebe um número e retorna true se for par e false se for ímpar.

const ehPar = (n1) => {
    return (n1 % 2 === 0) ? `E par: `+true : `E ímpar: `+false
}

console.log(ehPar(2))
console.log(ehPar(3))