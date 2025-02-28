// Altere a nota do primeiro aluno para 9. Imprima o array de alunos após a alteração.
const alunos = [
    {nome:"André",  idade: 16, nota: 10},
    {nome:"João",  idade: 16, nota: 9.5},
    {nome:"Maria",  idade: 16, nota: 10}
]

alunos.push({nome:"Joana",  idade: 16, nota: 7})

alunos[0].nota = 9

console.log(alunos)