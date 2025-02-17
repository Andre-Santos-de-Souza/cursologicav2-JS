//função auto-invocável
(function(){
    const nomeUsuario = null;
    const elemento = document.querySelector(".top-bar p");
    if(nomeUsuario){
        elemento.innerHTML+= "<strong>"+nomeUsuario+"</strong>";
    }else{
        // elemento.parentElement.style.display = "none" //parentElement -> seleciona o pai
        // document.querySelector("body").children //children -> seleciona os filhos
        const elementoParaRemover = elemento.parentElement;
        elementoParaRemover.parentElement.removeChild(elementoParaRemover)//removeChild -> serve para remover o elemento filho
    }
    
})()