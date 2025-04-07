//Dado o array const palavras = ["sol", "lua", "constelação", "estrela", "céu"];, use some para verificar se alguma palavra tem mais de 10 letras.

const palavras = ["sol", "lua", "constelação", "estrela", "céu"];

const palavraMaiorQueDez = palavras.some(function(elemento){
    return elemento.length > 10
})

console.log(palavraMaiorQueDez)