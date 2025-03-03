//Crie uma função calculo que recebe dois números e uma função matemática (soma, multiplicar etc.), e retorna o resultado da função passada.

function soma(n1,n2){
    return n1+n2
}
function multiplicar(n1,n2){
    return n1*n2
}

function subtrair(n1,n2){
    return n1-n2
}

function dividir(n1,n2){
    return n1/n2
}

function calculo(n1,n2,operacao){
   return operacao(n1,n2)
}


console.log(calculo(4, 5, soma)); 
console.log(calculo(4, 5, multiplicar));
console.log(calculo(4, 5, subtrair));
console.log(calculo(4, 5, dividir));