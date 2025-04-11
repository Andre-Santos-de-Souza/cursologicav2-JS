console.log(teste("sadfasfda"))

function teste(str){
    console.log("Function expression teste", str)
    return "Fn expression" + str
}

// const testeArrow = (str) =>{
//     console.log("Arrow function testeArrow", str)
//     return "Fn arrow - " + str
// }

// const testeArrow = str =>{
//     console.log("Arrow function testeArrow", str)
//     return "Fn arrow - " + str
// }

// const testeArrow = str => "Fn arrow - " + str

const testeArrow = (str,n) => "Fn arrow - " + str

const t1 = testeArrow("parametro para arrow fn",10)
console.log(t1)

// const testeArrow2 = () => {
//     console.log("testeAroow2 chamado")
//     return {
//         foo: "bar"
//     }
// }

const testeArrow2 = () => ({
    foo: "bar"
})

const t2 = testeArrow2()
console.log(t2)
console.log(t2.foo)
console.log(t2["foo"])