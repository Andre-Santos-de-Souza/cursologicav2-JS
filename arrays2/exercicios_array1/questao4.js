// Considere uma lista de tarefas com a estrutura abaixo. Verifique se todas as tarefas têm a propriedade concluida como true.

const tarefas = [
    { titulo: "Estudar", concluida: true },
    { titulo: "Treinar", concluida: true },
    { titulo: "Ler livro", concluida: true }
];

const listaTarefas = tarefas.every(function(elemento){
    return elemento.concluida === true
})

console.log(listaTarefas)