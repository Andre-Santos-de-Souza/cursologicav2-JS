//Ordene o array de alunos pela idade, do mais novo para o mais velho, usando um loop. Imprima o array após a ordenação.

const alunos = [
    { nome: "André", idade: 16, nota: 10 },
    { nome: "João", idade: 18, nota: 9.5 },
    { nome: "Maria", idade: 17, nota: 10 },
];

alunos.push({ nome: "Joana", idade: 20, nota: 7 });

for (let i = 0; i < alunos.length; i++) {
    for (let j = i + 1; j < alunos.length; j++) {
        if (alunos[i].idade > alunos[j].idade) {
            let temp = alunos[i];
            alunos[i] = alunos[j];
            alunos[j] = temp;
        }
    }
}

console.log(alunos);
