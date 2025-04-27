//Crie uma função contemPalavra que verifique se uma palavra fornecida como argumento está presente em uma lista de palavras. Utilize o método includes e retorne true se a palavra estiver na lista, e false caso contrário.

function contemPalavra(palavra, arr){
    if(arr.includes(palavra)){
        console.log("true")
    }else{
        console.log("false")
    }
}
let arrayPalavras = ["Horizonte","Melodia","Enigma", "Brisa", "Serenidade"]

contemPalavra("Enigma",arrayPalavras)