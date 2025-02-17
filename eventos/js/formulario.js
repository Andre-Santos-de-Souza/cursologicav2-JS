(function(){
    "use strict"
    const txtTitulo = document.getElementById("txtTitulo")
    const btn = document.getElementById("btn")
    const formCadastro = document.querySelector(".formCadastro")

    formCadastro.addEventListener("submit", function(e){
        if(!txtTitulo.value){
            showErrorMessage("Preencha todos os campos", function(){
                /*focus(): Coloca o cursor no campo especificado, permitindo que o usuário interaja diretamente com ele. No exemplo, o cursor será colocado no campo txtTitulo para o usuário preencher o título.*/
                txtTitulo.focus()
            })
            /*preventDefault(): Impede o comportamento padrão do evento que está sendo tratado. No caso, evita que o formulário seja enviado antes que todos os campos obrigatórios sejam preenchidos.*/
            e.preventDefault()
        }
    })

    const feedbackMessage = document.getElementById("feedbackMessage")
    const feedbackMessageCloseBtn = feedbackMessage.getElementsByTagName("button")[0]

    function showErrorMessage(msg,cb){
        /*
        O classList é uma propriedade de elementos no DOM usada para manipular classes CSS de maneira simples e eficiente. Ele retorna um objeto DOMTokenList que fornece métodos para adicionar, remover, alternar e verificar a presença de classes em um elemento HTML.
        Principais métodos:
        add(): Adiciona uma ou mais classes ao elemento.
        remove(): Remove uma ou mais classes do elemento.
        toggle(): Adiciona a classe se não existir ou a remove se já estiver presente.
        contains(): Verifica se o elemento possui uma classe específica.
        replace(): Substitui uma classe existente por outra.
        */
        feedbackMessage.classList.add("show")
        feedbackMessage.getElementsByTagName("p")[0].textContent = msg

        feedbackMessageCloseBtn.focus()

        function hideErrorMessage(){
            feedbackMessage.classList.remove("show")
            feedbackMessageCloseBtn.removeEventListener("click",hideErrorMessage)
            feedbackMessageCloseBtn.removeEventListener("keyup", pressedKeyboardOnBtn)
            if(typeof cb === "function"){
                cb()
            }
        }

        function pressedKeyboardOnBtn(e){
            console.log(e.keyCode)
            console.log(e.key)
            console.log(e)

            if(e.keyCode === 27){
                hideErrorMessage()
            }
        }

        feedbackMessageCloseBtn.addEventListener("click",hideErrorMessage)

        /*O evento keyup é acionado quando uma tecla é liberada após ser pressionada. Ele é frequentemente usado para detectar quando o usuário terminou de pressionar uma tecla, após a tecla ter sido solta.
        O evento keyup está sendo registrado para o botão feedbackMessageCloseBtn. Quando o usuário libera uma tecla enquanto o botão tem o foco (como no caso de um campo de texto ou botão clicável), a função pressedKeyboardOnBtn será chamada. Isso é útil para realizar ações como fechar um modal ou enviar um formulário quando o usuário pressionar e liberar uma tecla (como a tecla Enter ou Esc).
        */
        feedbackMessageCloseBtn.addEventListener("keyup", pressedKeyboardOnBtn)
    }

    const txtDescricao = document.getElementById("txtDescricao")
    const contadorContainer = document.getElementById("contador")
    const resta = contadorContainer.getElementsByTagName("span")[0]
    const maxima = txtDescricao.maxLength
    mostrarNumero(maxima)

    contadorContainer.removeAttribute("style")

    function checkLength(){
        /* O this dentro da função refere-se ao elemento HTML que disparou o evento, que no caso é o txtDescricao. Isso acontece porque no contexto de um manipulador de eventos, o this aponta automaticamente para o elemento ao qual o evento está vinculado.*/
        let numeroLetrasDigitadas = this.value.length
        let caractersRestantes = parseInt(maxima) - parseInt(numeroLetrasDigitadas)
        mostrarNumero(caractersRestantes)
    }
    function mostrarNumero(n){
        resta.textContent = n
    }
    txtDescricao.addEventListener("input", checkLength)

    btn.disabled = true

    const chkAceito = document.getElementById("chkAceito")
    /*
    O evento "change" no JavaScript é acionado quando o valor de um elemento de formulário (como <input>, <select>, ou <textarea>) é alterado e a alteração é confirmada, geralmente ao perder o foco.
    No caso de uma checkbox (chkAceito), o evento "change" é disparado sempre que o estado da checkbox muda, ou seja, quando ela é marcada ou desmarcada.*/
    chkAceito.addEventListener("change", function(){
        btn.disabled = !this.checked
    })
})()