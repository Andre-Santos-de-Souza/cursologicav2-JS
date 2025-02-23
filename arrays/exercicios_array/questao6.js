//Crie um array idades com [15, 22, 30, 17, 19]. Filtre apenas as idades maiores ou iguais a 18 e exiba o novo array.

const idades = [15,22,30,17,19]
const ida =idades.filter(function(ida){
    return ida >= 18
})
console.log(ida)