//Crie um objeto endereco dentro do objeto pessoa com as propriedades rua e numero.

const pessoa = {
    nome: "André",
    idade: 21,
}
pessoa["cidade"] = "São Paulo"
delete pessoa.idade
pessoa["falar"] = function(falar){
    return falar
}
pessoa.falar = "Olá, mundo!"

pessoa.endereco = {
    rua: "Rua do bobos",
    numero: 166
}

for(let pess in pessoa){
    console.log(pess,":",pessoa[pess])
}