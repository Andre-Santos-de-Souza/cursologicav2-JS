function latir(){
    
}

function miar(){
    console.log(this.name, "fala: miau")
}

const dog = {
    name: "rex",
    falar(){
        console.log(this.name, "fala: au au")
    },
    falar2(){
        console.log(this.name, "fala: au auuuu")
    }
}


const cat = {
    name: "mingal",
    falar(){
        miar.call(this)
    }
}
dog.falar()
dog.falar2()
cat.falar()
