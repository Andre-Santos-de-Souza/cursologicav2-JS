//Exiba os primeiros 10 termos da sequência de Fibonacci usando um laço for.
let a = 0
let b = 1
let t
for(let i = 2; i < 10;i++){
    temp = a + b;
    console.log(temp);
    a = b;
    b = temp;
}