(function(){
    window.addEventListener("scroll", positionImage)

    const dataParalaxContainer = [...document.querySelectorAll("[data-paralax]")]

    function isGettingOut(container){
        return container.getBoundingClientRect().top <= 0
    }

    function getNewposition(c){
        const v = parseFloat(c.getAttribute("data-p-velocity")) || .5
        return c.getBoundingClientRect().top * v * -1
    }

    function positionImage(){
        dataParalaxContainer.forEach(c =>{
            /*Em JavaScript, o método getComputedStyle serve para obter os estilos CSS finais aplicados a um elemento na página, após todas as regras de CSS terem sido aplicadas, incluindo:

            CSS externo, interno e inline

            Estilos herdados

            Estilos computados pelo navegador (ex.: valores resolvidos como auto ou em convertidos para px) 
            <div id="caixa" style="color: red; font-size: 20px;">Texto</div>
            Exemplo:
            <script>
            const caixa = document.getElementById('caixa');
            const estilos = window.getComputedStyle(caixa);
            console.log(estilos.color); // Ex: "rgb(255, 0, 0)"
            console.log(estilos.fontSize); // "20px"
            </script>
            */
            let originalPositionY = getComputedStyle(c).backgroundPositionY
            let originalPositionX = getComputedStyle(c).backgroundPositionX

            console.log(originalPositionX, originalPositionY)

            if(isGettingOut(c)){
                c.style.backgroundPosition = `${originalPositionX} ${getNewposition(c)}px` 
            }else{
                c.style.backgroundPosition = `${originalPositionX} 0px`
            }
        })
    }
    positionImage()
})()