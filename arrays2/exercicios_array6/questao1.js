/* 
O que é o reduce?
O método reduce é uma função de array em JavaScript que serve para reduzir (ou transformar) todos os elementos de um array a um único valor — esse valor pode ser um número, uma string, um objeto, um array, etc.

Sintaxe básica
array.reduce(callback, valorInicial)
callback: é a função que será executada em cada elemento do array.
valorInicial: (opcional) é o valor inicial que será usado na primeira chamada do callback.

A callback recebe 4 parâmetros:
function callback(acumulador, valorAtual, indice, array) { ... }
acumulador: Valor retornado da última execução do callback (ou o valor inicial, se fornecido)
valorAtual: O item atual do array sendo processado
indice: O índice do elemento atual
array: O array origina

Como o reduce funciona passo a passo?
const numeros = [1, 2, 3, 4];
const soma = numeros.reduce(function(acumulador, valorAtual) {
  return acumulador + valorAtual;
}, 0);
Passo a passo:
Primeira chamada: acumulador = 0, valorAtual = 1 → retorna 0 + 1 = 1
Segunda chamada: acumulador = 1, valorAtual = 2 → retorna 1 + 2 = 3
Terceira chamada: acumulador = 3, valorAtual = 3 → retorna 3 + 3 = 6
Quarta chamada: acumulador = 6, valorAtual = 4 → retorna 6 + 4 = 10
*/

// Dado o array abaixo, use reduce para somar todos os números.
const numeros = [5, 10, 15, 20];

const somar = numeros.reduce(function(acumulador, valorAtual){
    return acumulador += valorAtual
},0)

console.log(somar)