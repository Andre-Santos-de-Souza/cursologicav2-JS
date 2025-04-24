// Evento no mês de maio
// Dado um array de eventos, encontre o primeiro evento que acontece em maio (mes: "maio"):

const eventos = [
    { nome: "Carnaval", mes: "fevereiro" },
    { nome: "Festa Junina", mes: "junho" },
    { nome: "Conferência Tech", mes: "maio" },
  ];

console.log(eventos.find(function(elemento){
    return elemento.mes === "maio"
}))