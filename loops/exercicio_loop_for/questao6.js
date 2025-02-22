// Peça ao usuário para inserir uma palavra e exiba a palavra ao contrário utilizando um for.

let str = "André"
let invertida = "";
for (let i = str.length - 1; i >= 0; i--) {
    invertida += str[i];
}


console.log(invertida)