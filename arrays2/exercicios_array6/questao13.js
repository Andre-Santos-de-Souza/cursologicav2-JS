// Use reduce para criar um objeto onde cada chave é o curso e o valor é um array com os nomes dos alunos.
const alunos = [
    { nome: "Lucas", curso: "TI" },
    { nome: "Marina", curso: "Engenharia" },
    { nome: "Carlos", curso: "TI" },
    { nome: "Amanda", curso: "Administração" }
  ];
  
const resultado = alunos.reduce(function(acumulador,valorAtual, i ,array){
    if(!acumulador[valorAtual.curso]){
        acumulador[valorAtual.curso] = []
    }
    acumulador[valorAtual.curso].push(valorAtual.nome)
    return acumulador
}, {})
console.log(resultado)