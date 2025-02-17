// Use push() para adicionar tarefas ao final da lista.
// Use pop() para remover a última tarefa.
// Use shift() para remover a primeira tarefa.
// Use unshift() para adicionar uma tarefa ao início da lista.

const listaDeTarefasEstudos = []
listaDeTarefasEstudos.push("Planejamento","Estudo Teórico","Prática")
console.log(listaDeTarefasEstudos)
listaDeTarefasEstudos.unshift("Revisão e Acompanhamento","Complementos","Gestão do Tempo")
console.log(listaDeTarefasEstudos)
listaDeTarefasEstudos.pop()
console.log(listaDeTarefasEstudos)
listaDeTarefasEstudos.shift()
console.log(listaDeTarefasEstudos)