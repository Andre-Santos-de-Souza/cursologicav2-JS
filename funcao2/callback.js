const teste = function(cb){
    console.log("Função teste")
    if(typeof cb === "function"){
        cb(20)
    }
}

const fn = function(param){
    console.log("Função anonima de callback")
    console.log(param)
}

teste(fn)

// function fn(){
//     console.log("Função anonima de callback")
// }
// teste(fn)

// teste(function(){
//     console.log("Função anonima de callback")
// })