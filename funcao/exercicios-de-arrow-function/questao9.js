//Crie uma arrow function chamada contadorVogais que recebe uma string e retorna a quantidade de vogais nela (a, e, i, o, u).


const contadorVogais = (str) => {
    let contadorV = 0
    for(let i = 0; i < str.length;i++){
        if(str[i] === "A" || str[i] === "a"){
            contadorV += 1
        }else if(str[i] === "e" || str[i] === "E"){
            contadorV += 1
        }else if(str[i] === "I" || str[i] === "i"){
            contadorV += 1
        }else if(str[i] === "o" || str[i] === "O"){
            contadorV += 1
        }else if(str[i] === "U" || str[i] === "u"){
            contadorV += 1
        }
    }
    return `Quantidade de vogais = ${contadorV}`;
}

console.log(contadorVogais("Bom diaaaa"))