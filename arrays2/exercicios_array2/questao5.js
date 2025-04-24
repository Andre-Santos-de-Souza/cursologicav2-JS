// Pessoa maior de idade
// Use .find() para encontrar a primeira pessoa com idade maior ou igual a 18:

const pessoas = [
    { nome: "Júlia", idade: 15 },
    { nome: "Marcos", idade: 17 },
    { nome: "Fernanda", idade: 19 },
  ];

console.log(pessoas.find(function(el){
    return el.idade >= 18
}))