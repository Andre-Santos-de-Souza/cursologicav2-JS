//Faça uma função chamada calculoComplexo, que recebe três números e dentro dela chama soma e multiplicar para calcular (a + b) * c.

function calculoComplexo(a,b,c){
    function soma(n1,n2,n3){
        let somar = (n1+n2)
        function multiplicar(somar, n3){
            return somar*n3
        }
        return multiplicar(somar,n3)
    }
    
    return soma(a,b,c)
}
console.log(calculoComplexo(2, 3, 4)); // Esperado: 20

console.log("----------------------------------------")

function calculoComplexo(a,b,c){
    function soma(n1,n2,n3){
        let somar = (n1+n2)
        return multiplicar(somar,n3)
    }
    function multiplicar(somar, n3){
        return somar*n3
    }
    
    return soma(a,b,c)
}


console.log(calculoComplexo(2, 3, 4)); // Esperado: 20