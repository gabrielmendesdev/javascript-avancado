// funções de seta ? pra mim ela só tem uma função, apontar!

//função no ECMAScript 5
let boasVindas = function(nome) {
    return `Seja bem-vindo ${nome}`
}

console.log(boasVindas("Felipe"))

//Arrow function
let boasVindas1 = (nome) => {
    return `Seja bem-vindo ${nome}`
}

console.log(boasVindas1("Felipe"))

//Em casos em que a função só retorna uma linha, podemos indica-la sem o "return", apenas apontando o resultado
let boasVindas2 = (nome) => `Seja bem-vindo ${nome}`

console.log(boasVindas2("Felipe"))