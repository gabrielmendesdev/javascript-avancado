//Função assincrona 

function funcaoAssincrona(arg, callback) {
    // faz request para um webservice
    //logica do algoritmo

    callback()

}

funcaoAssincrona('diego', () => {
    console.log('terminou a execução')
})