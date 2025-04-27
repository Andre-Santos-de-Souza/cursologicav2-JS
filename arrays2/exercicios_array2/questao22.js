//Crie uma função verificarNumero que receba um número e um array de números. Utilize o método includes para verificar se o número está presente no array e retorne uma mensagem adequada.

function verificarNumero(n,arr){
    if(arr.includes(n)){
        console.log("Número encontrado")
    }else{
        console.log("Número não encontrado")
    }
}
let array = [1,2,3,4,5,6]
verificarNumero(5,array)