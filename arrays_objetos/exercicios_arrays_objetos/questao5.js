//Crie uma função que recebe um array de objetos e retorna o nome do aluno mais velho. Teste a função com o array de alunos criado

const alunos = [
    { nome: "André", idade: 16, nota: 10 },
    { nome: "João", idade: 17, nota: 9.5 },
    { nome: "Maria", idade: 18, nota: 10 }
];

alunos.push({ nome: "Joana", idade: 20, nota: 7 });

function alunoMaisVelho(arr) {
    let maisVelho = arr[0]; 

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].idade > maisVelho.idade) {
            maisVelho = arr[i]; 
        }
    }

    return maisVelho;
}

console.log(alunoMaisVelho(alunos).nome);
