// Procurando por nome
// Dado o array de objetos alunos, encontre o primeiro aluno com nome igual a "Carlos"

const alunos = [
    { nome: "Ana", idade: 21 },
    { nome: "Carlos", idade: 25 },
    { nome: "João", idade: 19 },
];

const resultado = alunos.find(elemento => elemento.nome === "Carlos") 

console.log(resultado)