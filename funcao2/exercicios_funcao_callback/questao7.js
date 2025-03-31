//Crie uma função buscarNome que aceite uma lista de nomes e um callback. O callback deve procurar um nome específico na lista e retornar se encontrou ou não.

function buscarNome(arrNomes, callback){
    return callback(arrNomes)
}

function encontrarNome(arrNomes){
    return arrNomes.includes("Lucas")
}

const arrNomes = ["André", "João", "Lucas"]
console.log(buscarNome(arrNomes,encontrarNome))