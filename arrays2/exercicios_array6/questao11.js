// Use reduce para transformar o array em um objeto onde a chave é o id e o valor é o nome.
// Resultado esperado: { 1: "Ana", 2: "João", 3: "Maria" }
const usuarios = [
    { id: 1, nome: "Ana" },
    { id: 2, nome: "João" },
    { id: 3, nome: "Maria" }
];

const resultado = usuarios.reduce(function(acumulador,valorAtual,i,array){
    let id = parseInt(valorAtual.id)
    acumulador[id] = valorAtual.nome

    return acumulador
},{})
console.log(resultado)