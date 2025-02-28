function formatarNome(nomeCompleto){
    let nome = nomeCompleto.split(" ")
    let tamanhoDoNome = nome.length
    if(tamanhoDoNome === 1){
        return nome.join(" ")
    }else{
        let sobrenome = nomeCompleto.split(" ").slice(1);
        let sobrenomeInvertido = sobrenome;
        return `${sobrenomeInvertido.join(" ")}, ${nome[0]}`;
    }
}
console.log(formatarNome("Daniel")) //Daniel
console.log(formatarNome("Daniel Morales"))//Morales, Daniel
console.log(formatarNome("Daniel Tapias Morales"))//Tapias Morales, Daniel