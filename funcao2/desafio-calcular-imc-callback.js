
try{
   function calcularImc(peso, altura, callback){
    let imc = peso / (altura*altura)
    if (typeof callback === 'function') {
        return callback(imc);
    } else {
        return imc;
    }
   }

   function classificaImc(imc){
    if (imc <= 16.9) {
        return `Muito abaixo do peso`;
    } else if (imc <= 18.4) {
        return `Abaixo do peso`;
    } else if (imc <= 24.9) {
        return `Peso normal`;
    } else if (imc <= 29.9) {
        return `Sobrepeso`;
    } else if (imc <= 34.9) {
        return `Obesidade grau 1`;
    } else if (imc <= 39.9) {
        return `Obesidade grau 2`;
    } else if (imc >= 40) {
        return `Obesidade grau 3`;
    } else {
        return `Valor inválido`;
    }
   }
   console.log(calcularImc(60, 1.65))
   console.log(calcularImc(60, 1.65, classificaImc))
   
}catch(e){
    console.log(e.message);
}