//Verifique se existe algum aluno com nota menor que 5 utilizando um loop for e imprima o resultado.

const alunos = [
    {nome:"André",  idade: 16, nota: 10},
    {nome:"João",  idade: 16, nota: 9.5},
    {nome:"Maria",  idade: 16, nota: 4.9}
]

alunos.push({nome:"Joana",  idade: 16, nota: 7})

for(let i = 0; i<alunos.length;i++){
    if(alunos[i].nota < 5){
        console.log(alunos[i])
    }
}