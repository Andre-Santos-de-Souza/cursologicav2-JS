//Dado o array const cores = ['vermelho', 'azul', 'verde', 'preto'];, verifique se o valor 'amarelo' está presente no array. Imprima no console "Cor não encontrada" caso não esteja, e "Cor encontrada" caso contrário.

let cores = ['vermelho', 'azul', 'verde', 'preto'];

if(cores.includes("amarelo")){
    console.log("Cor encontrada")
}else{
    console.log("Cor não encontrada")
}