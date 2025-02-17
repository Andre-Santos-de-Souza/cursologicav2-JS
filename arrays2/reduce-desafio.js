const numeros = [1,3,4,1,4,5,3,5,8,9];
let numerosUnicos = numeros.reduce(function(acumulador,atual){
    acumulador.push(atual);
    const uniqueArray = [...new Set(acumulador)];
    return uniqueArray;

},[]);
console.log(numeros);
console.log(numerosUnicos);