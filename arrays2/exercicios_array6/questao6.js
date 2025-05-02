/*
Transformar esse array em um objeto onde cada categoria seja uma chave, e os valores sejam arrays com os produtos dessa categoria.
{
  Eletrônico: [
    { nome: "Notebook", categoria: "Eletrônico" },
    { nome: "Tablet", categoria: "Eletrônico" }
  ],
  Móvel: [
    { nome: "Cadeira", categoria: "Móvel" },
    { nome: "Sofá", categoria: "Móvel" }
  ]
}
*/

const produtos = [
    { nome: "Notebook", categoria: "Eletrônico" },
    { nome: "Cadeira", categoria: "Móvel" },
    { nome: "Tablet", categoria: "Eletrônico" },
    { nome: "Sofá", categoria: "Móvel" }
];

const agrupado = produtos.reduce(function(acumulador, valorAtual,i,array){
  if(!acumulador[valorAtual.categoria]){
    acumulador[valorAtual.categoria] = []
  }
  acumulador[valorAtual.categoria].push(valorAtual)
  return acumulador
},{})
console.log(agrupado)