// 1 - inserir dado
localStorage.setItem("name", "André")

// 2 - restart sm perder dados

// 3 - resgatar item
const name = localStorage.getItem("name")
console.log(name)

// 4 - resgate de item que não existe
const lastName = localStorage.getItem("lastname")
console.log(lastName)

if(!lastName){
    console.log("Sem sobrenome!")
}

// 5 - remover item
localStorage.removeItem("name")

// 6 - limpar todos os itens
localStorage.setItem("a", 1)
localStorage.setItem("b", 1)
// console.log(typeof localStorage.getItem("a"))

// Limpar todos os dados que tem no localStorage
localStorage.clear()

// 7 - session storage
sessionStorage.setItem("number", 123)

// 8 - reinicair e perder dados

// resgatar item
const n = sessionStorage.getItem("number")
console.log(n)

sessionStorage.removeItem("number")

sessionStorage.clear()

// 9 - salvar objetos
const person = {
    name: "André",
    age: 1,
    job: "Programmer"
}
localStorage.setItem("perso", JSON.stringify(person))

const getPerson = localStorage.getItem("person")

console.log(getPerson)

const personobject = JSON.parse(getPerson)

console.log(typeof personobject)

console.log(personobject.job)
