//Crie um construtor chamado Livro com titulo, autor e paginas. Crie um método descricao() que diga: "O livro [titulo] foi escrito por [autor] e tem [paginas] páginas."

function Livro(titulo, autor, paginas){
    this.titulo =titulo
    this.autor =autor
    this.paginas =paginas
    this.descricao = function(){
        return `O livro ${this.titulo} foi escrito por ${this.autor} e tem ${this.paginas} páginas.`
    }
}
const livro1 = new Livro("Dom Casmurro", "Machado de Assis", 256)
console.log(livro1.descricao())