
try{
    function calcularImc(peso, altura){
        if(peso < 0 || altura < 0){
            throw Error("Digite apenas números positivos");
        }else if(typeof peso === 'number' && typeof altura === 'number'){
            let imc = (peso / (altura * altura)).toFixed(2);
            let classificacao = classificarImc(imc);
            return `Seu IMC é ${imc}. Classificação: ${classificacao}`;
        }else {
            throw Error("Digite apenas números");
        }
        
    }
    function classificarImc(imc){
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
    console.log(calcularImc(60, 1.65));
}catch(e){
    console.log(e.message);
}