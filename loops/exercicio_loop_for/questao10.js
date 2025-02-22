//Solicite uma frase ao usuário e, usando um for, exiba apenas as palavras que contêm vogais.

let usuario = "André Santos de Souza"
let palavras = usuario.split(" ")
for(let i = 0; i <= palavras.length-1;i++){
    if(palavras[i].includes("a") || palavras[i].includes("A")){
        console.log(palavras[i])
    }else if(palavras.includes("e") || palavras.includes("E")){
        console.log(palavras[i])
    }else if(palavras.includes("i") || palavras.includes("I")){
        console.log(palavras[i])
    }else if(palavras.includes("o") || palavras.includes("O")){
        console.log(palavras[i])
    }else if(palavras.includes("u") || palavras.includes("U")){
        console.log(palavras[i])
    }
}