let str1 = "Minha String Bacanuda"

//O método replace em JavaScript substitui a primeira ocorrência de um valor dentro de uma string por outro valor.
console.log(str1.replace("i", "o"))
console.log(str1)

/*
/i/ → Procura a letra "i" no texto.
g (global) → Substitui todas as ocorrências de "i" no texto, e não apenas a primeira.
*/
console.log(str1.replace(/i/g, "o"))
console.log(str1)

//O método indexOf em JavaScript busca a primeira ocorrência de uma substring dentro de uma string. Se encontrar, retorna o índice da primeira letra da substring; caso contrário, retorna -1.
console.log(str1.indexOf("string"))
console.log(str1.indexOf("stringaa")) 

//O método lastIndexOf() em JavaScript retorna a última posição (índice) em que um determinado valor aparece em uma string. Se o valor não for encontrado, ele retorna -1.
console.log(str1.lastIndexOf("i"))
console.log(str1.lastIndexOf("iaaa"))

//O método includes() em JavaScript verifica se uma string contém uma determinada substring. Ele retorna true se encontrar a substring e false caso contrário.
console.log(str1.includes("minha"))
console.log(str1.indexOf("minha"))
console.log(str1.indexOf("minhaa") >= 0)

/* 
O método slice(início, fim) em JavaScript retorna uma fatia (substring) da string original, sem modificá-la.
início: índice onde a extração começa (inclusivo).
fim: índice onde a extração termina (exclusivo).
*/
console.log(str1.slice(2, 7))
console.log(str1.slice(2))
console.log(str1.slice(-5, -2))
console.log(str1.slice(8, 1))// retorna uma string vazia

//O método substring(início, fim) em JavaScript retorna uma parte da string original, começando no índice início e indo até o índice fim (mas sem incluir o caractere nesse índice).
console.log(str1.substring(2, 5))
console.log(str1.substring(2))
console.log(str1.substring(-5,-2)) // retorna uma string vazia
console.log(str1.substring(8,1)) 

//O método toUpperCase() em JavaScript converte todos os caracteres de uma string para letras maiúsculas e retorna uma nova string, sem modificar a original.
console.log(str1.toUpperCase())
//O método toLowerCase() em JavaScript converte todos os caracteres de uma string para minúsculas.
console.log(str1.toLowerCase())
console.log(str1)

let strAsObj = new String("minha string como objeto")
console.log(strAsObj)
//O método valueOf() retorna o valor primitivo de um objeto. Ele é útil para converter objetos em tipos simples, como números ou strings.
//O valueOf() retorna o valor que está armazenado dentro do objeto. Por exemplo, se você tiver um objeto que encapsula um número ou uma string, ele retorna esse número ou string.
console.log(strAsObj.valueOf())
/*
O método toString() em JavaScript é utilizado para converter um objeto em uma representação de string. Quando você chama strAsObj.toString(), ele tenta retornar uma string que representa o conteúdo do objeto strAsObj. A implementação padrão de toString() retorna algo como [object Object], mas, se o objeto for uma instância de uma classe personalizada, você pode sobrescrever esse método para retornar uma string mais significativa.
*/
console.log(strAsObj.toString())
console.log("----------------------------")

str1 = "      "+str1+"         "
console.log(str1)
//O método trim() em JavaScript é usado para remover os espaços em branco do início e do final de uma string. Ele não altera os espaços no meio da string.
console.log(str1.trim())
//O método trimEnd() em JavaScript remove todos os espaços em branco (ou outros caracteres de controle) do final de uma string, mas mantém os espaços no início. Ele não altera a string original, mas retorna uma nova string com os espaços removidos no final.
console.log(str1.trimEnd())
//O trimStart() é um método em JavaScript que remove os espaços em branco (ou outros caracteres definidos) do início de uma string. Ele não altera os espaços no final da string, apenas no começo.
console.log(str1.trimStart())
console.log(str1)

str1 = "0123456789"
console.log(str1.padStart(20))
//O método padStart() em JavaScript é usado para preencher o início de uma string com um valor específico até que ela atinja um comprimento desejado. No exemplo str1.padStart(20, "*"), ele vai adicionar asteriscos (*) no início de str1 até que o comprimento total da string seja 20 caracteres. Se str1 já tiver 20 ou mais caracteres, ela será retornada sem modificações.
console.log(str1.padStart(20,"*"))
console.log(str1.padEnd(20))
//O método padEnd() em JavaScript é usado para preencher uma string com caracteres adicionais até que ela atinja um comprimento especificado. Ele adiciona os caracteres desejados (como no exemplo, o asterisco *) ao final da string, até que ela tenha o comprimento necessário.
console.log(str1.padEnd(20,"*").length)
console.log(str1)

let telefone1 = "91234-2345" //"9****-**45"
let telefone2 = "1234-2345" //"1***-**45"
function mascararTelefone(numero){
   let hifemPosicao = numero.indexOf("-")
   let numeroInicio = numero.slice(0, hifemPosicao)
   let numeroFinal = numero.slice(hifemPosicao+1)
   let doisUltimosnumeros = numeroFinal.slice(-2)
   return `${numeroInicio[0].padEnd(numeroInicio.length, "*")}-${doisUltimosnumeros.padStart(numeroFinal.length,"*")}`
}
console.log(mascararTelefone(telefone1))
console.log(mascararTelefone(telefone2))

let str2 = "Hoje é Sábado"
//O método startsWith() é utilizado para verificar se uma string começa com os caracteres especificados. Ele retorna true se a string começar com a sequência fornecida, e false caso contrário.
console.log(str2.startsWith("Hoj",0))
//O método endsWith() em JavaScript verifica se uma string termina com os caracteres de outra string, retornando true ou false.
console.log(str2.endsWith("Sábado",13))

let str3 = "abcdefgh"
//tring. O argumento passado para charAt() é o índice da posição do caractere, sendo que o índice começa em 0. No exemplo str3.charAt(1), ele retorna o caractere presente na posição 1 da string str3.
console.log(str3.charAt(1))
console.log(str3[1])
//O método charCodeAt() retorna o valor Unicode (código de ponto) do caractere em uma posição específica de uma string. Por exemplo, str3.charCodeAt(0) retornaria o valor Unicode do primeiro caractere da string str3.
console.log(str3.charCodeAt(0))
console.log(str3.charCodeAt(1))