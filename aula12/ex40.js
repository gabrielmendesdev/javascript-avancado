//arguments

function somaTudo() {
    let soma = 0
    for(let i = 0; i < arguments.length; i++) {
        soma += arguments[i]
    }
    console.log(soma)
}
somaTudo(1)
somaTudo(1, 7)
somaTudo(1, 7, 9)