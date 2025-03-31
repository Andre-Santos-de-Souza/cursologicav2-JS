//Crie uma função processarTexto que aceite um texto e um callback. O callback deve manipular o texto de acordo com a função passada. Exemplo: converter o texto para maiúsculas ou substituir uma palavra.

function processarTexto(texto, callback){
    return callback(texto)
}

function converterParaMaiuscula(texto){
    return texto.toUpperCase()
}

function substituirPalavra(texto){
    return texto.replace("JavaScript", "JS")
}

let textoOriginal = "Eu estou aprendendo JavaScript";

console.log(processarTexto(textoOriginal, converterParaMaiuscula))

console.log(processarTexto(textoOriginal,substituirPalavra))