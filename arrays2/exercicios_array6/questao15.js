const candidatos = [
    { nome: "Paulo", habilidades: ["JavaScript", "React"] },
    { nome: "Fernanda", habilidades: ["HTML", "CSS", "React"] },
    { nome: "Eduardo", habilidades: ["Python", "Django"] }
  ];
  // Use reduce para gerar um array com todas as habilidades, sem repetições.
  // Resultado esperado: ["JavaScript", "React", "HTML", "CSS", "Python", "Django"]

const resultado = candidatos.reduce(function(acumulador,valorAtual){
    valorAtual.habilidades.forEach(habilidades => {
        if(!acumulador.includes(habilidades)){
            acumulador.push(habilidades)
        }
    })
    return acumulador
},[])

console.log(resultado)