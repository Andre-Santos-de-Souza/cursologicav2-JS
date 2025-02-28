function formatarNome(nomeCompleto){
    //O método split(" ") em JavaScript divide uma string em um array de substrings, usando um espaço (" ") como delimitador. No seu exemplo, a variável nomeCompleto é dividida em partes sempre que há um espaço, e o resultado é armazenado em nomeAsArray.
    let nomeAsArray = nomeCompleto.split(" ")
    if(nomeAsArray.length ===1){
        return nomeCompleto
    }
    let primeiroNome = nomeAsArray.shift()
    return nomeAsArray.join(" ") + ", "+ primeiroNome

}
console.log(formatarNome("Daniel")) //["Daniel"]
console.log(formatarNome("Daniel Morales"))//["Morales", "Daniel"]
console.log(formatarNome("Daniel Tapias Morales"))//["Tapias", "Morales", "Daniel"]