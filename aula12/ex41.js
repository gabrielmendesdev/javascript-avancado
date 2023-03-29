function somaTudo(...valores) {
    return valores.reduce((soma, valor) => {
        return soma + valor
    }, 0)
}

console.log(somaTudo(1))
console.log(somaTudo(1,2))
console.log(somaTudo(1,2,3))