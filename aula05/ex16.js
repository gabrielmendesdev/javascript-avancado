//Princípio .reduce
let numeros = [1,2,3,4,5]

let soma = numeros.reduce(function(somaAux, numero){
    return somaAux + numero;
}, 0)

console.log(soma)