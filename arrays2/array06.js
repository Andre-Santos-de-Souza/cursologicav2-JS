// O método reverse() é usado para inverter a ordem dos elementos de um array
let arr = [1,2,3,4];
// arr.reverse();
console.log(arr); 
console.log("----");


let j=0;
const soma = arr.reduce(function(acumulador, valorAtual,i,_arr){
    console.log("i:",i);
    console.log("j:",j++);
    console.log(_arr);
    console.log("acumulador:",acumulador, "---- atual:",valorAtual);
    return acumulador + valorAtual;
},0);
console.log(soma); 
/*A função acima utiliza o método reduce para somar todos os elementos de um array arr. Aqui está um resumo do que cada parte faz:
1-reduce: Percorre todos os elementos do array, acumulando um valor que é retornado no final.
2-Callback (function(acumulador, valorAtual, i, _arr)):
acumulador: O valor acumulado até o momento.
valorAtual: O elemento atual do array.
i: O índice do elemento atual.
_arr: O array original.
3-Corpo da função:
Exibe no console os índices (i), a variável auxiliar (j), o array original (_arr), o acumulador e o valor atual.
Soma o valor atual ao acumulador e retorna o resultado.
4-0 (valor inicial do acumulador): Especifica que o acumulador começa com 0. */
console.log("----");

const nomes = ['Daniel', 'Maria', 'Joana', 'João'];
let nomesPorOrdem = nomes.reduce(function(nomes,nomeAtual){
    let primeiraLetra = nomeAtual[0];
    if(nomes[primeiraLetra]){
        nomes[primeiraLetra]++
    }else{
        nomes[primeiraLetra] = 1;
    }
    return nomes;
},{})
console.log(nomesPorOrdem);
