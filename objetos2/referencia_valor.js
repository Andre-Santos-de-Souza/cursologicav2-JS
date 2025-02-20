let x = [10]
let y = {n: 10}

function mudaX(x){
    x.push(11)
    console.log("X interno", x)
}
mudaX(x)
console.log("X externo", x)

function mudaY(obj){
    obj.n++
}
mudaY(y)
console.log(y)