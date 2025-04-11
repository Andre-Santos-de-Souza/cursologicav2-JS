const str = "global string"
function teste(str){
    console.log("------------ this")
    console.log(this)
    console.log(str)

    
    setTimeout(() => {
        console.log("------------")
        console.log(this)
    }, 2000)
}

teste("parametro")

const teste2 = () => {
    console.log("arrow function")
    console.log(this)
}

const obj = {
    foo: "bar",
    teste,
    teste2
}
obj.teste()
// obj.teste2()

