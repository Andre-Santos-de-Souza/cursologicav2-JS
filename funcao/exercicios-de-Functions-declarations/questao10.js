/*
Faça uma função avaliarNota que recebe uma nota e chama internamente outra função classificarNota para retornar uma classificação:
Menos de 5: "Ruim"
Entre 5 e 7: "Regular"
Acima de 7: "Bom"
*/

function avaliarNota(nota){

    function classificarNota(nota){
        if(nota < 5){
            return `Sua nota ${nota} é considerada Ruim.`
        }else if(nota >= 5 && nota <= 7){
            return `Sua nota ${nota} é considerada Regular.`
        }else{
            return `Sua nota ${nota} é considerada Bom.`
        }
    }
    return classificarNota(nota)
}


console.log(avaliarNota(8)); 