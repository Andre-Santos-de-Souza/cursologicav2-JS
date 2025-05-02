 // Use reduce para contar a quantidade de itens por categoria.

const produtos = [
    { nome: "Notebook", categoria: "Eletrônico" },
    { nome: "Cadeira", categoria: "Móvel" },
    { nome: "Tablet", categoria: "Eletrônico" },
    { nome: "Sofá", categoria: "Móvel" }
];

const qtdCategoria = produtos.reduce(function(acumulador, valorAtual,i,arr){
    const categoria = valorAtual.categoria;

    if (!acumulador[categoria]) {
    acumulador[categoria] = 0; 
    }

    acumulador[categoria]++; 
    return acumulador;
},{})
console.log(qtdCategoria)