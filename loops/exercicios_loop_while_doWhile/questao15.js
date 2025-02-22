//Utilize um while para imprimir os números de 1 até 100, mas imprima "Fizz" para múltiplos de 3 e "Buzz" para múltiplos de 5.
let i = 1
while(i <= 100){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(`${i} - Fizz, Buzz`)
    }
    else if(i % 3 === 0){
        console.log(`${i} - Fizz`)
    }else if(i % 5 === 0){
        console.log(`${i} - Buzz`)
    }
    i++
}