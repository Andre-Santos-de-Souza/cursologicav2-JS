//Utilize um do while para calcular a soma de todos os números ímpares entre 1 e 100.

let i = 1
let soma = 0 
do{
    if(i % 2 !== 0){
        soma += i
    }
    i++
}while(i <= 100);
console.log(soma)