//Crie uma função validarSenha que recebe uma senha e, dentro dela, tenha uma arrow function forte que verifica se a senha tem mais de 8 caracteres e contém pelo menos um número.

const validarSenha = (senha) => {
    const forte = (s) => {
        for(let i = 0; i < s.length;i++){
            if(s.length > 8 && /\d/.test(s)){
                return `Senha forte`
            }else{
                return `Senha fraca`
            }
        }
    }
    return forte(senha)
}

console.log(validarSenha("and1"))
console.log(validarSenha("and1sant12"))