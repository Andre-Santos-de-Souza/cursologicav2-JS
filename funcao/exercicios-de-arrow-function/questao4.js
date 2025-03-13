//Crie uma arrow function chamada comprimentoString que recebe uma string e retorna o número de caracteres dela.

const comprimentoString = (str) => {
    return str.replace(/\s/g, "").length
}

console.log(comprimentoString("Olá, Mundo!"))