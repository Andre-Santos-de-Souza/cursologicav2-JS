//Adicione um método chamado falar() ao objeto pessoa que retorna "Olá, mundo!".

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

for(let pess in pessoa){
    console.log(`${pess}: ${pessoa[pess]}`)
}