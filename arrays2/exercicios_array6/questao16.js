const clientes = [
    { nome: "Alice", pontos: 850 },
    { nome: "Bruno", pontos: 1250 },
    { nome: "Camila", pontos: 1020 },
    { nome: "Daniel", pontos: 400 }
  ];
  // Use reduce para retornar um array com os nomes dos clientes com mais de 1000 pontos.
  // Resultado esperado: ["Bruno", "Camila"]

const resultado = clientes.reduce(function(acumulador,valorAtual,i,array){
    if(valorAtual.pontos > 1000){
        acumulador.push(valorAtual.nome)
    }
    return acumulador
},[])
console.log(resultado)