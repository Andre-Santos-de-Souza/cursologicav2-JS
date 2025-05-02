const pedidos = [
    { produto: "Pizza", quantidade: 2 },
    { produto: "Hambúrguer", quantidade: 1 },
    { produto: "Pizza", quantidade: 3 },
    { produto: "Refrigerante", quantidade: 5 }
  ];
  // Use reduce para gerar um objeto com o total de cada produto.
  // Resultado esperado: { Pizza: 5, Hambúrguer: 1, Refrigerante: 5 }

const resultado = pedidos.reduce(function(acumulador,valorAtual, i ,array){
    acumulador[valorAtual.produto] = valorAtual.quantidade
    return acumulador
},{})
console.log(resultado)