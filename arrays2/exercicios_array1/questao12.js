//Você tem o seguinte array de strings. Filtre apenas as palavras que começam com a letra "a" (minúscula).

const palavras = ["amor", "sol", "arte", "lua", "anjo", "vento"];

const comecaComA = palavras.filter(function(elemento){
    return elemento[0] === "a"
})

console.log(comecaComA)