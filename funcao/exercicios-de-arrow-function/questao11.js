//Crie uma função chamada operacoesMatematicas que recebe dois números e, dentro dela, crie e chame as funções soma, subtracao, multiplicacao e divisao (todas como arrow functions). A função principal deve imprimir os resultados dessas operações.

const operacoesMatematicas = (n1,n2) => {
    const soma = (a,b) => {
        return a+b
    }

    const subtracao = (a,b) => {
        return a-b
    }

    const multiplicacao = (a,b) => {
        return a*b
    }

    const divisao = (a,b) => {
        return a/b
    }

    return ` Soma = ${soma(n1,n2)}\n Subtração = ${subtracao(n1,n2)}\n Multiplicacao = ${multiplicacao(n1,n2)}\n Divisao = ${divisao(n1,n2)}\n`
    
}

console.log(operacoesMatematicas(10,2))
console.log(operacoesMatematicas(2,2))