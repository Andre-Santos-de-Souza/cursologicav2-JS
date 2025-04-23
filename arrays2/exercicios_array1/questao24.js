//Dado o array de cores, use forEach para exibir frases como:
// A cor na posição 0 é vermelho

const cores = ['vermelho', 'azul', 'verde', 'amarelo'];

const c = cores.forEach(function(elemento, indice){
    console.log(`A cor na posição ${indice} é ${elemento}`)
})