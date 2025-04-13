//Use o map() para transformar esse array em outro com mensagens como:

// "Maior de idade" se for 18 anos ou mais;

// "Menor de idade" caso contrário.

const idades = [15, 22, 30, 17, 19];

const idade = idades.map(function(elemento){
    return (elemento>=18) ? `Maior de idade` : "Menor de idade"
})
console.log(idade)