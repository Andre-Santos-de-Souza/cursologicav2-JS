/*Em JavaScript, closure (ou fechamento) é um conceito que acontece quando uma função "lembra" do escopo no qual ela foi criada, mesmo depois desse escopo ter sido finalizado.

Em outras palavras:
Uma closure permite que uma função interna acesse:

Variáveis da função externa onde ela foi definida;

Parâmetros dessa função externa;

Mesmo após a função externa ter sido executada.*/

const teste = (function(n){
    // let n =10
    return function testeInterno(){
        console.log("testeInterno chamado ", ++n)
        return "retorno de testeInterno " + n
    }
})(10)

let str = teste()
teste()
teste()
let str2 = teste()
console.log(str)
console.log(str2)