//Crie uma função chamada analisarTexto que recebe uma string e dentro dela crie uma arrow function tamanhoTexto para retornar o tamanho da string e outra ehMaiuscula para verificar se o texto está em letras maiúsculas.

const analisarTexto = (str) => {
    const tamanhoTexto = (strTamanho) => {
        return `Tamanho da string = ${strTamanho.length}`
    }

    const ehMaiuscula = (maiuscula) => {
        if(maiuscula === maiuscula.toUpperCase()){
            return `As letras são maiúsculas`
        }else if(maiuscula === maiuscula.toLowerCase()){
            return `As letras são minúsculas`
        }else{
            return `Têm letras maiúsculas e minúsculas`
        }
    }

    return `${tamanhoTexto(str)}, ${ehMaiuscula(str)}`
}

console.log(analisarTexto("olá, mundo"))
console.log(analisarTexto("OLÁ, MUNDO"))
console.log(analisarTexto("OlÁ, MuNdO"))