let numero = 1234567.890

/*
O método .toFixed(2) é usado em JavaScript para formatar um número com um número fixo de casas decimais.
Ele arredonda o número para duas casas decimais e retorna uma string com o valor formatado.
*/
console.log(numero.toFixed(2))
console.log(typeof numero.toFixed(2))

/*
O método toPrecision(n) em JavaScript formata um número para ter exatamente n dígitos significativos. Ele retorna uma string representando o número arredondado conforme necessário.
Se o número for muito grande ou muito pequeno, ele pode ser convertido para notação científica.
*/
console.log(numero.toPrecision(7))
console.log(typeof numero.toPrecision(7))
console.log((123).toPrecision(7))

numero = 12345
/*
O método toExponential(digits) em JavaScript converte um número em notação científica (exponencial) como uma string.
O parâmetro digits (opcional) define quantas casas decimais exibir.
O retorno é uma string representando o número em formato x.xxxxe+y.
*/
console.log(numero.toExponential(4))// "1.2345e+4"
console.log(numero.toExponential())


numero = 15

/*
O método toString(radix) converte um número em uma string, podendo representar esse número em diferentes bases numéricas.
No caso de numero.toString(2), o 2 significa que o número será convertido para a base binária.
Se fosse numero.toString(16), ele seria convertido para hexadecimal.
*/
console.log(numero.toString(2))
console.log(typeof numero.toString(2))
console.log((0).toString(2))
console.log((1).toString(2))
console.log((2).toString(2))
console.log((3).toString(2))
console.log((4).toString(2))
console.log((5).toString(2))
console.log((6).toString(2))
console.log((7).toString(2))
console.log((8).toString(2))
console.log((15).toString(16))
console.log((16).toString(16))


numero = 123456.789
/*
O método toLocaleString() em JavaScript formata um número de acordo com a localidade do usuário, aplicando separadores de milhar, casas decimais e outras configurações regionais.
*/
console.log(numero.toLocaleString())
console.log(numero.toLocaleString("pt-BR"))
/*
Esse código formata o número como uma moeda brasileira (Real - BRL), aplicando a formatação regional correta.
O style: "currency" indica que o número deve ser tratado como moeda, e currency: "BRL" define que será em reais.
*/
console.log(numero.toLocaleString("pt-BR", {style: "currency", currency:"BRL"}))
console.log(numero.toLocaleString("pt-PT", {style: "currency", currency:"EUR"}))


console.log(Number.MAX_VALUE, Number.MIN_VALUE)


let numeroAsString = "3.456"
//O isNaN(valor) verifica se um valor não é um número (NaN - Not a Number). Ele retorna true se o valor não puder ser convertido para um número e false caso contrário.
console.log(isNaN(numeroAsString))
console.log(numeroAsString, typeof numeroAsString, parseFloat(numeroAsString))
console.log(isNaN("123")); // false (pois "123" pode ser convertido para número)
console.log(isNaN("abc")); // true (pois "abc" não pode ser convertido para número)
console.log(isNaN(10));    // false (10 já é um número)
console.log(isNaN(NaN));   // true (NaN é "Not a Number")