//Crie uma função chamada analisaNumero que recebe um número e chama internamente ehPar e dobro, retornando um texto formatado.

function analisaNumero(n1){

    function ehPar(n1){
       if(n1%2===0){
            return `par`
       }
    }
    function dobro(n1){
        return n1*2
    }

    return `O número ${n1} é ${ehPar(n1)} e seu dobro é ${dobro(n1)}`
}

console.log(analisaNumero(6)); 
// Esperado: "O número 6 é par e seu dobro é 12."