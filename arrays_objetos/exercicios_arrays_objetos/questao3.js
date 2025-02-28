//Percorra o array de alunos e imprima os nomes de todos os alunos com nota maior que 7.
const alunos = [
    {nome:"André",  idade: 16, nota: 10},
    {nome:"João",  idade: 16, nota: 9.5},
    {nome:"Maria",  idade: 16, nota: 10}
]

alunos.push({nome:"Joana",  idade: 16, nota: 7})

for(let i = 0; i<alunos.length;i++){
    if(alunos[i].nota > 7){
        console.log(alunos[i].nome)
    }
}