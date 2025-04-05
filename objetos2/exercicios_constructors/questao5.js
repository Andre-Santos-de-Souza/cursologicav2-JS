//Crie um objeto construtor chamado Aluno com nome, curso, e notas (array). Adicione um método media() que retorne a média das notas.

function Aluno(nome, curso, notas){
    this.nome = nome
    this.curso = curso
    this.notas = notas
    this.media = function(){
        let soma = 0
        for(let i = 0; i < this.notas.length;i++){
            soma += this.notas[i]
        }
        return soma / this.notas.length
    }
}
const aluno1 = new Aluno("André","Sistemas de Informação",[10,10,10])
console.log(aluno1.nome)
console.log(aluno1.curso)
console.log(aluno1.notas)
console.log("Média das notas: ",aluno1.media())