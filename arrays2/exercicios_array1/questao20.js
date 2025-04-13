//Use o map() para criar um novo array com os seguintes conceitos baseados nas notas:

// 9 ou 10: "A"

// 7 ou 8: "B"

// 5 ou 6: "C"

// abaixo de 5: "D"
const notas = [6, 8, 5, 10, 9];

const notas2 = notas.map(function(elemento){
    if(elemento === 9 || elemento === 10){
        return `A`
    }else if(elemento === 7 || elemento === 8){
        return `B`
    }else if(elemento === 5 || elemento === 6){
        return `C`
    }else if(elemento < 5){
        return `D`
    }
})

console.log(notas2)