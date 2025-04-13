//Dado o array de idades, crie um novo array contendo apenas as pessoas maiores de idade (18 anos ou mais).

const idades = [15, 22, 17, 30, 19, 12, 45];

const maioreDeIdade = idades.filter(function(elemento){
    return elemento >= 18
})

console.log(maioreDeIdade)