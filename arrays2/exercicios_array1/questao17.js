//Use o map() para criar um novo array com os nomes todos em letras maiúsculas.

const nomes = ["ana", "joão", "maria"];

const letraMaiuscula = nomes.map(function(elemento,i,arr){
    return elemento.toLocaleUpperCase()
})

console.log(letraMaiuscula)