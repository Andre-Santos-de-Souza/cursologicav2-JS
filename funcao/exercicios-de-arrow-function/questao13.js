//Crie uma função calcularArea que recebe base e altura e dentro dela tenha uma arrow function areaRetangulo que retorna base * altura.

const calcularArea = (base, altura) => {
    const areaRetangulo = (b,a) => {
        return b*a
    }

    return `${areaRetangulo(base, altura)}`;
}

console.log(calcularArea(5,4))