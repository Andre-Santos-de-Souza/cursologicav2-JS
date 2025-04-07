//Use some para verificar se algum aluno tirou nota maior ou igual a 7 (aprovado).

const alunos = [
    { nome: "Ana", nota: 4 },
    { nome: "Bruno", nota: 5 },
    { nome: "Carlos", nota: 8 }
];

const notaMaior = alunos.some(function(elemento){
    return elemento.nota >= 7
});

console.log(notaMaior)