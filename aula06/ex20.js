let chapeuSeletor = function(bruxo) {
    let casas = ['Grifinória', 'Sonserina', 'Corvinal', 'Lufa-Lufa']
    let casa = casas[Math.floor(Math.random() * casas.length)]

    console.log(`Bruxo: ${bruxo} "Casa: ${casa}`)
}

let bruxos = ['Harry', 'Hermione', 'Rony']
let iterador = bruxos[Symbol.iterator]()
let proximo = iterador.next()
do {
    let bruxo = proximo.value
    chapeuSeletor(bruxo)
    proximo = iterador.next()
} while (!proximo.done)   