//Valores padrões em funções

function imprimeNomeCompleto(nome, nomeDoMeio, sobrenome = '') {
    console.log(`${nome} ${nomeDoMeio} ${sobrenome}`)
}

imprimeNomeCompleto("Marcelo", "Santos")

/* Veja que apenas 2 parâmetros foram atribuidos a função,
porém como o sobrenome já estava com o valor de string vazia pré definida
o resultado não foi "undefined" e sim, a string vazia */