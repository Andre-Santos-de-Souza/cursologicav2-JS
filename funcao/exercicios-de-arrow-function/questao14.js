//Crie uma função infoUsuario que recebe nome e idade, e dentro dela, crie uma arrow function mensagem que retorna "Nome: [nome], Idade: [idade]".

const infoUsuario = (nome,idade) => {
    const mensagem = (n,i) =>{
        return `"Nome: ${n}, Idade: ${i}"`
    }
    return mensagem(nome,idade);
}

console.log(infoUsuario("André Santos", 21))