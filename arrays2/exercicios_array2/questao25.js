//Dado o array const numeros = [10, 20, 30, 40, 50];, verifique se o valor 60 existe no array e, em seguida, imprima "Valor encontrado" se estiver presente e "Valor não encontrado" caso contrário.

const numeros = [10, 20, 30, 40, 50];

if(numeros.includes(60)){
    console.log("Valor encontrado")
}else{
    console.log("Valor não encontrado")
}