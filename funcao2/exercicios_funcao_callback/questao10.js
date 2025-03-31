//Crie uma função obterTemperatura que aceite uma cidade e um callback. O callback deve simular a obtenção da temperatura da cidade e retornar um valor aleatório entre 15 e 35 graus Celsius.

function obterTemperatura(cidade, callback) {
    let temperatura = Math.floor(Math.random() * (35 - 15 + 1)) + 15;
    callback(temperatura);
}

obterTemperatura("São Paulo", function(temp) {
    console.log(`A temperatura em São Paulo é ${temp}°C`);
});