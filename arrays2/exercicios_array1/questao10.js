//Dado o array const valores = [2, 11, 18, 20, 33];, use some para verificar se existe algum múltiplo de 5 no array.

const valores = [2, 11, 18, 20, 33];

const multiploDeCinco = valores.some(function(elemento){
    return elemento % 5 === 0
});

console.log(multiploDeCinco)
