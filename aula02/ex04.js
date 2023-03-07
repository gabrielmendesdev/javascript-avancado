//Quando não estiver no modo estrito, irá apontar para o objeto global, ou seja, (Global)
function thisNaoEstrito() {
    console.log(this)
}

//Em modo estrito, o valor de this permanece seja qual for o definido ao entrar no contexto de execução, assim, no caso a seguir, this por padrão será indefinido (undefined)
function thisEstrito() {
    'use strict'; console.log(this)
}
