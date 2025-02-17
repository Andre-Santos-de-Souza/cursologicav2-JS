//função auto-invocável
(function(){
    const nomeUsuario = "André";

    if(nomeUsuario){
        const topBarElemento = document.createElement("div")
        topBarElemento.className = "top-bar";
        topBarElemento.innerHTML = `<p>olá, <strong>${nomeUsuario}<strong></p>`;
        const elementoPai = document.querySelector(".hero")
        elementoPai.insertBefore(topBarElemento, elementoPai.firstElementChild)
        //Insere topBarElemento como o primeiro filho do elemento elementoPai.
        // O método insertBefore() insere um elemento antes de um elemento de referência, que neste caso é o primeiro filho (firstElementChild) de elementoPai.
    }
    
})()