
// function init(){
//     let isValid = true
//     console.log("init modal", isValid)
// }
// init()
(function(win, doc){
    "use strict"
    let isValid = true
    win.alert("Ola mundo")
    console.log("modal", isValid)

    function init(){
        console.log("init do modal")
    }
    init()
})(window, document)