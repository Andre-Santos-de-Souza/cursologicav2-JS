// Crie um do while que conte de 1 até 100, mas pule os números múltiplos de 5.

let i = 1
do{
    if(i % 5 !== 0){
        console.log(i)
    }
    i++
}while(i <= 100)