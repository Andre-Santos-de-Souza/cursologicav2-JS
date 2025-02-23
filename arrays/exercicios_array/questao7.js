//Crie um array dobro com [2, 4, 6, 8]. Multiplique cada número por 2 e exiba o novo array.

const dobro = [2, 4, 6, 8]
const arrayDobro = []
for(dob of dobro){
    arrayDobro.push(dob*2)
}
console.log(arrayDobro)