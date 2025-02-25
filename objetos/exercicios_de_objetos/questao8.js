//Percorra o objeto carro usando um for...in e exiba cada propriedade no console.

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022
}

for(let car in carro){
    console.log(`${car}: ${carro[car]}`)
}