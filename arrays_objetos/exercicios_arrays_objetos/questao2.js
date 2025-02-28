//Adicione um novo aluno ao array criado no exercício anterior. O novo aluno deve ter nome, idade e nota. Imprima o array completo depois de adicionar o aluno.

const alunos = [
    {nome:"André",  idade: 16, nota: 10},
    {nome:"João",  idade: 16, nota: 9.5},
    {nome:"Maria",  idade: 16, nota: 10}
]

alunos.push({nome:"Joana",  idade: 16, nota: 8})
console.log(alunos)