const funcionarios = [
    { nome: "Bruna", salario: 3500 },
    { nome: "Carlos", salario: 4200 },
    { nome: "Juliana", salario: 3000 }
  ];
  // Use reduce para somar os salários de todos os funcionários.

const somar = funcionarios.reduce(function(acumulador, valorAtual){
    acumulador += valorAtual.salario
    return acumulador
}, 0)

console.log(somar)