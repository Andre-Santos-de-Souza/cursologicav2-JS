// Transforme a string em array e use reduce para contar as letras.
const texto = "banana";
const contagem = texto.split('').reduce((acumulador, letra) => {
    acumulador[letra] = (acumulador[letra] || 0) + 1;
    return acumulador;
}, {});

console.log(contagem); 