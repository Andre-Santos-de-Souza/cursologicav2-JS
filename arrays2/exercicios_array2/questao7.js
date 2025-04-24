// Escreva um código que encontre o índice do objeto em que o nome da pessoa seja "Maria". Caso não encontre, deve retornar -1.


let people = [
    { nome: "Maria", idade: 28 },
    { nome: "Maria", idade: 32 },
    { nome: "Pedro", idade: 19 }
];

console.log(people.findIndex(el => el.nome === "Maria"))