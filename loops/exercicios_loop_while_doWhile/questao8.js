//Utilize um do while para imprimir todos os números que são divisíveis por 4 entre 1 e 50.

let i = 1
do{
    if(i % 4 === 0){
        console.log(i)
    }
    i++
}while(i <= 50)