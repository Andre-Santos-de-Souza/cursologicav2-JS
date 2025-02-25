//Remova a propriedade idade do objeto pessoa.

const pessoa = {
    nome: "André",
    idade: 21,
}
pessoa["cidade"] = "São Paulo"
delete pessoa.idade

console.log(pessoa)