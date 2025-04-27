// Crie uma lista de números let numbers = [10, 20, 30, 40, 50]. Use o indexOf para encontrar o índice do número 40 na lista. Se o número não existir, imprima uma mensagem dizendo "Número não encontrado".

let numbers = [10, 20, 30, 40, 50];
let index = numbers.indexOf(40);

if (index !== -1) {
    console.log(`O número 40 está no índice: ${index}`);
} else {
    console.log("Número não encontrado");
}