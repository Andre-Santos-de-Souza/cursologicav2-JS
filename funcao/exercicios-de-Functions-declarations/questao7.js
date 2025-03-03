//Escreva uma função mensagemCompleta que recebe um nome e chama internamente a função saudacao, retornando uma mensagem mais elaborada

function mensagemCompleta(nome){
    function saudacao(){
        return `"Olá, ${nome}! Seja bem-vindo!"`
    }
    return saudacao()
}

console.log(mensagemCompleta("Lucas")); 

// function saudacao(nome){
//     return `"Olá, ${nome}! Seja bem-vindo!"`
// }

// function msg(nome,suadacao){
//     return suadacao(nome)
// }
// console.log(msg("Lucas", saudacao))