function fn(cb){
    console.log("Executar acao de callback")
    console.log(typeof cb)
    typeof cb === "function" && cb()
}
function callback(){
    console.log("Função passada por parâmetro")
}
fn(callback)

const obj ={
    callback
}
obj.callback()

function fn2(n1){
    return function(n2){
        return n1*n2
    }
}
const funcao2 = fn2(10)
const mult = funcao2(2)
console.log(mult+"a")

function fn3(){
    fn3.count++
    return function _fn3(){
        console.log("Funcao retornada por parametro")
    }
}
fn3.count = 0

const funcao3 = fn3()
const funcao3a = fn3()
const funcao3b = fn3()
funcao3()
console.log(fn3.count)