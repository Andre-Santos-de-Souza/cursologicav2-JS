//Crie uma função verificarIdade que aceite uma idade e um callback. O callback deve verificar se a idade é maior de 18 e retornar "Maior de idade" ou "Menor de idade".

function verificarIdade(idade, callback){
    return callback(idade)
}
function maiorOuMenorIdade(idade){
    if(idade > 18){
        return `"Maior de idade"`
    }else{
        return `"Menor de idade"`
    }
}

console.log(verificarIdade(12, maiorOuMenorIdade))
console.log(verificarIdade(19, maiorOuMenorIdade))