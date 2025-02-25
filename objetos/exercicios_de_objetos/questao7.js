//Verifique se a propriedade cor existe no objeto carro.

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022
}

if("cor" in carro){
    console.log("Existe a chave 'cor' no objeto.")
}else{
    console.log("Não existe a chave 'cor' no objeto.")
}